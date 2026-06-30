import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
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
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Resource data from docx content                                    */
/* ------------------------------------------------------------------ */

interface Resource {
  id: string;
  title: string;
  category: ContentType;
  service: string;
  link: string;
}

const resources: Resource[] = [
  /* ── WhitePapers ─────────────────────────────────────────────────── */
  { id: "wp1", title: "Year-End Books Cleanup & Review for U.S. Businesses", category: "WhitePaper", service: "Accounting & Bookkeeping", link: "https://canva.link/m8rdcsv9az5sped" },
  { id: "wp2", title: "SOC-2 Certification", category: "WhitePaper", service: "Business Advisory", link: "https://canva.link/2d23tr9s0u2nptc" },
  { id: "wp3", title: "IPO Capability", category: "WhitePaper", service: "Business Advisory", link: "https://canva.link/a79t57smj8cea7l" },
  { id: "wp4", title: "Impact of the One Big Beautiful Bill on 2025 Tax Filing Season", category: "WhitePaper", service: "Tax Compliance & Advisory", link: "https://canva.link/nojk2ehk6sbhu09" },
  { id: "wp5", title: "US Tax Season Approach", category: "WhitePaper", service: "CPA Support", link: "https://canva.link/52vepfyztfbtpl0" },
  { id: "wp6", title: "Analysis of Tax Return for Financial Planning Opportunities", category: "WhitePaper", service: "Tax Compliance & Advisory", link: "https://canva.link/j8p79ecu3jhgc14" },
  { id: "wp7", title: "Fractional CFO — Clean Books", category: "WhitePaper", service: "Accounting & Bookkeeping", link: "https://canva.link/3edy4xldg57im5g" },
  { id: "wp8", title: "Practical AI Adoption in CAS", category: "WhitePaper", service: "Accounting & Bookkeeping", link: "https://canva.link/k8vbiamdjc8qlrk" },
  { id: "wp9", title: "Building a Scalable Nonprofit Accounting & Advisory Practice in the United States", category: "WhitePaper", service: "Accounting & Bookkeeping", link: "https://canva.link/w3mfo053a8czxxm" },
  { id: "wp10", title: "Multi-State Income Taxes — Case Study", category: "WhitePaper", service: "Tax Compliance & Advisory", link: "https://www.linkedin.com/feed/update/urn:li:activity:7442633798724247552" },
  { id: "wp11", title: "Expected Credit Losses under IFRS", category: "WhitePaper", service: "Accounting & Bookkeeping", link: "https://canva.link/74lkc9tr175stba" },
  { id: "wp12", title: "IFRS 2 Share-Based Payments", category: "WhitePaper", service: "Accounting & Bookkeeping", link: "https://canva.link/vjg4cfbkcww3aw9" },

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
        <motion.img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1920&q=80"
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
                return (
                  <AnimatedSection key={res.id} delay={0.05 + i * 0.04}>
                    <a
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        className="group bg-white rounded-2xl border border-black/[0.06] shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                        whileHover={{ y: -4 }}
                      >
                        <div
                          className="h-2 w-full"
                          style={{ backgroundColor: color }}
                        />
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center gap-3 mb-4">
                            <span
                              className="inline-flex items-center justify-center size-9 rounded-lg"
                              style={{
                                backgroundColor: `${color}14`,
                                color,
                              }}
                            >
                              <Icon className="size-4.5" />
                            </span>
                            <span
                              className="text-xs font-semibold uppercase tracking-wider"
                              style={{ color }}
                            >
                              {res.category}
                            </span>
                          </div>
                          <h3 className="font-heading font-bold text-lg text-ink mb-3 leading-snug flex-1">
                            {res.title}
                          </h3>
                          <div className="flex items-center justify-between pt-3 border-t border-black/[0.04]">
                            <span className="text-xs text-muted-foreground truncate max-w-[60%]">
                              {res.service}
                            </span>
                            <span className="inline-flex items-center gap-1 text-sm font-medium text-brand group-hover:gap-2 transition-all whitespace-nowrap">
                              Open
                              <ArrowUpRight className="size-3.5" />
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </a>
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
