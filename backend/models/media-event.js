import mongoose from "mongoose";

// One entry on the Media & Events page (a summit, webinar, article, podcast or video)
const mediaEventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    year: { type: String, required: true }, // e.g. "2026" — the page groups events by it
    date_label: { type: String, default: "" }, // shown as-is, e.g. "June 2026"
    kind: { type: String, required: true }, // Event | Webinar | Article | Podcast | Video
    description: { type: String, default: "" },
    images: { type: [String], default: [] },
    // Flyers/letters are portrait: shown uncropped instead of cover-cropped
    poster: { type: Boolean, default: false },
    video_url: { type: String, default: "" },
    doc_url: { type: String, default: "" },
    doc_label: { type: String, default: "" },
    published: { type: Boolean, default: false },
    // Lower numbers show first within a year
    sort_order: { type: Number, default: 0 },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
);

mediaEventSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
    return ret;
  },
});

export default mongoose.model("MediaEvent", mediaEventSchema);
