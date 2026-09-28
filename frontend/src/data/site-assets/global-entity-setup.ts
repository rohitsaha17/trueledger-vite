import type { AssetPage } from "./types";

export const globalEntitySetupAssets: AssetPage = {
  title: "Service: Global Entity Setup",
  path: "/services/global-entity-setup",
  sections: [
    {
      title: "Hero",
      slots: [
        { key: "global-entity-setup.hero.image", label: "Hero background image (shown before the video loads)", default: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80" },
        { key: "global-entity-setup.hero.video", label: "Hero background video", default: "https://videos.pexels.com/video-files/4686756/4686756-hd_1920_1080_24fps.mp4", kind: "video" },
      ],
    },
    {
      title: "See How It Works",
      slots: [
        { key: "global-entity-setup.see-how-it-works.background-video", label: "Section background video (behind the embedded video)", default: "https://videos.pexels.com/video-files/8347237/8347237-hd_1920_1080_25fps.mp4", kind: "video" },
      ],
    },
    {
      title: "Who This Is For",
      slots: [
        { key: "global-entity-setup.who-this-is-for.background", label: "Section background (global network artwork)", default: "/images/backgrounds/global-network.webp" },
        { key: "global-entity-setup.who-this-is-for.international-founders", label: "Card — International Founders", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_210852_c03a1c7c-fa32-4ff0-87c5-12b4d98cf851_min.webp" },
        { key: "global-entity-setup.who-this-is-for.multi-state-businesses", label: "Card — Multi-State Businesses", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_210853_70276300-ab05-4493-83dc-7e167f6bcc04_min.webp" },
        { key: "global-entity-setup.who-this-is-for.growth-stage-startups", label: "Card — Growth-Stage Startups", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_210855_0d847833-42f5-4af2-8fc8-2de8266ec9f7_min.webp" },
        { key: "global-entity-setup.who-this-is-for.detail-oriented-owners", label: "Card — Detail-Oriented Owners", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_210856_d3fd93ca-d852-405b-96b7-dcc29808d0e0_min.webp" },
      ],
    },
    {
      title: "Closing call-to-action",
      slots: [
        { key: "global-entity-setup.closing-cta.background", label: "Closing call-to-action background", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp" },
      ],
    },
  ],
};
