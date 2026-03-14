"use client";

import { useRef, useCallback } from "react";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2 | 3;
  id?: string;
  delay?: number;
}

const colSpanClass = {
  1: "",
  2: "col-span-2 max-lg:col-span-2 max-sm:col-span-1",
  3: "col-span-3 max-lg:col-span-2 max-sm:col-span-1",
} as const;

const rowSpanClass = {
  1: "",
  2: "row-span-2 max-sm:row-span-1",
  3: "row-span-3 max-sm:row-span-1",
} as const;

export function BentoCard({
  children,
  className = "",
  colSpan = 1,
  rowSpan = 1,
  id,
  delay = 0,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(0, 153, 255, 0.06), transparent 60%)`;
    glow.style.opacity = "1";
  }, []);

  const handleMouseLeave = useCallback(() => {
    const glow = glowRef.current;
    if (glow) glow.style.opacity = "0";
  }, []);

  const classes = [
    "bg-card-bg border border-card-border rounded-2xl p-7 flex flex-col justify-between overflow-hidden relative transition-[border-color,transform] duration-300 hover:border-[#2a2a2a]",
    colSpanClass[colSpan],
    rowSpanClass[rowSpan],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={cardRef}
      id={id}
      className={classes}
      style={{
        opacity: 0,
        animation: `card-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s forwards`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{ opacity: 0 }}
      />
      {children}
    </div>
  );
}
