import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, Building2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { CaseStudy } from "@/types/database";

export default function CaseStudiesPage() {
  const [studies, setStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("case_studies")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setStudies(data ?? []);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* Hero */}
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

      {/* Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-muted/50 animate-pulse h-[400px]"
                />
              ))}
            </div>
          ) : studies.length === 0 ? (
            <AnimatedSection>
              <div className="text-center py-20">
                <Building2 className="size-16 text-brand/20 mx-auto mb-6" />
                <h2 className="font-heading font-bold text-2xl text-ink mb-3">
                  Coming Soon
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We&rsquo;re preparing detailed case studies showcasing our
                  work. Check back soon.
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studies.map((study, i) => (
                <AnimatedSection key={study.id} delay={0.1 + i * 0.08}>
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
                        <span className="text-xs font-medium text-brand uppercase tracking-wider mb-2">
                          {study.industry}
                        </span>
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
