import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, BookOpen } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { BlogPost } from "@/types/database";

export default function ResourcesPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

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

      {/* Posts */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-muted/50 animate-pulse h-[360px]"
                />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <AnimatedSection>
              <div className="text-center py-20">
                <BookOpen className="size-16 text-brand/20 mx-auto mb-6" />
                <h2 className="font-heading font-bold text-2xl text-ink mb-3">
                  Coming Soon
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Our team is working on insightful articles and guides. Stay
                  tuned.
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
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
