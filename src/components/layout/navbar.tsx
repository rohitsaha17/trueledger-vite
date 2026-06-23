import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { label: "Global Entity Setup", href: "/services/global-entity-setup" },
  { label: "Managed Accounting & Bookkeeping", href: "/services/managed-accounting-bookkeeping" },
  { label: "Tax Compliance & Advisory", href: "/services/tax-compliance-advisory" },
  { label: "Support to CPAs & Accounting Firms", href: "/services/support-to-cpas" },
  { label: "Business Advisory", href: "/services/business-advisory" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", children: serviceLinks },
  { label: "Who We Work With", href: "/who-we-work-with" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Media", href: "/media" },
  { label: "Resources", href: "/resources" },
];

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src="/logos/TrueLedger primary Logo.png"
            alt="TrueLedger Consulting"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={cn(
                    "inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer",
                    location.pathname.startsWith("/services")
                      ? "text-primary bg-secondary"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  {link.label}
                  <ChevronDown className={cn("size-3.5 transition-transform", servicesOpen && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full pt-2 w-72 z-50"
                    >
                      <div className="rounded-xl border bg-popover p-1.5 shadow-xl">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={cn(
                              "flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg transition-colors",
                              location.pathname === child.href
                                ? "bg-secondary text-primary font-medium"
                                : "text-foreground hover:bg-muted hover:text-primary"
                            )}
                          >
                            <ChevronRight className="size-3 text-brand opacity-50" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                  location.pathname === link.href
                    ? "text-primary bg-secondary"
                    : "text-foreground hover:text-primary hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ConsultationModal
              trigger={<Button size="sm">Book a Consultation</Button>}
            />
          </div>

          {/* Mobile hamburger */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>TrueLedger Consulting</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-6">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium rounded-lg hover:bg-muted transition-colors cursor-pointer"
                      >
                        {link.label}
                        <ChevronDown className={cn("size-4 transition-transform", mobileServicesOpen && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden pl-3"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                onClick={() => setSheetOpen(false)}
                                className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-muted transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setSheetOpen(false)}
                      className={cn(
                        "px-3 py-3 text-sm font-medium rounded-lg transition-colors",
                        location.pathname === link.href
                          ? "text-primary bg-secondary"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="pt-4 mt-2 border-t">
                  <ConsultationModal
                    trigger={<Button className="w-full">Book a Consultation</Button>}
                  />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
