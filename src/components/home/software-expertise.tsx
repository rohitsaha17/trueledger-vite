import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";

/* ------------------------------------------------------------------ */
/*  Software stack — one clean, filterable logo wall.                  */
/*  Categories act as filters rather than six competing coloured       */
/*  panels, so the section reads as a single calm grid.                */
/* ------------------------------------------------------------------ */

interface Tool {
  name: string;
  category: Category;
  logo: string;
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
  { name: "QuickBooks", category: "Cloud Accounting", logo: "https://cdn.worldvectorlogo.com/logos/quickbooks-2.svg" },
  { name: "Xero", category: "Cloud Accounting", logo: "https://cdn.worldvectorlogo.com/logos/xero-1.svg" },

  /* ── AI Native ──────────────────────────────────────────────────── */
  { name: "Campfire", category: "AI Native", logo: "https://www.google.com/s2/favicons?domain=campfire.ai&sz=128" },
  { name: "Digits", category: "AI Native", logo: "https://digits.com/favicon/favicon-256.png?v=3" },
  { name: "Kick", category: "AI Native", logo: "https://www.google.com/s2/favicons?domain=kick.co&sz=128" },
  { name: "Puzzle", category: "AI Native", logo: "https://www.google.com/s2/favicons?domain=puzzle.io&sz=128" },

  /* ── Bill Processing ────────────────────────────────────────────── */
  { name: "Bill.com", category: "Bill Processing", logo: "https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/63efaae11991984d7d4d021a_Logo-Mark-Color%201.png" },
  { name: "Dext", category: "Bill Processing", logo: "/logos/software/dext.png" },
  { name: "Stampli", category: "Bill Processing", logo: "https://www.stampli.com/wp-content/uploads/2026/03/Updated_Stampli_logo.svg" },

  /* ── Payroll ────────────────────────────────────────────────────── */
  { name: "ADP", category: "Payroll", logo: "https://www.google.com/s2/favicons?domain=adp.com&sz=128" },
  { name: "Rippling", category: "Payroll", logo: "https://www.google.com/s2/favicons?domain=rippling.com&sz=128" },
  { name: "Gusto", category: "Payroll", logo: "https://gusto.com/apple-touch-icon.png" },

  /* ── Workflow & Close ───────────────────────────────────────────── */
  { name: "Karbon", category: "Workflow & Close", logo: "https://www.google.com/s2/favicons?domain=karbonhq.com&sz=128" },
  { name: "Canopy", category: "Workflow & Close", logo: "https://www.getcanopy.com/wp-content/themes/get_canopy/assets/images/logo.svg" },
  { name: "Double", category: "Workflow & Close", logo: "https://doublehq.com/wp-content/uploads/2026/01/double-logo-new.png" },
  { name: "Financial Cents", category: "Workflow & Close", logo: "https://financial-cents.com/wp-content/uploads/2025/04/financial-cents-logo.svg" },

  /* ── Forecasting & Reporting ────────────────────────────────────── */
  { name: "Spotlight Reporting", category: "Forecasting & Reporting", logo: "https://cdn.prod.website-files.com/5efc103e2e619592c6612ab2/64f6a58454e53ad531820231_Spotlight.png" },
  { name: "FloQast", category: "Forecasting & Reporting", logo: "https://cdn.prod.website-files.com/67a1db1fd2f32256b80d22ff/67cb7363a73d6b2adb7181e8_256x256-1.jpg" },
];

/**
 * Every tile stays mounted and non-matching ones are hidden, rather than the
 * grid being re-rendered per filter — remounting made the logos reload and
 * flash empty, and made the tiles visibly slide across the section.
 */
function ToolTile({ tool, hidden }: { tool: Tool; hidden: boolean }) {
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
          src={tool.logo}
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
