import { api, resolveAssetUrl } from "@/lib/api";
import type { MediaEventItem } from "@/types/database";

export const MEDIA_EVENT_KINDS = [
  "Event",
  "Webinar",
  "Article",
  "Podcast",
  "Video",
] as const;

export type MediaEventKind = (typeof MEDIA_EVENT_KINDS)[number];

/** An event as the Media page renders it (urls already resolved). */
export interface MediaEvent {
  slug: string;
  title: string;
  dateLabel: string;
  kind: MediaEventKind;
  description: string;
  images: string[];
  /** Flyers/letters are portrait: show them uncropped instead of cover-cropped. */
  poster?: boolean;
  videoUrl?: string;
  docUrl?: string;
  docLabel?: string;
}

export interface MediaYear {
  year: string;
  events: MediaEvent[];
}

function toMediaEvent(item: MediaEventItem): MediaEvent {
  return {
    slug: item.slug,
    title: item.title,
    dateLabel: item.date_label,
    // Unknown kinds (typos from older data) fall back to the generic style
    kind: (MEDIA_EVENT_KINDS as readonly string[]).includes(item.kind)
      ? (item.kind as MediaEventKind)
      : "Event",
    description: item.description,
    images: item.images.map(resolveAssetUrl),
    poster: item.poster,
    videoUrl: item.video_url ? resolveAssetUrl(item.video_url) : undefined,
    docUrl: item.doc_url ? resolveAssetUrl(item.doc_url) : undefined,
    docLabel: item.doc_label || undefined,
  };
}

/** Published events grouped by year, newest year first (API returns them in display order). */
export async function fetchMediaYears(): Promise<MediaYear[]> {
  const items = await api.get<MediaEventItem[]>("/media-events");
  const years: MediaYear[] = [];
  for (const item of items) {
    let block = years.find((y) => y.year === item.year);
    if (!block) years.push((block = { year: item.year, events: [] }));
    block.events.push(toMediaEvent(item));
  }
  return years;
}
