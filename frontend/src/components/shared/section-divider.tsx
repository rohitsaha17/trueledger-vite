import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "wave" | "gradient" | "dots";
  flip?: boolean;
  className?: string;
}

export function SectionDivider({
  variant = "gradient",
  flip = false,
  className = "",
}: SectionDividerProps) {
  if (variant === "dots") {
    return (
      <div className={`flex justify-center py-4 ${className}`}>
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="size-1.5 rounded-full bg-brand/20"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
            />
          ))}
          <motion.div
            className="h-px w-16 bg-gradient-to-r from-brand/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className={`relative h-16 overflow-hidden ${flip ? "rotate-180" : ""} ${className}`}>
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <path
            d="M0 32C240 0 480 64 720 32C960 0 1200 64 1440 32V64H0V32Z"
            fill="currentColor"
            className="text-brand-tint/50"
          />
        </svg>
      </div>
    );
  }

  // gradient variant
  return (
    <div className={`h-px mx-auto max-w-5xl ${className}`}>
      <div className="h-full bg-gradient-to-r from-transparent via-brand/15 to-transparent" />
    </div>
  );
}
