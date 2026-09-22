import { AnimatedSection } from "@/components/shared/animated-section";
import { DARK_PANEL_SURFACE } from "@/components/shared/feature-card";
import { cn } from "@/lib/utils";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { ServiceFAQ } from "@/components/shared/service-faq";
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
  Wallet,
} from "lucide-react";
import { ServicePageHero } from "@/components/shared/service-page-hero";
import { resources, coverFor } from "./resources";

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
    title: "Tax and Regulatory Registrations",
    description:
      "We manage all regulatory filings and tax registrations including EIN registration, state payroll tax, sales tax across relevant jurisdictions, so your entity is set up correctly.",
  },
  {
    icon: MapPinHouse,
    title: "Virtual Office Setup",
    description:
      "We help you establish a virtual office that gives your business a credible, professional address — satisfying regulatory and banking requirements.",
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

// Pull real, Global-Entity-Setup–relevant items from the Resources page data.
const relatedArticles = resources
  .filter((r) => r.service === "Global Entity Setup")
  .map((r) => ({
    title: r.title,
    category: r.category,
    href: r.pdf ?? r.link,
    cover: coverFor(r),
  }));

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
          <a
            key={`${article.title}-${i}`}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-72 shrink-0 bg-white rounded-2xl border border-black/[0.06] shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 group"
          >
            {/* Thumbnail */}
            <div className="h-36 relative overflow-hidden bg-gradient-to-br from-brand-soft via-brand-tint to-brand/10">
              {article.cover && (
                <img
                  src={article.cover}
                  alt={article.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-xs font-medium bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-primary">
                  {article.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-heading font-semibold text-sm text-ink leading-snug mb-3 line-clamp-2">
                {article.title}
              </h4>
              <span className="text-xs font-medium text-brand group-hover:text-brand-dark transition-colors inline-flex items-center gap-1">
                Read More
                <ChevronRight className="size-3" />
              </span>
            </div>
          </a>
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
  const faqs = [
    {
      question: "Which countries can you help set up entities in?",
      answer:
        "We currently support entity formation in the United States, Canada, United Kingdom, Australia, Singapore, and India. Our team handles jurisdiction-specific compliance requirements, registered agent setup, and all necessary regulatory filings in each country.",
    },
    {
      question: "How long does the entity formation process typically take?",
      answer:
        "Timelines vary by jurisdiction. A US LLC can be formed in 3–5 business days, while more regulated jurisdictions like Singapore or the UK may take 2–4 weeks. We provide a clear timeline during the initial consultation and keep you updated at every step.",
    },
    {
      question: "What types of business structures can you set up?",
      answer:
        "We support a wide range of structures including LLCs, C-Corps, S-Corps, LLPs, Private Limited Companies, Branch Offices, and Subsidiary entities. We help you choose the right structure based on your business goals, tax implications, and operational needs.",
    },
    {
      question: "Do you handle ongoing compliance after incorporation?",
      answer:
        "Yes. Entity setup is just the beginning. We provide ongoing registered agent services, annual filings, statutory compliance, tax registrations, and corporate governance support to keep your entity in good standing.",
    },
    {
      question: "What documents do I need to get started?",
      answer:
        "Requirements vary by jurisdiction, but typically include identification documents (passport/ID), proof of address, details about shareholders and directors, and a brief description of your business activities. We guide you through the exact requirements during onboarding.",
    },
    {
      question:
        "Can you help with bank account opening for new entities?",
      answer:
        "Absolutely. We assist with business bank account applications, prepare the required documentation, and coordinate with banking partners in each jurisdiction. We can recommend banks that best suit your business needs and transaction volumes.",
    },
  ];

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
        videoSrc="https://videos.pexels.com/video-files/4686756/4686756-hd_1920_1080_24fps.mp4"
        accentColor="#EE672C"
        overlayGradient="linear-gradient(to right, rgba(20,14,42,0.72) 0%, rgba(20,14,42,0.52) 35%, rgba(20,14,42,0.25) 65%, rgba(77,57,127,0.06) 100%)"
      />

      {/* ============================================================ */}
      {/*  SECTION 2 — EMBEDDED VIDEO                                   */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/8347237/8347237-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/[0.92]" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-tint/80 via-transparent to-brand-soft/40" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection>
              <div>
                <p className="text-brand text-[15px] font-semibold uppercase tracking-widest mb-3">
                  See How It Works
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
                  Watch Our Quick Explainer
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  In under two minutes, learn how TrueLedger helps founders choose the right entity structure, register in the right state, and get fully set up — without the guesswork.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { num: "01", label: "Entity structure options explained" },
                    { num: "02", label: "State selection considerations" },
                    { num: "03", label: "End-to-end setup walkthrough" },
                  ].map((item) => (
                    <div key={item.num} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-black/[0.06] shadow-sm">
                      <span className="text-2xl font-bold text-brand/15 font-heading block mb-1">{item.num}</span>
                      <p className="text-sm font-medium text-ink leading-snug">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <ConsultationModal
                    trigger={
                      <Button size="lg" className="rounded-full px-7">
                        Get Started
                        <ChevronRight className="size-4" />
                      </Button>
                    }
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-[340px] rounded-2xl overflow-hidden shadow-2xl shadow-brand/15 border border-black/[0.06] bg-white">
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
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#140e2a] via-[#1a1338] to-[#140e2a] relative overflow-hidden">
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

          {/* Service grid — 3 per row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection
                  key={service.title}
                  delay={i * 0.06}
                >
                  <div
                    className={cn(
                      "group relative h-full overflow-hidden rounded-2xl p-6 lg:p-7",
                      "transition-[border-color,box-shadow,transform] duration-500 ease-out hover:-translate-y-1",
                      DARK_PANEL_SURFACE,
                    )}
                  >
                    {/* Accent rail — wipes up from the bottom edge */}
                    <span className="pointer-events-none absolute inset-y-0 left-0 w-[2px] origin-bottom scale-y-0 bg-gradient-to-t from-brand via-brand/70 to-coral transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-y-100" />
                    {/* Soft wash that breathes in behind the corner */}
                    <span className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-coral/20 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

                    <div className="relative flex items-start gap-5">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark shadow-lg shadow-brand/30 transition-transform duration-500 ease-out group-hover:scale-105">
                        <Icon className="size-5 text-white" strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          <span className="font-mono text-xs font-semibold tracking-[0.2em] text-coral/90 transition-colors duration-500 group-hover:text-coral">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent transition-colors duration-500 group-hover:from-coral/50" />
                        </div>
                        <h3 className="mb-2 font-heading text-lg font-bold leading-snug text-white">
                          {service.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-white/65">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>


        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 4 — WHO THIS IS FOR                                  */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden py-16 md:py-20">
        {/* Section background — subtle global-network artwork */}
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/images/backgrounds/global-network.webp"
            alt=""
            className="h-full w-full object-cove
            r"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-white/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-sm transition-[border-color,box-shadow] duration-500 ease-out hover:border-brand/25 hover:shadow-[0_20px_44px_-16px_rgba(77,57,127,0.22)]">
                    <img
                      src={item.image}
                      alt=""
                      className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.20] transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40" />

                    {/* Resting state — sized to its content, vertically centred */}
                    <div className="relative z-10 flex h-full min-h-[190px] flex-col items-center justify-center gap-3.5 p-6 text-center">
                      <div className="flex size-14 items-center justify-center rounded-2xl border border-brand/10 bg-brand-tint transition-all duration-500 ease-out group-hover:scale-105 group-hover:border-brand/25 group-hover:bg-brand/10">
                        <Icon className="size-6 text-brand" strokeWidth={1.75} />
                      </div>
                      <h3 className="font-heading text-base font-bold leading-snug text-ink">
                        {item.title}
                      </h3>
                      {/* No hover on touch devices — show the detail inline instead */}
                      <p className="text-sm leading-relaxed text-muted-foreground lg:hidden">
                        {item.text}
                      </p>
                    </div>

                    {/* Detail panel — slides up from the bottom edge on hover */}
                    <div className="absolute inset-0 z-20 hidden translate-y-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand to-brand-dark p-6 text-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:translate-y-0 lg:flex">
                      <Icon className="size-6 text-white/70" strokeWidth={1.75} />
                      <h3 className="font-heading text-base font-bold leading-snug text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/75 opacity-0 transition-opacity delay-150 duration-500 group-hover:opacity-100">
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
      <section className="py-16 md:py-20 bg-brand-tint/50 overflow-hidden">
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
      {/*  SECTION 6 — CLOSING CTA                                      */}
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
                  className="text-base px-8 h-13 font-semibold shadow-xl shadow-[#4D397F]/20 border-0 text-white cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #4D397F, #362765)" }}
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
