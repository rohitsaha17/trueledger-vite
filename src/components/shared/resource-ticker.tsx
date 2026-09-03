import { ArrowUpRight, Download, FileText, ListChecks, Newspaper, PenLine, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { WhitepaperDownloadModal } from "@/components/shared/whitepaper-download-modal";
import { resources, coverFor, type Resource } from "@/pages/resources";

/* ------------------------------------------------------------------ */
/*  Resource ticker — a scrolling strip of real entries from the        */
/*  Resources page. Every card links to the resource it represents, so  */
/*  the strip can never drift out of sync with what actually exists.    */
/* ------------------------------------------------------------------ */

const categoryIcons: Record<string, typeof FileText> = {
  WhitePaper: FileText,
  Guide: ListChecks,
  Video: PlayCircle,
  "Blog Post": PenLine,
  Newsletter: Newspaper,
};

const categoryColors: Record<string, string> = {
  WhitePaper: "#4D397F",
  Guide: "#2CA01C",
  Video: "#EE672C",
  "Blog Post": "#3b82f6",
  Newsletter: "#B03B2D",
};

/** Resources filed under the given service area on the Resources page. */
export function resourcesForService(service: string, limit = 8): Resource[] {
  return resources.filter((r) => r.service === service).slice(0, limit);
}

function ResourceCard({ res }: { res: Resource }) {
  const Icon = categoryIcons[res.category] ?? FileText;
  const color = categoryColors[res.category] ?? "#4D397F";
  const cta = res.pdf ? "Read PDF" : res.category === "Video" ? "Watch" : "Open";

  const card = (
    <div className="flex h-full w-72 shrink-0 flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-shadow duration-300 group-hover:shadow-lg">
      <div className="relative h-36 overflow-hidden bg-[#140e2a]">
        <img
          src={coverFor(res)}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e2a]/70 via-[#140e2a]/10 to-transparent" />
        <span
          className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[13px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
          style={{ backgroundColor: `${color}cc` }}
        >
          <Icon className="size-3.5" />
          {res.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h4 className="mb-3 flex-1 font-heading text-sm font-semibold leading-snug text-ink line-clamp-3">
          {res.title}
        </h4>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-all group-hover:gap-2">
          {cta}
          {res.pdf ? <Download className="size-3.5" /> : <ArrowUpRight className="size-3.5" />}
        </span>
      </div>
    </div>
  );

  if (res.pdf) {
    return (
      <WhitepaperDownloadModal
        pdfUrl={res.pdf}
        title={res.title}
        trigger={<div className="group cursor-pointer">{card}</div>}
      />
    );
  }

  return (
    <a href={res.link} target="_blank" rel="noopener noreferrer" className="group">
      {card}
    </a>
  );
}

interface ResourceTickerProps {
  items: Resource[];
  /** Shown under the strip, linking through to the full Resources page. */
  viewAllLabel?: string;
}

export function ResourceTicker({
  items,
  viewAllLabel = "Browse all resources",
}: ResourceTickerProps) {
  if (items.length === 0) return null;

  // Duplicated once so the marquee can loop seamlessly at -50%.
  const strip = [...items, ...items];

  return (
    <>
      <div className="group/ticker relative w-full overflow-hidden">
        <div
          className="flex w-max gap-6 py-2 group-hover/ticker:[animation-play-state:paused]"
          style={{
            animation: `resource-ticker ${items.length * 7}s linear infinite`,
          }}
        >
          {strip.map((res, i) => (
            <ResourceCard key={`${res.id}-${i}`} res={res} />
          ))}
        </div>

        <style>{`
          @keyframes resource-ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            [style*="resource-ticker"] { animation: none !important; }
          }
        `}</style>
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to="/resources"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
        >
          {viewAllLabel}
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </>
  );
}
