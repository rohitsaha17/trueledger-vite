import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { ServiceFAQ } from "@/components/shared/service-faq";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  TrendingUp,
  Rocket,
  Landmark,
  Settings,
  BarChart3,
  ShieldCheck,
  Banknote,
  Cpu,
} from "lucide-react";
import { ServicePageHero } from "@/components/shared/service-page-hero";

/* ================================================================== */
/*  Data                                                               */
/* ================================================================== */

const advisoryPhases = [
  {
    icon: BarChart3,
    gradient: "from-brand via-brand-dark to-[#2a1d4e]",
    title: "Strategic & Business Advisory",
    description:
      "Where your numbers meet your strategy. We work alongside leadership teams to model, stress-test, and validate the decisions that shape a business — financial modeling, scenario analysis, and valuation frameworks that give you a clear, defensible picture of what your business is worth.",
  },
  {
    icon: ShieldCheck,
    gradient: "from-coral via-[#d4502a] to-[#a83222]",
    title: "Governance, Controls & Compliance",
    description:
      "Build the foundation that earns trust. We help businesses build governance structures, financial controls, policy documentation, and SOC certification readiness — before they need them, not in response to a crisis.",
  },
  {
    icon: Banknote,
    gradient: "from-brand-dark via-brand to-[#6b52a8]",
    title: "Capital, Funding & Fundraising Readiness",
    description:
      "Get capital-ready before the conversation starts. We prepare businesses for fundraising, securities listings, due diligence, investor reporting, and historical cleanup — ensuring that when the conversation starts, you are ready.",
  },
  {
    icon: Cpu,
    gradient: "from-[#c44e28] via-coral to-[#e8824a]",
    title: "Finance Automation & Technology",
    description:
      "The right tools, properly implemented, transform a finance function. We advise on tech stack design, workflow automation, ERP implementation, and SOC-compliant technology frameworks for businesses at every stage.",
  },
];

const audiences = [
  {
    icon: Rocket,
    text: "Founders and leadership teams preparing for their next stage of growth",
  },
  {
    icon: Landmark,
    text: "Businesses approaching a capital raise, listing, or transaction",
  },
  {
    icon: TrendingUp,
    text: "Scaling companies that need governance and controls to match their ambition",
  },
  {
    icon: Settings,
    text: "Operators who know their finance function needs upgrading but aren’t sure where to start",
  },
];

const blogArticles = [
  {
    title: "How to Know When Your Business Needs a CFO-Level Advisor",
    category: "Advisory",
  },
  {
    title: "5 Financial Models Every Founder Should Understand",
    category: "Strategy",
  },
  {
    title: "SOC 2 Readiness: A Practical Guide for Startups",
    category: "Compliance",
  },
  {
    title: "Preparing Your Data Room for Due Diligence",
    category: "Fundraising",
  },
  {
    title: "ERP Migration: When and How to Make the Move",
    category: "Technology",
  },
  {
    title: "Building Investor-Grade Financial Reporting",
    category: "Reporting",
  },
];

/* ================================================================== */
/*  Blog Ticker component                                              */
/* ================================================================== */

