"use client";

import {
  SiNestjs,
  SiVuedotjs,
  SiAngular,
  SiTypescript,
  SiNodedotjs,
  SiGooglecloud,
  SiClaude,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  NestJS: SiNestjs,
  "Vue.js": SiVuedotjs,
  Angular: SiAngular,
  TypeScript: SiTypescript,
  AWS: FaAws,
  "Node.js": SiNodedotjs,
  "Google Cloud": SiGooglecloud,
  Claude: SiClaude,
};

interface TechIconProps {
  name: string;
  color: string;
}

export function TechIcon({ name, color }: TechIconProps) {
  const Icon = iconMap[name];

  if (!Icon) {
    return (
      <span className="text-xs font-bold" style={{ color }}>
        {name.slice(0, 2)}
      </span>
    );
  }

  return <Icon size={20} color={color} />;
}
