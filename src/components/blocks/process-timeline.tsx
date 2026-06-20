import * as React from "react"
import { useMeasure } from "@uidotdev/usehooks"
import { cva } from "class-variance-authority"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/*  Card variant styles                                                 */
/* ------------------------------------------------------------------ */

const processCardVariants = cva("flex border", {
  variants: {
    variant: {
      indigo:
        "flex border text-slate-50 border-slate-700 backdrop-blur-lg bg-gradient-to-br from-[rgba(15,23,42,0.7)_40%] to-[#3730a3_120%]",
      brand:
        "text-white border-white/[0.08] backdrop-blur-xl bg-gradient-to-br from-[rgba(36,24,80,0.9)_30%] via-[rgba(54,39,101,0.5)_60%] to-[rgba(77,57,127,0.25)_110%]",
      solid:
        "text-white border-[#362765]/40 bg-[#140e2a]",
      light: "shadow",
    },
    size: {
      sm: "min-w-[25%] max-w-[25%]",
      md: "min-w-[50%] max-w-[50%]",
      lg: "min-w-[75%] max-w-[75%]",
      xl: "min-w-full max-w-full",
    },
  },
  defaultVariants: {
    variant: "indigo",
    size: "md",
  },
})

/* ------------------------------------------------------------------ */
/*  Scroll context                                                      */
/* ------------------------------------------------------------------ */

const ContainerScrollContext = React.createContext<
  { scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"] } | undefined
>(undefined)

function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext)
  if (!context) {
    throw new Error(
      "useContainerScrollContext must be used within a ContainerScroll Component"
    )
  }
  return context
}

/* ------------------------------------------------------------------ */
/*  Container components                                                */
/* ------------------------------------------------------------------ */

export const ContainerScroll = ({
  children,
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: scrollRef })
  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={cn("relative min-h-[120vh]", className)}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  )
}

export const ContainerSticky = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("sticky left-0 top-0 w-full overflow-hidden", className)}
    {...props}
  />
))
ContainerSticky.displayName = "ContainerSticky"

/* ------------------------------------------------------------------ */
/*  Card sub-components                                                 */
/* ------------------------------------------------------------------ */

export const ProcessCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
))
ProcessCardTitle.displayName = "ProcessCardTitle"

export const ProcessCardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-8 p-6", className)}
    {...props}
  />
))
ProcessCardBody.displayName = "ProcessCardBody"

/* ------------------------------------------------------------------ */
/*  Process Card (scroll-driven horizontal reveal)                      */
/* ------------------------------------------------------------------ */

interface ProcessCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onDragOver" | "onAnimationStart"> {
  variant?: "indigo" | "brand" | "solid" | "light"
  size?: "sm" | "md" | "lg" | "xl"
  itemsLength: number
  index: number
}

export const ProcessCard: React.FC<ProcessCardProps> = ({
  className,
  style,
  variant,
  size,
  itemsLength,
  index,
  ...props
}) => {
  const { scrollYProgress } = useContainerScrollContext()
  const start = index / itemsLength
  const end = start + 1 / itemsLength
  const { innerWidth } = window
  const [ref, { width }] = useMeasure()

  const x = useTransform(
    scrollYProgress,
    [start, end],
    [innerWidth, -((width ?? 0) * index) + 64 * index]
  )
  return (
    <motion.div
      ref={ref}
      style={{
        x: index > 0 ? x : 0,
        ...style,
      }}
      className={cn(processCardVariants({ variant, size }), className)}
      {...props}
    />
  )
}
ProcessCard.displayName = "ProcessCard"
