import type { TechItem } from "../../types/profile";
import { BentoCard } from "../BentoCard";
import { SectionHeading } from "../SectionHeading";
import { TechIcon } from "../TechIcon";

interface TechStackCardProps {
  techStack: TechItem[];
  delay?: number;
}

export function TechStackCard({ techStack, delay }: TechStackCardProps) {
  return (
    <BentoCard colSpan={2} delay={delay}>
      <SectionHeading className="mb-5">Tech Stack</SectionHeading>
      <div className="grid grid-cols-4 gap-3">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-2 rounded-xl border border-card-border bg-black p-3 transition-colors hover:border-text-dim"
          >
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              style={{ backgroundColor: tech.color + "22" }}
            >
              <TechIcon name={tech.name} color={tech.color} />
            </div>
            <span className="text-xs text-text-muted">{tech.name}</span>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
