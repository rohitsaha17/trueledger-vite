import type { AssetPage } from "./types";

export const homeAssets: AssetPage = {
  title: "Home",
  path: "/",
  sections: [
    {
      title: "Hero carousel",
      slots: [
        { key: "home.hero.slide-1", label: "Slide 1 — Modern Accounting & Tax", default: "/images/hero/hero-accounting-tax.webp" },
        { key: "home.hero.slide-2", label: "Slide 2 — Cross-Border Tax", default: "/images/hero/hero-cross-border-tax.webp" },
        { key: "home.hero.slide-3", label: "Slide 3 — Scale Confidently", default: "/images/hero/hero-scale-advice.webp" },
        { key: "home.hero.slide-4", label: "Slide 4 — Operational Efficiency", default: "/images/hero/hero-operational-efficiency.webp" },
      ],
    },
    {
      title: "Client stories carousel",
      slots: [
        { key: "home.clients.michigan-technology-services", label: "Client 1 — Michigan technology services company", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_144911_1ba7e70a-6904-48da-9b86-708584dee5c0_min.webp" },
        { key: "home.clients.new-york-restaurant", label: "Client 2 — New York restaurant", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_144914_fad1ab72-7b3d-4067-9ba4-1b24491d3548_min.webp" },
        { key: "home.clients.india-hotel-chain", label: "Client 3 — Indian global hotel chain", default: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80" },
        { key: "home.clients.canada-realty-hospitality", label: "Client 4 — Canadian realty & hospitality group", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_145017_54d2f084-689f-43ee-8df1-99b9426c335b_min.webp" },
        { key: "home.clients.melbourne-fmcg-beverage", label: "Client 5 — Melbourne FMCG & beverage group", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_145019_8444f3a6-836d-4a21-a01c-c2fc4256e6a5_min.webp" },
      ],
    },
    {
      title: "How we help clients (services list)",
      slots: [
        { key: "home.services.background", label: "Section background", default: "/images/backgrounds/finance-abstract.webp" },
        { key: "home.services.side-image", label: "Image beside the services list", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_165826_ac572644-f557-4a5c-989f-6df5b060ab68_min.webp" },
      ],
    },
    {
      title: "The Advisor You Trust From Day One (approach cards)",
      slots: [
        { key: "home.approach.background", label: "Section background", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160951_87d38f12-9f15-45af-840f-a14eb5b250ef_min.webp" },
        { key: "home.approach.card-deep-expertise", label: "Card — Deep Expertise, Personal Commitment", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_165821_ae8f5541-03f3-450c-b62a-d7740b512d10_min.webp" },
        { key: "home.approach.card-responsive-communication", label: "Card — Responsive and Reliable Communication", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_165822_01a41f97-2fe8-412f-a494-bf7fe4ec6f12_min.webp" },
        { key: "home.approach.card-grows-with-you", label: "Card — Grows As Your Business Grows", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_165825_b8c21a16-bb17-4825-b26d-3026f283e654_min.webp" },
        { key: "home.approach.card-accurate-financials", label: "Card — Accurate Financials. Delivered On Time.", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_165826_ac572644-f557-4a5c-989f-6df5b060ab68_min.webp" },
      ],
    },
    {
      title: "Software expertise logos",
      slots: [
        { key: "home.software.quickbooks", label: "QuickBooks logo (Cloud Accounting)", default: "https://cdn.worldvectorlogo.com/logos/quickbooks-2.svg" },
        { key: "home.software.xero", label: "Xero logo (Cloud Accounting)", default: "https://cdn.worldvectorlogo.com/logos/xero-1.svg" },
        { key: "home.software.campfire", label: "Campfire logo (AI Native)", default: "https://www.google.com/s2/favicons?domain=campfire.ai&sz=128" },
        { key: "home.software.digits", label: "Digits logo (AI Native)", default: "https://digits.com/favicon/favicon-256.png?v=3" },
        { key: "home.software.kick", label: "Kick logo (AI Native)", default: "https://www.google.com/s2/favicons?domain=kick.co&sz=128" },
        { key: "home.software.puzzle", label: "Puzzle logo (AI Native)", default: "https://www.google.com/s2/favicons?domain=puzzle.io&sz=128" },
        { key: "home.software.bill-com", label: "Bill.com logo (Bill Processing)", default: "https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/63efaae11991984d7d4d021a_Logo-Mark-Color%201.png" },
        { key: "home.software.dext", label: "Dext logo (Bill Processing)", default: "/logos/software/dext.png" },
        { key: "home.software.stampli", label: "Stampli logo (Bill Processing)", default: "https://www.stampli.com/wp-content/uploads/2026/03/Updated_Stampli_logo.svg" },
        { key: "home.software.adp", label: "ADP logo (Payroll)", default: "https://www.google.com/s2/favicons?domain=adp.com&sz=128" },
        { key: "home.software.rippling", label: "Rippling logo (Payroll)", default: "https://www.google.com/s2/favicons?domain=rippling.com&sz=128" },
        { key: "home.software.gusto", label: "Gusto logo (Payroll)", default: "https://gusto.com/apple-touch-icon.png" },
        { key: "home.software.karbon", label: "Karbon logo (Workflow & Close)", default: "https://www.google.com/s2/favicons?domain=karbonhq.com&sz=128" },
        { key: "home.software.canopy", label: "Canopy logo (Workflow & Close)", default: "https://www.getcanopy.com/wp-content/themes/get_canopy/assets/images/logo.svg" },
        { key: "home.software.double", label: "Double logo (Workflow & Close)", default: "https://doublehq.com/wp-content/uploads/2026/01/double-logo-new.png" },
        { key: "home.software.financial-cents", label: "Financial Cents logo (Workflow & Close)", default: "https://financial-cents.com/wp-content/uploads/2025/04/financial-cents-logo.svg" },
        { key: "home.software.spotlight-reporting", label: "Spotlight Reporting logo (Forecasting & Reporting)", default: "https://cdn.prod.website-files.com/5efc103e2e619592c6612ab2/64f6a58454e53ad531820231_Spotlight.png" },
        { key: "home.software.floqast", label: "FloQast logo (Forecasting & Reporting)", default: "https://cdn.prod.website-files.com/67a1db1fd2f32256b80d22ff/67cb7363a73d6b2adb7181e8_256x256-1.jpg" },
      ],
    },
    {
      title: "Client reviews",
      slots: [
        { key: "home.testimonials.google-logo", label: "Google logo in the “5.0 on Google” badge", default: "https://www.google.com/favicon.ico" },
      ],
    },
    {
      title: "Closing call-to-action",
      slots: [
        { key: "home.closing-cta.background", label: "Closing call-to-action background", default: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp" },
        { key: "home.closing-cta.partner-digits", label: "Partner badge — Digits logo", default: "https://digits.com/favicon/favicon-256.png?v=3" },
        { key: "home.closing-cta.partner-gusto", label: "Partner badge — Gusto logo", default: "https://gusto.com/apple-touch-icon.png" },
      ],
    },
  ],
};
