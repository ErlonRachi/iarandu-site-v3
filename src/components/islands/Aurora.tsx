import { useEffect, useRef } from "react";

/**
 * Aurora — a living warm background. Large soft gradient blobs (urucum / verde /
 * soft terracotta) drift and breathe over the cream, with gentle mouse parallax.
 * Deliberately breaks the old "no animated gradient mesh" rule. Dependency-free
 * Canvas 2D, paused offscreen / when tab hidden, stilled under reduced-motion.
 *
 * Decorative: host is aria-hidden; the page never depends on it.
 */

type Blob = {
  hue: [number, number, number];
  ax: number; // amplitude x (fraction of w)
  ay: number;
  ox: number; // origin x (fraction)
  oy: number;
  r: number; // radius fraction
  sx: number; // speed x
  sy: number;
  px: number; // phase
  py: number;
  alpha: number;
};

const PALETTE: Array<[number, number, number]> = [
  [196, 96, 60], // urucum
  [214, 102, 58], // urucum bright
  [232, 155, 122], // urucum soft
  [110, 142, 94], // verde leaf
  [111, 159, 192], // sky (cool counterpoint)
];

export default function Aurora({ density = 5, intensity = 0.55 }: { density?: number; intensity?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0,
      h = 0,
      dpr = 1,
      t = 0,
      raf = 0,
      running = true;
    let mx = 0.5,
      my = 0.5,
      tmx = 0.5,
      tmy = 0.5;

    const blobs: Blob[] = Array.from({ length: density }, (_, i) => ({
      hue: PALETTE[i % PALETTE.length],
      ax: 0.16 + Math.random() * 0.18,
      ay: 0.14 + Math.random() * 0.16,
      ox: 0.2 + Math.random() * 0.6,
      oy: 0.2 + Math.random() * 0.6,
      r: 0.36 + Math.random() * 0.26,
      sx: 0.04 + Math.random() * 0.05,
      sy: 0.05 + Math.random() * 0.06,
      px: Math.random() * Math.PI * 2,
      py: Math.random() * Math.PI * 2,
      alpha: (0.16 + Math.random() * 0.16) * intensity,
    }));

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) render(0);
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;
      const par = (mx - 0.5) * 40;
      const parY = (my - 0.5) * 40;
      for (const b of blobs) {
        const cx = (b.ox + Math.sin(time * b.sx + b.px) * b.ax) * w + par;
        const cy = (b.oy + Math.cos(time * b.sy + b.py) * b.ay) * h + parY;
        const rad = b.r * Math.min(w, h) * (1.4 + 0.12 * Math.sin(time * 0.6 + b.px));
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
        const [r, gr, bl] = b.hue;
        g.addColorStop(0, `rgba(${r},${gr},${bl},${b.alpha})`);
        g.addColorStop(0.5, `rgba(${r},${gr},${bl},${b.alpha * 0.4})`);
        g.addColorStop(1, `rgba(${r},${gr},${bl},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const frame = () => {
      if (!running) return;
      t += 0.0045;
      render(t);
      raf = requestAnimationFrame(frame);
    };

    resize();

    const onMove = (e: MouseEvent) => {
      tmx = e.clientX / window.innerWidth;
      tmy = e.clientY / window.innerHeight;
    };

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(resize);
      ro.observe(canvas);
    } else {
      window.addEventListener("resize", resize);
    }

    if (reduce) {
      render(0);
      return () => {
        ro?.disconnect();
        window.removeEventListener("resize", resize);
      };
    }

    window.addEventListener("pointermove", onMove, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting ?? true;
        if (visible && document.visibilityState === "visible") {
          if (!running) {
            running = true;
            raf = requestAnimationFrame(frame);
          }
        } else {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0.01 },
    );
    io.observe(canvas);

    const onVis = () => {
      if (document.visibilityState === "hidden") {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(frame);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    raf = requestAnimationFrame(frame);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      ro?.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [density, intensity]);

  return <canvas ref={ref} aria-hidden="true" />;
}
