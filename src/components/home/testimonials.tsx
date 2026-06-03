import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import {
  StaggerTestimonials,
  type TestimonialItem,
} from "@/components/ui/stagger-testimonials";

const testimonials: TestimonialItem[] = [
  {
    tempId: 0,
    testimonial:
      "TrueLedger Consulting has been outstanding to work with. Their team brings deep expertise, handles complex accounting needs with precision, and communicates proactively at every step. Highly recommended for any business looking for reliable financial support.",
    by: "Piyush Agarwal, New Delhi, India 🇮🇳",
    imgSrc: "https://i.pravatar.cc/150?img=33",
  },
  {
    tempId: 1,
    testimonial:
      "Exceptional service from the TrueLedger team. They took over our books seamlessly and the quality of financial reporting improved significantly. Their attention to detail and commitment to timelines is truly commendable.",
    by: "Unnati Choudhary, India 🇮🇳",
    imgSrc: "https://i.pravatar.cc/150?img=47",
  },
  {
    tempId: 2,
    testimonial:
      "TrueLedger manages our end-to-end accounting function — from bookkeeping and financial reporting to AP, AR, and payroll processing. Senior-level thinking, not junior execution. They've become an extension of our team.",
    by: "CPA Partner, Michigan, USA 🇺🇸",
    imgSrc: "https://i.pravatar.cc/150?img=12",
  },
  {
    tempId: 3,
    testimonial:
      "Operating in one of the world's most competitive hospitality markets, we needed a partner who could handle everything. TrueLedger delivers — accounting, AP processing, entity formation, tax compliance, and management reporting.",
    by: "Restaurant Group, New York, USA 🇺🇸",
    imgSrc: "https://i.pravatar.cc/150?img=60",
  },
  {
    tempId: 4,
    testimonial:
      "As a real estate investment group operating across multiple business verticals, we needed reliable financial support. TrueLedger provides bookkeeping, payroll processing, and financial reporting that keeps pace with our growth.",
    by: "Real Estate Group, Canada 🇨🇦",
    imgSrc: "https://i.pravatar.cc/150?img=51",
  },
  {
    tempId: 5,
    testimonial:
      "TrueLedger has been a game-changer for our firm. Their dedicated offshore team extended our capacity through busy season and beyond. The quality of tax preparation and compliance work is exceptional.",
    by: "CPA Firm Partner, Texas, USA 🇺🇸",
    imgSrc: "https://i.pravatar.cc/150?img=68",
  },
  {
    tempId: 6,
    testimonial:
      "We switched to TrueLedger for our multi-entity bookkeeping and haven't looked back. Their team handles complex intercompany reconciliations with ease. The monthly reporting is always on time and accurate.",
    by: "CFO, E-commerce Brand, Australia 🇦🇺",
    imgSrc: "https://i.pravatar.cc/150?img=26",
  },
  {
    tempId: 7,
    testimonial:
      "The depth of expertise at TrueLedger is remarkable. From entity setup across jurisdictions to ongoing tax compliance, they handle it all. It's like having a Big 4 team at a fraction of the cost.",
    by: "Founder, SaaS Startup, Singapore 🇸🇬",
    imgSrc: "https://i.pravatar.cc/150?img=14",
  },
];

export function Testimonials() {
  return (
    <section className="py-14 md:py-20 bg-brand-tint relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] bg-brand/[0.06] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] bg-primary/[0.04] pointer-events-none translate-x-1/3 translate-y-1/3" />

      {/* Large decorative quote marks */}
      <motion.div
        className="absolute top-12 left-[8%] pointer-events-none select-none hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Quote className="size-24 text-brand/[0.06] rotate-180" />
      </motion.div>
      <motion.div
        className="absolute bottom-12 right-[8%] pointer-events-none select-none hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Quote className="size-20 text-brand/[0.05]" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Client Reviews"
            description="See how businesses across the globe trust TrueLedger with their financial operations."
          />
          {/* Google rating badge */}
          <div className="flex justify-center -mt-4 mb-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 shadow-sm">
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="size-4"
              />
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="size-3.5 text-amber-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">5.0</span>
              <span className="text-xs text-muted-foreground">on Google</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <StaggerTestimonials testimonials={testimonials} />
        </AnimatedSection>
      </div>
    </section>
  );
}
