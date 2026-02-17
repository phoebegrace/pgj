export type Project = {
  id: string;
  title: string;
  category: "Systems" | "Web" | "AI" | "Media";
  oneLiner: string;
  overview: string;
  highlights: string[];
  tools: string[];

  // required (fallback + compatibility)
  images: string[];

  links: { label: string; url: string }[];

  // optional richer media
  media?: {
    type: "image" | "embed";
    src: string;
    title?: string;
  }[];

  experienceIds?: string[];
};

export const projects: Project[] = [
  
// personal portfolio
{
  id: "personal-portfolio",
  title: "Personal Portfolio Website (v3)",
  category: "Web",

  oneLiner:
    "Architected and deployed the third iteration of my personal portfolio, built with Next.js and TypeScript as a fully custom system.",

  overview: `This is the third version of my personal portfolio and the most technically refined one to date. My first portfolio, built a year ago, was primarily a cloned repository used to understand structure and deployment fundamentals. Since then, I have progressively rebuilt each version with deeper ownership over architecture, design systems, and frontend logic.

The current version is fully custom-built using Next.js, TypeScript, and Tailwind CSS, and deployed via Vercel. It represents my growth in web development — from layout replication to structured system design.

Beyond presentation, this portfolio integrates interactive and production-level features including an AI-powered chatbot (Peboo) powered by OpenAI, email handling integration using Resend, dynamic project filtering, responsive UI architecture, and modular component structuring.

The carousel visually reflects my progression across versions — from early static layouts to a scalable, interactive, and system-oriented web application. This is the project I am most proud of, as it reflects both my technical maturity and personal brand evolution.`,

  highlights: [
    "Built with Next.js, TypeScript, and Tailwind CSS",
    "Integrated AI chatbot (OpenAI-powered)",
    "Implemented email handling via Resend",
    "Designed modular component architecture",
    "Deployed production-ready site via Vercel",
    "Created dynamic filtering and interactive UI systems",
    "Rebuilt portfolio from cloned foundation to fully custom architecture",
  ],

  tools: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Vercel",
    "OpenAI API",
    "Resend",
    "React",
    "UI System Architecture",
  ],

  images: [
    "/images/projects/personal/portfolio/p1.png",
    "/images/projects/personal/portfolio/p2.png",
    "/images/projects/personal/portfolio/p3.png",
  ],

  media: [
    { type: "image", src: "/images/projects/personal/portfolio/p1.png" },
    { type: "image", src: "/images/projects/personal/portfolio/p2.png" },
    { type: "image", src: "/images/projects/personal/portfolio/p3.png" },
  ],

  links: [
    {
      label: "Current Portfolio (Vercel)",
      url: "https://pgj-one.vercel.app/",
    },
    {
      label: "Static Version",
      url: "https://www.juayong-pgj.site/",
    },
    {
      label: "Canva Version",
      url: "https://pebicart.my.canva.site/jpg-portfolio",
    },
  ],

  experienceIds: ["personal"],
},

// tech20
{
  id: "tech20",
  title: "TECH20 Website",
  category: "Web",
  oneLiner:
    "Modernized TECH20’s site with structured layout and premium UI updates.",
  overview:
    "Refined layout architecture, improved hierarchy, and strengthened messaging clarity while maintaining conversion-focused structure.",
  highlights: [
    "Reworked layout architecture and section flow",
    "Improved CTA placement and messaging hierarchy",
    "Built responsive premium UI sections",
  ],
  tools: ["GoHighLevel", "Custom HTML/CSS", "Gemini AI for image generation"],
  images: [
    "/images/projects/geoffluna/tech20/t20.png",
  ],
  media: [
    { type: "image", src: "/images/projects/geoffluna/tech20/t20.png" },
  ],
  links: [],
  experienceIds: ["lunatik"],
},

// coast2coast
{
  id: "coast2coast",
  title: "Coast2Coast Funnel",
  category: "Systems",
  oneLiner:
    "Lead capture funnel built with structured narrative and automation-ready flow.",
  overview:
    "Developed a structured opt-in funnel focused on pain-to-possibility storytelling, conversion clarity, and CRM-ready workflow integration.",
  highlights: [
    "Conversion-first landing structure",
    "Narrative-based messaging flow",
    "Automation-ready architecture",
  ],
  tools: ["GoHighLevel", "Canva", "Custom HTML/CSS"],
  images: [
    "/images/projects/geoffluna/coast2coast/c2c.png",
  ],
  media: [
    { type: "image", src: "/images/projects/geoffluna/coast2coast/c2c.png" },
  ],
  links: [],
  experienceIds: ["lunatik"],
},

// discoversouthern
{
  id: "discoversouthern",
  title: "Discover Southern California",
  category: "Web",

  oneLiner:
    "Led website rebranding and platform migration to GoHighLevel to modernize structure and unify marketing systems.",

  overview: `This project focused on rebranding and restructuring the existing Discover Southern California website while migrating it from its previous platform into GoHighLevel (GHL).

The objective was not only visual refinement but full platform consolidation — aligning the website with the client's marketing automation ecosystem inside GHL. I rebuilt sections using custom HTML/CSS, improved layout hierarchy, and modernized the design system to enhance brand authority and clarity.

Beyond design updates, the migration ensured smoother integration with CRM workflows, lead capture forms, and future automation scaling. The result was a more cohesive, conversion-ready website aligned with the client’s long-term digital strategy.`,

  highlights: [
    "Rebranded and modernized legacy website design",
    "Migrated site from previous platform to GoHighLevel",
    "Rebuilt layouts using custom HTML/CSS inside GHL",
    "Improved section hierarchy and content clarity",
    "Ensured CRM and lead capture integration compatibility",
    "Maintained full responsive behavior across devices",
  ],

  tools: [
    "GoHighLevel",
    "Custom HTML/CSS",
    "Platform Migration",
    "Responsive Design",
    "CRM Integration",
  ],

  images: [
    "/images/projects/geoffluna/discoversouthernca/dsca.png",
  ],

  media: [
    {
      type: "image",
      src: "/images/projects/geoffluna/discoversouthernca/dsca.png",
    },
  ],

  links: [],

  experienceIds: ["lunatik"],
},


