import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Karla } from "next/font/google";
import { getDictionary, getLocale, locales } from "@/content/i18n";
import { site } from "@/content/site";
import { MotionProvider } from "@/components/motion";
import "../globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], display: "swap" });
const karla = Karla({ variable: "--font-karla", subsets: ["latin"], display: "swap" });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["500"], display: "swap" });

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  return {
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
    authors: [{ name: site.name }],
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      type: "profile",
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${locale}`,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      images: [{ url: site.photo, width: 720, height: 900, alt: site.name }],
    },
    twitter: { card: "summary", title: dict.meta.title, description: dict.meta.description },
    formatDetection: { telephone: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();
  return (
    <html lang={locale} className={`${bricolage.variable} ${karla.variable} ${jetbrains.variable}`}>
      <body className="min-h-dvh">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
