import { FaCheck } from "react-icons/fa";

interface BulletListProps {
  items: string[];
}

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm">
          <FaCheck className="shrink-0 text-[#4ade80]" size={10} />
          {item}
        </li>
      ))}
    </ul>
  );
}
