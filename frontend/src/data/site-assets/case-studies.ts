import type { AssetPage } from "./types";

export const caseStudiesAssets: AssetPage = {
  title: "Case Studies",
  path: "/case-studies",
  sections: [
    {
      title: "Hero banner",
      slots: [
        { key: "case-studies.hero.video", label: "Hero background video", default: "/videos/case-studies-hero.mp4", kind: "video" },
        { key: "case-studies.hero.video-poster", label: "Hero video poster (shown while the video loads)", default: "/images/posters/case-studies-hero.webp" },
        { key: "case-studies.hero.fallback-image", label: "Hero still image behind the video (shown on slow connections)", default: "/images/posters/case-studies-hero.webp" },
      ],
    },
    {
      title: "Closing call-to-action",
      slots: [
        { key: "case-studies.closing-cta.background", label: "Closing call-to-action background", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp" },
      ],
    },
  ],
};
