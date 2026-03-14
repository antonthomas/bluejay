"use client";

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
  return (
    <BentoCard
      rowSpan={2}
      className="items-center justify-center gap-4 text-center"
      delay={delay}
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
          className="flex h-9 w-9 items-center justify-center rounded-full border border-card-border text-xs text-text-muted transition-colors hover:border-text-dim hover:text-white"
        >
          <FaLinkedinIn size={14} />
        </a>
        <a
          href={`mailto:${email}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-card-border text-xs text-text-muted transition-colors hover:border-text-dim hover:text-white"
        >
          <FaEnvelope size={14} />
        </a>
      </div>
    </BentoCard>
  );
}
