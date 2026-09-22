import MediaItem from "../models/media-item.js";

// GET /api/media — published only (public website)
export async function getPublished(req, res) {
  const items = await MediaItem.find({ published: true }).sort({ created_at: -1 });
  res.json(items);
}

// GET /api/media/all — everything (admin panel)
export async function getAll(req, res) {
  const items = await MediaItem.find().sort({ created_at: -1 });
  res.json(items);
}

// POST /api/media
export async function create(req, res) {
  const item = await MediaItem.create(req.body);
  res.status(201).json(item);
}

// PUT /api/media/:id
export async function update(req, res) {
  delete req.body.id;
  delete req.body._id;
  const item = await MediaItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ message: "Media item not found" });
  res.json(item);
}

// DELETE /api/media/:id
export async function remove(req, res) {
  await MediaItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Media item deleted" });
}
