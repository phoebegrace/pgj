export type ExperienceItem = {
  title: string;
  org: string;
  location?: string;
  date: string;
  bullets: string[];
  tags?: string[];
};

export type EducationItem = {
  school: string;
  program: string;
  date: string;
  bullets: string[];
  tags?: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Government Internship Program (GIP)",
    org: "TESDA | Provincial Office, Antique",
    location: "Antique, Philippines",
    date: "Mar 2024 — Present",
    bullets: [
      "Assisted the Provincial Director in planning and executing major events (incl. WorldSkills Competition 2025 – Provincial Level).",
      "Led technical + creative team for presentations, LED materials, and event marketing assets (tarpaulins, posters, video promotions).",
      "Coordinated logistics and documentation for provincial events and training programs.",
    ],
    tags: ["Events", "Creative Ops", "Documentation"],
  },
  {
    title: "Student Intern",
    org: "Primof Funnel Marketing Solutions Inc.",
    date: "Internship",
    bullets: [
      "Developed and optimized GoHighLevel (GHL) funnels and automation workflows for client accounts.",
      "Integrated AI tools and website components to improve user experience and operational efficiency.",
      "Collaborated with web development + marketing teams across front-end and back-end implementation.",
    ],
    tags: ["GoHighLevel", "Automation", "Web"],
  },
  {
    title: "Executive Virtual Assistant",
    org: "Freelance",
    date: "Contract",
    bullets: [
      "Supported a financial group by managing daily operations and automation through GoHighLevel (GHL) + Wavv Dialer.",
      "Created weekly/monthly performance reports and maintained CRM data accuracy.",
      "Managed task automations to streamline workflows and ensure timely task distribution.",
    ],
    tags: ["CRM", "Dialer", "Reporting"],
  },
  {
    title: "Founder & Creative Content Creator",
    org: "AVP - Iloilo | K-pop Fanclub",
    date: "Community",
    bullets: [
      "Designed and produced creative materials (pubmats, videos) for fan events and community projects.",
      "Led and managed large-scale events (200+ attendees) and received positive feedback.",
    ],
    tags: ["Design", "Video", "Community"],
  },
  {
    title: "Graphic Designer (Project-Based)",
    org: "Hamtic Multi-Purpose Corporation",
    date: "Project-based",
    bullets: [
      "Designed tarpaulins, event posters, booklets, and presentation slides for corporate/community events.",
    ],
    tags: ["Branding", "Print", "Slides"],
  },
  {
    title: "Creative Content Creator & Technical Support Volunteer",
    org: "Technical Staff (Local Community)",
    date: "Mar 2022 — May 2022",
    bullets: [
      "Provided technical and creative support during the 2022 presidential election.",
      "Handled video editing and creation of promotional materials.",
    ],
    tags: ["Video", "Support", "Creative"],
  },
];

export const education: EducationItem[] = [
  {
    school: "West Visayas State University",
    program: "BS Computer Science — Major in Artificial Intelligence",
    date: "2021 — Jun 2025",
    bullets: ["Magna Cum Laude", "Silver Medalist (AY 2021–2025)"],
    tags: ["AI", "CS", "Honors"],
  },
  {
    school: "Governor Julian Fullon Pacificador National School",
    program: "STEM (Junior & Senior High School)",
    date: "2015 — Apr 2021",
    bullets: [
      "Eagle Scout Rank (Boy Scout of the Philippines)",
      "Supreme Student Government Officer (2015–2020)",
      "Consistent Honor Student",
    ],
    tags: ["STEM", "Leadership", "Scouting"],
  },
];
