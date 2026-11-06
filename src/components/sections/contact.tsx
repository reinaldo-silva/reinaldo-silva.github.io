import { profile } from "@/data/profile";
import { CopyEmail } from "../copy-email";
import { ArrowUpRight, GithubIcon, LinkedinIcon, MailIcon } from "../icons";
import { Reveal } from "../reveal";

export function Contact() {
  const links = [
    { href: `mailto:${profile.email}`, label: "E-mail", sub: "Resposta rápida", Icon: MailIcon },
    { href: profile.linkedin, label: "LinkedIn", sub: "Vamos nos conectar", Icon: LinkedinIcon },
    { href: profile.github, label: "GitHub", sub: `@${profile.githubUser}`, Icon: GithubIcon },
  ];

  return (
    <section id="contato" className="relative overflow-hidden py-20 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-200px] left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent-2/15 blur-[140px]" />
        <div className="bg-grid absolute inset-0 rotate-180" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-widest text-accent uppercase">
            <span className="text-dim">05 — </span>Contato
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-7xl">
            Bora construir <span className="text-gradient">algo juntos?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:mt-6 sm:text-lg text-pretty">
            Tem uma ideia, um projeto ou uma vaga? Me chama — respondo todas as mensagens.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10 flex justify-center">
          <CopyEmail email={profile.email} />
        </Reveal>

        <Reveal delay={250} className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-3">
          {links.map(({ href, label, sub, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface/60 p-4 text-left backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent/40"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-white/5 text-fg">
                <Icon />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-medium text-fg">{label}</span>
                <span className="block text-xs text-dim">{sub}</span>
              </span>
              <ArrowUpRight width={16} height={16} className="text-dim transition-all group-hover:text-fg group-hover:rotate-45" />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
