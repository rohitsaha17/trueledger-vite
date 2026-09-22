import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/admin.js";

// POST /api/auth/login
export async function login(req, res) {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email: (email ?? "").toLowerCase() });
  if (!admin) return res.status(401).json({ message: "Invalid email or password" });

  const passwordMatches = await bcrypt.compare(password ?? "", admin.password);
  if (!passwordMatches) return res.status(401).json({ message: "Invalid email or password" });

  const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: "7d" });
  res.json({ token, admin });
}

// GET /api/auth/me — used by the admin route guard
export async function me(req, res) {
  res.json(req.admin);
}
