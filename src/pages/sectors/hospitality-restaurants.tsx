import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ServicePageHero } from "@/components/shared/service-page-hero";

/* ================================================================== */
/*  Data                                                               */
/* ================================================================== */

const challenges = [
  {
    number: "01",
    title: "Multi-Location Financial Consolidation",
    description:
      "Operating three locations feels manageable until each has its own entity, bank account, POS system, and lease. Getting a consolidated view requires more than a spreadsheet.",
  },
  {
    number: "02",
    title: "Food & Beverage Cost Variance",
    description:
      "Inventory spoilage, supplier price changes, and kitchen waste can swing your F&B cost percentage by three to five points week-to-week.",
  },
  {
    number: "03",
    title: "Tip Pooling, Tipped Credit, and Payroll Compliance",
    description:
      "FICA tip credit calculations, state-level tip pooling rules, and DOL regulations on service charges vs voluntary gratuities. Payroll errors attract audits.",
  },
  {
    number: "04",
    title: "Sales Tax Across Multiple Jurisdictions",
    description:
      "Sales tax obligations on food, beverages, and catering are inconsistent jurisdiction by jurisdiction. What is taxable in Texas may be exempt in New York.",
  },
  {
    number: "05",
    title: "Working Capital Seasonality",
    description:
      "Without rolling cash flow forecasts tied to covers, covers-per-turn, and average check, you are flying blind during the slow season.",
  },
  {
    number: "06",
    title: "Entity Structure for Group Expansion",
    description:
      "Opening a new location in a new state requires entity structure review, inter-company agreements, and state-level nexus obligations.",
  },
];

const services = [
  {
    title: "Multi-Location Chart of Accounts & Consolidation",
    description:
      "A unified chart of accounts designed for multi-location restaurant groups, with automated consolidation that gives you a single view across every entity.",
  },
  {
    title: "Weekly F&B Cost Tracking & Variance Reporting",
    description:
      "Track food and beverage cost percentages weekly, with variance analysis that highlights where margin is leaking before it compounds.",
  },
  {
    title: "POS Reconciliation (Toast, Square, Lightspeed, Revel)",
    description:
      "Daily reconciliation of POS sales data against bank deposits, tips, and third-party delivery payouts across every major restaurant POS platform.",
  },
  {
    title: "FICA Tip Credit Calculation & Filing",
    description:
      "Accurate FICA tip credit calculations each payroll cycle, ensuring you claim every dollar you are entitled to without triggering compliance risk.",
  },
  {
    title: "Multi-State Payroll & Tip Pool Compliance",
    description:
      "Payroll processing that handles tipped employees, tip pooling rules, and multi-state withholding obligations for restaurant groups operating across state lines.",
  },
  {
    title: "Sales Tax Compliance — Food, Beverage & Catering",
    description:
      "Jurisdiction-specific sales tax filings that account for the nuances of food, beverage, and catering taxability across every state you operate in.",
  },
  {
    title: "Cash Flow Forecasting Tied to Trading Calendar",
    description:
      "Rolling cash flow forecasts built around your trading calendar, seasonal patterns, and covers data so you always know where you stand.",
  },
  {
    title: "Lease Accounting Under ASC 842",
    description:
      "Lease classification, right-of-use asset calculations, and ongoing compliance with ASC 842 for every restaurant location in your portfolio.",
  },
  {
    title: "Entity Structure Review for New Locations",
    description:
      "Evaluate entity structure options before signing a new lease, including LLC vs S-Corp analysis, inter-company agreements, and state nexus obligations.",
  },
  {
    title: "Year-End Tax Planning & Filing",
    description:
      "Proactive tax planning throughout the year, with year-end strategies tailored to the hospitality industry and timely filing across all entities.",
  },
];

const caseStudies = [
  {
    title: "Multi-State Restaurant Chain Launch",
    description:
      "Launching 2nd and 3rd locations in Texas and Illinois while managing New York ops. Consolidated chart of accounts, inter-company agreements, payroll with tip credits.",
    result: "Month-end close from 14 days to 5 days.",
  },
  {
    title: "Catering & Events Business — Cash Flow Restructure",
    description:
      "High-end catering company, USD 4M revenue, recurring cash crunches. Rebuilt booking-to-cash model, 13-week forecasting.",
    result: "Eliminated overdraft dependency in two quarters.",
  },
];

/* ================================================================== */
/*  Page                                                               */
/* ================================================================== */

