import { BentoCard } from "../BentoCard";

interface FooterCardProps {
  copyrightName: string;
  linkedin: string;
  email: string;
  delay?: number;
}

export function FooterCard({ copyrightName: name, linkedin, email, delay }: FooterCardProps) {
  return (
    <BentoCard colSpan={3} className="justify-between flex-row" delay={delay}>
      <div className="flex w-full gap-4 sm:flex-row sm:items-center sm:justify-between">
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
