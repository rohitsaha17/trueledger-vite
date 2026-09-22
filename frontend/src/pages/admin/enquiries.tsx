import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { Enquiry } from "@/types/database";
import { Trash2, Mail, Phone } from "lucide-react";

const sourceLabels: Record<string, string> = {
  contact: "Contact Form",
  consultation: "Consultation",
  whitepaper: "Whitepaper",
};

export default function AdminEnquiries() {
  const [items, setItems] = useState<Enquiry[]>([]);

  async function load() {
    const data = await api.get<Enquiry[]>("/enquiries");
    setItems(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function remove(id: string) {
    if (!confirm("Delete this enquiry?")) return;
    await api.delete(`/enquiries/${id}`);
    load();
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading font-bold text-2xl text-ink">Enquiries</h1>
        <span className="text-sm text-muted-foreground">
          {items.length} total
        </span>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          No enquiries yet. Submissions from the contact form, consultation
          modal and whitepaper downloads show up here.
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-black/[0.06] p-5"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="font-medium text-ink">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.company || "—"}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-brand-tint text-brand">
                    {sourceLabels[item.source] ?? item.source}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(item.created_at).toLocaleDateString()}
                  </span>
                  <button
                    onClick={() => remove(item.id)}
                    className="p-1.5 text-muted-foreground hover:text-red-600 cursor-pointer"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm mb-3">
                <a
                  href={`mailto:${item.email}`}
                  className="inline-flex items-center gap-1.5 text-brand hover:underline"
                >
                  <Mail className="size-3.5" />
                  {item.email}
                </a>
                {item.phone && (
                  <a
                    href={`tel:${item.phone}`}
                    className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-brand"
                  >
                    <Phone className="size-3.5" />
                    {item.phone}
                  </a>
                )}
              </div>

              {item.service && (
                <p className="text-sm text-muted-foreground mb-1">
                  <span className="font-medium text-ink">Service:</span>{" "}
                  {item.service}
                </p>
              )}
              {item.message && (
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {item.message}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
