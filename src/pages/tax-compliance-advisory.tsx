import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { ServiceFAQ } from "@/components/shared/service-faq";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Briefcase,
  Clock,
  Eye,
  DollarSign,
} from "lucide-react";
import { ServicePageHero } from "@/components/shared/service-page-hero";

/* ------------------------------------------------------------------ */
/*  Individual & HNW service cards data                                 */
/* ------------------------------------------------------------------ */

interface ServiceItem {
  title: string;
  description: string;
}

const individualServices: ServiceItem[] = [
  {
    title: "Individual Tax Return Preparation",
    description:
      "Accurate, complete, and filed on time — with a careful eye on every income source, deduction, and credit you are entitled to. No missed opportunities, no last-minute scrambles.",
  },
  {
    title: "Personal Tax Advisory — Quarterly & Year-End",
    description:
      "Tax planning is most effective when it happens throughout the year. We review your position quarterly, estimate your liability, and make adjustments before the year closes.",
  },
  {
    title: "Capital Gains & Real Estate Tax Planning",
    description:
      "The tax consequences of selling an investment or property can be significant, but manageable with the right advice at the right time. We help you think through timing, structure, and strategy before you act.",
  },
  {
    title: "Retirement & Wealth Accumulation Planning",
    description:
      "The decisions you make today around retirement accounts, Roth conversions, and distributions compound over decades. We help you build a tax-efficient retirement strategy for where you are and where you want to be.",
  },
  {
    title: "Education, Charitable & Estate Planning",
    description:
      "Whether saving for education, planning charitable giving, or thinking about wealth transfer — we help you structure these decisions in a way that is both personally meaningful and tax-efficient.",
  },
  {
    title: "Cross-Border Tax Planning — NRIs & US Relocations",
    description:
      "Moving countries changes your tax life in ways most people underestimate. We specialize in advising individuals returning to India, relocating to the US, or managing financial lives across both countries.",
  },
];

/* ------------------------------------------------------------------ */
/*  Business service cards data                                         */
/* ------------------------------------------------------------------ */

const businessServices: ServiceItem[] = [
  {
    title: "Business Tax Return Preparation",
    description:
      "Thorough preparation and filing of federal and state returns across all entity types — C-Corps, S-Corps, partnerships, and LLCs. We coordinate your business and personal filings together.",
  },
  {
    title: "Entity Structuring & Owner Compensation",
    description:
      "The right business structure and the right way to pay yourself can make a meaningful difference to your overall tax position. We advise on entity choice, restructuring, and efficient compensation mix.",
  },
  {
    title: "Flow-Through Entity Planning",
    description:
      "For S-Corp and partnership owners, the relationship between business income and personal tax liability is rarely straightforward. We help you navigate basis tracking and qualified business income deductions.",
  },
  {
    title: "Credits, Incentives & Capital Expenditure Planning",
    description:
      "R&D credits, energy incentives, Section 179 expensing, bonus depreciation — meaningful tax benefits that growing businesses frequently underutilize. We identify what applies and capture it correctly.",
  },
  {
    title: "Multi-State Compliance & Quarterly Planning",
    description:
      "Expanding across states introduces tax obligations that often go unnoticed. We assess your exposure, manage multi-state filings, and keep estimated payments current throughout the year.",
  },
];

/* ------------------------------------------------------------------ */
/*  Our Approach data                                                   */
/* ------------------------------------------------------------------ */

const approachSteps = [
  {
    icon: Briefcase,
    title: "Industry Expertise",
    description:
      "We’ve worked with entrepreneurs across industries. Our deep expertise ensures tailored tax strategies that work for you.",
  },
  {
    icon: Clock,
    title: "Year-Round Support",
    description:
      "Our team is here year-round, not just tax season. Get advice to make smarter decisions and meet deadlines.",
  },
  {
    icon: Eye,
    title: "Proactive Approach",
    description:
      "By working with you throughout the year, we anticipate tax changes before they happen and uncover savings opportunities.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprises — just clear, upfront pricing you can trust. Schedule a free consultation today for a custom quote.",
  },
];

/* ------------------------------------------------------------------ */
/*  Related articles data                                               */
/* ------------------------------------------------------------------ */

const relatedArticles = [
  { title: "Year-End Tax Planning: A Checklist for Individuals", category: "Tax Planning" },
  { title: "S-Corp vs LLC: Which Is Right for Your Business?", category: "Entity Structure" },
  { title: "Understanding Capital Gains Tax on Real Estate", category: "Capital Gains" },
  { title: "Top Tax Credits Small Businesses Overlook", category: "Tax Credits" },
  { title: "NRI Tax Guide: Returning to India After Years Abroad", category: "Cross-Border" },
  { title: "Multi-State Tax Compliance: What Growing Businesses Need to Know", category: "Compliance" },
];

