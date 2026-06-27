import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { ServiceFAQ } from "@/components/shared/service-faq";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Download,
  FileText,
  Globe,
} from "lucide-react";
import { ServicePageHero } from "@/components/shared/service-page-hero";

/* ------------------------------------------------------------------ */
/*  How We Support Your Practice — card data                            */
/* ------------------------------------------------------------------ */

const supportCards = [
  {
    title: "Tax Season Support",
    description:
      "When the pressure peaks, we scale with you. We provide dedicated capacity during busy tax season — handling client bookkeeping, data preparation, and financial reporting so your team can focus on reviews and filings.",
  },
  {
    title: "Accounting & Bookkeeping for Your Client Portfolio",
    description:
      "We manage the day-to-day and month-to-month accounting across your client portfolio — transactional entries, categorisation, reconciliations, and financial statement preparation to the standards your firm sets.",
  },
  {
    title: "Month-End Close, Financial Reporting & Historical Cleanups",
    description:
      "Timely month-end closes, clean financial statements, and the historical cleanup work that new client onboardings require. We handle the heavy lifting so your team inherits clean books — not a backlog.",
  },
  {
    title: "Sales Tax Filings & Payroll Processing",
    description:
      "Multi-state sales tax filings and payroll processing across your client base — managed accurately, filed on time, and fully documented. We handle the compliance volume so your firm does not have to.",
  },
];

/* ------------------------------------------------------------------ */
/*  Approach & Differentiation — card data                              */
/* ------------------------------------------------------------------ */

const differentiationCards = [
  {
    title: "Strategic Cost Advantage",
    description:
      "Extending your capacity through a dedicated offshore team significantly reduces your cost per engagement — without reducing quality. Same standard of work at a fraction of the cost.",
  },
  {
    title: "Qualified Teams, Not Junior Resources",
    description:
      "Our teams are comprised of qualified accounting professionals — Chartered Accountants and experienced practitioners — not entry-level resources. You get professionals who understand accounting.",
  },
  {
    title: "Smoother Onboarding & Client Handling",
    description:
      "We bring structured onboarding frameworks and pre-built checklists to every new client engagement — so the transition is clean, the setup is fast, and your team is not spending weeks getting us up to speed.",
  },
  {
    title: "Dedicated Team With Full Practice Management Integration",
    description:
      "Your offshore team is dedicated to your firm — not shared across dozens of other clients. We work within your existing workflow and practice management tools so your processes stay intact.",
  },
  {
    title: "Transparent Visibility on Hours & Work",
    description:
      "No black box. You have full visibility into your team’s hours, task progress, and workflow status at all times — through the practice management tools you already use. Complete transparency.",
  },
  {
    title: "Multi-Timezone Coverage",
    description:
      "With teams operating across the US, India, and other jurisdictions, we provide coverage across multiple time zones — ensuring work moves forward around the clock and deadlines are met.",
  },
];

/* ------------------------------------------------------------------ */
/*  Related articles data                                               */
/* ------------------------------------------------------------------ */

