import type { AssetPage } from "./types";

export const apacAssets: AssetPage = {
  title: "Region: APAC",
  path: "/regions/apac",
  sections: [
    {
      title: "Hero banner",
      slots: [
        { key: "apac.hero.video", label: "Hero background video", default: "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4", kind: "video" },
        { key: "apac.hero.image", label: "Hero image (shown while the video loads, and as its poster)", default: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=80" },
      ],
    },
    {
      title: "Leadership",
      slots: [
        { key: "apac.leadership.hrithvik-raj", label: "Leadership — CA Hrithvik Raj photo", default: "/images/team/hrithvik-raj.jpg" },
      ],
    },
  ],
};
