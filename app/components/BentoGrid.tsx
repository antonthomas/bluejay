interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div
      className={`mx-auto grid max-w-[1200px] grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:auto-rows-[minmax(80px,auto)] lg:grid-cols-3 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
