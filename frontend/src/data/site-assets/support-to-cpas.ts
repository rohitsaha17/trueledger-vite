import type { AssetPage } from "./types";

export const supportToCpasAssets: AssetPage = {
  title: "Service: Support to CPAs",
  path: "/services/support-to-cpas",
  sections: [
    {
      title: "Hero",
      slots: [
        { key: "support-to-cpas.hero.image", label: "Hero background image (shown before the video loads)", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260623_031937_26d5554d-a1a9-4889-9e15-66a57de6358c_min.webp" },
        { key: "support-to-cpas.hero.video", label: "Hero background video", default: "https://videos.pexels.com/video-files/7578554/7578554-hd_1920_1080_30fps.mp4", kind: "video" },
      ],
    },
    {
      title: "How We Support Your Practice",
      slots: [
        { key: "support-to-cpas.how-we-support.background-video", label: "Section background video", default: "https://videos.pexels.com/video-files/3252858/3252858-hd_1920_1080_25fps.mp4", kind: "video" },
      ],
    },
    {
      title: "Whitepapers & Guides",
      slots: [
        { key: "support-to-cpas.whitepapers.position-for-cpa-firms", label: "Whitepaper card — TrueLedger's Position for CPA Firms", default: "/images/services/support-cpas.webp" },
        { key: "support-to-cpas.whitepapers.offshoring-readiness-checklist", label: "Whitepaper card — Offshoring Readiness Assessment Checklist", default: "/images/services/business-advisory.webp" },
      ],
    },
    {
      title: "Who We Work With (case studies)",
      slots: [
        { key: "support-to-cpas.case-studies.florida-cpa-peak-season", label: "Case study card — Florida CPA peak tax season", default: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" },
        { key: "support-to-cpas.case-studies.texas-cpa-real-estate", label: "Case study card — Texas CPA real estate portfolio", default: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" },
      ],
    },
    {
      title: "Closing call-to-action",
      slots: [
        { key: "support-to-cpas.closing-cta.background", label: "Closing call-to-action background", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp" },
      ],
    },
  ],
};
