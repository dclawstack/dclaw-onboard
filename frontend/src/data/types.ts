export interface Feature {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  priority: "P0" | "P1" | "P2";
  status: "demo-ready" | "planned" | "future";
  color: string;
  gradient: string;
  icon: string;
  description: string;
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    ctaLink: string;
    image?: string;
  };
  sections: Section[];
}

export interface Section {
  type: "features" | "stats" | "tech" | "benefits";
  title: string;
  columns?: number;
  items: SectionItem[];
}

export interface SectionItem {
  title?: string;
  description?: string;
  icon?: string;
  value?: string;
  label?: string;
}

export interface AppData {
  app: {
    name: string;
    tagline: string;
    description: string;
    color: string;
    category: string;
  };
  features: Feature[];
}
