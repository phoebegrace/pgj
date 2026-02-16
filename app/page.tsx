"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import {
  ArrowRight,
  Download,
  Quote,
  Code2,
  Monitor,
  Layers,
  Palette,
  Sparkles,
  Bot,
} from "lucide-react";
import Footer from "@/components/footer/Footer";

const featuredTools = {
  Frontend: [
    "Next.js",
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind",
    "Material UI",
    "Bootstrap",
  ],
  Platforms: ["GoHighLevel", "ActiveCampaign", "Mailchimp", "ClickFunnels"],
  Creative: ["Premiere Pro", "CapCut", "Canva", "Photoshop", "Illustrator"],
  "AI & Media": ["RVC (Voice Training)", "ElevenLabs", "Suno", "OBS"],
};

const testimonials = [
  {
    quote:
      "Placeholder testimonial — short, specific, outcome-driven. Replace with a real quote later.",
    name: "Client Name",
    role: "Role / Company",
  },
  {
    quote:
      "Placeholder testimonial — mention speed, quality, and communication. Replace with a real quote later.",
    name: "Client Name",
    role: "Role / Company",
  },
];

const TABS = Object.keys(featuredTools) as Array<keyof typeof featuredTools>;

function iconForSkill(name: string) {
  const n = name.toLowerCase();

  if (n.includes("next")) return <Monitor size={18} className="text-white/75" />;
  if (n.includes("react")) return <Code2 size={18} className="text-white/75" />;
  if (n.includes("type")) return <Code2 size={18} className="text-white/75" />;
  if (n.includes("java")) return <Code2 size={18} className="text-white/75" />;

  if (n.includes("tailwind")) return <Layers size={18} className="text-white/75" />;
  if (n.includes("bootstrap")) return <Layers size={18} className="text-white/75" />;
  if (n.includes("material")) return <Layers size={18} className="text-white/75" />;

  if (
    n.includes("gohighlevel") ||
    n.includes("activecampaign") ||
    n.includes("mailchimp") ||
    n.includes("clickfunnels")
  )
    return <Sparkles size={18} className="text-white/75" />;

  if (
    n.includes("photoshop") ||
    n.includes("illustrator") ||
    n.includes("canva") ||
    n.includes("premiere") ||
    n.includes("capcut")
  )
    return <Palette size={18} className="text-white/75" />;

  if (n.includes("rvc") || n.includes("eleven") || n.includes("suno") || n.includes("obs"))
    return <Bot size={18} className="text-white/75" />;

  return <Code2 size={18} className="text-white/75" />;
}

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={[
        "mx-auto w-full max-w-6xl px-6",
        "py-16 sm:py-20",
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}

function SoftDivider() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="my-10 h-px w-full bg-white/10" />
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>(TABS[0]);

  useEffect(() => {
    if (!TABS.includes(activeTab)) setActiveTab(TABS[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const skillItems = useMemo(() => {
    const flat = Object.entries(featuredTools).flatMap(([category, skills]) =>
      skills.map((s) => ({ category, name: s }))
    );

    return flat.filter((x) => x.category === activeTab);
  }, [activeTab]);

  return (
    <main className="min-h-screen">
  {/* HERO */}
<Section className="pt-20 sm:pt-28 pb-14 sm:pb-20 text-center">
  <div className="flex flex-col items-center">
    
    {/* Avatar */}
    <div className="mb-6">
      <img
        src="/phoebe.png"
        alt="Phoebe Grace Juayong"
        className="h-[200px] w-[200px] rounded-full object-cover"
      />
    </div>

    {/* Badge */}
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
      <span
        className="h-2 w-2 rounded-full"
        style={{ background: "var(--pink)" }}
      />
      Phoebe Grace Juayong
    </div>

    {/* Title */}
    <h1 className="mt-6 max-w-4xl text-[44px] font-semibold tracking-tight leading-[1.05] sm:text-6xl lg:text-[64px]">
      Web Platforms. Automation Systems.
      <br />
      <span className="bg-gradient-to-r from-[var(--purple)] via-[var(--blue)] to-[var(--pink)] bg-clip-text text-transparent">
        AI-Driven Creativity.
      </span>
    </h1>

    {/* Subheading */}
    <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-white/70 sm:text-[18px]">
      I build structured digital systems that connect interfaces, workflows,
      and intelligent tools into cohesive, scalable solutions — combining
      premium UI with execution-focused automation.
    </p>

    {/* CTA */}
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <Link
        href="/experience"
        className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/15"
      >
        Work Experience <ArrowRight size={16} />
      </Link>

      <a
        href="/Phoebe-Grace-Juayong-Resume.pdf"
        download
        className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/85 backdrop-blur transition hover:bg-white/10"
      >
        <Download size={16} />
        Download Resume
      </a>
    </div>

    <div className="mt-4 text-xs text-white/45">
      Available for remote roles • Systems + automation builds • Premium UI delivery
    </div>
  </div>
</Section>


      <SoftDivider />

      {/* SKILLS & TECHNOLOGIES */}
      <Section>
        <div className="space-y-2">
          <div className="text-base sm:text-lg font-semibold text-white/90">
  Skills & Technologies
</div>
<p className="max-w-2xl text-[15px] sm:text-base leading-relaxed text-white/60">

            A comprehensive overview of the technologies and tools I work with
          </p>
        </div>

         {/* Tabs centered */}
<div className="mt-6 flex justify-center">
  <div className="inline-flex w-fit items-center justify-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur">
    {TABS.map((tab) => {
      const active = tab === activeTab;
      return (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={[
            "rounded-xl px-5 py-2 text-sm transition",
            active
              ? "bg-black/40 text-white shadow-[0_0_0_1px_rgba(255,255,255,.08)]"
              : "text-white/55 hover:text-white/80",
          ].join(" ")}
        >
          {tab}
        </button>
      );
    })}
  </div>
</div>



{/* Cards (6 columns on desktop) */}
<div className="mt-8 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
  {skillItems.map((item) => (
    <div
      key={`${item.category}-${item.name}`}
      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur transition hover:border-white/20 hover:bg-white/7 hover:-translate-y-[1px] hover:shadow-[0_18px_60px_rgba(0,0,0,.30)]"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/30 shadow-[0_0_0_1px_rgba(255,255,255,.04)]">
          {iconForSkill(item.name)}
        </div>

        <div className="min-w-0">
          <div className="truncate text-[15px] font-medium text-white/90">
            {item.name}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      </Section>

      <SoftDivider />

      {/* TESTIMONIALS */}
      <Section>
        <div className="space-y-2">
          <div className="text-base sm:text-lg font-semibold text-white/90">
            Testimonials
          </div>
          <p className="max-w-2xl text-[15px] sm:text-base leading-relaxed text-white/60">

            Replace placeholders with real client quotes.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-start gap-3">
                <Quote size={16} className="mt-1 text-white/70" />
                <p className="text-[15px] sm:text-base leading-relaxed text-white/70">
{t.quote}</p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="text-sm font-semibold text-white/90">{t.name}</div>
                <div className="mt-1 text-xs text-white/55">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
