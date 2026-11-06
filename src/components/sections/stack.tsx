import { stack } from "@/data/profile";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { SpotlightCard } from "../spotlight-card";

const all = stack.flatMap((g) => g.items);

export function Stack() {
  return (
    <section id="stack" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          label="Stack"
          title="Ferramentas do dia a dia."
          description="O ecossistema JavaScript/TypeScript é minha casa, com a infraestrutura necessária para levar tudo para produção."
        />
      </div>

      {/* Marquee */}
      <div className="relative mb-14 overflow-hidden border-y border-line bg-surface/40 py-5 [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
          {[...all, ...all].map((t, i) => (
            <span key={i} aria-hidden={i >= all.length} className="flex items-center gap-10 font-mono text-sm whitespace-nowrap text-muted">
              {t}
              <span className="text-dim">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((g, i) => (
          <Reveal key={g.group} delay={i * 90}>
            <SpotlightCard className="h-full p-6">
              <p className="mb-5 font-mono text-xs tracking-widest text-dim uppercase">
                <span className="text-accent">0{i + 1}.</span> {g.group}
              </p>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <li
                    key={t}
                    className="rounded-lg border border-line bg-surface-2/70 px-3 py-1.5 text-sm text-fg/90 transition-colors hover:border-accent/40 hover:text-fg"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
