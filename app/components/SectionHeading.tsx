interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  children,
  className = "mb-4",
}: SectionHeadingProps) {
  return (
    <h3
      className={`text-sm uppercase tracking-widest text-text-muted ${className}`}
    >
      {children}
    </h3>
  );
}
