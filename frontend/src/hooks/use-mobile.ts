import { useState, useEffect } from "react";

/** Returns true on mobile/tablet (<1024px) or when the user prefers reduced motion. */
export function useReducedPerformance() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const check = () =>
      setReduced(window.innerWidth < 1024 || mql.matches);

    check();

    let timeout: ReturnType<typeof setTimeout>;
    const debounced = () => {
      clearTimeout(timeout);
      timeout = setTimeout(check, 200);
    };

    window.addEventListener("resize", debounced);
    mql.addEventListener("change", check);
    return () => {
      window.removeEventListener("resize", debounced);
      mql.removeEventListener("change", check);
      clearTimeout(timeout);
    };
  }, []);

  return reduced;
}

/** Returns true on small screens (<768px). */
export function useIsMobile() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();

    let timeout: ReturnType<typeof setTimeout>;
    const debounced = () => {
      clearTimeout(timeout);
      timeout = setTimeout(check, 200);
    };

    window.addEventListener("resize", debounced);
    return () => {
      window.removeEventListener("resize", debounced);
      clearTimeout(timeout);
    };
  }, []);

  return mobile;
}
