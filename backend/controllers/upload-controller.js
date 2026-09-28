import mongoose from "mongoose";
import { Readable } from "node:stream";

// Uploaded files are stored in MongoDB (GridFS) so no separate file host is needed.
function bucket() {
  return new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: "uploads" });
}

const ALLOWED_TYPES = /^(image|video)\//;

// POST /api/uploads — admin only. Body is the raw file; Content-Type is its mime type
// and the X-Filename header carries the original name.
export async function upload(req, res) {
  const contentType = req.headers["content-type"] ?? "";
  if (!ALLOWED_TYPES.test(contentType)) {
    return res.status(400).json({ message: "Only image and video files can be uploaded" });
  }
  if (!Buffer.isBuffer(req.body) || req.body.length === 0) {
    return res.status(400).json({ message: "File is empty" });
  }

  const filename = decodeURIComponent(req.headers["x-filename"] ?? "upload");
  const stream = bucket().openUploadStream(filename, { metadata: { contentType } });

  await new Promise((resolve, reject) => {
    Readable.from(req.body).pipe(stream).on("finish", resolve).on("error", reject);
  });

  res.status(201).json({ url: `/api/uploads/${stream.id}` });
}

// GET /api/uploads/:id — public, streams the file back
export async function serve(req, res) {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(404).json({ message: "File not found" });
  }

  const id = new mongoose.Types.ObjectId(req.params.id);
  const file = await bucket().find({ _id: id }).next();
  if (!file) return res.status(404).json({ message: "File not found" });

  // Files are never modified in place (a replacement gets a new id), so cache hard.
  res.set({
    "Content-Type": file.metadata?.contentType ?? "application/octet-stream",
    "Cache-Control": "public, max-age=31536000, immutable",
    "Accept-Ranges": "bytes",
    // Stops an uploaded SVG from running script if opened directly
    "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; sandbox",
    "X-Content-Type-Options": "nosniff",
  });

  // Browsers request videos in byte ranges (Safari won't play them otherwise)
  const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range ?? "");
  if (range && (range[1] || range[2])) {
    const start = range[1] ? Number(range[1]) : Math.max(file.length - Number(range[2]), 0);
    const end = range[1] && range[2] ? Math.min(Number(range[2]), file.length - 1) : file.length - 1;
    if (start > end) {
      return res.status(416).set("Content-Range", `bytes */${file.length}`).end();
    }
    res.status(206).set({
      "Content-Range": `bytes ${start}-${end}/${file.length}`,
      "Content-Length": end - start + 1,
    });
    return bucket().openDownloadStream(id, { start, end: end + 1 }).pipe(res);
  }

  res.set("Content-Length", file.length);
  bucket().openDownloadStream(id).pipe(res);
}
