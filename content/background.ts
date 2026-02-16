export type ExperienceItem = {
  id?: string; // ✅ add this
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
    title: "Digital Operations Assistant",
    org: "Geoff Luna Group (Independent Contractor)",
    date: "January 2026 — Present",
    bullets: [
      "Built and optimized funnel pages and websites for marketing and course-based campaigns.",
      "Developed structured course materials and digital assets for program delivery.",
      "Managed social media posting workflows and content scheduling.",
      "Designed graphics and edited short-form videos for marketing and brand growth.",
    ],
    tags: ["Funnels", "Web", "Design", "Short-Form Video", "Operations", "GoHighLevel", "Canva", "CapCut", "VistaSocial", "AI Tools", "Shopify"],
  },
  {
    id: "tesda",
    title: "Government Internship Program (GIP)",
    org: "TESDA | Provincial Office, Antique",
    location: "Antique, Philippines",
    date: "September 2025 — December 2025",
    bullets: [
      "Assisted the Provincial Director in planning and executing major events (incl. WorldSkills Competition 2025 – Provincial Level).",
      "Led technical + creative team for presentations, LED materials, and event marketing assets (tarpaulins, posters, video promotions).",
      "Coordinated logistics and documentation for provincial events and training programs.",
    ],
    tags: ["Events", "Creative Ops", "Documentation", "Canva", "Video Editing", "OBS", "ElevenLabs", "Suno", "Leadership", "Government", "CapCut"],
  },
  {
    title: "Executive Virtual Assistant",
    org: "Freelance",
    date: "October 2025 - December 2025",
    bullets: [
      "Supported a financial group by managing daily operations and automation through GoHighLevel (GHL) + Wavv Dialer.",
      "Created weekly/monthly performance reports and maintained CRM data accuracy.",
      "Managed task automations to streamline workflows and ensure timely task distribution.",
    ],
    tags: ["GoHighLevel", " WAVV Dialer", "Reporting"],
  },
    {
    title: "Student Intern",
    org: "Primof Funnel Marketing Solutions Inc.",
    date: "January 2025 — April 2025",
    bullets: [
      "Developed and optimized GoHighLevel (GHL) funnels and automation workflows for client accounts.",
      "Integrated AI tools and website components to improve user experience and operational efficiency.",
      "Collaborated with web development + marketing teams across front-end and back-end implementation.",
    ],
    tags: ["GoHighLevel", "Automation", "Web", "Figma", "Canva", "Zapier"],
  },
    {
    id: "hmpc", 
    title: "Graphic Designer (Project-Based)",
    org: "Hamtic Multi-Purpose Corporation",
    date: "July 2025",
    bullets: [
        "Designed tarpaulins, event posters, booklets, and presentation slides for corporate/community events.",
    ],
    tags: ["Branding", "Print", "Slides"],
    },
  {
    title: "Founder & Creative Content Creator",
    org: "AVP - Iloilo | K-pop Fanclub",
    date: "March 2024 - Present",
    bullets: [
      "Designed and produced creative materials (pubmats, videos) for fan events and community projects.",
      "Led and managed large-scale events (200+ attendees) and received positive feedback.",
    ],
    tags: ["Design", "Video", "Community", "Social Media Posting", "Canva", "CapCut"],
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
