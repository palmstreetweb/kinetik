import { business } from "./business";

export interface NavLink {
  name: string;
  href: string;
}

export interface ImageRef {
  src: string;
  alt: string;
}

export interface HeroContent {
  status: string;
  words: string[];
  body: string;
  ctaText: string;
  ctaHref: string;
  marquee: string;
}

export interface CapabilitiesContent {
  eyebrow: string;
  heading: string;
  items: { number: string; title: string; tags: string[] }[];
}

export interface ReelItem {
  client: string;
  title: string;
  year: string;
  tag: string;
  image: ImageRef;
}

export interface ReelContent {
  eyebrow: string;
  heading: string;
  items: ReelItem[];
}

export interface Client {
  name: string;
  detail: string;
}

export interface ClientsContent {
  eyebrow: string;
  heading: string;
  list: Client[];
}

export interface ManifestoContent {
  eyebrow: string;
  lines: string[];
}

export interface ContactContent {
  eyebrow: string;
  heading: string;
  body: string;
  primary: { text: string; href: string };
  secondary: { text: string; href: string };
}

export interface SeoMetadata {
  title: string;
  description: string;
  ogImage: string;
}

export interface SiteContent {
  nav: { links: NavLink[]; cta: NavLink };
  hero: HeroContent;
  capabilities: CapabilitiesContent;
  reel: ReelContent;
  clients: ClientsContent;
  manifesto: ManifestoContent;
  contact: ContactContent;
  footer: { copyright: string; links: NavLink[] };
  metadata: SeoMetadata;
}

export const content: SiteContent = {
  nav: {
    links: [
      { name: "Work", href: "#reel" },
      { name: "Capabilities", href: "#capabilities" },
      { name: "Manifesto", href: "#manifesto" },
      { name: "Clients", href: "#clients" },
    ],
    cta: { name: "Hire us", href: "#contact" },
  },

  hero: {
    status: "● TAKING ON 3 PROJECTS IN Q3",
    words: ["BRANDS", "THAT MOVE", "MOVE", "OTHERS"],
    body: "Kinetik is a six-person motion and brand studio in downtown Los Angeles. We design identity systems that breathe, ads that loop without dying, title sequences, type that does the talking, and the occasional very large mural that animates on a phone.",
    ctaText: "Brief us →",
    ctaHref: "#contact",
    marquee: "MOTION DESIGN — BRAND IDENTITY — TITLE SEQUENCES — KINETIC TYPE — DIRECTION — ART DEPT — POST-PRODUCTION — KINETIK STUDIO LA",
  },

  capabilities: {
    eyebrow: "01 — WHAT WE DO",
    heading: "Six surfaces. One studio.",
    items: [
      {
        number: "01",
        title: "Motion identity systems",
        tags: ["Logo states", "Loops", "Title cards", "Lower-thirds", "Wordmark behaviour"],
      },
      {
        number: "02",
        title: "Title sequences and trailers",
        tags: ["Cinema", "Series openers", "Festival idents", "Trailer cuts"],
      },
      {
        number: "03",
        title: "Kinetic typography",
        tags: ["Variable type", "Lyric videos", "Conference idents", "Reels"],
      },
      {
        number: "04",
        title: "Brand identity & guidelines",
        tags: ["Wordmark", "Type system", "Colour", "Book + web"],
      },
      {
        number: "05",
        title: "Direction",
        tags: ["Concept", "Storyboard", "Crew", "Production"],
      },
      {
        number: "06",
        title: "Animated long-form",
        tags: ["Music videos", "Doc inserts", "Editorial pieces"],
      },
    ],
  },

  reel: {
    eyebrow: "02 — SELECTED",
    heading: "A few we are proud of.",
    items: [
      {
        client: "FOUNDRY FILMS",
        title: "Title sequence for a feature film",
        year: "MMXXVI",
        tag: "MAIN ON END",
        image: { src: "/images/reel-01.jpg", alt: "A high-contrast still of an animated title sequence." },
      },
      {
        client: "MOSSO RECORDS",
        title: "Kinetic lyric piece for a single",
        year: "MMXXVI",
        tag: "MUSIC VIDEO",
        image: { src: "/images/reel-02.jpg", alt: "A still from a typography-driven music video." },
      },
      {
        client: "OAK & ASH",
        title: "Identity refresh + motion package",
        year: "MMXXV",
        tag: "BRAND IDENTITY",
        image: { src: "/images/reel-03.jpg", alt: "An identity system in motion against a black studio backdrop." },
      },
      {
        client: "SXSW",
        title: "Festival ident & wayfinding loops",
        year: "MMXXV",
        tag: "FESTIVAL",
        image: { src: "/images/reel-04.jpg", alt: "An LED screen showing a festival identity loop." },
      },
      {
        client: "PHANTOM CYCLES",
        title: "Three-spot launch campaign",
        year: "MMXXV",
        tag: "CAMPAIGN",
        image: { src: "/images/reel-05.jpg", alt: "A still from a kinetic launch campaign for a cycling brand." },
      },
    ],
  },

  clients: {
    eyebrow: "03 — IN THE ROOM",
    heading: "We've made things with —",
    list: [
      { name: "Foundry Films", detail: "title + trailer" },
      { name: "Mosso Records", detail: "videos" },
      { name: "Oak & Ash", detail: "brand + motion" },
      { name: "SXSW", detail: "festival ident" },
      { name: "Phantom Cycles", detail: "campaign" },
      { name: "Hyperphysical", detail: "type system" },
      { name: "Mountain Standard", detail: "brand book" },
      { name: "The Atlas Project", detail: "doc inserts" },
      { name: "Long Now Foundation", detail: "talks identity" },
      { name: "Tessera Labs", detail: "logo motion" },
      { name: "Cinéma Vivant", detail: "season opener" },
      { name: "Public Records", detail: "venue identity" },
    ],
  },

  manifesto: {
    eyebrow: "04 — MANIFESTO",
    lines: [
      "We believe a logo is",
      "a verb,",
      "not a noun.",
      "We believe type",
      "should",
      "MOVE.",
      "We believe in",
      "twelve frames",
      "per idea.",
      "And we believe",
      "the best motion design",
      "knows when",
      "to hold still.",
    ],
  },

  contact: {
    eyebrow: "05 — NEXT",
    heading: "Want to make something move?",
    body: "Three project slots open in Q3. Send a rough brief, a budget if you have one, and a Vimeo link or three of motion you love. We will reply within forty-eight hours.",
    primary: { text: "Brief the studio →", href: `mailto:${business.email}?subject=Brief` },
    secondary: { text: "Watch the reel", href: "#reel" },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} ${business.name} — A motion studio in downtown LA.`,
    links: [
      { name: "Reel", href: "#reel" },
      { name: "Hiring", href: "#hiring" },
      { name: "Press", href: "#press" },
    ],
  },

  metadata: {
    title: `${business.name} — ${business.tagline}`,
    description:
      "Kinetik is a six-person motion and brand studio in downtown Los Angeles — identity systems that breathe, title sequences, kinetic type, and the occasional very large mural that animates on a phone.",
    ogImage: "/opengraph-image",
  },
};
