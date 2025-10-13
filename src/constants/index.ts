import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  chartwellsymbol,
  counselconnect,
  tutor,
  threejs,
  feedmePng,
  tutorPng,
  ums,
  esv,
  brainrotPng,
  trenderPng,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "AI/ML Engineer",
    icon: mobile,
  },
  {
    title: "System Engineer",
    icon: backend,
  },
  {
    title: "Robotics Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: typescript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Supabase",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "OpenAI",
    icon: figma,
  },
  {
    name: "LangChain",
    icon: git,
  },
  {
    name: "JavaFX",
    icon: docker,
  },
  {
    name: "Arduino",
    icon: redux,
  },
];

// Updated with custom company icons
const experiences: TExperience[] = [
  {
    title: "Strategic Planning Intern",
    companyName: "Chartwell Retirement Residences",
    icon: chartwellsymbol,
    iconBg: "#F8F8FF",
    date: "May 2025 - Aug 2025",
    points: [
      "Streamlined budget reporting with PowerShell and Excel automations, reducing manual workload by 70%.",
      "Improved data accuracy and reporting efficiency through automated data processing pipelines.",
      "Collaborated with finance team to identify and implement process improvements.",
      "Developed custom scripts for data validation and error checking.",
    ],
  },
  {
    title: "Software Engineer - Backend Intern",
    companyName: "CounselConnect",
    icon: counselconnect,
    iconBg: "#E6DEDD",
    date: "Fall 2024",
    points: [
      "Redesigned user interface and user experience, increasing user engagement by 20%.",
      "Added new features and functionality to existing web applications.",
      "Collaborated with design and product teams to implement user-centered design principles.",
      "Conducted user testing and feedback analysis to improve product usability.",
    ],
  },
  {
    title: "Physics & Math Tutor",
    companyName: "Grade 12 Students",
    icon: tutor,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Tutoring high school students in Physics and Mathematics for Grade 12 curriculum.",
      "Helping students improve their understanding of complex mathematical concepts and problem-solving techniques.",
      "Developing personalized learning plans and study strategies for individual students.",
      "Achieving significant improvement in student grades and confidence levels.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "FeedMe",
    description:
      "Group-dining app matching friends' tastes via Yelp/Gemini APIs. Real-time matching system with user authentication and restaurant recommendations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "yelp-api",
        color: "pink-text-gradient",
      },
    ],
    image: feedmePng,
    sourceCodeLink: "https://github.com/Haaziq-code/feedme",
  },
  {
    name: "Trender",
    description:
      "Room style predictor & recommendation engine using Qloo API and OpenAI. Features 3D room capture and predictive modeling for interior design. Click to watch the demo video!",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "qloo-api",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: trenderPng,
    sourceCodeLink: "https://youtu.be/BFSzN3hNUhs?si=QVLmIdgjDj-lutVA",
  },
  {
    name: "ESV - Endangered Species Visualizer",
    description:
      "Interactive map-based visualizer for endangered species data using IUCN Red List API. Features AI-generated 3D animal models via Meshy AI, Mapbox integration, Gemini AI for species insights, and Supabase for data management.",
    tags: [
      {
        name: "mapbox",
        color: "blue-text-gradient",
      },
      {
        name: "meshy-ai",
        color: "green-text-gradient",
      },
      {
        name: "gemini",
        color: "pink-text-gradient",
      },
      {
        name: "supabase",
        color: "orange-text-gradient",
      },
    ],
    image: esv,
    sourceCodeLink: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7343058614061789185",
  },
  {
    name: "BrainrotAI",
    description:
      "Slang-fluent AI chatbot with real-time streaming. Built with Vite and OpenAI, featuring content moderation and server-sent events for instant responses.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "sse",
        color: "pink-text-gradient",
      },
    ],
    image: brainrotPng,
    sourceCodeLink: "https://github.com/Haaziq-code",
  },
  {
    name: "TutorAI",
    description:
      "Adaptive teaching assistant with LMS integration. Uses LangChain for orchestration, Pinecone for vector search, and provides personalized learning experiences.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "langchain",
        color: "green-text-gradient",
      },
      {
        name: "pinecone",
        color: "pink-text-gradient",
      },
    ],
    image: tutorPng,
    sourceCodeLink: "https://github.com/Haaziq-code",
  },
  {
    name: "University Management System",
    description:
      "Comprehensive university management platform built with JavaFX. Features MVC architecture, MySQL database, and modules for students, faculty, and charity management.",
    tags: [
      {
        name: "javafx",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "mvc",
        color: "pink-text-gradient",
      },
    ],
    image: ums,
    sourceCodeLink: "https://github.com/Haaziq-code",
  },
];

export { services, technologies, experiences, testimonials, projects };
