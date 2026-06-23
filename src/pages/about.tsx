import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { SectionHeading } from "@/components/ui/section-heading";
// ScrollFlipTimeline removed — using static layout
import { SectionDivider } from "@/components/shared/section-divider";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Quote,
  ShieldCheck,
  Globe,
  Cpu,
  Users,
  Award,
  Building2,
  Lock,
  Wifi,
  Eye,
  Server,
  Camera,
  HardDrive,
  Printer,
  Mail,
  KeyRound,
  UserCheck,
  Rocket,
  ShoppingBag,
  UtensilsCrossed,
  Briefcase,
} from "lucide-react";

/* Inline LinkedIn icon */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ================================================================== */
/*  Leadership data                                                     */
/* ================================================================== */

const leaders = [
  {
    name: "Aseem Chawla",
    role: "Mentor and Advisor",
    bio: "Aseem Chawla is a distinguished Senior Advocate and Fellow Chartered Accountant, with over two decades of expertise in tax law, international taxation, corporate advisory, and regulatory compliance. A Harvard Kennedy School alumnus, he is consistently ranked among the top legal experts in the Asia-Pacific region. Aseem has authored several respected publications on tax policy and frequently speaks at global forums, providing invaluable guidance to the leadership at TrueLedger Consulting.",
    linkedin: "https://www.linkedin.com/in/aseem-chawla/",
    image: "/images/team/aseem-chawla.jpg",
  },
  {
    name: "CA Manish Aggarwal",
    role: "Co-Founder & Partner",
    bio: "Manish Aggarwal is a Chartered Accountant and legal professional with extensive international tax experience, specializing in cross-border taxation, transfer pricing, and global mobility. Having worked with PwC, EY, and Deloitte, Manish brings hands-on experience managing tax strategies for companies across North America, Europe, Asia, and the Middle East. He is a thought leader in tax compliance and outsourcing solutions, and actively contributes to professional publications and forums.",
    linkedin: "https://www.linkedin.com/in/camanishtax/",
    image: "/images/team/manish-aggarwal.png",
  },
  {
    name: "CA Hrithvik Raj",
    role: "Co-Founder & Partner",
    bio: "CA Hrithvik Raj is a Chartered Accountant with over 12 years of experience in global accounting, auditing, and financial advisory. He has led risk-based assurance and financial reporting for clients across the USA, France, Singapore, and Bahrain. With expertise in industries such as manufacturing, healthcare, IT, and e-commerce, Hrithvik excels in delivering accurate and scalable solutions. His strong focus on compliance, internal controls, and international standards makes him a trusted advisor for global businesses.",
    linkedin: "https://www.linkedin.com/in/hrithvik-raj-90358895/",
    image: "/images/team/hrithvik-raj.jpg",
  },
];

/* ================================================================== */
/*  Why TrueLedger data                                                 */
/* ================================================================== */

const whyCards = [
  {
    icon: Award,
    title: "Senior professionals, proven across the world's best firms",
    description:
      "Our team brings decades of hands-on experience from Big 4 firms, MNCs, and GCCs — across the US, India, Canada, Singapore, and Australia. Every engagement is led and reviewed by senior professionals who have navigated complex, high-stakes work at the highest levels.",
  },
  {
    icon: Globe,
    title: "Clients across geographies, industries, and complexities",
    description:
      "From tech startups in Silicon Valley and restaurants in New York, to NRIs managing cross-border wealth and CPA firms seeking US compliance support — we serve a diverse, global client base and understand what each one actually needs.",
  },
  {
    icon: Cpu,
    title: "Technology-first workflows, human-led advisory",
    description:
      "We use AI, automation, and modern accounting platforms to eliminate manual, repetitive work — so our professionals can focus entirely on what matters: critical review, sound judgment, and advice that protects and grows your business.",
  },
  {
    icon: Users,
    title: "A young, driven team with a client-first mindset",
    description:
      "No bureaucracy. No rigid hierarchies. Just a talented, energetic team that treats your business like their own — responsive, curious, and genuinely invested in your success.",
  },
];

