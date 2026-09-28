import type { AssetPage } from "./types";

export const aboutAssets: AssetPage = {
  title: "About",
  path: "/about",
  sections: [
    {
      title: "Hero (\"About Us\" banner)",
      slots: [
        { key: "about.hero.video", label: "Hero background video", default: "/videos/about-hero-seedance.mp4", kind: "video" },
        { key: "about.hero.video-poster", label: "Hero video poster (shown while the video loads)", default: "/images/posters/about-hero-seedance.webp" },
        { key: "about.hero.fallback-image", label: "Hero still image behind the video (shown on slow connections)", default: "/images/posters/about-hero-seedance.webp" },
      ],
    },
    {
      title: "The TrueLedger Story",
      slots: [
        { key: "about.story.the-spark", label: "Story 01 — The Spark", default: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80" },
        { key: "about.story.the-experience", label: "Story 02 — The Experience", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260602_114125_37c4434f-726d-4bb3-b527-dad9f6221ffb.png" },
        { key: "about.story.the-gap", label: "Story 03 — The Gap", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260602_114128_25fe50fd-53c5-4d9f-8e84-40a218f26e64.png" },
        { key: "about.story.the-insight", label: "Story 04 — The Insight", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260602_114830_d7020677-9647-4a01-88c5-19228771fe32.png" },
        { key: "about.story.the-conviction", label: "Story 05 — The Conviction", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260602_114132_37c24fa6-a971-4b27-8709-6c082494275a.png" },
      ],
    },
    {
      title: "The People Behind TrueLedger (leadership)",
      slots: [
        { key: "about.leadership.aseem-chawla", label: "Leadership — Aseem Chawla photo", default: "/images/team/aseem-chawla.jpg" },
        { key: "about.leadership.manish-aggarwal", label: "Leadership — CA Manish Aggarwal photo", default: "/images/team/manish-aggarwal.jpeg" },
        { key: "about.leadership.hrithvik-raj", label: "Leadership — CA Hrithvik Raj photo", default: "/images/team/hrithvik-raj.jpg" },
      ],
    },
    {
      title: "Why TrueLedger",
      slots: [
        { key: "about.why-trueledger.image", label: "Image beside the \"Why TrueLedger\" points", default: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=830&h=844&auto=format&fit=crop" },
      ],
    },
    {
      title: "Data security (\"Built on Trust. Secured by Design.\")",
      slots: [
        { key: "about.data-security.background", label: "Data security section background", default: "/images/backgrounds/security-shield.webp" },
      ],
    },
    {
      title: "Key stats band",
      slots: [
        { key: "about.stats.background", label: "Stats band background texture", default: "/images/textures/watercolor-indigo.webp" },
      ],
    },
    {
      title: "Our Young Team",
      slots: [
        { key: "about.team.group-photo", label: "Team group photo", default: "/images/team/team-group.jpg" },
      ],
    },
    {
      title: "Closing call-to-action",
      slots: [
        { key: "about.closing-cta.background", label: "Closing call-to-action background", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp" },
      ],
    },
  ],
};
