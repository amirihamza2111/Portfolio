import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Update when the content changes meaningfully, so Google knows to re-crawl.
const lastModified = "2026-11-18";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: `${site.url}/en`, fr: `${site.url}/fr`, "x-default": `${site.url}/en` };
  return [
    { url: `${site.url}/en`, lastModified, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${site.url}/fr`, lastModified, changeFrequency: "monthly", priority: 1, alternates: { languages } },
  ];
}
