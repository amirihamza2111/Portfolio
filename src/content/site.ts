// Facts that are the same in every language.

export const site = {
  name: "Hamza Amiri",
  initials: "HA",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hamzaamiri.dev",
  email: "hamzaamiri0010@gmail.com",
  phone: "+216 58 774 234",
  whatsapp: "https://wa.me/21658774234",
  github: "https://github.com/amirihamza2111",
  linkedin: "https://www.linkedin.com/in/hamza-amiri-1b84a7395/" as string | null,
  photo: "/images/hamza.webp",
  cv: { en: "/cv/cv-hamza-amiri-en.pdf", fr: "/cv/cv-hamza-amiri-fr.pdf" },
} as const;

export const media = {
  rsworkAd: { src: "/videos/rswork-ad.mp4", poster: "/videos/rswork-ad-poster.webp", ratio: "16/9" },
  aiFilm: { src: "/videos/ai-competition.mp4", poster: "/videos/ai-competition-poster.webp", ratio: "16/9" },
  ophtaIdentity: {
    src: "https://res.cloudinary.com/xj47aowb/video/upload/v1795027705/opthahealth_identity_pihn8v.mp4",
    poster: "/videos/ophtahealth-identity-poster.webp",
    ratio: "16/9",
  },
  huvitz: {
    src: "https://res.cloudinary.com/xj47aowb/video/upload/v1795027713/huvitz_optic_tunisie_i4awoi.mp4",
    poster: "/videos/huvitz-poster.webp",
    ratio: "9/16",
  },
} as const;

export type Video = (typeof media)[keyof typeof media];

export const links = {
  rsworkRepo: "https://github.com/amirihamza2111/RsWork",
  neroedRepo: "https://github.com/amirihamza2111/NeroEd-v2",
  ophtahealth: "https://ophtahealth.com",
  aiFilmPost: "https://lnkd.in/p/eQqPZ8Ee",
  huvitz: "https://www.facebook.com/huvitz.optic.tunisia/",
} as const;

export const certificateImages = {
  kodekloud: "kodekloud-rag",
  datacamp: "datacamp-python-data",
  kweektech: "kweektech-internship",
  cisco: "cisco-data-science",
} as const;

export type CertificateId = keyof typeof certificateImages;
