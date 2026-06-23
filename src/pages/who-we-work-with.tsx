import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionDivider } from "@/components/shared/section-divider";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Building2,
  Rocket,
  ShoppingBag,
  UtensilsCrossed,
  Briefcase,
} from "lucide-react";

/* ================================================================== */
/*  Sector data                                                         */
/* ================================================================== */

const sectors = [
  {
    icon: Building2,
    title: "Established Mid-Size Businesses",
    description:
      "Construction, real estate, medical, and professional services firms that need a financial partner able to match their operational complexity.",
    gradient: "from-[#4D397F] via-[#362765] to-[#1e1445]",
    iconGradient: "from-[#7c6aaf] to-[#4D397F]",
    glowColor: "rgba(77, 57, 127, 0.35)",
    accentColor: "#7c6aaf",
  },
  {
    icon: Rocket,
    title: "High-Growth Startups",
    description:
      "IT, AI, and SaaS companies scaling fast and in need of investor-ready financials and forward-looking insight.",
    gradient: "from-[#EE672C] via-[#d4502a] to-[#a83222]",
    iconGradient: "from-[#f7935e] to-[#EE672C]",
    glowColor: "rgba(238, 103, 44, 0.35)",
    accentColor: "#f7935e",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce and Retail",
    description:
      "Online and omnichannel sellers managing multi-platform revenue, inventory, and sales tax across jurisdictions.",
    gradient: "from-[#1a5276] via-[#1a3c5e] to-[#162544]",
    iconGradient: "from-[#5dade2] to-[#2e86c1]",
    glowColor: "rgba(46, 134, 193, 0.35)",
    accentColor: "#5dade2",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants and Supermarket Chains",
    description:
      "Multi-venue hospitality and retail operators who need tight control over margins, payroll, and cash flow.",
    gradient: "from-[#6b3a2a] via-[#8b4513] to-[#5a2d0c]",
    iconGradient: "from-[#e8a87c] to-[#d4772c]",
    glowColor: "rgba(212, 119, 44, 0.35)",
    accentColor: "#e8a87c",
  },
  {
    icon: Briefcase,
    title: "CPA Firms",
    description:
      "Accounting firms looking for a dependable offshore team to extend their capacity through every season.",
    gradient: "from-[#2a1d4e] via-[#362765] to-[#4D397F]",
    iconGradient: "from-[#a78bfa] to-[#7c3aed]",
    glowColor: "rgba(124, 58, 237, 0.35)",
    accentColor: "#a78bfa",
  },
];

const floatingBadges = [
  { label: "6 Countries", delay: 0 },
  { label: "12+ Platforms", delay: 2 },
  { label: "ISO 27001", delay: 4 },
];

/* ================================================================== */
/*  Hero Abstract SVG Illustration                                      */
/* ================================================================== */

