export interface Stat {
  value: string;
  label: string;
}

export interface TechItem {
  name: string;
  color: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  languages: string[];
  summary: string;
  currentStatus: string;
  availableForWork: boolean;
  stats: Stat[];
  techStack: TechItem[];
  experience: Experience[];
  services: string[];
  education: Education[];
  certifications: string[];
}
