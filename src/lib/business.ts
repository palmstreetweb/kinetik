// Single source of truth for core business details
export interface SocialLink {
  name: string;
  href: string;
}

export interface BrandPalette {
  accent: string;
  onAccent: string;
  bg: string;
  ink: string;
  inkMuted: string;
}

export interface BusinessDetails {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  url: string;
  socials: SocialLink[];
  brand: BrandPalette;
}

export const business: BusinessDetails = {
  name: "KINETIK",
  tagline: "A motion studio for brands that need to move.",
  email: "studio@kinetik.palmstreetweb.design",
  phone: "(323) 555-0166",
  address: "942 Mateo Street, Los Angeles, CA 90021",
  url: "https://kinetik.palmstreetweb.design",
  socials: [
    { name: "Instagram", href: "https://instagram.com/kinetik.studio" },
    { name: "Vimeo", href: "https://vimeo.com/kinetik" },
    { name: "Showreel", href: "#reel" },
  ],
  brand: {
    accent: "#C9FF35",
    onAccent: "#070707",
    bg: "#070707",
    ink: "#FAFAFA",
    inkMuted: "#9A9A9A",
  },
};