// lunatik
{
  id: "lunatik",
  title: "Lunatik Marketing Agency",
  category: "Web",
  oneLiner:
    "Agency site redesign emphasizing authority and structured service presentation.",
  overview:
    "Reworked layout structure and service presentation to improve clarity, offer positioning, and premium visual rhythm.",
  highlights: [
    "Clear service positioning",
    "Improved visual rhythm and spacing",
    "Authority-driven layout structure",
  ],
  tools: ["GoHighLevel", "Brand Structuring", "Custom Sections"],
  images: [
    "/images/projects/geoffluna/lunatik/lunat.png",
  ],
  media: [
    { type: "image", src: "/images/projects/geoffluna/lunatik/lunat.png" },
  ],
  links: [],
  experienceIds: ["lunatik"],
},

// merrylonmain
{
  id: "merrylonmain",
  title: "Merry Lonmain – Business Meetup Funnel Page",
  category: "Web",

  oneLiner:
    "Designed and built a brand-aligned funnel page for a business meetup invitation and RSVP flow.",

  overview: `Developed a structured funnel page for a business meetup event, designed to reflect the client's brand identity while clearly communicating event details and objectives.

The page was built inside GoHighLevel using custom HTML/CSS to ensure layout precision, clean spacing, and professional visual hierarchy. Emphasis was placed on clarity — guiding visitors through the event overview, key information, and RSVP action without friction.

The structure was optimized for readability, credibility, and mobile responsiveness to ensure a seamless experience across devices while supporting registration and follow-up workflows within the GHL system.`,

  highlights: [
    "Built brand-aligned event invitation funnel",
    "Structured section flow for clarity and credibility",
    "Integrated RSVP / registration flow inside GHL",
    "Implemented custom HTML/CSS for layout precision",
    "Ensured responsive design across devices",
    "Aligned page structure with event communication goals",
  ],

  tools: [
    "GoHighLevel",
    "Custom HTML/CSS",
    "Event Funnel Structuring",
    "RSVP Integration",
  ],

  images: [
    "/images/projects/geoffluna/merrylonmain/mom.png",
  ],

  media: [
    {
      type: "image",
      src: "/images/projects/geoffluna/merrylonmain/mom.png",
    },
  ],

  links: [],

  experienceIds: ["lunatik"],
},


// ncrea
{
  id: "ncrea-course",
  title: "NCREA Course – Platform Migration & Content Structuring",
  category: "Systems",

  oneLiner:
    "Migrated and restructured a full course system into the client’s GoHighLevel agency account with enhanced visual and content presentation.",

  overview: `This project involved transferring an existing course from a separate GoHighLevel account into the client’s agency-level GHL environment.

Beyond migration, I redesigned course thumbnails, reuploaded and organized learning materials, and enhanced captions and descriptions for improved clarity and professionalism. The objective was to ensure the course structure aligned with the client’s branding while improving content readability and learner experience.

The process required careful asset management, structured content hierarchy, and system-level organization within GHL’s course framework to maintain functionality while upgrading presentation quality.`,

  highlights: [
    "Migrated full course system between GHL accounts",
    "Reuploaded and structured course materials",
    "Redesigned course thumbnails for brand consistency",
    "Enhanced captions and descriptions for clarity",
    "Improved course hierarchy and learner navigation",
    "Ensured functionality within client’s agency-level GHL setup",
  ],

  tools: [
    "GoHighLevel",
    "Course Migration",
    "Thumbnail Design",
    "UI Hierarchy",
  ],

  images: [
    "/images/projects/geoffluna/ncrea/course.png",
  ],

  media: [
    {
      type: "image",
      src: "/images/projects/geoffluna/ncrea/course.png",
    },
  ],

  links: [],

  experienceIds: ["lunatik"],
},


