import type { AssetPage } from "./types";

export const northAmericaAssets: AssetPage = {
  title: "Region: North America",
  path: "/regions/north-america",
  sections: [
    {
      title: "Hero banner",
      slots: [
        { key: "north-america.hero.video", label: "Hero background video", default: "https://videos.pexels.com/video-files/4611396/4611396-uhd_2560_1440_25fps.mp4", kind: "video" },
        { key: "north-america.hero.image", label: "Hero image (shown while the video loads, and as its poster)", default: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80" },
      ],
    },
    {
      title: "Leadership",
      slots: [
        { key: "north-america.leadership.manish-aggarwal", label: "Leadership — CA Manish Aggarwal photo", default: "/images/team/manish-aggarwal.jpeg" },
      ],
    },
  ],
};
