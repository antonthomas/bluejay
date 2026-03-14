import { BentoCard } from "../BentoCard";
import { SectionHeading } from "../SectionHeading";

interface StatusCardProps {
  currentStatus: string;
  availableForWork: boolean;
  delay?: number;
}

export function StatusCard({
  currentStatus,
  availableForWork,
  delay,
}: StatusCardProps) {
  return (
    <BentoCard delay={delay}>
      <SectionHeading className="mb-3">Currently</SectionHeading>
      <p className="text-lg font-medium leading-snug">{currentStatus}</p>
      {availableForWork && (
        <div className="mt-4 flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          <span className="text-sm text-green-500">
            Available for projects
          </span>
        </div>
      )}
    </BentoCard>
  );
}
