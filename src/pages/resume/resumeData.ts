export interface ExperienceItem {
  title: string;
  responsibilities: string[];
}

export interface EducationItem {
  imageUrl: string;
  alt: string;
}

export interface ProjectItem {
  title: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
}

export interface HobbiesItem {
  title: string;
}

// Resume data configuration
// Edit this file to update resume content without touching the component

// HOW TO UPDATE:
// - Profile: Edit the profileText string (use \n\n for paragraph breaks)
// - Experience: Add/edit items in experienceItems array
// - Certificates: Add new certificate URLs to certificates array
// - Hobbies: Add/remove strings from hobbies array
// - Projects: Add/edit projects in projects array
// - Skills: Add/edit skill categories and their associated skills
// - Testimonials: Add/edit testimonials with quote and author

// \n\n adds paragraph breaks (enter, enter)
export const profileText: string = `
Former electrician with 9 years of customer-facing experience, now applying that same practical, detail-oriented mindset to software development. 
Motivated self-learner skilled in full-stack development with JavaScript/TypeScript, React, Node.js, and PostgreSQL, with a focus on clean architecture and maintainable code.

Experienced in building secure APIs, implementing token-based authentication, and managing state across client & server to deliver responsive user experiences and reliable backend operations. 
Strong collaborator in Agile teams, writing testable, scalable code.

Driven by curiosity, a commitment to continuous learning and a proactive approach to problem-solving.
Adaptable and quick to learn new technologies, with a proven ability to thrive in fast-paced, dynamic workplaces.
`;

export const experienceItems: ExperienceItem[] = [
  {
    title: "Software Development Intern - RevoTech - (Mar - May 2025)",
    responsibilities: [
      "Joined a small Agile-based team for a two-month internship.",
      "Rapidly learned Python and FastAPI to contribute to backend development.",
      "Refactored token management and caching systems, resolving login and sync issues by improving access control, session handling, token storage and security.",
      "Worked closely with other interns to integrate UI toolkit components, increasing consistency across the UI.",
      "Independently developed an admin page for managing users from an external system, owning the full development lifecycle from implementation to testing.",
      "Frontend refactor to separate the single file dashboard into separate components.",
      "Used Git and GitHub for collaboration, code reviews and version control.",
    ],
  },
  {
    title: "Full-Stack Projects - Mission Ready - (2024 - 2025)",
    responsibilities: [
      "Designed AI chatbot assistants using Gemini API, React and Express. Built question workflows and used user feedback to improve relevance.",
      "CLI Tool: Created a modular Node.js command-line app with full CRUD logic for managing tasks. Focused on clean architecture and reusable modules.",
      "Dynamic Web Apps: Developed React/Express apps with user login, API routes and persistent data.",
      "Integrated basic role-based access control and deployed to the cloud.",
      "Gained real experience with Agile planning, debugging, team-based Git workflows and user testing.",
    ],
  },
  {
    title: "Registered Electrician - (2017 - 2023)",
    responsibilities: [
      "Independently diagnosed and repaired electrical faults in residential, commercial and industrial systems under time pressure.",
      "Mentored apprentices, helping them build technical and safety skills while supervising installations.",
      "Led an international installation project overseas, demonstrating leadership, communication and reliability.",
      "Managed builds of washing machine assembly lines, coordinating improvements and assembly questions to R&D ensuring quality control.",
      "Developed systems thinking by working with interdependent components - now directly applied to systems design in software.",
    ],
  },
];

export const certificates: EducationItem[] = [
  {
    imageUrl:
      "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/142579370",
    alt: "Certificate 1",
  },
  {
    imageUrl:
      "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/142589881",
    alt: "Certificate 2",
  },
  {
    imageUrl:
      "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/135413912",
    alt: "Certificate 3",
  },
  {
    imageUrl:
      "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/134580032",
    alt: "Certificate 4",
  },
];

export const hobbies: HobbiesItem[] = [
  { title: "Coding & exploring new technologies" },
  { title: "Space & science" },
  { title: "Gaming" },
  { title: "Chess" },
  { title: "Bonsai" },
  { title: "Cats" },
  { title: "Electronic Music" },
];

export const projects: ProjectItem[] = [
  {
    title: "Portfolio Website",
    description: [
      "• Featuring an interactive 3D black hole visualization built with React, TypeScript, React Three Fiber & WebGL.",
      "• Includes real-time particle systems, orbital camera controls and sky box.",
      "• Responsive design for optimal viewing on various screen sizes.",
      "• Source code available on GitHub.",
    ],
  },
  {
    title: "Budgeting App (in progress)",
    description: [
      "• Tech stack: React Native, Expo, TypeScript, PostgreSQL, Kysely, TanStack Query, Turborepo.",
      "• Designed and bootstrapped a budgeting app in a scalable monorepo using Turborepo and Expo.",
      "• Implemented typed queries with Kysely and PostgreSQL for structured, maintainable backend logic.",
      "• Used TanStack Query for eﬃcient client-side state and caching.",
      "• Focused on clean architecture, oﬄine-first potential and responsive design.",
      "• Demonstrates strong understanding of project structure and toolchain setup.",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      "JavaScript, TypeScript, Python, HTML/CSS, SQL",
      "Used across frontend, backend and scripting tasks",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "React (including custom hooks, context API)",
      "React Native (Expo)",
      "Responsive design, Chakra UI, Tailwind CSS",
      "Comfortable translating wireframes into accessible, functional interfaces",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js, Express, FastAPI",
      "RESTful API design and integration",
      "Authentication & role-based access control",
      "Token-based authentication (JWT)",
      "Session handling & secure endpoints",
    ],
  },
  {
    title: "Database & Querying",
    skills: [
      "MySQL, PostgreSQL",
      "Schema design, relational data modeling",
      "Kysely (typed SQL builder)",
      "Database migrations",
    ],
  },
  {
    title: "Dev Tools & Workflows",
    skills: [
      "Git/GitHub - feature branching, pull requests, resolving conflicts",
      "Docker - containerized app environments for consistency and portability",
      "Vite - modern frontend build tool with built-in HMR and optimized production builds",
      "Postman/Bruno - API testing, authentication flows and endpoint debugging",
      "CLI tools - Bash, npm scripts, development workflow automation",
      "Turborepo - monorepo setup and task orchestration for full-stack projects",
    ],
  },
  {
    title: "Development Practices",
    skills: [
      "Agile methodology",
      "Debugging",
      "Pair programming",
      "Documentation writing",
      "Code refactoring",
      "Component-based architecture",
      "State management",
      "Clean code principles",
      "Pull request reviews",
      "Testing fundamentals",
      "API integration and error handling",
    ],
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "[Sam has] exemplary technical skills, ability to learn and adaptability. [Sam] has been a very adaptable developer since the beginning. He has always been able to get things working even outside of his expertise [...]",
    author: "Rawinder S, RevoTech",
  },
  {
    quote:
      "[Sam] has a deep curiosity and passion for software development. His thoughtful contributions to discussions, and the quality of his project work, clearly demonstrate his abilities as a developer, and his desire to learn and grow [...]",
    author: "Cameron M, Mission Ready",
  },
];
