import { CurrentlyItem, InterestArea, NoteEntry, Project, SocialLink } from "@/types/content";

export const siteConfig = {
  name: "Vedant",
  title: "Vedant - Personal Engineering Studio",
  role: "Engineer & Builder",
  location: "",
  status: "In the studio",
  bioHeadline: "Software, systems, AI, and electronics.",
  bioIntro:
    "Building software from fundamentals. Exploring how distributed systems, machine learning models, and low-level hardware interact.",
  bioPhilosophy:
    "I like taking systems apart to understand why they work. I break them in staging, then write simple code that stays maintainable.",
};

export const currentlyData: CurrentlyItem[] = [
  {
    category: "Learning",
    title: "Learning topic (TBD)",
    detail: "Add what is worth learning right now.",
  },
  {
    category: "Building",
    title: "Building topic (TBD)",
    detail: "Add what is worth building right now.",
  },
  {
    category: "Exploring",
    title: "Exploring topic (TBD)",
    detail: "Add what is worth exploring right now.",
  },
];

export const projectsData: Project[] = [
  {
    number: "01",
    title: "Project title (TBD)",
    description: "One sentence about what you built. Keep it concrete.",
    tags: ["TBD"],
    year: "TBD",
    status: "TBD",
    github: "#",
    live: "#",
  },
  {
    number: "02",
    title: "Project title (TBD)",
    description: "One sentence about what you built. Keep it concrete.",
    tags: ["TBD"],
    year: "TBD",
    status: "TBD",
    github: "#",
    live: "#",
  },
  {
    number: "03",
    title: "Project title (TBD)",
    description: "One sentence about what you built. Keep it concrete.",
    tags: ["TBD"],
    year: "TBD",
    status: "TBD",
    github: "#",
    live: "#",
  },
];

export const interestsData: InterestArea[] = [
  {
    domain: "Systems",
    summary: "Add what you explore in systems. Prefer fundamentals and failure modes.",
    topics: [],
  },
  {
    domain: "AI / LLMs",
    summary: "Add how you use LLMs and agents. Keep it engineering-first.",
    topics: [],
  },
  {
    domain: "Infrastructure",
    summary: "Add what you build or study in infrastructure and networking.",
    topics: [],
  },
  {
    domain: "Electronics",
    summary: "Add what you experiment with in hardware and embedded work.",
    topics: [],
  },
];

export const notesData: NoteEntry[] = [
  {
    date: "TBD",
    title: "Note title (TBD)",
    summary: "Short learning log. What broke, what changed, what you learned.",
    tag: "TBD",
    readTime: "TBD",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "#", handle: "" },
  { label: "Twitter / X", href: "#", handle: "" },
  { label: "Email", href: "mailto:vedant@example.com", handle: "" },
  { label: "RSS Feed", href: "#", handle: "" },
];
