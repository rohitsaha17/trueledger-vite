import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { ServicePageHero } from "@/components/shared/service-page-hero";

/* ------------------------------------------------------------------ */
/*  Challenge cards data                                                */
/* ------------------------------------------------------------------ */

const challengeCards = [
  {
    title: "Entity Structure for Fundraising",
    description:
      "Choosing the right holding and operating entity structure — Delaware C-Corp, Singapore HoldCo, or a hybrid — before your Series A has significant downstream consequences on investor eligibility, QSBS treatment, and cross-border IP ownership.",
  },
  {
    title: "Revenue Recognition Under ASC 606 / IFRS 15",
    description:
      "Subscription revenue, usage-based pricing, and professional services bundling all require careful deferred revenue treatment. Misclassification is a red flag during due diligence and a material issue at IPO.",
  },
  {
    title: "R&D Tax Credits Across Jurisdictions",
    description:
      "Whether you qualify for the US Section 41 R&D credit, the UK’s RDEC scheme, or India’s weighted deduction under Section 35(2AB) depends on where your engineers sit, what they are building, and how costs are allocated across entities.",
  },
  {
    title: "Transfer Pricing on IP and Shared Services",
    description:
      "If your product is built in one country and licensed to customers globally through another entity, transfer pricing documentation is not optional. Getting this wrong at the startup stage creates costly restructuring later.",
  },
  {
    title: "ESOP / Stock Option Tax Complexities",
    description:
      "US ISOs vs NQSOs, Indian ESOP taxation at exercise vs vesting, Singapore ESOP exemptions — each regime has different tax trigger points. Your employees in Mumbai, Austin, and Singapore face different obligations from the same grant.",
  },
  {
    title: "Managing Burn Rate Accounting Integrity",
    description:
      "Board reporting requires clean, consistent management accounts. Investors need GAAP-quality financials with consistent treatment of deferred revenue, capitalised development costs, and accurate headcount cost allocation.",
  },
];

/* ------------------------------------------------------------------ */
/*  Service offering cards data                                         */
/* ------------------------------------------------------------------ */

const serviceCards = [
  {
    title: "Entity Setup Across Jurisdictions",
    description:
      "Delaware C-Corp, Singapore HoldCo, Indian subsidiary — we design and implement the right multi-entity structure for your fundraising and operational needs.",
  },
  {
    title: "Revenue Recognition Policy & Documentation",
    description:
      "ASC 606 and IFRS 15 compliant revenue policies for subscription, usage-based, and hybrid pricing models — documented and audit-ready.",
  },
  {
    title: "R&D Tax Credit Analysis",
    description:
      "Identifying qualifying activities and costs across US, UK, India, and other jurisdictions to maximise your R&D credit claims.",
  },
  {
    title: "Transfer Pricing Documentation",
    description:
      "Arm’s-length analysis and contemporaneous documentation for intercompany IP licensing, shared services, and cost-sharing arrangements.",
  },
  {
    title: "ESOP & Equity Tax Advisory",
    description:
      "Structuring equity compensation plans and advising on tax implications for employees across multiple jurisdictions.",
  },
  {
    title: "Monthly Close & Board-Ready Management Accounts",
    description:
      "Consistent, GAAP-quality monthly financials with clean deferred revenue, capitalised costs, and headcount allocation your board expects.",
  },
  {
    title: "Investor & Due Diligence Data Room Preparation",
    description:
      "Organising financial records, tax filings, and compliance documentation into a structured data room for fundraising or M&A.",
  },
  {
    title: "SPAC / M&A Financial Support",
    description:
      "Restating financials, reconciling stock-based compensation, and preparing audit-ready packages for SPAC mergers and acquisitions.",
  },
  {
    title: "Multi-State & International Payroll Compliance",
    description:
      "Managing payroll tax obligations for distributed teams across US states and international jurisdictions.",
  },
  {
    title: "Sales Tax / GST / VAT Nexus Analysis for SaaS",
    description:
      "Determining where your SaaS product creates tax obligations and managing registration, collection, and filing across jurisdictions.",
  },
];

/* ------------------------------------------------------------------ */
/*  Case studies data                                                   */
/* ------------------------------------------------------------------ */

const caseStudies = [
  {
    title: "Defense Tech Startup — India-to-US Restructure",
    description:
      "A defense technology startup founded by two IIT engineers had built significant IP in an Indian private limited company. They needed a US C-Corp in Delaware for SBIR grants and VC funding. TrueLedger designed a holding structure with IP licensing, transfer pricing documentation, and consolidated reporting across both entities.",
    result: "Seed round closed in 6 weeks.",
  },
  {
    title: "SaaS Founder — SPAC Transaction Support",
    description:
      "A SaaS founder going through a SPAC merger had inconsistent revenue recognition across 24 months of financials. TrueLedger restated the entire period under ASC 606, cleaned up deferred revenue schedules, and reconciled stock-based compensation.",
    result: "Completed SPAC without SEC restatement flag.",
  },
];

