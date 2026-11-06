"use client";

import { useEffect, useState } from "react";
import { CommandIcon } from "./icons";
import { openCommandMenu } from "./command-menu";

export const sections = [
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "stack", label: "Stack" },
  { id: "experiencia", label: "Experiência" },
  { id: "contato", label: "Contato" },
];

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border px-2 py-2 transition-all duration-500 ${
          scrolled
            ? "border-line bg-surface/70 shadow-[0_8px_40px_-12px_rgb(0_0_0/0.8)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="group flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-sm text-fg"
        >
          <span className="grid size-6 place-items-center rounded-md bg-linear-to-br from-accent to-accent-2 text-[11px] font-bold text-bg">
            RS
          </span>
          <span className="hidden sm:inline">
            reinaldo<span className="text-dim">.dev</span>
          </span>
        </a>

        <ul className="hidden items-center md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active === s.id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {active === s.id && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-white/[0.06] ring-1 ring-white/10" />
                )}
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={openCommandMenu}
          className="flex items-center gap-2 rounded-full border border-line bg-surface-2/80 px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/40 hover:text-fg"
          aria-label="Abrir menu de comandos"
        >
          <CommandIcon width={14} height={14} />
          <span className="font-mono">K</span>
        </button>
      </nav>
    </header>
  );
}
