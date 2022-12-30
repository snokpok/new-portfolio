export interface Technology {
  displayName: string;
  assetLogoPathPublic: string;
}

export interface IExperienceItem {
  corp: string;
  logo?: string;
  duration?: {
    from: Date;
    to?: Date;
  };
  position: string;
  description?: string;
  link?: string;
}

export interface BlogPost {
  title: string;
  date: Date;
  idBlurb: string; // what to show on URL suffix
  assetUrl: string; // abs from folder /public
  draft?: boolean;
}

export type BlogPostSanity = {
  slug: string;
  title: string;
  publishedAt: Date;
  body?: string;
  author: {
    name: string;
    description?: string;
  };
};