const relatedArticles = [
  { title: "How CPA Firms Are Scaling with Offshore Teams", category: "Insights" },
  { title: "The True Cost of In-House vs Offshore Accounting", category: "Cost Analysis" },
  { title: "Offshore Onboarding: Getting It Right from Day One", category: "Operations" },
  { title: "Multi-State Sales Tax: A CPA’s Guide", category: "Tax Compliance" },
  { title: "Practice Management Tools That Support Remote Teams", category: "Technology" },
  { title: "Building Quality Control in Offshore Engagements", category: "Best Practices" },
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

export default function SupportToCPAsPage() {
  const faqs = [
    {
      question: "How does your CPA firm support model work?",
      answer:
        "We assign a dedicated offshore team that works exclusively under your firm’s supervision. They handle bookkeeping, tax preparation, audit support, and other accounting tasks using your software and processes — functioning as a seamless extension of your in-house team.",
    },
    {
      question:
        "Will our clients know the work is being done offshore?",
      answer:
        "That is entirely your choice. Most firms operate under a white-label model where our team works behind the scenes using your firm’s branding, email addresses, and communication channels. Your clients interact only with your firm.",
    },
    {
      question: "What types of work can you handle for our firm?",
      answer:
        "We support individual and business tax preparation (1040, 1120, 1120-S, 1065, 1041), bookkeeping and write-up, payroll processing, sales tax filings, financial statement preparation, audit and review assistance, and administrative back-office tasks.",
    },
    {
      question: "How do you ensure quality and accuracy?",
      answer:
        "Every deliverable goes through a structured multi-level review process before reaching your team. We use standardized checklists aligned with your firm’s methodology, and our work is always reviewed by a senior professional before delivery.",
    },
    {
      question:
        "Can you scale up during tax season and scale down after?",
      answer:
        "Yes — flexible capacity is a core part of our model. Many firms double or triple their TrueLedger team during January–April and scale back during off-season. We handle staffing and training so you do not have to.",
    },
    {
      question:
        "What is the typical onboarding process for CPA firms?",
      answer:
        "Onboarding takes 1–2 weeks and includes a discovery call to understand your workflows, software access setup, team introductions, process documentation review, and a pilot engagement on a small batch of work before full-scale operations begin.",
    },
  ];

  return (
    <>
      <ServicePageHero
        eyebrow="Support to CPAs"
        title={
          <>
            Every CPA Firm Reaches a Point.
            <br className="hidden sm:block" />
            <span className="text-[#EE672C]">We Are Those Extra Hands.</span>
          </>
        }
        description="A dedicated offshore accounting team that plugs into your practice — qualified, process-driven, and built to scale with your firm through every season."
        imageSrc="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260623_031937_26d5554d-a1a9-4889-9e15-66a57de6358c_min.webp"
        accentColor="#EE672C"
        overlayGradient="linear-gradient(to right, rgba(20,14,42,0.97) 0%, rgba(20,14,42,0.93) 35%, rgba(20,14,42,0.7) 65%, rgba(77,57,127,0.25) 100%)"
      />

      {/* ============================================================ */}
      {/*  SECTION 2 — HOW WE SUPPORT YOUR PRACTICE (Grid)              */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img
          src="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260623_031938_f302772e-8c31-4f6e-8940-8776dffde9e7_min.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/60" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-14 md:mb-18"
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight font-heading">
              How We Support Your Practice
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              Dedicated capacity that scales with your firm through every season.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {supportCards.map((item, i) => {
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
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 3 — APPROACH AND DIFFERENTIATION (Grid)               */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-brand-tint/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14 md:mb-18"
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight font-heading">
              Our Approach and Differentiation
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              What separates TrueLedger is the way we work — structured, transparent, and built to feel like an extension of your team.
            </p>
          </motion.div>

          {/* 6 cards — full 3×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {differentiationCards.map((item, i) => {
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
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 4 — WHITEPAPERS & GUIDES                             */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Whitepapers & Guides"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Whitepaper 1 */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl border border-black/[0.06] shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-brand/10 via-brand-soft to-brand-tint flex items-center justify-center">
                  <div className="size-20 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center">
                    <FileText className="size-10 text-brand" />
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-heading font-semibold text-lg text-ink mb-3">
                    TrueLedger&rsquo;s Position for CPA Firms
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    How a dedicated offshore partnership model works &mdash; and
                    why it is different from traditional outsourcing.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-brand-dark transition-colors"
                  >
                    <Download className="size-4" />
                    Download the Whitepaper
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Whitepaper 2 */}
            <AnimatedSection delay={0.18}>
              <div className="bg-white rounded-2xl border border-black/[0.06] shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-brand/10 via-brand-soft to-brand-tint flex items-center justify-center">
                  <div className="size-20 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center">
                    <FileText className="size-10 text-brand" />
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-heading font-semibold text-lg text-ink mb-3">
                    CPA Firm Offshoring Readiness Assessment Checklist
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Before you offshore &mdash; know where your firm stands.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-brand-dark transition-colors"
                  >
                    <Download className="size-4" />
                    Download the Checklist
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 5 — WHO WE WORK WITH                                  */}
      {/* ============================================================ */}
      <section className="py-12 md:py-16 bg-brand-tint/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-3">
              <Globe className="size-5 text-brand" />
              <span className="font-heading font-semibold text-lg text-ink">
                Who We Work With
              </span>
            </div>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Trusted by CPA firms managing diverse client portfolios across
              multiple jurisdictions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION — FAQ                                                  */}
      {/* ============================================================ */}
      <ServiceFAQ faqs={faqs} />

      {/* ============================================================ */}
      {/*  SECTION 6 — CLOSING CTA                                       */}
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
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight max-w-3xl mx-auto">
              Let&rsquo;s Find Out If We Are the Right Fit
            </h2>
            <p className="text-white/60 font-medium text-lg mb-4 max-w-2xl mx-auto">
              Not Every Offshore Partner Is Built for Every Firm. Let&rsquo;s
              Make Sure We Are Right for Yours.
            </p>
            <p className="text-white/45 text-sm sm:text-base max-w-lg mx-auto mb-10">
              A quick call is all it takes. We will ask the right questions about
              your firm&rsquo;s workflow, client mix, and capacity needs &mdash;
              and give you an honest view of whether a TrueLedger partnership
              makes sense. No pressure, no generic pitch.
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
            <p className="mt-6 text-white/60 text-sm">
              Prefer to start with the readiness checklist? Download it above and
              come back when you are ready.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 7 — RELATED CONTENT (Blog Ticker)                     */}
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
    </>
  );
}
