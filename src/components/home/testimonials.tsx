import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { AnimatedSection } from "@/components/shared/animated-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Review {
  text: string;
  name: string;
  role: string;
  location: string;
  flag: string;
  gradient: string;
  accentColor: string;
}

const reviews: Review[] = [
  {
    text: "TrueLedger Consulting has been outstanding to work with. Their team brings deep expertise, handles complex accounting needs with precision, and communicates proactively at every step. Highly recommended for any business looking for reliable financial support.",
    name: "Piyush Agarwal",
    role: "Founder & CEO",
    location: "New Delhi, India",
    flag: "🇮🇳",
    gradient: "from-[#4D397F] to-[#362765]",
    accentColor: "#a78bfa",
  },
  {
    text: "Exceptional service from the TrueLedger team. They took over our books seamlessly and the quality of financial reporting improved significantly. Their attention to detail and commitment to timelines is truly commendable.",
    name: "Unnati Choudhary",
    role: "Business Owner",
    location: "India",
    flag: "🇮🇳",
    gradient: "from-[#362765] to-[#1e143a]",
    accentColor: "#c4b5fd",
  },
  {
    text: "TrueLedger manages our end-to-end accounting function — from bookkeeping and financial reporting to AP, AR, and payroll processing. Senior-level thinking, not junior execution. They've become an extension of our team.",
    name: "CPA Partner",
    role: "Managing Partner",
    location: "Michigan, USA",
    flag: "🇺🇸",
    gradient: "from-[#4D397F] to-[#6B5A78]",
    accentColor: "#EE672C",
  },
  {
    text: "Operating in one of the world's most competitive hospitality markets, we needed a partner who could handle everything. TrueLedger delivers — accounting, AP processing, entity formation, tax compliance, and management reporting.",
    name: "Restaurant Group",
    role: "Multi-Venue Operator",
    location: "New York, USA",
    flag: "🇺🇸",
    gradient: "from-[#362765] to-[#4D397F]",
    accentColor: "#fbbf24",
  },
  {
    text: "As a real estate investment group operating across multiple business verticals, we needed reliable financial support. TrueLedger provides bookkeeping, payroll processing, and financial reporting that keeps pace with our growth.",
    name: "Real Estate Group",
    role: "Investment Director",
    location: "Canada",
    flag: "🇨🇦",
    gradient: "from-[#6B5A78] to-[#4D397F]",
    accentColor: "#5eead4",
  },
  {
    text: "TrueLedger has been a game-changer for our firm. Their dedicated offshore team extended our capacity through busy season and beyond. The quality of tax preparation and compliance work is exceptional.",
    name: "CPA Firm Partner",
    role: "Tax Practice Lead",
    location: "Texas, USA",
    flag: "🇺🇸",
    gradient: "from-[#4D397F] to-[#362765]",
    accentColor: "#fb923c",
  },
  {
    text: "We switched to TrueLedger for our multi-entity bookkeeping and haven't looked back. Their team handles complex intercompany reconciliations with ease. The monthly reporting is always on time and accurate.",
    name: "CFO",
    role: "E-commerce Brand",
    location: "Melbourne, Australia",
    flag: "🇦🇺",
    gradient: "from-[#362765] to-[#6B5A78]",
    accentColor: "#a78bfa",
  },
  {
    text: "The depth of expertise at TrueLedger is remarkable. From entity setup across jurisdictions to ongoing tax compliance, they handle it all. It's like having a Big 4 team at a fraction of the cost.",
    name: "Founder",
    role: "SaaS Startup",
    location: "Singapore",
    flag: "🇸🇬",
    gradient: "from-[#6B5A78] to-[#362765]",
    accentColor: "#EE672C",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="size-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className={`relative h-full rounded-3xl bg-gradient-to-br ${review.gradient} p-[1px] overflow-hidden`}
    >
      {/* Animated glow */}
      <div
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: review.accentColor }}
      />

      <div className="relative h-full rounded-3xl p-7 sm:p-8 flex flex-col" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)' }}>
        {/* Top row: stars + quote icon */}
        <div className="flex items-center justify-between mb-5">
          <Stars />
          <svg viewBox="0 0 32 32" className="size-8 opacity-20" style={{ color: review.accentColor }}>
            <path d="M6 18h6l-4 8h6l4-8V6H6v12zm14 0h6l-4 8h6l4-8V6H20v12z" fill="currentColor" />
          </svg>
        </div>

        {/* Quote text */}
        <p className="text-white/85 text-sm sm:text-[0.9375rem] leading-relaxed flex-1">
          &ldquo;{review.text}&rdquo;
        </p>

        {/* Divider */}
        <div className="mt-6 mb-5 h-px w-full" style={{ background: `linear-gradient(to right, ${review.accentColor}40, transparent)` }} />

        {/* Attribution */}
        <div className="flex items-center gap-3">
          {/* Avatar initials */}
          <div
            className="shrink-0 size-11 rounded-full flex items-center justify-center text-sm font-bold text-white"
            style={{ backgroundColor: `${review.accentColor}30`, border: `1.5px solid ${review.accentColor}50` }}
          >
            {review.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-white font-heading font-semibold text-sm truncate">
              {review.name}
            </p>
            <p className="text-white/50 text-xs truncate">
              {review.role}
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-1.5 text-white/40 text-xs">
            <span className="text-base">{review.flag}</span>
            <span className="hidden sm:inline">{review.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api, onSelect]);

  return (
    <section className="py-14 md:py-20 bg-[#140e2a] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[160px] bg-[#4D397F]/30 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full blur-[140px] bg-[#EE672C]/10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#EE672C] mb-3">
              What Our Clients Say
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold text-white leading-tight mb-4">
              Client Reviews
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm sm:text-base">
              See how businesses across the globe trust TrueLedger with their financial operations.
            </p>

            {/* Google badge */}
            <div className="flex justify-center mt-5">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="size-4" />
                <Stars />
                <span className="text-sm font-semibold text-white">5.0</span>
                <span className="text-xs text-white/50">on Google</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start" }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, i) => (
                <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <ReviewCard review={review} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:inline-flex -left-4 bg-white/10 border-white/10 text-white hover:bg-white/20 hover:text-white" />
            <CarouselNext className="hidden md:inline-flex -right-4 bg-white/10 border-white/10 text-white hover:bg-white/20 hover:text-white" />
          </Carousel>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current ? "w-8 bg-[#EE672C]" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
