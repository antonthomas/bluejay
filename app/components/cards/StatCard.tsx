import type { Stat } from "../../types/profile";
import { BentoCard } from "../BentoCard";

interface StatCardProps {
  stat: Stat;
  delay?: number;
}

export function StatCard({ stat, delay }: StatCardProps) {
  return (
    <BentoCard className="items-center justify-center text-center" delay={delay}>
      <p className="text-3xl font-bold">{stat.value}</p>
      <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
    </BentoCard>
  );
}
