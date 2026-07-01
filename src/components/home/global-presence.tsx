import { motion } from "framer-motion";

const countries = [
  {
    name: "United States",
    code: "us",
    label: "Entity Setup, Tax & Accounting",
    viewBox: "0 0 100 62",
    path: "M5,9 Q3,14 3,20 L3,34 Q4,38 6,42 L10,47 L16,51 L22,54 L28,56 Q30,58 32,60 Q34,62 36,62 Q38,60 40,57 L46,54 L52,52 L56,50 L59,49 L62,50 Q63,52 64,54 Q65,56 66,59 Q67,61 67,62 Q68,58 70,54 L73,48 L76,42 L80,35 L84,28 Q87,22 90,18 L93,14 Q95,10 97,7 L94,9 L90,10 Q87,7 84,6 L78,4 L72,3 L64,2 L54,2 L44,2 L34,3 L24,5 L16,7 L10,8 Z",
  },
  {
    name: "Canada",
    code: "ca",
    label: "Cross-Border Tax & Compliance",
    viewBox: "0 0 100 68",
    path: "M3,56 L5,46 Q4,38 5,32 L8,26 L14,20 Q18,16 22,12 L28,8 L34,5 Q38,6 40,10 L42,16 Q44,20 46,22 Q48,20 50,16 L54,12 Q58,8 62,5 L68,3 Q72,3 76,5 L80,8 Q84,12 86,16 L88,22 Q90,28 92,34 L94,40 Q94,46 92,50 L88,54 L82,56 L76,58 Q68,60 60,62 L50,63 Q40,64 30,63 L20,61 L12,58 L6,56 Z",
  },
  {
    name: "United Kingdom",
    code: "gb",
    label: "Companies House & HMRC",
    viewBox: "0 0 50 100",
    path: "M22,3 L16,6 Q12,10 11,15 Q13,18 16,22 L19,26 Q15,29 13,32 L16,38 Q14,42 12,46 Q10,50 9,55 L12,60 Q10,64 12,68 L16,74 Q20,78 24,82 L28,86 Q32,90 35,94 Q38,96 40,94 Q39,88 38,82 L36,74 Q35,68 34,62 L32,54 Q31,48 30,42 L28,34 Q27,28 26,22 L25,16 Q24,10 23,6 Z",
  },
  {
    name: "India",
    code: "in",
    label: "GST, TDS & Corporate Filings",
    viewBox: "0 0 72 100",
    path: "M8,8 L16,4 Q24,3 30,5 L40,4 Q48,3 54,6 L62,12 Q60,18 56,24 L52,32 Q48,40 44,48 L40,58 Q38,66 36,74 L34,84 Q33,90 32,96 Q31,88 28,78 L24,66 Q20,56 16,46 L12,36 Q8,26 6,18 L5,12 Z",
  },
  {
    name: "Australia",
    code: "au",
    label: "ASIC, ABN & BAS Compliance",
    viewBox: "0 0 100 78",
    path: "M6,28 Q8,20 12,14 L20,8 Q28,4 36,3 L44,4 Q46,8 48,14 L50,20 Q52,14 54,8 L58,4 Q64,3 70,5 L78,10 Q84,16 88,24 L92,34 Q95,44 96,52 Q94,58 90,62 L82,68 Q74,72 66,74 L56,76 Q46,76 36,74 L26,70 Q18,64 12,56 L8,46 Q6,36 6,28 Z",
  },
  {
    name: "Singapore",
    code: "sg",
    label: "ACRA & IRAS Filings",
    viewBox: "0 0 100 48",
    path: "M8,26 Q14,18 22,12 L34,7 Q44,4 54,4 L66,6 Q76,10 84,18 L92,26 Q90,34 84,38 L74,42 Q64,45 54,46 L42,45 Q32,42 24,38 L16,34 Q10,30 8,26 Z",
  },
];

export function GlobalPresence() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#0a0818]">
      {/* Dotted world map background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
        <svg
          viewBox="0 0 1000 500"
          className="w-[140%] max-w-none"
          fill="none"
        >
          <defs>
            <pattern
              id="mapDots"
              x="0"
              y="0"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1" fill="white" />
            </pattern>
          </defs>
          <ellipse cx="220" cy="180" rx="130" ry="100" fill="url(#mapDots)" />
          <ellipse cx="280" cy="350" rx="70" ry="100" fill="url(#mapDots)" />
          <ellipse cx="480" cy="150" rx="60" ry="70" fill="url(#mapDots)" />
          <ellipse cx="490" cy="300" rx="70" ry="100" fill="url(#mapDots)" />
          <ellipse cx="650" cy="180" rx="140" ry="100" fill="url(#mapDots)" />
          <ellipse cx="780" cy="370" rx="70" ry="50" fill="url(#mapDots)" />
        </svg>
      </div>

      {/* Accent glows */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-[#4D397F]/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#EE672C]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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

        {/* Country grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
          {countries.map((country, i) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center"
            >
              {/* Country map silhouette */}
              <div className="relative mb-5 w-full max-w-[180px]">
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-[#EE672C]/0 group-hover:bg-[#EE672C]/8 blur-2xl transition-all duration-500 scale-110" />

                <div className="relative transition-transform duration-500 group-hover:scale-105">
                  <svg
                    viewBox={country.viewBox}
                    className="w-full h-auto drop-shadow-[0_0_12px_rgba(238,103,44,0.15)]"
                  >
                    <defs>
                      <clipPath id={`country-${i}`}>
                        <path d={country.path} />
                      </clipPath>
                    </defs>
                    {/* Subtle outline */}
                    <path
                      d={country.path}
                      fill="none"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="1"
                    />
                    {/* Flag image clipped to country shape */}
                    <image
                      href={`https://flagcdn.com/w640/${country.code}.png`}
                      x="0"
                      y="0"
                      width={country.viewBox.split(" ")[2]}
                      height={country.viewBox.split(" ")[3]}
                      clipPath={`url(#country-${i})`}
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </svg>
                </div>
              </div>

              {/* Country name */}
              <h3 className="text-white font-heading font-semibold text-sm sm:text-base mb-1 group-hover:text-[#EE672C] transition-colors duration-300">
                {country.name}
              </h3>
              {/* Service label */}
              <p className="text-white/30 text-[11px] sm:text-xs leading-tight max-w-[140px]">
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
