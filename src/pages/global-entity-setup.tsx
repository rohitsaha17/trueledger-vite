import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Globe,
  Landmark,
  Rocket,
  Target,
  Building,
  ScrollText,
  FileCheck,
  Scale,
  MapPinHouse,
  Receipt,
  Wallet,
} from "lucide-react";
import { ServicePageHero } from "@/components/shared/service-page-hero";

/* ------------------------------------------------------------------ */
/*  Service cards data (new stacking card format)                       */
/* ------------------------------------------------------------------ */

const services = [
  {
    icon: Building,
    title: "Entity Structure Consultation",
    description:
      "We walk you through LLC, C-Corp, S-Corp, LLP, and more — explaining the implications of each, so you can make an informed decision rather than follow a template.",
  },
  {
    icon: Scale,
    title: "State Selection Strategy",
    description:
      "Where you incorporate affects your tax exposure, compliance costs, and investor readiness. We help you evaluate the right state based on your business model.",
  },
  {
    icon: ScrollText,
    title: "Drafting of Agreements & Bylaws",
    description:
      "We draft and review your core governing documents — operating agreements, bylaws, shareholder agreements — ensuring rights and expectations are clearly defined.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Filings",
    description:
      "We manage all state and federal filings — Articles of Incorporation, registered agent appointments, and compliance requirements — so your entity is set up correctly.",
  },
  {
    icon: MapPinHouse,
    title: "Virtual Office Setup",
    description:
      "We help you establish a virtual office that gives your business a credible, professional address — satisfying regulatory and banking requirements.",
  },
  {
    icon: Receipt,
    title: "Tax Registrations",
    description:
      "EIN registration, state payroll tax, sales tax across relevant jurisdictions — we ensure your business is fully equipped for tax compliance from the start.",
  },
  {
    icon: Wallet,
    title: "Banking Setup",
    description:
      "We guide you through opening a business bank account, help you identify the right banking partner, and ensure your account is operational.",
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
    title: "International Founders",
    text: "Expanding into the US market and need the right entity structure from day one.",
    gradient: "from-[#4D397F]/10 via-[#4D397F]/5 to-transparent",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_210852_c03a1c7c-fa32-4ff0-87c5-12b4d98cf851_min.webp",
  },
  {
    icon: Landmark,
    title: "Multi-State Businesses",
    text: "Establishing a presence in new states or countries with full compliance.",
    gradient: "from-[#EE672C]/10 via-[#EE672C]/5 to-transparent",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_210853_70276300-ab05-4493-83dc-7e167f6bcc04_min.webp",
  },
  {
    icon: Rocket,
    title: "Growth-Stage Startups",
    text: "Preparing for investment rounds, cross-border operations, or restructuring.",
    gradient: "from-[#4D397F]/10 via-[#4D397F]/5 to-transparent",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_210855_0d847833-42f5-4af2-8fc8-2de8266ec9f7_min.webp",
  },
  {
    icon: Target,
    title: "Detail-Oriented Owners",
    text: "Who want their structure done right — not just done fast — with long-term clarity.",
    gradient: "from-[#EE672C]/10 via-[#EE672C]/5 to-transparent",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_210856_d3fd93ca-d852-405b-96b7-dcc29808d0e0_min.webp",
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
      <section className="py-16 md:py-24 bg-brand-tint/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection>
              <div>
                <SectionHeading
                  title="Watch Our Quick Explainer"
                  align="left"
                />
                <p className="text-muted-foreground leading-relaxed mt-4 max-w-lg">
                  In under two minutes, learn how TrueLedger helps founders choose the right entity structure, register in the right state, and get fully set up — without the guesswork.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Entity structure options explained", "State selection considerations", "End-to-end setup walkthrough"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-ink font-medium">
                      <span className="size-5 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                        <ChevronRight className="size-3 text-brand" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-[340px] rounded-2xl overflow-hidden shadow-xl border border-black/[0.06] bg-white">
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
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 3 — WHAT WE COVER (Bento Grid)                      */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#140e2a] via-[#1a1338] to-[#140e2a] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4D397F]/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#EE672C]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="mb-14">
              <h2 className="bg-gradient-to-r from-[#7B6BA8]/60 via-white to-[#7B6BA8]/60 bg-clip-text font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent mb-4">
                Comprehensive Entity Setup Services
              </h2>
              <p className="text-white/40 text-sm sm:text-base max-w-xl">
                From structure to registration — every step handled with precision.
              </p>
            </div>
          </AnimatedSection>

          {/* Bento grid — row 1: 3 cards, row 2: 2+2, row 3: 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isWide = i === 3 || i === 4;
              return (
                <AnimatedSection
                  key={service.title}
                  delay={i * 0.06}
                  className={
                    isWide
                      ? "md:col-span-3 lg:col-span-1"
                      : ""
                  }
                >
                  <div className="group relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 lg:p-7 hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="shrink-0 size-12 rounded-xl bg-gradient-to-br from-[#4D397F]/30 to-[#362765]/20 border border-white/[0.08] flex items-center justify-center group-hover:from-[#4D397F]/40 group-hover:to-[#EE672C]/15 transition-all duration-300">
                        <Icon className="size-5 text-[#9B8CC4] group-hover:text-white/90 transition-colors duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-mono text-[#EE672C]/60 font-semibold">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                        </div>
                        <h3 className="font-heading text-lg font-semibold text-white/90 mb-2 leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Bottom accent line */}
          <div className="mt-12 flex items-center gap-4 max-w-md">
            <div className="h-px flex-1 bg-gradient-to-r from-[#EE672C]/40 to-transparent" />
            <span className="text-xs text-white/25 uppercase tracking-widest">7 services, one team</span>
            <div className="h-px flex-1 bg-gradient-to-l from-[#4D397F]/40 to-transparent" />
          </div>
        </div>
      </section>

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {audiences.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.text} delay={i * 0.1}>
                  <div className={`relative h-full rounded-2xl bg-white border border-black/[0.06] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group`}>
                    <img src={item.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none" loading="lazy" />
                    <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient} pointer-events-none`} />

                    <div className="relative z-10 p-6 lg:p-7 flex flex-col items-center text-center">
                      <div className="size-14 rounded-2xl bg-brand-tint flex items-center justify-center border border-brand/10 mb-5 group-hover:scale-110 group-hover:bg-brand/10 transition-all duration-300">
                        <Icon className="size-6 text-brand" />
                      </div>
                      <h3 className="font-heading font-bold text-base text-ink mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
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
