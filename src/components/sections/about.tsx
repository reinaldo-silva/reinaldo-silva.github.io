import type { ReactNode } from "react";
import { profile } from "@/data/profile";
import { Age } from "../live-date";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

const K = ({ children }: { children: ReactNode }) => <span className="text-accent-2">{children}</span>;
const S = ({ children }: { children: ReactNode }) => <span className="text-accent-3">&quot;{children}&quot;</span>;
const N = ({ children }: { children: ReactNode }) => <span className="text-[#f6c177]">{children}</span>;
const P = ({ children }: { children: ReactNode }) => <span className="text-dim">{children}</span>;

export function About() {
  return (
    <section id="sobre" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading index="01" label="Sobre mim" title="Do código à liderança técnica." />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i * 100} as="p" className="text-pretty">
              {p}
            </Reveal>
          ))}

          <Reveal delay={300} className="grid grid-cols-3 gap-3 pt-6">
            {profile.stats.map((s) => (
              <div key={s.k} className="rounded-xl border border-line bg-surface/60 p-4">
                <p className="text-2xl font-semibold text-fg">{s.k}</p>
                <p className="mt-1 text-xs text-dim">{s.v}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
              <span className="size-3 rounded-full bg-[#ff5f57]" />
              <span className="size-3 rounded-full bg-[#febc2e]" />
              <span className="size-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-dim">~/reinaldo — zsh</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 text-fg">
              <code>
                <span className="text-accent-3">❯</span> cat sobre.json{"\n"}
                <P>{"{"}</P>
                {"\n  "}
                <K>&quot;nome&quot;</K>
                <P>: </P>
                <S>{profile.name}</S>
                <P>,</P>
                {"\n  "}
                <K>&quot;cargo&quot;</K>
                <P>: </P>
                <S>{profile.role}</S>
                <P>,</P>
                {"\n  "}
                <K>&quot;empresa&quot;</K>
                <P>: </P>
                <S>{profile.company}</S>
                <P>,</P>
                {"\n  "}
                <K>&quot;idade&quot;</K>
                <P>: </P>
                <N>
                  <Age birthDate={profile.birthDate} />
                </N>
                <P>,</P>
                {"\n  "}
                <K>&quot;local&quot;</K>
                <P>: </P>
                <S>{profile.location}</S>
                <P>,</P>
                {"\n  "}
                <K>&quot;experiencia&quot;</K>
                <P>: [</P>
                <S>BTG</S>
                <P>, </P>
                <S>CI&amp;T</S>
                <P>, </P>
                <S>Okalab</S>
                <P>, </P>
                <S>Prevlife</S>
                <P>, </P>
                <S>Imobpower</S>
                <P>],</P>
                {"\n  "}
                <K>&quot;stack&quot;</K>
                <P>: [</P>
                <S>TypeScript</S>
                <P>, </P>
                <S>React</S>
                <P>, </P>
                <S>Node.js</S>
                <P>, </P>
                <S>AWS</S>
                <P>, </P>
                <S>Go</S>
                <P>],</P>
                {"\n  "}
                <K>&quot;intercambio&quot;</K>
                <P>: </P>
                <S>Portugal 🇵🇹</S>
                <P>,</P>
                {"\n  "}
                <K>&quot;cafe&quot;</K>
                <P>: </P>
                <N>true</N>
                {"\n"}
                <P>{"}"}</P>
                {"\n"}
                <span className="text-accent-3">❯</span> <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-fg" />
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
