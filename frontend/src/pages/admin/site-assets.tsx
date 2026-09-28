import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api, resolveAssetUrl } from "@/lib/api";
import { assetPages, type AssetSlot } from "@/data/site-assets";
import { UploadButton } from "@/components/admin/upload-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, Link2, RotateCcw } from "lucide-react";

type Overrides = Record<string, string>;

function countOverridden(pageIndex: number, overrides: Overrides) {
  return assetPages[pageIndex].sections
    .flatMap((section) => section.slots)
    .filter((slot) => overrides[slot.key]).length;
}

export default function AdminSiteAssets() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [overrides, setOverrides] = useState<Overrides>({});
  const pageIndex = Math.min(Number(searchParams.get("page") ?? 0) || 0, assetPages.length - 1);
  const page = assetPages[pageIndex];

  useEffect(() => {
    api.get<Overrides>("/site-assets").then(setOverrides);
  }, []);

  async function setAsset(key: string, url: string) {
    await api.put(`/site-assets/${encodeURIComponent(key)}`, { url });
    setOverrides((prev) => ({ ...prev, [key]: url }));
  }

  async function resetAsset(key: string) {
    if (!confirm("Reset this asset to the original?")) return;
    await api.delete(`/site-assets/${encodeURIComponent(key)}`);
    setOverrides((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  return (
    <>
      <div className="mb-6">
        <h1 className="font-heading font-bold text-2xl text-ink">Site Assets</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Replace any image or video on the website. Changes go live as soon as
          they're saved; "Reset" restores the original.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Page picker */}
        <nav className="lg:w-60 shrink-0 bg-white rounded-xl border border-black/[0.06] p-2 h-fit lg:sticky lg:top-6">
          {assetPages.map((p, i) => {
            const changed = countOverridden(i, overrides);
            return (
              <button
                key={p.title}
                onClick={() => setSearchParams({ page: String(i) })}
                className={`w-full flex items-center justify-between gap-2 text-left px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer ${
                  i === pageIndex
                    ? "bg-brand-tint text-brand font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-ink"
                }`}
              >
                <span>{p.title}</span>
                {changed > 0 && (
                  <span className="text-[11px] font-semibold bg-brand text-white rounded-full px-1.5 min-w-5 text-center">
                    {changed}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Selected page */}
        <div className="flex-1 min-w-0 space-y-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-heading font-semibold text-xl text-ink">{page.title}</h2>
            {page.path && (
              <a
                href={page.path}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-brand hover:underline"
              >
                View page <ExternalLink className="size-3.5" />
              </a>
            )}
          </div>

          {page.sections.length === 0 && (
            <p className="text-sm text-muted-foreground">No editable assets on this page.</p>
          )}

          {page.sections.map((section) => (
            <section key={section.title}>
              <h3 className="font-heading font-semibold text-base text-ink mb-3">
                {section.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {section.slots.map((slot) => (
                  <AssetCard
                    key={slot.key}
                    slot={slot}
                    override={overrides[slot.key]}
                    onChange={(url) => setAsset(slot.key, url)}
                    onReset={() => resetAsset(slot.key)}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

function AssetCard({
  slot,
  override,
  onChange,
  onReset,
}: {
  slot: AssetSlot;
  override?: string;
  onChange: (url: string) => Promise<void>;
  onReset: () => void;
}) {
  const [urlInput, setUrlInput] = useState<string | null>(null);
  const isVideo = slot.kind === "video";
  const src = resolveAssetUrl(override ?? slot.default);

  async function saveUrl() {
    if (!urlInput?.trim()) return;
    await onChange(urlInput.trim());
    setUrlInput(null);
  }

  return (
    <div className="bg-white rounded-xl border border-black/[0.06] overflow-hidden flex flex-col">
      <div className="relative aspect-video bg-muted">
        {isVideo ? (
          <video
            key={src}
            src={src}
            className="w-full h-full object-contain"
            muted
            controls
            preload="metadata"
          />
        ) : (
          <img src={src} alt={slot.label} className="w-full h-full object-contain" loading="lazy" />
        )}
        {override && (
          <span className="absolute top-2 left-2 text-[11px] font-semibold bg-brand text-white rounded-full px-2 py-0.5">
            Customised
          </span>
        )}
      </div>

      <div className="p-3 flex flex-col gap-3 flex-1">
        <p className="text-sm font-medium text-ink">{slot.label}</p>

        {urlInput !== null ? (
          <div className="flex gap-2">
            <Input
              autoFocus
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && saveUrl()}
              placeholder="https://..."
              className="h-9"
            />
            <Button size="sm" onClick={saveUrl}>Save</Button>
            <Button size="sm" variant="ghost" onClick={() => setUrlInput(null)}>
              Cancel
            </Button>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2 mt-auto">
            <UploadButton
              accept={isVideo ? "video/*" : "image/*"}
              label="Replace"
              onUploaded={onChange}
            />
            <Button size="sm" variant="ghost" onClick={() => setUrlInput(override ?? "")}>
              <Link2 className="size-3.5" /> Use URL
            </Button>
            {override && (
              <Button size="sm" variant="ghost" onClick={onReset}>
                <RotateCcw className="size-3.5" /> Reset
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
