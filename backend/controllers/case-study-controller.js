import CaseStudy from "../models/case-study.js";

// GET /api/case-studies — published only (public website)
export async function getPublished(req, res) {
  const items = await CaseStudy.find({ published: true }).sort({ created_at: -1 });
  res.json(items);
}

// GET /api/case-studies/all — everything (admin panel)
export async function getAll(req, res) {
  const items = await CaseStudy.find().sort({ created_at: -1 });
  res.json(items);
}

// GET /api/case-studies/:slug
export async function getBySlug(req, res) {
  const item = await CaseStudy.findOne({ slug: req.params.slug, published: true });
  if (!item) return res.status(404).json({ message: "Case study not found" });
  res.json(item);
}

// POST /api/case-studies
export async function create(req, res) {
  const item = await CaseStudy.create(req.body);
  res.status(201).json(item);
}

// PUT /api/case-studies/:id
export async function update(req, res) {
  delete req.body.id;
  delete req.body._id;
  const item = await CaseStudy.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ message: "Case study not found" });
  res.json(item);
}

// DELETE /api/case-studies/:id
export async function remove(req, res) {
  await CaseStudy.findByIdAndDelete(req.params.id);
  res.json({ message: "Case study deleted" });
}
