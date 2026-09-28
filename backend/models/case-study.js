import mongoose from "mongoose";

const caseStudySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    client_name: { type: String, default: "" },
    industry: { type: String, default: "" },
    // Tab on the Case Studies page, e.g. "Entity Setup"
    service: { type: String, default: "" },
    challenge: { type: String, default: "" },
    solution: { type: String, default: "" },
    results: { type: String, default: "" },
    featured_image: { type: String, default: "" },
    published: { type: Boolean, default: false },
    // Lower numbers show first
    sort_order: { type: Number, default: 0 },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
);

caseStudySchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
    return ret;
  },
});

export default mongoose.model("CaseStudy", caseStudySchema);
