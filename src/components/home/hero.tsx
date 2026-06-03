import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import createGlobe from "cobe";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

/* ------------------------------------------------------------------ */
/*  Marker data — positions spread for clear label visibility          */
/* ------------------------------------------------------------------ */
const markerData = [
  { location: [39, -98] as [number, number], size: 0.10, id: "usa", flag: "/logos/flags/us.svg", label: "USA" },
  { location: [56, -106] as [number, number], size: 0.09, id: "canada", flag: "/logos/flags/ca.svg", label: "Canada" },
  { location: [51.5, -0.1] as [number, number], size: 0.09, id: "uk", flag: "/logos/flags/gb.svg", label: "UK" },
  { location: [28.6, 77.2] as [number, number], size: 0.10, id: "india", flag: "/logos/flags/in.svg", label: "India" },
  { location: [1.35, 103.8] as [number, number], size: 0.08, id: "singapore", flag: "/logos/flags/sg.svg", label: "Singapore" },
  { location: [-37.8, 144.9] as [number, number], size: 0.09, id: "australia", flag: "/logos/flags/au.svg", label: "Australia" },
];

/* ------------------------------------------------------------------ */
/*  Network connections (index pairs into markerData)                   */
/* ------------------------------------------------------------------ */
// Every point connected to every other point (full mesh)
const connections: [number, number][] = [];
for (let i = 0; i < 6; i++) {
  for (let j = i + 1; j < 6; j++) {
    connections.push([i, j]);
  }
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */
const GLOBE_THETA = 0.25;
const ARC_SEGMENTS = 50;
const ARC_MAX_HEIGHT = 0.12;

/* ------------------------------------------------------------------ */
/*  Math helpers                                                       */
/* ------------------------------------------------------------------ */

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

/** Project lat/lng + optional altitude to 2D position on the globe */
function projectToGlobe(
  location: [number, number],
  phi: number,
  altitude = 0,
): { x: number; y: number; visible: boolean } {
  const latRad = (location[0] * Math.PI) / 180;
  const lngRad = (location[1] * Math.PI) / 180 - Math.PI;
  const cosLat = Math.cos(latRad);

  const px = -cosLat * Math.cos(lngRad);
  const py = Math.sin(latRad);
  const pz = cosLat * Math.sin(lngRad);

  const r = 0.85 + altitude;
  const sx = px * r;
  const sy = py * r;
  const sz = pz * r;

  const cp = Math.cos(phi);
  const sp = Math.sin(phi);
  const ct = Math.cos(GLOBE_THETA);
  const st = Math.sin(GLOBE_THETA);

  const x2d = cp * sx + sp * sz;
  const y2d = sp * st * sx + ct * sy - cp * st * sz;
  const z = -sp * ct * sx + st * sy + cp * ct * sz;

  return { x: (x2d + 1) / 2, y: (-y2d + 1) / 2, visible: z >= 0 };
}

/** Compute great-circle arc points with parabolic elevation */
function computeArcPoints(
  from: [number, number],
  to: [number, number],
): { lat: number; lng: number; alt: number }[] {
  const lat1 = (from[0] * Math.PI) / 180;
  const lng1 = (from[1] * Math.PI) / 180;
  const lat2 = (to[0] * Math.PI) / 180;
  const lng2 = (to[1] * Math.PI) / 180;

  const d = Math.acos(
    clamp(
      Math.sin(lat1) * Math.sin(lat2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1),
      -1,
      1,
    ),
  );

  const points: { lat: number; lng: number; alt: number }[] = [];
  for (let i = 0; i <= ARC_SEGMENTS; i++) {
    const t = i / ARC_SEGMENTS;
    let lat: number, lng: number;

    if (d < 0.001) {
      lat = from[0];
      lng = from[1];
    } else {
      const A = Math.sin((1 - t) * d) / Math.sin(d);
      const B = Math.sin(t * d) / Math.sin(d);
      const x = A * Math.cos(lat1) * Math.cos(lng1) + B * Math.cos(lat2) * Math.cos(lng2);
      const y = A * Math.cos(lat1) * Math.sin(lng1) + B * Math.cos(lat2) * Math.sin(lng2);
      const z = A * Math.sin(lat1) + B * Math.sin(lat2);
      lat = Math.atan2(z, Math.sqrt(x * x + y * y)) * (180 / Math.PI);
      lng = Math.atan2(y, x) * (180 / Math.PI);
    }

    // Parabolic arc — peaks at midpoint
    const alt = ARC_MAX_HEIGHT * 4 * t * (1 - t);
    points.push({ lat, lng, alt });
  }
  return points;
}

/* ------------------------------------------------------------------ */
/*  Globe component                                                    */
/* ------------------------------------------------------------------ */

function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const labelsContainer = labelsRef.current;
    if (!container || !labelsContainer) return;

    let destroyed = false;
    let globe: ReturnType<typeof createGlobe> | null = null;
    let animFrame = 0;

    // Pre-compute arc geometries (never changes)
    const arcs = connections.map(([fromIdx, toIdx]) =>
      computeArcPoints(markerData[fromIdx].location, markerData[toIdx].location),
    );

    // Create label DOM elements (managed outside React for perf)
    const labelEls = new Map<string, HTMLDivElement>();
    markerData.forEach((m) => {
      const el = document.createElement("div");
      el.style.cssText =
        "position:absolute;display:flex;align-items:center;gap:8px;z-index:20;" +
        "pointer-events:none;transform:translate(6px,-50%);transition:opacity 0.3s;opacity:0;white-space:nowrap;";
      el.innerHTML =
        `<img src="${m.flag}" alt="${m.label}" style="width:30px;height:30px;border-radius:5px;box-shadow:0 2px 6px rgba(0,0,0,.18);" />` +
        `<span style="font-size:14px;font-weight:700;background:rgba(255,255,255,.95);backdrop-filter:blur(8px);` +
        `padding:4px 14px;border-radius:9999px;box-shadow:0 2px 8px rgba(0,0,0,.12);color:#5a3555;letter-spacing:0.02em;">${m.label}</span>`;
      labelsContainer.appendChild(el);
      labelEls.set(m.id, el);
    });

    const timer = setTimeout(() => {
      if (destroyed) return;

      const dpr = window.devicePixelRatio || 1;

      // --- Cobe canvas ---
      const canvas = document.createElement("canvas");
      canvas.style.cssText =
        "width:100%;height:100%;cursor:grab;position:relative;z-index:10;";
      container.appendChild(canvas);

      // --- Arc overlay canvas ---
      const arcCanvas = document.createElement("canvas");
      arcCanvas.style.cssText =
        "position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:12;";
      container.appendChild(arcCanvas);
      const arcCtx = arcCanvas.getContext("2d")!;

      const initWidth = container.offsetWidth || 560;
      arcCanvas.width = Math.round(initWidth * dpr);
      arcCanvas.height = Math.round(initWidth * dpr);

      globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: initWidth * 2,
        height: initWidth * 2,
        phi: 0,
        theta: GLOBE_THETA,
        dark: 0,
        diffuse: 3,
        mapSamples: 40000,
        mapBrightness: 1.2,
        baseColor: [0.94, 0.88, 0.94],
        markerColor: [0.76, 0.29, 0.68],
        glowColor: [0.96, 0.92, 0.96],
        markers: markerData.map((m) => ({
          location: m.location,
          size: m.size,
          id: m.id,
        })),
      });

      // --- Pointer events ---
      canvas.addEventListener("pointerdown", (e) => {
        pointerInteracting.current =
          e.clientX - pointerInteractionMovement.current;
        canvas.style.cursor = "grabbing";
      });
      canvas.addEventListener("pointerup", () => {
        pointerInteracting.current = null;
        canvas.style.cursor = "grab";
      });
      canvas.addEventListener("pointerout", () => {
        pointerInteracting.current = null;
        canvas.style.cursor = "grab";
      });
      canvas.addEventListener("mousemove", (e) => {
        if (pointerInteracting.current !== null) {
          pointerInteractionMovement.current =
            (e.clientX - pointerInteracting.current) / 100;
        }
      });
      canvas.addEventListener("touchmove", (e) => {
        if (pointerInteracting.current !== null && e.touches[0]) {
          pointerInteractionMovement.current =
            (e.touches[0].clientX - pointerInteracting.current) / 100;
        }
      });

      // --- Animation loop ---
      let lastCanvasW = arcCanvas.width;

      function animate() {
        if (destroyed || !globe) return;
        if (!pointerInteracting.current) {
          phiRef.current += 0.003;
        }

        const currentPhi =
          phiRef.current + pointerInteractionMovement.current;
        const containerW = container?.offsetWidth || 560;

        // Update cobe globe
        globe.update({
          phi: currentPhi,
          width: containerW * 2,
          height: containerW * 2,
        });

        // --- Resize arc canvas if needed ---
        const canvasW = Math.round(containerW * dpr);
        if (canvasW !== lastCanvasW) {
          arcCanvas.width = canvasW;
          arcCanvas.height = canvasW;
          lastCanvasW = canvasW;
        }

        // --- Draw arc overlays ---
        arcCtx.clearRect(0, 0, canvasW, canvasW);
        const now = Date.now();

        // Draw each connection arc
        arcs.forEach((arcPoints, connIdx) => {
          // Project all arc points
          const projected = arcPoints.map((p) =>
            projectToGlobe([p.lat, p.lng], currentPhi, p.alt),
          );

          // Build visible path segments
          const drawPath = () => {
            arcCtx.beginPath();
            let drawing = false;
            for (let i = 0; i < projected.length; i++) {
              const p = projected[i];
              if (!p.visible) { drawing = false; continue; }
              const px = p.x * canvasW;
              const py = p.y * canvasW;
              if (!drawing) { arcCtx.moveTo(px, py); drawing = true; }
              else { arcCtx.lineTo(px, py); }
            }
          };

          // Glow pass (wide + soft)
          drawPath();
          arcCtx.strokeStyle = "rgba(193, 131, 184, 0.06)";
          arcCtx.lineWidth = 4 * dpr;
          arcCtx.stroke();

          // Main arc line
          drawPath();
          arcCtx.strokeStyle = "rgba(124, 74, 118, 0.2)";
          arcCtx.lineWidth = 1 * dpr;
          arcCtx.stroke();

          // --- Traveling dot ---
          const speed = 3500 + connIdx * 300;
          const phase = ((now / speed + connIdx * 0.07) % 1);
          const idx = Math.floor(phase * (projected.length - 1));
          const dot = projected[clamp(idx, 0, projected.length - 1)];

          if (dot && dot.visible) {
            const dx = dot.x * canvasW;
            const dy = dot.y * canvasW;

            // Radial glow
            const grad = arcCtx.createRadialGradient(dx, dy, 0, dx, dy, 6 * dpr);
            grad.addColorStop(0, "rgba(193, 131, 184, 0.5)");
            grad.addColorStop(1, "rgba(193, 131, 184, 0)");
            arcCtx.beginPath();
            arcCtx.arc(dx, dy, 6 * dpr, 0, Math.PI * 2);
            arcCtx.fillStyle = grad;
            arcCtx.fill();

            // Core dot
            arcCtx.beginPath();
            arcCtx.arc(dx, dy, 1.8 * dpr, 0, Math.PI * 2);
            arcCtx.fillStyle = "rgba(193, 131, 184, 0.85)";
            arcCtx.fill();
          }
        });

        // --- Pulsing halos at each marker ---
        markerData.forEach((m) => {
          const pos = projectToGlobe(m.location, currentPhi);
          if (!pos.visible) return;

          const px = pos.x * canvasW;
          const py = pos.y * canvasW;

          // Double-ring ripple
          for (let ring = 0; ring < 2; ring++) {
            const phase = ((now / 2200 + ring * 0.45) % 1);
            const radius = (4 + phase * 18) * dpr;
            const alpha = 0.35 * (1 - phase);

            arcCtx.beginPath();
            arcCtx.arc(px, py, radius, 0, Math.PI * 2);
            arcCtx.strokeStyle = `rgba(124, 74, 118, ${alpha})`;
            arcCtx.lineWidth = 1.2 * dpr;
            arcCtx.stroke();
          }

          // Solid center dot
          arcCtx.beginPath();
          arcCtx.arc(px, py, 3.5 * dpr, 0, Math.PI * 2);
          arcCtx.fillStyle = "rgba(124, 74, 118, 0.65)";
          arcCtx.fill();
        });

        // --- Update HTML labels ---
        markerData.forEach((m) => {
          const el = labelEls.get(m.id);
          if (!el) return;
          const pos = projectToGlobe(m.location, currentPhi);
          el.style.left = `${pos.x * 100}%`;
          el.style.top = `${pos.y * 100}%`;
          el.style.opacity = pos.visible ? "1" : "0";
        });

        animFrame = requestAnimationFrame(animate);
      }

      animFrame = requestAnimationFrame(animate);
    }, 50);

    return () => {
      destroyed = true;
      clearTimeout(timer);
      cancelAnimationFrame(animFrame);
      if (globe) {
        try { globe.destroy(); } catch { /* safe */ }
        globe = null;
      }
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      labelEls.forEach((el) => el.remove());
      labelEls.clear();
    };
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[680px] mx-auto">
      {/* Glow behind globe */}
      <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-brand/10 via-brand-soft/20 to-transparent blur-3xl" />

      {/* Container for cobe canvas + arc overlay */}
      <div ref={containerRef} className="w-full h-full relative z-10" />

      {/* Labels overlay — same dimensions, projected here */}
      <div
        ref={labelsRef}
        className="absolute inset-0 z-20 pointer-events-none overflow-visible"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero section                                                       */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Animated counter                                                    */
