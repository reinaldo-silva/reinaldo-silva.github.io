"use client";

import { useEffect, useMemo, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from "react";
import { profile, projects } from "@/data/profile";
import { ArrowUpRight, CopyIcon, GithubIcon, HashIcon, LinkedinIcon, MailIcon, SearchIcon } from "./icons";

const EVENT = "open-command-menu";
export const openCommandMenu = () => window.dispatchEvent(new Event(EVENT));

type Item = {
  id: string;
  label: string;
  group: string;
  icon: ReactNode;
  hint?: string;
  run: () => void;
};

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
const open = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

export function CommandMenu() {
  const [isOpen, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const items = useMemo<Item[]>(
    () => [
      ...["sobre", "projetos", "stack", "experiencia", "contato"].map((id) => ({
        id: `go-${id}`,
        label: id === "experiencia" ? "Experiência" : id[0].toUpperCase() + id.slice(1),
        group: "Navegar",
        icon: <HashIcon width={16} height={16} />,
        run: () => go(id),
      })),
      ...projects.map((p) => ({
        id: `proj-${p.slug}`,
        label: p.name,
        hint: p.tagline,
        group: "Projetos",
        icon: <GithubIcon width={16} height={16} />,
        run: () => open(p.repo),
      })),
      {
        id: "copy-email",
        label: "Copiar e-mail",
        hint: profile.email,
        group: "Contato",
        icon: <CopyIcon width={16} height={16} />,
        run: () => {
          navigator.clipboard?.writeText(profile.email);
          setToast("E-mail copiado!");
        },
      },
      {
        id: "mail",
        label: "Enviar e-mail",
        group: "Contato",
        icon: <MailIcon width={16} height={16} />,
        run: () => (window.location.href = `mailto:${profile.email}`),
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        group: "Contato",
        icon: <LinkedinIcon width={16} height={16} />,
        run: () => open(profile.linkedin),
      },
      {
        id: "github",
        label: "GitHub",
        hint: `@${profile.githubUser}`,
        group: "Contato",
        icon: <GithubIcon width={16} height={16} />,
        run: () => open(profile.github),
      },
    ],
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) => `${i.label} ${i.hint ?? ""} ${i.group}`.toLowerCase().includes(q));
  }, [items, query]);

  useEffect(() => {
    const show = () => {
      setQuery("");
      setCursor(0);
      setOpen(true);
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setQuery("");
        setCursor(0);
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = show;
    window.addEventListener("keydown", onKey);
    window.addEventListener(EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(EVENT, onOpen);
    };
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 1800);
    return () => clearTimeout(t);
  }, [toast]);

  function select(item?: Item) {
    if (!item) return;
    setOpen(false);
    item.run();
  }

  function onInputKey(e: ReactKeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter") {
      select(filtered[cursor]);
    }
  }

  const groups = [...new Set(filtered.map((i) => i.group))];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center bg-black/60 px-4 pt-[15vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de comandos"
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface/95 shadow-2xl shadow-black/60"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <SearchIcon className="text-dim" />
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setCursor(0);
                }}
                onKeyDown={onInputKey}
                autoFocus
                placeholder="Digite um comando ou busque…"
                className="h-14 flex-1 bg-transparent text-sm text-fg outline-none placeholder:text-dim"
              />
              <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-dim">ESC</kbd>
            </div>
            <div className="max-h-[50vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-8 text-center text-sm text-dim">Nenhum resultado.</p>
              )}
              {groups.map((g) => (
                <div key={g} className="mb-1">
                  <p className="px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-widest text-dim">{g}</p>
                  {filtered
                    .filter((i) => i.group === g)
                    .map((item) => {
                      const idx = filtered.indexOf(item);
                      const on = idx === cursor;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onMouseMove={() => setCursor(idx)}
                          onClick={() => select(item)}
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                            on ? "bg-white/[0.06] text-fg" : "text-muted"
                          }`}
                        >
                          <span className={on ? "text-accent" : "text-dim"}>{item.icon}</span>
                          <span className="flex-1 truncate">{item.label}</span>
                          {item.hint && <span className="hidden truncate text-xs text-dim sm:block">{item.hint}</span>}
                          {on && <ArrowUpRight width={14} height={14} className="text-dim" />}
                        </button>
                      );
                    })}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 border-t border-line px-4 py-2.5 font-mono text-[10px] text-dim">
              <span>↑↓ navegar</span>
              <span>↵ selecionar</span>
              <span className="ml-auto">⌘K / Ctrl+K</span>
            </div>
          </div>
        </div>
      )}
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-fg shadow-xl">
          {toast}
        </div>
      )}
    </>
  );
}