//tesda worldskills
{
  id: "tesda-worldskills",
  title: "TESDA - Antique WorldSkills Competition 2025",
  category: "Media",

  oneLiner:
    "Led creative direction and multimedia execution for TESDA WorldSkills provincial event, overseeing design, live visuals, and production systems.",

  overview: `Led the full creative execution for the TESDA WorldSkills provincial-level event in Antique, overseeing visual direction, multimedia production, and live technical implementation.

I designed and controlled LED presentation slides during the event using OBS, ensuring seamless on-site visual transitions and program flow. In addition, I produced the official event teaser, opening prayer video, and theme song (generated using Suno AI), alongside designing tarpaulins, posters, program schedules, competitor IDs, certificates, medals, and other event assets.

Beyond creative production, I assisted the Provincial Director of TESDA Antique in planning and execution, contributing to both pre-event preparation and live event coordination. The result was a cohesive, professional event experience across screen, print, audio, and stage presentation.`,

  highlights: [
    "Led overall creative direction for provincial WorldSkills event",
    "Designed and operated live LED visuals using OBS",
    "Produced event teaser, opening prayer video, and theme song (Suno AI)",
    "Designed tarpaulins, posters, competitor IDs, certificates, and medals",
    "Structured program flow and event schedule design",
    "Maintained visual consistency across print, screen, and live stage",
    "Assisted TESDA Provincial Director in planning and execution",
  ],

  tools: [
    "Canva",
    "OBS Studio",
    "Suno AI",
    "Event Design Systems",
    "Video Production",
    "Print Layout",
    "AI-Assisted Media Creation",
  ],

  images: [
    "/images/projects/tesda/worldskills.png",
    "/images/projects/tesda/tarpaulin.png",
    "/images/projects/tesda/poster.png",
  ],

  media: [
    { type: "image", src: "/images/projects/tesda/worldskills/ws5.jpg" },
    { type: "image", src: "/images/projects/tesda/worldskills/ws1.png" },
    { type: "image", src: "/images/projects/tesda/worldskills/ws2.png" },
    { type: "image", src: "/images/projects/tesda/worldskills/ws3.jpg" },
    { type: "image", src: "/images/projects/tesda/worldskills/ws4.jpg" },
    {
      type: "embed",
      src: "https://www.youtube.com/embed/lE_XiMrVHK4?rel=0&modestbranding=1",
      title: "TESDA WorldSkills Event Teaser",
    },
    {
      type: "embed",
      src: "https://www.youtube.com/embed/bl7YX8RFcHI?rel=0&modestbranding=1",
      title: "TESDA WorldSkills Opening Prayer",
    },
    {
      type: "embed",
      src: "https://www.youtube.com/embed/HKtYqOgf8pQ?rel=0&modestbranding=1",
      title: "TESDA WorldSkills Theme Song",
    },
  ],

  links: [],
  experienceIds: ["tesda"],
},



// tesda success stories
{
  id: "tesda-success-stories",
  title: "TESDA Success Stories – Documentary Campaign",
  category: "Media",

  oneLiner:
    "Directed and produced documentary-style success story features highlighting TESDA scholars’ real-world impact.",

  overview: `This was my first major project during my internship at TESDA Antique, where I led the end-to-end production of scholar success story features.

I conducted field visits to interview successful TESDA graduates, directed the interview flow, captured on-site footage, and edited the final videos for public release. Each story was structured to highlight the scholar’s journey — from training to career breakthrough — emphasizing the tangible impact of TESDA programs.

Beyond editing, I managed narrative flow, visual pacing, and branding consistency across all outputs. The videos were optimized for public information campaigns and social media distribution, ensuring accessibility and engagement while maintaining a professional documentary tone.`,

  highlights: [
    "Conducted field interviews with TESDA scholars",
    "Directed narrative-driven documentary structure",
    "Captured on-site footage and B-roll",
    "Edited and finalized multi-format video outputs",
    "Maintained branding and storytelling consistency",
    "Optimized videos for social media and public release",
  ],

  tools: [
    "Video Production",
    "Interview Direction",
    "CapCut",
    "Canva",
    "Field Documentation",
    "Storytelling Structure",
  ],

  images: [
    "/images/projects/tesda/success-stories/ss1.jpg",
    "/images/projects/tesda/success-stories/ss2.jpg",
  ],

  media: [
    { type: "image", src: "/images/projects/tesda/success stories/ss1.jpg" },
    { type: "image", src: "/images/projects/tesda/success stories/ss2.jpg" },
    {
      type: "embed",
      src: "https://www.youtube.com/embed/4Iys7Xa_xiA?rel=0&modestbranding=1",
      title: "TESDA Success Story 1",
    },
    {
      type: "embed",
      src: "https://www.youtube.com/embed/s6RscsuYp5c?rel=0&modestbranding=1",
      title: "TESDA Success Story 2",
    },
    {
      type: "embed",
      src: "https://www.youtube.com/embed/9gU3lE46Mzk?rel=0&modestbranding=1",
      title: "TESDA Success Story 3",
    },
    {
      type: "embed",
      src: "https://www.youtube.com/embed/dgrlpjqRDgo?rel=0&modestbranding=1",
      title: "TESDA Success Story 4",
    },
  ],

  links: [],

  experienceIds: ["tesda"],
},



