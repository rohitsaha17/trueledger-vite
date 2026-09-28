import Enquiry from "../models/enquiry.js";

// POST /api/enquiries — public (contact form, consultation modal, whitepaper gate)
export async function create(req, res) {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: "Name and email are required" });

  const enquiry = await Enquiry.create(req.body);
  res.status(201).json(enquiry);
}

// GET /api/enquiries — admin only
export async function getAll(req, res) {
  const items = await Enquiry.find().sort({ created_at: -1 });
  res.json(items);
}

// DELETE /api/enquiries/:id — admin only
export async function remove(req, res) {
  await Enquiry.findByIdAndDelete(req.params.id);
  res.json({ message: "Enquiry deleted" });
}
