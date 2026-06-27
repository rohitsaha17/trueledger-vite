import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { ServicePageHero } from "@/components/shared/service-page-hero";

/* ================================================================== */
/*  Data                                                               */
/* ================================================================== */

interface ChallengeItem {
  num: string;
  title: string;
  description: string;
}

const challenges: ChallengeItem[] = [
  {
    num: "01",
    title: "Outgrowing Basic Bookkeeping",
    description:
      "When revenue crosses USD 1–2M, basic bookkeeping stops being enough. Banks, lenders, and buyers expect GAAP-quality financials.",
  },
  {
    num: "02",
    title: "Owner Tax Efficiency",
    description:
      "S-Corp election timing, reasonable compensation benchmarks, Section 199A deduction eligibility can shift effective tax rates by 5–10 percentage points.",
  },
  {
    num: "03",
    title: "Multi-State Expansion Complexity",
    description:
      "Hiring remote employees or opening satellite offices creates nexus and triggers income tax, payroll tax, and sales tax obligations.",
  },
  {
    num: "04",
    title: "Banking and Lender Readiness",
    description:
      "SBA loans, commercial real estate financing require clean, current financials. Disorganised books are a deal-stopper.",
  },
  {
    num: "05",
    title: "Succession and Exit Planning",
    description:
      "The difference between an asset sale and a stock sale can have six-figure tax consequences.",
  },
  {
    num: "06",
    title: "Cross-Border Complexity",
    description:
      "Many SMB owners in the US are foreign nationals with FBAR, FATCA, PFIC obligations alongside US business obligations.",
  },
];

interface ServiceItem {
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    title: "Monthly Close & Financial Reporting",
    description:
      "Accurate, GAAP-compliant monthly financials delivered on time — P&L, balance sheet, and cash flow — so you always know where your business stands.",
  },
  {
    title: "Annual Business & Owner Tax Preparation",
    description:
      "Coordinated business and personal returns filed together, covering all entity types and owner-level reporting.",
  },
  {
    title: "S-Corp Election Analysis & Reasonable Compensation Benchmarking",
    description:
      "We evaluate whether an S-Corp election makes sense for your situation and set compensation at defensible, IRS-compliant levels.",
  },
  {
    title: "Section 199A Pass-Through Deduction Planning",
    description:
      "Maximise the qualified business income deduction while staying within the rules — including W-2 wage and capital thresholds.",
  },
  {
    title: "Multi-State Nexus Review & Compliance",
    description:
      "We assess your exposure across states and manage registration, filing, and ongoing compliance so nothing is missed.",
  },
  {
    title: "Bank & Lender Package Preparation",
    description:
      "Clean, lender-ready financial packages that meet SBA, bank, and commercial lending standards — built to move fast.",
  },
  {
    title: "Owner Retirement Plan Structuring",
    description:
      "From SEP-IRAs to defined benefit plans, we help you choose and implement the retirement strategy that fits your income and goals.",
  },
  {
    title: "Exit Readiness & Financial Normalisation",
    description:
      "Normalised financials, adjusted EBITDA, and clean documentation that help you present your business at its true value.",
  },
  {
    title: "Cross-Border Owner Tax Obligations",
    description:
      "FBAR, FATCA, PFIC, and treaty-based reporting for SMB owners with financial ties outside the United States.",
  },
  {
    title: "QuickBooks / Xero Clean-Up & Chart of Accounts Restructure",
    description:
      "We untangle messy books, fix historical errors, and restructure your chart of accounts for clarity and scale.",
  },
];

interface CaseStudyItem {
  title: string;
  situation: string;
  result: string;
}

const caseStudies: CaseStudyItem[] = [
  {
    title: "Professional Services Firm — Owner Tax Restructure",
    situation:
      "Two-partner consulting firm, general partnership, 48% effective tax rate. Restructured as S-Corp, defined benefit plans, Section 199A.",
    result: "Tax rate reduced to ~32%.",
  },
  {
    title: "Manufacturing SMB — Lender Package Preparation",
    situation:
      "Mid-size manufacturer seeking SBA 7(a) loan. Converted to accrual basis, normalised owner compensation, clean loan package.",
    result: "SBA loan approved in 11 weeks.",
  },
];

/* ================================================================== */
/*  Main Page Component                                                */
/* ================================================================== */