//primof
{
  id: "primof-funnel-automation",
  title: "Primof Projects: Funnel & Automation Systems",
  category: "Systems",

  oneLiner:
    "Trained in GoHighLevel and contributed to marketing funnel and CRM automation systems during my internship at Primof.",

  overview: `My internship at Primof Funnel Marketing Solutions Inc. marked my first deep exposure to GoHighLevel and structured marketing systems. I was trained in funnel architecture, CRM automation, and workflow logic while contributing to real affiliate and conversion-driven campaigns.

Activities included funnel hacking, email nurture sequence structuring, workflow trigger configuration, lead capture systems, and form/calendar integrations. I worked closely with senior team members in developing scalable automation structures and refining messaging hierarchy for higher conversion clarity.

This experience strengthened both my technical and creative execution — particularly on the frontend side, where I optimized layouts using custom HTML/CSS within GoHighLevel. Being introduced to GHL significantly shaped my direction toward systems-building and automation, and it remains one of the foundations of my current work.`,

  highlights: [
    "Trained in GoHighLevel (GHL) funnel and CRM system architecture",
    "Built and refined multi-step marketing funnels",
    "Structured email nurture sequences and workflow triggers",
    "Configured lead capture systems with form & calendar integrations",
    "Performed funnel hacking and competitive structure analysis",
    "Assisted senior team members in system development & automation logic",
    "Customized frontend layouts using HTML/CSS within GHL",
  ],

  tools: [
    "GoHighLevel",
    "CRM Automation",
    "Workflow Triggers",
    "Email Nurture Sequences",
    "Lead Capture Systems",
    "Funnel Hacking",
    "Custom HTML/CSS",
    "Zapier",
    "Canva",
    "Figma",
  ],

  images: [
    "/images/projects/primof/1.png",
    "/images/projects/primof/2.png",
    "/images/projects/primof/3.png",
    "/images/projects/primof/4.png",
    "/images/projects/primof/5.png",
    "/images/projects/primof/6.png",
    "/images/projects/primof/7.png",
  ],

  media: [
    { type: "image", src: "/images/projects/primof/1.png" },
    { type: "image", src: "/images/projects/primof/2.png" },
    { type: "image", src: "/images/projects/primof/3.png" },
    { type: "image", src: "/images/projects/primof/4.png" },
    { type: "image", src: "/images/projects/primof/5.png" },
    { type: "image", src: "/images/projects/primof/6.png" },
    { type: "image", src: "/images/projects/primof/7.png" },
  ],

  links: [
    {
      label: "Canva Funnel Design (v1)",
      url: "https://www.canva.com/design/DAGlOQtuQrQ/dqa0ZTEP6FjPbfqsLT_4JA/view",
    },
    {
      label: "Automation Preview (v1)",
      url: "https://automation.civy.io/v2/preview/BYQSm6y76HEpsyqmhF4w",
    },
    {
      label: "Canva Funnel Design (v2)",
      url: "https://www.canva.com/design/DAGgxfaEFDU/VnCzTysqr8zesP7DCekp3g/view",
    },
    {
      label: "Automation Preview (v2)",
      url: "https://automation.civy.io/v2/preview/4H7dctiVPfRyGetO2lhe",
    },
  ],

  experienceIds: ["primof"],
},


//hmpc
  {
    id: "hmpc",
    title: "HMPC Brand Media Refresh",
    category: "Media",
    oneLiner:
      "Delivered a unified visual system across presentation, print, and event materials.",
    overview:
      "Led a visual refresh for HMPC by rebranding their slide deck, designing a structured informational booklet, and creating a high-impact tarpaulin — ensuring consistency across digital and print formats.",
    highlights: [
      "Rebranded and modernized presentation slide deck",
      "Designed structured, readable booklet layout",
      "Created tarpaulin with clear visual hierarchy",
      "Maintained consistent typography and brand elements across formats",
    ],
    tools: ["Canva"],
    images: [
      "/images/projects/hmpc/hmpc.png",
      "/images/projects/hmpc/hmpc1.png",
      "/images/projects/hmpc/hmpc2.png",
    ],
    media: [
      { type: "image", src: "/images/projects/hmpc/hmpc.png" },
      { type: "image", src: "/images/projects/hmpc/hmpc1.png" },
      { type: "image", src: "/images/projects/hmpc/hmpc2.png" },
    ],
    links: [
      {
        label: "Old Slide Deck (Before)",
        url: "https://drive.google.com/file/d/1vIiFs9dCgyBdl9EEcWxr2m1AWmvyOGl9/view",
      },
      {
        label: "Rebranded Slide Deck (After)",
        url: "https://drive.google.com/file/d/1x4a-RGlRX1wWsjBTKoJpIsQp4-YQtLpI/view",
      },
    ],
    experienceIds: ["hmpc"],
  },


//UNDERGRADUATE

// zenlens
{
  id: "zenlens",
  title: "Zenlens – AI-Based Classroom Stress Detection System",
  category: "AI", 

  oneLiner:
    "Undergraduate thesis project developing a facial emotion recognition system to estimate classroom-level stress metrics.",

  overview: `Zenlens is a two-year undergraduate thesis project focused on building an AI-driven system capable of detecting students’ stress levels based on facial expressions.

The system was trained using the FER2013 dataset to classify seven core emotions. Each detected emotion was assigned a weighted value contributing to an aggregated classroom stress index. The objective was to provide instructors with insight into overall emotional trends within a classroom setting.

The project involved dataset preprocessing, emotion classification modeling, system logic for stress computation, and web-based deployment for visualization. Zenlens represents an applied computer vision solution combining machine learning, UI implementation, and research-driven system design. The current version is fully functional and designed with scalability considerations for future expansion.`,

  highlights: [
    "Trained emotion recognition model using FER2013 dataset",
    "Classified seven facial emotion categories",
    "Designed weighted stress-level computation logic",
    "Built web interface for visualization and interaction",
    "Integrated ML output into structured frontend system",
    "Developed over a two-year research cycle",
  ],

  tools: [
    "Python",
    "FER2013 Dataset",
    "Machine Learning",
    "Emotion Classification",
    "HTML",
    "CSS",
    "JavaScript",
    "Netlify",
  ],

  images: [
    "/images/projects/undergraduate/zenlens.png",
  ],

  media: [
    {
      type: "image",
      src: "/images/projects/undergraduate/zenlens.png",
    },
  ],

  links: [
    {
      label: "Live Website",
      url: "https://zenlens.netlify.app/",
    },
  ],

  experienceIds: ["undergraduate"],
},


