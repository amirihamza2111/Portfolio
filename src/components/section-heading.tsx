import { Reveal } from "./motion";

export function SectionHeading({
  id,
  eyebrow,
  title,
  lede,
  dark = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lede?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p
        className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] ${dark ? "text-jungle-300" : "text-jungle-600"}`}
      >
        <span aria-hidden className={`h-px w-8 ${dark ? "bg-jungle-400" : "bg-jungle-500"}`} />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-3 font-display text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.08] tracking-[-0.02em] ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {lede && <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-jungle-200" : "text-muted"}`}>{lede}</p>}
    </Reveal>
  );
}
