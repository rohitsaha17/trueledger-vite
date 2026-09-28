import SiteAsset from "../models/site-asset.js";

// GET /api/site-assets — public, returns { [key]: url } for every overridden slot
export async function getAll(req, res) {
  const assets = await SiteAsset.find();
  res.json(Object.fromEntries(assets.map((a) => [a.key, a.url])));
}

// PUT /api/site-assets/:key — admin only, sets the override for one slot
export async function upsert(req, res) {
  const url = (req.body.url ?? "").trim();
  if (!url) return res.status(400).json({ message: "URL is required" });

  const asset = await SiteAsset.findOneAndUpdate(
    { key: req.params.key },
    { key: req.params.key, url },
    { upsert: true, new: true },
  );
  res.json(asset);
}

// DELETE /api/site-assets/:key — admin only, resets the slot to its default
export async function remove(req, res) {
  await SiteAsset.deleteOne({ key: req.params.key });
  res.json({ message: "Asset reset to default" });
}
