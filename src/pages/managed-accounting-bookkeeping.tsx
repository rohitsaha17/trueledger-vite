import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { ZigzagTimeline, type ZigzagStep } from "@/components/shared/zigzag-timeline";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Check, BarChart3 } from "lucide-react";
import { ServicePageHero } from "@/components/shared/service-page-hero";

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
    label: "Reporting",
    tools: [
      { name: "Reach Reporting", logo: "https://wpcdn.reachreporting.com/wp-content/uploads/2024/05/28151000/cropped-appcard-1e584df9-2a27-4825-ab36-e47f70b6965a-1-192x192.png" },
      { name: "FloQast", logo: "https://cdn.prod.website-files.com/67a1db1fd2f32256b80d22ff/67cb7363a73d6b2adb7181e8_256x256-1.jpg" },
    ],
  },
  {
    label: "Payroll",
    tools: [
      { name: "Gusto", logo: "https://gusto.com/apple-touch-icon.png" },
      { name: "ADP", logo: "https://www.google.com/s2/favicons?domain=adp.com&sz=128" },
    ],
  },
  {
    label: "Bills & AP",
    tools: [
      { name: "Bill.com", logo: "https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/63efaae11991984d7d4d021a_Logo-Mark-Color%201.png" },
      { name: "Dext", logo: "https://assets.dext.com/favicon.ico" },
    ],
  },
  {
    label: "AI-Native ERPs",
    tools: [
      { name: "Rillet", logo: "https://cdn.prod.website-files.com/67c1d30d11d3d1eef828244c/67f92fecefa40510381d446f_Webclip.png" },
      { name: "Digits", logo: "https://digits.com/favicon/favicon-256.png?v=3" },
    ],
  },
  {
    label: "Cloud Ledger Software",
    tools: [
      { name: "QuickBooks", logo: "https://cdn.worldvectorlogo.com/logos/quickbooks-2.svg" },
      { name: "Xero", logo: "https://cdn.worldvectorlogo.com/logos/xero-1.svg" },
    ],
  },
];

const blogArticles = [
  { title: "Why Accrual Accounting Matters for Growing Startups", category: "Accounting" },
  { title: "ASC 606 Revenue Recognition: A Practical Guide", category: "Compliance" },
  { title: "5 Signs You've Outgrown DIY Bookkeeping", category: "Bookkeeping" },
  { title: "Cash Flow Forecasting for SaaS Businesses", category: "Finance" },
  { title: "Multi-State Payroll: What Every Founder Should Know", category: "Payroll" },
  { title: "Building Investor-Ready Financials", category: "Advisory" },
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
            <span className="text-[#a78bfa]">Managed Accounting Solutions.</span>
          </>
        }
        description="Growth demands financial clarity. Accurate books, timely reports, and disciplined compliance don’t just keep you organized — they sharpen your decision-making and give you the confidence to scale."
        imageSrc="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=80"
        accentColor="#a78bfa"
        overlayGradient="linear-gradient(135deg, rgba(26,15,24,0.97) 0%, rgba(26,15,24,0.93) 40%, rgba(26,15,24,0.7) 70%, rgba(167,139,250,0.3) 100%)"
      />
  );
}

function WhatWeProvideSection() {
  return (
    <ZigzagTimeline
      steps={whatWeProvide}
      eyebrow="What We Provide"
      title="End-to-End Financial Management"
      className="bg-brand-tint/50"
    />
  );
}

function HowWeWorkSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
    <section className="py-20 md:py-28 bg-brand-tint">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 xl:gap-6 items-start">
          {pricingTiers.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={i * 0.1}>
              <div
                className={[
                  "relative rounded-2xl bg-white border overflow-hidden transition-shadow duration-300",
                  tier.highlighted
                    ? "border-brand shadow-xl shadow-brand/10 lg:scale-105 lg:-my-2 z-10"
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
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-1">
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
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink/60 mb-3">
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
          ))}
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
  /* Pyramid tiers — top (narrowest) to bottom (widest) */
  const tierColors = [
    { bg: "from-[#4a2545] to-[#6b3a64]", text: "text-white", logoRing: "ring-white/20" },
    { bg: "from-[#6b3a64] to-[#8b5080]", text: "text-white", logoRing: "ring-white/20" },
    { bg: "from-[#8b5080] to-[#a96a9e]", text: "text-white", logoRing: "ring-white/20" },
    { bg: "from-[#c490b8] to-[#d9aece]", text: "text-brand-dark", logoRing: "ring-brand/15" },
    { bg: "from-[#e8cfe0] to-[#f3e4ee]", text: "text-brand-dark", logoRing: "ring-brand/10" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand/[0.04] blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-14 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight font-heading mb-4">
              Our Technology Advantage
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Software expertise and certifications across multiple areas &mdash; our illustrative tech stack.
            </p>
          </div>
        </AnimatedSection>

        {/* 3D Isometric Pyramid */}
        <div className="max-w-4xl mx-auto" style={{ perspective: "1200px" }}>
          <motion.div
            className="flex flex-col items-center gap-0"
            initial={{ rotateX: 12, opacity: 0, y: 60 }}
            whileInView={{ rotateX: 6, opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {techStack.map((tier, i) => {
              const widthPercent = 36 + i * 16; // 36%, 52%, 68%, 84%, 100%
              const colors = tierColors[i];

              return (
                <motion.div
                  key={tier.label}
                  className="w-full flex justify-center"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                >
                  <div
                    className={`bg-gradient-to-r ${colors.bg} relative group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
                    style={{
                      width: `${widthPercent}%`,
                      clipPath: i === 0
                        ? "polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)"
                        : i === techStack.length - 1
                        ? "polygon(0% 0%, 100% 0%, 96% 100%, 4% 100%)"
                        : "polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)",
                    }}
                  >
                    {/* Shiny highlight edge */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.12] to-transparent pointer-events-none" />
                    {/* Bottom shadow edge for 3D depth */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/[0.15]" />

                    <div className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-4 sm:py-5">
                      {/* Label */}
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${colors.text} opacity-80`}>
                          {tier.label}
                        </p>
                      </div>

                      {/* Logos */}
                      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        {tier.tools.map((tool) => (
                          <motion.div
                            key={tool.name}
                            className={`size-9 sm:size-11 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg ring-1 ${colors.logoRing} flex items-center justify-center overflow-hidden`}
                            whileHover={{ scale: 1.15, y: -4 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          >
                            <img
                              src={tool.logo}
                              alt={tool.name}
                              className="size-6 sm:size-7 object-contain rounded-md"
                              loading="lazy"
                              onError={(e) => {
                                const el = e.currentTarget;
                                el.style.display = "none";
                                const parent = el.parentElement;
                                if (parent) {
                                  const fallback = document.createElement("span");
                                  fallback.className = "text-xs font-bold text-brand-dark";
                                  fallback.textContent = tool.name.slice(0, 2).toUpperCase();
                                  parent.appendChild(fallback);
                                }
                              }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Reflection / glow under pyramid */}
          <motion.div
            className="mx-auto mt-[-8px] h-12 rounded-[50%] bg-gradient-to-r from-transparent via-brand/10 to-transparent blur-xl"
            style={{ width: "80%" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
}

function RelatedContentSection() {
  const duplicated = [...blogArticles, ...blogArticles];

  // Generate a gradient thumbnail color per card for visual variety
  const gradients = [
    "from-brand/40 to-primary/30",
    "from-primary/30 to-coral/30",
    "from-coral/30 to-brand/40",
    "from-brand-dark/30 to-brand/30",
    "from-primary/40 to-brand-soft",
    "from-coral/40 to-primary/30",
  ];

  return (
    <section className="py-16 md:py-20 bg-brand-tint overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-ink leading-tight font-heading">
              Latest Insights
            </h2>
          </div>
        </AnimatedSection>
      </div>

      {/* Ticker strip */}
      <div className="relative overflow-hidden w-full">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-brand-tint to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-brand-tint to-transparent" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicated.map((article, i) => {
            const gradientIdx = i % gradients.length;
            return (
              <div
                key={`article-${i}`}
                className="flex-shrink-0 w-72 bg-white rounded-xl border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300"
              >
                {/* Gradient thumbnail */}
                <div className={`h-32 bg-gradient-to-br ${gradients[gradientIdx]} flex items-center justify-center`}>
                  <div className="size-10 rounded-full bg-white/20 flex items-center justify-center">
                    <BarChart3 className="size-5 text-white/70" />
                  </div>
                </div>
                <div className="p-4">
                  <span className="inline-block text-[0.65rem] font-semibold uppercase tracking-widest text-brand mb-2 bg-brand-tint px-2 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <h4 className="font-heading font-semibold text-sm text-ink leading-snug mb-2 line-clamp-2">
                    {article.title}
                  </h4>
                  <span className="text-xs font-medium text-brand group-hover:text-primary transition-colors inline-flex items-center gap-1">
                    Read More
                    <ChevronRight className="size-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function LinkedInVideoSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7454483598528909312"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-r from-brand-dark via-primary to-brand border border-brand/20 shadow-xl shadow-brand/10">
              <div className="flex flex-col sm:flex-row items-center gap-6 p-8 sm:p-10">
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
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-2">
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

function ClosingCtaSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-dark relative overflow-hidden">
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

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Chevron decorations */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-12 font-heading text-[16rem] font-bold text-white/[0.04] select-none pointer-events-none leading-none">
        &rsaquo;
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 font-heading text-[11rem] font-bold text-white/[0.03] select-none pointer-events-none leading-none">
        &rsaquo;
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection>
          <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-4">
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
                className="bg-white text-brand-dark hover:bg-white/90 shadow-xl shadow-black/20 text-base px-8 h-13 mt-6"
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
      <ClosingCtaSection />
    </>
  );
}
