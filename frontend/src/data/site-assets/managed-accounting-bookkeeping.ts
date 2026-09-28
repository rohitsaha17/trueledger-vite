import type { AssetPage } from "./types";

export const managedAccountingAssets: AssetPage = {
  title: "Service: Managed Accounting & Bookkeeping",
  path: "/services/managed-accounting-bookkeeping",
  sections: [
    {
      title: "Hero",
      slots: [
        { key: "managed-accounting-bookkeeping.hero.image", label: "Hero background image (shown before the video loads)", default: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=80" },
        { key: "managed-accounting-bookkeeping.hero.video", label: "Hero background video", default: "https://videos.pexels.com/video-files/8479064/8479064-hd_1920_1080_25fps.mp4", kind: "video" },
      ],
    },
    {
      title: "What We Deliver",
      slots: [
        { key: "managed-accounting-bookkeeping.what-we-deliver.background-video", label: "Section background video", default: "https://videos.pexels.com/video-files/8298072/8298072-hd_1920_1080_25fps.mp4", kind: "video" },
      ],
    },
    {
      title: "Our Process",
      slots: [
        { key: "managed-accounting-bookkeeping.our-process.background", label: "Section background image (faded)", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160951_87d38f12-9f15-45af-840f-a14eb5b250ef_min.webp" },
      ],
    },
    {
      title: "Our Technology Advantage (software logos)",
      slots: [
        { key: "managed-accounting-bookkeeping.tech-stack.quickbooks", label: "QuickBooks logo", default: "https://www.google.com/s2/favicons?domain=quickbooks.intuit.com&sz=128" },
        { key: "managed-accounting-bookkeeping.tech-stack.xero", label: "Xero logo", default: "https://www.google.com/s2/favicons?domain=xero.com&sz=128" },
        { key: "managed-accounting-bookkeeping.tech-stack.bill", label: "Bill.com logo", default: "https://www.google.com/s2/favicons?domain=bill.com&sz=128" },
        { key: "managed-accounting-bookkeeping.tech-stack.dext", label: "Dext logo", default: "/logos/software/dext.png" },
        { key: "managed-accounting-bookkeeping.tech-stack.stampli", label: "Stampli logo", default: "https://www.google.com/s2/favicons?domain=stampli.com&sz=128" },
        { key: "managed-accounting-bookkeeping.tech-stack.campfire", label: "Campfire logo", default: "https://www.google.com/s2/favicons?domain=campfire.ai&sz=128" },
        { key: "managed-accounting-bookkeeping.tech-stack.digits", label: "Digits logo", default: "https://www.google.com/s2/favicons?domain=digits.com&sz=128" },
        { key: "managed-accounting-bookkeeping.tech-stack.kick", label: "Kick logo", default: "https://www.google.com/s2/favicons?domain=kick.co&sz=128" },
        { key: "managed-accounting-bookkeeping.tech-stack.puzzle", label: "Puzzle logo", default: "https://www.google.com/s2/favicons?domain=puzzle.io&sz=128" },
        { key: "managed-accounting-bookkeeping.tech-stack.adp", label: "ADP logo", default: "https://www.google.com/s2/favicons?domain=adp.com&sz=128" },
        { key: "managed-accounting-bookkeeping.tech-stack.rippling", label: "Rippling logo", default: "https://www.google.com/s2/favicons?domain=rippling.com&sz=128" },
        { key: "managed-accounting-bookkeeping.tech-stack.gusto", label: "Gusto logo", default: "https://www.google.com/s2/favicons?domain=gusto.com&sz=128" },
        { key: "managed-accounting-bookkeeping.tech-stack.karbon", label: "Karbon logo", default: "https://www.google.com/s2/favicons?domain=karbonhq.com&sz=128" },
        { key: "managed-accounting-bookkeeping.tech-stack.canopy", label: "Canopy logo", default: "https://www.google.com/s2/favicons?domain=canopytax.com&sz=128" },
        { key: "managed-accounting-bookkeeping.tech-stack.double", label: "Double logo", default: "https://www.google.com/s2/favicons?domain=doublehq.com&sz=128" },
        { key: "managed-accounting-bookkeeping.tech-stack.financial-cents", label: "Financial Cents logo", default: "https://www.google.com/s2/favicons?domain=financial-cents.com&sz=128" },
        { key: "managed-accounting-bookkeeping.tech-stack.spotlight", label: "Spotlight logo", default: "https://www.google.com/s2/favicons?domain=spotlightreporting.com&sz=128" },
        { key: "managed-accounting-bookkeeping.tech-stack.floqast", label: "FloQast logo", default: "https://www.google.com/s2/favicons?domain=floqast.com&sz=128" },
        { key: "managed-accounting-bookkeeping.tech-stack.reach-reporting", label: "Reach Reporting logo", default: "https://www.google.com/s2/favicons?domain=reachreporting.com&sz=128" },
      ],
    },
    {
      title: "Latest Video",
      slots: [
        { key: "managed-accounting-bookkeeping.latest-video.thumbnail", label: "Latest Video card thumbnail", default: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80" },
      ],
    },
    {
      title: "Closing call-to-action",
      slots: [
        { key: "managed-accounting-bookkeeping.closing-cta.background", label: "Closing call-to-action background", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp" },
      ],
    },
  ],
};
