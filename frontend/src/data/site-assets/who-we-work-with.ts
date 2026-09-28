import type { AssetPage } from "./types";

export const whoWeWorkWithAssets: AssetPage = {
  title: "Who We Work With",
  path: "/who-we-work-with",
  sections: [
    {
      title: "Hero banner",
      slots: [
        { key: "who-we-work-with.hero.video", label: "Hero background video", default: "/videos/about-hero-cinematic.mp4", kind: "video" },
        { key: "who-we-work-with.hero.video-poster", label: "Hero video poster (shown while the video loads)", default: "/images/posters/about-hero-cinematic.webp" },
        { key: "who-we-work-with.hero.fallback-image", label: "Hero still image behind the video (shown on slow connections)", default: "/images/posters/about-hero-cinematic.webp" },
      ],
    },
    {
      title: "Sector cards (blurred card backgrounds)",
      slots: [
        { key: "who-we-work-with.sectors.established-mid-size-businesses", label: "Established Mid-Size Businesses card background", default: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=60" },
        { key: "who-we-work-with.sectors.high-growth-startups", label: "High-Growth Startups card background", default: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60" },
        { key: "who-we-work-with.sectors.ecommerce-retail", label: "E-Commerce and Retail card background", default: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=60" },
        { key: "who-we-work-with.sectors.restaurants-supermarket-chains", label: "Restaurants and Supermarket Chains card background", default: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=60" },
        { key: "who-we-work-with.sectors.cpa-firms", label: "CPA Firms card background", default: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=60" },
      ],
    },
    {
      title: "Beyond sectors (dark band)",
      slots: [
        { key: "who-we-work-with.beyond-sectors.background", label: "\"Beyond sectors\" section background", default: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=60" },
      ],
    },
    {
      title: "Closing call-to-action",
      slots: [
        { key: "who-we-work-with.closing-cta.background", label: "Closing call-to-action background", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp" },
      ],
    },
  ],
};
