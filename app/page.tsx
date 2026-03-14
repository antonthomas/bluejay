import type { Profile } from "./types/profile";
import { BentoGrid } from "./components/BentoGrid";
import { HeroCard } from "./components/cards/HeroCard";
import { ProfileCard } from "./components/cards/ProfileCard";
import { StatCard } from "./components/cards/StatCard";
import { TechStackCard } from "./components/cards/TechStackCard";
import { StatusCard } from "./components/cards/StatusCard";
import { ExperienceCard } from "./components/cards/ExperienceCard";
import { ServicesCard } from "./components/cards/ServicesCard";
import { EducationCard } from "./components/cards/EducationCard";
import { ClientsCard } from "./components/cards/ClientsCard";
import { FooterCard } from "./components/cards/FooterCard";
import profileData from "./data/profile.json";

const profile = profileData satisfies Profile;

export default function Home() {
  return (
    <div className="min-h-screen bg-black py-8 md:py-16">
      <BentoGrid>
        <HeroCard
          name={profile.name}
          title={profile.title}
          summary={profile.summary}
          delay={0}
        />
        <ProfileCard
          name={profile.name}
          location={profile.location}
          languages={profile.languages}
          linkedin={profile.linkedin}
          email={profile.email}
          delay={0.1}
        />

        {profile.stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} delay={0.2 + i * 0.1} />
        ))}

        <TechStackCard techStack={profile.techStack} delay={0.5} />
        <StatusCard
          currentStatus={profile.currentStatus}
          availableForWork={profile.availableForWork}
          delay={0.6}
        />

        <ExperienceCard experience={profile.experience} delay={0.7} />

        <ServicesCard services={profile.services} delay={0.8} />
        <EducationCard education={profile.education} delay={0.9} />
        <ClientsCard clients={profile.clients} delay={1.0} />

        <FooterCard
          name={profile.name}
          linkedin={profile.linkedin}
          email={profile.email}
          delay={1.1}
        />
      </BentoGrid>
    </div>
  );
}
