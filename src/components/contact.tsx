import { ArrowUp, Download, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/content/i18n";
import { site } from "@/content/site";
import { CopyEmail } from "./copy-email";
import { GithubIcon, LinkedinIcon } from "./icons";
import { NeuralNetwork } from "./neural-network";
import { Reveal } from "./motion";

export function Contact({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const { contact: c } = dict;
  const socials = [
    { label: "GitHub", href: site.github, icon: <GithubIcon /> },
    ...(site.linkedin ? [{ label: "LinkedIn", href: site.linkedin, icon: <LinkedinIcon /> }] : []),
  ];

  return (
    <footer id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-jungle-950 text-jungle-200">
      <div
        aria-hidden
        className="grid-texture pointer-events-none absolute inset-0 opacity-25 [--grid-color:var(--color-jungle-800)] [--grid-size:22px] [mask-image:radial-gradient(ellipse_at_20%_0%,#000_10%,transparent_60%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_40%,transparent_95%)]">
        <NeuralNetwork variant="dark" density={0.8} />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-20 sm:px-6 sm:pt-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-jungle-300">{c.eyebrow}</p>
            <h2
              id="contact-title"
              className="mt-3 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.025em] text-white"
            >
              {c.title}
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-jungle-200">{c.lede}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-13 items-center gap-2 rounded-full bg-jungle-500 px-7 font-bold text-jungle-950 transition-colors duration-200 hover:bg-jungle-400"
              >
                <Mail size={18} aria-hidden />
                {site.email}
              </a>
              <a
                href={site.cv[locale]}
                download
                className="inline-flex h-13 items-center gap-2 rounded-full border border-jungle-700 px-6 font-semibold text-white transition-colors duration-200 hover:bg-jungle-900"
              >
                <Download size={18} aria-hidden />
                {c.cv}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="self-end">
          <ul className="divide-y divide-jungle-800 self-end rounded-[var(--radius-card)] border border-jungle-800 bg-jungle-900/60">
            <Row icon={<Mail size={18} />} label={c.email}>
              <span className="flex items-center justify-between gap-3">
                <a href={`mailto:${site.email}`} className="break-all hover:text-white hover:underline">
                  {site.email}
                </a>
                <CopyEmail email={site.email} label={c.copy} idle={c.copyShort} done={c.copied} />
              </span>
            </Row>
            <Row icon={<Phone size={18} />} label={c.phone}>
              <a href={`tel:${site.phone.replaceAll(" ", "")}`} className="tabular-nums hover:text-white hover:underline">
                {site.phone}
              </a>
            </Row>
            <Row icon={<MessageCircle size={18} />} label={c.whatsapp}>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">
                wa.me/21658774234
              </a>
            </Row>
            <Row icon={<MapPin size={18} />} label={c.location}>
              {c.locationValue}
            </Row>
          </ul>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-jungle-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid size-11 place-items-center rounded-full border border-jungle-800 text-jungle-200 transition-colors duration-200 hover:border-jungle-600 hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-jungle-300">
            © {site.name}. {c.rights}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-jungle-300 hover:text-white sm:self-auto"
          >
            <ArrowUp size={16} aria-hidden />
            {c.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}

function Row({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4 p-5">
      <span aria-hidden className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-jungle-800 text-jungle-300">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-jungle-400">{label}</p>
        <div className="mt-1 text-white/90">{children}</div>
      </div>
    </li>
  );
}