/* ================================================================== */
/*  Main Page Component                                                 */
/* ================================================================== */

export default function AISaaSStartupsPage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                          */}
      {/* ============================================================ */}
      <ServicePageHero
        eyebrow="AI, SaaS & High-Growth Startups"
        title={
          <>
            You are building at speed.
            <br className="hidden sm:block" />
            <span className="text-[#EE672C]">Your finances should keep up.</span>
          </>
        }
        description="Your equity structure, international team, and product revenue model create tax and compliance complexity most traditional accountants are not equipped to handle. TrueLedger is."
        imageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
        videoSrc="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
        accentColor="#EE672C"
        overlayGradient="linear-gradient(to right, rgba(20,14,42,0.82) 0%, rgba(20,14,42,0.65) 35%, rgba(20,14,42,0.35) 65%, rgba(77,57,127,0.12) 100%)"
      />

      {/* ============================================================ */}
      {/*  SECTION 1 — CHALLENGES FOUNDERS FACE (Dark, glass cards)      */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#140e2a]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140e2a]/30 via-transparent to-[#140e2a]/30" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-14 md:mb-18"
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight font-heading">
              The Accounting &amp; Tax Challenges Founders Face
            </h2>
            <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              Building a high-growth startup means navigating financial complexity that compounds with every round, hire, and market you enter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {challengeCards.map((item, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <motion.div
                  key={item.title}
                  className="group relative rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] p-6 sm:p-7 overflow-hidden hover:bg-white/[0.12] transition-all duration-300"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <span className="absolute -top-3 -right-2 text-[5.5rem] font-heading font-black text-white/[0.04] leading-none select-none pointer-events-none">
                    {num}
                  </span>
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/60 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold tracking-wider text-primary font-mono bg-primary/[0.12] px-2.5 py-1 rounded-md">
                      {num}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-[1.05rem] text-white leading-snug mb-3 pr-4">
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-sm text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 2 — WHAT WE DO (Light, service cards)                 */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="mb-14 md:mb-16">
              <SectionHeading
                title="What We Do for AI & SaaS Companies"
                description="End-to-end financial infrastructure for startups scaling across borders, products, and funding rounds."
              />
            </div>
          </AnimatedSection>

          {/* Top rows: 3-column grid for first 9 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {serviceCards.slice(0, 9).map((item, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <motion.div
                  key={item.title}
                  className="group relative rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-7 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
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

          {/* Bottom row: last card, centered */}
          <div className="flex justify-center mt-5 lg:mt-6">
            {serviceCards.slice(9).map((item, i) => {
              const num = String(i + 10).padStart(2, "0");
              return (
                <motion.div
                  key={item.title}
                  className="group relative rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-7 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300 w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)]"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
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
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 3 — CASE STUDIES (Dark)                               */}
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
        <div className="absolute top-0 left-1/4 w-96 h-64 bg-[#4D397F]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-48 bg-[#EE672C]/8 rounded-full blur-[80px] pointer-events-none" />

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
            <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              Real outcomes for real startups navigating complex financial terrain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.title}
                className="group relative rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] p-7 sm:p-8 overflow-hidden hover:bg-white/[0.12] transition-all duration-300"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#EE672C]/60 via-[#EE672C]/30 to-transparent" />
                <h3 className="font-heading font-bold text-lg text-white leading-snug mb-4">
                  {study.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {study.description}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#EE672C]">
                    Result
                  </span>
                  <span className="text-sm font-medium text-white/90">
                    {study.result}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 4 — TESTIMONIAL                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-brand-tint/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <div className="inline-flex items-center justify-center size-12 rounded-full bg-[#EE672C]/10 mb-8">
                <svg
                  className="size-6 text-[#EE672C]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="text-xl md:text-2xl lg:text-[1.65rem] font-heading font-medium text-ink leading-relaxed mb-8">
                &ldquo;We had Big 4 auditors reviewing our books and TrueLedger had already cleaned everything up. The audit took a fraction of the time it would have otherwise. For a Series B company, that kind of financial rigour is not optional &mdash; it is expected.&rdquo;
              </blockquote>
              <div>
                <p className="font-heading font-semibold text-ink">
                  CEO, SaaS Startup
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Identity withheld per NDA
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 5 — CLOSING CTA                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#140e2a]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e2a] via-transparent to-[#140e2a]/70" />
        <div className="absolute top-0 left-1/3 w-96 h-64 bg-[#4D397F]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-72 h-48 bg-[#EE672C]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] p-10 sm:p-14">
              <p className="text-[#EE672C] text-xs font-semibold uppercase tracking-widest mb-4">
                Let&rsquo;s talk
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[2.75rem] text-white mb-4 leading-tight">
                Ready to Build on a Solid Financial Foundation?
              </h2>
              <p className="text-white/55 text-sm sm:text-base max-w-lg mx-auto mb-10">
                Whether you are pre-seed or scaling past Series B, we help founders get their financial infrastructure right &mdash; so it never becomes the thing that slows you down.
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
