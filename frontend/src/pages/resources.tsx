import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { useAssets } from "@/hooks/use-site-assets";
import { useResources } from "@/hooks/use-resources";
import { coverFor, RESOURCE_CATEGORIES, RESOURCE_SERVICES } from "@/lib/resources";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { WhitepaperDownloadModal } from "@/components/shared/whitepaper-download-modal";
import { SubscribeInsights } from "@/components/home/subscribe-insights";
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
/*  Filter options                                                     */
/* ------------------------------------------------------------------ */

const contentTypes = ["All", ...RESOURCE_CATEGORIES] as const;

const serviceTypes = ["All Services", ...RESOURCE_SERVICES] as const;

type ContentType = (typeof contentTypes)[number];
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
  const asset = useAssets();
  const resources = useResources();

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const contentMatch =
        activeContent === "All" || r.category === activeContent;
      const serviceMatch =
        activeService === "All Services" || r.service === activeService;
      return contentMatch && serviceMatch;
    });
  }, [resources, activeContent, activeService]);

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#140e2a]">
        {/* Still of the video's opening frame, sitting underneath it: on a
            slow or failed connection the hero shows this instead of black. */}
        <img
          src={asset("resources.hero.still")}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <motion.video
          key={asset("resources.hero.video")}
          autoPlay
          muted
          loop
          playsInline
          poster={asset("resources.hero.poster")}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <source src={asset("resources.hero.video")} type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-[#140e2a]/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140e2a]/30 via-transparent to-[#140e2a]/40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <p className="text-[#EE672C] text-[15px] font-semibold uppercase tracking-widest mb-4">
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
                <p className="text-[15px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
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
                <p className="text-[15px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
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
                const cover = coverFor(res, asset);
                // Anything that resolves to a PDF (hosted or gated) reads as a
                // document; external links (LinkedIn, Canva) just "Open".
                const isPdf = Boolean(res.pdf) || res.link.endsWith(".pdf");
                const isInternal = res.link.startsWith("/resources/") && !isPdf;
                const cta =
                  res.category === "Video"
                    ? "Watch"
                    : isPdf
                      ? "Read PDF"
                      : isInternal
                        ? "Read"
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
                        className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[13px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
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
                          {isPdf ? (
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
                    ) : isInternal ? (
                      <Link to={res.link}>{card}</Link>
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

      {/* Newsletter subscribe — same treatment as the home page */}
      <SubscribeInsights />

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img
          src={asset("resources.cta.background")}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#140e2a]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e2a] via-transparent to-[#140e2a]/70" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <p className="text-[#EE672C] text-[15px] font-semibold uppercase tracking-widest mb-4">
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
