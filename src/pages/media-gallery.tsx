import { useCallback, useEffect, useMemo, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import {
  ArrowUpRight,
  CalendarDays,
  Camera,
  ChevronLeft,
  ChevronRight,
  Expand,
  FileText,
  Film,
  Images,
  Mic,
  MonitorPlay,
  Newspaper,
  Play,
  Users,
  X,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import type { MediaItem } from "@/types/database";
import {
  mediaYears,
  type MediaEvent,
  type MediaEventKind,
} from "@/data/media-events";

/* ------------------------------------------------------------------ */
/*  Per-kind styling                                                    */
/* ------------------------------------------------------------------ */

const KIND_META: Record<
  MediaEventKind,
  { icon: typeof Users; badge: string; accent: string }
> = {
  Event: {
    icon: Users,
    badge: "bg-brand/10 text-brand ring-brand/15",
    accent: "from-brand to-brand-dark",
  },
  Webinar: {
    icon: MonitorPlay,
    badge: "bg-emerald-500/10 text-emerald-700 ring-emerald-600/15",
    accent: "from-emerald-500 to-emerald-700",
  },
  Article: {
    icon: Newspaper,
    badge: "bg-coral/10 text-[#C4501C] ring-coral/20",
    accent: "from-coral to-[#C4501C]",
  },
  Podcast: {
    icon: Mic,
    badge: "bg-violet-500/10 text-violet-700 ring-violet-600/15",
    accent: "from-violet-500 to-violet-700",
  },
  Video: {
    icon: Film,
    badge: "bg-rose-500/10 text-rose-700 ring-rose-600/15",
    accent: "from-rose-500 to-rose-700",
  },
};

interface LightboxState {
  images: string[];
  index: number;
  title: string;
  direction: number;
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function MediaGalleryPage() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeYear, setActiveYear] = useState("All");
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

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

  const years = useMemo(() => ["All", ...mediaYears.map((y) => y.year)], []);

  const totalPhotos = useMemo(
    () =>
      mediaYears
        .flatMap((y) => y.events)
        .reduce((s, e) => s + e.images.length, 0),
    [],
  );

  /* A slow drifting strip of photos behind the hero */
  const heroStrip = useMemo(
    () =>
      mediaYears
        .flatMap((y) => y.events)
        .filter((e) => !e.poster && e.images.length > 0)
        .map((e) => e.images[0])
        .slice(0, 8),
    [],
  );

  const visibleYears =
    activeYear === "All"
      ? mediaYears
      : mediaYears.filter((y) => y.year === activeYear);

  const openLightbox = useCallback(
    (images: string[], index: number, title: string) =>
      setLightbox({ images, index, title, direction: 0 }),
    [],
  );

  const step = useCallback((dir: number) => {
    setLightbox((lb) => {
      if (!lb) return lb;
      const next = (lb.index + dir + lb.images.length) % lb.images.length;
      return { ...lb, index: next, direction: dir };
    });
  }, []);

  /* Keyboard nav + scroll lock while the lightbox is open */
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, step]);

  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-[#140e2a] pt-16 md:pt-20">
        {/* Soft drifting glow */}
        <motion.div
          className="pointer-events-none absolute -top-40 -left-32 size-[520px] rounded-full bg-brand/40 blur-[120px]"
          animate={{ x: [0, 60, 0], y: [0, 40, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-32 -right-24 size-[460px] rounded-full bg-coral/25 blur-[120px]"
          animate={{ x: [0, -50, 0], y: [0, -30, 0], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-coral text-[15px] font-semibold uppercase tracking-[0.2em] mb-4">
              Gallery
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Media &amp; Events
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              Summits, seminars, webinars and published work &mdash; year by
              year, from our most recent appearances back to where we started.
            </p>
          </AnimatedSection>
        </div>

        {/* Drifting photo strip */}
        {heroStrip.length > 0 && (
          <div className="relative z-10 mt-12 overflow-hidden pb-12 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <motion.div
              className="flex w-max gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            >
              {[...heroStrip, ...heroStrip].map((src, i) => (
                <div
                  key={i}
                  className="h-24 w-40 shrink-0 overflow-hidden rounded-xl border border-white/10 sm:h-28 sm:w-48"
                >
                  <img
                    src={src}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="size-full object-cover opacity-45"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </section>

      {/* ============================================================ */}
      {/*  YEAR FILTER                                                 */}
      {/* ============================================================ */}
      <section className="sticky top-[72px] z-30 border-b border-black/[0.06] bg-background/80 py-3 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {years.map((y) => {
              const active = activeYear === y;
              return (
                <button
                  key={y}
                  onClick={() => setActiveYear(y)}
                  className={cn(
                    "relative cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200",
                    active
                      ? "text-white"
                      : "text-muted-foreground hover:text-brand",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="year-pill"
                      className="absolute inset-0 rounded-full bg-brand shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{y}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  YEAR-WISE TIMELINE                                          */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-20 md:space-y-24"
            >
              {visibleYears.map((yearBlock) => {
                const photoCount = yearBlock.events.reduce(
                  (s, e) => s + e.images.length,
                  0,
                );
                return (
                  <div key={yearBlock.year} id={`year-${yearBlock.year}`}>
                    {/* Year header */}
                    <AnimatedSection>
                      <div className="mb-10 flex flex-wrap items-end gap-x-5 gap-y-2">
                        <h2 className="font-heading text-5xl md:text-6xl font-bold leading-none bg-gradient-to-br from-ink via-brand to-brand-dark bg-clip-text text-transparent">
                          {yearBlock.year}
                        </h2>
                        <div className="flex flex-1 items-center gap-4">
                          <span className="h-px flex-1 bg-gradient-to-r from-brand/25 to-transparent" />
                          <span className="whitespace-nowrap text-[15px] uppercase tracking-[0.15em] text-muted-foreground">
                            {yearBlock.events.length} highlights
                            {photoCount > 0 && ` · ${photoCount} photos`}
                          </span>
                        </div>
                      </div>
                    </AnimatedSection>

                    {/* Timeline rail + cards */}
                    <div className="relative">
                      <span className="pointer-events-none absolute left-[29px] top-[34px] bottom-4 hidden w-px bg-gradient-to-b from-brand/30 via-brand/12 to-transparent lg:block" />
                      <div className="space-y-6 lg:space-y-8 lg:pl-16">
                        {yearBlock.events.map((event, i) => (
                          <div key={event.slug} className="relative">
                            <motion.span
                              className="absolute -left-[41px] top-7 hidden size-3 rounded-full bg-brand ring-4 ring-brand/12 lg:block"
                              initial={{ scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              viewport={{ once: true, margin: "-80px" }}
                              transition={{
                                duration: 0.4,
                                delay: 0.1 + Math.min(i, 4) * 0.06,
                              }}
                            />
                            <EventCard
                              event={event}
                              index={i}
                              onOpen={(idx) =>
                                openLightbox(event.images, idx, event.title)
                              }
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  ADMIN-MANAGED EXTRAS                                        */}
      {/* ============================================================ */}
      {!loading && items.length > 0 && (
        <section className="border-t border-black/[0.06] bg-brand-tint/40 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="mb-8 font-heading text-2xl font-bold text-ink md:text-3xl">
                More from TrueLedger
              </h2>
            </AnimatedSection>
            <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
              {items.map((item, i) => (
                <motion.button
                  key={item.id}
                  className="group block w-full break-inside-avoid cursor-pointer text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: Math.min(i, 8) * 0.05 }}
                  whileHover={{ y: -3 }}
                  onClick={() =>
                    openLightbox([item.image_url], 0, item.title ?? "")
                  }
                >
                  <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-[0_18px_40px_-18px_rgba(77,57,127,0.35)]">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute inset-0 bg-brand/0 transition-colors duration-300 group-hover:bg-brand/10" />
                    </div>
                    {(item.title || item.description) && (
                      <div className="p-4">
                        {item.title && (
                          <h3 className="mb-1 font-heading text-sm font-semibold text-ink">
                            {item.title}
                          </h3>
                        )}
                        {item.description && (
                          <p className="line-clamp-2 text-xs text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      )}

      {totalPhotos === 0 && (
        <div className="pb-20 text-center">
          <Camera className="mx-auto mb-6 size-16 text-brand/20" />
          <p className="text-muted-foreground">
            Our media gallery is being curated. Check back soon.
          </p>
        </div>
      )}

      <Lightbox state={lightbox} onClose={() => setLightbox(null)} onStep={step} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Event card                                                          */
/* ------------------------------------------------------------------ */

function EventCard({
  event,
  index,
  onOpen,
}: {
  event: MediaEvent;
  index: number;
  onOpen: (index: number) => void;
}) {
  const meta = KIND_META[event.kind];
  const Icon = meta.icon;
  const hasMedia = event.images.length > 0;

  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_1px_3px_rgba(45,38,48,0.05)] transition-[box-shadow,border-color] duration-300 hover:border-brand/15 hover:shadow-[0_22px_48px_-22px_rgba(77,57,127,0.38)]"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{
        duration: 0.55,
        ease: [0.25, 0.1, 0.25, 1],
        delay: Math.min(index, 4) * 0.07,
      }}
      whileHover={{ y: -3 }}
    >
      {/* Accent that draws itself in on hover */}
      <span
        className={cn(
          "absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100",
          meta.accent,
        )}
      />

      {/* Watermark for entries with no photos, so they never read as empty */}
      {!hasMedia && (
        <Icon
          className="pointer-events-none absolute -bottom-6 -right-5 size-36 -rotate-12 text-brand/[0.045]"
          strokeWidth={1.25}
        />
      )}

      <div className="relative p-6 md:p-8">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1",
              meta.badge,
            )}
          >
            <Icon className="size-3.5" />
            {event.kind}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[15px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <CalendarDays className="size-3.5" />
            {event.dateLabel}
          </span>
          {hasMedia && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground/80">
              <Images className="size-3.5" />
              {event.images.length}
            </span>
          )}
        </div>

        <h3 className="mb-2 font-heading text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-brand md:text-2xl">
          {event.title}
        </h3>
        <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
          {event.description}
        </p>

        {(event.videoUrl || event.docUrl) && (
          <div className="mt-5 flex flex-wrap gap-3">
            {event.videoUrl && (
              <ActionLink href={event.videoUrl} icon={Play}>
                Watch on YouTube
              </ActionLink>
            )}
            {event.docUrl && (
              <ActionLink href={event.docUrl} icon={FileText}>
                {event.docLabel ?? "View document"}
              </ActionLink>
            )}
          </div>
        )}
      </div>

      {hasMedia && <PhotoMosaic event={event} onOpen={onOpen} />}
    </motion.article>
  );
}

function ActionLink({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: typeof Play;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group/link inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand-tint px-4 py-2 text-sm font-medium text-brand transition-colors duration-200 hover:border-brand/30 hover:bg-brand-soft"
    >
      <Icon className="size-4" />
      {children}
      <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Photo mosaic                                                        */
/* ------------------------------------------------------------------ */

function PhotoMosaic({
  event,
  onOpen,
}: {
  event: MediaEvent;
  onOpen: (index: number) => void;
}) {
  const { images, poster, title } = event;

  /* Flyers and letters are portrait — frame them rather than crop them. */
  if (poster) {
    return (
      <div className="px-6 pb-6 md:px-8 md:pb-8">
        <button
          onClick={() => onOpen(0)}
          className="group/tile relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-tint via-white to-brand-soft/60 py-8 ring-1 ring-black/[0.05]"
        >
          {/* Hairline mat so the space around a portrait flyer reads as intentional */}
          <span
            className="pointer-events-none absolute inset-0 opacity-[0.45]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(77,57,127,0.06) 0 1px, transparent 1px 11px)",
            }}
          />
          <img
            src={images[0]}
            alt={title}
            loading="lazy"
            className="relative max-h-[340px] w-auto rounded-lg shadow-[0_14px_36px_-14px_rgba(45,38,48,0.4)] transition-transform duration-500 group-hover/tile:scale-[1.03]"
          />
          <TileHover />
        </button>
      </div>
    );
  }

  const mosaic = images.length >= 4;
  const visible = mosaic ? images.slice(0, 5) : images;
  const restDesktop = images.length - 5;
  const restMobile = images.length - 3;

  return (
    <div
      className={cn(
        "grid gap-2 px-6 pb-6 md:px-8 md:pb-8",
        mosaic
          ? "grid-cols-2 sm:h-[340px] sm:grid-cols-4 sm:grid-rows-2 lg:h-[380px]"
          : images.length === 1
            ? "grid-cols-1"
            : "grid-cols-2 sm:grid-cols-3",
      )}
    >
      {visible.map((src, i) => (
        <button
          key={src}
          onClick={() => onOpen(i)}
          className={cn(
            "group/tile relative cursor-pointer overflow-hidden rounded-xl bg-muted",
            /* Featured tile */
            mosaic && i === 0 && "col-span-2 sm:row-span-2",
            mosaic && i >= 3 && "hidden sm:block",
            /* Sizing: fixed rows on sm+ for the mosaic, aspect ratios otherwise */
            mosaic
              ? i === 0
                ? "aspect-[16/10] sm:aspect-auto"
                : "aspect-[4/3] sm:aspect-auto"
              : images.length === 1
                ? "aspect-[16/9]"
                : "aspect-[4/3]",
            /* Three photos read better with a full-width lead on mobile */
            !mosaic && images.length === 3 && i === 0 && "col-span-2 sm:col-span-1",
          )}
        >
          <img
            src={src}
            alt={`${title} — photo ${i + 1}`}
            loading="lazy"
            className="size-full object-cover transition-transform duration-[600ms] ease-out group-hover/tile:scale-[1.07]"
          />
          <TileHover />

          {/* "+N" counters — the mobile mosaic shows three tiles, desktop five */}
          {mosaic && i === 2 && restMobile > 0 && (
            <MoreBadge count={restMobile} className="sm:hidden" />
          )}
          {mosaic && i === 4 && restDesktop > 0 && (
            <MoreBadge count={restDesktop} className="hidden sm:flex" />
          )}
        </button>
      ))}
    </div>
  );
}

function TileHover() {
  return (
    <>
      <span className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/tile:opacity-100" />
      <span className="absolute bottom-2.5 right-2.5 grid size-8 translate-y-1.5 place-items-center rounded-full bg-white/90 text-brand opacity-0 shadow-sm backdrop-blur transition-all duration-300 group-hover/tile:translate-y-0 group-hover/tile:opacity-100">
        <Expand className="size-3.5" />
      </span>
    </>
  );
}

function MoreBadge({
  count,
  className,
}: {
  count: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "absolute inset-0 flex items-center justify-center bg-ink/55 text-lg font-semibold text-white backdrop-blur-[2px] transition-colors duration-300 group-hover/tile:bg-ink/65",
        className,
      )}
    >
      +{count}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Lightbox                                                            */
/* ------------------------------------------------------------------ */

function Lightbox({
  state,
  onClose,
  onStep,
}: {
  state: LightboxState | null;
  onClose: () => void;
  onStep: (dir: number) => void;
}) {
  return (
    <AnimatePresence>
      {state && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d0918]/92 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 grid size-11 cursor-pointer place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:bg-white/15 hover:text-white"
          >
            <X className="size-5" />
          </button>

          {state.images.length > 1 && (
            <>
              <NavButton
                side="left"
                onClick={(e) => {
                  e.stopPropagation();
                  onStep(-1);
                }}
              />
              <NavButton
                side="right"
                onClick={(e) => {
                  e.stopPropagation();
                  onStep(1);
                }}
              />
            </>
          )}

          <div
            className="relative flex max-h-[74vh] w-full max-w-5xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait" custom={state.direction}>
              <motion.img
                key={state.images[state.index]}
                src={state.images[state.index]}
                alt={state.title}
                custom={state.direction}
                initial={{
                  opacity: 0,
                  x: state.direction * 40,
                  scale: 0.97,
                }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: state.direction * -40, scale: 0.97 }}
                transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                className="max-h-[74vh] max-w-full rounded-xl object-contain shadow-2xl"
              />
            </AnimatePresence>
          </div>

          {/* Caption + thumbnail rail */}
          <motion.div
            className="mt-5 w-full max-w-5xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-heading text-base font-semibold text-white sm:text-lg">
                {state.title}
              </h3>
              {state.images.length > 1 && (
                <p className="text-sm tabular-nums text-white/50">
                  {state.index + 1} / {state.images.length}
                </p>
              )}
            </div>

            {state.images.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {state.images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => onStep(i - state.index)}
                    className={cn(
                      "h-14 w-20 shrink-0 cursor-pointer overflow-hidden rounded-lg border transition-all duration-200",
                      i === state.index
                        ? "border-white opacity-100"
                        : "border-white/15 opacity-45 hover:opacity-80",
                    )}
                  >
                    <img
                      src={src}
                      alt=""
                      aria-hidden
                      className="size-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NavButton({
  side,
  onClick,
}: {
  side: "left" | "right";
  onClick: (e: MouseEvent) => void;
}) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      aria-label={side === "left" ? "Previous photo" : "Next photo"}
      className={cn(
        "absolute top-1/2 z-10 grid size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all hover:bg-white/15 hover:text-white sm:size-12",
        side === "left" ? "left-3 sm:left-6" : "right-3 sm:right-6",
      )}
    >
      <Icon className="size-6" />
    </button>
  );
}
