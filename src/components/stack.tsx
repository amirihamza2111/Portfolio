import { Brain, Clapperboard, Code, Database, LayoutTemplate, ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { SectionHeading } from "./section-heading";
import { StaggerItem, StaggerList } from "./motion";

const icons = [Code, LayoutTemplate, Database, Brain, ShieldCheck, Clapperboard];

export function Stack({ dict }: { dict: Dictionary }) {
  const { stack } = dict;
  return (
    <section id="stack" aria-labelledby="stack-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="stack-title" eyebrow={stack.eyebrow} title={stack.title} lede={stack.lede} />
        <StaggerList className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stack.groups.map((g, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem
                key={g.name}
                lift
                className="group rounded-[var(--radius-card)] border border-line bg-white p-6 transition-[border-color,box-shadow] duration-200 hover:border-jungle-200 hover:shadow-[0_20px_50px_-35px_rgba(14,42,31,0.5)]"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="grid size-10 place-items-center rounded-xl bg-jungle-50 text-jungle-600 transition-colors duration-300 group-hover:bg-jungle-500 group-hover:text-jungle-950"
                  >
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink">{g.name}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-jungle-100 bg-jungle-50 px-3 py-1.5 text-sm font-medium text-jungle-800 transition-colors duration-200 hover:border-jungle-300 hover:bg-jungle-100"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            );
          })}
        </StaggerList>
      </div>
    </section>
  );
}
