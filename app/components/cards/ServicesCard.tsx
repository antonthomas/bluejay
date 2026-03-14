import { BentoCard } from "../BentoCard";
import { SectionHeading } from "../SectionHeading";
import { BulletList } from "../BulletList";

interface ServicesCardProps {
  services: string[];
  delay?: number;
}

export function ServicesCard({ services, delay }: ServicesCardProps) {
  return (
    <BentoCard delay={delay}>
      <SectionHeading>What I Do</SectionHeading>
      <BulletList items={services} />
    </BentoCard>
  );
}
