"use client";

import {
  SiNestjs,
  SiVuedotjs,
  SiAngular,
  SiTypescript,
  SiDotnet,
  SiNodedotjs,
  SiGooglecloud,
  SiFigma,
} from "react-icons/si";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  NestJS: SiNestjs,
  "Vue.js": SiVuedotjs,
  Angular: SiAngular,
  TypeScript: SiTypescript,
  ".NET": SiDotnet,
  "Node.js": SiNodedotjs,
  GCP: SiGooglecloud,
  Figma: SiFigma,
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