//naevisasks
{
  id: "naevisasks",
  title: "NaevisAsks",
  category: "AI",

  oneLiner:
    "Built a gamified AI quiz application using OpenAI API with dynamic answer validation and personality-driven responses.",

  overview: `NaevisAsks is an undergraduate AI-powered web application built using Python and Streamlit, integrating the OpenAI API for intelligent answer verification.

The application features three difficulty categories (Easy, Medium, Hard), each generating category-based questions. User responses are evaluated by the AI model, which verifies correctness while allowing minor spelling and capitalization errors to avoid strict false negatives.

A dynamic scoring system tracks performance, and the AI persona (“Naevis”) provides sarcastic or playful feedback based on results — creating an engaging, gamified user experience. The project explores prompt engineering, response validation logic, tolerance handling, and personality-driven AI interaction design.`,

  highlights: [
    "Integrated OpenAI API for intelligent answer verification",
    "Implemented difficulty-based question categorization (Easy, Medium, Hard)",
    "Built dynamic scoring and scoreboard tracking system",
    "Handled answer tolerance (minor spelling/capitalization errors)",
    "Designed AI persona with contextual, sarcastic responses",
    "Developed interactive UI using Streamlit",
  ],

  tools: [
    "Python",
    "Streamlit",
    "OpenAI API",
    "Prompt Engineering",
    "AI Response Validation",
    "GitHub",
  ],

  images: [
    "/images/projects/undergraduate/naevisasks.png",
  ],

  media: [
    {
      type: "image",
      src: "/images/projects/undergraduate/naevisasks.png",
    },
  ],

  links: [
    {
      label: "GitHub Repository",
      url: "https://github.com/phoebegrace/NaevisAsks",
    },
  ],

  experienceIds: ["undergraduate"],
},


//ascii
{
  id: "ascii-project",
  title: "ASCII Image Converter – Multi-Language Systems Analysis",
  category: "Systems",

  oneLiner:
    "Developed an image-to-ASCII converter implemented in Assembly, C, and Python to analyze performance across programming levels.",

  overview: `This undergraduate project explored the differences between low-level, mid-level, and high-level programming by implementing the same image-to-ASCII conversion system in Assembly, C, and Python.

The system converts images to grayscale, maps pixel brightness values to a predefined ASCII character set (from darkest to lightest), and reconstructs a visual representation using text characters. Darker pixels are assigned dense characters (e.g., "@"), while lighter pixels are mapped to lighter characters (e.g., "." or space), forming a structured ASCII-based output.

The project evaluated execution speed, memory efficiency, scalability, and development complexity across all three implementations. Performance testing revealed that Python struggled with large inputs (~10,000 pixels), demonstrating slower execution and less efficient memory handling. C provided a strong balance between performance and development effort, handling larger resolutions reliably. Assembly achieved optimal speed but required significantly higher development complexity and maintenance effort.

The conclusion identified mid-level programming (C) as the most practical balance between performance, control, and scalability.`,

  highlights: [
    "Implemented image-to-ASCII converter in Assembly, C, and Python",
    "Designed grayscale-to-ASCII brightness mapping logic",
    "Benchmarked execution speed and memory efficiency",
    "Tested scalability with increasing image resolutions",
    "Analyzed trade-offs between abstraction level and performance",
    "Concluded C as optimal balance of control and efficiency",
  ],

  tools: [
    "Assembly",
    "C",
    "Python",
    "Image Processing",
    "Performance Benchmarking",
    "Memory Management Analysis",
  ],

  images: [
    "/images/projects/undergraduate/ascii.png",
  ],

  media: [
    {
      type: "image",
      src: "/images/projects/undergraduate/ascii.png",
    },
  ],

  links: [
    {
      label: "Project Presentation",
      url: "https://www.canva.com/design/DAGYM5MMuNs/LGpOuVPukeJ08_gmju9-jw/view",
    },
  ],

  experienceIds: ["undergraduate"],
},


//slider puzzle
{
  id: "slider-puzzle",
  title: "Slider Puzzle",
  category: "Systems",

  oneLiner:
    "Developed a grid-based puzzle game in Python featuring dynamic scaling, time mechanics, and leaderboard tracking.",

  overview: `This undergraduate project involved building a fully functional slider puzzle game using Python, focused on structured game logic and interactive state management.

Players can choose different grid sizes and must rearrange shuffled tiles into the correct order. The system dynamically tracks tile states, validates legal moves, and updates the interface based on user interaction.

The game includes two modes: Classic Mode and Challenge Mode. In Challenge Mode, grid size increases progressively after each successful completion, introducing dynamic difficulty scaling. A timer system tracks completion time, with bonus time added after clearing each grid level. A leaderboard feature ranks players based on best completion times, reinforcing competitive logic and persistent state tracking.`,

  highlights: [
    "Implemented dynamic grid-based puzzle logic",
    "Developed tile movement validation and state tracking",
    "Designed progressive difficulty scaling system",
    "Integrated timer with bonus time mechanics",
    "Built leaderboard ranking system for performance tracking",
    "Structured game flow across multiple difficulty modes",
  ],

  tools: [
    "Python",
    "Game Logic Design",
    "State Management",
    "Dynamic Grid Systems",
    "Algorithmic Validation",
  ],

  images: [
    "/images/projects/undergraduate/slider.png",
  ],

  media: [
    {
      type: "image",
      src: "/images/projects/undergraduate/slider.png",
    },
  ],

  links: [],

  experienceIds: ["undergraduate"],
},


