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
  role: "Electronics & Telecommunication Engineer · AI/ML",
  location: "Airoli, Navi Mumbai, India",
  status: "Building, learning, and figuring things out",
  bioHeadline:
    "I like building things and understanding what happens underneath.",
  bioIntro:
    "Electronics & Telecommunication Engineer (2026) with an Honours in AI/ML. I build, ship, and run full-stack and AI systems end-to-end.",
  bioPhilosophy:
    "I like tracing slow or broken systems back to the root cause instead of settling for a workaround.",
  email: "vedantd004@gmail.com",
  github: "https://github.com/vedant-io",
  linkedin: "https://linkedin.com/in/vedantsd",
};

export const currentlyData: CurrentlyItem[] = [
  {
    category: "Building",
    title: "Homelab Server Infrastructure",
    detail:
      "Maintaining a self-hosted Linux setup with 10+ containerized workloads, isolated Docker networks, secure routing, monitoring, and automated restarts.",
  },
  {
    category: "Working with",
    title: "AI systems",
    detail:
      "Building systems around RAG, LLM orchestration, retrieval, and agentic workflows, with a focus on making them useful in real applications.",
  },
  {
    category: "Going deeper into",
    title: "Systems and infrastructure",
    detail:
      "Spending more time understanding performance, networking, Docker, Linux, databases, and what happens when real systems start breaking.",
  },
];

export const projectsData: Project[] = [
  {
    number: "01",
    title: "EmbedAI Learn",
    description:
      "A full-stack AI-powered embedded systems platform that combines retrieval and agentic workflows with real-time hardware validation for Arduino and ESP32.",
    tags: ["Next.js", "FastAPI", "RAG", "MongoDB"],
    year: "2026",
    status: "Live",
    live: "https://electronics.vedantd.in",
    metric: "18s → <50ms API latency",
    tone: "sage",
  },
  {
    number: "02",
    title: "Homelab Server Infrastructure",
    description:
      "A self-hosted Linux infrastructure running 10+ containerized workloads with Docker, secure routing through Traefik and Cloudflare Tunnels, and monitoring across the system.",
    tags: ["Docker", "Linux", "Traefik", "Prometheus"],
    year: "2026 — now",
    status: "Running",
    metric: "10+ containerized workloads",
    tone: "butter",
  },
  {
    number: "03",
    title: "Chatter",
    description:
      "A real-time messaging application built with React, Node.js, Express, MongoDB, and Socket.IO, with selective message delivery, secure authentication, and containerized deployment.",
    tags: ["React", "Node.js", "Socket.IO", "Docker"],
    year: "2025",
    status: "Live",
    live: "https://chatter.vedantd.in",
    metric: "∼85% less broadcast overhead",
    tone: "coral",
  },
];

export const expertiseData: ExpertiseArea[] = [
  {
    domain: "Technical foundations",
    summary: "Core tools and concepts I use to reason through unfamiliar systems.",
    topics: [
      "Python",
      "TypeScript",
      "JavaScript",
      "C++",
      "SQL",
      "Data structures",
      "DBMS",
      "Networking",
      "Operating systems",
    ],
    tone: "sage",
  },
  {
    domain: "AI & data",
    summary: "Retrieval, orchestration, and structured data for useful AI systems.",
    topics: [
      "RAG",
      "GraphRAG",
      "FAISS",
      "BM25",
      "LangChain",
      "LLM orchestration",
      "MongoDB",
      "PostgreSQL",
      "Neo4j",
    ],
    tone: "coral",
  },
  {
    domain: "Products & APIs",
    summary: "Shipping complete products from interface through API and deployment.",
    topics: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "Zustand",
    ],
    tone: "sage",
  },
  {
    domain: "Infrastructure & hardware",
    summary: "Running software reliably and connecting it to physical systems.",
    topics: [
      "Docker",
      "Linux",
      "Traefik",
      "Cloudflare Tunnels",
      "Prometheus",
      "Grafana",
      "Arduino",
      "ESP32",
      "Embedded systems",
    ],
    tone: "butter",
  },
];

export const achievementsData: Achievement[] = [
  {
    title: "Winner · Cognition ’25",
    detail:
      "Recognized for developing EmbedAI Learn, an AI-powered embedded systems learning platform.",
    year: "2025",
    tone: "sage",
  },
  {
    title: "Finalist · Bytecamp ’26",
    detail:
      "Finalist in the GenAI track with GraphRAG-Atlas, an AI-powered code intelligence platform.",
    year: "2026",
    tone: "coral",
  },
];

export const notesData: NoteEntry[] = [];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.github, handle: "@vedant-io" },
  { label: "LinkedIn", href: siteConfig.linkedin, handle: "vedantsd" },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    handle: siteConfig.email,
  },
];
