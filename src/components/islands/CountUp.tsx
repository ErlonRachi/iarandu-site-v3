import { useEffect, useRef, useState } from "react";

/**
 * CountUp — animates a number from 0 to its target when scrolled into view.
 * Used in the enterprise stat band. Reduced-motion → shows the final value.
 */
export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1600,
  decimals = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVal(to);
      return;
    }

    let raf = 0;
    let started = false;
    const ease = (x: number) => 1 - Math.pow(1 - x, 3);

    const run = (start: number) => {
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        setVal(to * ease(p));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !started) {
          started = true;
          run(performance.now());
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [to, duration]);

  const display =
    decimals > 0 ? val.toFixed(decimals) : Math.round(val).toString();

  return (
    <span ref={ref} className="stat-num">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
