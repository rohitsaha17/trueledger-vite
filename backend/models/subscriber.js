import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
);

subscriberSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
    return ret;
  },
});

export default mongoose.model("Subscriber", subscriberSchema);
