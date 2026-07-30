import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { WhitepaperDownloadModal } from "@/components/shared/whitepaper-download-modal";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ArrowUpRight,
  BookOpen,
  FileText,
  PlayCircle,
  Newspaper,
  PenLine,
  ListChecks,
  Download,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Resource data from docx content                                    */
/* ------------------------------------------------------------------ */

export interface Resource {
  id: string;
  title: string;
  category: ContentType;
  service: string;
  link: string;
  /** Local hosted PDF path. When set, cards link here instead of `link`. */
  pdf?: string;
  /** Local cover image path shown as the card header. */
  cover?: string;
}

export const resources: Resource[] = [
  /* ── WhitePapers (hosted PDFs) ───────────────────────────────────── */
  { id: "wp-nonprofit", title: "Building a Scalable Nonprofit Accounting & Advisory Practice in the United States", category: "WhitePaper", service: "Accounting & Bookkeeping", link: "/whitepapers/nonprofit-practice.pdf", pdf: "/whitepapers/nonprofit-practice.pdf" },
  { id: "wp-ai-cas", title: "Practical AI Adoption in Client Accounting Services (CAS)", category: "WhitePaper", service: "Accounting & Bookkeeping", link: "/whitepapers/ai-adoption-cas.pdf", pdf: "/whitepapers/ai-adoption-cas.pdf" },
  { id: "wp-ai-dd", title: "AI Solution Due Diligence for Accounting Firms", category: "WhitePaper", service: "CPA Support", link: "/whitepapers/ai-due-diligence.pdf", pdf: "/whitepapers/ai-due-diligence.pdf" },
  { id: "wp-usgaap", title: "US GAAP Revenue Recognition for AI-Native SaaS Companies", category: "WhitePaper", service: "Accounting & Bookkeeping", link: "/whitepapers/usgaap-ai-saas.pdf", pdf: "/whitepapers/usgaap-ai-saas.pdf" },
  { id: "wp-clean-books", title: "Clean Books & Compliance: Why They Matter for CFOs & Advisors", category: "WhitePaper", service: "Accounting & Bookkeeping", link: "/whitepapers/clean-books.pdf", pdf: "/whitepapers/clean-books.pdf" },
  { id: "wp-ieepa", title: "IEEPA Tariff Refund Claims: Technical Accounting Analysis", category: "WhitePaper", service: "Accounting & Bookkeeping", link: "/whitepapers/ieepa-refund.pdf", pdf: "/whitepapers/ieepa-refund.pdf" },
  { id: "wp-h1b", title: "Laid Off on H-1B in 2026? The US Tax Checklist", category: "WhitePaper", service: "Tax Compliance & Advisory", link: "/whitepapers/h1b-tax.pdf", pdf: "/whitepapers/h1b-tax.pdf" },
  { id: "wp-mexico", title: "Mexico Tariff Hike: Impact on Indian Exports", category: "WhitePaper", service: "Global Entity Setup", link: "/whitepapers/mexico-tariff.pdf", pdf: "/whitepapers/mexico-tariff.pdf" },
  { id: "wp-india-budget", title: "Navigating India's Investment Frontier: Union Budget 2026-27", category: "WhitePaper", service: "Global Entity Setup", link: "/whitepapers/india-budget.pdf", pdf: "/whitepapers/india-budget.pdf" },
  { id: "wp-smsf", title: "Self-Managed Superannuation Fund (SMSF) in Australia", category: "WhitePaper", service: "Global Entity Setup", link: "/whitepapers/smsf-australia.pdf", pdf: "/whitepapers/smsf-australia.pdf" },
  { id: "wp-multistate", title: "Multi-State Income Taxes — Case Study", category: "WhitePaper", service: "Tax Compliance & Advisory", link: "https://www.linkedin.com/feed/update/urn:li:activity:7442633798724247552" },

  /* ── Guides / Checklists / Infographics ──────────────────────────── */
  { id: "g1", title: "US Tax Season 2025 — Practitioner FAQ Reference", category: "Guide", service: "Tax Compliance & Advisory", link: "https://canva.link/2z2xhq7hi01vef3" },
  { id: "g2", title: "Outsourcing Assessment Checklist", category: "Guide", service: "CPA Support", link: "https://canva.link/wl62p4jorsf5yfc" },
  { id: "g3", title: "AI Due Diligence Checklist", category: "Guide", service: "CPA Support", link: "https://canva.link/qpbhbaw1z5388n3" },
  { id: "g4", title: "How Trump's Account Works", category: "Guide", service: "Tax Compliance & Advisory", link: "https://canva.link/vk220gen0f1p2jp" },
  { id: "g5", title: "Qualified Business Income Deductions", category: "Guide", service: "Tax Compliance & Advisory", link: "https://canva.link/t54clnh3fwemhoy" },
  { id: "g6", title: "Gain Exclusion on Sale of a Principal Residence", category: "Guide", service: "Tax Compliance & Advisory", link: "https://canva.link/s9qilp16wjy3qih" },
  { id: "g7", title: "Client Onboarding Interview Guide", category: "Guide", service: "Accounting & Bookkeeping", link: "https://canva.link/5v5htqgqhmic8dl" },
  { id: "g8", title: "SAFE Instruments — Explained", category: "Guide", service: "Global Entity Setup", link: "https://canva.link/qnjd1oj271pu0xo" },
  { id: "g9", title: "5 Tips for Cash Flow Discipline", category: "Guide", service: "Accounting & Bookkeeping", link: "https://canva.link/cojtqas287hevnx" },
  { id: "g10", title: "Top Mistakes to Avoid While Filing Individual Taxes", category: "Guide", service: "Tax Compliance & Advisory", link: "https://canva.link/on5qthzl8rnqvob" },
  { id: "g11", title: "Building a Better Firm — Selecting the Right Technology", category: "Guide", service: "Business Advisory", link: "https://canva.link/403as3boaqeqtkk" },

  /* ── Videos ──────────────────────────────────────────────────────── */
  { id: "v1", title: "AI Tools — Kick Demo", category: "Video", service: "Accounting & Bookkeeping", link: "https://youtu.be/epi0FcveBSU?si=vBOu5ETioajUGav1" },
  { id: "v2", title: "AI Tools — Holistiplan Demo", category: "Video", service: "Tax Compliance & Advisory", link: "https://canva.link/cyoxx48rz858lxs" },
  { id: "v3", title: "AI Tools — AICPA Josi Demo", category: "Video", service: "Accounting & Bookkeeping", link: "https://youtu.be/SrWSjImK6DQ?si=TuLs50TrZSWq-uD_" },
  { id: "v4", title: "AI Tools — Spotlight Reporting Demo", category: "Video", service: "Accounting & Bookkeeping", link: "https://youtu.be/KS29lMb-G58?si=oMhJrPP5pAbR8I4Z" },

  /* ── Newsletter ──────────────────────────────────────────────────── */
  { id: "n1", title: "AI Developments", category: "Newsletter", service: "Business Advisory", link: "https://canva.link/8y7fd76xgb6n5ln" },

  /* ── Blog Posts ──────────────────────────────────────────────────── */
  { id: "b1", title: "OBBA and Founders Tax", category: "Blog Post", service: "Tax Compliance & Advisory", link: "https://www.linkedin.com/feed/update/urn:li:activity:7468561334834475008" },
  { id: "b2", title: "H1B Laid Off — Tax Implications", category: "Blog Post", service: "Tax Compliance & Advisory", link: "https://www.linkedin.com/feed/update/urn:li:activity:7468212225095192576" },
  { id: "b3", title: "13-Week Cash Flow Forecast", category: "Blog Post", service: "Accounting & Bookkeeping", link: "https://www.linkedin.com/feed/update/urn:li:activity:7467596800900628480" },
  { id: "b4", title: "Real Estate Tax Issues", category: "Blog Post", service: "Tax Compliance & Advisory", link: "https://www.linkedin.com/feed/update/urn:li:activity:7467150846783533056" },
  { id: "b5", title: "Complex Cross-Border Returns", category: "Blog Post", service: "CPA Support", link: "https://www.linkedin.com/feed/update/urn:li:activity:7465644754534445056" },
  { id: "b6", title: "SEC Reporting Changes", category: "Blog Post", service: "Accounting & Bookkeeping", link: "https://www.linkedin.com/feed/update/urn:li:activity:7460992869420421120" },
  { id: "b7", title: "AI Risk", category: "Blog Post", service: "Business Advisory", link: "https://www.linkedin.com/feed/update/urn:li:activity:7458043336856322048" },
  { id: "b8", title: "How Finance Teams Are Using Automation", category: "Blog Post", service: "Accounting & Bookkeeping", link: "https://www.linkedin.com/feed/update/urn:li:activity:7457474051050053632" },
  { id: "b9", title: "Measuring AI ROI", category: "Blog Post", service: "Business Advisory", link: "https://www.linkedin.com/feed/update/urn:li:activity:7456961203966455808" },
  { id: "b10", title: "Tips for Cash Flow Discipline in New Business", category: "Blog Post", service: "Accounting & Bookkeeping", link: "https://www.linkedin.com/feed/update/urn:li:activity:7455129689959878657" },
  { id: "b11", title: "Should You Do a Roth Conversion?", category: "Blog Post", service: "Tax Compliance & Advisory", link: "https://www.linkedin.com/feed/update/urn:li:activity:7454910555083100161" },
  { id: "b12", title: "Executive Turnover Is Down. AI Clarity Is Not.", category: "Blog Post", service: "Business Advisory", link: "https://www.linkedin.com/feed/update/urn:li:activity:7449509327331033088" },
  { id: "b13", title: "Audit Triggers Most Businesses Miss", category: "Blog Post", service: "Accounting & Bookkeeping", link: "https://www.linkedin.com/feed/update/urn:li:activity:7447579650052001793" },
  { id: "b14", title: "Planning Ideas for Your Clients", category: "Blog Post", service: "Tax Compliance & Advisory", link: "https://www.linkedin.com/feed/update/urn:li:activity:7441849656910905345" },
  { id: "b15", title: "Startups Driving the Next Wave of Innovation in the Accounting Profession", category: "Blog Post", service: "Accounting & Bookkeeping", link: "https://www.linkedin.com/feed/update/urn:li:activity:7438175389698445312" },
  { id: "b16", title: "5 Startups Using AI and Automation to Transform Accounting, Audit, and Tax", category: "Blog Post", service: "Accounting & Bookkeeping", link: "https://canva.link/zlulummtdgm9h1w" },
  { id: "b17", title: "Analysis of India–USA Bilateral Trade Deal", category: "Blog Post", service: "Global Entity Setup", link: "https://canva.link/j3r01gnhxif1ykt" },
  { id: "b18", title: "India–UK Free Trade Agreement Signed", category: "Blog Post", service: "Global Entity Setup", link: "https://canva.link/6e4o8lp9zyvm7ey" },
  { id: "b19", title: "Navigating Tariffs — Accounting Implications", category: "Blog Post", service: "Accounting & Bookkeeping", link: "https://canva.link/mbjp2dntd2kb6a7" },
];

