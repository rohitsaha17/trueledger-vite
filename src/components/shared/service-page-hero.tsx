import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  Staggered reveal variants                                           */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const fadeUpSlow = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

interface ServicePageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string | React.ReactNode;
  imageSrc: string;
  videoSrc?: string;
  overlayGradient?: string;
  accentColor?: string;
}

export function ServicePageHero({
  eyebrow: _eyebrow,
  title,
  description,
  imageSrc,
  videoSrc,
  overlayGradient,
  accentColor = "#EE672C",
}: ServicePageHeroProps) {
  return (
    <section className="pt-6 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[420px] md:min-h-[500px] flex items-center">
          {/* Background media */}
          {videoSrc ? (
            <motion.video
              autoPlay
              muted
              loop
              playsInline
              poster={imageSrc}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <source src={videoSrc} type="video/mp4" />
            </motion.video>
          ) : (
            <motion.img
              src={imageSrc}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            />
          )}

          {/* Primary gradient overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                overlayGradient ||
                "linear-gradient(to right, rgba(20,14,42,0.82) 0%, rgba(20,14,42,0.68) 40%, rgba(20,14,42,0.4) 70%, rgba(20,14,42,0.18) 100%)",
            }}
          />

          {/* Secondary even darkening for guaranteed readability */}
          <div className="absolute inset-0 bg-brand-dark/15" />

          {/* Grid dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Accent glow */}
          <motion.div
            className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{ backgroundColor: accentColor }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />

          {/* Content — staggered reveal */}
          <motion.div
            className="relative z-10 p-8 md:p-12 lg:p-16 max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="font-heading text-3xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.1] mb-6 text-white"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.div
              variants={fadeUpSlow}
              className="text-base text-white/60 leading-relaxed max-w-xl mb-8 space-y-4"
            >
              {typeof description === "string" ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUpSlow}>
              <ConsultationModal
                trigger={
                  <Button
                    size="lg"
                    className="bg-white text-brand-dark hover:bg-white/90 shadow-lg shadow-black/20 text-sm px-7 h-12 rounded-full"
                  >
                    Book a Consultation
                    <ChevronRight className="size-4" />
                  </Button>
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
