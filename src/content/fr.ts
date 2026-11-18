import { links } from "./site";
import type { Dictionary } from "./types";

export const fr: Dictionary = {
  meta: {
    title: "Hamza Amiri — Développeur full-stack · IA",
    description:
      "Étudiant en génie logiciel en Tunisie, je crée des applications web full-stack avec de l’IA : SaaS temps réel, assistants RAG et sites clients. Aussi réalisateur de films IA primé.",
  },
  nav: {
    label: "Navigation principale",
    home: "Hamza Amiri, retour en haut",
    brand: "Hamza Amiri",
    projects: "Projets",
    video: "Vidéo",
    stack: "Stack",
    about: "À propos",
    contact: "Contact",
    cv: "Télécharger le CV",
    menu: "Ouvrir le menu",
    close: "Fermer le menu",
    switchTo: "EN",
    switchLabel: "Read in English",
  },
  hero: {
    titleStart: "Des applications web de bout en bout, avec",
    titleAccent: "l’IA là où elle compte.",
    lede: "Je suis Hamza Amiri, étudiant en génie logiciel en Tunisie. Je conçois, développe, teste et mets en ligne des produits complets, des règles de la base de données jusqu’au dernier pixel. Et je réalise des films avec l’IA.",
    primary: "Voir mes projets",
    secondary: "Télécharger le CV",
    photoAlt: "Hamza Amiri souriant, en costume noir, chemise blanche et cravate noire, avec des lunettes rondes",
    chips: { award: "1re place · Film IA", ai: "RAG · LLM" },
  },
  quote: {
    start: "Entre l’imagination et la réalité, il y a une",
    accent: "ligne de code",
    end: "qui attend d’être écrite.",
  },
  projects: {
    eyebrow: "Projets",
    title: "Projets choisis.",
    lede: "Trois produits que j’ai conçus et développés seul, de la base de données à l’interface.",
    watch: "Voir la publicité de 60 secondes",
    items: [
      {
        id: "rswork",
        tag: "Projet personnel · SaaS",
        name: "RsWork",
        tagline: "Commande par QR code et gestion de restaurant, en temps réel.",
        description:
          "Les clients scannent le QR code de leur table, commandent depuis un menu en français, anglais ou arabe, et paient par carte ou en espèces. La cuisine, les serveurs et la caisse travaillent sur des écrans qui se mettent à jour instantanément, et le gérant dispose d’un tableau de bord avec prévisions des ventes et un rapport rédigé par l’IA.",
        highlights: [
          { value: "163 ms", text: "de latence p95 sous charge, 0 erreur sur 8 185 requêtes" },
          { value: "16 / 16", text: "tests de sécurité réussis : injection SQL, XSS, accès entre restaurants, jetons falsifiés" },
          { value: "6 rôles", text: "du client au gérant, avec les données de chaque restaurant isolées" },
          { value: "Caisse complète", text: "fond de caisse, rapport Z, pourboires, additions partagées et remboursements" },
        ],
        link: { label: "Voir le code sur GitHub", href: links.rsworkRepo, github: true },
        mediaAlt: "Vidéo de présentation de RsWork",
      },
      {
        id: "ophtahealth",
        tag: "Freelance · En ligne",
        name: "OphtaHealth",
        tagline: "Catalogue et génération de contacts pour un distributeur d’équipements médicaux.",
        description:
          "Un site en français pour un distributeur tunisien d’équipements d’ophtalmologie : catalogue filtrable par catégorie et par marque, fiches produit détaillées, téléchargement de brochures et formulaire de service après-vente. Le client gère tout depuis un tableau de bord que j’ai développé, et chaque modification est publiée immédiatement.",
        highlights: [
          { value: "59", text: "produits, filtrables par catégorie et par marque" },
          { value: "0", text: "contact perdu : les demandes sont conservées même si une étape échoue" },
          { value: "Immédiat", text: "publication depuis le tableau de bord, sans développeur" },
          { value: "Sécurisé", text: "en-têtes de sécurité stricts et tests de charge avant le lancement" },
        ],
        link: { label: "Visiter ophtahealth.com", href: links.ophtahealth },
        mediaAlt: "Captures d’écran du site OphtaHealth",
        shots: [
          { label: "Accueil", alt: "Page d’accueil d’OphtaHealth avec le produit vedette" },
          { label: "Catalogue", alt: "Le catalogue, avec les filtres et les fiches produit" },
          { label: "Produit", alt: "Une fiche produit avec photos, caractéristiques et brochure" },
          { label: "SAV", alt: "Le formulaire de demande de service après-vente" },
        ],
      },
      {
        id: "neroed",
        tag: "Projet personnel · IA",
        name: "NeroEd",
        tagline: "Un assistant d’étude qui fonctionne entièrement sur votre ordinateur.",
        description:
          "Importez un cours en PDF et posez vos questions : les réponses s’affichent en direct avec leurs sources numérotées, et quand le document ne traite pas le sujet, NeroEd le dit au lieu d’inventer. Il crée aussi des résumés, des fiches de révision, des quiz et des fiches de formules, et comprend les relances et les questions multiples en français, anglais ou arabe.",
        highlights: [
          { value: "33 min → 4,7 s", text: "pour indexer un PDF de 15 Mo" },
          { value: "< 1 s", text: "avant le premier mot de la réponse" },
          { value: "23/36 → 45/48", text: "bonnes réponses sur un manuel de 510 pages" },
          { value: "196", text: "tests automatisés, hors ligne et de bout en bout" },
        ],
        link: { label: "Voir le code sur GitHub", href: links.neroedRepo, github: true },
        mediaAlt: "Captures d’écran de NeroEd",
        shots: [
          { label: "Chat", alt: "NeroEd répond à une question avec des sources numérotées tirées du document" },
          { label: "Fiches", alt: "Fiches de révision générées à partir du document" },
          { label: "Quiz", alt: "Un quiz généré à partir du document, avec score" },
          { label: "Formules", alt: "Une fiche de formules avec chaque variable expliquée" },
        ],
      },
    ],
  },
  video: {
    eyebrow: "Vidéo",
    title: "Je réalise aussi des films.",
    lede: "Outils d’IA, montage, et parfois du code. Les outils ne valent que par l’idée et le soin qu’on y met.",
    award: "1re place · Concours de films IA",
    filmTitle: "The Long Way Home",
    filmText:
      "Un court métrage d’animation de 3 minutes sur la santé et la distance qui sépare les familles des soins. Il a remporté la première place à Telehealth Connect 2026, prix remis par COGEPHA. Réalisé avec Google Flow, Canva, CapCut et Claude.",
    filmLink: "Lire l’annonce",
    others: [
      {
        id: "ophtaIdentity",
        title: "Film d’identité de marque",
        client: "OphtaHealth",
        text: "Une minute pour présenter la marque et ses équipements.",
      },
      {
        id: "huvitz",
        title: "Publicité produit",
        client: "Huvitz Optic Tunisie",
        text: "Une publicité verticale pour la meuleuse automatique HPE-410.",
      },
    ],
  },
  player: {
    play: "Lire la vidéo : {title}",
  },
  stack: {
    eyebrow: "Stack",
    title: "Mes outils.",
    lede: "Les outils derrière les projets ci-dessus, de l’interface jusqu’au modèle.",
    groups: [
      { name: "Langages", items: ["Python", "TypeScript", "JavaScript", "HTML", "CSS"] },
      { name: "Frontend", items: ["React", "Next.js", "Vite", "TanStack Query", "Tailwind CSS", "Framer Motion"] },
      { name: "Back-end & données", items: ["Supabase", "PostgreSQL", "FastAPI", "Node.js", "Express", "Stripe"] },
      {
        name: "IA & machine learning",
        items: ["RAG", "Intégration de LLM", "Ollama", "PyTorch", "scikit-learn", "pandas", "NumPy", "Prévision"],
      },
      {
        name: "Qualité & déploiement",
        items: ["k6", "pytest", "Tests de sécurité", "Git", "Docker", "Vercel", "Netlify", "Render", "AWS"],
      },
      { name: "Vidéo & création", items: ["Blender", "Remotion", "CapCut", "Canva", "Google Flow"] },
    ],
  },
  about: {
    eyebrow: "À propos",
    title: "Un passionné d’IA qui livre.",
    bio: [
      "J’étudie le génie logiciel et les systèmes d’information à l’ISIMM, à Monastir. J’ai surtout appris en construisant de vrais produits et en les mesurant : tests de charge, tests de sécurité, bancs d’évaluation.",
      "J’adore les nouvelles technologies, les LLM et l’IA, et créer des produits de zéro jusqu’au lancement. J’aime tout le parcours, de l’idée d’un client et de son cahier des charges jusqu’à une application en ligne, rapide et sécurisée.",
    ],
    educationTitle: "Formation",
    education: {
      degree: "Licence en Génie Logiciel & Systèmes d’Information",
      school: "Institut Supérieur d’Informatique et de Mathématiques de Monastir (ISIMM)",
      years: "2024 – 2027",
    },
    experienceTitle: "Expérience",
    experience: [
      {
        role: "Développeur web freelance",
        org: "OphtaHealth",
        when: "2026",
        text: "Conception, développement et mise en ligne du site de l’entreprise et de son tableau de bord.",
      },
    ],
    languagesTitle: "Langues",
    languages: [
      { name: "Arabe", level: "Langue maternelle" },
      { name: "Français", level: "Intermédiaire" },
      { name: "Anglais", level: "Intermédiaire" },
    ],
  },
  certificates: {
    eyebrow: "Certificats",
    title: "Toujours en apprentissage.",
    view: "Voir le certificat",
    close: "Fermer",
    items: [
      { id: "kodekloud", title: "RAG Crash Course", issuer: "KodeKloud", date: "nov. 2026" },
      { id: "datacamp", title: "Python Data Fundamentals", issuer: "DataCamp · 28 h", date: "févr. 2026" },
      { id: "kweektech", title: "Certificat de participation", issuer: "KweekStation by KweekTech", date: "" },
      { id: "cisco", title: "Data Science Essentials with Python", issuer: "Cisco Networking Academy", date: "oct. 2025" },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Construisons quelque chose.",
    lede: "Offre de stage, projet freelance ou idée de film : écrivez-moi.",
    email: "E-mail",
    phone: "Téléphone",
    whatsapp: "WhatsApp",
    location: "Basé à",
    locationValue: "Béni Khalled, Nabeul, Tunisie",
    cv: "Télécharger mon CV",
    rights: "Conçu et développé par Hamza Amiri.",
    backToTop: "Retour en haut",
    copy: "Copier l’adresse e-mail",
    copyShort: "Copier",
    copied: "Copiée",
  },
};
