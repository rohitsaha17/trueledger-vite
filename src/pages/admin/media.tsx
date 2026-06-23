import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { MediaItem } from "@/types/database";
import { Plus, Trash2, X, Eye, EyeOff } from "lucide-react";

export default function AdminMedia() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState<MediaItem[]>([]);
  const [editing, setEditing] = useState<Partial<MediaItem> | null>(
    searchParams.get("new") ? { published: false } : null,
  );
  const [saving, setSaving] = useState(false);

  async function load() {
    const { data } = await supabase
      .from("media_items")
      .select("*")
      .order("created_at", { ascending: false });
    setItems(data ?? []);
  }

  useEffect(() => {
    load();
  }, []);

  async function save() {
    if (!editing?.image_url) return;
    setSaving(true);

    if (editing.id) {
      await supabase.from("media_items").update(editing).eq("id", editing.id);
    } else {
      await supabase.from("media_items").insert(editing);
    }
    setSaving(false);
    setEditing(null);
    setSearchParams({});
    load();
  }

  async function remove(id: string) {
    if (!confirm("Delete this media item?")) return;
    await supabase.from("media_items").delete().eq("id", id);
    load();
  }

  async function togglePublish(item: MediaItem) {
    await supabase
      .from("media_items")
      .update({ published: !item.published })
      .eq("id", item.id);
    load();
  }

  if (editing) {
    return (
      <>
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-heading font-bold text-2xl text-ink">
            {editing.id ? "Edit Media" : "Add Media"}
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

        <div className="bg-white rounded-xl border border-black/[0.06] p-6 space-y-5 max-w-2xl">
          <div>
            <Label>Image URL</Label>
            <Input
              value={editing.image_url ?? ""}
              onChange={(e) =>
                setEditing({ ...editing, image_url: e.target.value })
              }
              placeholder="https://..."
              className="mt-1"
            />
          </div>
          {editing.image_url && (
            <img
              src={editing.image_url}
              alt="Preview"
              className="rounded-lg max-h-48 object-cover border"
            />
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <Label>Title</Label>
              <Input
                value={editing.title ?? ""}
                onChange={(e) =>
                  setEditing({ ...editing, title: e.target.value })
                }
                className="mt-1"
              />
            </div>
            <div>
              <Label>Category</Label>
              <Input
                value={editing.category ?? ""}
                onChange={(e) =>
                  setEditing({ ...editing, category: e.target.value })
                }
                placeholder="e.g. Office, Events, Team"
                className="mt-1"
              />
            </div>
          </div>
          <div>
            <Label>Description</Label>
            <Textarea
              value={editing.description ?? ""}
              onChange={(e) =>
                setEditing({ ...editing, description: e.target.value })
              }
              rows={3}
              className="mt-1"
            />
          </div>
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

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading font-bold text-2xl text-ink">
          Media Gallery
        </h1>
        <Button size="sm" onClick={() => setEditing({ published: false })}>
          <Plus className="size-4 mr-1" /> Add Media
        </Button>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          No media items yet. Click &ldquo;Add Media&rdquo; to upload.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-black/[0.06] overflow-hidden group relative"
            >
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <button
                  onClick={() => togglePublish(item)}
                  className={`p-2 rounded-full cursor-pointer ${item.published ? "bg-green-500" : "bg-gray-500"} text-white`}
                >
                  {item.published ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeOff className="size-4" />
                  )}
                </button>
                <button
                  onClick={() => setEditing(item)}
                  className="p-2 bg-white rounded-full text-ink cursor-pointer"
                >
                  <Plus className="size-4 rotate-45" />
                </button>
                <button
                  onClick={() => remove(item.id)}
                  className="p-2 bg-red-500 rounded-full text-white cursor-pointer"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
              {item.title && (
                <div className="p-3">
                  <p className="text-xs font-medium text-ink truncate">
                    {item.title}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
