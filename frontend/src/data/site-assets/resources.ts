import type { AssetPage } from "./types";

export const resourcesAssets: AssetPage = {
  title: "Resources",
  path: "/resources",
  sections: [
    {
      title: "Hero",
      slots: [
        { key: "resources.hero.still", label: "Hero still image (shown behind the video while it loads)", default: "/images/posters/resources-hero.webp" },
        { key: "resources.hero.poster", label: "Hero video poster frame", default: "/images/posters/resources-hero.webp" },
        { key: "resources.hero.video", label: "Hero background video", default: "/videos/resources-hero.mp4", kind: "video" },
      ],
    },
    {
      title: "Resource cards — default cover (each resource's own cover is set in Admin → Resources)",
      slots: [
        { key: "resources.covers.fallback", label: "Default cover (used when a resource has no cover image)", default: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=70" },
      ],
    },
    {
      title: "Closing call-to-action",
      slots: [
        { key: "resources.cta.background", label: "Closing CTA background", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp" },
      ],
    },
  ],
};
