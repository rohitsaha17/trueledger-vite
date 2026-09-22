import { useEffect } from "react";

/**
 * Injects a JSON-LD structured-data block into <head> for the lifetime of
 * the mounting component. Renders nothing and does not touch the page.
 */
export function JsonLd({ data }: { data: unknown }) {
  const json = JSON.stringify(data);

  useEffect(() => {
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.dataset.seo = "jsonld";
    el.textContent = json;
    document.head.appendChild(el);
    return () => {
      el.remove();
    };
  }, [json]);

  return null;
}
