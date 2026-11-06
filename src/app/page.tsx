import { CommandMenu } from "@/components/command-menu";
import { CurrentYear } from "@/components/live-date";
import { Nav } from "@/components/nav";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
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