export default function SmallMidSizeBusinessesPage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <ServicePageHero
        eyebrow="Small & Mid-Size Businesses"
        title={
          <>
            Most SMBs outgrow their bookkeeper
            <br className="hidden sm:block" />
            <span className="text-[#EE672C]">before they realise it.</span>
          </>
        }
        description="At TrueLedger, we give small and mid-size businesses the financial infrastructure — accounting, tax, and advisory — that lets owners make decisions with confidence."
        imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
        videoSrc="https://videos.pexels.com/video-files/7578554/7578554-hd_1920_1080_30fps.mp4"
        accentColor="#EE672C"
        overlayGradient="linear-gradient(to right, rgba(20,14,42,0.82) 0%, rgba(20,14,42,0.65) 35%, rgba(20,14,42,0.35) 65%, rgba(77,57,127,0.12) 100%)"
      />

      {/* ============================================================ */}
      {/*  SECTION 2 — CHALLENGES (dark, glass cards)                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#140e2a]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140e2a]/40 via-transparent to-[#140e2a]/40" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight font-heading">
              Challenges SMB Owners Face
            </h2>
            <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              Growth creates financial complexity. These are the inflection
              points where the right partner makes all the difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {challenges.map((item, i) => (
              <motion.div
                key={item.title}
                className="group relative rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] p-6 sm:p-7 overflow-hidden hover:bg-white/[0.12] transition-colors duration-300"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -4 }}
              >
                <span className="absolute -top-3 -right-2 text-[5.5rem] font-heading font-black text-white/[0.04] leading-none select-none pointer-events-none">
                  {item.num}
                </span>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#EE672C]/60 via-[#4D397F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold tracking-wider text-[#EE672C]/80 font-mono bg-[#EE672C]/[0.1] px-2.5 py-1 rounded-md">
                    {item.num}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base sm:text-[1.05rem] text-white leading-snug mb-3 pr-4">
                  {item.title}
                </h3>
                <p className="text-[13px] sm:text-sm text-white/55 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 3 — SERVICES (light section)                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
        >
          <source
            src="https://videos.pexels.com/video-files/7578554/7578554-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/60" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="mb-14 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight font-heading mb-4">
                What We Do for SMBs
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                Accounting, tax, and advisory services designed for the real
                needs of growing businesses.
              </p>
            </div>
          </AnimatedSection>

          {/* Top rows: 5 per row on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
            {services.slice(0, 5).map((item, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <motion.div
                  key={item.title}
                  className="group relative rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-7 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  whileHover={{ y: -4 }}
                >
                  <span className="absolute -top-3 -right-2 text-[5.5rem] font-heading font-black text-brand/[0.04] leading-none select-none pointer-events-none">
                    {num}
                  </span>
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand/60 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold tracking-wider text-brand/70 font-mono bg-brand/[0.06] px-2.5 py-1 rounded-md">
                      {num}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-[1.05rem] text-ink leading-snug mb-3 pr-4">
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom row: remaining 5 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6 mt-5 lg:mt-6">
            {services.slice(5).map((item, i) => {
              const num = String(i + 6).padStart(2, "0");
              return (
                <motion.div
                  key={item.title}
                  className="group relative rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-7 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: (i + 5) * 0.08,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  whileHover={{ y: -4 }}
                >
                  <span className="absolute -top-3 -right-2 text-[5.5rem] font-heading font-black text-brand/[0.04] leading-none select-none pointer-events-none">
                    {num}
                  </span>
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand/60 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold tracking-wider text-brand/70 font-mono bg-brand/[0.06] px-2.5 py-1 rounded-md">
                      {num}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-[1.05rem] text-ink leading-snug mb-3 pr-4">
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="flex justify-center mt-12">
              <ConsultationModal
                trigger={
                  <Button
                    size="lg"
                    className="text-base px-8 h-13 font-semibold shadow-xl shadow-brand/15 cursor-pointer"
                  >
                    Talk to an SMB Specialist
                    <ChevronRight className="size-4" />
                  </Button>
                }
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 4 — CASE STUDIES (dark section)                      */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#140e2a]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140e2a]/40 via-transparent to-[#140e2a]/40" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight font-heading">
              Results in Practice
            </h2>
            <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              How we have helped SMB owners solve real financial challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.title}
                className="group relative rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] p-7 sm:p-8 overflow-hidden hover:bg-white/[0.12] transition-colors duration-300"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#EE672C]/60 via-[#4D397F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="font-heading font-bold text-lg text-white leading-snug mb-4">
                  {study.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed mb-5">
                  {study.situation}
                </p>
                <div className="flex items-center gap-3">
                  <span className="inline-block h-px w-8 bg-[#EE672C]/50" />
                  <span className="text-sm font-semibold text-[#EE672C]">
                    {study.result}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 5 — TESTIMONIAL                                      */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-brand-tint/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <svg
                className="mx-auto mb-6 text-brand/20"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.3 2.5c-1.4.7-2.5 1.5-3.5 2.7C6.7 6.5 6 8.1 6 10c0 .4.1.7.1 1H8c1.7 0 3 1.3 3 3v4c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3v-4c0-3.3 1-6.1 2.8-8.3C5.6 3.5 8.1 2.1 11 1l.3 1.5zm13 0c-1.4.7-2.5 1.5-3.5 2.7-1.1 1.3-1.8 2.9-1.8 4.8 0 .4.1.7.1 1H21c1.7 0 3 1.3 3 3v4c0 1.7-1.3 3-3 3h-4c-1.7 0-3-1.3-3-3v-4c0-3.3 1-6.1 2.8-8.3C18.6 3.5 21.1 2.1 24 1l.3 1.5z" />
              </svg>
              <blockquote className="text-lg md:text-xl lg:text-2xl font-heading font-medium text-ink leading-relaxed mb-8">
                I had been using the same bookkeeper for seven years. When I
                decided to sell the business, my broker told me the books were
                not presentable. TrueLedger fixed two years of financials in six
                weeks and we closed the deal.
              </blockquote>
              <div>
                <p className="font-semibold text-ink text-sm">
                  &mdash; Owner, Industrial Services Business
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 6 — CLOSING CTA                                      */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#140e2a]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e2a] via-transparent to-[#140e2a]/70" />
        <div className="absolute top-0 left-1/3 w-96 h-64 bg-[#4D397F]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-72 h-48 bg-[#EE672C]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <p className="text-[#EE672C] text-xs font-semibold uppercase tracking-widest mb-4">
              Ready to get started?
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight max-w-3xl mx-auto">
              Your Business Deserves Better Than Basic Bookkeeping.
            </h2>
            <p className="text-white/45 text-sm sm:text-base max-w-lg mx-auto mb-10">
              Whether you need clean financials, smarter tax strategy, or a
              partner who understands where your business is headed &mdash; we
              are ready to help.
            </p>
            <ConsultationModal
              trigger={
                <Button
                  size="lg"
                  className="text-base px-8 h-13 font-semibold shadow-xl shadow-[#EE672C]/20 border-0 text-white cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #EE672C, #B03B2D)",
                  }}
                >
                  Book a Consultation
                  <ChevronRight className="size-4" />
                </Button>
              }
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
