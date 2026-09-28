import mongoose from "mongoose";

// A card on the Resources page (whitepaper, guide, video, newsletter, blog link)
const resourceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true }, // WhitePaper | Guide | Video | Blog Post | Newsletter
    service: { type: String, default: "" },
    // Where the card opens (external page, video, or a PDF)
    link: { type: String, default: "" },
    // Set for gated whitepapers: the card asks for contact details before downloading this PDF
    pdf: { type: String, default: "" },
    cover: { type: String, default: "" },
    published: { type: Boolean, default: false },
    // Lower numbers show first
    sort_order: { type: Number, default: 0 },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
);

resourceSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
    return ret;
  },
});

export default mongoose.model("Resource", resourceSchema);
