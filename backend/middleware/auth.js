import jwt from "jsonwebtoken";
import Admin from "../models/admin.js";

// Blocks the request unless a valid admin token is sent in the Authorization header.
export async function auth(req, res, next) {
  const header = req.headers.authorization ?? "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!token) return res.status(401).json({ message: "Not authorized" });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(payload.id);
    if (!admin) return res.status(401).json({ message: "Not authorized" });
    req.admin = admin;
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}
