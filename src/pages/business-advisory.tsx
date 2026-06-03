import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  TrendingUp,
  Rocket,
  Landmark,
  Settings,
} from "lucide-react";
import { ServicePageHero } from "@/components/shared/service-page-hero";

/* ================================================================== */
/*  Data                                                               */
/* ================================================================== */

const advisoryPhases = [
  {
    title: "Strategic & Business Advisory",
    description:
      "Where your numbers meet your strategy. We work alongside leadership teams to model, stress-test, and validate the decisions that shape a business — financial modeling, scenario analysis, and valuation frameworks that give you a clear, defensible picture of what your business is worth.",
  },
  {
    title: "Governance, Controls & Compliance",
    description:
      "Build the foundation that earns trust. We help businesses build governance structures, financial controls, policy documentation, and SOC certification readiness — before they need them, not in response to a crisis.",
  },
  {
    title: "Capital, Funding & Fundraising Readiness",
    description:
      "Get capital-ready before the conversation starts. We prepare businesses for fundraising, securities listings, due diligence, investor reporting, and historical cleanup — ensuring that when the conversation starts, you are ready.",
  },
  {
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
  return (
    <>
      <ServicePageHero
        eyebrow="Business Advisory"
        title={
          <>
            The Right Advice, at the Right Time,
            <br className="hidden sm:block" />
            <span className="text-[#C183B8]">Changes Everything.</span>
          </>
        }
        description="Most businesses don’t struggle because of a lack of effort. They struggle because the financial decisions — the structural ones, the strategic ones — were made without the right advisor in the room."
        imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80"
        accentColor="#C183B8"
        overlayGradient="linear-gradient(to right, rgba(26,15,24,0.97) 0%, rgba(26,15,24,0.93) 35%, rgba(26,15,24,0.7) 65%, rgba(193,131,184,0.25) 100%)"
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

          {/* First row — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {advisoryPhases.slice(0, 3).map((item, i) => {
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
                  <span className="absolute -top-3 -right-2 text-[5.5rem] font-heading font-black text-brand/[0.04] leading-none select-none pointer-events-none">{num}</span>
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand/60 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold tracking-wider text-brand/70 font-mono bg-brand/[0.06] px-2.5 py-1 rounded-md">{num}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-[1.05rem] text-ink leading-snug mb-3 pr-4">{item.title}</h3>
                  <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Second row — 1 centered card */}
          <div className="flex justify-center mt-5 lg:mt-6">
            {advisoryPhases.slice(3).map((item, i) => {
              const num = String(i + 4).padStart(2, "0");
              return (
                <motion.div
                  key={item.title}
                  className="group relative rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-7 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300 w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)]"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <span className="absolute -top-3 -right-2 text-[5.5rem] font-heading font-black text-brand/[0.04] leading-none select-none pointer-events-none">{num}</span>
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand/60 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold tracking-wider text-brand/70 font-mono bg-brand/[0.06] px-2.5 py-1 rounded-md">{num}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-[1.05rem] text-ink leading-snug mb-3 pr-4">{item.title}</h3>
                  <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 3 — WHO OUR ADVISORY PRACTICE IS BUILT FOR          */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Who Our Advisory Practice Is Built For"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {audiences.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.text} delay={i * 0.1}>
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="shrink-0 size-12 rounded-xl bg-brand-tint flex items-center justify-center border border-brand/10">
                      <Icon className="size-5 text-brand" />
                    </div>
                    <p className="text-sm sm:text-base text-ink leading-relaxed font-medium pt-1">
                      {item.text}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
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
      {/*  SECTION 5 — CLOSING CTA                                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />

        <div className="absolute top-1/2 -translate-y-1/2 -left-12 font-heading text-[16rem] font-bold text-white/[0.04] select-none pointer-events-none leading-none">
          &rsaquo;
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-4">
              Ready to get started?
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight max-w-3xl mx-auto">
              The right advisory relationship changes the trajectory of your
              business.
            </h2>
            <p className="text-white/40 text-base max-w-xl mx-auto mb-10">
              Whether you need strategic modeling, governance frameworks,
              fundraising preparation, or finance technology &mdash; we are ready
              to help.
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