/* ------------------------------------------------------------------ */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let frame = 0;
          const totalFrames = 60;
          const step = () => {
            frame++;
            const progress = Math.min(frame / totalFrames, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = `${Math.round(eased * target)}${suffix}`;
            if (frame < totalFrames) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function Hero() {
  const isMobile = useIsMobile();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-tint via-background to-background">
      {/* Gradient orbs — static on mobile, animated on desktop */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-[100px] opacity-80"
        style={{ background: "radial-gradient(circle, rgba(193,131,184,0.12), transparent 70%)" }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full blur-[80px] opacity-60"
        style={{ background: "radial-gradient(circle, rgba(124,74,118,0.08), transparent 70%)" }}
      />

      {/* Chevron decorations */}
      <div className="absolute top-16 -left-20 font-heading text-[14rem] font-bold text-brand/[0.03] select-none pointer-events-none leading-none">
        &rsaquo;
      </div>
      <div className="absolute bottom-10 right-0 font-heading text-[10rem] font-bold text-brand/[0.03] select-none pointer-events-none leading-none">
        &rsaquo;
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-6 gap-1.5">
              <ChevronRight className="size-3" />
              Multi-Country Virtual Accounting & Tax Advisory
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
              <span className="block">MODERN</span>
              <span className="block">ACCOUNTING</span>
              <span className="block text-primary">&amp; TAX SOLUTIONS</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mt-2">
                for Businesses Across the Globe
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              We enhance your operations and efficiency through business
              intelligence, human judgment, and technology.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <ConsultationModal
                trigger={
                  <Button size="lg" className="shadow-lg shadow-primary/20">
                    Book a Consultation
                    <ChevronRight className="size-4" />
                  </Button>
                }
              />
            </div>

            {/* Animated stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-6 sm:gap-10 mt-10 pt-8 border-t border-border/60"
            >
              {[
                { value: 150, suffix: "+", label: "Clients Served" },
                { value: 6, suffix: "+", label: "Countries" },
                { value: 5, suffix: "+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground font-heading">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Globe side — skipped on mobile for performance */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <Globe />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
