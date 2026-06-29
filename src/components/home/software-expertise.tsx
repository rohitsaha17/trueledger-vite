import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";

interface Tool {
  name: string;
  logo: string;
}

interface Category {
  label: string;
  tools: Tool[];
  gradient: string;
  accentColor: string;
}

const categories: Category[] = [
  {
    label: "Cloud Based Accounting",
    gradient: "from-[#2CA01C]/10 via-[#2CA01C]/5 to-transparent",
    accentColor: "#2CA01C",
    tools: [
      { name: "QuickBooks", logo: "https://cdn.worldvectorlogo.com/logos/quickbooks-2.svg" },
      { name: "Xero", logo: "https://cdn.worldvectorlogo.com/logos/xero-1.svg" },
    ],
  },
  {
    label: "AI Native",
    gradient: "from-[#6366f1]/10 via-[#6366f1]/5 to-transparent",
    accentColor: "#6366f1",
    tools: [
      { name: "Campfire", logo: "https://www.google.com/s2/favicons?domain=campfire.ai&sz=128" },
      { name: "Digits", logo: "https://digits.com/favicon/favicon-256.png?v=3" },
      { name: "Kick", logo: "https://www.google.com/s2/favicons?domain=kick.co&sz=128" },
      { name: "Puzzle", logo: "https://www.google.com/s2/favicons?domain=puzzle.io&sz=128" },
    ],
  },
  {
    label: "Bill Processing",
    gradient: "from-[#00a650]/10 via-[#00a650]/5 to-transparent",
    accentColor: "#00a650",
    tools: [
      { name: "Bill.com", logo: "https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/63efaae11991984d7d4d021a_Logo-Mark-Color%201.png" },
      { name: "Dext", logo: "https://www.google.com/s2/favicons?domain=dext.com&sz=128" },
      { name: "Stampli", logo: "https://www.stampli.com/wp-content/uploads/2026/03/Updated_Stampli_logo.svg" },
    ],
  },
  {
    label: "Payroll",
    gradient: "from-[#f45d48]/10 via-[#f45d48]/5 to-transparent",
    accentColor: "#f45d48",
    tools: [
      { name: "ADP", logo: "https://www.google.com/s2/favicons?domain=adp.com&sz=128" },
      { name: "Rippling", logo: "https://www.google.com/s2/favicons?domain=rippling.com&sz=128" },
      { name: "Gusto", logo: "https://gusto.com/apple-touch-icon.png" },
    ],
  },
  {
    label: "Workflow & Communication",
    gradient: "from-[#EE672C]/10 via-[#EE672C]/5 to-transparent",
    accentColor: "#EE672C",
    tools: [
      { name: "Karbon", logo: "https://www.google.com/s2/favicons?domain=karbonhq.com&sz=128" },
      { name: "Canopy", logo: "https://www.getcanopy.com/wp-content/themes/get_canopy/assets/images/logo.svg" },
    ],
  },
  {
    label: "Month Close",
    gradient: "from-[#4D397F]/10 via-[#4D397F]/5 to-transparent",
    accentColor: "#4D397F",
    tools: [
      { name: "Double", logo: "https://doublehq.com/wp-content/uploads/2026/01/double-logo-new.png" },
      { name: "Financial Cents", logo: "https://financial-cents.com/wp-content/uploads/2025/04/financial-cents-logo.svg" },
    ],
  },
  {
    label: "Forecasting & Reporting",
    gradient: "from-[#0ea5e9]/10 via-[#0ea5e9]/5 to-transparent",
    accentColor: "#0ea5e9",
    tools: [
      { name: "Spotlight Reporting", logo: "https://cdn.prod.website-files.com/5efc103e2e619592c6612ab2/64f6a58454e53ad531820231_Spotlight.png" },
      { name: "FloQast", logo: "https://cdn.prod.website-files.com/67a1db1fd2f32256b80d22ff/67cb7363a73d6b2adb7181e8_256x256-1.jpg" },
      { name: "Reach Reporting", logo: "https://wpcdn.reachreporting.com/wp-content/uploads/2024/05/28151000/cropped-appcard-1e584df9-2a27-4825-ab36-e47f70b6965a-1-192x192.png" },
    ],
  },
];

export function SoftwareExpertise() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full blur-[120px] bg-brand/[0.04] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] rounded-full blur-[100px] bg-primary/[0.03] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Software Expertise"
            description="Fluent across the full modern accounting stack — from cloud ledgers to AI-native ERPs."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6 mt-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className={`group relative rounded-2xl border border-black/[0.06] p-6 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] transition-all duration-300 bg-gradient-to-br ${cat.gradient}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -3 }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, ${cat.accentColor}, transparent)` }}
              />

              {/* Category label */}
              <div className="mb-5">
                <span
                  className="text-[0.7rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md"
                  style={{ color: cat.accentColor, backgroundColor: `${cat.accentColor}15` }}
                >
                  {cat.label}
                </span>
              </div>

              {/* Tool items */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {cat.tools.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-2.5">
                    <div
                      className="shrink-0 size-10 rounded-xl border flex items-center justify-center overflow-hidden p-1.5 transition-all duration-300 group-hover:shadow-md bg-white"
                      style={{ borderColor: `${cat.accentColor}20` }}
                    >
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        loading="lazy"
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          const el = e.currentTarget;
                          el.style.display = "none";
                          const fallback = el.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <span
                        className="hidden items-center justify-center w-full h-full rounded-md text-white text-xs font-bold"
                        style={{ backgroundColor: cat.accentColor }}
                      >
                        {tool.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-[0.78rem] font-semibold text-ink leading-tight">
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
