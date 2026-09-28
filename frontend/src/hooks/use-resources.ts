import { useEffect, useState } from "react";
import { fetchResources, type Resource } from "@/lib/resources";

/** Published resources from the admin panel (empty until loaded). */
export function useResources() {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    let active = true;
    fetchResources().then((items) => active && setResources(items));
    return () => {
      active = false;
    };
  }, []);

  return resources;
}

/** Resources filed under one service area, e.g. for a service page's ticker. */
export function useResourcesForService(service: string, limit = 8) {
  return useResources()
    .filter((r) => r.service === service)
    .slice(0, limit);
}
