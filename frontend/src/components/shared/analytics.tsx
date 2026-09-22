import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackPageView } from "@/lib/analytics";

/**
 * Renders nothing. Mounted inside the public layout directly after
 * <RouteSeo /> so that the per-route document.title has already been written
 * by the time the page view is sent. Admin routes live outside that layout
 * and are deliberately never tracked.
 */
export function Analytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    initAnalytics();
    trackPageView(pathname + search);
  }, [pathname, search]);

  return null;
}
