"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import type { Stat } from "../../types/profile";
import { BentoCard } from "../BentoCard";

interface StatCardProps {
  stat: Stat;
  delay?: number;
}

function parseStatValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

function useCountUp(target: number, trigger: boolean, duration = 1200): number {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    if (target === 0) { setCurrent(0); return; }

    const start = performance.now();
    let raf: number;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, trigger, duration]);

  return current;
}

export function StatCard({ stat, delay }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const { num, suffix } = parseStatValue(stat.value);

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) setInView(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersect]);

  const displayed = useCountUp(num, inView);

  return (
    <BentoCard className="items-center justify-center text-center" delay={delay}>
      <div ref={ref}>
        <p className="text-3xl font-bold">
          {inView ? displayed : 0}
          {suffix}
        </p>
        <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
      </div>
    </BentoCard>
  );
}
