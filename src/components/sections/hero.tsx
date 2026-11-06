import { profile } from "@/data/profile";
import { ArrowRight, GithubIcon, LinkedinIcon, MailIcon } from "../icons";
import { Typing } from "../typing";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
      {/* Fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute top-40 -right-20 size-[380px] animate-float rounded-full bg-accent-2/15 blur-[100px]" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-linear-to-b from-transparent to-bg" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <a
          href="#contato"
          className="group mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1 pr-3 pl-1.5 text-xs text-muted backdrop-blur transition-colors hover:border-accent-3/40 hover:text-fg"
        >
          <span className="flex items-center gap-1.5 rounded-full bg-accent-3/10 px-2 py-0.5 text-accent-3">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-accent-3" />
            online
          </span>
          Aberto a conversas e novos desafios
          <ArrowRight width={12} height={12} className="transition-transform group-hover:translate-x-0.5" />
        </a>

        <p className="mb-4 font-mono text-sm text-accent">
          <span className="text-dim">~/</span>olá, eu sou
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-7xl md:text-8xl">
          <span className="text-gradient">{profile.name}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted text-pretty sm:text-xl">
          <span className="text-fg">{profile.role}</span> no{" "}
          <span className="text-fg">{profile.company}</span>. {profile.headline}
        </p>

        <div className="mt-8 flex h-7 items-center gap-2 text-base text-fg sm:text-lg">
          <span className="font-mono text-accent-3">❯</span>
          <Typing lines={profile.typing} />
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href="#projetos"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.02]"
          >
            Ver projetos
            <ArrowRight width={16} height={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-6 py-3 text-sm text-fg backdrop-blur transition-colors hover:border-accent/50"
          >
            Entrar em contato
          </a>

          <div className="ml-1 flex items-center gap-1">
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
                className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-fg"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para baixo"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-dim uppercase sm:flex"
      >
        scroll
        <span className="h-10 w-px bg-linear-to-b from-dim to-transparent" />
      </a>
    </section>
  );
}
