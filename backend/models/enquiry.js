import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    phone: { type: String, default: "" },
    company: { type: String, default: "" },
    service: { type: String, default: "" },
    message: { type: String, default: "" },
    // Which form it came from: contact | consultation | whitepaper
    source: { type: String, default: "contact" },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
);

enquirySchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
    return ret;
  },
});

export default mongoose.model("Enquiry", enquirySchema);
