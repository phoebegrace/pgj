export type KBItem = {
  id: string;
  title: string;
  tags: string[];
  content: string;
};

export const KB: KBItem[] = [
  {
    id: "about",
    title: "About Phoebe Grace Juayong",
    tags: ["about", "phoebe", "bio", "profile"],
    content:
      "Phoebe Grace Juayong builds premium, modern SaaS-style marketing pages and systems. Strong in GoHighLevel (funnels + custom code), automation workflows, and front-end (React/TypeScript/Tailwind).",
  },
  {
    id: "projects",
    title: "Flagship Projects",
    tags: ["projects", "flagship", "portfolio", "case study"],
    content:
      "Flagship work includes: TECH20 Website Rebranding, Lunatik Marketing Website, and Coast2Coast Opt-In Funnel.",
  },
  {
    id: "systems",
    title: "Systems & Automation",
    tags: ["systems", "automation", "crm", "ghl", "workflows", "integrations"],
    content:
      "Phoebe designs funnel + CRM systems: lead capture, follow-ups, routing, booking flows, and integrations. Typical tools: GoHighLevel + email tools (ActiveCampaign/Mailchimp) + Zapier/webhooks when needed.",
  },
  {
    id: "tools",
    title: "Tools & Stack",
    tags: ["tools", "stack", "software", "tech"],
    content:
      "Toolkit includes GoHighLevel, ActiveCampaign, Mailchimp, ClickFunnels, React, TypeScript, Tailwind, Git/GitHub, Canva, Adobe tools, CapCut/Premiere, OBS, ElevenLabs, Suno.",
  },
  {
    id: "contact",
    title: "Contact",
    tags: ["contact", "hire", "email", "message"],
    content:
      "To contact Phoebe, use the Contact section of the site (contact form + links). Peboo can guide visitors to the right section based on their needs.",
  },
];
