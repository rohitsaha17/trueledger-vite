import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, Building2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { CaseStudy } from "@/types/database";

/* ------------------------------------------------------------------ */
/*  Static case-study data (merged with Supabase results at runtime)  */
/* ------------------------------------------------------------------ */

export interface DisplayStudy {
  id: string;
  title: string;
  slug: string;
  industry: string;
  service: string;
  challenge: string;
  solution: string;
  results: string;
  featured_image: string;
}

export const staticStudies: DisplayStudy[] = [
  /* ── Entity Setup ──────────────────────────────────────────────── */
  {
    id: "s1",
    title: "Launching a Defense Tech Startup's US Entity, Built for Investors",
    slug: "defense-tech-us-entity",
    industry: "Defense Technology",
    service: "Entity Setup",
    challenge:
      "An India-based defense deep tech startup needed not just a US entity — it needed an investor-ready structure with governance documents, an ESOP pool, and cross-border tax positioning.",
    solution:
      "We built the full legal and financial foundation: governance documents and internal policies, an ESOP pool agreement designed for future hires, and the international tax & transfer pricing structuring needed to manage exposure on both sides of the India–US border.\n\nStates Covered: California\n\nKey Registrations & Setup Handled: C-Corp formation, DBA filings, franchise tax registration, ESOP pool agreement design, legal governance documentation, banking setup, accounting setup, payroll setup.",
    results:
      "A compliant, cap-table-ready entity with clean governance and cross-border tax positioning in place before the company ever sat across the table from an investor.",
    featured_image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s2",
    title: "Scaling a Restaurant Brand Across Four US States",
    slug: "restaurant-multi-state-setup",
    industry: "Hospitality",
    service: "Entity Setup",
    challenge:
      "A growing restaurant chain needed to expand from a single-state operation into a true multi-state presence without the friction of juggling separate attorneys, registered agents, and bookkeepers in every jurisdiction.",
    solution:
      "We acted as the single point of coordination for the entire launch, from formation through to a fully running back office.\n\nStates Covered: New York, Delaware, Tennessee, Virginia\n\nKey Registrations & Setup Handled: LLC formation, state and local tax registrations, business licenses and permits, banking setup, accounting system setup, payroll setup.",
    results:
      "The client moved from incorporation to fully operational — banking, books, and payroll running in every state — without managing a single additional vendor relationship.",
    featured_image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },

  /* ── Accounting & Bookkeeping ──────────────────────────────────── */
  {
    id: "s3",
    title:
      "Bringing Order to High-Volume AP/AR for an Australian FMCG Beverage Company",
    slug: "fmcg-beverage-ap-ar",
    industry: "FMCG / Beverages",
    service: "Accounting & Bookkeeping",
    challenge:
      "A fast-moving beverage company was processing a high daily volume of purchases and sales with no standardized process, facing payment issues and lacking real-time visibility on collections.",
    solution:
      "We rebuilt their AP and AR function from the ground up — full ownership of accounts payable (procure-to-pay) and accounts receivable (order-to-cash), including SOP design and an automation roadmap for both functions.\n\nTools/Software Used: SAP Business One for ERP; Stampli/Makers Hub — AI and automation layer for AP processing.",
    results:
      "A streamlined, automated AR/AP cycle; faster vendor payment turnaround; real-time visibility into customer payments; and early, systematic flagging of delays and mismatches before they became cash flow problems.",
    featured_image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s4",
    title: "Running the Finance Backbone of a US Restaurant Chain",
    slug: "restaurant-chain-finance",
    industry: "Hospitality",
    service: "Accounting & Bookkeeping",
    challenge:
      "Restaurants live and die by daily numbers — inventory, sales, payroll, cash. A US restaurant chain needed someone to take over the entire finance operation end to end so leadership could focus on running the business.",
    solution:
      "We took over weekly payroll, daily inventory management, POS sales reconciliation, sales and income tax compliance, statutory filings, month-end close, forecasting, and treasury.\n\nTools/Software Used: QuickBooks Online for Accounting; Gusto for Payroll; Toast and Xtrachef for POS integration; Avalara for Multi-State Sales Tax; Reach Reporting and Double for Forecasts, Dashboards, and Financial Reporting.",
    results:
      "Faster month-end close, restaurant-by-restaurant and item-level profitability visibility, stronger cash flow planning, and a payroll and benefits process the team could finally rely on.",
    featured_image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s5",
    title: "Powering Finance Operations for an Auto OEM Tech Company",
    slug: "auto-oem-finance-ops",
    industry: "Automotive Technology",
    service: "Accounting & Bookkeeping",
    challenge:
      "A technology company serving auto OEMs needed its order-to-cash and back-office finance function to scale at the same pace as its sales pipeline.",
    solution:
      "We embedded ourselves across invoicing, collections, HR, and month-end close as a true extension of their finance team — full order-to-cash cycle (estimates, invoicing, collections, overdue follow-up), HR management, payroll processing, tax compliance, employee expense claims, and month-end close.\n\nTools/Software Used: QuickBooks Enterprise Suite for GL Accounting/ERP; Dext and Ramp for Expense and Employee Claim Management; Paychex for Payroll Processing.",
    results:
      "Faster invoicing, clearer visibility into the sales pipeline, disciplined AP and vendor credit management through daily bill posting, and cost-center-level profitability tracking that informed real decisions.",
    featured_image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },

  /* ── Tax Compliance & Advisory ─────────────────────────────────── */
  {
    id: "s6",
    title: "Navigating a Green Card Move from India to the US",
    slug: "green-card-india-us",
    industry: "Individual Tax",
    service: "Tax Compliance",
    challenge:
      "A senior executive relocating to the US on a Green Card arrived with multiple Indian mutual funds, bank accounts requiring FBAR disclosure, ESOPs split across two countries, and a first-year residency status that would shape every election going forward.",
    solution:
      "We mapped every reporting obligation before it became a deadline, advised on first-year residency and mark-to-market elections, and built a filing strategy that addressed each asset class on its own terms.",
    results:
      "A fully compliant first-year US filing, with the client confident he hadn't left exposure on the table in either country.",
    featured_image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s7",
    title: "Guiding a SaaS Founder Through a SPAC Listing on the NYSE",
    slug: "saas-founder-spac-nyse",
    industry: "Technology / SaaS",
    service: "Tax Compliance",
    challenge:
      "The founder of an AI-based SaaS company heading toward an NYSE listing faced high-stakes tax questions — earnout taxability, QSBS capital gains exclusion eligibility, 409A valuation, RSU taxability, and a personal residency relocation, all under negotiation with the acquirer's legal counsel.",
    solution:
      "We worked directly alongside the acquirer's counsel, modeling out each position and its downstream tax consequences before terms were finalized.",
    results:
      "A successfully negotiated tax position for the founder, with approximately $75M in value addressed across multiple filing years.",
    featured_image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s8",
    title: "R&D Credit Strategy for a Global Pharma Company",
    slug: "rd-credit-pharma",
    industry: "Pharmaceuticals",
    service: "Tax Compliance",
    challenge:
      "A US pharmaceutical company with R&D operations spread across multiple countries needed clarity on what could be claimed as R&D Credit under IRC 41, and how Section 174 amortization rules would apply to a global research footprint.",
    solution:
      "We advised on credit eligibility and the practical application of those amortization principles to their specific structure.",
    results:
      "Full R&D credit optimization under IRC 41 with proper Section 174 amortization treatment mapped to the company's global research operations.",
    featured_image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s9",
    title: "Unlocking Business Credits for a Global Hospitality Chain",
    slug: "business-credits-hospitality",
    industry: "Hospitality",
    service: "Tax Compliance",
    challenge:
      "A large hospitality chain was leaving value on the table across several underused credit programs.",
    solution:
      "We assessed eligibility and built the claim mechanism for Employee Retention Credit, Work Opportunity Tax Credit, R&D and other applicable business credits.",
    results:
      "Previously unclaimed credits identified and captured across multiple tax years, significantly reducing the chain's effective tax burden.",
    featured_image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },

  /* ── CPA Support Services ──────────────────────────────────────── */
  {
    id: "s10",
    title: "Absorbing Peak Tax-Season Volume for a Florida CPA Firm",
    slug: "florida-cpa-peak-season",
    industry: "Professional Services",
    service: "CPA Firm Support",
    challenge:
      "In the final weeks of April tax season, a Florida-based CPA firm needed extra hands on a stack of complex returns — clients with multi-country income and layered reporting requirements they didn't have the bandwidth to absorb internally.",
    solution:
      "We integrated directly into the firm's existing workflow — working in Lacerte for tax prep, Canopy for client communication, and Intuit Tax Advisory for research. We owned the full return cycle: validating document intake, communicating with clients, researching complex positions against current IRS and AICPA guidance, and preparing audit-ready workpapers and binders for the CPA's final sign-off.",
    results:
      "The firm met its season-end deadlines without sacrificing quality — and the relationship has since grown beyond tax season into other service areas.",
    featured_image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s11",
    title: "Running Real Estate Portfolio Accounting for a Texas CPA Firm",
    slug: "texas-cpa-real-estate",
    industry: "Real Estate",
    service: "CPA Firm Support",
    challenge:
      "A Texas-based CPA managing a portfolio of real estate rental entities needed consistent, audit-ready monthly accounting across every property — without building out an internal team to do it.",
    solution:
      "We took over the full monthly cycle: maintaining rental schedules, syncing collections and rental data from Yardi into QBO, tracking operating expenses across taxes, maintenance, and insurance, and closing the books with proper adjustments for depreciation, prepaids, and accruals.\n\nTools: Yardi, ADP, QBO, Double.",
    results:
      "A reliable, on-time monthly close and a clean reporting package the CPA could hand straight to stakeholders.",
    featured_image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  },

  /* ── Business Advisory ─────────────────────────────────────────── */
  {
    id: "s12",
    title: "Building an IPO-Ready Governance and Risk Framework",
    slug: "ipo-ready-governance",
    industry: "Technology",
    service: "Business Advisory",
    challenge:
      "A startup scaling toward a public listing within the year had grown faster than its internal controls — financial governance, risk oversight, and reporting discipline hadn't kept pace with the business.",
    solution:
      "We built the governance structure from the ground up: clear financial controls, a formal risk framework, and the reporting discipline auditors and institutional investors expect to see — designed specifically around the realities of a pre-IPO company, not a generic compliance template.",
    results:
      "A company that could walk into IPO due diligence with its financial house in order, rather than scrambling to retrofit controls under deadline pressure.",
    featured_image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s13",
    title: "Automating Finance Operations for a Canadian Hospitality Group",
    slug: "canadian-hospitality-automation",
    industry: "Hospitality",
    service: "Business Advisory",
    challenge:
      "A Canada-based hospitality business was pulling financial data from multiple disconnected sources by hand — a process that was slow, error-prone, and gave leadership no single, trustworthy view of the numbers.",
    solution:
      "We designed and implemented a full-scale accounting automation system: consolidating data feeds from every source into one reporting window, with automated processing replacing manual entry at each step.",
    results:
      "Leadership gained a single source of truth for financial reporting — faster, more accurate, and no longer dependent on someone manually stitching spreadsheets together every month.",
    featured_image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
];

/* ------------------------------------------------------------------ */
/*  Service tabs                                                      */
/* ------------------------------------------------------------------ */

const SERVICE_TABS = [
  "All",
  "Accounting & Bookkeeping",
  "Tax Compliance",
  "Entity Setup",
  "Business Advisory",
  "CPA Firm Support",
] as const;

type ServiceTab = (typeof SERVICE_TABS)[number];

/** Map a Supabase CaseStudy (which lacks `service`) to our DisplayStudy shape. */
function toDisplayStudy(cs: CaseStudy): DisplayStudy {
  return {
    id: cs.id,
    title: cs.title,
    slug: cs.slug,
    industry: cs.industry,
    service: inferService(cs.industry),
    challenge: cs.challenge,
    solution: cs.solution,
    results: cs.results,
    featured_image: cs.featured_image,
  };
}

/** Best-effort mapping from industry to a service tab. */
function inferService(industry: string): string {
  const lower = industry.toLowerCase();
  if (lower.includes("cpa") || lower.includes("accounting firm"))
    return "CPA Firm Support";
  if (lower.includes("tax")) return "Tax Compliance";
  if (lower.includes("entity") || lower.includes("setup"))
    return "Entity Setup";
  if (lower.includes("advisory") || lower.includes("consulting"))
    return "Business Advisory";
  return "Accounting & Bookkeeping";
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function CaseStudiesPage() {
  const [supabaseStudies, setSupabaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<ServiceTab>("All");

  useEffect(() => {
    supabase
      .from("case_studies")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setSupabaseStudies(data ?? []);
        setLoading(false);
      });
  }, []);

  /* Merge Supabase rows (converted) with static data, deduping by slug */
  const allStudies: DisplayStudy[] = (() => {
    const supaConverted = supabaseStudies.map(toDisplayStudy);
    const slugSet = new Set(supaConverted.map((s) => s.slug));
    return [
      ...supaConverted,
      ...staticStudies.filter((s) => !slugSet.has(s.slug)),
    ];
  })();

  /* Apply tab filter */
  const filteredStudies =
    activeTab === "All"
      ? allStudies
      : allStudies.filter((s) => s.service === activeTab);

  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <div className="absolute inset-0 bg-[#140e2a]/88" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140e2a]/30 via-transparent to-[#140e2a]/40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <p className="text-[#EE672C] text-xs font-semibold uppercase tracking-widest mb-4">
              Real Results
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Case Studies
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              See how we&rsquo;ve helped businesses across industries streamline
              their finances, reduce complexity, and scale with confidence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TAB FILTERS + GRID                                          */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Service-type pill tabs */}
          <AnimatedSection delay={0.05}>
            <div className="flex flex-wrap justify-center gap-2 mb-14">
              {SERVICE_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === tab
                      ? "bg-brand-dark text-white shadow-sm"
                      : "bg-brand-tint text-muted-foreground hover:bg-brand-soft"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Loading skeleton */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-muted/50 animate-pulse h-[400px]"
                />
              ))}
            </div>
          ) : filteredStudies.length === 0 ? (
            /* Empty state for a given filter (not global "Coming Soon") */
            <AnimatedSection>
              <div className="text-center py-20">
                <Building2 className="size-16 text-brand/20 mx-auto mb-6" />
                <h2 className="font-heading font-bold text-2xl text-ink mb-3">
                  No Case Studies Yet
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We&rsquo;re preparing case studies for this category. Check
                  back soon or explore another service.
                </p>
              </div>
            </AnimatedSection>
          ) : (
            /* Study cards */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study, i) => (
                <AnimatedSection key={study.id} delay={0.1 + i * 0.06}>
                  <Link to={`/case-studies/${study.slug}`}>
                    <motion.div
                      className="group bg-white rounded-2xl border border-black/[0.06] shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                      whileHover={{ y: -4 }}
                    >
                      {study.featured_image && (
                        <div className="aspect-[16/10] overflow-hidden">
                          <img
                            src={study.featured_image}
                            alt={study.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium text-brand uppercase tracking-wider">
                            {study.industry}
                          </span>
                          <span className="text-muted-foreground/40">|</span>
                          <span className="text-xs font-medium text-muted-foreground">
                            {study.service}
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-lg text-ink mb-2 leading-snug">
                          {study.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                          {study.challenge}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-brand group-hover:gap-2 transition-all">
                          Read Case Study
                          <ArrowRight className="size-3.5" />
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img
          src="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#140e2a]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e2a] via-transparent to-[#140e2a]/70" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <p className="text-[#EE672C] text-xs font-semibold uppercase tracking-widest mb-4">
              Your story could be next
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6 leading-tight max-w-2xl mx-auto">
              Let&rsquo;s build your success story together.
            </h2>
            <ConsultationModal
              trigger={
                <Button
                  size="lg"
                  className="text-base px-8 h-13 font-semibold shadow-xl shadow-[#EE672C]/20 border-0 text-white cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #EE672C, #B03B2D)",
                  }}
                >
                  Book a Consultation
                  <ChevronRight className="size-4" />
                </Button>
              }
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
