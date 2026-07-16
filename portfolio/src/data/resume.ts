import { Code2, Database, LayoutTemplate, Server, Settings, Smartphone } from "lucide-react";

export const RESUME_DATA = {
  name: "Hubdar Hussain Hani",
  initials: "HH",
  location: "Islamabad, Pakistan",
  locationLink: "https://www.google.com/maps/place/Islamabad",
  about:
    "Full Stack Developer with production experience across Laravel, React.js, and Shopify, delivering REST APIs, admin panels, and e-commerce storefronts for live business clients. Promoted from Intern to Full Stack Developer at Do Technology, engineering secure backend systems and responsive frontends. Extended the stack with Python and FastAPI to ship AI-powered features — writing clean, well-tested code within an Agile, Git-based SDLC.",
  summary:
    "I engineer premium digital experiences, bridging the gap between sophisticated AI integrations and flawless UI/UX. Let's build something extraordinary.",
  avatarUrl: "/profile.jpg",
  personalWebsiteUrl: "#",
  contact: {
    email: "hussainhubdar914@gmail.com",
    tel: "+923348772514",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Hani-5110",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hubdar-hussain-1115352b7/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Gomal University, D.I. Khan",
      degree: "BS Software Engineering",
      start: "2022",
      end: "2026",
      score: "CGPA: 3.80 / 4.00",
    },
    {
      school: "Knowledge Home School & College",
      degree: "FSc (Pre-Engineering)",
      start: "2020",
      end: "2022",
      score: "916 / 1100 (83.27%)",
    },
    {
      school: "Qurtuba School & College",
      degree: "Matriculation",
      start: "2018",
      end: "2020",
      score: "928 / 1100 (84.36%)",
    },
  ],
  work: [
    {
      company: "Do Technology",
      link: "#",
      badges: [],
      title: "Full Stack Developer",
      start: "April 2026",
      end: "July 2026",
      description:
        "Built and maintained full-stack Laravel/React.js applications end-to-end, including secure admin panels for managing users, content, and business data. Designed and integrated REST APIs, testing endpoints with Postman to connect frontend and backend services. Built and customized Shopify storefronts — including a flower e-commerce store and ModernBoot — configuring themes, product catalogs, and storefront functionality to match client branding. Developed responsive, cross-device UIs with Tailwind CSS and Bootstrap.",
    },
    {
      company: "Do Technology",
      link: "#",
      badges: ["Internship"],
      title: "Full Stack Developer Intern",
      start: "January 2026",
      end: "April 2026",
      description:
        "Built backend modules and database-driven functionality in PHP, Laravel, and MySQL, and developed/tested REST API endpoints with Postman. Built a responsive React.js landing page for a learning platform and fixed bugs across existing modules using Git/GitHub in an Agile workflow.",
    },
  ],
  skills: {
    languages: ["PHP", "Python", "JavaScript", "TypeScript"],
    frameworks: ["Laravel", "React.js", "Next.js", "FastAPI", "Shopify (Liquid)"],
    frontend: ["Tailwind CSS", "Bootstrap", "jQuery", "HTML5", "CSS3", "Responsive Design"],
    backend: ["REST API Development", "MVC", "OOP", "Eloquent ORM", "JWT", "OAuth", "Sanctum", "SQLAlchemy", "Celery"],
    databases: ["MySQL", "PostgreSQL", "SQL", "Query Optimization", "Schema Design"],
    ai: ["OpenAI API", "Prompt Engineering", "Semantic Matching", "NLP Pipelines", "Web Scraping"],
    tools: ["Git", "GitHub", "Postman", "Docker", "Composer", "npm", "Linux CLI"],
  },
  projects: [
    {
      title: "TalentFlowAI",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL"],
      description:
        "AI-Powered Recruitment Intelligence Platform. Engineered a full-stack AI recruitment platform automating CV screening, candidate ranking, and bias auditing, powered by an NLP-based semantic matching engine. Built a FastAPI backend with full CRUD REST APIs and JWT authentication.",
      link: {
        label: "GitHub",
        href: "https://github.com/Hani-5110/TalentFlowAI",
      },
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop", // Placeholder AI image
      featured: true,
    },
    {
      title: "Laravel Ecommerce",
      techStack: ["PHP", "Laravel", "MySQL", "HTML5", "CSS3", "Bootstrap", "jQuery"],
      description:
        "Multi-Category E-Commerce Web Application. Built a platform with secure authentication, product search and filtering, session-based shopping cart, and a normalized MySQL schema for cataloging, inventory, and orders.",
      link: {
        label: "GitHub",
        href: "https://github.com/Hani-5110/Laravel-Ecommerce",
      },
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop", // E-commerce image
      featured: false,
    },
    {
      title: "Shopify Storefronts",
      techStack: ["Shopify", "Liquid", "Theme Customization", "Product Catalog Management"],
      description:
        "DHAT'S DE FLEURS & ModernBoot. Built and customized two Shopify storefronts end-to-end — themes, navigation, and product catalogs aligned to each brand's identity.",
      link: {
        label: "Live",
        href: "#",
      },
      image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=800&auto=format&fit=crop", // Flower shop / shoes
      featured: false,
    },
    {
      title: "Kargil",
      techStack: ["Laravel", "PHP", "MySQL", "Web Scraping", "Laravel Scheduler"],
      description:
        "Automated Content Aggregation & Blog Platform. Built an automated content-aggregation system in Laravel with custom web-scraping pipelines and scheduled data-refresh cycles.",
      link: {
        label: "github.com",
        href: "#",
      },
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop", // Blog image
      featured: false,
    },
  ],
  services: [
    {
      title: "Full Stack Development",
      description: "End-to-end web applications built with Next.js, React, and robust backends.",
      icon: Server,
    },
    {
      title: "Laravel Engineering",
      description: "Secure, scalable backend systems and REST APIs built on the Laravel framework.",
      icon: Database,
    },
    {
      title: "AI Integration",
      description: "Enhancing applications with OpenAI, NLP pipelines, and intelligent automation.",
      icon: Settings, // Or brain icon
    },
    {
      title: "Shopify Storefronts",
      description: "Custom e-commerce solutions, Liquid theme development, and catalog management.",
      icon: LayoutTemplate,
    },
  ],
  certificates: [
    { name: "Laravel From Scratch (Laracasts)", issuer: "Laracasts" },
    { name: "PHP for Beginners (freeCodeCamp)", issuer: "freeCodeCamp" },
    { name: "Laravel 11 Complete Course", issuer: "Udemy" },
    { name: "Modern PHP Development & REST API Development with Laravel", issuer: "Udemy" },
  ],
} as const;