/** @internal Kept for potential future use */
export function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[320px] lg:min-h-[420px] flex items-center justify-center">
      {/* Abstract geometric SVG */}
      <motion.svg
        viewBox="0 0 400 400"
        fill="none"
        className="w-full max-w-[360px] h-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Large background circle */}
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          fill="var(--color-brand-tint)"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />

        {/* Overlapping medium circle */}
        <motion.circle
          cx="260"
          cy="160"
          r="100"
          fill="var(--color-brand-soft)"
          opacity="0.7"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "260px 160px" }}
        />

        {/* Small accent circle */}
        <motion.circle
          cx="140"
          cy="260"
          r="60"
          fill="var(--color-brand)"
          opacity="0.08"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Rounded rectangle 1 */}
        <motion.rect
          x="160"
          y="120"
          width="120"
          height="80"
          rx="20"
          fill="var(--color-brand-soft)"
          opacity="0.5"
          animate={{ rotate: [0, 8, 0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "220px 160px" }}
        />

        {/* Rounded rectangle 2 */}
        <motion.rect
          x="100"
          y="180"
          width="100"
          height="60"
          rx="16"
          fill="var(--color-brand)"
          opacity="0.06"
          animate={{ rotate: [0, -6, 0, 6, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{ transformOrigin: "150px 210px" }}
        />

        {/* Small decorative circle */}
        <motion.circle
          cx="300"
          cy="280"
          r="35"
          fill="var(--color-brand-tint)"
          stroke="var(--color-brand)"
          strokeWidth="1"
          strokeOpacity="0.15"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Tiny accent dot */}
        <motion.circle
          cx="320"
          cy="130"
          r="12"
          fill="var(--color-coral)"
          opacity="0.15"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.svg>

      {/* Floating badges that orbit */}
      {floatingBadges.map((badge, i) => {
        const positions = [
          { top: "8%", right: "5%" },
          { bottom: "18%", left: "0%" },
          { top: "45%", right: "-5%" },
        ];
        const pos = positions[i];
        return (
          <motion.div
            key={badge.label}
            className="absolute"
            style={pos}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -6, 0, 6, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.8 + i * 0.2 },
              scale: { duration: 0.5, delay: 0.8 + i * 0.2 },
              y: {
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: badge.delay,
              },
            }}
          >
            <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-brand/10 text-ink text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
              {badge.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ================================================================== */
/*  Main Page Component                                                 */
/* ================================================================== */

export default function WhoWeWorkWithPage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  SECTION 1 — HERO (Immersive split layout)                   */}
      {/* ============================================================ */}
      <section className="bg-background">
        {/* Video hero — flush to navbar, all content inside */}
        <div className="px-0 md:px-2 lg:px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden aspect-[3/4] sm:aspect-[16/9] md:aspect-[2.2/1] rounded-b-2xl md:rounded-b-3xl"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/about-hero-cinematic.mp4" type="video/mp4" />
            </video>

            {/* Gradient overlays for readability */}
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* All content inside the video */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-8">
              <div className="text-center max-w-2xl">
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-3 md:mb-4"
                  style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
                >
                  Who We Work With
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="text-sm sm:text-base md:text-lg text-white/60 font-medium tracking-wide uppercase mb-5 md:mb-6"
                  style={{ textShadow: "0 1px 10px rgba(0,0,0,0.3)" }}
                >
                  The Right Partner for the Right Business
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl mx-auto mb-6 md:mb-8"
                  style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}
                >
                  We don&rsquo;t work with everyone &mdash; and that&rsquo;s by
                  design. The partnerships we build are intentional, long-term,
                  and rooted in shared expectations of quality and trust.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.75 }}
                >
                  <ConsultationModal
                    trigger={
                      <Button
                        size="lg"
                        className="bg-white text-brand-dark hover:bg-white/90 shadow-xl shadow-black/20 text-sm sm:text-base px-7 sm:px-8 h-11 sm:h-12 rounded-full"
                      >
                        Book a Consultation
                        <ChevronRight className="size-4" />
                      </Button>
                    }
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 2 — SECTOR GRID (Premium dark cards)                */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-coral/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <SectionHeading
              title="Sectors We Serve"
              description="We bring depth, not breadth. These are the sectors where our expertise creates the most value."
            />
          </AnimatedSection>

          {/* Row 1: three cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {sectors.slice(0, 3).map((sector, i) => {
              const Icon = sector.icon;
              const num = String(i + 1).padStart(2, "0");
              return (
                <motion.div
                  key={sector.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 + i * 0.1 }}
                >
                  <motion.div
                    className={`group relative h-full rounded-2xl overflow-hidden bg-gradient-to-br ${sector.gradient} p-[1px] cursor-default`}
                    whileHover={{ scale: 1.03, y: -6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    style={{ willChange: "transform" }}
                  >
                    {/* Animated border glow on hover */}
                    <div
                      className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                      style={{ background: `linear-gradient(135deg, ${sector.accentColor}, transparent 60%)` }}
                    />

                    {/* Inner card */}
                    <div className="relative h-full rounded-[15px] bg-gradient-to-br from-[#140e2a] via-[#1a1335] to-[#0f0b1e] p-7 sm:p-8">
                      {/* Decorative mesh glow */}
                      <div
                        className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px] opacity-20 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none"
                        style={{ background: sector.accentColor }}
                      />
                      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-[40px] opacity-10 pointer-events-none" style={{ background: sector.accentColor }} />

                      {/* Number watermark */}
                      <span className="absolute top-4 right-5 font-heading text-6xl font-bold text-white/[0.04] leading-none select-none pointer-events-none group-hover:text-white/[0.08] transition-colors duration-500">
                        {num}
                      </span>

                      {/* Icon orb */}
                      <motion.div
                        className={`relative size-14 rounded-2xl bg-gradient-to-br ${sector.iconGradient} flex items-center justify-center mb-6 shadow-lg`}
                        style={{ boxShadow: `0 8px 24px -4px ${sector.glowColor}` }}
                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="size-7 text-white" />
                      </motion.div>

                      {/* Content */}
                      <h3 className="font-heading font-bold text-lg text-white leading-snug mb-3">
                        {sector.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/65 transition-colors duration-300">
                        {sector.description}
                      </p>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full overflow-hidden">
                        <div
                          className="h-full w-0 group-hover:w-full transition-all duration-700 ease-out rounded-full"
                          style={{ background: `linear-gradient(90deg, transparent, ${sector.accentColor}, transparent)` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Row 2: two cards centered */}
          <div className="max-w-6xl mx-auto flex justify-center gap-6 flex-wrap">
            {sectors.slice(3).map((sector, i) => {
              const Icon = sector.icon;
              const num = String(i + 4).padStart(2, "0");
              return (
                <motion.div
                  key={sector.title}
                  className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 + i * 0.1 }}
                >
                  <motion.div
                    className={`group relative h-full rounded-2xl overflow-hidden bg-gradient-to-br ${sector.gradient} p-[1px] cursor-default`}
                    whileHover={{ scale: 1.03, y: -6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    style={{ willChange: "transform" }}
                  >
                    <div
                      className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                      style={{ background: `linear-gradient(135deg, ${sector.accentColor}, transparent 60%)` }}
                    />

                    <div className="relative h-full rounded-[15px] bg-gradient-to-br from-[#140e2a] via-[#1a1335] to-[#0f0b1e] p-7 sm:p-8">
                      <div
                        className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px] opacity-20 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none"
                        style={{ background: sector.accentColor }}
                      />
                      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-[40px] opacity-10 pointer-events-none" style={{ background: sector.accentColor }} />

                      <span className="absolute top-4 right-5 font-heading text-6xl font-bold text-white/[0.04] leading-none select-none pointer-events-none group-hover:text-white/[0.08] transition-colors duration-500">
                        {num}
                      </span>

                      <motion.div
                        className={`relative size-14 rounded-2xl bg-gradient-to-br ${sector.iconGradient} flex items-center justify-center mb-6 shadow-lg`}
                        style={{ boxShadow: `0 8px 24px -4px ${sector.glowColor}` }}
                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="size-7 text-white" />
                      </motion.div>

                      <h3 className="font-heading font-bold text-lg text-white leading-snug mb-3">
                        {sector.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/65 transition-colors duration-300">
                        {sector.description}
                      </p>

                      <div className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full overflow-hidden">
                        <div
                          className="h-full w-0 group-hover:w-full transition-all duration-700 ease-out rounded-full"
                          style={{ background: `linear-gradient(90deg, transparent, ${sector.accentColor}, transparent)` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 3 — BEYOND SECTORS (Editorial magazine style)       */}
      {/* ============================================================ */}
      <SectionDivider variant="wave" />

      <section className="py-20 md:py-28 bg-brand-tint/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Beyond These Sectors"
            />
          </AnimatedSection>

          <div className="relative max-w-3xl mx-auto">
            {/* Decorative quotation mark */}
            <svg
              className="absolute -top-4 -left-8 md:-left-16 w-[120px] h-[120px] text-brand/10 pointer-events-none select-none"
              viewBox="0 0 120 120"
              fill="currentColor"
            >
              <text
                x="0"
                y="100"
                fontSize="160"
                fontFamily="Georgia, serif"
                fontWeight="bold"
              >
                &ldquo;
              </text>
            </svg>

            <div className="relative space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
              <motion.p
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                While these sectors represent our deepest expertise, the
                businesses we work with share something more fundamental than an
                industry label. They value accuracy. They expect responsiveness.
                And they understand that a true financial partner is not a
                commodity &mdash; it&rsquo;s a relationship.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                If your business is growing, if the financial complexity is
                increasing, and if you need a team that can keep up without
                cutting corners &mdash; we are likely a good fit. We have worked
                with businesses outside these sectors and will continue to do
                so, as long as the alignment is right.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                What matters most to us is not the label on your industry, but
                the standards you hold yourself to. We choose to work with
                businesses that take their finances seriously &mdash; because
                that&rsquo;s the only kind of work we know how to do well.
              </motion.p>

              <motion.p
                className="italic text-ink font-medium pt-2 text-lg border-l-4 border-brand pl-6 text-left"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Trust is not a claim. It is a track record. We are here to build
                one with you.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 4 — CLOSING CTA (Glassmorphism card)                */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img src="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[#140e2a]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e2a] via-transparent to-[#140e2a]/70" />
        <div className="absolute top-0 left-1/3 w-96 h-64 bg-[#4D397F]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-72 h-48 bg-[#EE672C]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="bg-white/[0.06] backdrop-blur-xl rounded-3xl border border-white/[0.10] p-8 sm:p-12 max-w-3xl mx-auto text-center">
              <p className="text-[#EE672C] text-xs font-semibold uppercase tracking-widest mb-4">
                Let&rsquo;s Talk
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                Ready to explore how TrueLedger can support your business?
              </h2>
              <p className="text-white/45 text-sm sm:text-base max-w-lg mx-auto mb-10">
                Whether you see your sector above or not, the conversation
                starts the same way &mdash; with understanding what you need.
              </p>
              <ConsultationModal
                trigger={
                  <Button
                    size="lg"
                    className="text-base px-8 h-13 font-semibold shadow-xl shadow-[#EE672C]/20 border-0 text-white cursor-pointer"
                    style={{ background: "linear-gradient(135deg, #EE672C, #B03B2D)" }}
                  >
                    Book a Consultation
                    <ChevronRight className="size-4" />
                  </Button>
                }
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
