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
  

//portfolio
{
  id: "personal-portfolio",
  title: "Personal Portfolio Website",
  category: "Web",
  oneLiner:
    "Designed and rebuilt multiple iterations of my personal portfolio across different platforms.",
  overview:
    "A multi-version portfolio project showcasing the evolution of my personal brand. From Canva-based layouts to custom-coded deployments, each iteration focused on improving structure, design system consistency, and interactive presentation.",
  highlights: [
    "Built portfolio iterations across Canva, static hosting, and custom deployment",
    "Improved layout hierarchy and content structuring",
    "Deployed production-ready site via Vercel",
    "Focused on responsive design and UI refinement",
  ],
  tools: ["Next.js", "Tailwind", "Vercel", "Canva", "UI Structuring"],

  // ✅ Card preview slides
  images: [
    "/images/projects/personal/portfolio/p1.png",
    "/images/projects/personal/portfolio/p2.png",
    "/images/projects/personal/portfolio/p3.png",
  ],

  // ✅ Modal gallery
  media: [
    {
      type: "image",
      src: "/images/projects/personal/portfolio/p1.png",
    },
    {
      type: "image",
      src: "/images/projects/personal/portfolio/p2.png",
    },
    {
      type: "image",
      src: "/images/projects/personal/portfolio/p3.png",
    },
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
  tools: ["GoHighLevel", "Custom HTML/CSS", "Responsive Design"],
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
  tools: ["GoHighLevel", "Funnel Psychology", "CRM Workflow Planning"],
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
  title: "Discover Southern (DSCA)",
  category: "Web",
  oneLiner:
    "Structured web updates improving clarity, layout, and brand authority.",
  overview:
    "Implemented layout refinements and UI adjustments to improve visual hierarchy and section flow while maintaining brand consistency.",
  highlights: [
    "Improved spacing and layout structure",
    "Refined section hierarchy",
    "Maintained responsive behavior",
  ],
  tools: ["GoHighLevel", "Custom HTML/CSS", "Responsive Design"],
  images: [
    "/images/projects/geoffluna/discoversouthernca/dsca.png",
  ],
  media: [
    { type: "image", src: "/images/projects/geoffluna/discoversouthernca/dsca.png" },
  ],
  links: [],
  experienceIds: ["lunatik"],
},

// geofflunarealestate
{
  id: "geofflunarealestate",
  title: "Geoff Luna Real Estate",
  category: "Web",
  oneLiner:
    "Real estate web build focused on premium layout and structured messaging.",
  overview:
    "Built and refined a real estate-focused website with clear hierarchy, strong section flow, and a polished UI aligned with brand positioning.",
  highlights: [
    "Structured real estate messaging layout",
    "Premium spacing and hierarchy system",
    "Responsive implementation",
  ],
  tools: ["GoHighLevel", "Custom HTML/CSS", "UI Structuring"],
  images: [
    "/images/projects/geoffluna/geofflunarealestate/gl.png",
  ],
  media: [
    { type: "image", src: "/images/projects/geoffluna/geofflunarealestate/gl.png" },
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
  title: "Merry Lonmain Landing Page",
  category: "Web",
  oneLiner:
    "Landing page build with improved structure and responsive implementation.",
  overview:
    "Created a structured landing page with clear hierarchy, readable spacing, and premium layout consistency across screen sizes.",
  highlights: [
    "Optimized section flow",
    "Clean spacing system",
    "Mobile-responsive build",
  ],
  tools: ["GoHighLevel", "Custom HTML/CSS", "Responsive Design"],
  images: [
    "/images/projects/geoffluna/merrylonmain/mom.png",
  ],
  media: [
    { type: "image", src: "/images/projects/geoffluna/merrylonmain/mom.png" },
  ],
  links: [],
  experienceIds: ["lunatik"],
},

// ncrea
{
  id: "ncrea-course",
  title: "NCREA Course Page",
  category: "Systems",
  oneLiner:
    "Structured course-focused build designed for clarity and conversion flow.",
  overview:
    "Developed a course presentation page with structured information hierarchy and conversion-driven layout decisions.",
  highlights: [
    "Structured course content hierarchy",
    "Conversion-focused layout decisions",
    "Responsive implementation",
  ],
  tools: ["GoHighLevel", "Course Structuring", "UI Hierarchy"],
  images: [
    "/images/projects/geoffluna/ncrea/course.png",
  ],
  media: [
    { type: "image", src: "/images/projects/geoffluna/ncrea/course.png" },
  ],
  links: [],
  experienceIds: ["lunatik"],
},



//tesda worldskills
  {
    id: "tesda-worldskills",
    title: "TESDA WorldSkills Event Assets",
    category: "Media",
    oneLiner:
      "Produced multi-format event materials for TESDA’s provincial-level WorldSkills.",
    overview:
      "Created and coordinated presentation and marketing assets for provincial events, including event visuals for LED display, tarpaulins, posters, and promotional graphics—kept consistent for on-site execution.",
    highlights: [
      "Designed event-ready tarpaulins, posters, and promo graphics",
      "Built presentation materials and LED visuals for live use",
      "Kept layouts consistent across print + screen formats",
      "Supported documentation and event execution workflow",
    ],
    tools: ["Canva", "Print Layout", "Event Design", "Video/Promo Editing"],
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


//tesda success stories
  {
  id: "tesda-success-stories",
  title: "TESDA Success Stories Campaign",
  category: "Media",
  oneLiner:
    "Produced multi-format success story videos highlighting TESDA scholars' real-world impact.",
  overview:
    "Led the creative production of TESDA success story features, showcasing scholars who completed training programs and achieved career breakthroughs. Managed video structure, visual storytelling, and presentation consistency across all outputs.",
  highlights: [
    "Produced and edited scholar success story videos",
    "Structured narrative-driven interview flow",
    "Maintained consistent branding across all video outputs",
    "Optimized content for public and social media distribution",
  ],
  tools: ["Video Editing", "Canva", "CapCut", "OBS", "Storytelling"],

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
  title: "Primof Projects: Collection",
  category: "Systems",
  oneLiner:
    "Built and refined marketing funnels and CRM automation workflows during internship at Primof.",
  overview:
    "Contributed to funnel development and automation system structuring at Primof Funnel Marketing Solutions Inc. Worked on layout optimization, messaging clarity, and CRM-integrated workflow planning to support affiliate marketing and conversion-focused campaigns.",
  highlights: [
    "Built and refined multi-step marketing funnels",
    "Structured CRM-ready automation workflows",
    "Improved messaging hierarchy for better conversion clarity",
    "Collaborated within a multi-team marketing environment",
    "Iterated across multiple funnel and automation versions",
  ],
  tools: [
    "GoHighLevel",
    "Funnel Structuring",
    "CRM Automation",
    "Workflow Planning",
    "Canva",
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

//zenlens
{
  id: "zenlens",
  title: "Zenlens",
  category: "Web",
  oneLiner:
    "An undergraduate web project focused on structured UI design and responsive implementation.",
  overview:
    "Zenlens is an undergraduate project built to explore structured web layout design, responsive behavior, and modern UI presentation. The project emphasizes clean interface organization, visual hierarchy, and functional deployment.",
  highlights: [
    "Designed and implemented responsive web interface",
    "Structured layout with clear visual hierarchy",
    "Applied modern UI styling principles",
    "Deployed production-ready build",
  ],
  tools: ["HTML", "CSS", "JavaScript", "Netlify"],

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
  category: "Web",
  oneLiner:
    "An undergraduate web application exploring interactive user input and structured interface design.",
  overview:
    "NaevisAsks is an undergraduate project focused on building an interactive web-based interface that handles user input, structured content display, and logical UI behavior. The project emphasizes clean layout implementation and front-end structuring.",
  highlights: [
    "Built interactive user input functionality",
    "Structured responsive UI layout",
    "Implemented logical front-end behavior",
    "Published project repository on GitHub",
  ],
  tools: ["HTML", "CSS", "JavaScript", "GitHub"],

  // ✅ Card thumbnail (same directory as Zenlens)
  images: [
    "/images/projects/undergraduate/naevisasks.png",
  ],

  // ✅ Modal media
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
  title: "ASCII Project",
  category: "Systems",
  oneLiner:
    "An experimental project exploring visual output using ASCII-based design concepts.",
  overview:
    "An undergraduate creative experiment focused on ASCII-based visual composition and structured character formatting. The project explored how text-based elements can form structured digital visuals and layouts.",
  highlights: [
    "Explored ASCII-based visual structuring",
    "Applied character formatting for digital composition",
    "Experimented with text-as-design concepts",
    "Presented structured output through visual documentation",
  ],
  tools: ["ASCII Formatting", "Canva", "Layout Structuring"],

  // ✅ Thumbnail (same undergraduate directory)
  images: [
    "/images/projects/undergraduate/ascii.png",
  ],

  // ✅ Modal media
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
  title: "Slider Puzzle Game",
  category: "Systems",
  oneLiner:
    "A logic-based puzzle game built to explore state management and interactive systems design.",
  overview:
    "An undergraduate systems project focused on building a functional slider puzzle game. The project required structured logic implementation, tile state tracking, and dynamic UI updates based on user interaction.",
  highlights: [
    "Implemented grid-based puzzle logic",
    "Handled dynamic tile state management",
    "Built interactive game behavior system",
    "Applied structured problem-solving techniques",
  ],
  tools: ["JavaScript", "Game Logic", "State Management", "UI Interaction"],

  // ✅ Thumbnail
  images: [
    "/images/projects/undergraduate/slider.png",
  ],

  // ✅ Modal media
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
    "A simple batch script that locks and unlocks a specific directory using password protection.",
  overview:
    "DirLock is a lightweight batch scripting project designed to control access to a specified folder. The script enables users to lock and unlock a directory through a password-based prompt, demonstrating basic file system manipulation and command-line automation.",
  highlights: [
    "Automated directory locking and unlocking",
    "Implemented password-based access logic",
    "Used Windows batch scripting for file control",
    "Explored command-line level automation",
  ],
  tools: ["Batch Script", "Windows Command Line", "File System Control"],

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
  title: "ComboChow",
  category: "Web",
  oneLiner:
    "A UI concept project that helps users decide what to eat through structured interaction design.",
  overview:
    "ComboChow is a UI-focused undergraduate concept project designed to assist users in choosing meal combinations. The project emphasizes intuitive layout structuring, clean visual hierarchy, and user-centered decision flow.",
  highlights: [
    "Designed user-centered meal selection interface",
    "Structured intuitive interaction flow",
    "Applied clean UI layout principles",
    "Presented concept through structured visual documentation",
  ],
  tools: ["UI Design", "Canva", "User Flow Structuring", "Layout Design"],

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


//mandala
{
  id: "mandala-art",
  title: "Mandala Art Generator",
  category: "Systems",
  oneLiner:
    "An undergraduate project generating structured mandala patterns through programmatic design.",
  overview:
    "Mandala Art is an undergraduate creative coding project focused on generating symmetrical mandala-style visuals using structured logic and pattern repetition. The project explores geometric symmetry, algorithmic layout, and visual composition through code.",
  highlights: [
    "Implemented symmetrical pattern generation logic",
    "Applied geometric repetition techniques",
    "Explored creative coding concepts",
    "Published source code on GitHub",
  ],
  tools: ["JavaScript", "Algorithmic Design", "Geometric Logic", "GitHub"],

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
  title: "YOBEESAIDWHAT",
  category: "AI",
  oneLiner:
    "Independent AI music artist releasing concept-driven tracks across major streaming platforms.",
  overview:
    "YOBEESAIDWHAT is an AI-assisted music project blending storytelling, emotional themes, and experimental production. The project focuses on creative direction, AI-driven sound development, and global digital distribution across major streaming platforms.",
  highlights: [
    "Released original AI-assisted tracks on global streaming platforms",
    "Built cohesive artist branding and concept direction",
    "Managed independent music distribution via DistroKid",
    "Developed AI-assisted production workflows",
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
    "Produced stylized lyric videos optimized for YouTube distribution.",
  overview:
    "A personal creative project focused on lyric video production, combining typography animation, mood-driven visuals, and music synchronization. Each video was structured for viewer retention and YouTube optimization.",
  highlights: [
    "Designed animated lyric typography",
    "Matched visuals to song emotion and pacing",
    "Optimized videos for YouTube audience retention",
    "Managed full production from concept to export",
  ],
  tools: ["CapCut", "Video Editing", "Typography Animation", "YouTube Studio"],

  images: [
    "/images/projects/personal/lyricvideos/lv.png",
  ],

  media: [
    {
      type: "image",
      src: "/images/projects/personal/lyricvideos/lv.png",
    },
    {
      type: "embed",
      src: "https://www.youtube.com/embed/HN5D0I-T9Ig",
      title: "Lyric Video 1",
    },
    {
      type: "embed",
      src: "https://www.youtube.com/embed/h5u1ow0SSAs",
      title: "Lyric Video 2",
    },
    {
      type: "embed",
      src: "https://www.youtube.com/embed/8ueoWzjtucI",
      title: "Lyric Video 3",
    },
    {
      type: "embed",
      src: "https://www.youtube.com/embed/yirVgnCFghk",
      title: "Lyric Video 4",
    },
    {
      type: "embed",
      src: "https://www.youtube.com/embed/32YipueWNLc",
      title: "Lyric Video 5",
    },
    {
      type: "embed",
      src: "https://www.youtube.com/embed/TLh75C2blsw",
      title: "Lyric Video 6",
    },
  ],

  links: [
    {
      label: "YouTube Channel",
      url: "https://www.youtube.com/@phoebebuzz/videos",
    },
  ],

  experienceIds: ["personal"],
},


//avp
  {
  id: "aespaverse",
  title: "Aespaverse Iloilo",
  category: "Media",
  oneLiner:
    "Built and managed a multi-platform fan community brand with consistent visual identity and content strategy.",
  overview:
    "Led the creative direction and content production for Aespaverse Iloilo, a local fan community initiative. Managed branding, visual assets, and short-form media content across multiple social platforms while maintaining a cohesive identity aligned with K-pop fan culture and event collaborations.",
  highlights: [
    "Developed consistent visual branding across platforms",
    "Produced short-form content for TikTok and Instagram",
    "Designed promotional graphics for events and giveaways",
    "Managed community engagement and growth strategy",
  ],
  tools: ["Canva", "CapCut", "Content Strategy", "Community Management"],

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
    "Designed and published minimalist landing pages using Carrd.",
  overview:
    "A collection of lightweight landing pages built using Carrd. Focused on clean layout structuring, concise messaging, and mobile-first presentation for personal branding and community initiatives.",
  highlights: [
    "Built responsive one-page websites",
    "Structured concise, conversion-focused layouts",
    "Optimized for mobile-first viewing",
    "Designed minimalist branding systems",
  ],
  tools: ["Carrd", "Layout Structuring", "Mobile Optimization", "Brand Design"],

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
  title: "Sparkart — Creative Community Initiative",
  category: "Web",
  oneLiner:
    "Designed a digital community concept platform for creative collaboration and engagement.",
  overview:
    "Sparkart is a community-focused web initiative built to explore creative collaboration, digital engagement, and structured presentation of community-driven content. The project focused on layout structuring, clarity of messaging, and lightweight web deployment.",
  highlights: [
    "Designed structured community layout page",
    "Organized content for digital engagement",
    "Focused on clarity and visual hierarchy",
    "Deployed via Vercel hosting",
  ],
  tools: ["HTML", "CSS", "Vercel", "Layout Structuring"],

  // ✅ Card thumbnail
  images: [
    "/images/projects/personal/sparkart/s1.png",
  ],

  // ✅ Modal media
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
