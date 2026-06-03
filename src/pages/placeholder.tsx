import { useLocation, Link } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { motion } from "framer-motion";

const pageTitles: Record<string, string> = {
  "/about": "About Us",
  "/who-we-work-with": "Who We Work With",
  "/services/global-entity-setup": "Global Entity Setup",
  "/services/managed-accounting-bookkeeping": "Managed Accounting & Bookkeeping",
  "/services/tax-compliance-advisory": "Tax Compliance & Advisory",
  "/services/business-advisory": "Business Advisory",
  "/services/support-to-cpas": "Support to CPAs & Accounting Firms",
  "/contact": "Contact Us",
  "/insights": "Insights",
  "/faq": "Frequently Asked Questions",
  "/privacy-policy": "Privacy Policy",
  "/terms": "Terms and Conditions",
  "/security-compliance": "Security & Compliance",
  "/information-security-policy": "Information Security Policy",
};

export default function PlaceholderPage() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "Page";

  return (
    <section className="py-24 md:py-32">
      <div className="container-section text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-dark bg-primary-soft px-4 py-1.5 rounded-[var(--radius-pill)] mb-6">
            <ChevronRight className="w-3.5 h-3.5" />
            Coming Soon
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-ink mb-4">
            {title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
            This page is currently being built. Check back soon for the full experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <ConsultationModal />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
