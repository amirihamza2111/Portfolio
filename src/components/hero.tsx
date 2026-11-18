import Image from "next/image";
import { ArrowDown, Download, Sparkles, Trophy } from "lucide-react";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/content/i18n";
import { site } from "@/content/site";
import { Parallax } from "./motion";

export function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const { hero } = dict;
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-12 sm:px-6 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-28">
        <div>
          <h1
            id="hero-title"
            className="ha-rise font-display text-[clamp(2.4rem,5.6vw,4.2rem)] font-bold leading-[1.04] tracking-[-0.025em] text-ink [--d:50ms]"
          >
            {hero.titleStart}{" "}
            <span className="relative inline-block text-jungle-600">
              {hero.titleAccent}
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full"
              >
                <path
                  d="M2 8 C 80 2, 200 2, 298 7"
                  pathLength={1}
                  fill="none"
                  stroke="var(--color-jungle-500)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="ha-draw"
                />
              </svg>
            </span>
          </h1>

          <p className="ha-rise mt-7 max-w-[36rem] text-lg leading-relaxed text-muted [--d:150ms] sm:text-xl">
            {hero.lede}
          </p>

          <div className="ha-rise mt-9 flex flex-wrap items-center gap-3 [--d:250ms]">
            <a
              href="#projects"
              className="group inline-flex h-13 items-center gap-2 rounded-full bg-jungle-500 px-7 text-base font-bold text-jungle-950 shadow-[0_8px_24px_-8px_rgba(41,171,135,0.7)] transition-[background-color,transform] duration-200 hover:bg-jungle-400 active:scale-[0.98]"
            >
              {hero.primary}
              <ArrowDown size={18} aria-hidden className="transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
            <a
              href={site.cv[locale]}
              download
              className="inline-flex h-13 items-center gap-2 rounded-full border border-line px-6 text-base font-semibold text-ink transition-colors duration-200 hover:border-jungle-300 hover:bg-jungle-50"
            >
              <Download size={18} aria-hidden />
              {hero.secondary}
            </a>
          </div>
        </div>

        <Parallax distance={50}>
          <Portrait alt={hero.photoAlt} chips={hero.chips} />
        </Parallax>
      </div>
    </section>
  );
}

function Portrait({ alt, chips }: { alt: string; chips: Dictionary["hero"]["chips"] }) {
  return (
    <div className="ha-pop relative mx-auto w-full max-w-[380px]">
      <div className="relative rounded-[2.25rem] border border-jungle-100 bg-white p-4 shadow-[0_30px_80px_-30px_rgba(14,42,31,0.35)] sm:p-5">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-jungle-50">
          <Image
            src={site.photo}
            alt={alt}
            fill
            preload
            fetchPriority="high"
            sizes="(min-width: 640px) 340px, calc(100vw - 72px)"
            className="object-cover"
          />
          <span className="ha-scanline" aria-hidden />
        </div>
        {/* scanner corners */}
        {[
          "left-2 top-2 border-l-[3px] border-t-[3px] rounded-tl-2xl",
          "right-2 top-2 border-r-[3px] border-t-[3px] rounded-tr-2xl",
          "bottom-2 left-2 border-b-[3px] border-l-[3px] rounded-bl-2xl",
          "bottom-2 right-2 border-b-[3px] border-r-[3px] rounded-br-2xl",
        ].map((c) => (
          <span key={c} aria-hidden className={`absolute size-9 border-jungle-500 ${c}`} />
        ))}
      </div>

      <FloatChip className="-left-3 top-[12%] sm:-left-12" delay={0}>
        <Trophy size={17} className="text-gold" aria-hidden /> {chips.award}
      </FloatChip>
      <FloatChip className="-right-2 top-[44%] sm:-right-10" delay={0.8}>
        <Sparkles size={17} className="text-jungle-600" aria-hidden /> {chips.ai}
      </FloatChip>
    </div>
  );
}

function FloatChip({ children, className, delay }: { children: React.ReactNode; className?: string; delay: number }) {
  return (
    <div
      aria-hidden
      className={`ha-chip absolute flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-3.5 py-2 text-sm font-semibold text-ink shadow-[0_12px_30px_-12px_rgba(14,42,31,0.35)] ${className}`}
      style={{ "--fade-d": `${0.6 + delay * 0.3}s`, "--float-d": `${delay}s` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
