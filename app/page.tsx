import type { Profile } from "./types/profile";
import profileData from "./data/profile.json";

const profile: Profile = profileData;

export default function Home() {
  return (
    <div className="min-h-screen bg-black py-8 md:py-16">
      <div className="bento-grid">
        {/* Row 1: Hero + Profile */}
        <div className="bento-card col-span-2 row-span-2">
          <div className="flex flex-col justify-between h-full gap-6">
            <span className="text-text-muted text-sm tracking-widest uppercase">
              {profile.title}
            </span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Hi, I&apos;m {profile.name.split(" ")[0]}
                <br />
                <span className="text-text-muted">I build products from</span>
                <br />
                <span className="text-text-muted">blank canvas to scale.</span>
              </h1>
              <p className="text-text-muted mt-4 max-w-md text-base leading-relaxed">
                {profile.summary}
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="#contact"
                className="bg-accent text-white px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
              <a
                href="#experience"
                className="border border-card-border text-text-muted px-6 py-2.5 rounded-full text-sm font-medium hover:border-text-dim transition-colors"
              >
                View Experience
              </a>
            </div>
          </div>
        </div>

        <div className="bento-card row-span-2 flex flex-col items-center justify-center text-center gap-4">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center text-3xl font-bold">
            {profile.initials}
          </div>
          <div>
            <h2 className="text-lg font-semibold">{profile.name}</h2>
            <p className="text-text-muted text-sm">{profile.location}</p>
          </div>
          <div className="flex flex-col gap-1.5 mt-1 text-sm text-text-muted">
            <span>{profile.languages.join(" · ")}</span>
          </div>
          <div className="flex gap-4 mt-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-card-border flex items-center justify-center text-xs text-text-muted hover:text-white hover:border-text-dim transition-colors"
            >
              Li
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="w-9 h-9 rounded-full border border-card-border flex items-center justify-center text-xs text-text-muted hover:text-white hover:border-text-dim transition-colors"
            >
              @
            </a>
          </div>
        </div>

        {/* Row 2: Stats */}
        {profile.stats.map((stat) => (
          <div
            key={stat.label}
            className="bento-card flex-row items-center justify-center text-center"
          >
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-text-muted text-sm mt-1">{stat.label}</p>
          </div>
        ))}

        {/* Row 3: Tech Stack + Currently */}
        <div className="bento-card col-span-2">
          <h3 className="text-sm text-text-muted tracking-widest uppercase mb-5">
            Tech Stack
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {profile.techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-black border border-card-border rounded-xl p-3 flex flex-col items-center gap-2 hover:border-text-dim transition-colors"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: tech.color + "22",
                    color: tech.color,
                  }}
                >
                  {tech.name.slice(0, 2)}
                </div>
                <span className="text-xs text-text-muted">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bento-card">
          <h3 className="text-sm text-text-muted tracking-widest uppercase mb-3">
            Currently
          </h3>
          <p className="text-lg font-medium leading-snug">
            {profile.currentStatus}
          </p>
          {profile.availableForWork && (
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-green-500">
                Available for projects
              </span>
            </div>
          )}
        </div>

        {/* Row 4: Experience */}
        <div className="bento-card col-span-3" id="experience">
          <h3 className="text-sm text-text-muted tracking-widest uppercase mb-5">
            Experience
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {profile.experience.map((exp) => (
              <div
                key={exp.company}
                className={`bg-gradient-to-br ${exp.gradient} border border-card-border rounded-xl p-5 flex flex-col justify-between gap-3 hover:border-text-dim transition-colors`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-text-muted border border-card-border px-2.5 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold">{exp.company}</h4>
                  <p className="text-accent text-sm mb-2">{exp.role}</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 5: Services + Education + Clients */}
        <div className="bento-card">
          <h3 className="text-sm text-text-muted tracking-widest uppercase mb-4">
            What I Do
          </h3>
          <ul className="space-y-3">
            {profile.services.map((service) => (
              <li key={service} className="flex items-center gap-3 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div className="bento-card">
          <h3 className="text-sm text-text-muted tracking-widest uppercase mb-4">
            Education
          </h3>
          <div className="space-y-4">
            {profile.education.map((edu) => (
              <div key={edu.institution}>
                <p className="text-sm font-medium">{edu.institution}</p>
                <p className="text-text-muted text-xs">{edu.degree}</p>
                <p className="text-text-dim text-xs">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bento-card">
          <h3 className="text-sm text-text-muted tracking-widest uppercase mb-4">
            Notable Clients
          </h3>
          <ul className="space-y-3">
            {profile.clients.map((client) => (
              <li key={client} className="flex items-center gap-3 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                {client}
              </li>
            ))}
          </ul>
        </div>

        {/* Row 6: Contact */}
        <div className="bento-card col-span-3" id="contact">
          <h3 className="text-sm text-text-muted tracking-widest uppercase mb-4">
            Let&apos;s Work Together
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="bg-black border border-card-border rounded-xl px-4 py-3 text-sm text-white placeholder-text-dim outline-none focus:border-accent transition-colors"
              />
              <textarea
                placeholder="Tell me about your project..."
                rows={3}
                className="bg-black border border-card-border rounded-xl px-4 py-3 text-sm text-white placeholder-text-dim outline-none focus:border-accent transition-colors resize-none"
              />
              <button className="bg-accent text-white px-6 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity self-start">
                Send Message
              </button>
            </div>
            <div className="flex flex-col gap-3 text-sm sm:min-w-[200px]">
              <a
                href={`mailto:${profile.email}`}
                className="text-text-muted hover:text-accent transition-colors"
              >
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-text-dim">{profile.location}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bento-card col-span-3 flex-row items-center justify-between py-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
            <p className="text-text-muted text-sm">
              &copy; 2026 {profile.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted text-sm hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-text-muted text-sm hover:text-accent transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
