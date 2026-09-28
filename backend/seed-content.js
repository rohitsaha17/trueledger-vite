// Loads the case studies, resources and media events that used to be hardcoded in the frontend
// (seed-data/*.json) into MongoDB so they can be edited from the admin panel.
// Safe to re-run: existing entries (matched by slug / title) are left untouched.
import "dotenv/config";
import fs from "node:fs";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import CaseStudy from "./models/case-study.js";
import Resource from "./models/resource.js";
import MediaEvent from "./models/media-event.js";

const read = (file) => JSON.parse(fs.readFileSync(new URL(`./seed-data/${file}`, import.meta.url)));

await connectDB();

let added = 0;
for (const study of read("case-studies.json")) {
  const result = await CaseStudy.updateOne(
    { slug: study.slug },
    { $setOnInsert: study },
    { upsert: true },
  );
  added += result.upsertedCount;
}
console.log(`Case studies: ${added} added`);

added = 0;
for (const resource of read("resources.json")) {
  const result = await Resource.updateOne(
    { title: resource.title, category: resource.category },
    { $setOnInsert: resource },
    { upsert: true },
  );
  added += result.upsertedCount;
}
console.log(`Resources: ${added} added`);

added = 0;
for (const event of read("media-events.json")) {
  const result = await MediaEvent.updateOne(
    { slug: event.slug },
    { $setOnInsert: event },
    { upsert: true },
  );
  added += result.upsertedCount;
}
console.log(`Media events: ${added} added`);

await mongoose.disconnect();
