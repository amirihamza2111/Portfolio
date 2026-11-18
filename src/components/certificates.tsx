"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { certificateImages } from "@/content/site";
import { SectionHeading } from "./section-heading";
import { StaggerItem, StaggerList } from "./motion";

type Item = Dictionary["certificates"]["items"][number];

export function Certificates({ dict }: { dict: Dictionary }) {
  const { certificates: c } = dict;
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Item | null>(null);

  function open(item: Item) {
    setActive(item);
    dialog.current?.showModal();
  }

  return (
    <section id="certificates" aria-labelledby="certificates-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="certificates-title" eyebrow={c.eyebrow} title={c.title} />
        <StaggerList className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.items.map((item) => (
            <StaggerItem key={item.id}>
              <button
                type="button"
                onClick={() => open(item)}
                aria-haspopup="dialog"
                className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white text-left transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-jungle-200 hover:shadow-[0_20px_50px_-35px_rgba(14,42,31,0.5)]"
              >
                <span className="relative block aspect-[3/2] w-full border-b border-line bg-jungle-50 p-3">
                  <Image
                    src={`/certificates/${certificateImages[item.id]}-thumb.webp`}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 90vw"
                    className="object-contain p-3"
                  />
                  <span
                    aria-hidden
                    className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/90 text-jungle-700 opacity-0 shadow transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    <Maximize2 size={16} />
                  </span>
                </span>
                <span className="flex flex-1 flex-col p-5">
                  <span className="font-display text-lg font-bold leading-snug text-ink">{item.title}</span>
                  <span className="mt-1 text-sm text-muted">{item.issuer}</span>
                  {item.date && <span className="mt-auto pt-3 font-mono text-xs text-jungle-600">{item.date}</span>}
                  <span className="sr-only">, {c.view}</span>
                </span>
              </button>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>

      <dialog
        ref={dialog}
        aria-label={active ? `${active.title}, ${active.issuer}` : c.view}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        className="ha-dialog m-auto w-[min(1100px,calc(100vw-2rem))] max-w-none overflow-visible bg-transparent p-0"
      >
        <div className="relative rounded-2xl bg-white p-3 sm:p-4">
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label={c.close}
            className="absolute -top-4 right-2 z-10 grid size-11 cursor-pointer place-items-center rounded-full bg-jungle-900 text-white shadow-lg transition-colors hover:bg-jungle-700 sm:-right-4"
          >
            <X size={20} aria-hidden />
          </button>
          {active && (
            <Image
              src={`/certificates/${certificateImages[active.id]}.webp`}
              alt={`${active.title}, ${active.issuer}`}
              width={1600}
              height={1100}
              sizes="(min-width: 1140px) 1070px, calc(100vw - 3rem)"
              className="h-auto max-h-[80vh] w-full rounded-lg object-contain"
            />
          )}
        </div>
      </dialog>
    </section>
  );
}
