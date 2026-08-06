/** Shapes of the editable site copy in `src/content/site.json`. */

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterGroup {
  heading: string;
  links: FooterLink[];
}

export interface SiteContent {
  hero: {
    title: string;
    slogan: string;
    blurb: string;
  };
  footer: {
    groups: FooterGroup[];
    copyright: string;
  };
}
