import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Tool {
  name: string;
  logo: string;
}

interface Category {
  label: string;
  tools: Tool[];
}

const categories: Category[] = [
  {
    label: "Cloud Ledger Software",
    tools: [
      { name: "QuickBooks", logo: "https://cdn.worldvectorlogo.com/logos/quickbooks-2.svg" },
      { name: "Xero", logo: "https://cdn.worldvectorlogo.com/logos/xero-1.svg" },
    ],
  },
  {
    label: "AI-Native ERPs",
    tools: [
      { name: "Rillet", logo: "https://cdn.prod.website-files.com/67c1d30d11d3d1eef828244c/67f92fecefa40510381d446f_Webclip.png" },
      { name: "Digits", logo: "https://digits.com/favicon/favicon-256.png?v=3" },
    ],
  },
  {
    label: "Bills & AP",
    tools: [
      { name: "Bill.com", logo: "https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/63efaae11991984d7d4d021a_Logo-Mark-Color%201.png" },
      { name: "Dext", logo: "https://assets.dext.com/favicon.ico" },
    ],
  },
  {
    label: "Payroll",
    tools: [
      { name: "Gusto", logo: "https://gusto.com/apple-touch-icon.png" },
      { name: "ADP", logo: "https://www.google.com/s2/favicons?domain=adp.com&sz=128" },
    ],
  },
  {
    label: "Reporting",
    tools: [
      { name: "Reach Reporting", logo: "https://wpcdn.reachreporting.com/wp-content/uploads/2024/05/28151000/cropped-appcard-1e584df9-2a27-4825-ab36-e47f70b6965a-1-192x192.png" },
      { name: "FloQast", logo: "https://cdn.prod.website-files.com/67a1db1fd2f32256b80d22ff/67cb7363a73d6b2adb7181e8_256x256-1.jpg" },
    ],
  },
  {
    label: "Tax Compliance & Planning",
    tools: [
      { name: "Drake", logo: "https://www.drakesoftware.com/localassets/images/master/drake-logo.png" },
      { name: "Holistiplan", logo: "https://www.holistiplan.com/wp-content/uploads/Holistiplan-main-logo@2x.png" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

export function SoftwareExpertise() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      {/* Gradient accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full blur-[120px] bg-brand/[0.04] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] rounded-full blur-[100px] bg-primary/[0.03] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Software Expertise"
            description="Fluent across the full modern accounting stack — from cloud ledgers to AI-native ERPs."
          />
        </AnimatedSection>

        {/* 3×2 category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mt-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className="group relative rounded-2xl bg-white border border-black/[0.06] p-6 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ y: -3 }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand/60 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category label */}
              <div className="mb-5">
                <span className="text-[0.7rem] font-bold uppercase tracking-widest text-brand/60 bg-brand/[0.06] px-3 py-1.5 rounded-md">
                  {cat.label}
                </span>
              </div>

              {/* Tool items */}
              <div className="flex items-center gap-4">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-3 flex-1 min-w-0"
                  >
                    <div className="shrink-0 size-10 rounded-xl bg-neutral-50 border border-black/[0.04] flex items-center justify-center overflow-hidden p-1.5">
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        loading="lazy"
                        className="w-full h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        onError={(e) => {
                          const el = e.currentTarget;
                          el.style.display = "none";
                          const fallback = el.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <span
                        className="hidden items-center justify-center w-full h-full rounded-md bg-brand-soft text-brand-dark text-xs font-bold"
                      >
                        {tool.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-ink truncate">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