/* ------------------------------------------------------------------ */
/*  Blog Ticker component                                               */
/* ------------------------------------------------------------------ */

function BlogTicker() {
  const cards = [...relatedArticles, ...relatedArticles];

  return (
    <div className="overflow-hidden py-4">
      <div
        className="flex gap-6"
        style={{
          animation: "ticker-scroll 40s linear infinite",
          width: "max-content",
        }}
      >
        {cards.map((article, i) => (
          <div
            key={`${article.title}-${i}`}
            className="w-72 shrink-0 bg-white rounded-2xl border border-black/[0.06] shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 group"
          >
            <div className="h-36 bg-gradient-to-br from-brand-soft via-brand-tint to-brand/10 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-xs font-medium bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-primary">
                  {article.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-heading font-semibold text-sm text-ink leading-snug mb-3">
                {article.title}
              </h4>
              <span className="text-xs font-medium text-brand group-hover:text-brand-dark transition-colors inline-flex items-center gap-1">
                Read More
                <ChevronRight className="size-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ================================================================== */
/*  Main Page Component                                                 */
/* ================================================================== */

export default function TaxComplianceAdvisoryPage() {
  const faqs = [
    {
      question: "Which jurisdictions do you handle tax filings for?",
      answer:
        "We prepare and file tax returns in the United States (federal and all 50 states), Canada, Australia, Singapore, the United Kingdom, and India. Our team stays current with jurisdiction-specific regulations and filing deadlines.",
    },
    {
      question:
        "Can you help with both personal and business tax returns?",
      answer:
        "Yes. We handle individual tax returns (1040, 1040-NR), partnership returns (1065), corporate returns (1120, 1120-S), trust returns (1041), and international reporting forms (FBAR, Form 5471, Form 8865) — along with their equivalents in other jurisdictions.",
    },
    {
      question: "Do you handle sales tax, GST, and VAT compliance?",
      answer:
        "Absolutely. We manage end-to-end indirect tax compliance including registration, periodic filings, nexus analysis, rate determination, and audit support across US states and international jurisdictions.",
    },
    {
      question:
        "What is your approach to tax planning and optimization?",
      answer:
        "We take a proactive approach — reviewing your financial position quarterly to identify deductions, credits, and structural opportunities. Our goal is to minimize your effective tax rate while remaining fully compliant with all regulations.",
    },
    {
      question: "How do you stay current with changing tax laws?",
      answer:
        "Our tax professionals participate in ongoing CPE courses and are members of professional bodies like AICPA and state CPA societies. We track legislative changes in real-time and communicate any impacts to our clients before deadlines.",
    },
    {
      question: "Can you represent us in case of a tax audit?",
      answer:
        "Yes. We provide full audit representation and support, including responding to IRS and state agency notices, preparing documentation, and representing your interests throughout the audit process. Our goal is to resolve audits quickly and favorably.",
    },
  ];

  return (
    <>
      <ServicePageHero
        eyebrow="Tax Compliance & Advisory"
        title={
          <>
            Tax Season Ends.
            <br className="hidden sm:block" />
            <span className="text-[#EE672C]">Tax Planning Shouldn&rsquo;t.</span>
          </>
        }
        description="Most people think about taxes once a year. We think about them all year round — and that difference is exactly what sets our services apart."
        imageSrc="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1920&q=80"
        videoSrc="https://videos.pexels.com/video-files/6962707/6962707-hd_1920_1080_25fps.mp4"
        accentColor="#EE672C"
        overlayGradient="linear-gradient(to right, rgba(20,14,42,0.97) 0%, rgba(20,14,42,0.93) 35%, rgba(20,14,42,0.7) 65%, rgba(77,57,127,0.25) 100%)"
      />

      {/* ============================================================ */}
      {/*  SECTION 2 — For Individuals & High Net Worth Clients         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
        >
          <source src="https://videos.pexels.com/video-files/7247815/7247815-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/60" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="mb-14 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight font-heading mb-4">
                For Individuals &amp; High&nbsp;Net&nbsp;Worth&nbsp;Clients
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                From income planning to estate strategy &mdash; clarity and confidence at every step.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {individualServices.map((item, i) => {
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

          <AnimatedSection delay={0.3}>
            <div className="flex justify-center mt-12">
              <ConsultationModal
                trigger={
                  <Button
                    size="lg"
                    className="text-base px-8 h-13 font-semibold shadow-xl shadow-brand/15 cursor-pointer"
                  >
                    Book a Tax Consultation
                    <ChevronRight className="size-4" />
                  </Button>
                }
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 3 — For Businesses & Business Owners                 */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-brand-tint/40">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
        >
          <source src="https://videos.pexels.com/video-files/7552423/7552423-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/60" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="mb-14 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight font-heading mb-4">
                For Businesses &amp; Business&nbsp;Owners
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                Entity structure, compensation, and compliance &mdash; working together efficiently.
              </p>
            </div>
          </AnimatedSection>

          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {businessServices.slice(0, 3).map((item, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <motion.div
                  key={item.title}
                  className="group relative rounded-2xl border p-6 sm:p-7 overflow-hidden transition-shadow duration-300 bg-white border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <span className="absolute -top-3 -right-2 text-[5.5rem] font-heading font-black text-brand/[0.04] leading-none select-none pointer-events-none">{num}</span>
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/50 via-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold tracking-wider text-primary/70 font-mono bg-primary/[0.06] px-2.5 py-1 rounded-md">{num}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-[1.05rem] text-ink leading-snug mb-3 pr-4">{item.title}</h3>
                  <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom row: 2 cards, centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 lg:gap-6 mt-5 lg:mt-6">
            {businessServices.slice(3).map((item, i) => {
              const num = String(i + 4).padStart(2, "0");
              return (
                <motion.div
                  key={item.title}
                  className="group relative rounded-2xl border p-6 sm:p-7 overflow-hidden transition-shadow duration-300 bg-white border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)]"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i + 3) * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <span className="absolute -top-3 -right-2 text-[5.5rem] font-heading font-black text-brand/[0.04] leading-none select-none pointer-events-none">{num}</span>
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/50 via-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold tracking-wider text-primary/70 font-mono bg-primary/[0.06] px-2.5 py-1 rounded-md">{num}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-[1.05rem] text-ink leading-snug mb-3 pr-4">{item.title}</h3>
                  <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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
                    className="text-base px-8 h-13 font-semibold shadow-xl shadow-primary/15 cursor-pointer"
                    style={{ background: "linear-gradient(135deg, #EE672C, #B03B2D)" }}
                  >
                    Book a Business Tax Consultation
                    <ChevronRight className="size-4" />
                  </Button>
                }
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 3 — OUR APPROACH (Timeline)                          */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-brand-tint/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="How We Work With You"
              description="We build tax strategies that work for your specific situation &mdash; today and for the years ahead."
            />
          </AnimatedSection>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-[3.25rem] left-0 right-0 h-px bg-brand/20" />

              <div className="grid grid-cols-4 gap-8">
                {approachSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <AnimatedSection key={step.title} delay={0.1 + i * 0.12}>
                      <div className="relative text-center">
                        {/* Node dot on the line */}
                        <div className="mx-auto size-14 rounded-2xl bg-white border-2 border-brand/20 flex items-center justify-center shadow-sm mb-6 relative z-10">
                          <Icon className="size-6 text-brand" />
                        </div>
                        {/* Step number */}
                        <span className="text-xs font-semibold text-brand tracking-wider font-mono mb-2 block">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h4 className="font-heading font-semibold text-base text-ink leading-snug mb-2">
                          {step.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden">
            <div className="relative pl-8">
              {/* Vertical connecting line */}
              <div className="absolute left-[1.0625rem] top-0 bottom-0 w-px bg-brand/20" />

              <div className="flex flex-col gap-8">
                {approachSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <AnimatedSection key={step.title} delay={0.1 + i * 0.1}>
                      <div className="relative flex items-start gap-5">
                        {/* Node dot */}
                        <div className="absolute -left-8 size-[2.125rem] rounded-xl bg-white border-2 border-brand/20 flex items-center justify-center shadow-sm z-10">
                          <Icon className="size-4 text-brand" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-brand tracking-wider font-mono mb-1 block">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h4 className="font-heading font-semibold text-base text-ink leading-snug mb-1.5">
                            {step.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 4 — RELATED CONTENT (Blog Ticker)                    */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24 bg-brand-tint/50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
          <AnimatedSection>
            <SectionHeading
              title="From Our Knowledge Base"
            />
          </AnimatedSection>
        </div>
        <BlogTicker />
      </section>

      {/* ============================================================ */}
      {/*  SECTION — FAQ                                                 */}
      {/* ============================================================ */}
      <ServiceFAQ faqs={faqs} />

      {/* ============================================================ */}
      {/*  SECTION 5 — CLOSING CTA                                      */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img src="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
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
              Getting started is fast and easy!
            </h2>
            <ConsultationModal
              trigger={
                <Button
                  size="lg"
                  className="text-base px-8 h-13 font-semibold shadow-xl shadow-[#EE672C]/20 border-0 text-white cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #EE672C, #B03B2D)" }}
                >
                  Book a Discovery Call Now
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
