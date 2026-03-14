import { BentoCard } from "../BentoCard";

interface FooterCardProps {
  name: string;
  linkedin: string;
  email: string;
  delay?: number;
}

export function FooterCard({ name, linkedin, email, delay }: FooterCardProps) {
  return (
    <BentoCard colSpan={3} className="justify-between py-5" delay={delay}>
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${email}`}
            className="text-sm text-text-muted transition-colors hover:text-accent"
          >
            Email
          </a>
        </div>
      </div>
    </BentoCard>
  );
}
