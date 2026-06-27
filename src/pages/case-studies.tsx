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

interface DisplayStudy {
  id: string;
  title: string;
  slug: string;
  industry: string;
  service: string;
  challenge: string;
  featured_image: string;
}

const staticStudies: DisplayStudy[] = [
  {
    id: "s1",
    title: "Scaling Financial Operations for a 50-Location Restaurant Chain",
    slug: "restaurant-chain-scaling",
    industry: "Hospitality",
    service: "Accounting & Bookkeeping",
    challenge:
      "A rapidly expanding restaurant group needed to consolidate financial reporting across 50 locations, standardize accounting processes, and achieve month-end close within 5 days.",
    featured_image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s2",
    title: "Multi-State Tax Compliance for a SaaS Company",
    slug: "saas-tax-compliance",
    industry: "Technology",
    service: "Tax Compliance",
    challenge:
      "A fast-growing SaaS company with customers in 38 states needed nexus analysis, multi-state sales tax registration, and automated compliance filing across all jurisdictions.",
    featured_image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s3",
    title: "US Entity Setup for an Australian E-Commerce Brand",
    slug: "australian-ecommerce-us-setup",
    industry: "E-Commerce",
    service: "Entity Setup",
    challenge:
      "An Australian D2C brand entering the US market needed a Delaware LLC, EIN registration, business bank account, and sales tax nexus setup — all within 3 weeks of launch.",
    featured_image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s4",
    title: "Fundraising Readiness for a Series B Health-Tech Startup",
    slug: "healthtech-series-b",
    industry: "Healthcare",
    service: "Business Advisory",
    challenge:
      "A health-tech startup preparing for Series B needed investor-ready financials, a 3-year forecast model, clean GAAP-compliant books, and a virtual data room — delivered in 6 weeks.",
    featured_image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s5",
    title: "Offshore Team for a 12-Partner CPA Firm",
    slug: "cpa-firm-offshore-team",
    industry: "Professional Services",
    service: "CPA Firm Support",
    challenge:
      "A mid-size CPA firm needed to build a dedicated offshore team of 15 professionals to handle tax season overflow, year-round bookkeeping, and audit preparation across 400+ clients.",
    featured_image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s6",
    title: "Month-End Close Optimization for a Construction Company",
    slug: "construction-month-end",
    industry: "Construction",
    service: "Accounting & Bookkeeping",
    challenge:
      "A construction company with $80M in annual revenue was closing books 25 days after month-end. We reduced it to 7 days while improving accuracy and implementing job costing.",
    featured_image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s7",
    title: "International Tax Planning for a Cross-Border Consulting Firm",
    slug: "cross-border-tax-planning",
    industry: "Professional Services",
    service: "Tax Compliance",
    challenge:
      "A consulting firm operating in the US, UK, and Singapore needed transfer pricing documentation, treaty benefit analysis, and coordinated tax filings across three jurisdictions.",
    featured_image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s8",
    title: "Singapore Subsidiary Setup for a US Tech Company",
    slug: "us-tech-singapore-subsidiary",
    industry: "Technology",
    service: "Entity Setup",
    challenge:
      "A US-based AI company needed to establish a Singapore subsidiary for Asia-Pacific operations, including ACRA registration, corporate secretary, employment pass applications, and local bank account.",
    featured_image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s9",
    title: "CFO Advisory for a Pre-IPO E-Commerce Platform",
    slug: "ecommerce-pre-ipo-advisory",
    industry: "E-Commerce",
    service: "Business Advisory",
    challenge:
      "A high-growth e-commerce platform needed fractional CFO support for IPO preparation — including SOX readiness, internal controls, board reporting, and investor relations support.",
    featured_image:
      "https://images.unsplash.com/photo-1553729459-uj1ef3f9cde5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s10",
    title: "Tax Season Capacity for a Solo Practitioner",
    slug: "solo-practitioner-tax-season",
    industry: "Professional Services",
    service: "CPA Firm Support",
    challenge:
      "A solo CPA handling 200+ individual returns needed seasonal support for tax preparation and review, enabling them to take on 60% more clients without hiring full-time staff.",
    featured_image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s11",
    title: "Multi-Entity Bookkeeping for a Real Estate Portfolio",
    slug: "real-estate-multi-entity",
    industry: "Real Estate",
    service: "Accounting & Bookkeeping",
    challenge:
      "A real estate investor managing 12 LLCs needed consolidated reporting, individual entity P&Ls, investor distributions tracking, and annual K-1 preparation for 40+ partners.",
    featured_image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s12",
    title: "R&D Tax Credit Study for an AI Startup",
    slug: "ai-startup-rd-credit",
    industry: "Technology",
    service: "Tax Compliance",
    challenge:
      "An AI startup spending $2M annually on R&D needed a comprehensive Section 41 credit study, documentation of qualifying activities, and filing across federal and 3 state returns.",
    featured_image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
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
      <section className="py-20 md:py-28 bg-gradient-to-b from-brand-tint/40 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-4">
              Real Results
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-ink leading-tight mb-6">
              Case Studies
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
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
