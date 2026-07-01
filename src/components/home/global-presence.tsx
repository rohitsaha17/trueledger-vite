import { motion } from "framer-motion";

const countries = [
  {
    name: "United States",
    code: "us",
    label: "Entity Setup, Tax & Accounting",
    viewBox: "130 368 145 84",
    path: "M143.589,375.989l-0.865,3.475l-3.017-1.954h-1.504l-0.865,3.691l-10.554,23.65l2.801,20.606l3.449,1.737l0.648,5.645h7.105l6.889,5.204l13.562,1.305l1.504,6.941l2.152,1.521l3.017-3.033l2.369,1.08l2.152,9.976l3.656,2.386l3.017-5.645l9.258-6.726l6.025,2.817l5.169,0.433l0.216-3.25l10.762,0.217l2.152,2.386l0.432,5.42l-1.288,3.034l1.504,5.203h3.233l3.232-4.987l-1.288-2.386l-1.288-5.204l1.936-5.86l8.826-7.59l6.673-1.953l-0.864-6.293l9.258-9.983l9.258-1.521l-1.504-5.193l9.042-5.205v-6.94l-0.865-0.433l-3.233,1.082l-0.432,4.252l-10.745,0.129l-8.419,5.594l-13.217,4.322l-2.109-2.586l5.999-9.076l-2.965-2.826l-2.014-3.838l-4.175-3.354l-4.538-0.38l-8.575-5.852L143.589,375.989z",
  },
  {
    name: "Canada",
    code: "ca",
    label: "Cross-Border Tax & Compliance",
    viewBox: "100 270 215 148",
    path: "M151.767,281.182l1.72,2.602l0.864,3.475l4.305,1.081l3.017-3.25l2.585,1.306l7.321,0.647l5.169-2.17l0.864,7.157h3.017v-3.034l3.017,0.216l7.538,8.895l4.953,3.035l-2.584,4.123l1.081,1.081l9.673,1.953l0.216,4.34l2.585,0.433l0.648-6.51l4.089-1.08l3.017,4.556l6.457,3.034l3.233,0.647l2.152-2.602l0.216-4.124l3.873-2.387l1.288,3.476l-3.449,6.077l0.432,3.033l1.937-3.033l3.873-3.475l0.216-4.556l-2.152-3.476l0.648-2.817l5.169-2.603l2.369,1.738l0.432,15.188l3.657-3.25l2.152,1.305l-3.017,5.204l3.873,0.865l5.602-8.679l4.737,4.986l-1.936,8.895l-4.737,2.603l-4.521-2.169l-8.177,1.736l0.864,2.818l-2.152,3.476l-6.673,1.521l-7.538,5.86l-6.673,8.896l-0.864,2.817l4.521,1.737l1.72,4.339l6.241,6.293l9.906,4.339l-2.152,9.975l-0.216,2.818l2.585,1.736l3.449-4.555l0.432-8.679l5.385-0.216l2.584-4.988l0.433-7.589l6.889-13.45l8.609,3.034l4.521,6.293l-1.937,6.292l3.449,1.954l8.394-5.646l2.368,15.404l7.754,9.327l0.216,4.771l-8.609,2.17l-4.088,4.338l-8.609-1.953l-4.305-0.217l-7.538,5.86l4.521-1.081l5.601-1.08l1.081,1.305l-1.504,4.771l0.216,4.34l2.585,1.736l2.584-0.648l1.296-1.953h1.72l-2.801,5.205l-5.385,0.215l-2.368,3.476h-3.017l-0.864-2.603l4.305-4.338l-5.169,1.737l-0.233-7.374l-1.487-0.863l-4.521,1.953l-0.432,3.691h-10.338l-8.832,6.08l-11.842,3.908l-1.288-1.738l5.964-8.902l-3.388-3.261l-2.152-4.132l-4.383-3.346l-4.702-0.389l-8.428-5.904l-61.122-10.043l-1.011-4.142l-5.602-5.204v-4.339l0.865-3.907l-0.433-2.168l-2.152-2.171l-0.432-3.475l5.602-3.908l-3.449-18.653l-4.737-0.217l-4.305-5.645L151.767,281.182z",
  },
  {
    name: "United Kingdom",
    code: "gb",
    label: "Companies House & HMRC",
    viewBox: "382 364 28 40",
    path: "M400.629,367.984l-1.582,2.395l0.631,0.959h3.648v1.6l-0.952,1.278l0.632,3.354l2.058,3.994l1.581,3.672l2.533,0.959l1.105,1.92l-0.155,1.755l-1.582,0.959l-0.156,0.795l1.106,0.64l-0.951,1.279l-2.221,0.959l-4.279-0.477l-6.664,3.035l-2.221-1.115l6.345-3.674l-0.796-0.477l-3.328-0.32l2.058-3.033l0.319-2.56l2.696-0.319l-0.475-4.953l-3.174-0.155l-0.95-1.115l0.155-3.674l-1.901,0.156l1.901-6.388l3.492-2.56L400.629,367.984z",
  },
  {
    name: "India",
    code: "in",
    label: "GST, TDS & Corporate Filings",
    viewBox: "558 422 84 94",
    path: "M595,509.688l3.958-1.938l2.352-8.505l-0.104-10.441l13.468-14.54v-3.447l2.774-1.081l-0.104-3.984l-2.991-5.817l1.712-3.121l3.742,3.449l4.808,0.216v1.938l-1.495,1.616l0.318,0.863l2.567,0.104l0.536,2.904h0.752l1.928-3.449l0.958-9.042l3.207-2.265l0.104-3.12l-1.279-2.481l-2.031-0.104l-7.951,5.256l0.5,3.38l-5.584-0.019l-1.97-2.41l-1.072,0.138l0.363,3.354l-12.075-0.863l-7.485-3.337l-0.397-4.106l-4.988-3.094l-0.06-6.371l-3.423-3.916l-7.867,0.752l0.855,3.424l3.854,3.12l-6.665,13.641l-4.46,0.337l-0.734,1.644l4.392,4.062l-0.216,4.105l-4.486-0.069l-0.484,2.04l3.727-0.164l0.104,1.616l-2.671,1.4l1.711,3.232l3.312,1.08l2.031-1.504l0.959-2.688l1.177-0.535l1.392,1.398l-0.424,3.449l-0.96,1.617l0.217,2.8L595,509.688z",
  },
  {
    name: "Australia",
    code: "au",
    label: "ASIC, ABN & BAS Compliance",
    viewBox: "664 588 96 82",
    path: "M672.961,609.067l-0.303,21.938l-3.371,2.472l-0.303,2.161l4.598,3.086l11.35-2.161h5.826l2.145-3.095l12.879-2.472l9.198,2.784l-0.614,3.708l1.228,3.708l7.055-1.236l0.303,1.851l-4.599,3.396l1.53,1.236l3.37-1.236l-0.917,10.2l6.44,4.944l3.683-1.236l1.841,1.852l10.735-1.548l10.123-16.381l3.682-0.925l7.357-13.596l1.841-11.739l-4.599-5.869l1.842-1.236l-3.684-11.436l-3.984-2.783l0.614-15.448l-3.684-2.782l-0.916-8.652h-1.842l-6.138,20.392l-3.37,0.312l-7.668-7.728l4.297-11.437l-7.971-1.547l-8.896,2.472l-2.454,7.104l-3.984,0.925l-0.304-4.944l-16.252,9.889l0.304,3.708l-2.454,3.397h-6.139l-13.19,5.56L672.961,609.067z",
  },
  {
    name: "Singapore",
    code: "sg",
    label: "ACRA & IRAS Filings",
    viewBox: "656.5 525.5 5 3.5",
    path: "M658.314,527.705l0.686,0.389l1.548-0.126l-0.13-1.167L659.156,527L658.314,527.705z",
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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* Country row — single line, equal height */}
        <div className="flex items-end justify-center gap-6 md:gap-8 lg:gap-10 flex-wrap lg:flex-nowrap">
          {countries.map((country, i) => {
            const [, , w, h] = country.viewBox.split(" ").map(Number);
            return (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center text-center shrink-0"
              >
                {/* Map silhouette */}
                <div
                  className="relative flex items-center justify-center"
                  style={{ height: 120 }}
                >
                  <div className="absolute inset-0 rounded-xl bg-[#EE672C]/0 group-hover:bg-[#EE672C]/8 blur-2xl transition-all duration-500" />
                  <svg
                    viewBox={country.viewBox}
                    className="relative transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(238,103,44,0.12)]"
                    style={{
                      height: 120,
                      width: 120 * (w / h),
                    }}
                  >
                    <defs>
                      <clipPath id={`geo-${country.code}`}>
                        <path d={country.path} />
                      </clipPath>
                    </defs>
                    <path
                      d={country.path}
                      fill="none"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth={country.code === "sg" ? 0.15 : 1}
                    />
                    <image
                      href={`https://flagcdn.com/w640/${country.code}.png`}
                      x={country.viewBox.split(" ")[0]}
                      y={country.viewBox.split(" ")[1]}
                      width={w}
                      height={h}
                      clipPath={`url(#geo-${country.code})`}
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </svg>
                </div>

                {/* Label */}
                <h3 className="text-white font-heading font-semibold text-sm mt-4 mb-1 group-hover:text-[#EE672C] transition-colors duration-300">
                  {country.name}
                </h3>
                <p className="text-white/30 text-[11px] leading-tight max-w-[110px]">
                  {country.label}
                </p>
              </motion.div>
            );
          })}
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
