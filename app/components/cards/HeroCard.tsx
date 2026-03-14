"use client";

import { BentoCard } from "../BentoCard";

interface HeroCardProps {
  name: string;
  title: string;
  summary: string;
  delay?: number;
}

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 18) return "Good afternoon";
  if (hour >= 18 && hour < 22) return "Good evening";
  return "Hey there, night owl";
}

export function HeroCard({ name, title, summary, delay }: HeroCardProps) {
  const firstName = name.split(" ")[0];
  const greeting = getGreeting();

  const scrollTo = (
    id: string,
    onScroll?: () => void,
  ): React.MouseEventHandler<HTMLAnchorElement> => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      onScroll?.();
    }
  };

  const handleGetInTouch = scrollTo("profile-card", () =>
    setTimeout(() => window.dispatchEvent(new CustomEvent("highlight-contact")), 100),
  );

  const handleViewExperience = scrollTo("experience");

  return (
    <BentoCard colSpan={2} rowSpan={2} delay={delay}>
      <div className="flex h-full flex-col justify-between gap-6">
        <span className="text-sm uppercase tracking-widest text-text-muted">
          {title}
        </span>
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            {greeting}, I&apos;m {firstName}
            <br />
            <span className="text-text-muted">I build products from</span>
            <br className="hidden md:block" />
            <span className="text-text-muted"> blank canvas to scale.</span>
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-text-muted">
            {summary}
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="#profile-card"
            onClick={handleGetInTouch}
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            onClick={handleViewExperience}
            className="rounded-full border border-card-border px-6 py-2.5 text-sm font-medium text-text-muted transition-colors hover:border-text-dim"
          >
            View Experience
          </a>
        </div>
      </div>
    </BentoCard>
  );
}