//dirlock
{
  id: "dirlock",
  title: "DirLock",
  category: "Systems",

  oneLiner:
    "Developed a Windows batch script to control directory access through permission-based locking and password logic.",

  overview: `DirLock is a lightweight Windows batch scripting application designed to restrict access to specific directories by modifying file system permissions.

The script enables users to lock a folder, effectively denying unauthorized access, and unlock it through a password-based prompt. Instead of relying on third-party software, the solution uses built-in command-line utilities to automate permission control at the operating system level.

This project demonstrates foundational understanding of file system manipulation, access restriction logic, and command-line automation. It provides a simple yet effective approach to local directory security while minimizing external dependencies.`,

  highlights: [
    "Automated directory locking and unlocking process",
    "Implemented password-based access control logic",
    "Modified Windows directory permissions programmatically",
    "Utilized built-in command-line utilities (no third-party tools)",
    "Explored lightweight security automation concepts",
  ],

  tools: [
    "Windows Batch Script",
    "Command Line Interface (CLI)",
    "File System Permissions",
    "Access Control Logic",
  ],

  images: [
    "/images/projects/undergraduate/dirlock.png",
  ],

  media: [
    {
      type: "image",
      src: "/images/projects/undergraduate/dirlock.png",
    },
  ],

  links: [
    {
      label: "Project Presentation",
      url: "https://www.canva.com/design/DAGmQnTNEIw/nWitE0rj-V3T58Fe0_KRIQ/view",
    },
  ],

  experienceIds: ["undergraduate"],
},

//combochow
{
  id: "combochow",
  title: "ComboChow – Food Discovery & Budget Tracking App",
  category: "Systems",

  oneLiner:
    "Designed a multi-kiosk food discovery platform concept that centralizes menu browsing, discount discovery, and expense tracking.",

  overview: `ComboChow is an undergraduate product concept focused on simplifying meal decision-making within multi-kiosk dining environments.

The platform allows users to browse menus across different kiosks in one interface, check product availability, discover discounts, and track food spending through a built-in logging system. The objective was to eliminate the need to visit individual kiosks and instead provide a centralized decision-support experience.

The project emphasized structured user flows, clean visual hierarchy, and intuitive interaction design. UI prototypes were developed using Flutter for conceptual interaction mapping and Figma for interface design and presentation.`,

  highlights: [
    "Designed centralized multi-kiosk browsing interface",
    "Integrated product availability and discount visibility concepts",
    "Implemented food expense logging and tracking flow",
    "Structured user decision-making journey",
    "Developed UI prototypes using Flutter and Figma",
  ],

  tools: [
    "Flutter",
    "Figma",
    "UI/UX Design",
    "User Flow Architecture",
    "Product Concept Development",
  ],

  images: [
    "/images/projects/undergraduate/cc.png",
  ],

  media: [
    {
      type: "image",
      src: "/images/projects/undergraduate/cc.png",
    },
  ],

  links: [
    {
      label: "Project Presentation",
      url: "https://www.canva.com/design/DAGEmocSHjw/-d8WCzoBQcRn-KVwKqkoGg/view",
    },
  ],

  experienceIds: ["undergraduate"],
},


//mandala art
{
  id: "mandala-art",
  title: "Mandala Art Generator – Procedural Geometry in Python",
  category: "Systems",

  oneLiner:
    "Built a procedural mandala generator using Python Turtle Graphics to explore symmetry and algorithmic pattern design.",

  overview: `Mandala Art Generator is an undergraduate creative coding project developed using Python and Turtle Graphics to programmatically generate symmetrical mandala-style visuals.

The system applies rotational symmetry, geometric repetition, and structured loop logic to produce layered circular patterns. By manipulating angles, step increments, and shape combinations, the design evolves algorithmically rather than being manually drawn.

Inspired by traditional mandala symbolism and personal childhood references, the project explores how structured code can transform mathematical repetition into visually expressive digital art. It demonstrates foundational understanding of procedural generation, geometric computation, and algorithmic composition.`,

  highlights: [
    "Implemented rotational symmetry using loop-based logic",
    "Applied geometric repetition and angle transformations",
    "Developed procedural pattern generation system",
    "Utilized Python Turtle Graphics for visual rendering",
    "Explored intersection of mathematics and creative coding",
  ],

  tools: [
    "Python",
    "Turtle Graphics",
    "Algorithmic Geometry",
    "Procedural Design",
    "GitHub",
  ],

  images: [
    "/images/projects/undergraduate/mandala.png",
  ],

  media: [
    {
      type: "image",
      src: "/images/projects/undergraduate/mandala.png",
    },
  ],

  links: [
    {
      label: "GitHub Repository",
      url: "https://github.com/phoebegrace/epic1-midterm-output",
    },
  ],

  experienceIds: ["undergraduate"],
},


//yobeesaidwhat
{
  id: "yobeesaidwhat",
  title: "yobeesaidwhat – Independent AI Music Artist",
  category: "AI",
  oneLiner:
    "Independent AI music artist releasing concept-driven tracks across major streaming platforms.",
  overview:
    "YOBEESAIDWHAT is an AI-assisted music project blending storytelling, emotional themes, and experimental production. The project focuses on creative direction, AI-driven sound development, and global digital distribution across major streaming platforms.",
  highlights: [
    "Released original AI-assisted tracks on global streaming platforms",
    "Built cohesive artist branding and concept direction",
    "Managed independent music distribution via DistroKid",
  ],
  tools: ["Suno", "DistroKid", "AI Music Production", "Creative Direction"],

  images: [
    "/images/projects/personal/aiartist/yobeesaidwhat.png",
  ],

  media: [
    {
      type: "image",
      src: "/images/projects/personal/aiartist/yobeesaidwhat.png",
    },
  ],

  links: [
    {
      label: "Spotify",
      url: "https://open.spotify.com/artist/6dGT5VvKBph2oaUkT7NK9C?si=hHNzLGUlT7Ss2ani-yyWOA",
    },
    {
      label: "YouTube Music",
      url: "https://music.youtube.com/channel/UCyT2O9RogjPH0k9Z1JNBRag?si=06GjbTQh4XhVKEau",
    },
    {
      label: "Apple Music",
      url: "https://music.apple.com/ph/artist/yobeesaidwhat/1826377181",
    },
    {
      label: "Amazon Music",
      url: "https://music.amazon.com/artists/B0FHG1QTW6/yobeesaidwhat",
    },
    {
      label: "Tidal",
      url: "https://tidal.com/artist/63628152",
    },
  ],

  experienceIds: ["personal"],
},