/* ================================================================== */
/*  Data Security panels                                                */
/* ================================================================== */

const securityPanels = [
  {
    title: "Our Online Security",
    icon: Lock,
    items: [
      { icon: ShieldCheck, text: "Antivirus" },
      { icon: Wifi, text: "VPNs & DLP" },
      { icon: Lock, text: "Boundary Firewall & Encryption" },
      { icon: KeyRound, text: "Secure Logins & Domain Servers" },
    ],
  },
  {
    title: "On-Site Technology",
    icon: Server,
    items: [
      { icon: UserCheck, text: "Authorised personnel access only" },
      { icon: Eye, text: "Staff digital activity under surveillance" },
      { icon: ShieldCheck, text: "Protected by a high-class firewall" },
    ],
  },
  {
    title: "Offices & Staff",
    icon: Building2,
    items: [
      { icon: HardDrive, text: "No external storage devices allowed" },
      { icon: Printer, text: "Use of printers not allowed" },
      { icon: Mail, text: "Access to external mail and storage is blocked" },
      { icon: Lock, text: "Lockers provided for employees" },
      { icon: KeyRound, text: "Secure login gateway & server management" },
      { icon: Camera, text: "Premises under 24/7 CCTV surveillance" },
    ],
  },
];

/* ================================================================== */
/*  Sectors (from Who We Work With)                                     */
/* ================================================================== */

const sectors = [
  {
    icon: Building2,
    title: "Established Mid-Size Businesses",
    description:
      "Construction, real estate, medical, and professional services firms that need a financial partner able to match their operational complexity.",
    iconBg: "bg-brand-tint",
  },
  {
    icon: Rocket,
    title: "High-Growth Startups",
    description:
      "IT, AI, and SaaS companies scaling fast and in need of investor-ready financials and forward-looking insight.",
    iconBg: "bg-coral/10",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce and Retail",
    description:
      "Online and omnichannel sellers managing multi-platform revenue, inventory, and sales tax across jurisdictions.",
    iconBg: "bg-brand-soft",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants and Supermarket Chains",
    description:
      "Multi-venue hospitality and retail operators who need tight control over margins, payroll, and cash flow.",
    iconBg: "bg-brand-tint",
  },
  {
    icon: Briefcase,
    title: "CPA Firms",
    description:
      "Accounting firms looking for a dependable offshore team to extend their capacity through every season.",
    iconBg: "bg-coral/10",
  },
];

/* ================================================================== */
/*  Stats                                                               */
/* ================================================================== */

const stats = [
  { value: "XXX", label: "Clients" },
  { value: "XXX", label: "Jurisdictions" },
  { value: "XXX", label: "Business Setups" },
  { value: "XXX", label: "Software Certifications" },
];

/* ================================================================== */
/*  Story timeline markers                                              */
/* ================================================================== */

const storyBeats = [
  {
    marker: "The Spark",
    text: "Some of the best business ideas don’t start in boardrooms — they start at airports, between flights, in the kind of honest conversation that only happens when two people have nowhere else to be. That’s exactly how TrueLedger Consulting was born.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    marker: "The Experience",
    text: "Our founders had spent years working with global companies — navigating multi-jurisdictional compliance, tax controversy and disputes, managing cross-border accounting complexities, and building financial operations across some of the world’s most demanding markets.",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260602_114125_37c4434f-726d-4bb3-b527-dad9f6221ffb.png",
  },
  {
    marker: "The Gap",
    text: "They believe there is currently a lack of true business partners — partners businesses can rely upon not just for back-office or operational work, but who can be trusted as genuine advisors with knowledge of multi-jurisdiction accounting and tax regulatory frameworks.",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260602_114128_25fe50fd-53c5-4d9f-8e84-40a218f26e64.png",
  },
  {
    marker: "The Insight",
    text: "They had seen what separated businesses that scaled smoothly from those that struggled: the quality of the expertise behind them. And yet, the market kept repeating the same mistake — businesses were hiring accountants when what they really needed were expert financial professionals who understood business, not just books.",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260602_114830_d7020677-9647-4a01-88c5-19228771fe32.png",
  },
  {
    marker: "The Conviction",
    text: "That 20-minute conversation became a conviction: the world’s talent shortage in accounting and finance is real, but so is the solution. India is home to a deep, highly qualified pool of finance professionals — CPAs, chartered accountants, tax specialists, and compliance experts — whose talent remains largely untapped by the businesses that need them most. The opportunity was clear. The timing was right. TrueLedger was born.",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260602_114132_37c24fa6-a971-4b27-8709-6c082494275a.png",
  },
];

