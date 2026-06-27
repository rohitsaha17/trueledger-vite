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
  DollarSign,
  ClipboardList,
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
      "Australia: Pty Ltd via ASIC, ABN, ACN, TFN registration. Singapore: Pte Ltd via ACRA, UEN, registered office and resident director/company secretary requirements.",
  },
  {
    icon: Receipt,
    title: "GST Filings — Singapore",
    description:
      "GST registration, periodic return preparation and filing with IRAS, monitoring of compulsory registration threshold as revenue grows.",
  },
  {
    icon: FileText,
    title: "BAS Filings — Australia",
    description:
      "Business Activity Statement preparation and lodgement with ATO, covering GST, PAYG instalments, and other BAS cycle obligations.",
  },
  {
    icon: DollarSign,
    title: "PAYG & Withholding Tax — Australia",
    description:
      "PAYG withholding registration and remittance for employees and contractors, plus withholding tax on payments to non-residents.",
  },
  {
    icon: Calculator,
    title: "Corporate Tax Filings",
    description:
      "Australia: Company tax return lodgement with ATO. Singapore: Form C-S/C filing with IRAS, including Estimated Chargeable Income (ECI) submission.",
  },
  {
    icon: ClipboardList,
    title: "Financial Reporting",
    description:
      "Australia: AASB standards. Singapore: SFRS, including XBRL-format filing with ACRA where required.",
  },
  {
    icon: Receipt,
    title: "Payroll Processing",
    description:
      "Australia: Single Touch Payroll (STP) compliant, superannuation guarantee. Singapore: CPF contribution processing, IRAS-compliant payroll reporting.",
  },
];

/* ================================================================== */
/*  Main Page Component                                                 */
/* ================================================================== */

export default function APACPage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  SECTION 1 — HERO                                             */}
      {/* ============================================================ */}
      <ServicePageHero
        eyebrow="TrueLedger APAC"
        title={
          <>
            Local partnerships.
            <br className="hidden sm:block" />
            <span className="text-[#EE672C]">One point of contact.</span>
          </>
        }
        description="TrueLedger's APAC practice runs through direct partnerships with a Singapore-based licensed tax agent and a fellow CPA Australia member — giving clients ATO- and IRAS-fluent compliance coordinated end-to-end through a single TrueLedger point of contact."
        imageSrc="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=80"
        videoSrc="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
      />

      {/* ============================================================ */}
      {/*  SECTION 2 — WHAT WE DO IN AUSTRALIA & SINGAPORE               */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Services"
              title="What We Do in Australia & Singapore"
              description="ATO- and IRAS-fluent compliance across entity setup, tax filings, payroll, and financial reporting."
            />
          </AnimatedSection>

          {/* Top row: 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {services.slice(0, 4).map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="group relative rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-7 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  whileHover={{ y: -4 }}
                >
                  {/* Left accent bar */}
                  <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-[#4D397F] via-[#4D397F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="size-11 rounded-xl bg-[#4D397F]/[0.08] flex items-center justify-center mb-4">
                    <Icon className="size-5 text-[#4D397F]" />
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-[1.05rem] text-ink leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom row: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mt-5 lg:mt-6">
            {services.slice(4).map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="group relative rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-7 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: (i + 4) * 0.08,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  whileHover={{ y: -4 }}
                >
                  {/* Left accent bar */}
                  <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-[#4D397F] via-[#4D397F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="size-11 rounded-xl bg-[#4D397F]/[0.08] flex items-center justify-center mb-4">
                    <Icon className="size-5 text-[#4D397F]" />
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-[1.05rem] text-ink leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 3 — LEADERSHIP                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-brand-tint/40 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
                {/* Gradient avatar placeholder */}
                <div className="shrink-0">
                  <div className="size-36 md:size-44 rounded-full bg-gradient-to-br from-[#4D397F] via-[#4D397F]/70 to-[#EE672C]/60 flex items-center justify-center shadow-xl shadow-[#4D397F]/15">
                    <span className="text-4xl md:text-5xl font-heading font-bold text-white/90 select-none">
                      HR
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <div className="text-center md:text-left">
                  <p className="text-[#EE672C] text-xs font-semibold uppercase tracking-widest mb-2">
                    Practice Lead
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-ink leading-snug mb-4">
                    Led by CA Hrithvik Raj, Partner, TrueLedger
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Hrithvik leads TrueLedger&rsquo;s Australia and broader APAC
                    practice with 15&nbsp;years of experience spanning foreign
                    reporting, statutory compliance, and auditing across Big&nbsp;4
                    firms and offshore delivery centres. That background &mdash;
                    built around getting complex, multi-entity reporting right the
                    first time &mdash; shapes how the APAC practice approaches every
                    engagement, from a first-time Pty&nbsp;Ltd or Pte&nbsp;Ltd setup
                    to ongoing BAS and IRAS compliance for an established group.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 4 — CLOSING CTA                                      */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Dark background */}
        <div className="absolute inset-0 bg-[#140e2a]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e2a] via-transparent to-[#140e2a]/70" />

        {/* Ambient blurs */}
        <div className="absolute top-0 left-1/3 w-96 h-64 bg-[#4D397F]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-72 h-48 bg-[#EE672C]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              {/* Glass card */}
              <motion.div
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl p-8 md:p-12 text-center shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <p className="text-[#EE672C] text-xs font-semibold uppercase tracking-widest mb-4">
                  Get in Touch
                </p>
                <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4 leading-tight">
                  Talk to Our APAC Team
                </h2>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 max-w-lg mx-auto">
                  Setting up your first entity in Australia or Singapore, or need a
                  compliance partner who already speaks both ASIC and ACRA fluently
                  &mdash; start with a scoping call.
                </p>

                <a
                  href="mailto:apacdesk@trueledgerconsulting.com"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#EE672C] hover:text-[#EE672C]/80 transition-colors mb-8"
                >
                  <MapPin className="size-4" />
                  apacdesk@trueledgerconsulting.com
                </a>

                <div className="flex justify-center">
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
                        Book a Scoping Call
                        <ChevronRight className="size-4" />
                      </Button>
                    }
                  />
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
