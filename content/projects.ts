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
  {
    id: "tech20",
    title: "TECH20 Website Rebranding",
    category: "Web",
    oneLiner:
      "Modernized TECH20’s site with a premium, structured redesign.",
    overview:
      "Redesigned the website’s structure and UI to improve hierarchy, clarity, and brand authority while keeping it conversion-ready.",
    highlights: [
      "Reworked layout architecture and section flow",
      "Improved messaging hierarchy and CTA placement",
      "Built premium UI sections with responsive behavior",
    ],
    tools: ["GoHighLevel", "Custom HTML/CSS", "Responsive Design"],
    images: [
      "https://picsum.photos/1200/800?random=1",
      "https://picsum.photos/1200/800?random=2",
      "https://picsum.photos/1200/800?random=3",
    ],
    links: [
      { label: "Current Site", url: "https://tech-20.com/" },
      {
        label: "Redesigned Preview",
        url: "https://app.lunatikmarketing.com/v2/preview/dtfPkH6rLOXnbZSHsUXn",
      },
    ],
    experienceIds: ["lunatik"],
  },

  {
    id: "lunatik",
    title: "Lunatik Marketing Agency Redesign",
    category: "Web",
    oneLiner:
      "Rebuilt the agency website to feel more premium and structured.",
    overview:
      "Reworked the site to better communicate authority, clarify services, and improve overall structure and visual rhythm.",
    highlights: [
      "Clearer offer positioning and page structure",
      "Improved service sections and value framing",
      "Premium layout and spacing system",
    ],
    tools: ["GoHighLevel", "Brand Structuring", "Custom Sections"],
    images: [
      "https://picsum.photos/1200/800?random=4",
      "https://picsum.photos/1200/800?random=5",
      "https://picsum.photos/1200/800?random=6",
    ],
    links: [
      { label: "Current Site", url: "https://lunatikmarketingagency.com/" },
      {
        label: "Redesigned Preview",
        url: "https://app.lunatikmarketing.com/v2/preview/NziYFK8N4sFLf49zLTi9",
      },
    ],
    experienceIds: ["lunatik"],
  },

  {
    id: "c2c",
    title: "Coast2Coast Opt-In Funnel",
    category: "Systems",
    oneLiner:
      "A lead capture funnel for residential agents transitioning into commercial.",
    overview:
      "Built a structured opt-in funnel designed to educate, qualify, and capture leads, with a clean conversion flow.",
    highlights: [
      "Narrative structure: pain → possibility",
      "Conversion-first landing experience",
      "Workflow-ready structure for automation follow-up",
    ],
    tools: ["GoHighLevel", "Funnel Psychology", "CRM Workflow Planning"],
    images: [
      "https://picsum.photos/1200/800?random=7",
      "https://picsum.photos/1200/800?random=8",
      "https://picsum.photos/1200/800?random=9",
    ],
    links: [
      {
        label: "Live Funnel",
        url: "https://start.coast2coastresimercial.com/learn-more",
      },
    ],
    experienceIds: ["lunatik"],
  },

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
      { type: "image", src: "/images/projects/tesda/worldskills/ws1.png" },
      { type: "image", src: "/images/projects/tesda/worldskills/ws2.png" },
      {
        type: "embed",
        src: "https://www.youtube.com/embed/lE_XiMrVHK4?rel=0&modestbranding=1",
        title: "TESDA WorldSkills Event Recap",
      },
    ],
    links: [],
    experienceIds: ["tesda"],
  },

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
];
