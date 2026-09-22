import { AnimatedSection } from "@/components/shared/animated-section";
import { FeatureCard } from "@/components/shared/feature-card";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { ServiceFAQ } from "@/components/shared/service-faq";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Building2,
  CalendarCheck,
  Radar,
  ReceiptText,
} from "lucide-react";
import { ServicePageHero } from "@/components/shared/service-page-hero";
import { ResourceTicker, resourcesForService } from "@/components/shared/resource-ticker";

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
    icon: Building2,
    title: "Industry Expertise",
    description:
      "We’ve worked with entrepreneurs across industries. Our deep expertise ensures tailored tax strategies that work for you.",
  },
  {
    icon: CalendarCheck,
    title: "Year-Round Support",
    description:
      "Our team is here year-round, not just tax season. Get advice to make smarter decisions and meet deadlines.",
  },
  {
    icon: Radar,
    title: "Proactive Approach",
    description:
      "By working with you throughout the year, we anticipate tax changes before they happen and uncover savings opportunities.",
  },
  {
    icon: ReceiptText,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprises — just clear, upfront pricing you can trust. Schedule a free consultation today for a custom quote.",
  },
];

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
        overlayGradient="linear-gradient(to right, rgba(20,14,42,0.72) 0%, rgba(20,14,42,0.52) 35%, rgba(20,14,42,0.25) 65%, rgba(77,57,127,0.06) 100%)"
      />

      {/* ============================================================ */}
      {/*  SECTION 2 — For Individuals & High Net Worth Clients         */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.38]"
        >
          <source src="https://videos.pexels.com/video-files/7247815/7247815-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/40" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight font-heading mb-4">
                For Individuals &amp; High&nbsp;Net&nbsp;Worth&nbsp;Clients
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                From income planning to estate strategy &mdash; clarity and confidence at every step.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {individualServices.map((item, i) => (
              <FeatureCard
                key={item.title}
                index={i}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="flex justify-center mt-10">
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
      <section className="py-16 md:py-20 relative overflow-hidden bg-[#140e2a]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.30]"
        >
          <source src="https://videos.pexels.com/video-files/7552423/7552423-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e2a] via-[#140e2a]/70 to-[#140e2a]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#4D397F]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-[#EE672C]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight font-heading mb-4">
                For Businesses &amp; Business&nbsp;Owners
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
                Entity structure, compensation, and compliance &mdash; working together efficiently.
              </p>
            </div>
          </AnimatedSection>

          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {businessServices.slice(0, 3).map((item, i) => (
              <FeatureCard
                key={item.title}
                index={i}
                title={item.title}
                description={item.description}
                variant="dark-panel"
              />
            ))}
          </div>

          {/* Bottom row: 2 cards, centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 lg:gap-6 mt-5 lg:mt-6">
            {businessServices.slice(3).map((item, i) => (
              <FeatureCard
                key={item.title}
                index={i + 3}
                title={item.title}
                description={item.description}
                variant="dark-panel"
                className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)]"
              />
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="flex justify-center mt-10">
              <ConsultationModal
                trigger={
                  <Button
                    size="lg"
                    className="text-base px-8 h-13 font-semibold shadow-xl shadow-primary/15 cursor-pointer"
                    style={{ background: "linear-gradient(135deg, #4D397F, #362765)" }}
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
      <section className="py-16 md:py-20 bg-brand-tint/50">
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
              {/* Connector — meets the vertical centre of every node, then fades out */}
              <div className="absolute top-7 left-7 right-0 h-px bg-gradient-to-r from-brand/35 via-brand/25 to-transparent" />

              <div className="grid grid-cols-4 gap-8 lg:gap-10">
                {approachSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <AnimatedSection key={step.title} delay={0.1 + i * 0.12}>
                      <div className="group relative">
                        {/* Node — opaque, so the connector reads as passing behind it */}
                        <div className="relative z-10 mb-6 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark shadow-lg shadow-brand/25 ring-4 ring-[#FAF9FC] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-brand/35">
                          <Icon className="size-6 text-white" strokeWidth={1.75} />
                        </div>

                        <div className="mb-2.5 flex items-center gap-2.5">
                          <span className="font-mono text-[13px] font-semibold tracking-[0.2em] text-brand/70">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="h-px w-5 bg-brand/25 transition-all duration-500 ease-out group-hover:w-9 group-hover:bg-brand/50" />
                        </div>

                        <h4 className="mb-2 font-heading text-lg font-bold leading-snug text-ink">
                          {step.title}
                        </h4>
                        <p className="text-[15px] leading-relaxed text-muted-foreground">
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
            <div className="relative">
              {/* Vertical connector — aligned to the centre of the 44px nodes */}
              <div className="absolute left-[1.375rem] top-4 bottom-4 w-px bg-gradient-to-b from-brand/35 via-brand/25 to-coral/30" />

              <div className="flex flex-col gap-9">
                {approachSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <AnimatedSection key={step.title} delay={0.1 + i * 0.1}>
                      <div className="group relative flex items-start gap-5">
                        <div className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark shadow-lg shadow-brand/25 ring-4 ring-[#FAF9FC]">
                          <Icon className="size-5 text-white" strokeWidth={1.75} />
                        </div>

                        <div className="pt-0.5">
                          <div className="mb-1.5 flex items-center gap-2.5">
                            <span className="font-mono text-[13px] font-semibold tracking-[0.2em] text-brand/70">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="h-px w-5 bg-brand/25" />
                          </div>
                          <h4 className="mb-1.5 font-heading text-lg font-bold leading-snug text-ink">
                            {step.title}
                          </h4>
                          <p className="text-[15px] leading-relaxed text-muted-foreground">
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
      <section className="py-16 md:py-20 bg-brand-tint/50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
          <AnimatedSection>
            <SectionHeading
              title="From Our Knowledge Base"
              description="Tax resources from our library — every card opens the piece it names."
              className="mb-0"
            />
          </AnimatedSection>
        </div>

        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#F5F3F8] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#F5F3F8] to-transparent" />
          <ResourceTicker items={resourcesForService("Tax Compliance & Advisory")} />
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION — FAQ                                                 */}
      {/* ============================================================ */}
      <ServiceFAQ faqs={faqs} />

      {/* ============================================================ */}
      {/*  SECTION 5 — CLOSING CTA                                      */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <img src="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[#140e2a]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e2a] via-transparent to-[#140e2a]/70" />
        <div className="absolute top-0 left-1/3 w-96 h-64 bg-[#4D397F]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-72 h-48 bg-[#EE672C]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <p className="text-[#EE672C] text-[15px] font-semibold uppercase tracking-widest mb-4">
              Ready to get started?
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight max-w-3xl mx-auto">
              Getting started is fast and easy!
            </h2>
            <ConsultationModal
              trigger={
                <Button
                  size="lg"
                  className="text-base px-8 h-13 font-semibold shadow-xl shadow-[#4D397F]/20 border-0 text-white cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #4D397F, #362765)" }}
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
