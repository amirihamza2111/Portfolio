import { getDictionary, getLocale } from "@/content/i18n";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Quote } from "@/components/quote";
import { Projects } from "@/components/projects";
import { VideoWork } from "@/components/video-work";
import { Stack } from "@/components/stack";
import { About } from "@/components/about";
import { Certificates } from "@/components/certificates";
import { Contact } from "@/components/contact";
import { ScrollProgress } from "@/components/motion";

export default async function Home() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-jungle-900 px-5 py-3 font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {locale === "fr" ? "Aller au contenu" : "Skip to content"}
      </a>
      <ScrollProgress />
      <SiteHeader dict={dict} locale={locale} />
      <main id="main">
        <Hero dict={dict} locale={locale} />
        <Quote dict={dict} />
        <Projects dict={dict} />
        <VideoWork dict={dict} />
        <Stack dict={dict} />
        <About dict={dict} />
        <Certificates dict={dict} />
      </main>
      <Contact dict={dict} locale={locale} />
    </>
  );
}
