import type { AssetPage } from "./types";

export const hospitalityAssets: AssetPage = {
  title: "Sector: Hospitality & Restaurants",
  path: "/sectors/hospitality-restaurants",
  sections: [
    {
      title: "Hero",
      slots: [
        { key: "hospitality-restaurants.hero.image", label: "Hero image (shown until the video loads)", default: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80" },
        { key: "hospitality-restaurants.hero.video", label: "Hero background video", default: "https://videos.pexels.com/video-files/4253491/4253491-uhd_2560_1440_25fps.mp4", kind: "video" },
      ],
    },
    {
      title: "Challenges",
      slots: [
        { key: "hospitality-restaurants.challenges.background", label: "Challenges section background", default: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80" },
      ],
    },
    {
      title: "Case studies",
      slots: [
        { key: "hospitality-restaurants.case-studies.background", label: "Case studies section background", default: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1920&q=80" },
      ],
    },
    {
      title: "Testimonial",
      slots: [
        { key: "hospitality-restaurants.testimonial.background", label: "Testimonial section background", default: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80" },
      ],
    },
    {
      title: "Closing call-to-action",
      slots: [
        { key: "hospitality-restaurants.cta.background", label: "Closing CTA background", default: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80" },
      ],
    },
  ],
};
