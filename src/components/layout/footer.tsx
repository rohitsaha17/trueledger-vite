import { Link } from "react-router-dom";
import { Mail, Phone, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
];

const sectorLinks = [
  { label: "AI, SaaS & Startups", href: "/sectors/ai-saas-startups" },
  { label: "Hospitality & Restaurants", href: "/sectors/hospitality-restaurants" },
  { label: "Small & Mid-Size Businesses", href: "/sectors/small-mid-size-businesses" },
  { label: "E-Commerce & Retail", href: "/sectors/ecommerce-retail" },
];

const regionLinks = [
  { label: "USA & Canada", href: "/regions/north-america" },
  { label: "United Kingdom", href: "/regions/europe-uk" },
  { label: "Australia & Singapore", href: "/regions/apac" },
];

const legalLinks = [
  { label: "Information Security Policy", href: "/information-security-policy" },
  { label: "Security & Compliance", href: "/security-compliance" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms" },
];

function SocialIcon({ d, label, href }: { d: string; label: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="size-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand/30 transition-colors">
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d={d} /></svg>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4 space-y-5">
            <span className="font-heading font-bold text-xl text-white">TrueLedger Consulting</span>
            <p className="text-white/50 text-sm leading-relaxed">
              Modern accounting & tax solutions for businesses across the globe.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="tel:+919650093059" className="flex items-center gap-2.5 hover:text-brand transition-colors">
                <Phone className="size-4 text-brand/60 shrink-0" /> +91 96500 93059
              </a>
              <a href="mailto:connect@trueledgerconsulting.com" className="flex items-center gap-2.5 hover:text-brand transition-colors">
                <Mail className="size-4 text-brand/60 shrink-0" /> connect@trueledgerconsulting.com
              </a>
              <div className="space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="text-xl leading-none mt-0.5 shrink-0">🇮🇳</span>
                  <span className="text-white/50">A-42, South Extension II, NDSE 2, New Delhi – 110049</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-xl leading-none mt-0.5 shrink-0">🇺🇸</span>
                  <span className="text-white/50">5900 Balcones Drive, STE-100, Austin, Texas, USA – 78731</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="size-4 text-brand/60 mt-0.5 shrink-0" />
                <div className="text-white/50">
                  <div>India (IST): 9:00 AM – 11:30 PM</div>
                  <div>US (EST): 9:00 AM – 2:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-white/50 hover:text-brand transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Sectors */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-white/50 hover:text-brand transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4 mt-6">Sectors</h4>
            <ul className="space-y-2.5">
              {sectorLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-white/50 hover:text-brand transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4 mt-6">Regions</h4>
            <ul className="space-y-2.5">
              {regionLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-white/50 hover:text-brand transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Subscribe */}
          <div className="lg:col-span-4">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5 mb-8">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-white/50 hover:text-brand transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-3">Subscribe to Insights</h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full bg-white/10 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-brand/40 focus-visible:border-brand/40 h-10"
              />
              <Button size="sm" className="shrink-0 rounded-full">
                <ChevronRight className="size-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold mb-6">Certifications & Partnerships</p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
            {/* ISO 27001 */}
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 80 90" className="w-12 h-14 shrink-0">
                <defs>
                  <linearGradient id="ft-iso-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1e3a5f" />
                    <stop offset="100%" stopColor="#0d2137" />
                  </linearGradient>
                </defs>
                <path d="M40 2 L76 18 V52 C76 70 40 88 40 88 C40 88 4 70 4 52 V18 Z" fill="url(#ft-iso-grad)" stroke="#4fc3f7" strokeWidth="1.5" />
                <circle cx="40" cy="36" r="14" fill="none" stroke="#4fc3f7" strokeWidth="1.5" opacity="0.5" />
                <path d="M32 36 L37 41 L48 30" fill="none" stroke="#4fc3f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="40" y="60" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui">ISO</text>
                <text x="40" y="70" textAnchor="middle" fill="#4fc3f7" fontSize="6.5" fontWeight="600" fontFamily="system-ui">27001</text>
              </svg>
              <div>
                <p className="text-sm font-semibold text-white">ISO 27001</p>
                <p className="text-xs text-white/40">Certified</p>
              </div>
            </div>

            <div className="w-px h-10 bg-white/10 hidden sm:block" />

            {/* QuickBooks ProAdvisor */}
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 80 80" className="w-12 h-12 shrink-0">
                <defs>
                  <linearGradient id="ft-qb-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2CA01C" />
                    <stop offset="100%" stopColor="#1a7a12" />
                  </linearGradient>
                </defs>
                <circle cx="40" cy="40" r="36" fill="url(#ft-qb-grad)" />
                <circle cx="40" cy="40" r="36" fill="none" stroke="#4ade80" strokeWidth="1.5" />
                <rect x="30" y="22" width="20" height="36" rx="10" fill="none" stroke="white" strokeWidth="3" />
                <rect x="24" y="30" width="14" height="20" rx="7" fill="none" stroke="white" strokeWidth="3" />
                <line x1="37" y1="30" x2="37" y2="50" stroke="white" strokeWidth="3" strokeLinecap="round" />
                <circle cx="62" cy="60" r="12" fill="#1a5a10" stroke="#4ade80" strokeWidth="1" />
                <path d="M56 60 L60 64 L68 56" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-white">QuickBooks</p>
                <p className="text-xs text-white/40">ProAdvisor</p>
              </div>
            </div>

            <div className="w-px h-10 bg-white/10 hidden sm:block" />

            {/* Digits Partner */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#1a1a2e] border border-[#6366f1]/30 flex items-center justify-center shrink-0">
                <img src="https://digits.com/favicon/favicon-256.png?v=3" alt="Digits" className="w-7 h-7 object-contain" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Digits</p>
                <p className="text-xs text-white/40">Partner</p>
              </div>
            </div>

            <div className="w-px h-10 bg-white/10 hidden sm:block" />

            {/* Gusto Partner */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#1a1a2e] border border-[#f45d48]/30 flex items-center justify-center shrink-0">
                <img src="https://gusto.com/apple-touch-icon.png" alt="Gusto" className="w-7 h-7 object-contain rounded" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Gusto</p>
                <p className="text-xs text-white/40">Partner</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <SocialIcon label="LinkedIn" href="https://www.linkedin.com/company/trueledger-consulting" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            <SocialIcon label="YouTube" href="https://www.youtube.com/@TrueledgerConsulting" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            <SocialIcon label="Facebook" href="https://www.facebook.com/Trueledger.consulting" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            <SocialIcon label="Instagram" href="https://www.instagram.com/trueledger_consulting" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 1 1-2.882 0 1.441 1.441 0 0 1 2.882 0z" />
            <SocialIcon label="X" href="https://www.x.com/Trueledger_Cnsl" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            <SocialIcon label="WhatsApp" href="https://wa.me/919650093059" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </div>
          <p className="text-xs text-white/50">&copy; 2026 TrueLedger Consulting LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
