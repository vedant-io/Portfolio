import {
  Achievement,
  ExpertiseArea,
  NoteEntry,
  Project,
  SocialLink,
  CurrentlyItem,
} from "@/types/content";

export const siteConfig = {
  name: "Vedant Deshpande",
  shortName: "Vedant",
  title: "Vedant Deshpande — Engineering & AI",
  role: "Engineer · Builder · Recent graduate",
  location: "Navi Mumbai, India",
  status: "Available for interesting problems",
  bioHeadline: "I build software that understands what is happening underneath.",
  bioIntro:
    "Recent Electronics & Telecommunication Engineering graduate with an Honours in AI/ML. I build, ship, and debug full-stack products, AI systems, infrastructure, and hardware experiments.",
  bioPhilosophy:
    "I like tracing systems back to their roots. When something is slow or broken, I want to understand why before reaching for a workaround.",
  email: "vedantd004@gmail.com",
  github: "https://github.com/vedant-io",
  linkedin: "https://linkedin.com/in/vedantsd",
};

export const currentlyData: CurrentlyItem[] = [
  {
    category: "Building",
    title: "Things that run outside my laptop",
    detail:
      "Growing a self-hosted Linux setup with containers, monitoring, secure tunnels, and plenty of small failures to learn from.",
  },
  {
    category: "Exploring",
    title: "AI systems with useful internals",
    detail:
      "Experimenting with retrieval, agents, GraphRAG, and ways to make language models more grounded and less mysterious.",
  },
  {
    category: "Learning",
    title: "How systems hold together",
    detail:
      "Going deeper into performance, distributed architecture, networking, and the boundary between software and hardware.",
  },
];

export const projectsData: Project[] = [
  {
    number: "01",
    title: "EmbedAI Learn",
    description:
      "An AI-powered embedded systems learning platform that takes projects from a question to hardware validation on Arduino and ESP32.",
    tags: ["Next.js", "FastAPI", "RAG", "MongoDB"],
    year: "2026",
    status: "Live",
    live: "https://electronics.vedantd.in",
    metric: "18s → <50ms API latency",
    tone: "sage",
  },
  {
    number: "02",
    title: "Homelab Infrastructure",
    description:
      "A self-hosted Linux environment running 10+ containerized workloads with secure routing, monitoring, automated restarts, and no exposed host ports.",
    tags: ["Docker", "Linux", "Traefik", "Prometheus"],
    year: "2026 — now",
    status: "Running",
    metric: "10+ workloads, self-hosted",
    tone: "butter",
  },
  {
    number: "03",
    title: "Chatter",
    description:
      "A real-time messaging application built around selective delivery, live presence, secure sessions, and a containerized production edge.",
    tags: ["React", "Node.js", "Socket.IO", "Docker"],
    year: "2025",
    status: "Built",
    metric: "~85% less broadcast overhead",
    tone: "coral",
  },
];

export const expertiseData: ExpertiseArea[] = [
  {
    domain: "Product engineering",
    summary: "Building complete products from interface to API and deployment.",
    topics: ["React", "Next.js", "Node.js", "Express.js", "FastAPI", "REST APIs"],
    tone: "sage",
  },
  {
    domain: "AI systems",
    summary: "Making models more useful through retrieval, structure, and evaluation.",
    topics: ["RAG", "GraphRAG", "FAISS", "BM25", "LangChain", "LLM orchestration"],
    tone: "coral",
  },
  {
    domain: "Infrastructure",
    summary: "Running software reliably, securely, and close to the metal.",
    topics: ["Docker", "Linux", "Traefik", "Cloudflare Tunnels", "Prometheus", "Grafana"],
    tone: "butter",
  },
  {
    domain: "Foundations",
    summary: "The fundamentals I use to reason through unfamiliar systems.",
    topics: ["Python", "TypeScript", "C++", "SQL", "Databases", "Networking", "Operating systems"],
    tone: "sage",
  },
  {
    domain: "Hardware experiments",
    summary: "Connecting code to physical systems and figuring out why they behave strangely.",
    topics: ["Arduino", "ESP32", "Embedded validation", "Electronics"],
    tone: "coral",
  },
];

export const achievementsData: Achievement[] = [
  {
    title: "Winner · Cognition ’25",
    detail: "For EmbedAI Learn, an AI-powered embedded systems learning platform.",
    year: "2025",
    tone: "sage",
  },
  {
    title: "Finalist · Bytecamp ’26",
    detail: "GenAI track finalist with GraphRAG-Atlas, a code intelligence platform.",
    year: "2026",
    tone: "coral",
  },
];

export const notesData: NoteEntry[] = [];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.github, handle: "@vedant-io" },
  { label: "LinkedIn", href: siteConfig.linkedin, handle: "vedantsd" },
  { label: "Email", href: `mailto:${siteConfig.email}`, handle: siteConfig.email },
];
