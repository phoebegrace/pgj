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
    tags: ["about", "phoebe", "bio", "profile", "who are you"],
    content:
      "Phoebe Grace Juayong is a systems-focused web builder and automation specialist. She builds structured digital ecosystems combining GoHighLevel CRM systems, AI-powered workflows, modern web development (Next.js/React), and high-impact creative design. Her work blends technical execution with clean, premium SaaS-style interfaces.",
  },

  {
    id: "positioning",
    title: "Core Positioning",
    tags: ["positioning", "what do you do", "specialty", "focus"],
    content:
      "Phoebe specializes in four core areas: (1) GoHighLevel funnel and CRM system architecture, (2) AI-driven automation and creative workflows, (3) modern web development with structured UI systems, and (4) strategic creative design for digital brands and campaigns.",
  },

  {
    id: "ghl_systems",
    title: "GoHighLevel Systems & CRM Architecture",
    tags: ["ghl", "gohighlevel", "crm", "funnels", "automation", "workflows"],
    content:
      "Phoebe builds and optimizes GoHighLevel systems including lead capture funnels, booking flows, pipeline routing, automated follow-ups, task automation, and CRM structuring. She focuses on clean naming conventions, scalable workflows, and execution-ready automation systems.",
  },

  {
    id: "ai_workflows",
    title: "AI Tools & Automation Workflows",
    tags: ["ai", "automation", "ai tools", "creative ai", "systems"],
    content:
      "Phoebe integrates AI tools into marketing and content workflows to increase speed and output quality. This includes AI-assisted content generation, creative production pipelines, automation triggers, and structured delivery systems that reduce manual work and improve consistency.",
  },

  {
    id: "web_development",
    title: "Modern Web Development",
    tags: ["web", "development", "nextjs", "react", "frontend", "saas design"],
    content:
      "Phoebe develops modern, responsive web platforms using Next.js, React, and Tailwind. Her style focuses on premium SaaS aesthetics — dark themes, gradient accents, glass effects, clean spacing, and structured layouts built for clarity and performance.",
  },

  {
    id: "creative_design",
    title: "Creative Design & Digital Assets",
    tags: ["design", "graphics", "video", "creative", "branding"],
    content:
      "Phoebe produces high-impact digital assets including marketing graphics, event visuals, short-form video edits, slide decks, and campaign creatives. Her design work supports funnels, product launches, community events, and brand positioning.",
  },

  {
    id: "experience",
    title: "Professional Experience",
    tags: ["experience", "background", "work history"],
    content:
      "Phoebe’s experience spans digital operations, government internship leadership (TESDA Provincial Office), freelance executive virtual assistance with CRM automation, marketing funnel development at Primof Funnel Marketing Solutions Inc., and creative direction for community-led projects.",
  },

  {
    id: "tools_stack",
    title: "Tools & Technology Stack",
    tags: ["tools", "stack", "software", "platforms"],
    content:
      "Core tools include GoHighLevel, ActiveCampaign, Mailchimp, ClickFunnels, Zapier, React, Next.js, TypeScript, Tailwind CSS, Git/GitHub, Canva, Adobe tools, CapCut, OBS, ElevenLabs, and AI-powered creative platforms.",
  },

  {
    id: "availability",
    title: "Availability & Work Style",
    tags: ["hire", "availability", "remote", "work with phoebe"],
    content:
      "Phoebe is open to remote international roles and project-based system builds. She thrives in structured execution roles focused on clean systems, automation clarity, and measurable outcomes.",
  },

  {
    id: "contact",
    title: "Contact Phoebe",
    tags: ["contact", "email", "message", "book call"],
    content:
      "Use the Contact section of the site to send a message or schedule a call. Peboo can guide you to the right section depending on whether you need automation systems, web development, or creative support.",
  },

  {
    id: "peboo",
    title: "Peboo Assistant Routing Logic",
    tags: ["peboo", "assistant", "chatbot", "help"],
    content:
      "Peboo guides visitors quickly: If someone wants funnel or CRM help → direct to GoHighLevel systems. If they want automation or AI → share AI workflows. If they need a website → show web development. If they need creative assets → show design section. If they want to hire → route to Contact.",
  },
];