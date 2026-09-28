import type { AssetPage } from "./types";

export const taxComplianceAssets: AssetPage = {
  title: "Service: Tax Compliance & Advisory",
  path: "/services/tax-compliance-advisory",
  sections: [
    {
      title: "Hero",
      slots: [
        { key: "tax-compliance-advisory.hero.image", label: "Hero background image (shown before the video loads)", default: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1920&q=80" },
        { key: "tax-compliance-advisory.hero.video", label: "Hero background video", default: "https://videos.pexels.com/video-files/6962707/6962707-hd_1920_1080_25fps.mp4", kind: "video" },
      ],
    },
    {
      title: "For Individuals & High Net Worth Clients",
      slots: [
        { key: "tax-compliance-advisory.individuals.background-video", label: "Section background video", default: "https://videos.pexels.com/video-files/7247815/7247815-hd_1920_1080_30fps.mp4", kind: "video" },
      ],
    },
    {
      title: "For Businesses & Business Owners",
      slots: [
        { key: "tax-compliance-advisory.businesses.background-video", label: "Section background video (dark section)", default: "https://videos.pexels.com/video-files/7552423/7552423-hd_1920_1080_25fps.mp4", kind: "video" },
      ],
    },
    {
      title: "Closing call-to-action",
      slots: [
        { key: "tax-compliance-advisory.closing-cta.background", label: "Closing call-to-action background", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp" },
      ],
    },
  ],
};
