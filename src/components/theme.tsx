"use client";

import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";
const KEY = "theme";

/**
 * Roda no <head> antes da página pintar: aplica o tema salvo ou o do sistema,
 * evitando o "flash" de tema errado no carregamento.
 */
export const themeScript = `(function(){try{var t=localStorage.getItem("${KEY}");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}})()`;

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function subscribe(onChange: () => void) {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  // Segue o sistema enquanto a pessoa não escolheu um tema manualmente
  const mq = matchMedia("(prefers-color-scheme: dark)");
  const onSystem = (e: MediaQueryListEvent) => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(KEY);
    } catch {}
    if (!saved) applyTheme(e.matches ? "dark" : "light", false);
  };
  mq.addEventListener("change", onSystem);

  return () => {
    mo.disconnect();
    mq.removeEventListener("change", onSystem);
  };
}

function applyTheme(theme: Theme, persist = true) {
  const root = document.documentElement;
  root.classList.add("theme-transition");
  root.dataset.theme = theme;
  if (persist) {
    try {
      localStorage.setItem(KEY, theme);
    } catch {}
  }
  window.setTimeout(() => root.classList.remove("theme-transition"), 400);
}

export function toggleTheme() {
  applyTheme(readTheme() === "dark" ? "light" : "dark");
}

export function useTheme() {
  return useSyncExternalStore(subscribe, readTheme, () => null);
}

const SunIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
);

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useTheme();
  const next = theme === "dark" ? "claro" : "escuro";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Ativar tema ${next}`}
      title={`Tema ${next}`}
      className={`relative grid size-10 place-items-center overflow-hidden rounded-full border border-line bg-surface-2/80 text-muted transition-colors hover:border-accent/40 hover:text-fg md:size-8 ${className}`}
    >
      <span
        className={`absolute transition-all duration-500 ${
          theme === "dark" ? "translate-y-0 rotate-0 opacity-100" : "translate-y-6 rotate-90 opacity-0"
        }`}
      >
        <MoonIcon />
      </span>
      <span
        className={`absolute transition-all duration-500 ${
          theme === "light" ? "translate-y-0 rotate-0 opacity-100" : "-translate-y-6 -rotate-90 opacity-0"
        }`}
      >
        <SunIcon />
      </span>
    </button>
  );
}
