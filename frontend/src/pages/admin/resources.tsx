import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api, resolveAssetUrl } from "@/lib/api";
import { RESOURCE_CATEGORIES, RESOURCE_SERVICES } from "@/lib/resources";
import { UploadButton } from "@/components/admin/upload-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ResourceItem } from "@/types/database";
import { Plus, Pencil, Trash2, X, Eye, EyeOff, ExternalLink } from "lucide-react";

const selectClass =
  "mt-1 h-10 w-full rounded-lg border border-input bg-transparent px-3 text-sm";

export default function AdminResources() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState<ResourceItem[]>([]);
  const [editing, setEditing] = useState<Partial<ResourceItem> | null>(
    searchParams.get("new") ? { published: false } : null,
  );
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");

  function load() {
    api.get<ResourceItem[]>("/resources/all").then(setItems);
  }

  useEffect(load, []);

  const gated = Boolean(editing?.pdf);

  async function save() {
    if (!editing?.title || !editing.category || !editing.link) {
      alert("Title, type and link/file are required.");
      return;
    }
    setSaving(true);
    // A gated whitepaper downloads the same file its link points to
    const payload = { ...editing, pdf: gated ? editing.link : "" };

    if (editing.id) {
      await api.put(`/resources/${editing.id}`, payload);
    } else {
      await api.post("/resources", payload);
    }
    setSaving(false);
    setEditing(null);
    setSearchParams({});
    load();
  }

  async function remove(id: string) {
    if (!confirm("Delete this resource?")) return;
    await api.delete(`/resources/${id}`);
    load();
  }

  async function togglePublish(item: ResourceItem) {
    await api.put(`/resources/${item.id}`, { published: !item.published });
    load();
  }

  if (editing) {
    return (
      <>
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-heading font-bold text-2xl text-ink">
            {editing.id ? "Edit Resource" : "New Resource"}
          </h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setEditing(null);
              setSearchParams({});
            }}
          >
            <X className="size-4 mr-1" /> Cancel
          </Button>
        </div>

        <div className="bg-white rounded-xl border border-black/[0.06] p-6 space-y-5 max-w-3xl">
          <div>
            <Label>Title</Label>
            <Input
              value={editing.title ?? ""}
              onChange={(e) => setEditing({ ...editing, title: e.target.value })}
              className="mt-1"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <Label>Type</Label>
              <select
                value={editing.category ?? ""}
                onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                className={selectClass}
              >
                <option value="">Select a type</option>
                {RESOURCE_CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label>Service</Label>
              <select
                value={editing.service ?? ""}
                onChange={(e) => setEditing({ ...editing, service: e.target.value })}
                className={selectClass}
              >
                <option value="">Select a service</option>
                {RESOURCE_SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <Label>Link or file</Label>
            <p className="text-xs text-muted-foreground mt-0.5">
              A web address (YouTube, LinkedIn post…) or upload a PDF.
            </p>
            <div className="flex gap-2 mt-1">
              <Input
                value={editing.link ?? ""}
                onChange={(e) => setEditing({ ...editing, link: e.target.value })}
                placeholder="https://... or upload"
              />
              <UploadButton
                accept="application/pdf"
                label="Upload PDF"
                onUploaded={(url) => setEditing({ ...editing, link: url })}
              />
            </div>
            <label className="flex items-center gap-2 text-sm cursor-pointer mt-3">
              <input
                type="checkbox"
                checked={gated}
                onChange={(e) =>
                  setEditing({ ...editing, pdf: e.target.checked ? editing.link || "pdf" : "" })
                }
                className="accent-brand"
              />
              Ask for contact details before download (gated whitepaper)
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_10rem] gap-5">
            <div>
              <Label>Cover image</Label>
              <div className="flex gap-2 mt-1">
                <Input
                  value={editing.cover ?? ""}
                  onChange={(e) => setEditing({ ...editing, cover: e.target.value })}
                  placeholder="Paste a URL or upload"
                />
                <UploadButton
                  accept="image/*"
                  onUploaded={(url) => setEditing({ ...editing, cover: url })}
                />
              </div>
            </div>
            <div>
              <Label>Display order</Label>
              <Input
                type="number"
                value={editing.sort_order ?? 0}
                onChange={(e) =>
                  setEditing({ ...editing, sort_order: Number(e.target.value) })
                }
                className="mt-1"
              />
            </div>
          </div>
          {editing.cover && (
            <img
              src={resolveAssetUrl(editing.cover)}
              alt="Cover preview"
              className="rounded-lg max-h-40 object-cover border"
            />
          )}
          <div className="flex items-center gap-4 pt-2">
            <Button onClick={save} disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </Button>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={editing.published ?? false}
                onChange={(e) =>
                  setEditing({ ...editing, published: e.target.checked })
                }
                className="accent-brand"
              />
              Published
            </label>
          </div>
        </div>
      </>
    );
  }

  const query = search.trim().toLowerCase();
  const visible = query
    ? items.filter((item) =>
        [item.title, item.category, item.service].some((v) =>
          v.toLowerCase().includes(query),
        ),
      )
    : items;

  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-6">
        <h1 className="font-heading font-bold text-2xl text-ink">Resources</h1>
        <div className="flex items-center gap-3">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search resources"
            className="h-9 w-56 bg-white"
          />
          <Button size="sm" onClick={() => setEditing({ published: false })}>
            <Plus className="size-4 mr-1" /> New
          </Button>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          No resources yet. Click &ldquo;New&rdquo; to add one.
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-black/[0.06] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/30">
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Title
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Type
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Service
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Status
                </th>
                <th className="text-right px-4 py-3 font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {visible.map((item) => (
                <tr key={item.id} className="border-b last:border-0">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {item.cover && (
                        <img
                          src={resolveAssetUrl(item.cover)}
                          alt=""
                          className="size-10 rounded-md object-cover shrink-0"
                          loading="lazy"
                        />
                      )}
                      <span className="font-medium text-ink">{item.title}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                    {item.category}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{item.service}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => togglePublish(item)}
                      className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full cursor-pointer ${
                        item.published
                          ? "bg-green-50 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {item.published ? (
                        <Eye className="size-3" />
                      ) : (
                        <EyeOff className="size-3" />
                      )}
                      {item.published ? "Live" : "Draft"}
                    </button>
                  </td>
                  <td className="px-4 py-3 text-right whitespace-nowrap">
                    <a
                      href={resolveAssetUrl(item.link)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block p-1.5 text-muted-foreground hover:text-brand"
                    >
                      <ExternalLink className="size-3.5" />
                    </a>
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
      )}
    </>
  );
}
