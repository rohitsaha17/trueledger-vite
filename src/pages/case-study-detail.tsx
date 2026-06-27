import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { CaseStudy } from "@/types/database";
import { staticStudies } from "@/pages/case-studies";
import type { DisplayStudy } from "@/pages/case-studies";

type StudyData = CaseStudy | DisplayStudy;

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [study, setStudy] = useState<StudyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from("case_studies")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single()
      .then(({ data }) => {
        if (data) {
          setStudy(data);
        } else {
          const found = staticStudies.find((s) => s.slug === slug) ?? null;
          setStudy(found);
        }
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-3/4" />
            <div className="h-64 bg-muted rounded-2xl" />
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-5/6" />
          </div>
        </div>
      </section>
    );
  }

  if (!study) {
    return (
      <section className="py-20 md:py-28 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="font-heading font-bold text-3xl text-ink mb-4">
            Case Study Not Found
          </h1>
          <Link to="/case-studies">
            <Button variant="outline">
              <ArrowLeft className="size-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      {study.featured_image && (
        <section className="relative">
          <div className="px-0 md:px-2 lg:px-4">
            <div className="relative overflow-hidden aspect-[2.5/1] rounded-b-2xl md:rounded-b-3xl">
              <img
                src={study.featured_image}
                alt={study.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-2 block">
                  {study.industry}
                </span>
                <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight max-w-3xl">
                  {study.title}
                </h1>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm text-brand hover:text-brand-dark mb-8 transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              All Case Studies
            </Link>

            {!study.featured_image && (
              <>
                <span className="text-brand text-xs font-semibold uppercase tracking-widest mb-2 block">
                  {study.industry}
                </span>
                <h1 className="font-heading font-bold text-3xl md:text-4xl text-ink leading-tight mb-6">
                  {study.title}
                </h1>
              </>
            )}

            <div className="space-y-10">
              <div>
                <h2 className="font-heading font-semibold text-xl text-ink mb-3">
                  The Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {study.challenge}
                </p>
              </div>

              <div>
                <h2 className="font-heading font-semibold text-xl text-ink mb-3">
                  Our Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {study.solution}
                </p>
              </div>

              <div>
                <h2 className="font-heading font-semibold text-xl text-ink mb-3">
                  The Results
                </h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {study.results}
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t">
              <ConsultationModal
                trigger={
                  <Button
                    size="lg"
                    className="text-base px-8 h-13 font-semibold border-0 text-white cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(135deg, #EE672C, #B03B2D)",
                    }}
                  >
                    Discuss Your Project
                    <ChevronRight className="size-4" />
                  </Button>
                }
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
