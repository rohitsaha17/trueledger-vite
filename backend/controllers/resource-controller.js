import Resource from "../models/resource.js";

// GET /api/resources — published only (public website)
export async function getPublished(req, res) {
  const items = await Resource.find({ published: true }).sort({ sort_order: 1, created_at: -1 });
  res.json(items);
}

// GET /api/resources/all — everything (admin panel)
export async function getAll(req, res) {
  const items = await Resource.find().sort({ sort_order: 1, created_at: -1 });
  res.json(items);
}

// POST /api/resources
export async function create(req, res) {
  const item = await Resource.create(req.body);
  res.status(201).json(item);
}

// PUT /api/resources/:id
export async function update(req, res) {
  delete req.body.id;
  delete req.body._id;
  const item = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ message: "Resource not found" });
  res.json(item);
}

// DELETE /api/resources/:id
export async function remove(req, res) {
  await Resource.findByIdAndDelete(req.params.id);
  res.json({ message: "Resource deleted" });
}
