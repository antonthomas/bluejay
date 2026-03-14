import type { Experience } from "../../types/profile";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div
      className="flex flex-col justify-between gap-3 rounded-xl border border-card-border p-5 transition-colors hover:border-text-dim"
      style={{
        background: `linear-gradient(to bottom right, ${experience.gradientFrom}, ${experience.gradientTo})`,
      }}
    >
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs text-text-muted">
            {experience.period}
          </span>
        </div>
        <h4 className="text-base font-semibold">{experience.company}</h4>
        <p className="mb-2 text-sm text-[#d4d4d4]">{experience.role}</p>
        <p className="text-sm leading-relaxed text-text-muted">
          {experience.description}
        </p>
      </div>
    </div>
  );
}