//baephee
{
  id: "baephee-ai-content",
  title: "BAEPHEE — AI Content Creation",
  category: "AI",
  oneLiner:
    "AI-generated short-form content optimized for TikTok growth.",
  overview:
    "A personal AI content project focused on vertical storytelling, visual experimentation, and algorithm-aware content strategy for TikTok.",
  highlights: [
    "AI-generated short-form videos",
    "TikTok growth experimentation",
    "Vertical storytelling format",
    "AI-assisted content workflows",
  ],
  tools: ["AI Visual Tools", "CapCut", "Content Strategy"],

  images: [
    "/images/projects/personal/aicontent/baephee.png",
  ],

  media: [
    {
      type: "image",
      src: "/images/projects/personal/aicontent/baephee.png",
    },
    {
      type: "embed",
      src: "https://www.tiktok.com/embed/v2/7511536401830137096",
      title: "AI Content Video 1",
    },
    {
      type: "embed",
      src: "https://www.tiktok.com/embed/v2/7511356942284082440",
      title: "AI Content Video 2",
    },
    {
      type: "embed",
      src: "https://www.tiktok.com/embed/v2/7513188192841993479",
      title: "AI Content Video 3",
    },
  ],

  links: [
    {
      label: "TikTok Profile",
      url: "https://www.tiktok.com/@baephee",
    },
  ],

  experienceIds: ["personal"],
},

//ai automation shorts
{
  id: "ai-automation-shorts",
  title: "AI Automations",
  category: "AI",
  oneLiner:
    "Automated AI-driven short-form video experiments published on YouTube Shorts.",
  overview:
    "A personal project exploring AI automation workflows for short-form video production. Focused on systemizing content generation, optimizing for Shorts format, and experimenting with automated creative pipelines.",
  highlights: [
    "Built AI-assisted short-form content workflows",
    "Automated idea-to-video production pipelines",
    "Optimized for YouTube Shorts format",
    "Experimented with scalable AI content systems",
  ],
  tools: ["AI Automation", "YouTube Studio", "Shorts Optimization", "Content Systems"],

  // ✅ Card thumbnail
  images: [
    "/images/projects/personal/aiautomation/aia.png",
  ],

  // ✅ Modal content
  media: [
    {
      type: "image",
      src: "/images/projects/personal/aiautomation/aia.png",
    },
    {
      type: "embed",
      src: "https://www.youtube.com/embed/kWzyFJkjiQY",
      title: "AI Automation Short 1",
    },
    {
      type: "embed",
      src: "https://www.youtube.com/embed/fRT2wi2PpY8",
      title: "AI Automation Short 2",
    },
  ],

  links: [
    {
      label: "YouTube Channel",
      url: "https://www.youtube.com/@phoebebuzz/shorts",
    },
  ],

  experienceIds: ["personal"],
},

//lyric videos
{
  id: "lyric-videos",
  title: "Lyric Video Productions",
  category: "Media",

  oneLiner:
    "Early-stage lyric video projects that marked the beginning of my video editing journey.",

  overview: `I started creating lyric videos at age 16 as a self-taught introduction to video editing. While the uploaded projects are relatively simple in execution, they represent the foundation of my understanding of pacing, timing, and music-synced editing.

Through these projects, I learned how to structure visuals around audio flow, animate basic typography, and export content optimized for YouTube. Over the years, my editing skills have significantly evolved beyond these early uploads, but this series reflects where my creative discipline began.

The project demonstrates long-term consistency in creative exploration and the early development of storytelling through motion and sound.`,

  highlights: [
    "Self-taught introduction to video editing",
    "Applied music-synced text timing and pacing",
    "Produced and published content on YouTube",
    "Built foundation in creative media workflow",
  ],

  tools: [
    "CapCut",
    "Basic Typography Animation",
    "Video Editing Fundamentals",
    "YouTube Studio",
  ],

  images: [
    "/images/projects/personal/lyricvideos/lv.png",
  ],

  media: [
    { type: "image", src: "/images/projects/personal/lyricvideos/lv.png" },
    { type: "embed", src: "https://www.youtube.com/embed/HN5D0I-T9Ig", title: "Lyric Video 1" },
    { type: "embed", src: "https://www.youtube.com/embed/h5u1ow0SSAs", title: "Lyric Video 2" },
    { type: "embed", src: "https://www.youtube.com/embed/8ueoWzjtucI", title: "Lyric Video 3" },
    { type: "embed", src: "https://www.youtube.com/embed/yirVgnCFghk", title: "Lyric Video 4" },
    { type: "embed", src: "https://www.youtube.com/embed/32YipueWNLc", title: "Lyric Video 5" },
    { type: "embed", src: "https://www.youtube.com/embed/TLh75C2blsw", title: "Lyric Video 6" },
  ],

  links: [
    {
      label: "YouTube Channel",
      url: "https://www.youtube.com/@phoebebuzz/videos",
    },
  ],

  experienceIds: ["personal"],
},



