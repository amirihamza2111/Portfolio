"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { Video } from "@/content/site";

/** Shows a poster with a play button; the video only loads once the visitor asks for it. */
export function VideoPlayer({
  video,
  label,
  sizes,
  className = "",
}: {
  video: Video;
  label: string;
  sizes: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-jungle-950 ${className}`}
      style={{ aspectRatio: video.ratio.replace("/", " / ") }}
    >
      {playing ? (
        <video
          // the play button disappears, so keep keyboard focus on the player
          ref={(el) => el?.focus()}
          src={video.src}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          preload="auto"
          aria-label={label}
          className="absolute inset-0 size-full bg-black object-contain"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={label}
          className="group absolute inset-0 size-full cursor-pointer focus-visible:outline-offset-[-4px]"
        >
          <Image src={video.poster} alt="" fill sizes={sizes} className="object-cover" />
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-jungle-950/55 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-80"
          />
          {/* bottom-left, so it never covers a title on the poster */}
          <span
            aria-hidden
            className="absolute bottom-4 left-4 grid size-14 place-items-center rounded-full bg-jungle-500 text-jungle-950 shadow-[0_10px_30px_-8px_rgba(8,25,15,0.8)] transition-transform duration-200 group-hover:scale-110 group-active:scale-95"
          >
            <Play size={24} fill="currentColor" className="translate-x-0.5" />
          </span>
        </button>
      )}
    </div>
  );
}
