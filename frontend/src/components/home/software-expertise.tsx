import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { useAssets } from "@/hooks/use-site-assets";

/* ------------------------------------------------------------------ */
/*  Software stack — one clean, filterable logo wall.                  */
/*  Categories act as filters rather than six competing coloured       */
/*  panels, so the section reads as a single calm grid.                */
/* ------------------------------------------------------------------ */

interface Tool {
  name: string;
  category: Category;
  logoKey: string;
}

const categories = [
  "All",
  "Cloud Accounting",
  "AI Native",
  "Bill Processing",
  "Payroll",
  "Workflow & Close",
  "Forecasting & Reporting",
] as const;

type Category = (typeof categories)[number];

const tools: Tool[] = [
  /* ── Cloud Accounting ───────────────────────────────────────────── */
  { name: "QuickBooks", category: "Cloud Accounting", logoKey: "home.software.quickbooks" },
  { name: "Xero", category: "Cloud Accounting", logoKey: "home.software.xero" },

  /* ── AI Native ──────────────────────────────────────────────────── */
  { name: "Campfire", category: "AI Native", logoKey: "home.software.campfire" },
  { name: "Digits", category: "AI Native", logoKey: "home.software.digits" },
  { name: "Kick", category: "AI Native", logoKey: "home.software.kick" },
  { name: "Puzzle", category: "AI Native", logoKey: "home.software.puzzle" },

  /* ── Bill Processing ────────────────────────────────────────────── */
  { name: "Bill.com", category: "Bill Processing", logoKey: "home.software.bill-com" },
  { name: "Dext", category: "Bill Processing", logoKey: "home.software.dext" },
  { name: "Stampli", category: "Bill Processing", logoKey: "home.software.stampli" },

  /* ── Payroll ────────────────────────────────────────────────────── */
  { name: "ADP", category: "Payroll", logoKey: "home.software.adp" },
  { name: "Rippling", category: "Payroll", logoKey: "home.software.rippling" },
  { name: "Gusto", category: "Payroll", logoKey: "home.software.gusto" },

  /* ── Workflow & Close ───────────────────────────────────────────── */
  { name: "Karbon", category: "Workflow & Close", logoKey: "home.software.karbon" },
  { name: "Canopy", category: "Workflow & Close", logoKey: "home.software.canopy" },
  { name: "Double", category: "Workflow & Close", logoKey: "home.software.double" },
  { name: "Financial Cents", category: "Workflow & Close", logoKey: "home.software.financial-cents" },

  /* ── Forecasting & Reporting ────────────────────────────────────── */
  { name: "Spotlight Reporting", category: "Forecasting & Reporting", logoKey: "home.software.spotlight-reporting" },
  { name: "FloQast", category: "Forecasting & Reporting", logoKey: "home.software.floqast" },
];

/**
 * Every tile stays mounted and non-matching ones are hidden, rather than the
 * grid being re-rendered per filter — remounting made the logos reload and
 * flash empty, and made the tiles visibly slide across the section.
 */
function ToolTile({ tool, hidden }: { tool: Tool; hidden: boolean }) {
  const asset = useAssets();

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group flex-col items-center justify-start gap-3 px-2 py-4 text-center ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <div className="flex size-12 items-center justify-center">
        <img
          src={asset(tool.logoKey)}
          alt={tool.name}
          className="max-h-full max-w-full object-contain opacity-90 transition duration-300 group-hover:opacity-100"
          onError={(e) => {
            const el = e.currentTarget;
            el.style.display = "none";
            const fallback = el.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        <span className="hidden size-12 items-center justify-center rounded-xl bg-brand-tint text-base font-bold text-brand">
          {tool.name.charAt(0)}
        </span>
      </div>

      <div className="space-y-0.5">
        <p className="text-[15px] font-semibold leading-tight text-ink">
          {tool.name}
        </p>
        <p className="text-[13px] font-medium uppercase tracking-wider text-muted-foreground/70">
          {tool.category}
        </p>
      </div>
    </motion.div>
  );
}

export function SoftwareExpertise() {
  const [active, setActive] = useState<Category>("All");

  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-18">
      <div className="pointer-events-none absolute left-1/4 top-0 h-[300px] w-[500px] rounded-full bg-brand/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[250px] w-[400px] rounded-full bg-primary/[0.03] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Software Expertise"
            description="Fluent across the full modern accounting stack — from cloud ledgers to AI-native ERPs."
          />
        </AnimatedSection>

        {/* Category filters */}
        <AnimatedSection delay={0.05}>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`cursor-pointer rounded-full px-4 py-1.5 text-[15px] font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-brand-dark text-white shadow-sm"
                    : "bg-brand-tint text-muted-foreground hover:bg-brand-soft"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Logo wall */}
        <AnimatedSection delay={0.1}>
          {/* A single container holds the whole wall — the logos themselves
              carry no individual boxes. */}
          <div className="rounded-3xl border border-black/[0.06] bg-brand-tint/40 p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] sm:p-8">
            <div className="grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-4 sm:gap-x-4 lg:grid-cols-6">
              {tools.map((tool) => (
                <ToolTile
                  key={tool.name}
                  tool={tool}
                  hidden={active !== "All" && tool.category !== active}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
