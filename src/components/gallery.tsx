"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";

export type Shot = { src: string; alt: string; label: string };

/** One large screenshot with four thumbnails underneath to switch between them. */
export function Gallery({ shots, name, width, height }: { shots: Shot[]; name: string; width: number; height: number }) {
  const [index, setIndex] = useState(0);
  const active = shots[index];

  return (
    <div>
      <div
        className="relative overflow-hidden rounded-2xl border border-jungle-800 bg-jungle-950"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <AnimatePresence initial={false} mode="popLayout">
          <m.div
            key={active.src}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="(min-width: 1024px) 540px, calc(100vw - 64px)"
              className="object-cover object-top"
            />
          </m.div>
        </AnimatePresence>
      </div>

      <ul className="mt-3 grid grid-cols-4 gap-2 sm:gap-3" aria-label={name}>
        {shots.map((s, i) => (
          <li key={s.src}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-pressed={i === index}
              aria-label={s.label}
              className={`relative block w-full cursor-pointer overflow-hidden rounded-lg border-2 transition-[border-color,opacity] duration-200 ${
                i === index ? "border-jungle-400" : "border-transparent opacity-60 hover:opacity-100"
              }`}
              style={{ aspectRatio: `${width} / ${height}` }}
            >
              <Image src={s.src} alt="" fill sizes="(min-width: 1024px) 130px, 22vw" className="object-cover object-top" />
            </button>
            <span aria-hidden className="mt-1 block truncate text-center font-mono text-[10px] text-jungle-300 sm:text-[11px]">
              {s.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
