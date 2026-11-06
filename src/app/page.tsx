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
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 font-mono text-xs text-dim sm:flex-row">
          <p>
            © <CurrentYear /> {profile.name}
          </p>
          <p>
            Feito com Next.js + Tailwind · pressione <kbd className="rounded border border-line px-1">⌘K</kbd>
          </p>
        </div>
      </footer>
    </>
  );
}
