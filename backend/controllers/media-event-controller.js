import MediaEvent from "../models/media-event.js";

// Newest year first, then the admin's display order within the year
const ORDER = { year: -1, sort_order: 1, created_at: -1 };

// GET /api/media-events — published only (public website)
export async function getPublished(req, res) {
  const items = await MediaEvent.find({ published: true }).sort(ORDER);
  res.json(items);
}

// GET /api/media-events/all — everything (admin panel)
export async function getAll(req, res) {
  const items = await MediaEvent.find().sort(ORDER);
  res.json(items);
}

// POST /api/media-events
export async function create(req, res) {
  const item = await MediaEvent.create(req.body);
  res.status(201).json(item);
}

// PUT /api/media-events/:id
export async function update(req, res) {
  delete req.body.id;
  delete req.body._id;
  const item = await MediaEvent.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ message: "Media event not found" });
  res.json(item);
}

// DELETE /api/media-events/:id
export async function remove(req, res) {
  await MediaEvent.findByIdAndDelete(req.params.id);
  res.json({ message: "Media event deleted" });
}
