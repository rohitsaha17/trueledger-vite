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
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_144911_1ba7e70a-6904-48da-9b86-708584dee5c0_min.webp",
    text: "An award-winning AI and data analytics firm serving Fortune 500 companies, with a strong footprint in the automotive industry across the US and India. TrueLedger manages their end-to-end accounting function — from bookkeeping and financial reporting to AP, AR, and payroll processing.",
  },
  {
    country: "New York, USA",
    flag: "🇺🇸",
    tag: "Full Financial Operations",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_144914_fad1ab72-7b3d-4067-9ba4-1b24491d3548_min.webp",
    text: "A dynamic multi-venue hospitality group operating in one of the world's most competitive restaurant and bar markets. TrueLedger handles their full financial operations — accounting, AP processing, entity formation, tax compliance, and management reporting.",
  },
  {
    country: "India",
    flag: "🇮🇳",
    tag: "Payroll & Sales Tax",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_145030_3db197a8-a374-462b-b152-5ff2708700c5_min.webp",
    text: "A global hospitality chain founded in India, rapidly expanding its footprint across the United States. TrueLedger supported US operations with payroll management and multi-state sales tax registrations across their property portfolio.",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    tag: "Bookkeeping & Payroll",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_145017_54d2f084-689f-43ee-8df1-99b9426c335b_min.webp",
    text: "A Canadian real estate investment group with a reputation built on results, operating across multiple business verticals. TrueLedger provides bookkeeping, payroll processing, and financial reporting to support their growing operations.",
  },
  {
    country: "Melbourne, Australia",
    flag: "🇦🇺",
    tag: "Accounts Payable",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_145019_8444f3a6-836d-4a21-a01c-c2fc4256e6a5_min.webp",
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-tint/30 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Trusted by Multi-Jurisdictional Clients"
            description="From tech startups to hospitality groups — businesses across 6+ countries trust TrueLedger to manage what matters most."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mx-auto max-w-3xl">
            <Carousel
              setApi={setApi}
              opts={{ loop: true, align: "center" }}
              plugins={[Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })]}
            >
              <CarouselContent>
                {clients.map((c, i) => (
                  <CarouselItem key={i}>
                    <Card className="border-brand/10 shadow-lg shadow-brand/5 bg-white/90 backdrop-blur-sm overflow-hidden">
                      {/* Industry image */}
                      <div className="relative h-48 sm:h-56 overflow-hidden">
                        <img
                          src={c.image}
                          alt={c.tag}
                          className="w-full h-full object-cover"
                          loading={i === 0 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                        <div className="absolute bottom-3 left-4 flex items-center gap-2">
                          <span className="text-2xl">{c.flag}</span>
                          <span className="inline-flex items-center gap-1 font-heading font-semibold text-sm text-white drop-shadow-md">
                            <MapPin className="size-3.5 text-orange" />
                            {c.country}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-white/90 text-foreground backdrop-blur-sm border-0 shadow-sm">
                            {c.tag}
                          </Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="pt-5 pb-6 px-6">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {c.text}
                        </p>
                      </CardContent>
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
