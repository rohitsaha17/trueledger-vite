import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { ServicePageHero } from "@/components/shared/service-page-hero";

/* ------------------------------------------------------------------ */
/*  Challenges data                                                     */
/* ------------------------------------------------------------------ */

interface ChallengeItem {
  title: string;
  description: string;
}

const challenges: ChallengeItem[] = [
  {
    title: "Multi-Jurisdiction Sales Tax / GST / VAT Compliance",
    description:
      "Over 12,000 US sales tax jurisdictions. GST registration in Australia triggers at AUD 75,000; VAT in UK at GBP 90,000. Every new market you enter creates a new filing obligation — and the thresholds keep moving.",
  },
  {
    title: "Inventory Accounting Across Fulfilment Locations",
    description:
      "Amazon FBA, Shopify, 3PLs across states and countries. COGS, inventory valuation (FIFO vs weighted average), write-downs — all need to reconcile across locations and match your financial statements.",
  },
  {
    title: "Marketplace Facilitator Complexity",
    description:
      "Amazon, Etsy, and Walmart remit sales tax in some states but not all. Knowing which states you still owe is a moving target — and getting it wrong means either overpaying or accumulating exposure.",
  },
  {
    title: "Return and Refund Accounting",
    description:
      "Return rates of 15–30% are normal in e-commerce. This requires systematic refund liabilities, restocking fees treatment, and clear revenue recognition that reflects what you actually keep.",
  },
  {
    title: "Transfer Pricing for Cross-Border Brands",
    description:
      "Singapore IP HoldCo, US operating entity, EU distribution arm — intercompany pricing must be documented and defensible. Tax authorities are paying closer attention to e-commerce structures.",
  },
  {
    title: "Customs, Duties, and Landed Cost Accounting",
    description:
      "Customs duties are a COGS item, not an overhead line. Landed cost accounting inclusive of freight, insurance, and duties gives you true product margin — not the inflated version most brands report.",
  },
];

/* ------------------------------------------------------------------ */
/*  Services data                                                       */
/* ------------------------------------------------------------------ */

interface ServiceItem {
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    title: "Multi-Jurisdiction Sales Tax Compliance",
    description:
      "Nexus analysis, registration, rate determination, and filing across all US states — plus ongoing monitoring as thresholds and rules change.",
  },
  {
    title: "International GST / VAT Registration & Filing",
    description:
      "End-to-end registration and periodic filing for GST (Australia, India, Singapore), VAT (UK, EU), and other indirect tax regimes in markets you sell into.",
  },
  {
    title: "Inventory Accounting Across Fulfilment Locations",
    description:
      "FIFO, weighted average, and write-down accounting across Amazon FBA, Shopify, 3PLs, and warehouse locations — reconciled to your general ledger.",
  },
  {
    title: "Amazon, Shopify & Marketplace Reconciliation",
    description:
      "Transaction-level reconciliation of marketplace payouts, fees, refunds, and chargebacks against your accounting records. No more mystery variances.",
  },
  {
    title: "Landed Cost Build-Up & Product Margin Reporting",
    description:
      "Full landed cost calculation inclusive of freight, insurance, customs duties, and handling — giving you true product-level margin visibility.",
  },
  {
    title: "Return & Refund Liability Accounting",
    description:
      "Systematic tracking and booking of return reserves, restocking fee revenue, and refund liabilities aligned with revenue recognition standards.",
  },
  {
    title: "Transfer Pricing Documentation for Multi-Entity Brands",
    description:
      "Intercompany pricing studies, benchmarking reports, and contemporaneous documentation for cross-border e-commerce structures.",
  },
  {
    title: "Cross-Border Payment Processor Reconciliation",
    description:
      "Reconciliation across Stripe, PayPal, Adyen, and regional processors — handling multi-currency settlements, FX adjustments, and fee allocations.",
  },
  {
    title: "Sales Tax Voluntary Disclosure Agreements (VDA)",
    description:
      "Exposure assessment, state outreach, and managed VDA filings to resolve past-due sales tax obligations — often at significantly reduced penalties.",
  },
  {
    title: "Entity Setup for Cross-Border E-Commerce Operations",
    description:
      "Structuring and incorporating entities across jurisdictions to support multi-market operations — with tax efficiency, IP protection, and compliance built in from day one.",
  },
];

/* ------------------------------------------------------------------ */
/*  Case Studies data                                                   */
/* ------------------------------------------------------------------ */

