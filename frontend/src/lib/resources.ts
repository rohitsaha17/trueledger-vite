import { api, resolveAssetUrl } from "@/lib/api";
import type { ResourceItem } from "@/types/database";

export const RESOURCE_CATEGORIES = [
  "WhitePaper",
  "Guide",
  "Video",
  "Blog Post",
  "Newsletter",
] as const;

export const RESOURCE_SERVICES = [
  "Accounting & Bookkeeping",
  "Tax Compliance & Advisory",
  "Business Advisory",
  "CPA Support",
  "Global Entity Setup",
] as const;

/** A resource card as the website renders it (urls already resolved). */
export interface Resource {
  id: string;
  title: string;
  category: string;
  service: string;
  link: string;
  /** Gated PDF: when set, cards ask for contact details before downloading it. */
  pdf?: string;
  cover?: string;
}

function toResource(item: ResourceItem): Resource {
  return {
    id: item.id,
    title: item.title,
    category: item.category,
    service: item.service,
    link: resolveAssetUrl(item.link || item.pdf),
    pdf: item.pdf ? resolveAssetUrl(item.pdf) : undefined,
    cover: item.cover ? resolveAssetUrl(item.cover) : undefined,
  };
}

// One request per page load, shared by the Resources page and every resource ticker
let request: Promise<Resource[]> | null = null;

export function fetchResources(): Promise<Resource[]> {
  request ??= api
    .get<ResourceItem[]>("/resources")
    .then((items) => items.map(toResource))
    .catch(() => {
      request = null;
      return [];
    });
  return request;
}

/** Cover photo for a resource card, falling back to the generic cover (Admin → Site Assets). */
export function coverFor(r: Resource, asset: (key: string) => string): string {
  return r.cover || asset("resources.covers.fallback");
}
