import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applySeo, type SeoMeta } from "@/lib/seo";

/**
 * Applies per-route head metadata (title, description, canonical, Open
 * Graph / Twitter tags). Pass `null` while data is still loading so the
 * route defaults stay in place until there is something real to write.
 *
 * The metadata object is serialized for the dependency list, so callers
 * can pass an inline object without triggering an update every render.
 */
export function useSeo(meta: SeoMeta | null | undefined) {
  const { pathname } = useLocation();
  const serialized = JSON.stringify(meta ?? null);

  useEffect(() => {
    const parsed = JSON.parse(serialized) as SeoMeta | null;
    if (!parsed) return;
    applySeo({ path: pathname, ...parsed });
  }, [serialized, pathname]);
}
