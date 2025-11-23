import { NavItem, SocialLink, Project } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'ABOUT', href: '#about' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
];

export const PROFILE = {
  firstName: "MAHMOOD",
  lastName: "KHAN",
  subtitle: "AI ENTHUSIAST",
  intro: "HI, I AM"
};

export const ABOUT_CONTENT = {
  heading: "CREATIVE TECHNOLOGIST",
  description: "Curious and passionate, I've always been interested in how visuals can shape the way people feel and think. Over time, that curiosity led me to graphic design and AI, a field where creativity meets problem-solving.",
  description2: "I love exploring how colors, typography, and layout can communicate ideas and emotions clearly and beautifully. Through this portfolio, I aim to show my approach as a designer who values clarity, balance, and meaning in every project."
};

export const EDUCATION_DATA = [
  {
    period: "2023 - Present",
    institution: "Ahmad Dahlan University,",
    location: "Yogyakarta",
    degree: "Computer Science"
  }
];

export const EXPERIENCE_DATA = [
  {
    period: "2020 - 2023",
    company: "PLTU Cilacap",
    role: "Multimedia Staff",
    current: false
  },
  {
    period: "2024",
    company: "SE KUBI UAD",
    role: "Graphic Designer",
    current: false
  },
  {
    period: "2025 - Present",
    company: "Publika Labs",
    role: "Social Media Specialist",
    current: true
  },
  {
    period: "2025 - Present",
    company: "YOUP Creative",
    role: "Social Media Manager",
    current: true
  }
];

export const SKILLS_DATA = [
  {
    category: "GENERATIVE AI",
    icon: "brain",
    items: ["LLMs", "RAG Pipelines", "Stable Diffusion", "Prompt Engineering", "Gemini API", "LangChain"]
  },
  {
    category: "FULL STACK",
    icon: "code",
    items: ["React", "TypeScript", "Node.js", "Python", "FastAPI", "Tailwind CSS"]
  },
  {
    category: "DATA SCIENCE",
    icon: "database",
    items: ["TensorFlow", "PyTorch", "Pandas", "Computer Vision", "Scikit-learn", "NLP"]
  },
  {
    category: "TOOLS & OPS",
    icon: "terminal",
    items: ["Docker", "Git", "AWS", "Linux", "Jupyter", "VS Code"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "NEURAL NEXUS",
    description: "An autonomous agent swarm designed for real-time market analysis and prediction using multi-modal LLM architecture.",
    tags: ["Python", "LangChain", "OpenAI", "React"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    links: { demo: "#", code: "#" },
    featured: true
  },
  {
    title: "SYNTH VISION",
    description: "Computer vision pipeline capable of detecting anomalies in manufacturing lines with 99.8% accuracy.",
    tags: ["PyTorch", "YOLOv8", "FastAPI", "Docker"],
    image: "https://images.unsplash.com/photo-1558494949-ef253b29427b?q=80&w=800&auto=format&fit=crop",
    links: { demo: "#", code: "#" },
    featured: true
  },
  {
    title: "ECHO PROTOCOL",
    description: "A decentralized communication bridge connecting legacy banking systems with blockchain interfaces.",
    tags: ["Solidity", "Node.js", "Web3.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    links: { demo: "#", code: "#" }
  },
  {
    title: "VOID RUNNER",
    description: "Procedurally generated 3D web experience exploring infinite digital landscapes using WebGL.",
    tags: ["Three.js", "WebGL", "GLSL", "Typescript"],
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=800&auto=format&fit=crop",
    links: { demo: "#", code: "#" }
  }
];

export const MARQUEE_TEXT = "ARTIFICIAL INTELLIGENCE • MACHINE LEARNING • NEURAL NETWORKS • DEEP LEARNING • COMPUTER VISION • NATURAL LANGUAGE PROCESSING • ";