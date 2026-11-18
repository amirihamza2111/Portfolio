import type { Dictionary } from "@/content/types";
import { Reveal } from "./motion";

/** Personal pull quote between the hero and the projects. */
export function Quote({ dict }: { dict: Dictionary }) {
  const { quote } = dict;
  return (
    <section className="border-y border-line py-16 sm:py-24">
      <Reveal className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <figure>
          <span aria-hidden className="block font-display text-6xl leading-none text-jungle-300 sm:text-7xl">
            “
          </span>
          <blockquote className="mt-2 font-display text-[clamp(1.6rem,3.6vw,2.6rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-ink">
            <p>
              {quote.start}{" "}
              <span className="whitespace-nowrap rounded-lg bg-jungle-50 px-2 font-mono text-[0.85em] font-medium text-jungle-600 ring-1 ring-jungle-100">
                {quote.accent}
                <span aria-hidden className="ha-caret ml-1 inline-block h-[0.9em] w-[0.08em] translate-y-[0.12em] bg-jungle-500" />
              </span>{" "}
              {quote.end}
            </p>
          </blockquote>
        </figure>
      </Reveal>
    </section>
  );
}
