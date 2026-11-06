import { Reveal } from "./reveal";

export function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-widest text-accent uppercase">
        <span className="text-dim">{index}</span>
        <span className="h-px w-8 bg-line" />
        {label}
      </p>
      <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-muted text-pretty">{description}</p>}
    </Reveal>
  );
}
