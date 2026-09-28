import { mediaYears } from "@/data/media-events";
import type { AssetPage } from "./types";

/* One section per event that has photos, generated from the event list so new
   photos added to media-events.ts show up here automatically. */
export const mediaAssets: AssetPage = {
  title: "Media Gallery",
  path: "/media",
  sections: mediaYears
    .flatMap((y) => y.events)
    .filter((e) => e.images.length > 0)
    .map((e) => ({
      title: `Event — ${e.title} (${e.dateLabel})`,
      slots: e.images.map((src, i) => ({
        key: `media.events.${e.slug}.${i + 1}`,
        label: `Photo ${i + 1}`,
        default: src,
      })),
    })),
};
