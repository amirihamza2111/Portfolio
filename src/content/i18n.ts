import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { en } from "./en";
import { fr } from "./fr";

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

const dictionaries = { en, fr };

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!value || !hasLocale(value)) notFound();
  return value;
}

export async function getDictionary() {
  return dictionaries[await getLocale()];
}
