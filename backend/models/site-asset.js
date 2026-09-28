import mongoose from "mongoose";

// An admin override for one image/video slot on the website.
// Slots without a document here fall back to the default baked into the frontend.
const siteAssetSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true },
    url: { type: String, required: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
);

siteAssetSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
    return ret;
  },
});

export default mongoose.model("SiteAsset", siteAssetSchema);
