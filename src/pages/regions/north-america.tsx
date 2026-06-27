import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  MapPin,
  Building2,
  Calculator,
  FileText,
  Users,
  Briefcase,
} from "lucide-react";
import { ServicePageHero } from "@/components/shared/service-page-hero";

/* ------------------------------------------------------------------ */
/*  Service categories data                                             */
/* ------------------------------------------------------------------ */

interface ServiceCategory {
  icon: typeof Building2;
  title: string;
  us: string[];
  canada: string[];
}

const serviceCategories: ServiceCategory[] = [
  {
    icon: Building2,
    title: "Entity Setup",
    us: [
      "LLC, C-corp, S-corp formation",
      "EIN issuance",
      "Registered agent services",
      "State & franchise tax registration",
      "BOI reporting under CTA",
    ],
    canada: [
      "Federal/provincial incorporation",
      "Business Number & CRA program accounts (GST/HST, payroll)",
      "Extra-provincial registration",
    ],
  },
  {
    icon: Calculator,
    title: "Managed Accounting & Bookkeeping",
    us: [
      "Multi-entity, multi-currency bookkeeping on QuickBooks Online, Xero",
      "AP/AR management & month-end close",
      "Payroll processing (Gusto, ADP, Paychex)",
      "Industry-specific support: restaurants, SaaS, real estate",
    ],
    canada: [
      "Multi-entity, multi-currency bookkeeping on QuickBooks Online, Xero",
      "AP/AR management & month-end close",
      "Payroll processing (Wagepoint)",
      "Industry-specific support: restaurants, SaaS, real estate",
    ],
  },
  {
    icon: FileText,
    title: "Tax Compliance & Advisory",
    us: [
      "1040/1040-NR individual returns",
      "1065/1120/1120-S business returns",
      "FBAR/FATCA international reporting",
      "Multi-state apportionment",
      "R&D credits",
      "Sales tax nexus analysis",
    ],
    canada: [
      "T1/T2 returns",
      "GST/HST filings",
      "Payroll remittances (CPP/EI)",
      "Cross-border treaty positions (RRSP, 401(k))",
    ],
  },
  {
    icon: Users,
    title: "Support to CPAs & Accounting Firms",
    us: [
      "White-label bookkeeping",
      "Tax prep (Drake, Lacerte, CCH Tax)",
      "Payroll support",
      "Scaled around peak season",
      "Matches your existing review process",
    ],
    canada: [
      "White-label bookkeeping",
      "Tax prep (Drake, Lacerte, CCH Tax)",
      "Payroll support",
      "Scaled around peak season",
      "Matches your existing review process",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Advisory",
    us: [
      "Fractional CFO support",
      "Fundraise & investor due diligence prep",
      "Governance and internal control frameworks for IPO-track",
      "Accounting automation",
    ],
    canada: [
      "Fractional CFO support",
      "Fundraise & investor due diligence prep",
      "Governance and internal control frameworks for IPO-track",
      "Accounting automation",
    ],
  },
];

/* ================================================================== */
/*  Main Page Component                                                 */
/* ================================================================== */

export default function NorthAmericaPage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <ServicePageHero
        eyebrow="TrueLedger North America"
        title={
          <>
            Cross-border by design.
            <br className="hidden sm:block" />
            <span className="text-[#EE672C]">Local where it counts.</span>
          </>
        }
        description="TrueLedger maintains a presence in Austin, Texas, giving US and Canada-based clients a team that knows local tax compliances, regulations and accounting procedures for both countries."
        imageSrc="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80"
        videoSrc="https://videos.pexels.com/video-files/4611396/4611396-uhd_2560_1440_25fps.mp4"
        accentColor="#EE672C"
        overlayGradient="linear-gradient(to right, rgba(20,14,42,0.82) 0%, rgba(20,14,42,0.65) 35%, rgba(20,14,42,0.35) 65%, rgba(77,57,127,0.12) 100%)"
      />

      {/* ============================================================ */}
      {/*  SECTION: What We Do Across the US & Canada                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white via-[#f9f8fc] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="mb-14 md:mb-16 text-center">
              <SectionHeading
                eyebrow="Our Services"
                title="What We Do Across the US & Canada"
                description="Comprehensive accounting, tax, and advisory services built for businesses operating in — or expanding into — North America."
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {serviceCategories.map((category, i) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  className="group relative rounded-2xl bg-white border border-black/[0.06] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  {/* Left accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4D397F] to-[#EE672C] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="p-6 sm:p-7 pl-7 sm:pl-8">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center size-11 rounded-xl bg-[#4D397F]/[0.08]">
                        <Icon className="size-5 text-[#4D397F]" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-lg font-semibold text-ink mb-5">
                      {category.title}
                    </h3>

                    {/* US */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#4D397F] mb-2">
                        United States
                      </p>
                      <ul className="space-y-1.5">
                        {category.us.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                          >
                            <ChevronRight className="size-3.5 text-[#EE672C] mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Canada */}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#4D397F] mb-2">
                        Canada
                      </p>
                      <ul className="space-y-1.5">
                        {category.canada.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                          >
                            <ChevronRight className="size-3.5 text-[#EE672C] mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION: Leadership                                          */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="mb-14 md:mb-16">
              <SectionHeading
                eyebrow="Leadership"
                title="Led by Manish Aggarwal, Partner, TrueLedger"
              />
            </div>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Photo placeholder */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative size-56 lg:size-64 rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4D397F] via-[#4D397F]/80 to-[#EE672C]/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/90 text-5xl font-heading font-bold">
                    MA
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            {/* Bio */}
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-ink mb-2">
                Manish Aggarwal
              </h3>
              <p className="text-sm font-medium text-[#4D397F] mb-6">
                Partner, TrueLedger
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                Manish leads TrueLedger&rsquo;s North America practice with 15
                years of international taxation experience and deep exposure to
                the US market. His background spans cross-border tax structuring
                and individual and business compliance, shaped by years of
                working US filings directly rather than supervising them from
                elsewhere. Manish is the senior point of contact for clients and
                CPA/CA firm partners across the North America practice.
              </p>
              <div className="mt-8">
                <ConsultationModal
                  trigger={
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full px-7 border-[#4D397F]/20 text-[#4D397F] hover:bg-[#4D397F]/5"
                    >
                      Connect with Manish
                      <ChevronRight className="size-4" />
                    </Button>
                  }
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION: CTA                                                 */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#140e2a]">
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4D397F]/20 via-transparent to-[#EE672C]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(77,57,127,0.15),transparent_60%)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="rounded-3xl bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] p-8 sm:p-12 lg:p-16 shadow-[0_8px_60px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left: Text */}
              <div>
                <AnimatedSection>
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight mb-5">
                    Talk to Our North America Team
                  </h2>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                    Whether you&rsquo;re setting up your first US entity, need a
                    compliance partner who understands the cross-border picture,
                    or your CPA firm needs overflow capacity this season &mdash;
                    start with a scoping call.
                  </p>

                  <div className="space-y-4 mb-10">
                    {/* Office address */}
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <MapPin className="size-5 text-[#EE672C]" />
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed">
                        5900, Balcones Drive, Ste-100, Austin, Texas, 78731
                      </p>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <FileText className="size-5 text-[#EE672C]" />
                      </div>
                      <a
                        href="mailto:usdesk@trueledgerconsulting.com"
                        className="text-white/80 text-sm leading-relaxed hover:text-white transition-colors"
                      >
                        usdesk@trueledgerconsulting.com
                      </a>
                    </div>
                  </div>

                  <ConsultationModal
                    trigger={
                      <Button
                        size="lg"
                        className="rounded-full px-8 bg-[#EE672C] hover:bg-[#EE672C]/90 text-white"
                      >
                        Schedule a Scoping Call
                        <ChevronRight className="size-4" />
                      </Button>
                    }
                  />
                </AnimatedSection>
              </div>

              {/* Right: Decorative element */}
              <div className="hidden lg:flex justify-center">
                <div className="relative w-72 h-72">
                  {/* Concentric rings */}
                  <div className="absolute inset-0 rounded-full border border-white/[0.08]" />
                  <div className="absolute inset-6 rounded-full border border-white/[0.06]" />
                  <div className="absolute inset-12 rounded-full border border-white/[0.05]" />
                  <div className="absolute inset-[4.5rem] rounded-full bg-gradient-to-br from-[#4D397F]/30 to-[#EE672C]/20 flex items-center justify-center backdrop-blur-sm">
                    <MapPin className="size-10 text-white/60" />
                  </div>

                  {/* Floating dots */}
                  <motion.div
                    className="absolute top-4 right-12 size-2 rounded-full bg-[#EE672C]/60"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-6 size-1.5 rounded-full bg-[#4D397F]/80"
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                  <motion.div
                    className="absolute top-1/3 left-2 size-2.5 rounded-full bg-white/20"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
