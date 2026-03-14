import { BentoCard } from "../BentoCard";
import { SectionHeading } from "../SectionHeading";
import { BulletList } from "../BulletList";

interface CertificationsCardProps {
  certifications: string[];
  delay?: number;
}

export function CertificationsCard({ certifications, delay }: CertificationsCardProps) {
  return (
    <BentoCard delay={delay}>
      <SectionHeading>Certifications</SectionHeading>
      <BulletList items={certifications} />
    </BentoCard>
  );
}
