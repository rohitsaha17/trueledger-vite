// Creates (or resets) the admin login using ADMIN_EMAIL / ADMIN_PASSWORD from .env
import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { connectDB } from "./config/db.js";
import Admin from "./models/admin.js";

const email = (process.env.ADMIN_EMAIL ?? "").toLowerCase();
const password = process.env.ADMIN_PASSWORD ?? "";

if (!email || !password) {
  console.error("Set ADMIN_EMAIL and ADMIN_PASSWORD in backend/.env first");
  process.exit(1);
}

await connectDB();

const hashedPassword = await bcrypt.hash(password, 10);
await Admin.findOneAndUpdate(
  { email },
  { email, password: hashedPassword },
  { upsert: true },
);

console.log(`Admin ready: ${email}`);
await mongoose.disconnect();
