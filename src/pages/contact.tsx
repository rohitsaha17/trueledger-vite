import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Check,
  Calendar,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const services = [
  "Global Entity Setup",
  "Managed Accounting & Bookkeeping",
  "Tax Compliance & Advisory",
  "Business Advisory",
  "Support to CPAs & Accounting Firms",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "connect@trueledgerconsulting.com",
    href: "mailto:connect@trueledgerconsulting.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 96500 93059",
    href: "tel:+919650093059",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "A-42, South Extension II, NDSE 2, New Delhi – 110049\n5900 Balcones Drive, STE-100, Austin, Texas, USA – 78731",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "India (IST): 9:00 AM – 11:30 PM\nUS (EST): 9:00 AM – 2:00 PM",
  },
];

const countries = [
  "United States",
  "Canada",
  "Australia",
  "Singapore",
  "United Kingdom",
  "India",
];

/* Simplified world map SVG path (abstract outline) */
function WorldMapSVG() {
  return (
    <svg
      viewBox="0 0 1000 500"
      fill="none"
      className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Americas */}
      <path
        d="M200 100 Q210 80 230 90 Q250 70 260 95 Q280 85 285 110 Q290 130 275 150 Q270 180 260 200 Q255 220 245 240 Q240 260 230 280 Q220 300 215 320 Q210 340 220 350 Q215 360 200 350 Q190 330 185 310 Q180 290 175 270 Q170 240 175 220 Q180 200 185 180 Q190 160 195 140 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-brand"
      />
      {/* Europe */}
      <path
        d="M460 80 Q480 70 500 85 Q520 75 530 90 Q540 100 535 115 Q530 130 520 140 Q510 150 495 145 Q480 150 470 140 Q460 130 455 115 Q450 100 460 80 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-brand"
      />
      {/* Africa */}
      <path
        d="M480 170 Q500 160 510 175 Q520 190 515 210 Q510 240 500 270 Q495 290 485 300 Q475 290 470 270 Q465 250 465 230 Q465 210 470 190 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-brand"
      />
      {/* Asia */}
      <path
        d="M560 70 Q590 60 620 75 Q650 65 680 80 Q710 75 730 90 Q750 100 740 120 Q730 140 710 150 Q690 160 670 155 Q650 160 630 155 Q610 160 590 150 Q570 140 560 120 Q555 100 560 70 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-brand"
      />
      {/* Australia */}
      <path
        d="M740 300 Q760 290 780 300 Q800 295 810 310 Q815 325 805 340 Q790 350 775 345 Q760 350 750 340 Q740 330 735 315 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-brand"
      />
    </svg>
  );
}

/* Pulsing dot for map locations */
const mapDots = [
  { x: 220, y: 140 }, // US
  { x: 240, y: 110 }, // Canada
  { x: 780, y: 320 }, // Australia
  { x: 700, y: 130 }, // Singapore
  { x: 490, y: 90 },  // UK
  { x: 650, y: 140 }, // India
];

