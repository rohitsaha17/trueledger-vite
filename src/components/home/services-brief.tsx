import { Link } from "react-router-dom";
import { ArrowRight, Globe, BookOpen, Calculator, Lightbulb, Users } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";

const services = [
  {
    icon: Globe,
    title: "Global Entity Setup",
    description:
      "Establish a compliant, tax-efficient presence — US LLC or C-Corp, or entering India, Canada, Singapore, or Australia.",
    href: "/services/global-entity-setup",
    accent: "#4D397F",
  },
  {
    icon: BookOpen,
    title: "Managed Accounting & Bookkeeping",
    description:
      "Real-time books that stay compliant, financially clean, and growth-ready — every single day.",
    href: "/services/managed-accounting-bookkeeping",
    accent: "#362765",
  },
  {
    icon: Calculator,
    title: "Tax Compliance & Planning",
    description:
      "Deep expertise across global tax laws, cross-border structures, and owner-level tax planning.",
    href: "/services/tax-compliance-advisory",
    accent: "#EE672C",
  },
  {
    icon: Users,
    title: "Support to CPAs & Accounting Firms",
    description:
      "A natural extension of your team — onboarding, bookkeeping, month-end close, reporting, payroll, and filings.",
    href: "/services/support-to-cpas",
    accent: "#4D397F",
  },
  {
    icon: Lightbulb,
    title: "Advisory Services",
    description:
      "Beyond the numbers — strategy, governance, fundraising readiness, financial controls, and technology.",
    href: "/services/business-advisory",
    accent: "#B03B2D",
  },
];

const sideImage =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_165826_ac572644-f557-4a5c-989f-6df5b060ab68_min.webp";

export function ServicesBrief() {
  return (
    <section className="py-14 md:py-20 relative overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_202808_f148b760-d0b4-43d4-b91e-de1516ccacfa_min.webp"
          alt=""
          className="w-full h-full object-cover opacity-[0.15]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-[#EE672C]">
            How We Help Clients
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 leading-tight max-w-2xl">
            Every great business is built on the right financial foundation.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-10">
          {/* Left: static, linked service list */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.title}
                    to={service.href}
                    className="group flex items-start gap-3 rounded-xl px-4 py-3.5 bg-white/60 hover:bg-white transition-colors duration-200 shadow-[0_1px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)]"
                    style={{ borderLeft: `3px solid ${service.accent}` }}
                  >
                    <div
                      className="size-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${service.accent}15` }}
                    >
                      <Icon className="size-4.5" style={{ color: service.accent }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-heading font-semibold text-sm sm:text-base text-gray-900">
                          {service.title}
                        </span>
                        <ArrowRight className="size-4 text-gray-300 group-hover:text-gray-700 group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                      <p className="text-[13px] text-gray-500 leading-relaxed mt-1">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Right: one static image */}
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={sideImage}
                alt="TrueLedger financial services"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e143a]/70 via-[#362765]/20 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
