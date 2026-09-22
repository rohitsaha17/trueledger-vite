import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";

const services = [
  {
    title: "Global Entity Setup",
    description:
      "Establish a compliant, tax-efficient presence — US LLC or C-Corp, or entering India, Canada, Singapore, or Australia.",
    href: "/services/global-entity-setup",
    accent: "#4D397F",
  },
  {
    title: "Managed Accounting & Bookkeeping",
    description:
      "Real-time books that stay compliant, financially clean, and growth-ready — every single day.",
    href: "/services/managed-accounting-bookkeeping",
    accent: "#362765",
  },
  {
    title: "Tax Compliance & Planning",
    description:
      "Deep expertise across global tax laws, cross-border structures, and owner-level tax planning.",
    href: "/services/tax-compliance-advisory",
    accent: "#EE672C",
  },
  {
    title: "Support to CPAs & Accounting Firms",
    description:
      "A natural extension of your team — onboarding, bookkeeping, month-end close, reporting, payroll, and filings.",
    href: "/services/support-to-cpas",
    accent: "#4D397F",
  },
  {
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
    <section className="py-14 md:py-18 relative overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/backgrounds/finance-abstract.webp"
          alt=""
          className="w-full h-full object-cover opacity-[0.7]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-white/35" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading and list share the left column so the image can stretch to
            match their combined height — no orphaned gap beside the artwork. */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-stretch">
          {/* Left: heading + linked service list */}
          <div>
            <AnimatedSection>
              <p className="text-[15px] font-semibold uppercase tracking-widest mb-3 text-[#EE672C]">
                How We Help Clients
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 leading-tight max-w-2xl mb-7">
                Every great business is built on the right financial foundation.
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              {/* Editorial rows: oversized index number, title + copy beside it,
                  separated by hairline dividers instead of cards. Each row
                  carries its brand accent in --accent, revealed on hover. */}
              <div>
                {services.map((service, index) => (
                  <Link
                    key={service.title}
                    to={service.href}
                    style={{ "--accent": service.accent } as CSSProperties}
                    className="group flex items-baseline gap-4 sm:gap-6 py-5 sm:py-6 border-t border-gray-900/10 first:border-t-0 first:pt-0"
                  >
                    <span className="font-heading font-bold leading-none tabular-nums shrink-0 text-3xl sm:text-4xl lg:text-5xl text-gray-900/15 group-hover:text-[var(--accent)] transition-colors duration-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-heading font-semibold text-base sm:text-2xl text-gray-900 group-hover:text-[var(--accent)] transition-colors duration-200">
                          {service.title}
                        </span>
                        <ArrowRight className="size-4 text-gray-300 group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                      <p className="text-[18 px] text-gray-500 leading-relaxed mt-1.5">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: one static image, stretched to the column height */}
          <AnimatedSection delay={0.2} className="lg:h-full lg:flex lg:items-center">
            {/* Fixed aspect ratio, capped height and top-anchored crop so the
                taller service list can't stretch or over-zoom the photo. */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] lg:max-h-[560px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={sideImage}
                alt="TrueLedger financial services"
                className="absolute inset-0 w-full h-full object-cover object-top"
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
