import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { useAssets } from "@/hooks/use-site-assets";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, Building2 } from "lucide-react";
import { api, resolveAssetUrl } from "@/lib/api";
import { CASE_STUDY_SERVICES } from "@/lib/case-studies";
import type { CaseStudy } from "@/types/database";

interface DisplayStudy {
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

/* ------------------------------------------------------------------ */
/*  Service tabs                                                      */
/* ------------------------------------------------------------------ */

const SERVICE_TABS = ["All", ...CASE_STUDY_SERVICES] as const;

type ServiceTab = (typeof SERVICE_TABS)[number];

/** Map an API CaseStudy to our DisplayStudy shape. */
function toDisplayStudy(cs: CaseStudy): DisplayStudy {
  return {
    id: cs.id,
    title: cs.title,
    slug: cs.slug,
    industry: cs.industry,
    service: cs.service || inferService(cs.industry),
    challenge: cs.challenge,
    solution: cs.solution,
    results: cs.results,
    featured_image: resolveAssetUrl(cs.featured_image ?? ""),
  };
}

/** Best-effort mapping from industry to a service tab, for entries saved without one. */
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
  const asset = useAssets();
  const [cmsStudies, setCmsStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<ServiceTab>("All");

  useEffect(() => {
    api
      .get<CaseStudy[]>("/case-studies")
      .then(setCmsStudies)
      .catch(() => setCmsStudies([]))
      .finally(() => setLoading(false));
  }, []);

  const allStudies: DisplayStudy[] = cmsStudies.map(toDisplayStudy);

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
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#140e2a]">
        {/* Still of the video's opening frame, sitting underneath it: on a
            slow or failed connection the hero shows this instead of black. */}
        <img
          src={asset("case-studies.hero.fallback-image")}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <motion.video
          key={asset("case-studies.hero.video")}
          autoPlay
          muted
          loop
          playsInline
          poster={asset("case-studies.hero.video-poster")}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <source src={asset("case-studies.hero.video")} type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-[#140e2a]/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140e2a]/30 via-transparent to-[#140e2a]/40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <p className="text-[#EE672C] text-[15px] font-semibold uppercase tracking-widest mb-4">
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
            <div className="flex flex-wrap justify-center gap-8">
              {filteredStudies.map((study, i) => (
                <AnimatedSection
                  key={study.id}
                  delay={0.1 + i * 0.06}
                  className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
                >
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
                          <span className="text-[13px] font-medium text-brand uppercase tracking-wider">
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
          src={asset("case-studies.closing-cta.background")}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#140e2a]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e2a] via-transparent to-[#140e2a]/70" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <p className="text-[#EE672C] text-[15px] font-semibold uppercase tracking-widest mb-4">
              Your story could be next
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6 leading-tight max-w-2xl mx-auto">
              Let&rsquo;s build your success story together.
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
