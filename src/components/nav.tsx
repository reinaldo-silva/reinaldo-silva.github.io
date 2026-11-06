"use client";

import { useEffect, useState } from "react";
import { CommandIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import { profile } from "@/data/profile";
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
  const [menuOpen, setMenuOpen] = useState(false);

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
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4">
      <nav
        className={`flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border px-2 py-2 transition-all duration-500 ${
          scrolled || menuOpen
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
          className="hidden items-center md:flex gap-2 rounded-full border border-line bg-surface-2/80 px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/40 hover:text-fg"
          aria-label="Abrir menu de comandos"
        >
          <CommandIcon width={14} height={14} />
          <span className="font-mono">K</span>
        </button>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="relative grid size-10 place-items-center rounded-full border border-line bg-surface-2/80 md:hidden"
        >
          <span
            className={`absolute h-px w-4 bg-fg transition-transform duration-300 ${menuOpen ? "rotate-45" : "-translate-y-[3px]"}`}
          />
          <span
            className={`absolute h-px w-4 bg-fg transition-transform duration-300 ${menuOpen ? "-rotate-45" : "translate-y-[3px]"}`}
          />
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 -z-10 bg-bg/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-6 pt-28 pb-10">
          <ul className="space-y-1">
            {sections.map((s, i) => (
              <li
                key={s.id}
                className={`transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: menuOpen ? `${80 + i * 50}ms` : "0ms" }}
              >
                <a
                  href={`#${s.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-4 py-3 text-3xl font-semibold tracking-tight text-fg"
                >
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            {[
              { href: profile.github, label: "GitHub", Icon: GithubIcon },
              { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
              { href: `mailto:${profile.email}`, label: "E-mail", Icon: MailIcon },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid size-12 place-items-center rounded-full border border-line text-muted"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
