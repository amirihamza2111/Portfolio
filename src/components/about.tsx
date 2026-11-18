import { Briefcase, GraduationCap, Languages } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./motion";

export function About({ dict }: { dict: Dictionary }) {
  const { about } = dict;
  return (
    <section id="about" aria-labelledby="about-title" className="bg-jungle-50/60 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading id="about-title" eyebrow={about.eyebrow} title={about.title} />
          <Reveal delay={0.1} className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            {about.bio.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </Reveal>
        </div>

        <div className="space-y-5">
          <Card delay={0} icon={<GraduationCap size={20} />} title={about.educationTitle}>
            <p className="font-semibold text-ink">{about.education.degree}</p>
            <p className="mt-1 text-muted">{about.education.school}</p>
            <p className="mt-2 font-mono text-sm text-jungle-600">{about.education.years}</p>
          </Card>

          <Card delay={0.1} icon={<Briefcase size={20} />} title={about.experienceTitle}>
            <ol className="space-y-5">
              {about.experience.map((e) => (
                <li key={e.org} className="relative border-l-2 border-jungle-200 pl-4">
                  <p className="font-semibold text-ink">
                    {e.role} · <span className="text-jungle-700">{e.org}</span>
                  </p>
                  {e.when && <p className="mt-0.5 font-mono text-sm text-jungle-600">{e.when}</p>}
                  <p className="mt-1 text-muted">{e.text}</p>
                </li>
              ))}
            </ol>
          </Card>

          <Card delay={0.2} icon={<Languages size={20} />} title={about.languagesTitle}>
            <ul className="flex flex-wrap gap-2">
              {about.languages.map((l) => (
                <li key={l.name} className="rounded-full border border-jungle-100 bg-jungle-50 px-3.5 py-1.5 text-sm">
                  <span className="font-semibold text-ink">{l.name}</span>
                  <span className="text-muted"> · {l.level}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  delay,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <Reveal delay={delay} x={30} y={0} className="rounded-[var(--radius-card)] border border-line bg-white p-6">
      <h3 className="flex items-center gap-3 font-display text-lg font-bold text-ink">
        <span aria-hidden className="grid size-10 place-items-center rounded-xl bg-jungle-50 text-jungle-600">
          {icon}
        </span>
        {title}
      </h3>
      <div className="mt-5">{children}</div>
    </Reveal>
  );
}
