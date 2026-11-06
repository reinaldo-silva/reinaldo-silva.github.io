import Image from "next/image";
import { profile } from "@/data/profile";
import { ArrowRight, GithubIcon, LinkedinIcon, MailIcon } from "../icons";
import { Typing } from "../typing";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20">
      {/* Fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute top-40 -right-20 size-[380px] animate-float rounded-full bg-accent-2/15 blur-[100px]" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-linear-to-b from-transparent to-bg" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6">
        <a
          href="#contato"
          className="group mb-6 inline-flex max-w-full items-center gap-2 rounded-full sm:mb-8 sm:gap-2.5 border border-line bg-surface/60 py-1 pr-3 pl-1.5 text-xs text-muted backdrop-blur transition-colors hover:border-accent-3/40 hover:text-fg"
        >
          <span className="flex items-center gap-1.5 rounded-full bg-accent-3/10 px-2 py-0.5 text-accent-3">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-accent-3" />
            online
          </span>
          <span className="truncate">Aberto a novos desafios</span>
          <ArrowRight width={12} height={12} className="transition-transform group-hover:translate-x-0.5" />
        </a>

        <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
          {/* Avatar com anel em gradiente */}
          <div className="group relative size-16 shrink-0 sm:size-24">
            <div
              aria-hidden
              className="absolute -inset-[3px] animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,var(--accent),var(--accent-2),var(--accent-3),var(--accent))] opacity-90 blur-[0.5px]"
            />
            <div aria-hidden className="absolute -inset-px rounded-full bg-bg" />
            <div className="relative size-full overflow-hidden rounded-full bg-accent">
              <Image
                src="/avatar.svg"
                alt={`Avatar ilustrado de ${profile.shortName}`}
                width={96}
                height={96}
                priority
                className="size-full translate-y-[7%] scale-[1.35] transition-transform duration-500 group-hover:translate-y-[5%] group-hover:scale-[1.45] group-hover:-rotate-3"
              />
            </div>
          </div>

          {/* Balão de fala */}
          <div className="relative rounded-2xl rounded-bl-md border border-line bg-surface/80 px-4 py-2.5 font-mono text-sm shadow-[0_8px_30px_-12px_var(--shade)] backdrop-blur">
            <span className="text-dim">~/</span>
            <span className="text-accent">olá, eu sou</span>{" "}
            <span aria-hidden className="inline-block origin-[70%_70%] animate-wave">
              👋
            </span>
          </div>
        </div>

        <h1 className="max-w-4xl text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-7xl md:text-8xl">
          <span className="text-gradient">{profile.name}</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base text-muted text-pretty sm:mt-6 sm:text-xl">
          <span className="text-fg">{profile.role}</span> no{" "}
          <span className="text-fg">{profile.company}</span>. {profile.headline}
        </p>

        <div className="mt-6 flex min-h-7 items-start gap-2 text-sm text-fg sm:mt-8 sm:items-center sm:text-lg">
          <span className="font-mono text-accent-3">❯</span>
          <Typing lines={profile.typing} />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 sm:mt-12">
          <a
            href="#projetos"
            className="group relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-fg px-4 py-3 whitespace-nowrap sm:flex-none sm:px-6 text-sm font-medium text-bg transition-transform hover:scale-[1.02]"
          >
            Ver projetos
            <ArrowRight width={16} height={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contato"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-3 whitespace-nowrap sm:flex-none sm:px-6 text-sm text-fg backdrop-blur transition-colors hover:border-accent/50"
          >
            Entrar em contato
          </a>

          <div className="flex w-full items-center justify-center gap-1 sm:ml-1 sm:w-auto">
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
                className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-tint/5 hover:text-fg"
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
