import { BentoCard } from "../BentoCard";
import { SectionHeading } from "../SectionHeading";
import { BulletList } from "../BulletList";

interface ClientsCardProps {
  clients: string[];
  delay?: number;
}

export function ClientsCard({ clients, delay }: ClientsCardProps) {
  return (
    <BentoCard delay={delay}>
      <SectionHeading>Notable Clients</SectionHeading>
      <BulletList items={clients} />
    </BentoCard>
  );
}
