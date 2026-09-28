/**
 * Meta (Facebook) Pixel.
 *
 * Same approach as lib/analytics.ts: fbevents.js is loaded lazily and only
 * after the visitor has allowed *marketing* cookies in the banner, and page
 * views are sent by hand from components/shared/analytics.tsx on every
 * react-router navigation (the stock snippet would only count the first).
 */

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID ?? "2880081705723676";

/** Must match STORAGE_KEY in components/shared/cookie-consent.tsx. */
const CONSENT_KEY = "tl-cookie-consent";

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

let loaded = false;

/** "accepted", or a custom choice with marketing switched on. Anything else is no consent. */
export function marketingAllowed(): boolean {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return false;
    const { choice } = JSON.parse(raw) as { choice?: string };
    if (choice === "accepted") return true;
    if (choice?.startsWith("custom:")) return choice.includes("marketing=true");
    return false;
  } catch {
    return false;
  }
}

/** Injects fbevents.js once, if we have an ID and the visitor has opted in. */
export function initMetaPixel() {
  if (loaded) return;
  if (!PIXEL_ID) return;
  if (!import.meta.env.PROD) return;
  if (!marketingAllowed()) return;

  loaded = true;

  // Meta's queueing stub: calls made before fbevents.js arrives are buffered.
  // Like gtag, it expects the raw `arguments` object queued, as in Meta's snippet.
  if (!window.fbq) {
    const fbq = function () {
      // eslint-disable-next-line prefer-rest-params
      if (fbq.callMethod) fbq.callMethod(...arguments);
      // eslint-disable-next-line prefer-rest-params
      else fbq.queue.push(arguments);
    } as Fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = fbq;
    window._fbq ??= fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  window.fbq!("init", PIXEL_ID);
}

export function trackMetaPageView() {
  if (!loaded) return;
  window.fbq?.("track", "PageView");
}

/** Standard Meta event, e.g. trackMetaEvent("Lead"). */
export function trackMetaEvent(name: string, params?: Record<string, unknown>) {
  if (!loaded) return;
  window.fbq?.("track", name, params ?? {});
}

/** Called by the cookie banner once a choice is saved. No-ops unless marketing was allowed. */
export function grantMarketingConsent() {
  if (loaded) return;
  initMetaPixel();
  trackMetaPageView();
}
