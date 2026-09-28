import type { AssetPage } from "./types";

export const businessAdvisoryAssets: AssetPage = {
  title: "Service: Business Advisory",
  path: "/services/business-advisory",
  sections: [
    {
      title: "Hero",
      slots: [
        { key: "business-advisory.hero.image", label: "Hero background image (shown before the video loads)", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260623_031452_6a4a4264-852a-470c-bfbb-49796401a094_min.webp" },
        { key: "business-advisory.hero.video", label: "Hero background video", default: "https://videos.pexels.com/video-files/7552419/7552419-hd_1920_1080_25fps.mp4", kind: "video" },
      ],
    },
    {
      title: "Four Advisory Pillars",
      slots: [
        { key: "business-advisory.advisory-pillars.background", label: "Section background image", default: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" },
        { key: "business-advisory.advisory-pillars.strategic-business-advisory", label: "Card — Strategic & Business Advisory", default: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
        { key: "business-advisory.advisory-pillars.governance-controls-compliance", label: "Card — Governance, Controls & Compliance", default: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80" },
        { key: "business-advisory.advisory-pillars.capital-funding-readiness", label: "Card — Capital, Funding & Fundraising Readiness", default: "https://images.unsplash.com/photo-1553729459-uj1ef3fc8bde?auto=format&fit=crop&w=800&q=80" },
        { key: "business-advisory.advisory-pillars.finance-automation-technology", label: "Card — Finance Automation & Technology", default: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
      ],
    },
    {
      title: "Who Our Advisory Practice Is Built For",
      slots: [
        { key: "business-advisory.who-we-serve.center-logo", label: "Centre \"Your Advisor\" logo", default: "/logos/TrueLedger primary Logo.png" },
      ],
    },
    {
      title: "Closing call-to-action",
      slots: [
        { key: "business-advisory.closing-cta.background", label: "Closing call-to-action background", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp" },
      ],
    },
  ],
};
