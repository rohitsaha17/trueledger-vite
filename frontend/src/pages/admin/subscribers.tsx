import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { Subscriber } from "@/types/database";
import { Trash2 } from "lucide-react";

export default function AdminSubscribers() {
  const [items, setItems] = useState<Subscriber[]>([]);

  async function load() {
    const data = await api.get<Subscriber[]>("/subscribers");
    setItems(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function remove(id: string) {
    if (!confirm("Remove this subscriber?")) return;
    await api.delete(`/subscribers/${id}`);
    load();
  }

  function copyAll() {
    navigator.clipboard.writeText(items.map((i) => i.email).join(", "));
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading font-bold text-2xl text-ink">
          Newsletter Subscribers
        </h1>
        {items.length > 0 && (
          <button
            onClick={copyAll}
            className="text-sm font-medium text-brand hover:underline cursor-pointer"
          >
            Copy all emails
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          No subscribers yet.
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-black/[0.06] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/30">
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Email
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Subscribed
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
                    {item.email}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {new Date(item.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right">
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
