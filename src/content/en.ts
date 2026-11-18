import { links } from "./site";
import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Hamza Amiri — Full-stack developer · AI",
    description:
      "Software engineering student in Tunisia building full-stack web apps with AI: real-time SaaS, RAG assistants and client websites. Also an award-winning AI filmmaker.",
  },
  nav: {
    label: "Main navigation",
    home: "Hamza Amiri, back to top",
    brand: "Hamza Amiri",
    projects: "Projects",
    video: "Video",
    stack: "Stack",
    about: "About",
    contact: "Contact",
    cv: "Download CV",
    menu: "Open menu",
    close: "Close menu",
    switchTo: "FR",
    switchLabel: "Lire en français",
  },
  hero: {
    titleStart: "Web apps built end to end, with",
    titleAccent: "AI where it counts.",
    lede: "I’m Hamza Amiri, a software engineering student in Tunisia. I design, build, test and ship complete products, from the database rules to the last pixel. And I make films with AI.",
    primary: "See my work",
    secondary: "Download CV",
    photoAlt: "Hamza Amiri smiling, in a black suit, white shirt and black tie, with round glasses",
    chips: { award: "1st place · AI Film", ai: "RAG · LLM" },
  },
  quote: {
    start: "Between imagination and reality, there is a",
    accent: "line of code",
    end: "waiting to be written.",
  },
  projects: {
    eyebrow: "Projects",
    title: "Selected work.",
    lede: "Three products I designed and built on my own, from the database to the interface.",
    watch: "Watch the 60-second ad",
    items: [
      {
        id: "rswork",
        tag: "Personal project · SaaS",
        name: "RsWork",
        tagline: "QR ordering and restaurant management, in real time.",
        description:
          "Diners scan the QR code on their table, order from a menu in French, English or Arabic, and pay by card or cash. The kitchen, waiters and cashier work from live screens that update instantly, and the owner gets a dashboard with sales forecasts and a report written by AI.",
        highlights: [
          { value: "163 ms", text: "p95 latency under load, with 0 errors across 8,185 requests" },
          { value: "16 / 16", text: "security tests passed: SQL injection, XSS, cross-restaurant access, forged tokens" },
          { value: "6 roles", text: "from diner to manager, with each restaurant’s data kept separate" },
          { value: "Full till", text: "cash float, end-of-day report, tips, split bills and refunds" },
        ],
        link: { label: "View the code on GitHub", href: links.rsworkRepo, github: true },
        mediaAlt: "RsWork promo video",
      },
      {
        id: "ophtahealth",
        tag: "Freelance · Live",
        name: "OphtaHealth",
        tagline: "Catalogue and lead generation for a medical equipment distributor.",
        description:
          "A French-language website for a Tunisian distributor of ophthalmology equipment: a catalogue filtered by category and brand, detailed product pages, brochure downloads and an after-sales service form. The client runs everything from an admin dashboard I built, and every change goes live instantly.",
        highlights: [
          { value: "59", text: "products, filtered by category and brand" },
          { value: "0", text: "leads lost: requests are kept even when a step fails" },
          { value: "Instant", text: "publishing from the admin dashboard, no developer needed" },
          { value: "Hardened", text: "strict security headers and load tests before launch" },
        ],
        link: { label: "Visit ophtahealth.com", href: links.ophtahealth },
        mediaAlt: "Screenshots of the OphtaHealth website",
        shots: [
          { label: "Home", alt: "OphtaHealth home page with the featured product" },
          { label: "Catalogue", alt: "The catalogue, with filters and product cards" },
          { label: "Product", alt: "A product page with photos, features and brochure download" },
          { label: "After-sales", alt: "The after-sales service request form" },
        ],
      },
      {
        id: "neroed",
        tag: "Personal project · AI",
        name: "NeroEd",
        tagline: "A study assistant that runs entirely on your computer.",
        description:
          "Upload a course PDF and ask questions: answers stream in with numbered sources, and when the document doesn’t cover something, NeroEd says so instead of inventing. It also creates summaries, flashcards, quizzes and formula sheets, and understands follow-up and multi-part questions in French, English or Arabic.",
        highlights: [
          { value: "33 min → 4.7 s", text: "to index a 15 MB PDF" },
          { value: "< 1 s", text: "to the first word of an answer" },
          { value: "23/36 → 45/48", text: "correct answers on a 510-page textbook" },
          { value: "196", text: "automated tests, offline and end to end" },
        ],
        link: { label: "View the code on GitHub", href: links.neroedRepo, github: true },
        mediaAlt: "Screenshots of NeroEd",
        shots: [
          { label: "Chat", alt: "NeroEd answering a question with numbered sources from the document" },
          { label: "Flashcards", alt: "Flashcards generated from the document" },
          { label: "Quiz", alt: "A quiz generated from the document, with scoring" },
          { label: "Formulas", alt: "A formula sheet with each variable explained" },
        ],
      },
    ],
  },
  video: {
    eyebrow: "Video",
    title: "I also make films.",
    lede: "AI tools, editing, and sometimes code. The tools only matter as much as the idea and the care behind it.",
    award: "1st place · AI Video Film Competition",
    filmTitle: "The Long Way Home",
    filmText:
      "A 3-minute animated short about health and the distance between families and care. It won first place at Telehealth Connect 2026, with the prize presented by COGEPHA. Made with Google Flow, Canva, CapCut and Claude.",
    filmLink: "Read the announcement",
    others: [
      {
        id: "ophtaIdentity",
        title: "Brand identity film",
        client: "OphtaHealth",
        text: "A one-minute film introducing the brand and its equipment.",
      },
      {
        id: "huvitz",
        title: "Product commercial",
        client: "Huvitz Optic Tunisia",
        text: "A vertical ad for the HPE-410 automatic lens edger.",
      },
    ],
  },
  player: {
    play: "Play video: {title}",
  },
  stack: {
    eyebrow: "Stack",
    title: "What I build with.",
    lede: "The tools behind the projects above, from the interface to the model.",
    groups: [
      { name: "Languages", items: ["Python", "TypeScript", "JavaScript", "HTML", "CSS"] },
      { name: "Frontend", items: ["React", "Next.js", "Vite", "TanStack Query", "Tailwind CSS", "Framer Motion"] },
      { name: "Backend & data", items: ["Supabase", "PostgreSQL", "FastAPI", "Node.js", "Express", "Stripe"] },
      {
        name: "AI & machine learning",
        items: ["RAG", "LLM integration", "Ollama", "PyTorch", "scikit-learn", "pandas", "NumPy", "Forecasting"],
      },
      {
        name: "Quality & deployment",
        items: ["k6", "pytest", "Security testing", "Git", "Docker", "Vercel", "Netlify", "Render", "AWS"],
      },
      { name: "Video & creative", items: ["Blender", "Remotion", "CapCut", "Canva", "Google Flow"] },
    ],
  },
  about: {
    eyebrow: "About",
    title: "An AI enthusiast who ships.",
    bio: [
      "I study Software Engineering and Information Systems at ISIMM in Monastir. Most of what I know, I learned by building real products and measuring them: load tests, security tests, accuracy benchmarks.",
      "I love new technology, LLMs and AI, and building products from zero to hero. I enjoy the whole path, from a client’s idea and its requirements to a live, fast, secure app.",
    ],
    educationTitle: "Education",
    education: {
      degree: "Bachelor’s in Software Engineering & Information Systems",
      school: "Higher Institute of Computer Science and Mathematics of Monastir (ISIMM)",
      years: "2024 – 2027",
    },
    experienceTitle: "Experience",
    experience: [
      {
        role: "Freelance web developer",
        org: "OphtaHealth",
        when: "2026",
        text: "Designed, built and launched the company’s website and admin dashboard.",
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "French", level: "Intermediate" },
      { name: "English", level: "Intermediate" },
    ],
  },
  certificates: {
    eyebrow: "Certificates",
    title: "Always learning.",
    view: "View certificate",
    close: "Close",
    items: [
      { id: "kodekloud", title: "RAG Crash Course", issuer: "KodeKloud", date: "Nov 2026" },
      { id: "datacamp", title: "Python Data Fundamentals", issuer: "DataCamp · 28 h", date: "Feb 2026" },
      { id: "kweektech", title: "Certificate of participation", issuer: "KweekStation by KweekTech", date: "" },
      { id: "cisco", title: "Data Science Essentials with Python", issuer: "Cisco Networking Academy", date: "Oct 2025" },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s build something.",
    lede: "Internship offers, freelance projects or a film idea: my inbox is open.",
    email: "Email",
    phone: "Phone",
    whatsapp: "WhatsApp",
    location: "Based in",
    locationValue: "Béni Khalled, Nabeul, Tunisia",
    cv: "Download my CV",
    rights: "Designed and built by Hamza Amiri.",
    backToTop: "Back to top",
    copy: "Copy email address",
    copyShort: "Copy",
    copied: "Copied",
  },
};
