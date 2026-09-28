import type { AssetPage } from "./types";

export const contactAssets: AssetPage = {
  title: "Contact",
  path: "/contact",
  sections: [
    {
      title: "Hero banner",
      slots: [
        { key: "contact.hero.team-photo", label: "Hero background — team photo", default: "/images/team/team-group.jpg" },
      ],
    },
    {
      title: "Closing call-to-action",
      slots: [
        { key: "contact.closing-cta.background", label: "Closing call-to-action background", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp" },
      ],
    },
  ],
};
