"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { BentoCard } from "../BentoCard";

interface ProfileCardProps {
  name: string;
  location: string;
  languages: string[];
  linkedin: string;
  email: string;
  delay?: number;
}

export function ProfileCard({
  name,
  location,
  languages,
  linkedin,
  email,
  delay,
}: ProfileCardProps) {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const handler = () => {
      setHighlight(true);
      setTimeout(() => setHighlight(false), 1500);
    };
    window.addEventListener("highlight-contact", handler);
    return () => window.removeEventListener("highlight-contact", handler);
  }, []);

  const buttonBase =
    "flex h-9 w-9 items-center justify-center rounded-full border text-xs transition-all duration-500 ease-in";
  const buttonIdle =
    "border-card-border text-text-muted hover:border-text-dim hover:text-white";
  const buttonGlow =
    "border-accent text-white shadow-[0_0_12px_rgba(99,102,241,0.5)]";

  const cardHighlight = highlight
    ? "!border-accent shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-500 ease-in"
    : "transition-all duration-500 ease-in";

  return (
    <BentoCard
      rowSpan={2}
      className={`items-center justify-center gap-4 text-center ${cardHighlight}`}
      delay={delay}
      id="profile-card"
    >
      <Image
        src="/picture.jpeg"
        alt={name}
        width={112}
        height={112}
        className="h-28 w-28 rounded-full object-cover"
        priority
      />
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-text-muted">{location}</p>
      </div>
      <span className="mt-1 text-sm text-text-muted">
        {languages.join(" · ")}
      </span>
      <div className="mt-2 flex gap-4">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonBase} ${highlight ? buttonGlow : buttonIdle}`}
        >
          <FaLinkedinIn size={14} />
        </a>
        <a
          href={`mailto:${email}`}
          className={`${buttonBase} ${highlight ? buttonGlow : buttonIdle}`}
        >
          <FaEnvelope size={14} />
        </a>
      </div>
    </BentoCard>
  );
}
