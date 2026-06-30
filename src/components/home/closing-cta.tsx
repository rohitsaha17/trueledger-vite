import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { AnimatedSection } from "@/components/shared/animated-section";

export function ClosingCta() {
  return (
    <section className="py-14 md:py-20 relative overflow-hidden">
      {/* Background image */}
      <img
        src="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Color overlays */}
      <div className="absolute inset-0 bg-[#140e2a]/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#140e2a] via-transparent to-[#140e2a]/70" />

      {/* Accent glows */}
      <div className="absolute top-0 left-1/3 w-96 h-64 bg-[#4D397F]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-72 h-48 bg-[#EE672C]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection>
          <p className="text-[#EE672C] text-xs font-semibold uppercase tracking-widest mb-4">
            Ready to get started?
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Let's Build Your Financial
            <br className="hidden sm:block" />
            Foundation Together
          </h2>
          <p className="text-white/45 text-sm sm:text-base max-w-lg mx-auto mb-8">
            From startup to scale-up, from domestic to global — we're ready when you are.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          </div>

          {/* Certification badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 mt-12"
          >
            {/* ISO 27001 Badge */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <svg viewBox="0 0 80 90" className="w-16 h-[72px] sm:w-20 sm:h-[90px] drop-shadow-lg">
                  <defs>
                    <linearGradient id="iso-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1e3a5f" />
                      <stop offset="100%" stopColor="#0d2137" />
                    </linearGradient>
                    <linearGradient id="iso-check" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#4fc3f7" />
                      <stop offset="100%" stopColor="#29b6f6" />
                    </linearGradient>
                  </defs>
                  <path d="M40 2 L76 18 V52 C76 70 40 88 40 88 C40 88 4 70 4 52 V18 Z" fill="url(#iso-grad)" stroke="#4fc3f7" strokeWidth="1.5" />
                  <path d="M40 8 L70 22 V50 C70 66 40 82 40 82 C40 82 10 66 10 50 V22 Z" fill="none" stroke="#4fc3f7" strokeWidth="0.5" opacity="0.3" />
                  <circle cx="40" cy="36" r="14" fill="none" stroke="#4fc3f7" strokeWidth="1.5" opacity="0.6" />
                  <path d="M32 36 L37 41 L48 30" fill="none" stroke="url(#iso-check)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="40" y="60" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui">ISO</text>
                  <text x="40" y="70" textAnchor="middle" fill="#4fc3f7" fontSize="6.5" fontWeight="600" fontFamily="system-ui">27001</text>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-heading font-bold text-sm sm:text-base">ISO 27001</p>
                <p className="text-white/40 text-xs sm:text-sm">Certified</p>
              </div>
            </div>

            <div className="w-px h-12 bg-white/15 hidden sm:block" />

            {/* QuickBooks ProAdvisor Badge */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <svg viewBox="0 0 80 80" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg">
                  <defs>
                    <linearGradient id="qb-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#2CA01C" />
                      <stop offset="100%" stopColor="#1a7a12" />
                    </linearGradient>
                    <linearGradient id="qb-ring" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4ade80" />
                      <stop offset="100%" stopColor="#2CA01C" />
                    </linearGradient>
                  </defs>
                  <circle cx="40" cy="40" r="36" fill="url(#qb-grad)" />
                  <circle cx="40" cy="40" r="36" fill="none" stroke="url(#qb-ring)" strokeWidth="1.5" />
                  <circle cx="40" cy="40" r="30" fill="none" stroke="#4ade80" strokeWidth="0.5" opacity="0.3" />
                  <rect x="30" y="22" width="20" height="36" rx="10" fill="none" stroke="white" strokeWidth="3" />
                  <rect x="24" y="30" width="14" height="20" rx="7" fill="none" stroke="white" strokeWidth="3" />
                  <line x1="37" y1="30" x2="37" y2="50" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="62" cy="60" r="12" fill="#1a5a10" stroke="#4ade80" strokeWidth="1" />
                  <path d="M56 60 L60 64 L68 56" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-heading font-bold text-sm sm:text-base">QuickBooks</p>
                <p className="text-white/40 text-xs sm:text-sm">ProAdvisor</p>
              </div>
            </div>

            <div className="w-px h-12 bg-white/15 hidden sm:block" />

            {/* Digits Partner Badge */}
            <div className="flex items-center gap-4">
              <div className="size-14 sm:size-[4.5rem] rounded-full bg-[#1a1a2e] border border-white/10 flex items-center justify-center overflow-hidden p-2.5 drop-shadow-lg">
                <img src="https://digits.com/favicon/favicon-256.png?v=3" alt="Digits" className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                <p className="text-white font-heading font-bold text-sm sm:text-base">Digits</p>
                <p className="text-white/40 text-xs sm:text-sm">Partner</p>
              </div>
            </div>

            <div className="w-px h-12 bg-white/15 hidden sm:block" />

            {/* Gusto Partner Badge */}
            <div className="flex items-center gap-4">
              <div className="size-14 sm:size-[4.5rem] rounded-full bg-[#1a1a2e] border border-white/10 flex items-center justify-center overflow-hidden p-2.5 drop-shadow-lg">
                <img src="https://gusto.com/apple-touch-icon.png" alt="Gusto" className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                <p className="text-white font-heading font-bold text-sm sm:text-base">Gusto</p>
                <p className="text-white/40 text-xs sm:text-sm">Partner</p>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
