import mongoose from "mongoose";

const mediaItemSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    image_url: { type: String, required: true },
    category: { type: String, default: "" },
    published: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
);

mediaItemSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
    return ret;
  },
});

export default mongoose.model("MediaItem", mediaItemSchema);
