import type { AssetPage } from "./types";

export const globalAssets: AssetPage = {
  title: "Site-wide (header, footer, shared)",
  path: "/",
  sections: [
    {
      title: "Header",
      slots: [
        { key: "global.header.logo", label: "Site logo (top-left of every page)", default: "/logos/TrueLedger primary Logo.png" },
      ],
    },
    {
      title: "Newsletter signup block",
      slots: [
        { key: "global.newsletter.preview-image", label: "Article image inside the tablet mockup", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160951_87d38f12-9f15-45af-840f-a14eb5b250ef_min.webp" },
      ],
    },
    {
      title: "Footer",
      slots: [
        { key: "global.footer.partner-digits", label: "Partner badge — Digits logo", default: "https://digits.com/favicon/favicon-256.png?v=3" },
        { key: "global.footer.partner-gusto", label: "Partner badge — Gusto logo", default: "https://gusto.com/apple-touch-icon.png" },
      ],
    },
  ],
};
