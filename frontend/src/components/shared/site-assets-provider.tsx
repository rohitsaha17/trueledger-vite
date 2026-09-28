import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { SiteAssetsContext } from "@/hooks/use-site-assets";

const CACHE_KEY = "trueledger_site_assets";

// Last known overrides, so repeat visitors don't see the default flash before the fetch lands
function readCache(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

export function SiteAssetsProvider({ children }: { children: React.ReactNode }) {
  const [overrides, setOverrides] = useState(readCache);

  useEffect(() => {
    api
      .get<Record<string, string>>("/site-assets")
      .then((data) => {
        setOverrides(data);
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        } catch {
          // storage unavailable — the in-memory copy is enough
        }
      })
      .catch(() => {
        // API down — keep showing cached/default assets
      });
  }, []);

  return (
    <SiteAssetsContext.Provider value={overrides}>
      {children}
    </SiteAssetsContext.Provider>
  );
}
