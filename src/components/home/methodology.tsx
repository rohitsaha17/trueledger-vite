import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { FeatureCard } from "@/components/shared/feature-card";
import { methodologySteps } from "@/components/shared/methodology-steps";

/* ------------------------------------------------------------------ */
/*  Landing-page methodology — minimal cards that stagger in on scroll. */
/*  The scroll-stacking treatment of the same steps lives on the About  */
/*  page (see components/shared/methodology-stacking.tsx).              */
/* ------------------------------------------------------------------ */

export function Methodology() {
  return (
    <section className="py-20 md:py-28 bg-brand-tint/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Our Methodology"
            description="A defined way of working — from onboarding through to year-round audit readiness."
          />
        </AnimatedSection>

        {/* Centred flex-wrap so a trailing row of one or two cards sits centred */}
        <div className="flex flex-wrap justify-center gap-5 lg:gap-6 max-w-6xl mx-auto">
          {methodologySteps.map((step, i) => (
            <FeatureCard
              key={step.title}
              index={i}
              title={step.title}
              description={step.description}
              className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
