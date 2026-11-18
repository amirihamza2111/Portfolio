import { ArrowUpRight } from "lucide-react";
import type { Dictionary, Project } from "@/content/types";
import { media } from "@/content/site";
import { SectionHeading } from "./section-heading";
import { VideoPlayer } from "./video-player";
import { Reveal, StaggerDiv, StaggerDl } from "./motion";
import { Gallery } from "./gallery";
import { GithubIcon } from "./icons";

// Screenshot files, in the same order as each project's `shots` labels.
const galleries = {
  ophtahealth: {
    files: ["ophtahealth-home", "ophtahealth-catalogue", "ophtahealth-product", "ophtahealth-sav"],
    width: 1440,
    height: 760,
  },
  neroed: {
    files: ["neroed-02-chat", "neroed-03-flashcards", "neroed-04-quiz", "neroed-05-formulas"],
    width: 1600,
    height: 1000,
  },
} as const;
type GalleryId = keyof typeof galleries;

export function Projects({ dict }: { dict: Dictionary }) {
  const { projects } = dict;
  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-jungle-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="projects-title" eyebrow={projects.eyebrow} title={projects.title} lede={projects.lede} />
        <ol className="mt-14 space-y-8 sm:space-y-10">
          {projects.items.map((p, i) => (
            <li key={p.id}>
              <Reveal x={i % 2 ? 40 : -40} y={30}>
                <ProjectCard project={p} index={i} watch={projects.watch} play={(t: string) => dict.player.play.replace("{title}", t)} />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProjectCard({
  project: p,
  index,
  watch,
  play,
}: {
  project: Project;
  index: number;
  watch: string;
  play: (title: string) => string;
}) {
  const flip = index % 2 === 1;
  return (
    <article
      aria-labelledby={`${p.id}-title`}
      className="grid overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_24px_60px_-40px_rgba(14,42,31,0.45)] lg:grid-cols-2"
    >
      <div className={`group/media relative flex flex-col justify-center overflow-hidden bg-jungle-900 p-4 sm:p-6 ${flip ? "lg:order-2" : ""}`}>
        <div
          aria-hidden
          className="grid-texture pointer-events-none absolute inset-0 opacity-25 [--grid-color:var(--color-jungle-700)] [--grid-size:22px]"
        />
        <div className="relative">
          {p.id === "rswork" ? (
            <>
              <VideoPlayer
                video={media.rsworkAd}
                label={play(p.mediaAlt)}
                sizes="(min-width: 1024px) 540px, calc(100vw - 64px)"
                className="rounded-2xl"
              />
              <p className="mt-3 text-center font-mono text-xs text-jungle-300">{watch}</p>
            </>
          ) : (
            <Gallery
              name={p.mediaAlt}
              width={galleries[p.id].width}
              height={galleries[p.id].height}
              shots={(p.shots ?? []).map((s, i) => ({ ...s, src: `/projects/${galleries[p.id as GalleryId].files[i]}.webp` }))}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col p-6 sm:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-jungle-600">{p.tag}</p>
        <h3 id={`${p.id}-title`} translate="no" className="mt-3 font-display text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
          {p.name}
        </h3>
        <p className="mt-2 text-lg font-semibold text-jungle-700">{p.tagline}</p>
        <p className="mt-4 leading-relaxed text-muted">{p.description}</p>

        <StaggerDl className="mt-7 grid gap-3 sm:grid-cols-2">
          {p.highlights.map((h) => (
            <StaggerDiv
              key={h.value}
              className="rounded-2xl border border-line bg-jungle-50/70 p-4 transition-colors duration-200 hover:border-jungle-200 hover:bg-jungle-50"
            >
              <dt className="font-display text-xl font-bold tabular-nums tracking-tight text-jungle-700">{h.value}</dt>
              <dd className="mt-1 text-sm leading-snug text-muted">{h.text}</dd>
            </StaggerDiv>
          ))}
        </StaggerDl>

        {p.link && (
          <a
            href={p.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex h-12 items-center gap-2 self-start rounded-full bg-jungle-900 px-6 font-bold text-white transition-colors duration-200 hover:bg-jungle-700"
          >
            {p.link.github && <GithubIcon size={18} />}
            {p.link.label}
            <ArrowUpRight
              size={18}
              aria-hidden
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        )}
      </div>
    </article>
  );
}
