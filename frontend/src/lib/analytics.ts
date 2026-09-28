/**
 * Google Analytics 4 (gtag.js).
 *
 * The tag is loaded lazily and only after the visitor has allowed analytics
 * cookies in the banner (see components/shared/cookie-consent.tsx), so nothing
 * is requested from googletagmanager.com for a visitor who declines.
 *
 * Page views are sent by hand from components/shared/analytics.tsx because
 * react-router navigations are not full page loads. Keep "Page changes based
 * on browser history events" switched OFF under Enhanced measurement in the
 * GA data stream settings, or every navigation is counted twice.
 */

const MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID ?? "G-N6B60V04YH";

/** Must match STORAGE_KEY in components/shared/cookie-consent.tsx. */
const CONSENT_KEY = "tl-cookie-consent";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

let loaded = false;

// gtag.js expects the raw `arguments` object pushed onto the data layer,
// exactly as in Google's own snippet -- an array is not equivalent. Declared
// without parameters for that reason, then cast to the signature callers use.
const gtag = function () {
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
} as (...args: unknown[]) => void;

/**
 * Reads the choice stored by the cookie banner. The banner writes
 * "accepted", "rejected", "dismissed", or "custom:analytics=…,marketing=…".
 * Anything unrecognised, missing or unreadable counts as no consent.
 */
export function analyticsAllowed(): boolean {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return false;
    const { choice } = JSON.parse(raw) as { choice?: string };
    if (choice === "accepted") return true;
    if (choice?.startsWith("custom:")) return choice.includes("analytics=true");
    return false;
  } catch {
    return false;
  }
}

let linkTrackingInstalled = false;

/** wa.me, whatsapp.com and its subdomains, or the whatsapp: scheme. */
function isWhatsAppLink(href: string): boolean {
  if (href.toLowerCase().startsWith("whatsapp:")) return true;
  try {
    const host = new URL(href, window.location.origin).hostname.toLowerCase();
    return host === "wa.me" || host === "whatsapp.com" || host.endsWith(".whatsapp.com");
  } catch {
    return false;
  }
}

/**
 * One delegated listener on the document, rather than an onClick on every
 * link. Contact details appear in the footer, on the contact page and in
 * seven policy/region pages, so handler-per-link would mean editing ten
 * files and remembering to do it again for every link added later.
 *
 * Capture phase, so a click is still recorded if something downstream
 * stops propagation.
 */
function installLinkTracking() {
  if (linkTrackingInstalled) return;
  linkTrackingInstalled = true;

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href") ?? "";
      const name = href.startsWith("tel:")
        ? "click_phone"
        : href.startsWith("mailto:")
          ? "click_email"
          : isWhatsAppLink(href)
            ? "whatsapp_click"
            : null;

      if (!name) return;

      trackEvent(name, {
        link_url: href,
        // Where on the site the click happened, so the report shows which
        // pages actually drive contact rather than just a total.
        page_path: window.location.pathname + window.location.search,
        link_text: (anchor.textContent ?? "").trim().slice(0, 100) || undefined,
      });
    },
    { capture: true }
  );
}

/** Injects gtag.js once, if we have an ID and the visitor has opted in. */
export function initAnalytics() {
  if (loaded) return;
  if (!MEASUREMENT_ID) return;
  if (!import.meta.env.PROD) return;
  if (!analyticsAllowed()) return;

  loaded = true;
  window.dataLayer = window.dataLayer || [];

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  gtag("js", new Date());
  gtag("config", MEASUREMENT_ID, { send_page_view: false });

  installLinkTracking();
}

export function trackPageView(path: string) {
  if (!loaded) return;
  gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** Arbitrary GA4 event, e.g. trackEvent("contact_form_submit", { page: "/contact" }). */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (!loaded) return;
  gtag("event", name, params ?? {});
}

/** Called by the cookie banner once a choice is saved. No-ops unless analytics were allowed. */
export function grantAnalyticsConsent() {
  initAnalytics();
  trackPageView(window.location.pathname + window.location.search);
}
