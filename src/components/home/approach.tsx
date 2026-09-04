import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";

const cards = [
  {
    title: "Deep Expertise, Personal Commitment",
    description:
      "We bring years of experience across global markets and complex business structures — applied personally to every client we work with. You get senior-level thinking, not junior execution.",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_165821_ae8f5541-03f3-450c-b62a-d7740b512d10_min.webp",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="size-6">
        <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
        <path
          d="M10 40c0-7.732 6.268-14 14-14s14 6.268 14 14"
          stroke="currentColor"
          strokeWidth="2"
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
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_165822_01a41f97-2fe8-412f-a494-bf7fe4ec6f12_min.webp",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="size-6">
        <rect
          x="4"
          y="10"
          width="28"
          height="20"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M14 36l4-6h20a4 4 0 004-4V16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="14" cy="20" r="1.75" fill="currentColor" />
        <circle cx="22" cy="20" r="1.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Grows As Your Business Grows",
    description:
      "From startup to scale-up, from domestic to global — our advisory evolves with you. The more your business demands, the more we bring to the table.",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_165825_b8c21a16-bb17-4825-b26d-3026f283e654_min.webp",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="size-6">
        <path
          d="M8 36L18 22l8 8 14-18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 12h10v10"
          stroke="currentColor"
          strokeWidth="2"
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
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_165826_ac572644-f557-4a5c-989f-6df5b060ab68_min.webp",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="size-6">
        <rect
          x="8"
          y="6"
          width="32"
          height="36"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 18h16M16 26h12M16 34h8"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M32 28l-6 6-3-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function Approach() {
  return (
    <section className="py-14 md:py-18 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160951_87d38f12-9f15-45af-840f-a14eb5b250ef_min.webp"
          alt=""
          className="w-full h-full object-cover opacity-[0.22]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/70" />
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.1}>
              <motion.div
                className="group relative h-full overflow-hidden rounded-2xl border border-black/[0.07] bg-white p-6 shadow-[0_1px_2px_rgba(20,14,42,0.04)] transition-[border-color,box-shadow] duration-500 ease-out hover:border-brand/25 hover:shadow-[0_20px_44px_-16px_rgba(77,57,127,0.22)] sm:p-7"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Background image at low opacity */}
                <img
                  src={card.image}
                  alt=""
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.20] transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-[0.32]"
                  loading="lazy"
                />

                {/* Accent rail — wipes up from the bottom edge */}
                <span className="pointer-events-none absolute inset-y-0 left-0 w-[2px] origin-bottom scale-y-0 bg-gradient-to-t from-brand via-brand/70 to-coral transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-y-100" />

                {/* Soft wash that breathes in behind the corner */}
                <span className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-brand/[0.07] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative z-10 flex items-start gap-5">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-lg shadow-brand/25 transition-transform duration-500 ease-out group-hover:scale-105">
                    {card.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="mb-2.5 font-heading text-[1.05rem] font-bold leading-snug text-ink transition-transform duration-500 ease-out group-hover:translate-x-0.5 sm:text-[1.15rem]">
                      {card.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
