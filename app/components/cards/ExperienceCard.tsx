import type { Experience } from "../../types/profile";
import { BentoCard } from "../BentoCard";
import { SectionHeading } from "../SectionHeading";
import { ExperienceItem } from "./ExperienceItem";

interface ExperienceCardProps {
  experience: Experience[];
  delay?: number;
}

export function ExperienceCard({ experience, delay }: ExperienceCardProps) {
  return (
    <BentoCard colSpan={3} id="experience" delay={delay}>
      <SectionHeading className="mb-5">Experience</SectionHeading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {experience.map((exp) => (
          <ExperienceItem key={exp.company} experience={exp} />
        ))}
      </div>
    </BentoCard>
  );
}