/* ------------------------------------------------------------------ */
/*  Filter options                                                     */
/* ------------------------------------------------------------------ */

const contentTypes = [
  "All",
  "WhitePaper",
  "Guide",
  "Video",
  "Blog Post",
  "Newsletter",
] as const;

const serviceTypes = [
  "All Services",
  "Accounting & Bookkeeping",
  "Tax Compliance & Advisory",
  "Business Advisory",
  "CPA Support",
  "Global Entity Setup",
] as const;

type ContentType = (typeof contentTypes)[number] | "All";
type ServiceType = (typeof serviceTypes)[number];

const categoryIcons: Record<string, typeof FileText> = {
  WhitePaper: FileText,
  Guide: ListChecks,
  Video: PlayCircle,
  "Blog Post": PenLine,
  Newsletter: Newspaper,
};

const categoryColors: Record<string, string> = {
  WhitePaper: "#4D397F",
  Guide: "#2CA01C",
  Video: "#EE672C",
  "Blog Post": "#3b82f6",
  Newsletter: "#B03B2D",
};

/* ------------------------------------------------------------------ */
/*  Cover images — varied real/stock photos chosen by topic            */
/* ------------------------------------------------------------------ */

const IMG = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=70`;

const STOCK: Record<string, string[]> = {
  accounting: ["1554224155-6726b3ff858f", "1460925895917-afdab827c52f", "1551288049-bebda4e38f71", "1543286386-713bdd548da4"],
  tax: ["1454165804606-c3d57bc86b40", "1450101499163-c8848c66ca85", "1517245386807-bb43f82c33c4", "1579532537598-459ecdaf39cc"],
  advisory: ["1552664730-d307ca884978", "1521791136064-7986c2920216", "1590283603385-17ffb3a7f29f", "1573164713988-8665fc963095"],
  cpa: ["1600880292203-757bb62b4baf", "1521737604893-d14cc237f11d", "1559526324-4b87b5e36e44", "1556742049-0cfed4f6a45d"],
  global: ["1486406146926-c627a92ad1ab", "1444653614773-995cb1ef9efa", "1591696205602-2f950c417cb9", "1526778548025-fa2f459cd5c1"],
  ai: ["1611974789855-9c2a0a7236a3", "1504384308090-c894fdcc538d"],
};

function themeFor(r: Resource): keyof typeof STOCK {
  const t = r.title.toLowerCase();
  if (/\bai\b|automation|artificial|digits|due diligence/.test(t)) return "ai";
  if (/tax|irs|gaap|h-1b|tariff|roth|deduction|filing|return|obba|refund|qbi/.test(t)) return "tax";
  if (/india|uk|trade|entity|smsf|australia|singapore|cross-border|budget|nexus|multi-state|superannuation|safe/.test(t)) return "global";
  if (/cpa|outsourc|firm/.test(t)) return "cpa";
  if (/nonprofit|advisory|cfo|strategy|roi|forecast|scal|onboarding/.test(t)) return "advisory";
  switch (r.service) {
    case "Tax Compliance & Advisory": return "tax";
    case "Global Entity Setup": return "global";
    case "CPA Support": return "cpa";
    case "Business Advisory": return "advisory";
    default: return "accounting";
  }
}

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(h, 31) + s.charCodeAt(i)) >>> 0;
  return h;
}

/** Deterministic, topic-relevant stock photo for a resource card. */
export function coverFor(r: Resource): string {
  const pool = STOCK[themeFor(r)];
  return IMG(pool[hashStr(r.title) % pool.length]);
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ResourcesPage() {
  const [activeContent, setActiveContent] = useState<ContentType>("All");
  const [activeService, setActiveService] = useState<ServiceType>("All Services");

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const contentMatch =
        activeContent === "All" || r.category === activeContent;
      const serviceMatch =
        activeService === "All Services" || r.service === activeService;
      return contentMatch && serviceMatch;
    });
  }, [activeContent, activeService]);

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <source src="/videos/resources-hero.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-[#140e2a]/88" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140e2a]/30 via-transparent to-[#140e2a]/40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <p className="text-[#EE672C] text-xs font-semibold uppercase tracking-widest mb-4">
              Insights &amp; Resources
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Resources
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              Expert insights on accounting, tax strategy, and financial
              operations for growing businesses.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter rows */}
          <AnimatedSection>
            <div className="mb-12 space-y-6">
              {/* Content Type */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Content Type
                </p>
                <div className="flex flex-wrap gap-2">
                  {contentTypes.map((ct) => (
                    <button
                      key={ct}
                      onClick={() => setActiveContent(ct)}
                      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 cursor-pointer ${
                        activeContent === ct
                          ? "bg-brand-dark text-white shadow-sm"
                          : "bg-brand-tint text-muted-foreground hover:bg-brand-soft"
                      }`}
                    >
                      {ct}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Area */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Service Area
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceTypes.map((st) => (
                    <button
                      key={st}
                      onClick={() => setActiveService(st)}
                      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 cursor-pointer ${
                        activeService === st
                          ? "bg-brand-dark text-white shadow-sm"
                          : "bg-brand-tint text-muted-foreground hover:bg-brand-soft"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Results count */}
          <AnimatedSection>
            <p className="text-sm text-muted-foreground mb-6">
              Showing {filtered.length} of {resources.length} resources
            </p>
          </AnimatedSection>

          {/* Resource grid */}
          {filtered.length === 0 ? (
            <AnimatedSection>
              <div className="text-center py-20">
                <BookOpen className="size-16 text-brand/20 mx-auto mb-6" />
                <h2 className="font-heading font-bold text-2xl text-ink mb-3">
                  No resources found
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Try adjusting your filters to find what you&rsquo;re looking
                  for.
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((res, i) => {
                const Icon = categoryIcons[res.category] ?? FileText;
                const color = categoryColors[res.category] ?? "#4D397F";
                const cover = coverFor(res);
                const cta = res.pdf
                  ? "Read PDF"
                  : res.category === "Video"
                    ? "Watch"
                    : "Open";
                const card = (
                  <motion.div
                    className="group bg-white rounded-2xl border border-black/[0.06] shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer"
                    whileHover={{ y: -4 }}
                  >
                    <div className="relative aspect-[3/2] overflow-hidden bg-[#140e2a]">
                      <img
                        src={cover}
                        alt={res.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#140e2a]/75 via-[#140e2a]/10 to-transparent" />
                      <span
                        className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
                        style={{ backgroundColor: `${color}cc` }}
                      >
                        <Icon className="size-3.5" />
                        {res.category}
                      </span>
                      {res.category === "Video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="size-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <svg viewBox="0 0 24 24" fill="white" className="size-6 ml-0.5">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-heading font-bold text-lg text-ink mb-3 leading-snug flex-1">
                        {res.title}
                      </h3>
                      <div className="flex items-center justify-between pt-3 border-t border-black/[0.04]">
                        <span className="text-xs text-muted-foreground truncate max-w-[60%]">
                          {res.service}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-brand group-hover:gap-2 transition-all whitespace-nowrap">
                          {cta}
                          {res.pdf ? (
                            <Download className="size-3.5" />
                          ) : (
                            <ArrowUpRight className="size-3.5" />
                          )}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
                return (
                  <AnimatedSection key={res.id} delay={0.05 + i * 0.04}>
                    {res.pdf ? (
                      <WhitepaperDownloadModal
                        pdfUrl={res.pdf}
                        title={res.title}
                        trigger={card}
                      />
                    ) : (
                      <a
                        href={res.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {card}
                      </a>
                    )}
                  </AnimatedSection>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
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
              Need expert guidance?
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6 leading-tight max-w-2xl mx-auto">
              Let&rsquo;s discuss your financial strategy.
            </h2>
            <ConsultationModal
              trigger={
                <Button
                  size="lg"
                  className="text-base px-8 h-13 font-semibold shadow-xl shadow-[#4D397F]/20 border-0 text-white cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #4D397F, #362765)",
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
