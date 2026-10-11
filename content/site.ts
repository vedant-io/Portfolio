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
  title: "Vedant Deshpande · Engineering & AI",
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
    title: "Electronics.LLM",
    description:
      "Built to make Arduino and ESP32 learning less about copy-pasting code and more about understanding why it works - with guided modules, quizzes, and project-specific generation.",
    story:
      "I built this to learn RAG and agentic AI pipelines while helping electronics students who typically copy-paste Arduino/ESP32 code without understanding it. The platform uses AI agents with retrieval-augmented generation to enforce a structured learning path - interactive modules, quiz gates, then project-tailored code and wiring generation - replacing blind copy-paste with guided, verified understanding. Guides get a live dashboard to track student progress and intervene early.",
    tags: ["Next.js", "FastAPI", "RAG", "MongoDB"],
    year: "2026",
    status: "Live",
    live: "https://electronics.vedantd.in",
    metric: "18s to <50ms API latency",
    tone: "sage",
  },
  {
    number: "02",
    title: "Atlas",
    description:
      "Built to see codebases as connected systems instead of isolated files - turning dependencies into a map for architectural context, analysis, and edits.",
    story:
      "I built Atlas because naive RAG on codebases always felt incomplete - splitting code into text chunks completely misses how code actually works. Building this taught me how GraphRAG functions under the hood: how entities turn into nodes, how dependencies become edges, and how graph structure gives an LLM real architectural context. It also gave me a way to finally see polyglot projects as one connected system instead of isolated frontend and backend silos. Going from that initial learning goal to a tool with 3D/2D visual mapping, blast-radius checks, and automated code edits made the entire concept click.",
    tags: ["GraphRAG", "Neo4j", "React", "Python"],
    year: "2026",
    status: "In progress",
    github: "https://github.com/vedant-io/graphrag-atlas",
    tone: "coral",
  },
  {
    number: "03",
    title: "Chatter",
    description:
      "Built to get hands-on with WebSockets and full-stack state - a lightweight chat app with real-time messaging, online presence, and photo sharing.",
    story:
      "I built Chatter to get hands-on experience with WebSockets, full-stack state management, and containerization. It's a 1-to-1 chat app where users can message each other in real time, see who is online, and share photos without lag or heavy database bloat. I also containerized the entire project with multi-stage Docker builds and Nginx to keep deployment lightweight and fast.",
    tags: ["React", "Node.js", "Socket.IO", "Docker"],
    year: "2025",
    status: "Live",
    live: "https://chatter.vedantd.in",
    tone: "sage",
  },
  {
    number: "04",
    title: "Homelab",
    description:
      "Self-hosted Linux infrastructure running 10+ containerized workloads with monitoring and secure routing.",
    story:
      "I built this whole homelab setup to understand how to deploy projects and manage them while monitoring them at the same time. Wanted to learn Docker, reverse proxies, and managing multiple services even on a fairly low-end system. Runs 10+ containerized workloads with Traefik, Cloudflare Tunnels, and Prometheus.",
    tags: ["Docker", "Linux", "Traefik", "Prometheus"],
    year: "2026",
    status: "Running",
    tone: "butter",
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
