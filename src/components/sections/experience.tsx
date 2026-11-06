import type { ReactNode } from "react";
import { certifications, education, experience, highlights, languages } from "@/data/profile";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { SpotlightCard } from "../spotlight-card";

function Card({ title, children, delay }: { title: string; children: ReactNode; delay: number }) {
  return (
    <Reveal delay={delay}>
      <SpotlightCard className="h-full p-6">
        <p className="mb-4 font-mono text-xs tracking-widest text-dim uppercase">{title}</p>
        {children}
      </SpotlightCard>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section id="experiencia" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="04"
        label="Experiência"
        title="Uma trajetória construindo e liderando."
        description="De desenvolvedor júnior a coordenador de times e engenheiro sênior no mercado financeiro."
      />

      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <ol className="relative border-l border-line pl-8 sm:pl-10">
          {experience.map((e, i) => (
            <Reveal key={e.company + e.role} as="li" delay={i * 60} className="group relative pb-10 last:pb-0">
              <span
                className={`absolute top-2 -left-[37px] size-[9px] rounded-full sm:-left-[45px] ${
                  e.current ? "bg-accent-3 ring-4 ring-accent-3/15 animate-pulse-dot" : "bg-line ring-4 ring-bg group-hover:bg-accent"
                }`}
              />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className={`font-mono text-xs ${e.current ? "text-accent-3" : "text-dim"}`}>{e.period}</span>
                {e.location && <span className="text-xs text-dim">· {e.location}</span>}
              </div>
              <h3 className="mt-1.5 text-lg font-semibold text-fg sm:text-xl">
                {e.role} <span className="font-normal text-muted">@ {e.company}</span>
              </h3>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted text-pretty">{e.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {e.tags.map((t) => (
                  <span key={t} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
          <Card title="Formação" delay={0}>
            <ul className="space-y-4">
              {education.map((ed) => (
                <li key={ed.title}>
                  <p className="text-fg">{ed.title}</p>
                  <p className="text-sm text-muted">
                    {ed.place} <span className="text-dim">· {ed.kind} · {ed.period}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Certificações" delay={100}>
            <ul className="flex flex-wrap gap-2">
              {certifications.map((c) => (
                <li key={c} className="rounded-lg border border-line bg-surface-2/70 px-2.5 py-1 text-sm text-fg/90">
                  {c}
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Idiomas & destaques" delay={200}>
            <ul className="space-y-2 text-sm">
              {languages.map((l) => (
                <li key={l.name} className="flex justify-between gap-4">
                  <span className="text-fg">{l.name}</span>
                  <span className="text-dim">{l.level}</span>
                </li>
              ))}
              {highlights.map((h) => (
                <li key={h} className="pt-2 text-accent-2">
                  ✦ {h}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
