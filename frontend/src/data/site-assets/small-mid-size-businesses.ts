import type { AssetPage } from "./types";

export const smbAssets: AssetPage = {
  title: "Sector: Small & Mid-size Businesses",
  path: "/sectors/small-mid-size-businesses",
  sections: [
    {
      title: "Hero",
      slots: [
        { key: "small-mid-size-businesses.hero.image", label: "Hero image (shown until the video loads)", default: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80" },
        { key: "small-mid-size-businesses.hero.video", label: "Hero background video", default: "https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4", kind: "video" },
      ],
    },
    {
      title: "Challenges",
      slots: [
        { key: "small-mid-size-businesses.challenges.background", label: "Challenges section background", default: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" },
      ],
    },
    {
      title: "Services",
      slots: [
        { key: "small-mid-size-businesses.services.background-video", label: "Services section background video", default: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4", kind: "video" },
      ],
    },
    {
      title: "Case studies",
      slots: [
        { key: "small-mid-size-businesses.case-studies.background", label: "Case studies section background", default: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80" },
      ],
    },
    {
      title: "Testimonial",
      slots: [
        { key: "small-mid-size-businesses.testimonial.background", label: "Testimonial section background", default: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80" },
      ],
    },
    {
      title: "Closing call-to-action",
      slots: [
        { key: "small-mid-size-businesses.cta.background", label: "Closing CTA background", default: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80" },
      ],
    },
  ],
};
