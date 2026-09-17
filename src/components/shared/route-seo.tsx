import { useLocation } from "react-router-dom";
import { seoForPath } from "@/lib/seo";
import { useSeo } from "@/hooks/use-seo";

/**
 * Renders nothing. Mounted once inside the public layout so every route
 * gets its registered title, description and canonical URL.
 *
 * Routes with no entry in the map (the /case-studies/:slug and
 * /resources/:slug detail pages) fall back to the site defaults plus a
 * canonical for the current path; those pages then call `useSeo`
 * themselves once their content has loaded.
 */
export function RouteSeo() {
  const { pathname } = useLocation();
  useSeo(seoForPath(pathname) ?? {});
  return null;
}
