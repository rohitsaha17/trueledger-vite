import type { AssetPage } from "./types";

export const aiSaasAssets: AssetPage = {
  title: "Sector: AI & SaaS Startups",
  path: "/sectors/ai-saas-startups",
  sections: [
    {
      title: "Hero",
      slots: [
        { key: "ai-saas-startups.hero.image", label: "Hero image (shown until the video loads)", default: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80" },
        { key: "ai-saas-startups.hero.video", label: "Hero background video", default: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4", kind: "video" },
      ],
    },
    {
      title: "Challenges founders face",
      slots: [
        { key: "ai-saas-startups.challenges.background", label: "Challenges section background", default: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80" },
      ],
    },
    {
      title: "Case studies",
      slots: [
        { key: "ai-saas-startups.case-studies.background", label: "Case studies section background", default: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80" },
      ],
    },
    {
      title: "Testimonial",
      slots: [
        { key: "ai-saas-startups.testimonial.background", label: "Testimonial section background", default: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80" },
      ],
    },
    {
      title: "Closing call-to-action",
      slots: [
        { key: "ai-saas-startups.cta.background", label: "Closing CTA background", default: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80" },
      ],
    },
  ],
};
