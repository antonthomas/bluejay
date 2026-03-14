import type { Education } from "../../types/profile";
import { BentoCard } from "../BentoCard";
import { SectionHeading } from "../SectionHeading";

interface EducationCardProps {
  education: Education[];
  delay?: number;
}

export function EducationCard({ education, delay }: EducationCardProps) {
  return (
    <BentoCard delay={delay}>
      <SectionHeading>Education</SectionHeading>
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.institution}>
            <p className="text-sm font-medium">{edu.institution}</p>
            <p className="text-xs text-text-muted">{edu.degree}</p>
            <p className="text-xs text-text-dim">{edu.period}</p>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
