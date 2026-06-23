import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Camera, X } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { MediaItem } from "@/types/database";

export default function MediaGalleryPage() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);

  useEffect(() => {
    supabase
      .from("media_items")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setItems(data ?? []);
        setLoading(false);
      });
  }, []);

  const categories = [
    "All",
    ...Array.from(new Set(items.map((i) => i.category).filter(Boolean))),
  ];
  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((i) => i.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-brand-tint/40 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-4">
              Gallery
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-ink leading-tight mb-6">
              Media &amp; Gallery
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              A look inside TrueLedger &mdash; our team, events, office, and the
              moments that define our culture.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category filters */}
      {categories.length > 1 && (
        <section className="pb-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? "bg-brand text-white"
                      : "bg-muted text-muted-foreground hover:bg-brand-tint hover:text-brand"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Grid */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-muted/50 animate-pulse aspect-square"
                />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <AnimatedSection>
              <div className="text-center py-20">
                <Camera className="size-16 text-brand/20 mx-auto mb-6" />
                <h2 className="font-heading font-bold text-2xl text-ink mb-3">
                  Coming Soon
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Our media gallery is being curated. Check back soon for
                  photos, events, and more.
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="break-inside-avoid cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => setLightbox(item)}
                >
                  <div className="rounded-2xl overflow-hidden border border-black/[0.06] shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {(item.title || item.description) && (
                      <div className="p-4">
                        {item.title && (
                          <h3 className="font-heading font-semibold text-sm text-ink mb-1">
                            {item.title}
                          </h3>
                        )}
                        {item.description && (
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white cursor-pointer"
            >
              <X className="size-8" />
            </button>
            <motion.div
              className="max-w-5xl max-h-[85vh] relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.image_url}
                alt={lightbox.title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              {lightbox.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white font-heading font-semibold text-lg">
                    {lightbox.title}
                  </h3>
                  {lightbox.description && (
                    <p className="text-white/70 text-sm mt-1">
                      {lightbox.description}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
