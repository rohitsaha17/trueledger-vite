/* ------------------------------------------------------------------ *
 *  SEO metadata
 *
 *  The app is a client-rendered SPA, so every route is served the same
 *  index.html. Without this, all pages share one <title> and one meta
 *  description. `applySeo` rewrites the head tags on navigation; the
 *  map below gives each public route its own title, description and
 *  canonical URL.
 *
 *  Copy here is taken from each page's own hero/intro text so the
 *  metadata matches what a visitor actually reads on the page.
 * ------------------------------------------------------------------ */

export const SITE_URL = "https://www.trueledgerconsulting.com";
export const SITE_NAME = "TrueLedger Consulting LLP";
export const DEFAULT_OG_IMAGE = "/logos/TrueLedger primary Logo.png";

export const DEFAULT_TITLE =
  "TrueLedger Consulting LLP — Modern Accounting & Tax Solutions";
export const DEFAULT_DESCRIPTION =
  "Multi-country virtual accounting and tax advisory firm serving businesses across the US, Canada, Australia, India and beyond.";

export interface SeoMeta {
  title?: string;
  description?: string;
  /** Absolute or root-relative path used for the canonical URL. */
  path?: string;
  /** Open Graph type — "website" for pages, "article" for posts. */
  type?: "website" | "article";
  image?: string;
  /** Set true for thin or private routes that should stay out of search. */
  noindex?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Route map                                                          */
/* ------------------------------------------------------------------ */

export const ROUTE_SEO: Record<string, SeoMeta> = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  "/about": {
    title: "About Us | TrueLedger Consulting LLP",
    description:
      "Who we are and how we work — a multi-country accounting and tax advisory practice built around qualified teams, secure processes and modern finance technology.",
  },
  "/who-we-work-with": {
    title: "Who We Work With | TrueLedger Consulting LLP",
    description:
      "The right partner for the right business. See the sectors, company stages and regions TrueLedger supports with accounting, tax and advisory services.",
  },

  /* -- Services ---------------------------------------------------- */
  "/services/global-entity-setup": {
    title: "Global Entity Setup | TrueLedger Consulting LLP",
    description:
      "Setting up a business entity is rarely just a formality. We advise on structure, state selection, agreements, tax registrations, virtual office and banking setup.",
  },
  "/services/managed-accounting-bookkeeping": {
    title: "Managed Accounting & Bookkeeping | TrueLedger Consulting LLP",
    description:
      "Growth demands financial clarity. Real-time accrual-basis books, AR and AP management, and timely reporting that sharpen decision-making as you scale.",
  },
  "/services/tax-compliance-advisory": {
    title: "Tax Compliance & Advisory | TrueLedger Consulting LLP",
    description:
      "Most people think about taxes once a year. We think about them all year round — return preparation plus quarterly and year-end planning for businesses and individuals.",
  },
  "/services/business-advisory": {
    title: "Business Advisory | TrueLedger Consulting LLP",
    description:
      "Financial modeling, scenario analysis and valuation frameworks that give you a clear, defensible picture of what your business is worth before decisions are made.",
  },
  "/services/support-to-cpas": {
    title: "Support to CPAs | TrueLedger Consulting LLP",
    description:
      "A dedicated offshore accounting team that plugs into your practice — qualified, process-driven, and built to scale with your firm through every season.",
  },

  /* -- Sectors ----------------------------------------------------- */
  "/sectors/ai-saas-startups": {
    title: "AI, SaaS & Startups | TrueLedger Consulting LLP",
    description:
      "Equity structures, international teams and product revenue models create tax and compliance complexity most traditional accountants are not equipped to handle.",
  },
  "/sectors/hospitality-restaurants": {
    title: "Hospitality & Restaurants | TrueLedger Consulting LLP",
    description:
      "Multi-location complexity, seasonal cash flows and a workforce spanning tipped, contract and kitchen staff across states. TrueLedger understands the hospitality P&L.",
  },
  "/sectors/small-mid-size-businesses": {
    title: "Small & Mid-Size Businesses | TrueLedger Consulting LLP",
    description:
      "Financial infrastructure — accounting, tax and advisory — that lets small and mid-size business owners make decisions with confidence.",
  },
  "/sectors/ecommerce-retail": {
    title: "E-Commerce & Retail | TrueLedger Consulting LLP",
    description:
      "Every market you enter adds tax obligation, accounting complexity and regulatory exposure. Scale across borders without leaving a compliance trail behind.",
  },

