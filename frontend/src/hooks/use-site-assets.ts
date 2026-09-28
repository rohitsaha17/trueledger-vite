import { createContext, useCallback, useContext } from "react";
import { resolveAssetUrl } from "@/lib/api";
import { assetDefaults } from "@/data/site-assets";

/** key → url for every slot the admin has overridden */
export const SiteAssetsContext = createContext<Record<string, string>>({});

/** Returns a lookup for site image/video slots: admin override if set, else the default. */
export function useAssets() {
  const overrides = useContext(SiteAssetsContext);
  return useCallback(
    (key: string) => {
      const url = overrides[key] ?? assetDefaults[key];
      if (url === undefined) {
        if (import.meta.env.DEV) console.warn(`Unknown site asset key "${key}"`);
        return "";
      }
      return resolveAssetUrl(url);
    },
    [overrides],
  );
}

export function useAsset(key: string) {
  return useAssets()(key);
}
