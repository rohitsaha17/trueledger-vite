import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api, resolveAssetUrl } from "@/lib/api";
import { MEDIA_EVENT_KINDS } from "@/lib/media-events";
import { UploadButton } from "@/components/admin/upload-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { MediaEventItem } from "@/types/database";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Pencil,
  Plus,
  Trash2,
  X,
} from "lucide-react";

const selectClass =
  "mt-1 h-10 w-full rounded-lg border border-input bg-transparent px-3 text-sm";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function newEvent(): Partial<MediaEventItem> {
  return {
    year: String(new Date().getFullYear()),
    kind: "Event",
    images: [],
    published: false,
  };
}

export default function AdminMedia() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState<MediaEventItem[]>([]);
  const [editing, setEditing] = useState<Partial<MediaEventItem> | null>(
    searchParams.get("new") ? newEvent() : null,
  );
  const [saving, setSaving] = useState(false);

  function load() {
    api.get<MediaEventItem[]>("/media-events/all").then(setItems);
  }

  useEffect(load, []);

  function close() {
    setEditing(null);
    setSearchParams({});
  }

  async function save() {
    if (!editing?.title || !editing.year || !editing.kind) {
      alert("Title, year and type are required.");
      return;
    }
    setSaving(true);
    const payload = {
      ...editing,
      slug: editing.slug || `${slugify(editing.title)}-${editing.year}`,
    };

    try {
      if (editing.id) {
        await api.put(`/media-events/${editing.id}`, payload);
      } else {
        await api.post("/media-events", payload);
      }
      close();
      load();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  async function remove(id: string) {
    if (!confirm("Delete this event?")) return;
    await api.delete(`/media-events/${id}`);
    load();
  }

  async function togglePublish(item: MediaEventItem) {
    await api.put(`/media-events/${item.id}`, { published: !item.published });
    load();
  }

  if (editing) {
    return <EventForm editing={editing} setEditing={setEditing} saving={saving} onSave={save} onCancel={close} />;
  }

  const years = [...new Set(items.map((item) => item.year))];

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading font-bold text-2xl text-ink">Media Gallery</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Events, webinars, articles, podcasts and videos on the Media &amp; Events page.
          </p>
        </div>
        <Button size="sm" onClick={() => setEditing(newEvent())}>
          <Plus className="size-4 mr-1" /> New Event
        </Button>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          No events yet. Click &ldquo;New Event&rdquo; to add one.
        </div>
      ) : (
        <div className="space-y-8">
          {years.map((year) => (
            <section key={year}>
              <h2 className="font-heading font-semibold text-lg text-ink mb-3">{year}</h2>
              <div className="bg-white rounded-xl border border-black/[0.06] overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {items
                      .filter((item) => item.year === year)
                      .map((item) => (
                        <tr key={item.id} className="border-b last:border-0">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              {item.images[0] ? (
                                <img
                                  src={resolveAssetUrl(item.images[0])}
                                  alt=""
                                  className="size-12 rounded-md object-cover shrink-0"
                                  loading="lazy"
                                />
                              ) : (
                                <div className="size-12 rounded-md bg-muted shrink-0" />
                              )}
                              <div>
                                <p className="font-medium text-ink">{item.title}</p>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  {item.kind} · {item.date_label || item.year} ·{" "}
                                  {item.images.length} photo{item.images.length === 1 ? "" : "s"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 w-24">
                            <button
                              onClick={() => togglePublish(item)}
                              className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full cursor-pointer ${
                                item.published
                                  ? "bg-green-50 text-green-700"
                                  : "bg-gray-100 text-gray-500"
                              }`}
                            >
                              {item.published ? <Eye className="size-3" /> : <EyeOff className="size-3" />}
                              {item.published ? "Live" : "Draft"}
                            </button>
                          </td>
                          <td className="px-4 py-3 text-right whitespace-nowrap w-24">
                            <button
                              onClick={() => setEditing(item)}
                              className="p-1.5 text-muted-foreground hover:text-brand cursor-pointer"
                            >
                              <Pencil className="size-3.5" />
                            </button>
                            <button
                              onClick={() => remove(item.id)}
                              className="p-1.5 text-muted-foreground hover:text-red-600 cursor-pointer"
                            >
                              <Trash2 className="size-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  );
}

function EventForm({
  editing,
  setEditing,
  saving,
  onSave,
  onCancel,
}: {
  editing: Partial<MediaEventItem>;
  setEditing: React.Dispatch<React.SetStateAction<Partial<MediaEventItem> | null>>;
  saving: boolean;
  onSave: () => void;
  onCancel: () => void;
}) {
  const [photoUrl, setPhotoUrl] = useState("");
  const images = editing.images ?? [];

  // Functional updates, so uploads finishing after other edits don't overwrite them
  const update = (fields: Partial<MediaEventItem>) =>
    setEditing((prev) => (prev ? { ...prev, ...fields } : prev));
  const setImages = (fn: (images: string[]) => string[]) =>
    setEditing((prev) => (prev ? { ...prev, images: fn(prev.images ?? []) } : prev));

  function movePhoto(index: number, dir: -1 | 1) {
    setImages((list) => {
      const next = [...list];
      [next[index], next[index + dir]] = [next[index + dir], next[index]];
      return next;
    });
  }

  function addPhotoUrl() {
    if (!photoUrl.trim()) return;
    setImages((list) => [...list, photoUrl.trim()]);
    setPhotoUrl("");
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading font-bold text-2xl text-ink">
          {editing.id ? "Edit Event" : "New Event"}
        </h1>
        <Button variant="outline" size="sm" onClick={onCancel}>
          <X className="size-4 mr-1" /> Cancel
        </Button>
      </div>

      <div className="bg-white rounded-xl border border-black/[0.06] p-6 space-y-5 max-w-3xl">
        <div>
          <Label>Title</Label>
          <Input
            value={editing.title ?? ""}
            onChange={(e) => update({ title: e.target.value })}
            placeholder="e.g. Taxmann Webinar — Indian Startups: The US Expansion Playbook"
            className="mt-1"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <Label>Type</Label>
            <select
              value={editing.kind ?? ""}
              onChange={(e) => update({ kind: e.target.value })}
              className={selectClass}
            >
              {MEDIA_EVENT_KINDS.map((kind) => (
                <option key={kind} value={kind}>
                  {kind}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label>Year</Label>
            <Input
              value={editing.year ?? ""}
              onChange={(e) => update({ year: e.target.value.replace(/\D/g, "").slice(0, 4) })}
              placeholder="2026"
              className="mt-1"
            />
          </div>
          <div>
            <Label>Date shown</Label>
            <Input
              value={editing.date_label ?? ""}
              onChange={(e) => update({ date_label: e.target.value })}
              placeholder="e.g. June 2026"
              className="mt-1"
            />
          </div>
        </div>
        <div>
          <Label>Description</Label>
          <Textarea
            value={editing.description ?? ""}
            onChange={(e) => update({ description: e.target.value })}
            rows={3}
            className="mt-1"
          />
        </div>

        {/* Photos */}
        <div>
          <Label>Photos</Label>
          <p className="text-xs text-muted-foreground mt-0.5">
            The first photo is the main one. Use the arrows to reorder.
          </p>
          {images.length > 0 && (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-3">
              {images.map((src, i) => (
                <div key={`${src}-${i}`} className="relative group rounded-lg overflow-hidden border bg-muted">
                  <img
                    src={resolveAssetUrl(src)}
                    alt={`Photo ${i + 1}`}
                    className={`w-full aspect-[4/3] ${editing.poster ? "object-contain" : "object-cover"}`}
                  />
                  <span className="absolute top-1.5 left-1.5 text-[11px] font-semibold bg-black/60 text-white rounded px-1.5">
                    {i + 1}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 flex justify-between p-1.5 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-1">
                      <button
                        type="button"
                        disabled={i === 0}
                        onClick={() => movePhoto(i, -1)}
                        className="p-1 rounded bg-white/90 text-ink disabled:opacity-30 cursor-pointer"
                        aria-label="Move earlier"
                      >
                        <ChevronLeft className="size-3.5" />
                      </button>
                      <button
                        type="button"
                        disabled={i === images.length - 1}
                        onClick={() => movePhoto(i, 1)}
                        className="p-1 rounded bg-white/90 text-ink disabled:opacity-30 cursor-pointer"
                        aria-label="Move later"
                      >
                        <ChevronRight className="size-3.5" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm("Remove this photo from the event?")) {
                          setImages((list) => list.filter((_, j) => j !== i));
                        }
                      }}
                      className="p-1 rounded bg-red-500 text-white cursor-pointer"
                      aria-label="Remove photo"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-2 mt-3">
            <UploadButton
              accept="image/*"
              multiple
              label="Upload photos"
              onUploaded={(urls) => setImages((list) => [...list, ...urls])}
            />
            <Input
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addPhotoUrl()}
              placeholder="…or paste a photo URL"
              className="h-9 flex-1 min-w-48"
            />
            <Button type="button" size="sm" variant="ghost" onClick={addPhotoUrl}>
              Add URL
            </Button>
          </div>
          <label className="flex items-center gap-2 text-sm cursor-pointer mt-3">
            <input
              type="checkbox"
              checked={editing.poster ?? false}
              onChange={(e) => update({ poster: e.target.checked })}
              className="accent-brand"
            />
            These are flyers / letters (show the whole image, uncropped)
          </label>
        </div>

        {/* Links */}
        <div>
          <Label>Video link (optional)</Label>
          <p className="text-xs text-muted-foreground mt-0.5">Shown as a &ldquo;Watch on YouTube&rdquo; button.</p>
          <Input
            value={editing.video_url ?? ""}
            onChange={(e) => update({ video_url: e.target.value })}
            placeholder="https://youtu.be/..."
            className="mt-1"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_14rem] gap-5">
          <div>
            <Label>Document link (optional)</Label>
            <div className="flex gap-2 mt-1">
              <Input
                value={editing.doc_url ?? ""}
                onChange={(e) => update({ doc_url: e.target.value })}
                placeholder="https://... or upload a PDF"
              />
              <UploadButton
                accept="application/pdf"
                label="Upload PDF"
                onUploaded={(url) => update({ doc_url: url })}
              />
            </div>
          </div>
          <div>
            <Label>Document button text</Label>
            <Input
              value={editing.doc_label ?? ""}
              onChange={(e) => update({ doc_label: e.target.value })}
              placeholder="View document"
              className="mt-1"
            />
          </div>
        </div>

        <div className="w-40">
          <Label>Order within the year</Label>
          <Input
            type="number"
            value={editing.sort_order ?? 0}
            onChange={(e) => update({ sort_order: Number(e.target.value) })}
            className="mt-1"
          />
        </div>

        <div className="flex items-center gap-4 pt-2">
          <Button onClick={onSave} disabled={saving}>
            {saving ? "Saving..." : "Save"}
          </Button>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={editing.published ?? false}
              onChange={(e) => update({ published: e.target.checked })}
              className="accent-brand"
            />
            Published
          </label>
        </div>
      </div>
    </>
  );
}
