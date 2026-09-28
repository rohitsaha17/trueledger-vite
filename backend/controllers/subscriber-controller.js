import Subscriber from "../models/subscriber.js";

// POST /api/subscribers — public (newsletter form). Subscribing twice is a no-op.
export async function create(req, res) {
  const email = (req.body.email ?? "").toLowerCase();
  if (!email) return res.status(400).json({ message: "Email is required" });

  const subscriber = await Subscriber.findOneAndUpdate(
    { email },
    { email },
    { upsert: true, new: true },
  );
  res.status(201).json(subscriber);
}

// GET /api/subscribers — admin only
export async function getAll(req, res) {
  const items = await Subscriber.find().sort({ created_at: -1 });
  res.json(items);
}

// DELETE /api/subscribers/:id — admin only
export async function remove(req, res) {
  await Subscriber.findByIdAndDelete(req.params.id);
  res.json({ message: "Subscriber deleted" });
}
