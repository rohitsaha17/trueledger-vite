import { motion } from "framer-motion";

const countries = [
  { name: "United States", code: "us", label: "Entity Setup, Tax & Accounting" },
  { name: "Canada", code: "ca", label: "Cross-Border Tax & Compliance" },
  { name: "United Kingdom", code: "gb", label: "Companies House & HMRC" },
  { name: "India", code: "in", label: "GST, TDS & Corporate Filings" },
  { name: "Australia", code: "au", label: "ASIC, ABN & BAS Compliance" },
  { name: "Singapore", code: "sg", label: "ACRA & IRAS Filings" },
];

export function GlobalPresence() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#0a0818]">
      {/* World map background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 1000 500" className="w-[140%] max-w-none" fill="none">
          <defs>
            <pattern id="mapDots" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1" fill="white" />
            </pattern>
          </defs>
          {/* Simplified continent shapes as dotted regions */}
          {/* North America */}
          <ellipse cx="220" cy="180" rx="130" ry="100" fill="url(#mapDots)" />
          {/* South America */}
          <ellipse cx="280" cy="350" rx="70" ry="100" fill="url(#mapDots)" />
          {/* Europe */}
          <ellipse cx="480" cy="150" rx="60" ry="70" fill="url(#mapDots)" />
          {/* Africa */}
          <ellipse cx="490" cy="300" rx="70" ry="100" fill="url(#mapDots)" />
          {/* Asia */}
          <ellipse cx="650" cy="180" rx="140" ry="100" fill="url(#mapDots)" />
          {/* Australia */}
          <ellipse cx="780" cy="370" rx="70" ry="50" fill="url(#mapDots)" />
        </svg>
      </div>

      {/* Accent glows */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-[#4D397F]/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#EE672C]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[#EE672C] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Our Global Reach
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Serving Clients Across{" "}
            <span className="text-[#EE672C]">6 Countries</span>
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto">
            From entity setup to ongoing compliance — wherever you operate, we
            deliver accounting, tax, and advisory support built for that
            jurisdiction.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {countries.map((country, i) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center"
            >
              {/* Flag container */}
              <div className="relative mb-5">
                {/* Glow effect on hover */}
                <div className="absolute -inset-3 rounded-full bg-[#EE672C]/0 group-hover:bg-[#EE672C]/10 blur-xl transition-all duration-500" />

                {/* Hexagonal frame */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                    <defs>
                      <clipPath id={`hex-${i}`}>
                        <polygon points="50,2 93,25 93,75 50,98 7,75 7,25" />
                      </clipPath>
                    </defs>
                    {/* Outer hex border */}
                    <polygon
                      points="50,2 93,25 93,75 50,98 7,75 7,25"
                      fill="none"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="1.5"
                      className="group-hover:stroke-[rgba(238,103,44,0.3)] transition-all duration-500"
                    />
                    {/* Inner background */}
                    <polygon
                      points="50,5 90,26 90,74 50,95 10,74 10,26"
                      fill="rgba(20,14,42,0.6)"
                    />
                    {/* Flag image */}
                    <image
                      href={`https://flagcdn.com/w320/${country.code}.png`}
                      x="8"
                      y="8"
                      width="84"
                      height="84"
                      clipPath={`url(#hex-${i})`}
                      preserveAspectRatio="xMidYMid slice"
                      className="transition-transform duration-500 group-hover:scale-110"
                      style={{ transformOrigin: "center" }}
                    />
                  </svg>
                </div>
              </div>

              {/* Country name */}
              <h3 className="text-white font-heading font-semibold text-sm sm:text-base mb-1 group-hover:text-[#EE672C] transition-colors duration-300">
                {country.name}
              </h3>
              {/* Service label */}
              <p className="text-white/30 text-[11px] sm:text-xs leading-tight max-w-[120px]">
                {country.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 mx-auto max-w-4xl"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-[#EE672C]/30 to-transparent" />
          <p className="text-center text-white/30 text-sm mt-6">
            Offices in New Delhi &amp; Austin, Texas — delivering across
            borders, time zones, and jurisdictions
          </p>
        </motion.div>
      </div>
    </section>
  );
}
