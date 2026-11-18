import { ArrowUpRight, Trophy } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { links, media } from "@/content/site";
import { SectionHeading } from "./section-heading";
import { VideoPlayer } from "./video-player";
import { Reveal, StaggerItem, StaggerList } from "./motion";

export function VideoWork({ dict }: { dict: Dictionary }) {
  const { video, player } = dict;
  const label = (t: string) => player.play.replace("{title}", t);
  return (
    <section id="video" aria-labelledby="video-title" className="relative overflow-hidden bg-jungle-900 py-20 text-white sm:py-28">
      <div
        aria-hidden
        className="grid-texture pointer-events-none absolute inset-0 opacity-20 [--grid-color:var(--color-jungle-700)] [--grid-size:22px] [mask-image:linear-gradient(to_bottom,#000,transparent_70%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="video-title" eyebrow={video.eyebrow} title={video.title} lede={video.lede} dark />

        {/* Featured: the award-winning film */}
        <Reveal className="mt-14">
        <article
          aria-labelledby="film-title"
          className="grid overflow-hidden rounded-[1.75rem] border border-jungle-700 bg-jungle-950/60 lg:grid-cols-[1.45fr_1fr]"
        >
          <VideoPlayer
            video={media.aiFilm}
            label={label(video.filmTitle)}
            sizes="(min-width: 1024px) 640px, calc(100vw - 32px)"
          />
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <p className="inline-flex items-center gap-2 self-start rounded-full bg-gold/15 px-3 py-1.5 font-mono text-xs text-[#F2C46B]">
              <Trophy size={15} aria-hidden />
              {video.award}
            </p>
            <h3 id="film-title" translate="no" className="mt-5 font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
              {video.filmTitle}
            </h3>
            <p className="mt-4 leading-relaxed text-jungle-200">{video.filmText}</p>
            <a
              href={links.aiFilmPost}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-1.5 self-start font-semibold text-jungle-300 underline-offset-4 hover:text-white hover:underline"
            >
              {video.filmLink}
              <ArrowUpRight size={17} aria-hidden className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </article>
        </Reveal>

        {/* Client work */}
        <StaggerList className="mt-6 grid gap-6 md:grid-cols-[1.6fr_1fr]">
          {video.others.map((v) => (
            <StaggerItem
              key={v.id}
              className="flex flex-col overflow-hidden rounded-[1.75rem] border border-jungle-700 bg-jungle-950/60"
            >
              <div className={`flex flex-1 items-center justify-center ${v.id === "huvitz" ? "bg-jungle-950 p-4" : ""}`}>
                <VideoPlayer
                  video={media[v.id]}
                  label={label(`${v.client}, ${v.title}`)}
                  sizes={v.id === "huvitz" ? "260px" : "(min-width: 768px) 620px, calc(100vw - 32px)"}
                  className={v.id === "huvitz" ? "w-full max-w-[260px] rounded-2xl" : "w-full"}
                />
              </div>
              <div className="p-6">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-jungle-300">{v.client}</p>
                <h3 className="mt-2 font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-jungle-200">{v.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
