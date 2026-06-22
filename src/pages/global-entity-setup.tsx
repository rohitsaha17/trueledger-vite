import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { ServiceProcessTimeline, type ProcessPhase } from "@/components/shared/service-process-timeline";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ChevronRight, Globe, MapPin, TrendingUp, ShieldCheck } from "lucide-react";
import { ServicePageHero } from "@/components/shared/service-page-hero";

/* ------------------------------------------------------------------ */
/*  Service cards data (new stacking card format)                       */
/* ------------------------------------------------------------------ */

const services: ProcessPhase[] = [
  {
    title: "Entity Structure Consultation",
    description:
      "Not every business needs a C-Corp. Not every founder should default to an LLC. We walk you through the options — LLC, C-Corp, S-Corp, LLP, and more — explaining the implications of each, so you can make an informed decision rather than follow a template.",
  },
  {
    title: "State Selection Strategy",
    description:
      "Where you incorporate matters — it affects your tax exposure, compliance costs, investor readiness, and day-to-day operations. We help you evaluate the right state for your entity based on your business model and long-term plans.",
  },
  {
    title: "Drafting of Agreements and Bylaws",
    description:
      "A well-run business is built on clarity from day one. We draft and review your core governing documents — operating agreements, bylaws, shareholder agreements — ensuring rights, responsibilities, and expectations are clearly defined.",
  },
  {
    title: "Regulatory Filings",
    description:
      "We manage all state and federal filings on your behalf — Articles of Incorporation, Articles of Organization, registered agent appointments, and associated compliance requirements — so your entity is set up correctly from day one.",
  },
  {
    title: "Virtual Office Setup",
    description:
      "No physical office? No problem. We help you establish a virtual office that gives your business a credible, professional address — satisfying regulatory and banking requirements without the cost of a dedicated space.",
  },
  {
    title: "Tax Registrations",
    description:
      "A registered entity is just the beginning. We ensure your business is fully equipped for tax compliance from the start — EIN registration, state payroll tax, sales tax across relevant jurisdictions — so nothing is overlooked.",
  },
  {
    title: "Banking Setup",
    description:
      "Opening a business bank account can be surprisingly complex for new entities, particularly for non-resident founders. We guide you through the process, help you identify the right banking partner, and ensure your account is operational.",
  },
];

/* ------------------------------------------------------------------ */
/*  Related insights data                                               */
/* ------------------------------------------------------------------ */

const relatedArticles = [
  { title: "LLC vs C-Corp: Making the Right Choice", category: "Entity Setup" },
  { title: "Why Delaware Isn’t Always the Answer", category: "State Selection" },
  { title: "5 Mistakes Founders Make with Operating Agreements", category: "Legal" },
  { title: "EIN Registration: A Step-by-Step Guide", category: "Tax" },
  { title: "Virtual Office vs Physical Office: What You Need", category: "Operations" },
  { title: "Opening a US Bank Account as a Non-Resident", category: "Banking" },
];

/* ------------------------------------------------------------------ */
/*  Who This Is For data                                                */
/* ------------------------------------------------------------------ */

const audiences = [
  {
    icon: Globe,
    text: "International founders expanding into the US market",
  },
  {
    icon: MapPin,
    text: "US businesses establishing a presence in new states or countries",
  },
  {
    icon: TrendingUp,
    text: "Startups preparing for investment or cross-border operations",
  },
  {
    icon: ShieldCheck,
    text: "Business owners who want their structure done right — not just done fast",
  },
];

/* ------------------------------------------------------------------
/*  Blog Ticker component                                               */
/* ------------------------------------------------------------------ */

function BlogTicker() {
  const cards = [...relatedArticles, ...relatedArticles]; // duplicate for seamless loop

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
            {/* Gradient thumbnail */}
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

export default function GlobalEntitySetupPage() {
  return (
    <>
      <ServicePageHero
        eyebrow="Global Entity Setup"
        title={
          <>
            We Don&rsquo;t Just File the Papers.
            <br className="hidden sm:block" />
            <span className="text-[#EE672C]">We Help You Make the Right Call.</span>
          </>
        }
        description="Setting up a business entity is rarely just a formality. The structure you choose, the state you register in, the agreements you put in place — these decisions shape how your business operates, gets taxed, and scales."
        imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
        accentColor="#EE672C"
        overlayGradient="linear-gradient(to right, rgba(20,14,42,0.97) 0%, rgba(20,14,42,0.93) 35%, rgba(20,14,42,0.7) 65%, rgba(77,57,127,0.25) 100%)"
      />

      {/* ============================================================ */}
      {/*  SECTION 2 — EMBEDDED VIDEO                                   */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <SectionHeading
                title="Watch Our Quick Explainer"
              />
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-[360px] rounded-2xl overflow-hidden shadow-lg border border-black/[0.06] bg-white">
                <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
                  <iframe
                    src="https://www.youtube.com/embed/BkmOnZ4gbqw"
                    title="TrueLedger Entity Setup Explainer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 3 — WHAT WE COVER (Process Timeline)                 */}
      {/* ============================================================ */}
      <ServiceProcessTimeline
        title="Comprehensive Entity Setup Services"
        description="From structure to registration — every step handled with precision."
        phases={services}
      />

      {/* ============================================================ */}
      {/*  SECTION 4 — WHO THIS IS FOR                                  */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Who This Is For"
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
      {/*  SECTION 5 — RELATED CONTENT (Blog Ticker)                    */}
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
      {/*  SECTION 6 — CLOSING CTA                                      */}
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
              Let&rsquo;s have a conversation about what the right structure
              looks like for your business.
            </h2>
            <p className="text-white/45 text-sm sm:text-base max-w-lg mx-auto mb-10">
              Whether you&rsquo;re forming your first entity or restructuring
              for growth, we&rsquo;ll help you get it right from the start.
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
