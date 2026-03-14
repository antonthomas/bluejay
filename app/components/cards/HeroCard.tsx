"use client";

import { BentoCard } from "../BentoCard";

interface HeroCardProps {
  name: string;
  title: string;
  summary: string;
  delay?: number;
}

export function HeroCard({ name, title, summary, delay }: HeroCardProps) {
  const firstName = name.split(" ")[0];

  const handleGetInTouch = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const profileCard = document.getElementById("profile-card");
    if (profileCard) {
      profileCard.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("highlight-contact"));
      }, 100);
    }
  };

  return (
    <BentoCard colSpan={2} rowSpan={2} delay={delay}>
      <div className="flex h-full flex-col justify-between gap-6">
        <span className="text-sm uppercase tracking-widest text-text-muted">
          {title}
        </span>
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Hi, I&apos;m {firstName}
            <br />
            <span className="text-text-muted">I build products from</span>
            <br />
            <span className="text-text-muted">blank canvas to scale.</span>
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
            className="rounded-full border border-card-border px-6 py-2.5 text-sm font-medium text-text-muted transition-colors hover:border-text-dim"
          >
            View Experience
          </a>
        </div>
      </div>
    </BentoCard>
  );
}