function BlogTicker() {
  const cards = [...blogArticles, ...blogArticles];

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
/*  Main Page Component                                                */
/* ================================================================== */

export default function BusinessAdvisoryPage() {
  const faqs = [
    {
      question: "What does business advisory include at TrueLedger?",
      answer:
        "Our advisory services cover financial modeling and forecasting, cash flow strategy, budgeting, KPI dashboards, fundraising readiness, governance frameworks, and fractional CFO support. We tailor the engagement to your specific stage and goals.",
    },
    {
      question:
        "At what stage should a company engage advisory services?",
      answer:
        "There is no wrong time, but most companies benefit most during key inflection points — preparing for fundraising, entering new markets, experiencing rapid growth, planning acquisitions, or navigating financial complexity that outpaces their internal capacity.",
    },
    {
      question:
        "Do you help with fundraising and investor readiness?",
      answer:
        "Yes. We prepare investor-ready financial models, pitch deck financials, due diligence packages, and data rooms. We help you tell your financial story clearly and credibly to potential investors and lenders.",
    },
    {
      question:
        "How is TrueLedger different from traditional consulting firms?",
      answer:
        "We combine deep financial expertise with hands-on execution. Unlike firms that deliver a strategy deck and walk away, we stay embedded in your operations — building models, running analyses, and helping you implement recommendations.",
    },
    {
      question: "Can you provide fractional CFO support?",
      answer:
        "Absolutely. Our fractional CFO service gives you senior financial leadership on a part-time basis — board-ready reporting, strategic planning, cash flow management, and stakeholder communication without the cost of a full-time hire.",
    },
    {
      question:
        "How do you measure the impact of your advisory work?",
      answer:
        "We establish clear KPIs and benchmarks at the start of every engagement. Whether it is improving cash conversion cycles, reducing burn rate, increasing margins, or hitting fundraising targets — we track outcomes and report progress regularly.",
    },
  ];

  return (
    <>
      <ServicePageHero
        eyebrow="Business Advisory"
        title={
          <>
            The Right Advice, at the Right Time,
            <br className="hidden sm:block" />
            <span className="text-[#EE672C]">Changes Everything.</span>
          </>
        }
        description="Most businesses don’t struggle because of a lack of effort. They struggle because the financial decisions — the structural ones, the strategic ones — were made without the right advisor in the room."
        imageSrc="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260623_031452_6a4a4264-852a-470c-bfbb-49796401a094_min.webp"
        videoSrc="https://videos.pexels.com/video-files/7552419/7552419-hd_1920_1080_25fps.mp4"
        accentColor="#EE672C"
        overlayGradient="linear-gradient(to right, rgba(20,14,42,0.82) 0%, rgba(20,14,42,0.65) 35%, rgba(20,14,42,0.35) 65%, rgba(77,57,127,0.12) 100%)"
      />

      {/* ============================================================ */}
      {/*  SECTION 2 — FOUR ADVISORY PILLARS (Grid Layout)             */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            className="text-center mb-14 md:mb-18"
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight font-heading">
              End-to-End Financial Management
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              Four advisory pillars that cover every dimension of your financial strategy — from modeling to automation.
            </p>
          </motion.div>

          {/* 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
            {advisoryPhases.map((item, i) => {
              const Icon = item.icon;
              const num = String(i + 1).padStart(2, "0");
              return (
                <motion.div
                  key={item.title}
                  className="group relative rounded-2xl bg-white border border-black/[0.06] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ y: -4 }}
                >
                  {/* Gradient header with icon */}
                  <div className={`relative h-28 bg-gradient-to-br ${item.gradient} flex items-center justify-between px-7`}>
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <Icon className="size-6 text-white" />
                      </div>
                      <span className="text-white/30 font-heading font-black text-5xl leading-none select-none">{num}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent" />
                  </div>

                  <div className="p-6 sm:p-7 pt-4">
                    <h3 className="font-heading font-bold text-base sm:text-lg text-ink leading-snug mb-3">{item.title}</h3>
                    <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 3 — WHO OUR ADVISORY PRACTICE IS BUILT FOR          */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-brand-tint/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Who Our Advisory Practice Is Built For"
              center
            />
          </AnimatedSection>

          {/* Hub-and-spoke layout */}
          <div className="relative max-w-5xl mx-auto">
            {/* SVG connectors — hidden on mobile */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
              viewBox="0 0 1000 600"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              {/* Top-left to center */}
              <motion.line x1="230" y1="150" x2="500" y2="300" stroke="#4D397F" strokeWidth="2" strokeDasharray="6 4" strokeOpacity="0.25"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} />
              {/* Top-right to center */}
              <motion.line x1="770" y1="150" x2="500" y2="300" stroke="#4D397F" strokeWidth="2" strokeDasharray="6 4" strokeOpacity="0.25"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }} />
              {/* Bottom-left to center */}
              <motion.line x1="230" y1="450" x2="500" y2="300" stroke="#4D397F" strokeWidth="2" strokeDasharray="6 4" strokeOpacity="0.25"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.7 }} />
              {/* Bottom-right to center */}
              <motion.line x1="770" y1="450" x2="500" y2="300" stroke="#4D397F" strokeWidth="2" strokeDasharray="6 4" strokeOpacity="0.25"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.8 }} />
              {/* Center node glow */}
              <circle cx="500" cy="300" r="48" fill="#4D397F" fillOpacity="0.06" />
              <circle cx="500" cy="300" r="32" fill="#4D397F" fillOpacity="0.10" />
            </svg>

            {/* Center hub element — hidden on mobile */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.div
                className="relative size-28 rounded-full bg-white flex items-center justify-center shadow-xl shadow-brand/20 border-2 border-brand/15 cursor-pointer"
                whileHover={{ scale: 1.15, boxShadow: "0 0 40px rgba(77,57,127,0.35), 0 0 80px rgba(238,103,44,0.15)" }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-brand/20"
                  whileHover={{ scale: 1.25, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <img
                  src="/logos/tl logomark.png"
                  alt="TrueLedger"
                  className="size-16 object-contain"
                />
              </motion.div>
              <p className="text-xs font-semibold text-brand mt-3 tracking-wide uppercase">Your Advisor</p>
            </motion.div>

            {/* 2x2 grid with gap for center hub */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-x-52 lg:gap-y-10">
              {audiences.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    className="relative rounded-2xl bg-white border border-black/[0.06] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 size-12 rounded-xl bg-brand-tint flex items-center justify-center border border-brand/10">
                        <Icon className="size-5 text-brand" />
                      </div>
                      <p className="text-sm sm:text-base text-ink leading-relaxed font-medium pt-1">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 4 — RELATED CONTENT (Blog Ticker)                   */}
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
      {/*  SECTION — FAQ                                                */}
      {/* ============================================================ */}
      <ServiceFAQ faqs={faqs} />

      {/* ============================================================ */}
      {/*  SECTION 5 — CLOSING CTA                                     */}
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
              The right advisory relationship changes the trajectory of your
              business.
            </h2>
            <p className="text-white/45 text-sm sm:text-base max-w-lg mx-auto mb-10">
              Whether you need strategic modeling, governance frameworks,
              fundraising preparation, or finance technology &mdash; we are ready
              to help.
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
