import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Briefcase, Image, FileText, Plus } from "lucide-react";

interface Stats {
  caseStudies: number;
  media: number;
  blogPosts: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    caseStudies: 0,
    media: 0,
    blogPosts: 0,
  });

  useEffect(() => {
    Promise.all([
      supabase
        .from("case_studies")
        .select("id", { count: "exact", head: true }),
      supabase
        .from("media_items")
        .select("id", { count: "exact", head: true }),
      supabase
        .from("blog_posts")
        .select("id", { count: "exact", head: true }),
    ]).then(([cs, mi, bp]) => {
      setStats({
        caseStudies: cs.count ?? 0,
        media: mi.count ?? 0,
        blogPosts: bp.count ?? 0,
      });
    });
  }, []);

  const cards = [
    {
      label: "Case Studies",
      count: stats.caseStudies,
      icon: Briefcase,
      href: "/admin/case-studies",
      color: "bg-brand-tint text-brand",
    },
    {
      label: "Media Items",
      count: stats.media,
      icon: Image,
      href: "/admin/media",
      color: "bg-coral/10 text-coral",
    },
    {
      label: "Blog Posts",
      count: stats.blogPosts,
      icon: FileText,
      href: "/admin/blog",
      color: "bg-brand-soft text-brand-dark",
    },
  ];

  return (
    <>
      <h1 className="font-heading font-bold text-2xl text-ink mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.label}
              to={card.href}
              className="bg-white rounded-xl border border-black/[0.06] p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`size-10 rounded-lg ${card.color} flex items-center justify-center`}
                >
                  <Icon className="size-5" />
                </div>
                <span className="font-heading font-bold text-3xl text-ink">
                  {card.count}
                </span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                {card.label}
              </p>
            </Link>
          );
        })}
      </div>

      <h2 className="font-heading font-semibold text-lg text-ink mb-4">
        Quick Actions
      </h2>
      <div className="flex flex-wrap gap-3">
        {[
          { label: "New Case Study", href: "/admin/case-studies?new=1" },
          { label: "Upload Media", href: "/admin/media?new=1" },
          { label: "New Blog Post", href: "/admin/blog?new=1" },
        ].map((action) => (
          <Link
            key={action.label}
            to={action.href}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-white border border-black/[0.06] rounded-lg hover:bg-brand-tint hover:text-brand hover:border-brand/20 transition-colors"
          >
            <Plus className="size-3.5" />
            {action.label}
          </Link>
        ))}
      </div>
    </>
  );
}
