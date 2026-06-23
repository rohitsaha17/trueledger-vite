import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { BlogPost } from "@/types/database";
import { Plus, Pencil, Trash2, X, Eye, EyeOff } from "lucide-react";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function AdminBlog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<Partial<BlogPost> | null>(
    searchParams.get("new") ? { published: false } : null,
  );
  const [saving, setSaving] = useState(false);

  async function load() {
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });
    setItems(data ?? []);
  }

  useEffect(() => {
    load();
  }, []);

  async function save() {
    if (!editing?.title) return;
    setSaving(true);
    const slug = editing.slug || slugify(editing.title);
    const payload = { ...editing, slug };

    if (editing.id) {
      await supabase.from("blog_posts").update(payload).eq("id", editing.id);
    } else {
      await supabase.from("blog_posts").insert(payload);
    }
    setSaving(false);
    setEditing(null);
    setSearchParams({});
    load();
  }

  async function remove(id: string) {
    if (!confirm("Delete this blog post?")) return;
    await supabase.from("blog_posts").delete().eq("id", id);
    load();
  }

  async function togglePublish(item: BlogPost) {
    await supabase
      .from("blog_posts")
      .update({ published: !item.published })
      .eq("id", item.id);
    load();
  }

  if (editing) {
    return (
      <>
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-heading font-bold text-2xl text-ink">
            {editing.id ? "Edit Blog Post" : "New Blog Post"}
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
              <Label>Author</Label>
              <Input
                value={editing.author ?? ""}
                onChange={(e) =>
                  setEditing({ ...editing, author: e.target.value })
                }
                className="mt-1"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <Label>Category</Label>
              <Input
                value={editing.category ?? ""}
                onChange={(e) =>
                  setEditing({ ...editing, category: e.target.value })
                }
                placeholder="e.g. Tax, Accounting, Advisory"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Featured Image URL</Label>
              <Input
                value={editing.featured_image ?? ""}
                onChange={(e) =>
                  setEditing({ ...editing, featured_image: e.target.value })
                }
                className="mt-1"
              />
            </div>
          </div>
          <div>
            <Label>Excerpt</Label>
            <Textarea
              value={editing.excerpt ?? ""}
              onChange={(e) =>
                setEditing({ ...editing, excerpt: e.target.value })
              }
              rows={2}
              placeholder="Brief summary shown on the listing page"
              className="mt-1"
            />
          </div>
          <div>
            <Label>
              Content{" "}
              <span className="text-muted-foreground font-normal">
                (supports ## headings, ### subheadings, &gt; quotes)
              </span>
            </Label>
            <Textarea
              value={editing.content ?? ""}
              onChange={(e) =>
                setEditing({ ...editing, content: e.target.value })
              }
              rows={16}
              className="mt-1 font-mono text-sm"
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
          Blog Posts
        </h1>
        <Button size="sm" onClick={() => setEditing({ published: false })}>
          <Plus className="size-4 mr-1" /> New Post
        </Button>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          No blog posts yet. Click &ldquo;New Post&rdquo; to create one.
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
                  Author
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Category
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
              {items.map((item) => (
                <tr key={item.id} className="border-b last:border-0">
                  <td className="px-4 py-3 font-medium text-ink">
                    {item.title}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {item.author}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {item.category}
                  </td>
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
                  <td className="px-4 py-3 text-right">
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