export default function HospitalityRestaurantsPage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <ServicePageHero
        eyebrow="Hospitality & Restaurant Businesses"
        title={
          <>
            Managing wafer-thin margins.
            <br className="hidden sm:block" />
            <span className="text-[#EE672C]">
              With precision, not guesswork.
            </span>
          </>
        }
        description="Running a restaurant — or a group of them — means managing multi-location complexity, seasonal cash flows, and a workforce that spans tipped employees, contract staff, and kitchen teams across states. TrueLedger understands the hospitality P&L."
        imageSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
        videoSrc="https://videos.pexels.com/video-files/4253491/4253491-uhd_2560_1440_25fps.mp4"
        accentColor="#EE672C"
      />

      {/* ============================================================ */}
      {/*  CHALLENGES                                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#140e2a]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140e2a]/40 via-transparent to-[#140e2a]/40" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-14 md:mb-18"
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight font-heading">
              Challenges We Solve
            </h2>
            <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              Hospitality finance is not general-purpose accounting. These are the
              issues that catch restaurant groups off guard.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {challenges.map((item, i) => (
              <motion.div
                key={item.title}
                className="group relative rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] p-6 sm:p-7 overflow-hidden hover:bg-white/[0.12] transition-all duration-300"
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
                  {item.number}
                </span>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/60 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold tracking-wider text-primary font-mono bg-primary/[0.12] px-2.5 py-1 rounded-md">
                    {item.number}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base sm:text-[1.05rem] text-white leading-snug mb-3 pr-4">
                  {item.title}
                </h3>
                <p className="text-[13px] sm:text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SERVICES                                                      */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-brand-tint/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="What We Deliver for Hospitality Businesses"
              description="End-to-end financial management built specifically for restaurants, restaurant groups, and hospitality operators."
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.map((item, i) => (
              <motion.div
                key={item.title}
                className="relative rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -4 }}
              >
                <h3 className="font-heading font-bold text-base text-ink leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CASE STUDIES                                                  */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#140e2a]/92" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140e2a]/40 via-transparent to-[#140e2a]/40" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-14 md:mb-18"
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight font-heading">
              Case Studies
            </h2>
            <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              Real outcomes for real hospitality businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((item, i) => (
              <motion.div
                key={item.title}
                className="group relative rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] p-7 sm:p-8 overflow-hidden hover:bg-white/[0.12] transition-all duration-300"
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
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#EE672C]/60 via-[#EE672C]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="font-heading font-bold text-lg text-white leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-5">
                  {item.description}
                </p>
                <div className="bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#EE672C] mb-1">
                    Result
                  </p>
                  <p className="text-sm font-medium text-white/90">
                    {item.result}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-[#EE672C] transition-colors"
            >
              View All Case Studies
              <ChevronRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TESTIMONIAL                                                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-brand-tint/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <div className="inline-flex items-center justify-center size-12 rounded-full bg-brand-tint border border-brand/10 mb-8">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-brand"
                >
                  <path d="M11.3 2.5c-1.4.7-2.5 1.6-3.3 2.7C7.2 6.3 6.8 7.5 6.8 8.9c0 .4.1.7.2 1 .7-.5 1.4-.7 2.2-.7 1 0 1.8.3 2.5 1 .7.7 1 1.5 1 2.5s-.4 1.9-1.1 2.6c-.7.7-1.6 1-2.6 1-1.2 0-2.2-.5-3-1.4-.8-.9-1.2-2.1-1.2-3.5 0-2 .6-3.8 1.8-5.4 1.2-1.6 2.8-2.7 4.7-3.4l.8 1.4zm8.6 0c-1.4.7-2.5 1.6-3.3 2.7-.8 1.1-1.2 2.3-1.2 3.7 0 .4.1.7.2 1 .7-.5 1.4-.7 2.2-.7 1 0 1.8.3 2.5 1 .7.7 1 1.5 1 2.5s-.4 1.9-1.1 2.6c-.7.7-1.6 1-2.6 1-1.2 0-2.2-.5-3-1.4-.8-.9-1.2-2.1-1.2-3.5 0-2 .6-3.8 1.8-5.4 1.2-1.6 2.8-2.7 4.7-3.4l.8 1.4z" />
                </svg>
              </div>
              <blockquote className="text-lg md:text-xl lg:text-2xl font-medium text-ink leading-relaxed mb-8 max-w-3xl mx-auto">
                &ldquo;TrueLedger did not just do our books &mdash; they understood
                what running a restaurant actually looks like. They knew what a
                covers report meant and why F&B cost percentage is the number I
                look at first every week.&rdquo;
              </blockquote>
              <div>
                <p className="text-sm font-semibold text-ink">
                  &mdash; Founder, Multi-Location Restaurant Group
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                           */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
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
              Let&rsquo;s Talk About Your Restaurant&rsquo;s Numbers.
            </h2>
            <p className="text-white/45 text-sm sm:text-base max-w-lg mx-auto mb-10">
              Whether you operate one location or ten, your finance function should
              work as hard as your kitchen does. Let&rsquo;s make that happen.
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
