import type { CertificateId } from "./site";

export type Highlight = { value: string; text: string };

export type ProjectId = "rswork" | "ophtahealth" | "neroed";

export type Project = {
  id: ProjectId;
  tag: string;
  name: string;
  tagline: string;
  description: string;
  highlights: Highlight[];
  link?: { label: string; href: string; github?: boolean };
  mediaAlt: string;
  /** Gallery screenshots, in the order of the image files for this project. */
  shots?: { label: string; alt: string }[];
};

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    label: string;
    home: string;
    brand: string;
    projects: string;
    video: string;
    stack: string;
    about: string;
    contact: string;
    cv: string;
    menu: string;
    close: string;
    switchTo: string;
    switchLabel: string;
  };
  hero: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    lede: string;
    primary: string;
    secondary: string;
    photoAlt: string;
    chips: { award: string; ai: string; fullstack: string };
  };
  projects: {
    eyebrow: string;
    title: string;
    lede: string;
    items: Project[];
    watch: string;
  };
  video: {
    eyebrow: string;
    title: string;
    lede: string;
    award: string;
    filmTitle: string;
    filmText: string;
    filmLink: string;
    others: { title: string; client: string; text: string; id: "ophtaIdentity" | "huvitz" }[];
  };
  /** "{title}" is replaced by the video's title. */
  player: { play: string };
  stack: { eyebrow: string; title: string; lede: string; groups: { name: string; items: string[] }[] };
  about: {
    eyebrow: string;
    title: string;
    bio: string[];
    educationTitle: string;
    education: { degree: string; school: string; years: string };
    experienceTitle: string;
    experience: { role: string; org: string; when: string; text: string }[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
  };
  certificates: {
    eyebrow: string;
    title: string;
    view: string;
    close: string;
    items: { id: CertificateId; title: string; issuer: string; date: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lede: string;
    email: string;
    phone: string;
    whatsapp: string;
    location: string;
    locationValue: string;
    cv: string;
    rights: string;
    backToTop: string;
    copy: string;
    copyShort: string;
    copied: string;
  };
};
