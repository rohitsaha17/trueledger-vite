import {
  StackingCards,
  type StackingProject,
} from "@/components/ui/stacking-card";

/* ------------------------------------------------------------------ */
/*  Card data                                                          */
/* ------------------------------------------------------------------ */

const steps: StackingProject[] = [
  {
    title: "Structured Onboarding. Seamless Transition.",
    description:
      "A defined onboarding framework with pre-built checklists and clear timelines ensures a smooth transition — with value delivered from day one.",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    color: "#7C4A76",
  },
  {
    title: "Tech-Powered Workflows for Consistent Delivery.",
    description:
      "Tech-embedded workflows and rigorous review mechanisms ensure your books are closed accurately and on time — every single month, without exception.",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    color: "#5D3858",
  },
  {
    title: "Real-Time Visibility. Informed Decisions.",
    description:
      "Live dashboards give you continuous access to your financial position — so every decision is backed by current, reliable data.",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    color: "#6B5A78",
  },
  {
    title: "Audit-Ready Books. Maintained Year-Round.",
    description:
      "Every transaction, reconciliation, and document is maintained to the highest standard — ensuring audit readiness at any point in the year.",
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    color: "#8B6082",
  },
  {
    title: "Transparent Pricing. Defined Scope.",
    description:
      "Fixed monthly tier-based packages tailored to your needs with a clearly defined scope — no hidden costs, no ambiguity, no surprises.",
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    color: "#704A68",
  },
  {
    title: "Global Team. Multi-Timezone Coverage.",
    description:
      "An internationally distributed team ensures responsive, uninterrupted support wherever your business operates.",
    src: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
    color: "#9B6590",
  },
  {
    title: "Industry-Specific Processes. Purpose-Built Solutions.",
    description:
      "Our frameworks, tools, and workflows are tailored to your industry — delivering precision that a generic approach simply cannot.",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    color: "#6A4A6A",
  },
];

/* ------------------------------------------------------------------ */
/*  Main section component                                             */
/* ------------------------------------------------------------------ */

export function Methodology() {
  return (
    <section className="bg-brand-tint" style={{ '--sticky-header-bg': 'var(--color-brand-tint, #faf5f9)' } as React.CSSProperties}>
      <StackingCards
        projects={steps}
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
