export type Project = {
  id: string;
  title: string;
  category: "Systems" | "Web" | "AI" | "Media";
  oneLiner: string;
  overview: string;
  highlights: string[];
  tools: string[];
  images: string[];
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    id: "tech20",
    title: "TECH20 Website Rebranding",
    category: "Web",
    oneLiner: "Modernized TECH20’s site with a premium, structured redesign.",
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
  },
  {
    id: "lunatik",
    title: "Lunatik Marketing Agency Redesign",
    category: "Web",
    oneLiner: "Rebuilt the agency website to feel more premium and structured.",
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
  },
];
