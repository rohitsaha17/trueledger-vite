import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionDivider } from "@/components/shared/section-divider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
    iconBg: "bg-brand-tint",
  },
  {
    icon: Rocket,
    title: "High-Growth Startups",
    description:
      "IT, AI, and SaaS companies scaling fast and in need of investor-ready financials and forward-looking insight.",
    iconBg: "bg-coral/10",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce and Retail",
    description:
      "Online and omnichannel sellers managing multi-platform revenue, inventory, and sales tax across jurisdictions.",
    iconBg: "bg-brand-soft",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants and Supermarket Chains",
    description:
      "Multi-venue hospitality and retail operators who need tight control over margins, payroll, and cash flow.",
    iconBg: "bg-brand-tint",
  },
  {
    icon: Briefcase,
    title: "CPA Firms",
    description:
      "Accounting firms looking for a dependable offshore team to extend their capacity through every season.",
    iconBg: "bg-coral/10",
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

function HeroIllustration() {
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
  const cardDirections = [
    { x: -40, y: 0 },
    { x: 40, y: 0 },
    { x: -40, y: 0 },
    { x: 0, y: 40 },
    { x: 40, y: 0 },
  ];

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
      {/*  SECTION 2 — SECTOR GRID (Bento layout)                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Sectors We Serve"
              description="We bring depth, not breadth. These are the sectors where our expertise creates the most value."
            />
          </AnimatedSection>

          {/* Bento Grid */}
          <div
            className="max-w-6xl mx-auto grid gap-5"
            style={{
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "auto auto",
            }}
          >
            {sectors.map((sector, i) => {
              const Icon = sector.icon;
              const num = String(i + 1).padStart(2, "0");
              const dir = cardDirections[i];

              /* Layout classes per card */
              const layoutClass =
                i === 0
                  ? "col-span-3 md:col-span-2 md:row-span-2"
                  : i === 3
                    ? "col-span-3 md:col-span-2"
                    : "col-span-3 md:col-span-1";

              /* Card 1 featured: gradient left border + mesh bg */
              const isFeatured = i === 0;
              /* Card 4 horizontal: icon left, text right */
              const isHorizontal = i === 3;

              return (
                <motion.div
                  key={sector.title}
                  className={layoutClass}
                  initial={{ opacity: 0, x: dir.x, y: dir.y }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.1 + i * 0.08,
                  }}
                >
                  <motion.div
                    className={`relative bg-white rounded-2xl border border-black/[0.06] shadow-sm p-6 sm:p-8 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand/20 ${
                      isHorizontal
                        ? "flex flex-col sm:flex-row sm:items-center gap-5"
                        : ""
                    } ${isFeatured ? "overflow-hidden" : ""}`}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Featured card: gradient left border */}
                    {isFeatured && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand via-brand-dark to-brand rounded-l-2xl" />
                    )}

                    {/* Featured card: subtle mesh gradient background */}
                    {isFeatured && (
                      <div
                        className="absolute inset-0 opacity-[0.03] rounded-2xl pointer-events-none"
                        style={{
                          backgroundImage: `
                            radial-gradient(at 20% 30%, var(--color-brand) 0%, transparent 50%),
                            radial-gradient(at 80% 70%, var(--color-brand-dark) 0%, transparent 50%),
                            radial-gradient(at 50% 50%, var(--color-coral) 0%, transparent 50%)
                          `,
                        }}
                      />
                    )}

                    {/* Sequential number */}
                    <span className="absolute top-4 right-5 font-heading text-4xl font-bold text-brand/[0.06] leading-none select-none pointer-events-none">
                      {num}
                    </span>

                    {/* Icon */}
                    <div
                      className={`shrink-0 size-12 rounded-xl ${sector.iconBg} flex items-center justify-center border border-brand/10 ${
                        isHorizontal ? "" : "mb-5"
                      }`}
                    >
                      {i === 1 ? (
                        <motion.div
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Icon className="size-6 text-brand" />
                        </motion.div>
                      ) : (
                        <Icon className="size-6 text-brand" />
                      )}
                    </div>

                    {/* Text */}
                    <div className={isHorizontal ? "flex-1 min-w-0" : ""}>
                      <h3 className="font-heading font-semibold text-base sm:text-lg text-ink leading-snug mb-3">
                        {sector.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {sector.description}
                      </p>
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
      <section
        className="py-20 md:py-28 bg-brand-dark relative overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      >
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-3xl"
          animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl"
          animate={{ x: [15, -15, 15], y: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            {/* Glassmorphism card */}
            <div className="bg-white/[0.08] backdrop-blur-xl rounded-3xl border border-white/[0.12] p-8 sm:p-12 max-w-3xl mx-auto text-center">
              <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-4">
                Let&rsquo;s Talk
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                Ready to explore how TrueLedger can support your business?
              </h2>
              <p className="text-white/40 text-base max-w-xl mx-auto mb-10">
                Whether you see your sector above or not, the conversation
                starts the same way &mdash; with understanding what you need.
              </p>
              <ConsultationModal
                trigger={
                  <Button
                    size="lg"
                    className="bg-white text-brand-dark hover:bg-white/90 shadow-xl shadow-black/20 text-base px-8 h-13"
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
