import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, BookOpen } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { BlogPost } from "@/types/database";

/* ------------------------------------------------------------------ */
/*  Static seed data                                                   */
/* ------------------------------------------------------------------ */

interface Resource extends BlogPost {
  service: string;
}

const staticResources: Resource[] = [
  {
    id: "r1",
    title: "The Complete Guide to Outsourced Accounting in 2026",
    slug: "guide-outsourced-accounting-2026",
    category: "Guide",
    service: "Accounting & Bookkeeping",
    excerpt:
      "Everything you need to know about outsourcing your accounting function — from evaluating providers to managing the transition and measuring ROI.",
    author: "TrueLedger Editorial",
    created_at: "2026-06-15T00:00:00Z",
    updated_at: "2026-06-15T00:00:00Z",
    content: "",
    featured_image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    published: true,
  },
  {
    id: "r2",
    title: "US Tax Filing Deadlines: A 2026 Calendar for Businesses",
    slug: "us-tax-filing-deadlines-2026",
    category: "Tax Update",
    service: "Tax Compliance",
    excerpt:
      "A comprehensive calendar of federal and state tax filing deadlines for businesses, including extensions, estimated payments, and information returns.",
    author: "TrueLedger Tax Team",
    created_at: "2026-06-10T00:00:00Z",
    updated_at: "2026-06-10T00:00:00Z",
    content: "",
    featured_image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    published: true,
  },
  {
    id: "r3",
    title: "Choosing the Right Business Structure for Your US Expansion",
    slug: "business-structure-us-expansion",
    category: "Guide",
    service: "Entity Setup",
    excerpt:
      "LLC vs C-Corp vs S-Corp: understand the tax implications, liability protection, and operational flexibility of each structure before incorporating in the US.",
    author: "TrueLedger Advisory",
    created_at: "2026-06-05T00:00:00Z",
    updated_at: "2026-06-05T00:00:00Z",
    content: "",
    featured_image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    published: true,
  },
  {
    id: "r4",
    title: "5 Financial KPIs Every Startup Should Track",
    slug: "startup-financial-kpis",
    category: "Article",
    service: "Business Advisory",
    excerpt:
      "From burn rate to LTV:CAC ratio — the essential financial metrics that investors look for and founders should monitor monthly.",
    author: "TrueLedger Advisory",
    created_at: "2026-05-28T00:00:00Z",
    updated_at: "2026-05-28T00:00:00Z",
    content: "",
    featured_image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    published: true,
  },
  {
    id: "r5",
    title: "How CPA Firms Are Using Offshore Teams to Scale Profitably",
    slug: "cpa-firms-offshore-scaling",
    category: "Whitepaper",
    service: "CPA Support",
    excerpt:
      "A detailed look at how mid-size CPA firms are building offshore capacity — including case studies, cost analysis, and best practices for quality control.",
    author: "TrueLedger Editorial",
    created_at: "2026-05-20T00:00:00Z",
    updated_at: "2026-05-20T00:00:00Z",
    content: "",
    featured_image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    published: true,
  },
  {
    id: "r6",
    title: "Month-End Close Checklist for Growing Businesses",
    slug: "month-end-close-checklist",
    category: "Guide",
    service: "Accounting & Bookkeeping",
    excerpt:
      "A step-by-step month-end close checklist covering reconciliations, accruals, reviews, and reporting — designed to help your team close books in under 7 days.",
    author: "TrueLedger Operations",
    created_at: "2026-05-15T00:00:00Z",
    updated_at: "2026-05-15T00:00:00Z",
    content: "",
    featured_image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    published: true,
  },
  {
    id: "r7",
    title: "Sales Tax Nexus: What E-Commerce Sellers Need to Know",
    slug: "sales-tax-nexus-ecommerce",
    category: "Article",
    service: "Tax Compliance",
    excerpt:
      "Post-Wayfair, economic nexus rules have changed everything for online sellers. Here's how to determine where you have nexus and what to do about it.",
    author: "TrueLedger Tax Team",
    created_at: "2026-05-10T00:00:00Z",
    updated_at: "2026-05-10T00:00:00Z",
    content: "",
    featured_image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    published: true,
  },
  {
    id: "r8",
    title: "Setting Up a Singapore Subsidiary: A Step-by-Step Guide",
    slug: "singapore-subsidiary-guide",
    category: "Guide",
    service: "Entity Setup",
    excerpt:
      "Everything from ACRA registration to corporate secretary requirements, employment passes, and banking — a comprehensive guide for companies expanding to Singapore.",
    author: "TrueLedger Advisory",
    created_at: "2026-05-05T00:00:00Z",
    updated_at: "2026-05-05T00:00:00Z",
    content: "",
    featured_image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    published: true,
  },
  {
    id: "r9",
    title: "The CFO's Guide to Cash Flow Forecasting",
    slug: "cfo-cash-flow-forecasting",
    category: "Whitepaper",
    service: "Business Advisory",
    excerpt:
      "Advanced cash flow forecasting techniques for finance leaders — from 13-week models to scenario planning and rolling forecasts that drive better decisions.",
    author: "TrueLedger Advisory",
    created_at: "2026-04-28T00:00:00Z",
    updated_at: "2026-04-28T00:00:00Z",
    content: "",
    featured_image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    published: true,
  },
  {
    id: "r10",
    title: "2026 Tax Law Changes: Impact on Small Businesses",
    slug: "2026-tax-law-changes-small-business",
    category: "Tax Update",
    service: "Tax Compliance",
    excerpt:
      "Key tax law changes taking effect in 2026 that affect small businesses — including TCJA expirations, new reporting requirements, and planning opportunities.",
    author: "TrueLedger Tax Team",
    created_at: "2026-04-20T00:00:00Z",
    updated_at: "2026-04-20T00:00:00Z",
    content: "",
    featured_image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    published: true,
  },
  {
    id: "r11",
    title: "How to Evaluate an Outsourced Accounting Provider",
    slug: "evaluate-outsourced-accounting-provider",
    category: "Article",
    service: "Accounting & Bookkeeping",
    excerpt:
      "A practical framework for evaluating outsourced accounting providers — covering security, expertise, technology, communication, and pricing models.",
    author: "TrueLedger Editorial",
    created_at: "2026-04-15T00:00:00Z",
    updated_at: "2026-04-15T00:00:00Z",
    content: "",
    featured_image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    published: true,
  },
  {
    id: "r12",
    title: "Building a Tax Season Playbook for Your CPA Firm",
    slug: "tax-season-playbook-cpa",
    category: "Industry Insight",
    service: "CPA Support",
    excerpt:
      "Proven strategies for managing tax season workflow — from capacity planning and milestone tracking to quality review processes and client communication templates.",
    author: "TrueLedger Editorial",
    created_at: "2026-04-10T00:00:00Z",
    updated_at: "2026-04-10T00:00:00Z",
    content: "",
    featured_image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    published: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Filter options                                                     */
/* ------------------------------------------------------------------ */

const contentTypes = [
  "All",
  "Article",
  "Guide",
  "Whitepaper",
  "Industry Insight",
  "Tax Update",
] as const;

const serviceTypes = [
  "All Services",
  "Accounting & Bookkeeping",
  "Tax Compliance",
  "Entity Setup",
  "Business Advisory",
  "CPA Support",
] as const;

type ContentType = (typeof contentTypes)[number];
type ServiceType = (typeof serviceTypes)[number];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ResourcesPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeContent, setActiveContent] = useState<ContentType>("All");
  const [activeService, setActiveService] = useState<ServiceType>("All Services");

  /* Fetch from Supabase */
  useEffect(() => {
    supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setPosts(data ?? []);
        setLoading(false);
      });
  }, []);

  /* Merge Supabase posts (first) with static data, deduped by slug */
  const allResources: Resource[] = useMemo(() => {
    const seen = new Set<string>();
    const merged: Resource[] = [];

    // Supabase data takes priority
    for (const p of posts) {
      if (!seen.has(p.slug)) {
        seen.add(p.slug);
        merged.push({ ...p, service: (p as unknown as Resource).service ?? "" });
      }
    }

    // Then static resources
    for (const r of staticResources) {
      if (!seen.has(r.slug)) {
        seen.add(r.slug);
        merged.push(r);
      }
    }

    return merged;
  }, [posts]);

  /* Apply both filters (AND logic) */
  const filtered = useMemo(() => {
    return allResources.filter((r) => {
      const contentMatch =
        activeContent === "All" || r.category === activeContent;
      const serviceMatch =
        activeService === "All Services" || r.service === activeService;
      return contentMatch && serviceMatch;
    });
  }, [allResources, activeContent, activeService]);

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-brand-tint/40 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-4">
              Insights &amp; Resources
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-ink leading-tight mb-6">
              Resources
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Expert insights on accounting, tax strategy, and financial
              operations for growing businesses.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter rows */}
          <AnimatedSection>
            <div className="mb-12 space-y-6">
              {/* Content Type */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Content Type
                </p>
                <div className="flex flex-wrap gap-2">
                  {contentTypes.map((ct) => (
                    <button
                      key={ct}
                      onClick={() => setActiveContent(ct)}
                      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 cursor-pointer ${
                        activeContent === ct
                          ? "bg-brand-dark text-white shadow-sm"
                          : "bg-brand-tint text-muted-foreground hover:bg-brand-soft"
                      }`}
                    >
                      {ct}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Area */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Service Area
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceTypes.map((st) => (
                    <button
                      key={st}
                      onClick={() => setActiveService(st)}
                      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 cursor-pointer ${
                        activeService === st
                          ? "bg-brand-dark text-white shadow-sm"
                          : "bg-brand-tint text-muted-foreground hover:bg-brand-soft"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Resource grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-muted/50 animate-pulse h-[360px]"
                />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <AnimatedSection>
              <div className="text-center py-20">
                <BookOpen className="size-16 text-brand/20 mx-auto mb-6" />
                <h2 className="font-heading font-bold text-2xl text-ink mb-3">
                  No resources found
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Try adjusting your filters to find what you&rsquo;re looking
                  for.
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, i) => (
                <AnimatedSection key={post.id} delay={0.1 + i * 0.08}>
                  <Link to={`/resources/${post.slug}`}>
                    <motion.div
                      className="group bg-white rounded-2xl border border-black/[0.06] shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                      whileHover={{ y: -4 }}
                    >
                      {post.featured_image && (
                        <div className="aspect-[16/10] overflow-hidden">
                          <img
                            src={post.featured_image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          {post.category && (
                            <span className="text-xs font-medium text-brand uppercase tracking-wider">
                              {post.category}
                            </span>
                          )}
                          <span className="text-xs text-muted-foreground">
                            {new Date(post.created_at).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              },
                            )}
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-lg text-ink mb-2 leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            By {post.author}
                          </span>
                          <span className="inline-flex items-center gap-1 text-sm font-medium text-brand group-hover:gap-2 transition-all">
                            Read
                            <ArrowRight className="size-3.5" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img
          src="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#140e2a]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e2a] via-transparent to-[#140e2a]/70" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <p className="text-[#EE672C] text-xs font-semibold uppercase tracking-widest mb-4">
              Need expert guidance?
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6 leading-tight max-w-2xl mx-auto">
              Let&rsquo;s discuss your financial strategy.
            </h2>
            <ConsultationModal
              trigger={
                <Button
                  size="lg"
                  className="text-base px-8 h-13 font-semibold shadow-xl shadow-[#EE672C]/20 border-0 text-white cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #EE672C, #B03B2D)",
                  }}
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
