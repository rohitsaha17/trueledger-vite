import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  MapPin,
  Building2,
  FileText,
  Calculator,
  Receipt,
  Shield,
} from "lucide-react";
import { ServicePageHero } from "@/components/shared/service-page-hero";

/* ------------------------------------------------------------------ */
/*  Service cards data                                                  */
/* ------------------------------------------------------------------ */

const services = [
  {
    icon: Building2,
    title: "Entity Setup",
    description:
      "UK Limited Company formation through Companies House, registered office and director appointments, annual filings. HMRC registrations — Corporation Tax, PAYE, VAT where applicable.",
  },
  {
    icon: Shield,
    title: "Corporate Compliances",
    description:
      "Annual confirmation statements, Companies House filings, statutory registers, ongoing housekeeping.",
  },
  {
    icon: FileText,
    title: "Financial Statements",
    description:
      "Statutory accounts under UK GAAP (FRS 102 or FRS 105), filed with Companies House and HMRC within correct deadlines and exemption thresholds.",
  },
  {
    icon: Receipt,
    title: "VAT / MTD Filings",
    description:
      "VAT registration and return preparation, fully compliant with Making Tax Digital (MTD) — digital record-keeping, MTD-compatible software, on-time submissions.",
  },
  {
    icon: Calculator,
    title: "Individual & Business Tax Filings",
    description:
      "Self Assessment (SA100) returns for individuals, Corporation Tax (CT600) for companies, with attention to cross-border positioning for income, ownership, or family ties spanning UK and other jurisdictions.",
  },
];

/* ================================================================== */
/*  Main Page Component                                                 */
/* ================================================================== */

export default function EuropeUKPage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <ServicePageHero
        eyebrow="TrueLedger Europe"
        title={
          <>
            Managing UK compliance,
            <br className="hidden sm:block" />
            <span className="text-[#EE672C]">without the guesswork.</span>
          </>
        }
        description="TrueLedger's European practice operates through direct collaboration with a UK-qualified Chartered Accountant, giving clients HMRC- and Companies House-fluent support without the overhead of building an in-house UK team."
        imageSrc="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80"
        videoSrc="https://videos.pexels.com/video-files/5765154/5765154-uhd_2560_1440_24fps.mp4"
        accentColor="#EE672C"
        overlayGradient="linear-gradient(to right, rgba(20,14,42,0.82) 0%, rgba(20,14,42,0.65) 35%, rgba(20,14,42,0.35) 65%, rgba(77,57,127,0.12) 100%)"
      />

      {/* ============================================================ */}
      {/*  SECTION 2 — WHAT WE DO IN THE UK                             */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <SectionHeading
              title="What We Do in the UK"
              description="End-to-end UK compliance support, from entity formation to ongoing filings."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={i * 0.08}>
                  <div className="group relative h-full rounded-2xl bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden">
                    {/* Left accent bar */}
                    <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-[#4D397F] to-[#4D397F]/30 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="p-6 sm:p-7 pl-7 sm:pl-8">
                      {/* Icon */}
                      <div className="size-11 rounded-xl bg-[#4D397F]/[0.07] border border-[#4D397F]/10 flex items-center justify-center mb-5 group-hover:bg-[#4D397F]/[0.12] transition-colors duration-300">
                        <Icon className="size-5 text-[#4D397F]" />
                      </div>

                      <h3 className="font-heading font-bold text-base sm:text-[1.05rem] text-ink leading-snug mb-3">
                        {service.title}
                      </h3>
                      <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">
                        {service.description}
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
      {/*  SECTION 3 — LEADERSHIP                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-brand-tint/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#4D397F]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
            {/* Avatar placeholder */}
            <AnimatedSection>
              <div className="flex justify-center lg:justify-start">
                <div className="relative size-44 md:size-52 rounded-full bg-gradient-to-br from-[#4D397F] via-[#6B5A9E] to-[#EE672C]/60 p-1 shadow-xl shadow-[#4D397F]/15">
                  <div className="size-full rounded-full bg-gradient-to-br from-[#4D397F]/20 via-white to-[#EE672C]/10 flex items-center justify-center">
                    <span className="font-heading text-4xl md:text-5xl font-bold text-[#4D397F]/70 select-none">
                      AC
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Bio */}
            <AnimatedSection delay={0.12}>
              <div>
                <p className="text-[#EE672C] text-xs font-semibold uppercase tracking-widest mb-3">
                  Senior Advisor
                </p>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-ink leading-tight mb-5">
                  Led by Aseem Chawla,{" "}
                  <span className="text-[#4D397F]">
                    Senior Advisor to TrueLedger
                  </span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  TrueLedger&rsquo;s European practice draws on the guidance of
                  Aseem Chawla &mdash; a Senior Advocate and Chartered
                  Accountant with an extensive background in tax litigation,
                  estate planning, and technical tax authorship. His standing in
                  the field gives TrueLedger&rsquo;s European clients access to
                  senior judgment on complex and contested tax positions, well
                  beyond standard compliance filing.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 4 — CLOSING CTA                                      */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-[#140e2a] via-[#1a1338] to-[#140e2a]">
        <div className="absolute top-0 left-1/3 w-96 h-64 bg-[#4D397F]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-72 h-48 bg-[#EE672C]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center">
          <AnimatedSection>
            <motion.div
              className="relative max-w-2xl w-full rounded-3xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl p-8 sm:p-10 md:p-12 text-center overflow-hidden"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {/* Glass shimmer */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-[#4D397F]/[0.04] pointer-events-none" />

              <div className="relative z-10">
                <p className="text-[#EE672C] text-xs font-semibold uppercase tracking-widest mb-4">
                  Get in Touch
                </p>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4 leading-tight">
                  Talk to Our Europe Team
                </h2>
                <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-6">
                  Setting up a UK entity, bringing your VAT filings into MTD
                  compliance, or need a second opinion on a complex cross-border
                  position &mdash; start with a conversation.
                </p>

                <a
                  href="mailto:europedesk@trueledgerconsulting.com"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#EE672C] hover:text-[#EE672C]/80 transition-colors mb-8"
                >
                  <MapPin className="size-4" />
                  europedesk@trueledgerconsulting.com
                </a>

                <div className="block">
                  <ConsultationModal
                    trigger={
                      <Button
                        size="lg"
                        className="text-base px-8 h-13 font-semibold shadow-xl shadow-[#EE672C]/20 border-0 text-white cursor-pointer"
                        style={{
                          background:
                            "linear-gradient(135deg, #EE672C, #B03B2D)",
                        }}
                      >
                        Book a Consultation
                        <ChevronRight className="size-4" />
                      </Button>
                    }
                  />
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