/* ================================================================== */
/*  Main Page Component                                                 */
/* ================================================================== */

export default function AboutPage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  SECTION 1 — HERO                                            */}
      {/* ============================================================ */}
      <section className="bg-background">
        {/* Video container — flush to navbar, no side padding on mobile */}
        <div className="px-0 md:px-2 lg:px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden aspect-[1/1] sm:aspect-[16/9] md:aspect-[2.4/1] rounded-b-2xl md:rounded-b-3xl"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/about-hero-seedance.mp4" type="video/mp4" />
            </video>

            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/30" />

            {/* "About Us" overlay text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
                style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
              >
                About Us
              </motion.h1>
            </div>
          </motion.div>
        </div>

      </section>

      {/* ============================================================ */}
      {/*  SECTION 2 — THE STORY                                        */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-ink leading-[1.15] mb-3">
                The TrueLedger Story
              </h2>
              <p className="text-base sm:text-lg text-brand font-medium leading-snug max-w-lg mx-auto">
                A 20-Minute Conversation That Changed Everything.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-16 md:space-y-20 max-w-5xl mx-auto">
            {storyBeats.map((beat, i) => (
              <AnimatedSection key={beat.marker} delay={0.1}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center`}>
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-black/[0.06]">
                      <img
                        src={beat.image}
                        alt={beat.marker}
                        className="w-full aspect-[4/3] object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="size-8 rounded-full bg-brand text-white flex items-center justify-center text-xs font-bold font-heading shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-brand font-bold uppercase tracking-wider text-sm">
                        {beat.marker}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {beat.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Pull quote */}
          <AnimatedSection delay={0.15}>
            <div className="max-w-3xl mx-auto mt-16 md:mt-20 relative">
              <div className="absolute -top-6 -left-2 sm:-left-6">
                <Quote className="size-12 sm:size-16 text-brand/10" />
              </div>
              <div className="relative rounded-2xl bg-brand-tint border border-brand/10 p-8 sm:p-10 md:p-12">
                <h3 className="font-heading text-2xl sm:text-3xl md:text-[2rem] font-bold text-ink leading-tight mb-4">
                  Long-term partnerships, not transactions.
                </h3>
                <blockquote>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed italic">
                    &ldquo;We measure our success by your growth. We don&rsquo;t
                    chase volume &mdash; we build relationships. Our goal is to be
                    the team you rely on as your business scales, not a vendor you
                    replace every year.&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 3 — OUR LEADERSHIP                                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="The People Behind TrueLedger"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leaders.map((leader, i) => (
              <AnimatedSection key={leader.name} delay={0.1 + i * 0.1}>
                <div className="bg-white rounded-2xl border border-black/[0.06] shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                  {/* Photo — fixed aspect ratio, no crop */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-brand-soft via-brand-tint to-brand/10 relative flex items-center justify-center p-4">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-heading font-bold text-lg text-ink leading-snug">
                          {leader.name}
                        </h3>
                        <p className="text-sm font-medium text-brand mt-0.5">
                          {leader.role}
                        </p>
                      </div>
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 size-9 rounded-lg bg-brand-tint flex items-center justify-center border border-brand/10 hover:bg-brand/10 transition-colors"
                      >
                        <LinkedInIcon className="size-4 text-brand" />
                      </a>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 5 — WHY TRUELEDGER                                   */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-brand-tint/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Why Trueledger"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-10 md:gap-14 relative">
              {/* Decorative glow */}
              <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-brand/[0.06]" />

              {/* Image — height driven by the pointers column */}
              <div className="md:w-[40%] shrink-0 rounded-2xl shadow-lg border border-brand/10 overflow-hidden relative min-h-[300px]">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=830&h=844&auto=format&fit=crop"
                  alt="TrueLedger team collaboration"
                />
              </div>

              {/* Feature list */}
              <div className="flex-1 flex items-center">
                <div className="flex flex-col gap-8 w-full">
                  {whyCards.map((card, i) => {
                    const Icon = card.icon;
                    return (
                      <AnimatedSection key={card.title} delay={0.15 + i * 0.08}>
                        <div className="flex items-start gap-4">
                          <div className="size-10 shrink-0 p-2 bg-brand-tint border border-brand/15 rounded-xl flex items-center justify-center">
                            <Icon className="size-5 text-brand" />
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-ink">
                              {card.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </AnimatedSection>
                    );
                  })}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 6 — WHO WE WORK WITH (Sectors)                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Who We Work With"
              description="We bring depth, not breadth. These are the sectors where our expertise creates the most value."
            />
          </AnimatedSection>

          <div
            className="max-w-6xl mx-auto grid gap-5"
            style={{
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "auto auto",
            }}
          >
            {sectors.map((sector, i) => {
              const Icon = sector.icon;
              const num = String(i + 1).padStart(2, "0");

              const layoutClass =
                i === 0
                  ? "col-span-3 md:col-span-2 md:row-span-2"
                  : i === 3
                    ? "col-span-3 md:col-span-2"
                    : "col-span-3 md:col-span-1";

              const isFeatured = i === 0;
              const isHorizontal = i === 3;

              const directions = [
                { x: -40, y: 0 },
                { x: 40, y: 0 },
                { x: -40, y: 0 },
                { x: 0, y: 40 },
                { x: 40, y: 0 },
              ];
              const dir = directions[i];

              return (
                <motion.div
                  key={sector.title}
                  className={layoutClass}
                  initial={{ opacity: 0, x: dir.x, y: dir.y }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.1 + i * 0.08,
                  }}
                >
                  <motion.div
                    className={`relative bg-white rounded-2xl border border-black/[0.06] shadow-sm p-6 sm:p-8 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand/20 ${
                      isHorizontal
                        ? "flex flex-col sm:flex-row sm:items-center gap-5"
                        : ""
                    } ${isFeatured ? "overflow-hidden" : ""}`}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {isFeatured && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand via-brand-dark to-brand rounded-l-2xl" />
                    )}
                    {isFeatured && (
                      <div
                        className="absolute inset-0 opacity-[0.03] rounded-2xl pointer-events-none"
                        style={{
                          backgroundImage: `
                            radial-gradient(at 20% 30%, var(--color-brand) 0%, transparent 50%),
                            radial-gradient(at 80% 70%, var(--color-brand-dark) 0%, transparent 50%),
                            radial-gradient(at 50% 50%, var(--color-coral) 0%, transparent 50%)
                          `,
                        }}
                      />
                    )}
                    <span className="absolute top-4 right-5 font-heading text-4xl font-bold text-brand/[0.06] leading-none select-none pointer-events-none">
                      {num}
                    </span>
                    <div
                      className={`shrink-0 size-12 rounded-xl ${sector.iconBg} flex items-center justify-center border border-brand/10 ${
                        isHorizontal ? "" : "mb-5"
                      }`}
                    >
                      <Icon className="size-6 text-brand" />
                    </div>
                    <div className={isHorizontal ? "flex-1 min-w-0" : ""}>
                      <h3 className="font-heading font-semibold text-base sm:text-lg text-ink leading-snug mb-3">
                        {sector.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {sector.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 7 — BEYOND SECTORS                                    */}
      {/* ============================================================ */}
      <SectionDivider variant="wave" />

      <section className="py-20 md:py-28 bg-brand-tint/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading title="Beyond These Sectors" />
          </AnimatedSection>

          <div className="relative max-w-3xl mx-auto">
            <svg
              className="absolute -top-4 -left-8 md:-left-16 w-[120px] h-[120px] text-brand/10 pointer-events-none select-none"
              viewBox="0 0 120 120"
              fill="currentColor"
            >
              <text x="0" y="100" fontSize="160" fontFamily="Georgia, serif" fontWeight="bold">
                &ldquo;
              </text>
            </svg>

            <div className="relative space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
              <motion.p
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                While these sectors represent our deepest expertise, the
                businesses we work with share something more fundamental than an
                industry label. They value accuracy. They expect responsiveness.
                And they understand that a true financial partner is not a
                commodity &mdash; it&rsquo;s a relationship.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                If your business is growing, if the financial complexity is
                increasing, and if you need a team that can keep up without
                cutting corners &mdash; we are likely a good fit. We have worked
                with businesses outside these sectors and will continue to do
                so, as long as the alignment is right.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                What matters most to us is not the label on your industry, but
                the standards you hold yourself to. We choose to work with
                businesses that take their finances seriously &mdash; because
                that&rsquo;s the only kind of work we know how to do well.
              </motion.p>

              <motion.p
                className="italic text-ink font-medium pt-2 text-lg border-l-4 border-brand pl-6 text-left"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Trust is not a claim. It is a track record. We are here to build
                one with you.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 8 — DATA SECURITY                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_203624_f982825f-72b5-42d9-acac-210e86af9acb_min.webp"
            alt=""
            className="w-full h-full object-cover opacity-[0.08]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <SectionHeading
              title="Built on Trust. Secured by Design."
              description="TrueLedger provides top-notch IT defenses created to guard against data breaches. We follow the ISO 27001:2012 (ISMS) framework for data security management, and use CCPA-compliant services such as Box and AWS for software and data transfers."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {securityPanels.map((panel, i) => {
              const PanelIcon = panel.icon;
              return (
                <AnimatedSection key={panel.title} delay={0.1 + i * 0.1}>
                  <div className="bg-white rounded-2xl border border-black/[0.06] shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 h-full">
                    {/* Panel header */}
                    <div className="bg-gradient-to-r from-brand-tint to-brand-soft p-5 border-b border-brand/10">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-xl bg-white/80 flex items-center justify-center">
                          <PanelIcon className="size-5 text-brand" />
                        </div>
                        <h3 className="font-heading font-semibold text-base text-ink">
                          {panel.title}
                        </h3>
                      </div>
                    </div>

                    {/* Checklist items */}
                    <div className="p-5 space-y-3.5">
                      {panel.items.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <div
                            key={item.text}
                            className="flex items-start gap-3"
                          >
                            <div className="shrink-0 size-7 rounded-lg bg-brand-tint/60 flex items-center justify-center mt-0.5">
                              <ItemIcon className="size-3.5 text-brand" />
                            </div>
                            <p className="text-sm text-ink leading-relaxed">
                              {item.text}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 7 — KEY STATS & CERTIFICATIONS                       */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 bg-brand-dark relative overflow-hidden">
        {/* Static background orbs */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-brand/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={0.1 + i * 0.1}>
                <div className="text-center">
                  <p className="font-heading text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5}>
            <p className="text-white/50 text-xs text-center mt-6 italic">
              * Placeholder values &mdash; update with actual figures
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 8 — OUR TEAM                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Our Young Team"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-black/[0.06]">
                <img
                  src="/images/team/team-group.jpg"
                  alt="The TrueLedger team"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 9 — CLOSING CTA                                      */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background image */}
        <img
          src="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#140e2a]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e2a] via-transparent to-[#140e2a]/70" />

        {/* Accent glows */}
        <div className="absolute top-0 left-1/3 w-96 h-64 bg-[#4D397F]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-72 h-48 bg-[#EE672C]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <p className="text-[#EE672C] text-xs font-semibold uppercase tracking-widest mb-4">
              Ready to get started?
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight max-w-3xl mx-auto">
              Let&rsquo;s build something meaningful together.
            </h2>
            <p className="text-white/45 text-sm sm:text-base max-w-lg mx-auto mb-10">
              Whether you need accounting expertise, tax advisory, or a trusted
              financial partner for the long haul &mdash; we&rsquo;re ready to
              talk.
            </p>
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
