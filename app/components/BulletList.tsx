interface BulletListProps {
  items: string[];
}

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm">
          <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}