  /* -- Regions ----------------------------------------------------- */
  "/regions/north-america": {
    title: "USA & Canada | TrueLedger Consulting LLP",
    description:
      "TrueLedger maintains a presence in Austin, Texas, giving US and Canada-based clients a team that knows local tax compliance, regulations and accounting procedures.",
  },
  "/regions/europe-uk": {
    title: "United Kingdom | TrueLedger Consulting LLP",
    description:
      "Direct collaboration with a UK-qualified Chartered Accountant gives clients HMRC- and Companies House-fluent support without building an in-house UK team.",
  },
  "/regions/apac": {
    title: "Australia & Singapore | TrueLedger Consulting LLP",
    description:
      "ATO- and IRAS-fluent compliance through a Singapore-based licensed tax agent and a CPA Australia member, coordinated through a single TrueLedger point of contact.",
  },

  /* -- Content & company ------------------------------------------- */
  "/case-studies": {
    title: "Case Studies | TrueLedger Consulting LLP",
    description:
      "See how we have helped businesses across industries streamline their finances, reduce complexity, and scale with confidence.",
  },
  "/resources": {
    title: "Resources | TrueLedger Consulting LLP",
    description:
      "Expert insights on accounting, tax strategy, and financial operations for growing businesses.",
  },
  "/media": {
    title: "Media & Events | TrueLedger Consulting LLP",
    description:
      "Summits, seminars, webinars and published work — year by year, from our most recent appearances back to where we started.",
  },
  "/contact": {
    title: "Contact Us | TrueLedger Consulting LLP",
    description:
      "Have a question or ready to get started? Reach the TrueLedger team in Austin, Texas and New Delhi, India — or book a consultation.",
  },
  "/faq": {
    title: "FAQ | TrueLedger Consulting LLP",
    description:
      "Straightforward answers to the questions businesses ask before partnering with an outsourced accounting team.",
  },

  /* -- Policy pages ------------------------------------------------ */
  "/security-compliance": {
    title: "Security & Compliance | TrueLedger Consulting LLP",
    description:
      "How TrueLedger protects client data — the controls, certifications and operating practices behind our accounting and tax engagements.",
  },
  "/information-security-policy": {
    title: "Information Security Policy | TrueLedger Consulting LLP",
    description:
      "The information security policy of TrueLedger Consulting LLP, covering data handling, access control and the safeguards applied across client engagements.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | TrueLedger Consulting LLP",
    description:
      "How TrueLedger Consulting LLP collects, uses, stores and protects personal information gathered through this website and our services.",
  },
  "/terms": {
    title: "Terms and Conditions | TrueLedger Consulting LLP",
    description:
      "The terms and conditions governing use of the TrueLedger Consulting LLP website and the services offered through it.",
  },

  /* -- Not for search ---------------------------------------------- */
  "/insights": {
    title: "Insights | TrueLedger Consulting LLP",
    description: DEFAULT_DESCRIPTION,
    noindex: true,
  },
};

/* ------------------------------------------------------------------ */
/*  Head tag application                                               */
/* ------------------------------------------------------------------ */

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.dataset.seo = "route";
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    el.dataset.seo = "route";
    document.head.appendChild(el);
  }
  el.href = href;
}

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return SITE_URL + (path.startsWith("/") ? path : `/${path}`);
}

/**
 * Rewrites the document head for the current route. Safe to call on every
 * navigation — each call writes the full set of tags it owns.
 */
export function applySeo(meta: SeoMeta) {
  const title = meta.title ?? DEFAULT_TITLE;
  const description = meta.description ?? DEFAULT_DESCRIPTION;
  const canonical = absoluteUrl(meta.path ?? window.location.pathname);
  const image = absoluteUrl(meta.image ?? DEFAULT_OG_IMAGE);

  document.title = title;

  upsertMeta("name", "description", description);
  upsertLink("canonical", canonical);
  upsertMeta(
    "name",
    "robots",
    meta.noindex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large"
  );

  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", canonical);
  upsertMeta("property", "og:type", meta.type ?? "website");
  upsertMeta("property", "og:site_name", SITE_NAME);
  upsertMeta("property", "og:image", image);

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", image);
}

/** Look up the static metadata registered for a pathname, if any. */
export function seoForPath(pathname: string): SeoMeta | undefined {
  const clean =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  // The admin console is behind auth and has nothing to index.
  if (clean === "/admin" || clean.startsWith("/admin/")) {
    return {
      title: `Admin | ${SITE_NAME}`,
      description: DEFAULT_DESCRIPTION,
      noindex: true,
    };
  }

  return ROUTE_SEO[clean];
}
