import BlogPost from "../models/blog-post.js";

// GET /api/blog — published only (public website)
export async function getPublished(req, res) {
  const items = await BlogPost.find({ published: true }).sort({ created_at: -1 });
  res.json(items);
}

// GET /api/blog/all — everything (admin panel)
export async function getAll(req, res) {
  const items = await BlogPost.find().sort({ created_at: -1 });
  res.json(items);
}

// GET /api/blog/:slug
export async function getBySlug(req, res) {
  const item = await BlogPost.findOne({ slug: req.params.slug, published: true });
  if (!item) return res.status(404).json({ message: "Blog post not found" });
  res.json(item);
}

// POST /api/blog
export async function create(req, res) {
  const item = await BlogPost.create(req.body);
  res.status(201).json(item);
}

// PUT /api/blog/:id
export async function update(req, res) {
  delete req.body.id;
  delete req.body._id;
  const item = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ message: "Blog post not found" });
  res.json(item);
}

// DELETE /api/blog/:id
export async function remove(req, res) {
  await BlogPost.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog post deleted" });
}
