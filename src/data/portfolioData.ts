
import { Briefcase, Building, Code, Database, Factory, Globe, Landmark, MessageSquare, PenTool, Play } from 'lucide-react';

export interface WorkExperience {
  logo: typeof Briefcase;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  tags: string[];
}

export interface Project {
  logo: typeof PenTool;
  title: string;
  description: string;
  year: string;
  link?: string;
  details?: string;
  tags?: string[];
}

export interface PersonalLink {
  title: string;
  description: string;
  url: string;
}

export const workExperiences: WorkExperience[] = [
  {
    logo: Building,
    company: "Technology Inc",
    role: "Engineering, AI",
    period: "2023 - Present",
    location: "San Francisco, CA",
    description: "Leading the development of real-time multimodal intelligence solutions. Working with cutting-edge AI models and diverse data sources.",
    tags: ["Python", "TensorFlow", "React", "AWS"]
  },
  {
    logo: Landmark,
    company: "Innovation Labs",
    role: "Software Engineer",
    period: "2022 - 2023",
    location: "New York, NY",
    description: "Developed scalable web applications and APIs. Implemented CI/CD pipelines and contributed to system architecture decisions.",
    tags: ["JavaScript", "Node.js", "Docker", "PostgreSQL"]
  },
  {
    logo: Factory,
    company: "Global Tech",
    role: "ML Engineer",
    period: "2021 - 2022",
    description: "Built machine learning models for demand forecasting with millions of users. Improved prediction accuracy by 32%.",
    tags: ["Python", "Scikit-learn", "PyTorch", "Kafka"]
  },
  {
    logo: Briefcase,
    company: "Data Solutions",
    role: "Data Scientist",
    period: "2020",
    description: "Analyzed large datasets to extract business insights. Created interactive dashboards for executive leadership.",
    tags: ["R", "SQL", "Tableau", "Big Data"]
  }
];

export const projects: Project[] = [
  {
    logo: PenTool,
    title: "AI Creative Assistant",
    description: "AI platform for generating creative content",
    year: "2023",
    link: "#",
    details: "A comprehensive platform that leverages multiple AI models to assist in creative tasks across writing, design, and ideation.",
    tags: ["React", "TensorFlow.js", "GPT-4", "Canvas API"]
  },
  {
    logo: Globe,
    title: "Open Source Intelligence",
    description: "Framework for LLMs focused on bias detection",
    year: "2023",
    link: "#",
    details: "An open-source framework that helps identify and mitigate biases in large language models through innovative evaluation techniques.",
    tags: ["Python", "PyTorch", "Ethics AI", "Data Analysis"]
  },
  {
    logo: Play,
    title: "Smart Media Platform",
    description: "AI-powered content creation tool",
    year: "2022",
    link: "#",
    details: "A platform that automates content creation for multiple formats using AI, with special focus on video and audio transformations.",
    tags: ["Node.js", "FFmpeg", "React", "AWS"]
  },
  {
    logo: MessageSquare,
    title: "Conversation AI",
    description: "Advanced dialogue system for healthcare",
    year: "2022",
    link: "#",
    details: "A specialized conversational AI system designed for healthcare applications, focusing on patient support and clinical assistance.",
    tags: ["NLP", "Healthcare API", "HIPAA Compliance", "React"]
  },
  {
    logo: Database,
    title: "Data Analytics Suite",
    description: "ML algorithms for financial analysis",
    year: "2021",
    link: "#",
    details: "A comprehensive suite of data analytics tools designed specifically for financial institutions to detect patterns and anomalies.",
    tags: ["Python", "Financial APIs", "SQL", "Machine Learning"]
  }
];

export const personalLinks: PersonalLink[] = [
  {
    title: "portfolio.app",
    description: "A beautiful tool to showcase your work with modern design",
    url: "#"
  },
  {
    title: "subscriptions.app",
    description: "One-page tool for tracking all your subscriptions",
    url: "#"
  },
  {
    title: "chat.app",
    description: "Simple personal chat interface with AI assistants",
    url: "#"
  },
  {
    title: "opensource.app",
    description: "Open-source multilingual AI playground",
    url: "#"
  }
];