/* Form step indicator labels */
const formSteps = ["Your Info", "Details", "Message"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <>
      {/* ============================================================ */}
      {/*  SECTION 1 — HERO                                            */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-tint via-background to-background">
        {/* World map background */}
        <WorldMapSVG />

        {/* Static country dots */}
        {mapDots.map((dot, i) => (
          <div
            key={i}
            className="absolute size-2.5 rounded-full bg-brand/50 pointer-events-none"
            style={{
              left: `${(dot.x / 1000) * 100}%`,
              top: `${(dot.y / 500) * 100}%`,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div className="absolute top-20 right-[10%] w-80 h-80 bg-brand/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-[5%] w-64 h-64 bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-6 gap-1.5">
                <ChevronRight className="size-3" />
                Contact
              </Badge>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.08] mb-8 text-ink">
                Get in Touch
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
                Have a question or ready to get started? We&rsquo;d love to hear
                from you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 2 — FORM + CONTACT INFO (Asymmetric 2-col)          */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-12 lg:gap-16">
            {/* LEFT — Contact Form */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl border border-black/[0.06] shadow-lg shadow-brand/[0.03] p-6 sm:p-8">
                {/* Decorative step indicator */}
                <div className="flex items-center justify-center gap-0 mb-8">
                  {formSteps.map((step, i) => (
                    <div key={step} className="flex items-center">
                      <div className="flex items-center gap-2">
                        <div className="size-2.5 rounded-full bg-brand/30" />
                        <span className="text-xs font-medium text-muted-foreground">
                          {step}
                        </span>
                      </div>
                      {i < formSteps.length - 1 && (
                        <div className="w-10 h-px bg-brand/15 mx-3" />
                      )}
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center justify-center py-16"
                    >
                      {/* Animated checkmark */}
                      <motion.div
                        className="size-16 rounded-full bg-brand-tint flex items-center justify-center mb-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 12,
                        }}
                      >
                        <motion.div
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          <Check className="size-8 text-brand" />
                        </motion.div>
                      </motion.div>
                      <h4 className="text-lg font-semibold font-heading">
                        Thank you!
                      </h4>
                      <p className="text-muted-foreground mt-1">
                        We&rsquo;ll be in touch shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="grid gap-6"
                    >
                      {/* Group 1: Your Information */}
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-brand mb-3">
                          Your Information
                        </p>
                        <div className="grid gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="fullName">
                              Full Name{" "}
                              <span className="text-coral">*</span>
                            </Label>
                            <Input
                              id="fullName"
                              name="fullName"
                              required
                              placeholder="John Doe"
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="email">
                                Email{" "}
                                <span className="text-coral">*</span>
                              </Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="john@company.com"
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="phone">Phone</Label>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="+1 (555) 000-0000"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Group 2: Business Details */}
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-brand mb-3">
                          Business Details
                        </p>
                        <div className="grid gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="company">Company Name</Label>
                            <Input
                              id="company"
                              name="company"
                              placeholder="Acme Inc."
                            />
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="service">Service</Label>
                            <select
                              id="service"
                              name="service"
                              className="h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                            >
                              <option value="">Select a service...</option>
                              {services.map((s) => (
                                <option key={s} value={s}>
                                  {s}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Group 3: Your Message */}
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-brand mb-3">
                          Your Message
                        </p>
                        <div className="grid gap-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your requirements..."
                            rows={5}
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full mt-2 group"
                      >
                        Send Message
                        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>

            {/* RIGHT — Contact Info + CTA */}
            <AnimatedSection delay={0.15}>
              <div className="relative">
                {/* Dotted connecting line */}
                <div className="absolute left-6 top-12 bottom-12 border-l-2 border-dashed border-brand/15 pointer-events-none hidden lg:block" />

                <div className="space-y-4 relative">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="bg-white rounded-2xl border border-black/[0.06] shadow-sm p-5 sm:p-6 flex items-start gap-4 relative"
                      >
                        <div className="shrink-0 size-12 rounded-2xl bg-gradient-to-br from-brand-tint to-brand-soft flex items-center justify-center border border-brand/10">
                          <Icon className="size-5 text-brand" />
                        </div>
                        <div>
                          <p className="font-heading font-semibold text-sm text-ink mb-1">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-muted-foreground text-sm leading-relaxed hover:text-brand transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  {/* Book a Consultation card */}
                  <div className="bg-brand-dark text-white rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/[0.05] rounded-full blur-2xl" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="size-12 rounded-2xl bg-white/10 flex items-center justify-center">
                          <Calendar className="size-5 text-white" />
                        </div>
                        <div>
                          <p className="font-heading font-semibold text-sm">
                            Book a Consultation
                          </p>
                          <p className="text-white/50 text-xs">
                            Free 30-minute discovery call
                          </p>
                        </div>
                      </div>
                      <p className="text-white/60 text-sm mb-4">
                        Get clear, honest answers from our team — no commitment
                        required.
                      </p>
                      <ConsultationModal
                        trigger={
                          <Button
                            size="sm"
                            className="bg-white text-brand-dark hover:bg-white/90 w-full"
                          >
                            Schedule Now
                            <ChevronRight className="size-4" />
                          </Button>
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 3 — CLOSING CTA                                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img src="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[#140e2a]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e2a] via-transparent to-[#140e2a]/70" />
        <div className="absolute top-0 left-1/3 w-96 h-64 bg-[#4D397F]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-72 h-48 bg-[#EE672C]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="bg-white/[0.06] backdrop-blur-xl rounded-3xl border border-white/[0.10] p-10 md:p-14 text-center max-w-3xl mx-auto">
              <p className="text-[#EE672C] text-xs font-semibold uppercase tracking-widest mb-4">
                Ready to get started?
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                Let&rsquo;s build something meaningful together.
              </h2>
              <p className="text-white/45 text-sm sm:text-base max-w-lg mx-auto mb-8">
                Whether you need accounting expertise, tax advisory, or a trusted
                financial partner for the long haul&mdash;we&rsquo;re ready to
                talk.
              </p>

              {/* Country names with decorative dots */}
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mb-10">
                {countries.map((country, i) => (
                  <span key={country} className="flex items-center gap-2">
                    <span className="text-white/60 text-sm font-medium">
                      {country}
                    </span>
                    {i < countries.length - 1 && (
                      <span className="size-1.5 rounded-full bg-brand/60" />
                    )}
                  </span>
                ))}
              </div>

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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
