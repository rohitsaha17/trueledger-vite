import type { AssetPage } from "./types";

export const ecommerceAssets: AssetPage = {
  title: "Sector: E-commerce & Retail",
  path: "/sectors/ecommerce-retail",
  sections: [
    {
      title: "Hero",
      slots: [
        { key: "ecommerce-retail.hero.image", label: "Hero image (shown until the video loads)", default: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80" },
        { key: "ecommerce-retail.hero.video", label: "Hero background video", default: "https://videos.pexels.com/video-files/6774202/6774202-hd_1920_1080_25fps.mp4", kind: "video" },
      ],
    },
    {
      title: "Challenges",
      slots: [
        { key: "ecommerce-retail.challenges.background", label: "Challenges section background", default: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80" },
      ],
    },
    {
      title: "Testimonial",
      slots: [
        { key: "ecommerce-retail.testimonial.background", label: "Testimonial section background", default: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1920&q=80" },
      ],
    },
    {
      title: "Closing call-to-action",
      slots: [
        { key: "ecommerce-retail.cta.background", label: "Closing CTA background", default: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80" },
      ],
    },
  ],
};
