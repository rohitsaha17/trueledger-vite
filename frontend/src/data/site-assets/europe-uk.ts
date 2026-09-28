import type { AssetPage } from "./types";

export const europeUkAssets: AssetPage = {
  title: "Region: Europe & UK",
  path: "/regions/europe-uk",
  sections: [
    {
      title: "Hero banner",
      slots: [
        { key: "europe-uk.hero.video", label: "Hero background video", default: "https://videos.pexels.com/video-files/5765154/5765154-uhd_2560_1440_24fps.mp4", kind: "video" },
        { key: "europe-uk.hero.image", label: "Hero image (shown while the video loads, and as its poster)", default: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80" },
      ],
    },
    {
      title: "Leadership",
      slots: [
        { key: "europe-uk.leadership.aseem-chawla", label: "Leadership — Aseem Chawla photo", default: "/images/team/aseem-chawla.jpg" },
      ],
    },
  ],
};
