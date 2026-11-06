import { CommandMenu } from "@/components/command-menu";
import { CurrentYear } from "@/components/live-date";
import { Nav } from "@/components/nav";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { certifications, education, experience, profile } from "@/data/profile";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: profile.siteUrl,
  mainEntity: {
    "@type": "Person",
    name: profile.name,
    alternateName: "Reinaldo Silva Jr.",
    url: profile.siteUrl,
    image: `${profile.siteUrl}/opengraph-image.png`,
    jobTitle: profile.role,
    worksFor: { "@type": "Organization", name: profile.company },
    address: { "@type": "PostalAddress", addressLocality: "Bebedouro", addressRegion: "SP", addressCountry: "BR" },
    alumniOf: education.map((e) => ({ "@type": "EducationalOrganization", name: e.place })),
    hasCredential: certifications.map((c) => ({ "@type": "EducationalOccupationalCredential", name: c })),
    knowsAbout: ["React", "Next.js", "Node.js", "TypeScript", "AWS", ".NET", "Go", "PostgreSQL", "Serverless", "Micro Frontends"],
    knowsLanguage: ["pt-BR", "en"],
    sameAs: [profile.github, profile.linkedin],
    description: `${profile.role} no ${profile.company}. ${experience.length} experiências profissionais desde 2020.`,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Nav />
      <CommandMenu />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-center font-mono text-xs text-dim sm:flex-row sm:px-6">
          <p>
            © <CurrentYear /> {profile.name}
          </p>
          <p>
            Feito com Next.js + Tailwind<span className="hidden md:inline"> · pressione <kbd className="rounded border border-line px-1">⌘K</kbd></span>
          </p>
        </div>
      </footer>
    </>
  );
}
