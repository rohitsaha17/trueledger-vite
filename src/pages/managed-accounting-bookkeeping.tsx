import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { ServiceFAQ } from "@/components/shared/service-faq";
import { FeatureCard } from "@/components/shared/feature-card";
import { ResourceTicker, resourcesForService } from "@/components/shared/resource-ticker";
import type { ZigzagStep } from "@/components/shared/zigzag-timeline";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Check } from "lucide-react";
import { ServicePageHero } from "@/components/shared/service-page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechPyramid3D } from "@/components/shared/tech-pyramid-3d";

/* ================================================================== */
/*  Data                                                               */
/* ================================================================== */

const whatWeProvide: ZigzagStep[] = [
  {
    title: "Real-Time Clean Books",
    description:
      "We keep your books current, accurate, and properly categorized on an accrual basis — so your financials always reflect the true position of your business, in real time.",
  },
  {
    title: "Accounts Receivable, Invoicing & Collections",
    description:
      "From invoice creation to collections, we manage the full AR cycle — including revenue recognition schedules for SaaS and subscription businesses under ASC 606 — so your cash flow stays healthy.",
  },
  {
    title: "Accounts Payable Management & Spend Advisory",
    description:
      "We process vendor invoices, schedule payments, and monitor your spend patterns — so your outflows are organized and your cash position is always under control.",
  },
  {
    title: "Payroll Processing",
    description:
      "We handle payroll end to end — stock option and RSU reporting, multi-state compliance, benefits reconciliation — so every obligation is met and your team is paid accurately and on time.",
  },
  {
    title: "Periodic Tax Filings",
    description:
      "We handle your sales tax and payroll tax filings on time, without chasing. Compliance obligations are met consistently so you can focus on running your business.",
  },
  {
    title: "Financial Reporting",
    description:
      "We deliver clean monthly financials — P&L, balance sheet, cash flow, and executive commentary — so leadership always has the clarity to make confident, well-informed decisions.",
  },
  {
    title: "Dashboards, Forecasts and Metrics Tracking",
    description:
      "Real-time dashboards, forward-looking cash flow forecasts, and KPI tracking frameworks tailored to your business model. Whether managing runway, monitoring margins, or preparing for a fundraise.",
  },
];

const howWeWorkSteps = [
  {
    number: "01",
    title: "Set up your profile and connect your accounts",
  },
  {
    number: "02",
    title: "Meet the team and start getting financial insights",
  },
  {
    number: "03",
    title: "We start handling your bookkeeping",
  },
  {
    number: "04",
    title: "We deliver monthly financial statements",
  },
];

const pricingTiers = [
  {
    label: "Core Accounting",
    name: "ESSENTIALS",
    badge: null,
    tagline: "Clean, compliant books delivered on time every month.",
    pricing: "Scoped to your needs — let’s find your number.",
    includes: null,
    features: [
      "Accrual-based GAAP bookkeeping",
      "Bank & credit card reconciliations",
      "Transaction categorisation",
      "Monthly P&L, balance sheet & cash flow",
      "Cloud accounting software setup",
      "Quarterly financial review call",
      "Year-end closing & tax-ready financials",
      "Check-ins: Quarterly",
      "Response time: 3 business days",
      "Support: Email",
    ],
    cta: "Start Here",
    variant: "outline" as const,
    highlighted: false,
  },
  {
    label: "Full-Service Accounting",
    name: "GROWTH",
    badge: "Most Popular",
    tagline: "End-to-end accounting with payroll, AP/AR, and tax filings managed for you.",
    pricing: "Built around your scope — talk to us for a quote.",
    includes: "Everything in Essentials, plus:",
    features: [
      "Accounts payable & bill management",
      "Accounts receivable & invoicing",
      "Payroll processing (multi-state)",
      "Sales tax & payroll tax filings",
      "Monthly financials with executive commentary",
      "KPI tracking & variance analysis",
      "Monthly financial review call",
      "Spend advisory & AP controls",
      "Check-ins: Monthly",
      "Response time: 2 business days",
      "Support: Email & calls",
    ],
    cta: "See Clearly",
    variant: "default" as const,
    highlighted: true,
  },
  {
    label: "Strategic Finance",
    name: "CFO PARTNER",
    badge: null,
    tagline: "A dedicated senior advisor who runs your finance function and helps you grow.",
    pricing: "Tailored to your ambition — let’s scope it together.",
    includes: "Everything in Growth, plus:",
    features: [
      "Dedicated senior advisor / Virtual CFO",
      "Real-time financial dashboards",
      "Cash flow forecasting & modelling",
      "Annual budget & financial planning",
      "Proactive tax planning coordination",
      "Board & investor-ready reporting",
      "Strategic business advisory",
      "Bi-weekly CFO calls",
      "Priority access & unlimited support",
      "Check-ins: Bi-weekly",
      "Response time: Same / next day",
      "Support: Unlimited",
    ],
    cta: "Plan Ahead",
    variant: "outline" as const,
    highlighted: false,
  },
];

