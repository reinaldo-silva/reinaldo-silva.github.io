import { projects, type Project } from "@/data/profile";
import { ArrowUpRight, GithubIcon } from "../icons";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { SpotlightCard } from "../spotlight-card";

const accents: Record<Project["accent"], { rgb: string; text: string; bg: string; ring: string; dot: string }> = {
  blue: { rgb: "110 168 255", text: "text-accent", bg: "bg-accent/10", ring: "ring-accent/20", dot: "bg-accent" },
  violet: { rgb: "167 139 250", text: "text-accent-2", bg: "bg-accent-2/10", ring: "ring-accent-2/20", dot: "bg-accent-2" },
  emerald: { rgb: "52 211 153", text: "text-accent-3", bg: "bg-accent-3/10", ring: "ring-accent-3/20", dot: "bg-accent-3" },
};

function Visual({ project }: { project: Project }) {
  const a = accents[project.accent];
  // Mini "janela" decorativa com uma linha de código representativa de cada projeto
  const lines: Record<string, string[]> = {
    catalogo: ["GET /api/loja-da-maria/produtos", "where: { empresaId }", "200 OK · 24 produtos"],
    "secret-santa": ["peer.connect(room)", "encrypt(result, participant.key)", "🎁 sorteio concluído"],
    linky: ['shorten("https://…/very/long")', "→ /x7Kp2", "ttl: 7d · redis"],
  };
  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-bg/80 p-4 font-mono text-xs">
      <div
        aria-hidden
        className="absolute -top-16 -right-16 size-40 rounded-full blur-3xl"
        style={{ background: `rgb(${a.rgb} / 0.25)` }}
      />
      {(lines[project.slug] ?? []).map((l, i) => (
        <p key={i} className={`relative truncate leading-6 ${i === 0 ? "text-fg" : "text-muted"}`}>
          <span className={`mr-2 ${a.text}`}>{i === 0 ? "❯" : "·"}</span>
          {l}
        </p>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const a = accents[project.accent];
  return (
    <Reveal delay={index * 120} className={project.featured ? "md:col-span-2" : ""}>
      <SpotlightCard glow={a.rgb} className="group h-full">
        <article
          className={`flex h-full flex-col gap-6 p-5 sm:p-8 ${project.featured ? "md:grid md:grid-cols-2 md:gap-10" : ""}`}
        >
          <div className="flex flex-col">
            <div className="mb-5 flex items-center justify-between">
              <span className={`rounded-full px-2.5 py-1 font-mono text-[11px] ring-1 ${a.bg} ${a.text} ${a.ring}`}>
                {project.featured ? "★ destaque" : `0${index + 1}`}
              </span>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Repositório de ${project.name} no GitHub`}
                className="grid size-9 place-items-center rounded-full border border-line text-muted transition-all hover:border-fg/30 hover:text-fg group-hover:rotate-45"
              >
                <ArrowUpRight width={16} height={16} />
              </a>
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">{project.name}</h3>
            <p className={`mt-1 text-sm ${a.text}`}>{project.tagline}</p>
            <p className="mt-4 leading-relaxed text-muted text-pretty">{project.description}</p>

            <ul className="mt-5 space-y-2 text-sm text-muted">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2.5">
                  <span className={`mt-2 size-1 shrink-0 rounded-full ${a.dot}`} />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex flex-col gap-5 md:justify-end">
            <Visual project={project} />
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <span key={t} className="rounded-md border border-line bg-surface-2/60 px-2 py-1 font-mono text-[11px] text-muted">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm">
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
              >
                <GithubIcon width={15} height={15} /> Código
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
                >
                  <ArrowUpRight width={15} height={15} /> Ver online
                </a>
              )}
            </div>
          </div>
        </article>
      </SpotlightCard>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        index="02"
        label="Projetos"
        title="Coisas que construí."
        description="Projetos pessoais onde exploro arquitetura, tempo real e produto — do monorepo multi-tenant ao app P2P sem backend."
      />
      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 [&>*]:min-w-0">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
