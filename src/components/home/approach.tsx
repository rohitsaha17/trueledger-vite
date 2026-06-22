import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";

const cards = [
  {
    title: "Deep Expertise, Personal Commitment",
    description:
      "We bring years of experience across global markets and complex business structures — applied personally to every client we work with. You get senior-level thinking, not junior execution.",
    gradient: "from-brand/20 via-brand-soft to-brand-tint",
    iconBg: "bg-brand/15",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_165821_ae8f5541-03f3-450c-b62a-d7740b512d10_min.webp",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="size-7">
        <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M10 40c0-7.732 6.268-14 14-14s14 6.268 14 14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M34 12l4-4m0 0l4 4m-4-4v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Responsive and Reliable Communication",
    description:
      "No chasing, no waiting, no surprises. You'll always have a dedicated point of contact who knows your business inside out and stays ahead of what it needs next.",
    gradient: "from-primary/15 via-brand-soft to-brand-tint",
    iconBg: "bg-primary/10",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_165822_01a41f97-2fe8-412f-a494-bf7fe4ec6f12_min.webp",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="size-7">
        <rect
          x="4"
          y="10"
          width="28"
          height="20"
          rx="4"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M14 36l4-6h20a4 4 0 004-4V16"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="14" cy="20" r="2" fill="currentColor" />
        <circle cx="22" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Grows As Your Business Grows",
    description:
      "From startup to scale-up, from domestic to global — our advisory evolves with you. The more your business demands, the more we bring to the table.",
    gradient: "from-coral/15 via-brand-soft/40 to-brand-tint",
    iconBg: "bg-coral/10",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_165825_b8c21a16-bb17-4825-b26d-3026f283e654_min.webp",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="size-7">
        <path
          d="M8 36L18 22l8 8 14-18"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 12h10v10"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Accurate Financials. Delivered On Time.",
    description:
      "Your financials are only valuable if they're right and ready when you need them. We operate on disciplined timelines and rigorous review standards.",
    gradient: "from-brand-dark/10 via-brand-soft to-brand-tint",
    iconBg: "bg-brand-dark/10",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_165826_ac572644-f557-4a5c-989f-6df5b060ab68_min.webp",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="size-7">
        <rect
          x="8"
          y="6"
          width="32"
          height="36"
          rx="4"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M16 18h16M16 26h12M16 34h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M32 28l-6 6-3-3"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function Approach() {
  return (
    <section className="py-10 md:py-14 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160951_87d38f12-9f15-45af-840f-a14eb5b250ef_min.webp"
          alt=""
          className="w-full h-full object-cover opacity-[0.05]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Soft gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] bg-brand/[0.04] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] bg-primary/[0.03] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="The Advisor You Trust From Day One"
            description="Great businesses aren't built on luck — they're built on the right guidance at the right time."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <Card className="group cursor-pointer h-full overflow-hidden border-border/50 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 bg-white relative">
                  {/* Background image at low opacity */}
                  <img
                    src={card.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none"
                    loading="lazy"
                  />

                  <CardContent className="relative z-10 p-5">
                    <div
                      className={`size-10 rounded-lg ${card.iconBg} flex items-center justify-center mb-3 text-primary group-hover:scale-110 transition-transform duration-300`}
                    >
                      {card.icon}
                    </div>

                    <h3 className="font-heading font-bold text-base mb-2">
                      {card.title}
                    </h3>

                    <p className="text-muted-foreground text-[13px] leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>

                  <div
                    className={`h-0.5 w-full bg-gradient-to-r ${card.gradient} rounded-b-xl`}
                  />
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
