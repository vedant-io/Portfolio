export interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  status?: string;
  github?: string;
  live?: string;
  note?: string;
}

export interface CurrentlyItem {
  category: "Learning" | "Building" | "Exploring";
  title: string;
  detail: string;
}

export interface InterestArea {
  domain: string;
  summary: string;
  topics: string[];
}

export interface NoteEntry {
  date: string;
  title: string;
  summary: string;
  tag: string;
  readTime: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}
