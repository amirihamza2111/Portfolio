"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/content/i18n";
import { site } from "@/content/site";

export function SiteHeader({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const { nav } = dict;
  const links = [
    { href: "#projects", label: nav.projects },
    { href: "#video", label: nav.video },
    { href: "#stack", label: nav.stack },
    { href: "#about", label: nav.about },
    { href: "#contact", label: nav.contact },
  ];
  const other = locale === "en" ? "fr" : "en";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2" aria-label={nav.home}>
          <span aria-hidden className="size-2.5 shrink-0 rounded-full bg-jungle-500 shadow-[0_0_0_4px_var(--color-jungle-100)]" />
          <span className="truncate font-display text-base font-bold tracking-tight text-jungle-600 sm:text-lg">
            {nav.brand}
          </span>
        </a>

        <nav aria-label={nav.label} className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-[15px] font-medium text-muted transition-colors duration-200 hover:bg-jungle-50 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`/${other}`}
            hrefLang={other}
            lang={other}
            aria-label={`${nav.switchTo} · ${nav.switchLabel}`}
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-line px-3 font-mono text-sm text-jungle-700 transition-colors duration-200 hover:border-jungle-300 hover:bg-jungle-50"
          >
            {nav.switchTo}
          </a>
          <a
            href={site.cv[locale]}
            download
            className="hidden h-11 items-center gap-2 rounded-full bg-jungle-900 px-5 text-[15px] font-bold text-white transition-colors duration-200 hover:bg-jungle-700 sm:inline-flex"
          >
            <Download size={17} aria-hidden />
            {nav.cv}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? nav.close : nav.menu}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line text-ink transition-colors duration-200 hover:bg-jungle-50 lg:hidden"
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label={nav.label}
        hidden={!open}
        className="border-t border-line bg-white px-4 pb-6 pt-2 sm:px-6 lg:hidden"
      >
        <ul className="mx-auto max-w-6xl">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 font-display text-lg font-semibold text-ink hover:bg-jungle-50"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-3 sm:hidden">
            <a
              href={site.cv[locale]}
              download
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-jungle-900 font-bold text-white"
            >
              <Download size={17} aria-hidden />
              {nav.cv}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
