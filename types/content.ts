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
  metric?: string;
  tone?: "sage" | "coral" | "butter";
}

export interface CurrentlyItem {
  category: "Building" | "Exploring" | "Learning";
  title: string;
  detail: string;
}

export interface ExpertiseArea {
  domain: string;
  summary: string;
  topics: string[];
  tone: "sage" | "coral" | "butter";
}

export interface NoteEntry {
  date: string;
  title: string;
  summary: string;
  tag: string;
  readTime: string;
}

export interface Achievement {
  title: string;
  detail: string;
  year: string;
  tone: "sage" | "coral";
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}
