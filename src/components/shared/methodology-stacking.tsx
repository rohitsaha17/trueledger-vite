import { StackingCards } from "@/components/ui/stacking-card";
import { methodologySteps } from "@/components/shared/methodology-steps";

/* ------------------------------------------------------------------ */
/*  Scroll-stacking methodology panels — used on the About page.        */
/* ------------------------------------------------------------------ */

export function MethodologyStacking() {
  return (
    <section
      className="bg-brand-tint"
      style={
        {
          "--sticky-header-bg": "var(--color-brand-tint, #faf5f9)",
        } as React.CSSProperties
      }
    >
      <StackingCards
        projects={methodologySteps}
        headerBgClass="bg-brand-tint"
        stickyHeader={
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-ink text-center font-heading">
            Our Methodology
          </h2>
        }
      />
    </section>
  );
}