// avp
{
  id: "aespaverse",
  title: "aespaverse Iloilo",
  category: "Media",

  oneLiner:
    "Founded and led a multi-platform K-pop fan community brand with structured content strategy and cohesive visual identity.",

  overview: `aespaverse Iloilo (formerly aespa Iloilo) is a local fan community initiative that I founded and currently lead, based in Iloilo City.

I oversee the brand’s visual identity, content direction, and platform strategy across TikTok, X (Twitter), Instagram, and Facebook. The initiative focuses on structured community engagement, event promotions, and collaborative activities aligned with K-pop fan culture.

Beyond content production, I manage branding consistency, short-form media editing, promotional design assets for events and giveaways, and overall growth strategy. The project reflects hands-on leadership in digital branding, community systems management, and cross-platform media execution.`,

  highlights: [
    "Founder and head of aespaverse Iloilo community",
    "Developed and maintained cohesive brand identity",
    "Produced short-form content for TikTok and Instagram",
    "Designed promotional materials for events and giveaways",
    "Managed multi-platform publishing strategy",
    "Led community engagement and growth initiatives",
  ],

  tools: [
    "Canva",
    "CapCut",
    "Content Strategy",
    "Community Management",
    "Social Media Branding",
    "Leadership",
  ],

  images: [
    "/images/projects/avp/avp1.png",
    "/images/projects/avp/av2.png",
    "/images/projects/avp/avp.png",
  ],

  media: [
    { type: "image", src: "/images/projects/avp/avp1.png" },
    { type: "image", src: "/images/projects/avp/avp2.png" },
    { type: "image", src: "/images/projects/avp/avp3.png" },
  ],

  links: [
    {
      label: "TikTok",
      url: "https://www.tiktok.com/@aespaverse.ilo",
    },
    {
      label: "X (Twitter)",
      url: "https://x.com/aespaverseILO",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/aespaverse.ilo/",
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61575186093874",
    },
  ],

  experienceIds: ["aespaverse"],
},



//rvc
{
  id: "rvc-voice-training",
  title: "RVC Voice Training & Cloning",
  category: "AI",
  oneLiner:
    "Trained and experimented with RVC voice models for AI voice synthesis and cloning.",
  overview:
    "A hands-on AI experimentation project focused on training and refining RVC (Retrieval-Based Voice Conversion) models. The project involved dataset preparation, audio segmentation, model training iterations, and voice output optimization for realistic AI voice synthesis.",
  highlights: [
    "Prepared and cleaned voice training datasets",
    "Trained RVC voice conversion models",
    "Optimized audio output for clarity and realism",
    "Experimented with AI-assisted vocal production workflows",
  ],
  tools: ["RVC", "Audio Processing", "Dataset Preparation", "AI Voice Training"],

  // ✅ Card thumbnail
  images: [
    "/images/projects/personal/rvc/rvc.png",
  ],

  // ✅ Modal content
  media: [
    {
      type: "image",
      src: "/images/projects/personal/rvc/rvc.png",
    },
  ],

  links: [],

  experienceIds: ["personal"],
},

//carrd
{
  id: "carrd-websites",
  title: "Carrd Website Projects",
  category: "Web",
  oneLiner:
    "Designed and published interactive landing pages using Carrd.",
  overview:
    "A collection of lightweight landing pages built using Carrd. Focused on clean layout structuring, concise messaging, and a presentation for personal branding and community initiatives.",
  highlights: [
    "Built responsive one-page websites",
    "Structured concise, conversion-focused layouts",
    "Optimized for mobile-first viewing",
    "Designed minimalist branding systems",
  ],
  tools: ["Carrd", "Layout Structuring", "Visual Design", "Brand Design"],

  images: [
    "/images/projects/personal/carrd/carrd.png",
  ],

  media: [
    {
      type: "image",
      src: "/images/projects/personal/carrd/carrd.png",
    },
  ],

  links: [
    {
      label: "Website 1",
      url: "https://pebicartt.carrd.co/",
    },
    {
      label: "Website 2",
      url: "https://pebicart.carrd.co/",
    },
    {
      label: "aespaverse Iloilo Website",
      url: "https://aespaverseiloilo.carrd.co/",
    },
  ],

  experienceIds: ["personal"],
},

//sparkart
{
  id: "sparkart-community",
  title: "Sparkart – Photocard Collection Tracking Platform",
  category: "Web",

  oneLiner:
    "Built a personal web-based tracking system for organizing and displaying K-pop photocard collections.",

  overview: `Sparkart was my first personal web project, built in 2023 as a photocard collector who wanted a structured digital space to track and display my collection.

The platform allows users to filter photocards based on member, category, album era, and other metadata. Each card is interactive and flippable, showing front and back details to simulate a physical card experience.

Built using HTML, CSS, and JavaScript, the project explores structured UI layout, filter logic implementation, and interactive state transitions. I plan to expand the concept to include more groups and potentially migrate it to a more scalable stack in the future.`,

  highlights: [
    "Built filterable photocard collection interface",
    "Implemented dynamic filtering by member, album era, and category",
    "Developed flippable card UI for front/back interaction",
    "Structured metadata-driven display system",
    "Designed with future scalability in mind",
  ],

  tools: [
    "HTML",
    "CSS",
    "JavaScript",
    "UI Interaction Logic",
    "Vercel",
  ],

  images: [
    "/images/projects/personal/sparkart/s1.png",
  ],

  media: [
    {
      type: "image",
      src: "/images/projects/personal/sparkart/s1.png",
    },
  ],

  links: [
    {
      label: "Live Page",
      url: "https://pebicart.vercel.app/community.html",
    },
  ],

  experienceIds: ["personal"],
},



];
