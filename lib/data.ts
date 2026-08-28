export type StatusTag = "active" | "complete" | "progress" | "planned";

export interface ExperienceItem {
  org: string;
  role: string;
  date: string;
  status: StatusTag;
  bullets: string[];
}

export interface ProjectItem {
  name: string;
  status: StatusTag;
  description: string;
  stack: string[];
  link?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface CertItem {
  name: string;
  issuer: string;
  date: string;
  id: string;
}

export interface EducationItem {
  school: string;
  detail: string;
  date: string;
}

export interface LeadershipItem {
  org: string;
  date: string;
  roles: string[];
}

export const profile = {
  name: 'Chamudi Upeka',
  roleLine: 'full-stack engineer / automation / ai & ml / devops',
  disciplines: ['Full-stack', 'Test automation', 'AI & ML', 'DevOps & cloud'],
  // Kept short so the hero fits one screen. The long version lives in `about`.
  intro:
    'Computer Science undergraduate at the University of Colombo School of Computing. I build software end to end, from React and Next.js interfaces down to Spring Boot and Flask services, with test automation and CI/CD around them.',
  about: [
    "I'm a Computer Science undergraduate at the University of Colombo School of Computing, and I work across the whole stack. On the front end that means React and Next.js with TypeScript; on the back end, Spring Boot, Flask, and Node with PostgreSQL or MongoDB behind them. Two internships shaped most of it: building production ERP modules at StackNet, and writing Playwright automation inside Agile sprints at OrangeHRM.",
    "What pulls me forward is the engineering around the product. I'm deep in test automation and CI/CD, comfortable in Linux and Docker, and increasingly focused on applied AI and machine learning, where I'm building projects that put models to work on real problems rather than treating them as a demo.",
  ],
  facts: [
    { label: 'location', value: 'Colombo, Sri Lanka' },
    { label: 'university', value: 'Univ. of Colombo, BSc in CS' },
    { label: 'enrolled', value: '2023 → 2026' },
    { label: 'currently', value: 'SE Intern @ StackNet' },
    { label: 'focus', value: 'full-stack · ai/ml · devops' },
  ],
  contact: {
    email: 'mkcupeka@gmail.com',
    phone: '+94 71 654 7643',
    // TODO: replace with real profile URLs
    github: 'https://github.com/chamudiupeka',
    githubLabel: 'github.com/chamudi-upeka',
    linkedin: 'https://www.linkedin.com/in/upeka-kumarage/',
    linkedinLabel: 'linkedin.com/in/chamudi-upeka',
  },
};

export const experience: ExperienceItem[] = [
  {
    org: "StackNet (Pvt) Ltd.",
    role: "Software Engineering Intern",
    date: "2026-05 → present",
    status: "active",
    bullets: [
      "Contributing to PRO-System, an ERP platform built with Flask and PostgreSQL, covering inventory, distribution, accounting, and reporting modules.",
      "Built the distribution module end to end: stock transfer requests, approvals, and returns management.",
      "Fixed backend logic issues in cost and profit calculations to improve reporting accuracy.",
      "Working on SCAP, a Flask and PostgreSQL platform for national solar-compliance registration and audit workflows.",
      "Improved error handling and form validation for clearer end-user feedback.",
    ],
  },
  {
    org: "OrangeHRM",
    role: "Quality Assurance Engineer Intern",
    date: "2025-11 → 2026-05",
    status: "complete",
    bullets: [
      "Performed automation testing with Playwright and TypeScript inside Agile development sprints.",
      "Collaborated with developers and QA engineers via Git and GitHub for version control and code review.",
      "Used Linux environments for automation testing and deployment-related workflows.",
      "Tracked defects and managed sprints in Jira and Zoho, gaining exposure to CI/CD and release processes.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    name: 'BUSMATE LK',
    status: 'complete',
    description:
      'Microservices-based transport platform for SLTB and private bus operations: online ticket booking, seat reservation, and live bus tracking.',
    stack: [
      'Spring Boot',
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Microservices',
    ],
    link: 'https://github.com/Busmate-Lk',
  },
  {
    name: 'MediTrust',
    status: 'complete',
    description:
      'Healthcare support platform connecting patients, doctors, and donors for prescriptions, consultations, and treatment support.',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    link: 'https://github.com/chamudiupeka/Idealize_CodeWave',
  },
  {
    name: 'Waste360',
    status: 'complete',
    description:
      'Polythene waste management platform enabling organized collection, recycling into reusable products, and public participation in disposal and sales.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    link: 'https://github.com/chamudiupeka/CS45-main',
  },
  {
    name: 'School Admin System',
    status: 'complete',
    description:
      'Management platform for student enrollment, staff records, and tutorial scheduling.',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    link: '#',
  },
  // {
  //   name: "AI Job Application Tracker",
  //   status: "progress",
  //   description:
  //     "CV-to-job-description match analysis, missing-skill detection, and AI-generated interview questions, on top of a full application tracker.",
  //   stack: ["Next.js", "Spring Boot", "FastAPI", "LLM", "Docker"],
  // },
  // {
  //   name: "AI Test Case Generator",
  //   status: "planned",
  //   description:
  //     "Converts a written requirement into structured test cases, then into runnable Playwright automation code, with a report at the end.",
  //   stack: ["Python", "LLM", "Playwright"],
  // },
];

export const skillGroups: SkillGroup[] = [
  { label: "languages", items: ["Java", "Python", "JavaScript", "TypeScript", "PHP", "SQL", "HTML/CSS"] },
  { label: "frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { label: "backend", items: ["Spring Boot", "Flask", "Node.js", "Express.js", "REST APIs"] },
  { label: "databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { label: "devops & cloud", items: ["Docker", "Kubernetes", "Linux", "CI/CD", "Git/GitHub"] },
  { label: "testing & automation", items: ["Playwright", "Postman", "Functional & Non-functional Testing"] },
  // TODO: trim this to what you can speak to in an interview.
  //{ label: "ai & ml", items: ["Python", "LLM APIs", "FastAPI", "Pandas", "NumPy"] },
  { label: "practice", items: ["Agile/Scrum", "Jira", "DSA"] },
];

export const certifications: CertItem[] = [
  {
    name: "ISTQB Certified Tester, Foundation Level",
    issuer: "CTFL (Core) v4.0 · Sri Lanka Software Testing Board",
    date: "2026-05",
    id: "SL-CTFL-2605-7768",
  },
];

export const education: EducationItem[] = [
  {
    school: "University of Colombo School of Computing (UCSC)",
    detail: "BSc in Computer Science",
    date: "2023 → 2026",
  },
  {
    school: "Sanghamitta Balika Vidyalaya, Galle",
    detail: "Advanced Level: Combined Mathematics (A), Chemistry (A), Physics (B)",
    date: "2012 → 2021",
  },
];

export const leadership: LeadershipItem[] = [
  {
    org: "IEEE Student Branch, UCSC",
    date: "2023 → 2025",
    roles: [
      "Content Team Lead (2024–2025)",
      "Co-Chair, Organizing Committee for CodeQuest: Vault Edition (2025)",
      "Organizing Committee member, MADHack 3.0 (2024)",
    ],
  },
  {
    org: "Rotaract Club, UCSC",
    date: "2023 → 2025",
    roles: ["Treasurer (2024–2025)"],
  },
  {
    org: "Hackathons",
    date: "2025",
    roles: [
      "Intellihack 5.0, organized by IEEE Computer Society, UCSC",
      "IDEALIZE'25, organized by AIESEC, University of Moratuwa",
    ],
  },
];
