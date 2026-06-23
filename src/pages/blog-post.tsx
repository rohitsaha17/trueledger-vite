import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { BlogPost } from "@/types/database";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single()
      .then(({ data }) => {
        setPost(data);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-3/4" />
            <div className="h-64 bg-muted rounded-2xl" />
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-5/6" />
          </div>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="py-20 md:py-28 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="font-heading font-bold text-3xl text-ink mb-4">
            Post Not Found
          </h1>
          <Link to="/resources">
            <Button variant="outline">
              <ArrowLeft className="size-4 mr-2" />
              Back to Resources
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <AnimatedSection>
          <Link
            to="/resources"
            className="inline-flex items-center gap-1.5 text-sm text-brand hover:text-brand-dark mb-8 transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            All Resources
          </Link>

          <div className="flex items-center gap-3 mb-4">
            {post.category && (
              <span className="text-xs font-medium text-brand uppercase tracking-wider bg-brand-tint px-2.5 py-1 rounded-md">
                {post.category}
              </span>
            )}
            <span className="text-xs text-muted-foreground">
              {new Date(post.created_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-4xl text-ink leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-muted-foreground text-sm mb-8">By {post.author}</p>

          {post.featured_image && (
            <div className="rounded-2xl overflow-hidden mb-10 border border-black/[0.06]">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full aspect-[2/1] object-cover"
              />
            </div>
          )}

          <div className="prose prose-slate max-w-none [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-ink [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-heading [&_h3]:font-semibold [&_h3]:text-ink [&_ul]:text-muted-foreground [&_ol]:text-muted-foreground [&_li]:leading-relaxed [&_blockquote]:border-brand [&_blockquote]:text-ink [&_blockquote]:italic">
            {post.content.split("\n").map((paragraph, i) => {
              if (!paragraph.trim()) return null;
              if (paragraph.startsWith("## "))
                return (
                  <h2 key={i}>{paragraph.replace("## ", "")}</h2>
                );
              if (paragraph.startsWith("### "))
                return (
                  <h3 key={i}>{paragraph.replace("### ", "")}</h3>
                );
              if (paragraph.startsWith("> "))
                return (
                  <blockquote key={i}>
                    <p>{paragraph.replace("> ", "")}</p>
                  </blockquote>
                );
              return <p key={i}>{paragraph}</p>;
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
