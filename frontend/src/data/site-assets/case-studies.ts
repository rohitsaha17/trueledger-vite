import type { AssetPage } from "./types";

export const caseStudiesAssets: AssetPage = {
  title: "Case Studies",
  path: "/case-studies",
  sections: [
    {
      title: "Hero banner",
      slots: [
        { key: "case-studies.hero.video", label: "Hero background video", default: "/videos/case-studies-hero.mp4", kind: "video" },
        { key: "case-studies.hero.video-poster", label: "Hero video poster (shown while the video loads)", default: "/images/posters/case-studies-hero.webp" },
        { key: "case-studies.hero.fallback-image", label: "Hero still image behind the video (shown on slow connections)", default: "/images/posters/case-studies-hero.webp" },
      ],
    },
    {
      title: "Built-in case study cards (card image and case study page banner; case studies added in Admin → Case Studies use their own image)",
      slots: [
        { key: "case-studies.fallback-studies.defense-tech-us-entity", label: "Launching a Defense Tech Startup's US Entity, Built for Investors", default: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80" },
        { key: "case-studies.fallback-studies.restaurant-multi-state-setup", label: "Scaling a Restaurant Brand Across Four US States", default: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" },
        { key: "case-studies.fallback-studies.fmcg-beverage-ap-ar", label: "Bringing Order to High-Volume AP/AR for an Australian FMCG Beverage Company", default: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80" },
        { key: "case-studies.fallback-studies.restaurant-chain-finance", label: "Running the Finance Backbone of a US Restaurant Chain", default: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80" },
        { key: "case-studies.fallback-studies.auto-oem-finance-ops", label: "Powering Finance Operations for an Auto OEM Tech Company", default: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" },
        { key: "case-studies.fallback-studies.green-card-india-us", label: "Navigating a Green Card Move from India to the US", default: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&q=80" },
        { key: "case-studies.fallback-studies.saas-founder-spac-nyse", label: "Guiding a SaaS Founder Through a SPAC Listing on the NYSE", default: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80" },
        { key: "case-studies.fallback-studies.rd-credit-pharma", label: "R&D Credit Strategy for a Global Pharma Company", default: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80" },
        { key: "case-studies.fallback-studies.business-credits-hospitality", label: "Unlocking Business Credits for a Global Hospitality Chain", default: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" },
        { key: "case-studies.fallback-studies.florida-cpa-peak-season", label: "Absorbing Peak Tax-Season Volume for a Florida CPA Firm", default: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" },
        { key: "case-studies.fallback-studies.texas-cpa-real-estate", label: "Running Real Estate Portfolio Accounting for a Texas CPA Firm", default: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" },
        { key: "case-studies.fallback-studies.ipo-ready-governance", label: "Building an IPO-Ready Governance and Risk Framework", default: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
        { key: "case-studies.fallback-studies.canadian-hospitality-automation", label: "Automating Finance Operations for a Canadian Hospitality Group", default: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" },
      ],
    },
    {
      title: "Closing call-to-action",
      slots: [
        { key: "case-studies.closing-cta.background", label: "Closing call-to-action background", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp" },
      ],
    },
  ],
};
