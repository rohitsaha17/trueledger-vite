import { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  BookOpen,
  Calculator,
  Lightbulb,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";

const services = [
  {
    icon: Globe,
    title: "Global Entity Setup",
    description:
      "We guide founders and enterprises through establishing a compliant, tax-efficient presence — whether you're setting up a US LLC or C-Corp, entering India, Canada, Singapore, or Australia, or structuring a multi-entity global footprint.",
    href: "/services/global-entity-setup",
    accent: "#4D397F",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_193223_06fe1414-c9a9-4595-9dce-6488b5c91bbe_min.webp",
  },
  {
    icon: BookOpen,
    title: "Managed Accounting & Bookkeeping",
    description:
      "Built on years of hands-on experience across industries and geographies, we manage your books in real time — ensuring compliance, maintaining financial hygiene, and keeping you growth-ready every single day.",
    href: "/services/managed-accounting-bookkeeping",
    accent: "#362765",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_165821_ae8f5541-03f3-450c-b62a-d7740b512d10_min.webp",
  },
  {
    icon: Calculator,
    title: "Tax Compliance & Planning",
    description:
      "With deep expertise across global tax laws, cross-border structures, and owner-level tax planning, we serve business owners across jurisdictions who need an advisor who understands the full picture.",
    href: "/services/tax-compliance-advisory",
    accent: "#EE672C",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_165826_ac572644-f557-4a5c-989f-6df5b060ab68_min.webp",
  },
  {
    icon: Lightbulb,
    title: "Advisory Services",
    description:
      "Our advisory practice goes beyond numbers — working alongside founders and leadership teams on strategy, governance, fundraising readiness, financial controls, and technology infrastructure.",
    href: "/services/business-advisory",
    accent: "#B03B2D",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_165822_01a41f97-2fe8-412f-a494-bf7fe4ec6f12_min.webp",
  },
  {
    icon: Users,
    title: "Support to CPAs & Accounting Firms",
    description:
      "We become a natural extension of your team — handling client onboarding, day-to-day bookkeeping, month-end close, financial reporting, historical cleanups, payroll, and sales tax filings across your portfolio.",
    href: "/services/support-to-cpas",
    accent: "#4D397F",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_165825_b8c21a16-bb17-4825-b26d-3026f283e654_min.webp",
  },
];

export function ServicesBrief() {
  const [activeIndex, setActiveIndex] = useState(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPaused = useRef(false);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused.current) {
        setActiveIndex((prev) => (prev + 1) % services.length);
      }
    }, 3000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleManualChange = useCallback(
    (index: number) => {
      setActiveIndex(index);
      resetTimer();
    },
    [resetTimer]
  );

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
    resetTimer();
  }, [resetTimer]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    resetTimer();
  }, [resetTimer]);

  const handleHoverEnter = useCallback(
    (index: number) => {
      isPaused.current = true;
      setActiveIndex(index);
    },
    []
  );

  const handleHoverLeave = useCallback(() => {
    isPaused.current = false;
    resetTimer();
  }, [resetTimer]);

  const activeService = services[activeIndex];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-10">
          {/* Left: Accordion */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-1">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={service.title}
                    onClick={() => handleManualChange(index)}
                    onMouseEnter={() => handleHoverEnter(index)}
                    onMouseLeave={handleHoverLeave}
                    className="w-full text-left cursor-pointer group"
                  >
                    <div
                      className="relative rounded-xl px-4 py-3 transition-all duration-300"
                      style={{
                        backgroundColor: isActive ? "white" : "transparent",
                        borderLeft: isActive
                          ? `3px solid ${service.accent}`
                          : "3px solid transparent",
                        boxShadow: isActive
                          ? "0 2px 16px rgba(0,0,0,0.06)"
                          : "none",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="size-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300"
                          style={{
                            backgroundColor: isActive
                              ? `${service.accent}15`
                              : "#f3f4f6",
                          }}
                        >
                          <Icon
                            className="size-4.5 transition-colors duration-300"
                            style={{
                              color: isActive ? service.accent : "#9ca3af",
                            }}
                          />
                        </div>
                        <span
                          className="font-heading font-semibold text-sm sm:text-base transition-colors duration-300"
                          style={{
                            color: isActive ? "#111827" : "#6b7280",
                          }}
                        >
                          {service.title}
                        </span>
                      </div>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              height: { duration: 0.35, ease: "easeInOut" },
                              opacity: { duration: 0.25, delay: 0.1 },
                            }}
                            className="overflow-hidden"
                          >
                            <div className="pt-2 pl-12">
                              <p className="text-[13px] leading-relaxed text-gray-500 mb-3">
                                {service.description}
                              </p>
                              <Link
                                to={service.href}
                                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 group/link"
                                style={{ color: service.accent }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                Learn More
                                <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3 mt-6 pl-4">
              <button
                onClick={handlePrev}
                className="size-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                aria-label="Previous service"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={handleNext}
                className="size-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                aria-label="Next service"
              >
                <ChevronRight className="size-4" />
              </button>
              <span className="text-xs text-gray-400 ml-2 font-mono tabular-nums">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(services.length).padStart(2, "0")}
              </span>
            </div>
          </AnimatedSection>

          {/* Right: Visual area */}
          <AnimatedSection delay={0.2}>
            {/* Preload all service images */}
            <div className="hidden">
              {services.map((s) => (
                <img key={s.title} src={s.image} alt="" />
              ))}
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`visual-${activeIndex}`}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {/* Background image */}
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e143a]/90 via-[#362765]/40 to-[#4D397F]/20" />

                  {/* Bottom label */}
                  <motion.div
                    key={`label-${activeIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute bottom-5 left-5 right-5"
                  >
                    <div className="rounded-xl px-5 py-4 bg-black/30 backdrop-blur-md border border-white/[0.1]">
                      <p
                        className="text-[10px] font-semibold uppercase tracking-wider mb-1"
                        style={{ color: activeService.accent }}
                      >
                        Service {String(activeIndex + 1).padStart(2, "0")}
                      </p>
                      <p className="text-white font-heading font-semibold text-base sm:text-lg">
                        {activeService.title}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