interface CaseStudy {
  title: string;
  problem: string;
  solution: string;
  result: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Australian FMCG Beverage Brand — Cross-Border Expansion",
    problem:
      "A premium beverage brand entered US and Canadian markets but was running manual AP/AR processes with no reconciliation, no intercompany invoicing, and GST/HST obligations they had not registered for.",
    solution:
      "Built a centralised AP/AR workflow, completed GST/HST registration in Canada, set up intercompany invoicing between the Australian parent and North American entities, and implemented monthly reconciliation across all payment processors.",
    result: "Collection cycles shortened by 22 days. Full compliance across AU, US, and CA.",
  },
  {
    title: "DTC Apparel Brand — Sales Tax Remediation",
    problem:
      "A direct-to-consumer apparel brand had been selling across 50 US states for 3 years with no sales tax compliance. Nexus had been crossed in 28 states — creating significant exposure.",
    solution:
      "Conducted a full exposure assessment across all 50 states, managed Voluntary Disclosure Agreements (VDA) in 12 states with the highest liability, and built a TaxJar-integrated workflow for ongoing compliance.",
    result: "Resolved at approximately 40 cents on the dollar. Ongoing compliance fully automated.",
  },
];

/* ================================================================== */
/*  Main Page Component                                                 */
/* ================================================================== */

export default function EcommerceRetailPage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  SECTION 1 — HERO                                              */}
      {/* ============================================================ */}
      <ServicePageHero
        eyebrow="E-Commerce & Retail Businesses"
        title={
          <>
            Sell everywhere.
            <br className="hidden sm:block" />
            <span className="text-[#EE672C]">Comply everywhere.</span>
          </>
        }
        description="Every market you enter creates a new layer of tax obligation, accounting complexity, and regulatory exposure. TrueLedger helps you scale across borders without leaving a compliance trail behind."
        imageSrc="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80"
        videoSrc="https://videos.pexels.com/video-files/6774202/6774202-hd_1920_1080_25fps.mp4"
        accentColor="#EE672C"
        overlayGradient="linear-gradient(to right, rgba(20,14,42,0.82) 0%, rgba(20,14,42,0.65) 35%, rgba(20,14,42,0.35) 65%, rgba(77,57,127,0.12) 100%)"
      />

      {/* ============================================================ */}
      {/*  SECTION 2 — CHALLENGES (dark bg + glass cards)                */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#140e2a]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140e2a]/20 via-transparent to-[#140e2a]/20" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-14 md:mb-18"
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight font-heading">
              The Compliance Challenges You Are Already Feeling
            </h2>
            <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              Scaling across channels and borders is exciting &mdash; until the
              tax obligations, inventory accounting, and regulatory complexity
              start compounding.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {challenges.map((item, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
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
      {/*  SECTION 3 — SERVICES (light bg)                               */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <SectionHeading
              title="What We Do for E-Commerce & Retail Brands"
              description="From sales tax compliance to cross-border entity setup &mdash; everything an e-commerce brand needs to operate clean and scale with confidence."
            />
          </AnimatedSection>

          {/* Top rows: 3x3 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.slice(0, 9).map((item, i) => {
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

          {/* Bottom row: 1 card, centered */}
          <div className="flex justify-center gap-5 lg:gap-6 mt-5 lg:mt-6">
            {services.slice(9).map((item, i) => {
              const num = String(i + 10).padStart(2, "0");
              return (
                <motion.div
                  key={item.title}
                  className="group relative rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-7 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300 w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)]"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.72,
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
                    Talk to an E-Commerce Specialist
                    <ChevronRight className="size-4" />
                  </Button>
                }
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 4 — CASE STUDIES (dark bg)                            */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#140e2a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#140e2a] via-[#140e2a]/95 to-[#140e2a]" />
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
              Real Work. Real Results.
            </h2>
            <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              How we have helped e-commerce brands resolve compliance exposure
              and build infrastructure for clean cross-border growth.
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
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#EE672C]/60 via-[#EE672C]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="font-heading font-bold text-lg text-white leading-snug mb-5">
                  {study.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#EE672C] mb-1.5 block">
                      The Problem
                    </span>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#EE672C] mb-1.5 block">
                      What We Did
                    </span>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/[0.08]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#EE672C] mb-1.5 block">
                      Result
                    </span>
                    <p className="text-sm text-white font-medium leading-relaxed">
                      {study.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 5 — TESTIMONIAL                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-brand-tint/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[6rem] font-heading font-black text-brand/[0.06] leading-none select-none pointer-events-none">
                &ldquo;
              </span>
              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl lg:text-[1.7rem] font-heading font-medium text-ink leading-relaxed italic">
                  &ldquo;We were selling in 35 countries and our books were a
                  mess. TrueLedger not only cleaned everything up &mdash; they
                  built us a reporting framework that actually tells us which
                  markets make money and which ones just look busy.&rdquo;
                </p>
                <footer className="mt-8">
                  <p className="text-sm font-semibold text-ink">
                    Co-Founder
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Cross-Border E-Commerce Brand
                  </p>
                </footer>
              </blockquote>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 6 — CLOSING CTA                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80"
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
              Sell Everywhere. Comply Everywhere.
            </h2>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you are entering new markets or cleaning up years of
              accumulated exposure &mdash; we help e-commerce brands build
              compliance infrastructure that scales with the business.
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
                  Book a Discovery Call
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
