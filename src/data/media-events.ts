export type MediaEventKind =
  | "Event"
  | "Webinar"
  | "Article"
  | "Podcast"
  | "Video";

export interface MediaEvent {
  slug: string;
  title: string;
  dateLabel: string;
  kind: MediaEventKind;
  description: string;
  images: string[];
  /** Flyers/letters are portrait: show them uncropped instead of cover-cropped. */
  poster?: boolean;
  videoUrl?: string;
  docUrl?: string;
  docLabel?: string;
}

export interface MediaYear {
  year: string;
  events: MediaEvent[];
}

const img = (slug: string, files: string[]) =>
  files.map((f) => `/events/${slug}/${f}`);

/* Years run newest first, and events within each year run newest first. */
export const mediaYears: MediaYear[] = [
  {
    year: "2026",
    events: [
      {
        slug: "taxmann-us-expansion-jun-2026",
        title: "Taxmann Webinar — Indian Startups: The US Expansion Playbook",
        dateLabel: "June 2026",
        kind: "Webinar",
        description:
          "Session with Taxmann on how Indian startups expand into the United States — FEMA, tax, funding and compliance design.",
        images: [],
        docUrl: "/events/docs/taxmann-us-expansion-jun-2026.pdf",
        docLabel: "Event brochure",
      },
      {
        slug: "trueledger-us-restaurants-may-2026",
        title: "TrueLedger Webinar — Tax & Accounting for US Restaurants",
        dateLabel: "May 2026",
        kind: "Webinar",
        description:
          "A practical walkthrough of the tax and accounting issues US restaurant operators run into, and how to stay ahead of them.",
        images: [],
        videoUrl: "https://youtu.be/Sj5tffwaYGg",
      },
      {
        slug: "nirc-icai-outsourcing-may-2026",
        title: "NIRC of ICAI, Gurgaon Branch — Seminar on Outsourcing",
        dateLabel: "May 2026",
        kind: "Event",
        description:
          "Deliberation on the opportunities the outsourcing sector opens up for practising professionals.",
        images: img("nirc-icai-outsourcing-may-2026", [
          "01.jpg",
          "02.jpg",
          "03.jpg",
        ]),
      },
      {
        slug: "dawdle-live-podcast-feb-2026",
        title: "Podcast with Dawdle Live",
        dateLabel: "February 2026",
        kind: "Podcast",
        description:
          "How TrueLedger Consulting LLP is redefining finance, compliance and outsourcing for modern businesses — 12k+ views.",
        images: [],
        videoUrl: "https://youtu.be/Q9mV7VLGlbY",
      },
      {
        slug: "gcc-summit-kolkata-feb-2026",
        title: "GCC Summit, ICAI — Kolkata Edition",
        dateLabel: "February 2026",
        kind: "Event",
        description:
          "Panel discussion on the challenges in the Indian international taxation landscape for GCCs coming to India.",
        images: img("gcc-summit-kolkata-feb-2026", [
          "01.jpg",
          "02.jpg",
          "03.jpg",
          "04.jpg",
          "05.jpg",
          "06.jpg",
          "07.jpg",
          "08.jpg",
          "09.jpg",
          "10.jpg",
        ]),
      },
      {
        slug: "taxmann-tiger-global-jan-2026",
        title: "Taxmann Webinar — Tiger Global Ruling",
        dateLabel: "January 2026",
        kind: "Webinar",
        description:
          "Webinar with Taxmann India on the Tiger Global ruling and its impact on foreign investments into India.",
        poster: true,
        images: img("taxmann-tiger-global-jan-2026", ["01.jpg"]),
      },
    ],
  },
  {
    year: "2025",
    events: [
      {
        slug: "year-in-review-dec-2025",
        title: "Year End in Review",
        dateLabel: "December 2025",
        kind: "Video",
        description:
          "A look back at the year at TrueLedger — the events, the milestones and the people behind them.",
        images: [],
        videoUrl: "https://youtu.be/VkzM_-Vb5O4",
      },
      {
        slug: "icai-international-tax-nov-2025",
        title: "ICAI Seminar — International Tax Issues for GCCs in India",
        dateLabel: "15 November 2025",
        kind: "Event",
        description:
          "Seminar covering the international tax issues most relevant to Global Capability Centres operating in India.",
        images: img("icai-international-tax-nov-2025", [
          "01.jpg",
          "02.jpg",
          "03.jpg",
          "04.jpg",
          "05.jpg",
        ]),
      },
      {
        slug: "taxmann-digital-economy-nov-2025",
        title: "Taxmann Webinar — Taxation of the Digital Economy",
        dateLabel: "November 2025",
        kind: "Webinar",
        description:
          "Webinar on how digital-economy business models are taxed, and where the rules are heading next.",
        poster: true,
        images: img("taxmann-digital-economy-nov-2025", ["01.png"]),
      },
      {
        slug: "icai-global-week-canada-oct-2025",
        title: "ICAI Global Week Series — Canada Market",
        dateLabel: "4 October 2025",
        kind: "Event",
        description:
          "Opportunities in GCCs and outsourcing, presented as part of the ICAI Global Week Series for the Canada market.",
        poster: true,
        images: img("icai-global-week-canada-oct-2025", ["01.jpg"]),
      },
      {
        slug: "gyaan-ganga-webinar-jul-2025",
        title: "Gyaan Ganga Series (Connect Easy) Webinar",
        dateLabel: "July 2025",
        kind: "Webinar",
        description:
          "Webinar on US business setup and the tax updates that matter for Indian businesses going overseas.",
        images: [],
      },
      {
        slug: "icai-udaan-series-jun-2025",
        title: "ICAI Udaan Series Webinar",
        dateLabel: "June 2025",
        kind: "Webinar",
        description:
          "US business setup and recent tax updates, delivered as part of the ICAI Global Udaan webinar series.",
        poster: true,
        images: img("icai-udaan-series-jun-2025", ["01.jpg"]),
        docUrl: "/events/docs/icai-udaan-appreciation-jun-2025.pdf",
        docLabel: "Appreciation letter",
      },
      {
        slug: "icai-gcc-magazine-jun-2025",
        title: "Article — ICAI GCC Magazine",
        dateLabel: "June 2025",
        kind: "Article",
        description:
          "Published article on international tax and transfer pricing for Global Capability Centres.",
        images: [],
      },
      {
        slug: "icai-gcc-summit-delhi-jun-2025",
        title: "ICAI GCC Summit — New Delhi Edition",
        dateLabel: "June 2025",
        kind: "Event",
        description:
          "Panel discussion on international tax and transfer pricing issues for GCCs.",
        images: img("icai-gcc-summit-delhi-jun-2025", [
          "01.jpg",
          "02.jpg",
          "03.jpg",
          "04.jpg",
          "05.jpg",
          "06.jpg",
        ]),
      },
      {
        slug: "achromic-point-cfo-summit-apr-2025",
        title: "Achromic Point — CFO Summit",
        dateLabel: "April 2025",
        kind: "Event",
        description:
          "Panel discussion on key international taxation issues and global developments.",
        images: img("achromic-point-cfo-summit-apr-2025", [
          "01.jpg",
          "02.jpg",
          "03.jpg",
          "04.jpg",
        ]),
      },
    ],
  },
  {
    year: "2024",
    events: [
      {
        slug: "nirc-icai-budget-jul-2024",
        title: "NIRC of ICAI — India Union Budget Deep Dive",
        dateLabel: "July 2024",
        kind: "Event",
        description:
          "A deep dive into the international taxation provisions of the India Union Budget.",
        images: img("nirc-icai-budget-jul-2024", ["01.jpg"]),
      },
      {
        slug: "ctc-journal-article-jun-2024",
        title: "Article — The Chamber of Tax Consultants Journal",
        dateLabel: "June 2024",
        kind: "Article",
        description:
          "Article published in the Chamber of Tax Consultants Journal.",
        poster: true,
        images: img("ctc-journal-article-jun-2024", ["01.jpg"]),
        docUrl: "/events/docs/ctc-journal-article-jun-2024.pdf",
        docLabel: "Read the article",
      },
      {
        slug: "icai-ai-hackathon-jun-2024",
        title: "ICAI AI Hackathon Series — Semi Final",
        dateLabel: "June 2024",
        kind: "Video",
        description:
          "Use case demonstration at the semi-final of the ICAI AI Hackathon Series.",
        images: [],
        videoUrl: "https://youtu.be/iHQAqafvISg",
      },
    ],
  },
];
