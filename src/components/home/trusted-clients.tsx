import { useCallback, useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const clients = [
  {
    country: "Michigan, USA",
    flag: "🇺🇸",
    tag: "End-to-End Accounting",
    text: "An award-winning AI and data analytics firm serving Fortune 500 companies, with a strong footprint in the automotive industry across the US and India. TrueLedger manages their end-to-end accounting function — from bookkeeping and financial reporting to AP, AR, and payroll processing.",
  },
  {
    country: "New York, USA",
    flag: "🇺🇸",
    tag: "Full Financial Operations",
    text: "A dynamic multi-venue hospitality group operating in one of the world's most competitive restaurant and bar markets. TrueLedger handles their full financial operations — accounting, AP processing, entity formation, tax compliance, and management reporting.",
  },
  {
    country: "India",
    flag: "🇮🇳",
    tag: "Payroll & Sales Tax",
    text: "A global hospitality chain founded in India, rapidly expanding its footprint across the United States. TrueLedger supported US operations with payroll management and multi-state sales tax registrations across their property portfolio.",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    tag: "Bookkeeping & Payroll",
    text: "A Canadian real estate investment group with a reputation built on results, operating across multiple business verticals. TrueLedger provides bookkeeping, payroll processing, and financial reporting to support their growing operations.",
  },
  {
    country: "Melbourne, Australia",
    flag: "🇦🇺",
    tag: "Accounts Payable",
    text: "An innovative Australian food and beverage company behind category-leading products sold across 20,000 retail outlets nationally and exported across Asia. TrueLedger supports their accounts payable operations across their multi-location business.",
  },
];

export function TrustedClients() {
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
    <section className="py-14 md:py-20 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-tint/30 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Trusted by Multi-Jurisdictional Clients"
            description="From tech startups to hospitality groups, from FMCG giants to real estate firms — businesses across the US, Canada, Australia, and beyond trust TrueLedger to manage what matters most."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mx-auto max-w-4xl">
            <Carousel
              setApi={setApi}
              opts={{ loop: true, align: "center" }}
              plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
            >
              <CarouselContent>
                {clients.map((c, i) => (
                  <CarouselItem key={i}>
                    <Card className="border-brand/10 shadow-lg shadow-brand/5 bg-white/90 backdrop-blur-sm overflow-hidden">
                      <div className="flex flex-col sm:flex-row">
                        {/* Left accent stripe */}
                        <div className="hidden sm:block w-1.5 bg-gradient-to-b from-brand via-primary to-brand/50 shrink-0 rounded-l-xl" />
                        <CardContent className="flex flex-col sm:flex-row gap-5 pt-2 flex-1">
                          <div className="shrink-0 flex items-start">
                            <div className="size-16 rounded-2xl bg-gradient-to-br from-brand-soft to-brand-tint flex items-center justify-center text-3xl shadow-sm">
                              {c.flag}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2.5 mb-3">
                              <span className="inline-flex items-center gap-1 font-heading font-semibold text-base">
                                <MapPin className="size-3.5 text-primary" />
                                {c.country}
                              </span>
                              <Badge variant="secondary">{c.tag}</Badge>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {c.text}
                            </p>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:inline-flex" />
              <CarouselNext className="hidden md:inline-flex" />
            </Carousel>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {clients.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-border hover:bg-brand/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