const techStack = [
  {
    label: "Cloud Based Accounting",
    tools: [
      { name: "QuickBooks", logo: "https://www.google.com/s2/favicons?domain=quickbooks.intuit.com&sz=128" },
      { name: "Xero", logo: "https://www.google.com/s2/favicons?domain=xero.com&sz=128" },
    ],
  },
  {
    label: "Bill Processing",
    tools: [
      { name: "Bill.com", logo: "https://www.google.com/s2/favicons?domain=bill.com&sz=128" },
      { name: "Dext", logo: "/logos/software/dext.png" },
      { name: "Stampli", logo: "https://www.google.com/s2/favicons?domain=stampli.com&sz=128" },
    ],
  },
  {
    label: "AI Native",
    tools: [
      { name: "Campfire", logo: "https://www.google.com/s2/favicons?domain=campfire.ai&sz=128" },
      { name: "Digits", logo: "https://www.google.com/s2/favicons?domain=digits.com&sz=128" },
      { name: "Kick", logo: "https://www.google.com/s2/favicons?domain=kick.co&sz=128" },
      { name: "Puzzle", logo: "https://www.google.com/s2/favicons?domain=puzzle.io&sz=128" },
    ],
  },
  {
    label: "Payroll & Workflow",
    tools: [
      { name: "ADP", logo: "https://www.google.com/s2/favicons?domain=adp.com&sz=128" },
      { name: "Rippling", logo: "https://www.google.com/s2/favicons?domain=rippling.com&sz=128" },
      { name: "Gusto", logo: "https://www.google.com/s2/favicons?domain=gusto.com&sz=128" },
      { name: "Karbon", logo: "https://www.google.com/s2/favicons?domain=karbonhq.com&sz=128" },
      { name: "Canopy", logo: "https://www.google.com/s2/favicons?domain=canopytax.com&sz=128" },
    ],
  },
  {
    label: "Close & Reporting",
    tools: [
      { name: "Double", logo: "https://www.google.com/s2/favicons?domain=doublehq.com&sz=128" },
      { name: "Financial Cents", logo: "https://www.google.com/s2/favicons?domain=financial-cents.com&sz=128" },
      { name: "Spotlight", logo: "https://www.google.com/s2/favicons?domain=spotlightreporting.com&sz=128" },
      { name: "FloQast", logo: "https://www.google.com/s2/favicons?domain=floqast.com&sz=128" },
      { name: "Reach Reporting", logo: "https://www.google.com/s2/favicons?domain=reachreporting.com&sz=128" },
    ],
  },
];



/* ================================================================== */
/*  Section components                                                 */
/* ================================================================== */

function HeroSection() {
  return (
      <ServicePageHero
        eyebrow="Managed Accounting & Bookkeeping"
        title={
          <>
            Unlock Scalable Growth with
            <br className="hidden sm:block" />
            <span className="text-[#EE672C]">Managed Accounting Solutions.</span>
          </>
        }
        description="Growth demands financial clarity. Accurate books, timely reports, and disciplined compliance don’t just keep you organized — they sharpen your decision-making and give you the confidence to scale."
        imageSrc="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=80"
        videoSrc="https://videos.pexels.com/video-files/8479064/8479064-hd_1920_1080_25fps.mp4"
        accentColor="#EE672C"
        overlayGradient="linear-gradient(to right, rgba(20,14,42,0.72) 0%, rgba(20,14,42,0.52) 35%, rgba(20,14,42,0.25) 65%, rgba(77,57,127,0.06) 100%)"
      />
  );
}

function WhatWeProvideSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://videos.pexels.com/video-files/8298072/8298072-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/[0.93]" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-tint/60 via-transparent to-brand-tint/60" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-brand text-[15px] font-semibold uppercase tracking-widest mb-3">
            What We Deliver
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight font-heading">
            End-to-End Financial Management
          </h2>
        </motion.div>

        {/* Centred flex-wrap so the trailing row of cards sits centred */}
        <div className="flex flex-wrap justify-center gap-5 lg:gap-6">
          {whatWeProvide.map((step, i) => (
            <FeatureCard
              key={step.title}
              index={i}
              title={step.title}
              description={step.description}
              className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWorkSection() {
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Low-opacity background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160951_87d38f12-9f15-45af-840f-a14eb5b250ef_min.webp"
          alt=""
          className="w-full h-full object-cover opacity-[0.24]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/70" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight font-heading mb-4">
              Our Process
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              We specialize in managing the books for businesses and can ensure amazing communication and accuracy.
            </p>
          </div>
        </AnimatedSection>

        {/* Desktop: horizontal stepper */}
        <AnimatedSection delay={0.15}>
          <div className="hidden md:block">
            <div className="relative flex items-start justify-between max-w-4xl mx-auto">
              {/* Connecting line */}
              <div className="absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-brand/30 via-brand to-brand/30" />

              {howWeWorkSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center relative z-10 w-1/4 px-3"
                >
                  <div className="size-16 rounded-full bg-white border-2 border-brand flex items-center justify-center mb-4 shadow-lg shadow-brand/10">
                    <span className="text-lg font-bold text-brand font-heading">{step.number}</span>
                  </div>
                  <p className="text-sm font-medium text-ink leading-snug max-w-[180px]">{step.title}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical stepper */}
          <div className="md:hidden">
            <div className="relative pl-10 max-w-sm mx-auto">
              {/* Vertical connecting line */}
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand/30 via-brand to-brand/30" />

              <div className="flex flex-col gap-8">
                {howWeWorkSteps.map((step, i) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="flex items-start gap-5 relative"
                  >
                    <div className="size-10 rounded-full bg-white border-2 border-brand flex items-center justify-center shrink-0 shadow-md shadow-brand/10 -ml-10">
                      <span className="text-sm font-bold text-brand font-heading">{step.number}</span>
                    </div>
                    <p className="text-sm font-medium text-ink leading-snug pt-2">{step.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="py-16 md:py-20 bg-brand-tint">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight font-heading mb-4">
              The Right Support, at Every Stage of Growth.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              From clean books to full CFO partnership &mdash; find the plan that fits your business.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 xl:gap-6 items-end">
          {pricingTiers.map((tier, i) => {
            const staircaseOffset = i === 0 ? "lg:mb-0" : i === 1 ? "lg:mb-16" : "lg:mb-32";
            return (
            <AnimatedSection key={tier.name} delay={i * 0.1}>
              <div
                className={[
                  `relative rounded-2xl bg-white border overflow-hidden transition-shadow duration-300 ${staircaseOffset}`,
                  tier.highlighted
                    ? "border-brand shadow-xl shadow-brand/10 z-10"
                    : "border-black/[0.06] shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)]",
                ].join(" ")}
              >
                {/* Top accent bar */}
                {tier.highlighted && (
                  <div className="h-1 bg-gradient-to-r from-brand via-primary to-brand" />
                )}

                <div className="p-6 sm:p-8">
                  {/* Badge */}
                  {tier.badge && (
                    <Badge className="mb-4">{tier.badge}</Badge>
                  )}

                  {/* Label */}
                  <p className="text-[15px] font-semibold uppercase tracking-widest text-brand mb-1">
                    {tier.label}
                  </p>

                  {/* Tier name */}
                  <h3 className="font-heading font-bold text-2xl text-ink mb-3">
                    {tier.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {tier.tagline}
                  </p>

                  {/* Pricing */}
                  <div className="bg-brand-tint rounded-xl px-4 py-3 mb-6">
                    <p className="text-sm font-medium text-primary">
                      {tier.pricing}
                    </p>
                  </div>

                  {/* Includes label */}
                  {tier.includes && (
                    <p className="text-[15px] font-semibold uppercase tracking-wider text-ink/60 mb-3">
                      {tier.includes}
                    </p>
                  )}

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check className="size-4 text-brand shrink-0 mt-0.5" />
                        <span className="text-sm text-ink/80 leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <ConsultationModal
                    trigger={
                      <Button
                        variant={tier.variant}
                        size="lg"
                        className="w-full"
                      >
                        {tier.cta}
                        <ChevronRight className="size-4" />
                      </Button>
                    }
                  />
                </div>
              </div>
            </AnimatedSection>
          );
          })}
        </div>

        {/* Custom tier callout */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 md:mt-16 rounded-2xl bg-gradient-to-r from-brand-tint via-brand-soft to-brand-tint border border-brand/20 p-8 sm:p-10 text-center">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-ink mb-3">
              Don't See What You Need? Let's Build It Together.
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
              Our custom tier is for businesses that don't fit a standard mould. Share your requirements
              and we'll put together a package that works exactly the way you do.
            </p>
            <ConsultationModal
              trigger={
                <Button size="lg">
                  Book a Consultation Call
                  <ChevronRight className="size-4" />
                </Button>
              }
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function TechAdvantageSection() {
  return (
    <section className="py-16 md:py-20 bg-[#140e2a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(238,103,44,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(77,57,127,0.06),transparent_65%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight font-heading mb-4">
              Our Technology Advantage
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Software expertise and certifications across multiple areas &mdash; our illustrative tech stack.
            </p>
          </div>
        </AnimatedSection>

        <TechPyramid3D tiers={techStack} />
      </div>
    </section>
  );
}

function RelatedContentSection() {
  /* Pulled straight from the Resources page, so only pieces that actually
     exist there are shown — and each card opens that resource. */
  const items = resourcesForService("Accounting & Bookkeeping");

  return (
    <section className="py-16 md:py-20 bg-brand-tint overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <AnimatedSection>
          <SectionHeading
            title="Latest Insights"
            description="Accounting &amp; bookkeeping resources from our library — every card opens the piece it names."
            className="mb-0"
          />
        </AnimatedSection>
      </div>

      <div className="relative w-full">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-brand-tint to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-brand-tint to-transparent" />
        <ResourceTicker items={items} />
      </div>
    </section>
  );
}

function LinkedInVideoSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-semibold text-ink leading-tight font-heading text-center mb-10">
            Latest Video
          </h2>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7454483598528909312"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden border border-brand/20 shadow-xl shadow-brand/10">
              {/* Thumbnail image */}
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Finance — TrueLedger video"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-primary/85 to-brand/65" />
              <div className="relative flex flex-col sm:flex-row items-center gap-6 p-8 sm:p-10">
                {/* Play button */}
                <div className="size-20 sm:size-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="size-8 sm:size-10 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Text */}
                <div className="text-center sm:text-left">
                  <p className="text-white/50 text-[15px] font-semibold uppercase tracking-widest mb-2">
                    Watch on LinkedIn
                  </p>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                    Modern Finance
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Discover TrueLedger's approach to modern accounting &mdash; technology-driven, globally capable, and built for scale.
                  </p>
                </div>
              </div>

              {/* Decorative chevron */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 font-heading text-[8rem] font-bold text-white/[0.05] select-none pointer-events-none leading-none">
                &rsaquo;
              </div>
            </div>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question:
        "How does outsourced bookkeeping work on a day-to-day basis?",
      answer:
        "Your dedicated team works within your existing accounting software and follows your established workflows. We handle daily transaction recording, bank reconciliations, vendor payments, invoicing, and month-end close — communicating with you through scheduled check-ins and a shared task dashboard.",
    },
    {
      question: "What accounting software do you support?",
      answer:
        "We are certified across 12+ platforms including QuickBooks Online, QuickBooks Desktop, Xero, NetSuite, Sage, FreshBooks, Zoho Books, and Wave. We adapt to your existing stack rather than asking you to switch.",
    },
    {
      question:
        "How do you ensure accuracy in our financial records?",
      answer:
        "Every deliverable goes through a multi-tier review process — preparer, reviewer, and quality checker. We use standardized checklists, automated reconciliation tools, and real-time error detection to maintain 99.5%+ accuracy rates.",
    },
    {
      question:
        "Can you handle multi-entity or multi-currency accounting?",
      answer:
        "Yes. We routinely manage books for businesses with multiple entities across different jurisdictions and currencies. Our team is experienced with intercompany transactions, currency conversion, and consolidated reporting.",
    },
    {
      question: "What happens during month-end close?",
      answer:
        "Our month-end process includes bank and credit card reconciliations, accounts receivable and payable review, accruals and prepaid adjustments, fixed asset depreciation, and financial statement preparation — all delivered within 5–7 business days of month-end.",
    },
    {
      question: "How quickly can you take over our existing books?",
      answer:
        "Most transitions complete within 1–2 weeks. We start with a thorough assessment of your current books, clean up any backlog, establish processes, and begin regular operations. For complex situations, we create a phased transition plan.",
    },
  ];

  return <ServiceFAQ faqs={faqs} />;
}

function ClosingCtaSection() {
  return (
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
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Getting started is fast
            <br className="hidden sm:block" />
            and easy!
          </h2>
          <ConsultationModal
            trigger={
              <Button
                size="lg"
                className="text-base px-8 h-13 font-semibold shadow-xl shadow-[#4D397F]/20 border-0 text-white cursor-pointer mt-6"
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
  );
}

/* ================================================================== */
/*  Page export                                                        */
/* ================================================================== */

export default function ManagedAccountingBookkeepingPage() {
  return (
    <>
      <HeroSection />
      <WhatWeProvideSection />
      <HowWeWorkSection />
      <PricingSection />
      <TechAdvantageSection />
      <RelatedContentSection />
      <LinkedInVideoSection />
      <FAQSection />
      <ClosingCtaSection />
    </>
  );
}
