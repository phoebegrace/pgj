"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { projects, type Project } from "@/content/projects";
import ProjectModal from "./ProjectModal";

const tabs: Array<Project["category"] | "All"> = [
  "All",
  "Systems",
  "Web",
  "AI",
  "Media",
];

const experienceOptions: Array<{ id: string; label: string; title: string }> = [
  {
    id: "all",
    label: "All experiences",
    title: "Projects",
  },
  {
    id: "lunatik",
    label: "Lunatik / Geoff Luna Group",
    title: "Lunatik & Geoff Luna Group Projects",
  },
  {
    id: "tesda",
    label: "TESDA Projects",
    title: "TESDA Projects",
  },
    {
    id: "freelance",
    label: "Freelance Projects",
    title: "Freelance Projects",
  },
  {
    id: "hmpc",
    label: "Hamtic Multi Purpose Cooperative Projects",
    title: "Hamtic Multi Purpose Cooperative Projects",
  },
  {
    id: "primof",
    label: "Primof Projects",
    title: "Primof Projects",
  },
  {
    id: "personal",
    label: "Personal Projects",
    title: "Personal & Creative Lab Projects",
  },
  {
    id: "avp",
    label: "AVP Iloilo Projects.",
    title: "AVP Iloilo Projects",
  },
];

function AutoPreview({
  slides,
  priority = false,
}: {
  slides: string[];
  priority?: boolean;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!slides?.length || slides.length === 1) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(id);
  }, [slides]);

  if (!slides?.length) return null;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/20">
      {slides.map((src, i) => {
        const isPriority = priority && i === 0;

        return (
          <div
            key={`${src}-${i}`}
            className={[
              "absolute inset-0",
              "transition-all duration-[1200ms] ease-[cubic-bezier(.22,.61,.36,1)]",
              i === index ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]",
            ].join(" ")}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 33vw"
              className="object-cover"
              quality={70}
              priority={isPriority}
              loading={isPriority ? undefined : "lazy"}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function ProjectsSection() {
  const params = useSearchParams();
  const expFromUrl = params.get("exp") || "all";

  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const [exp, setExp] = useState<string>(expFromUrl);

  useEffect(() => {
    setExp(expFromUrl);
  }, [expFromUrl]);

  const currentExperience =
    experienceOptions.find((o) => o.id === exp) ?? experienceOptions[0];

  const filtered = useMemo(() => {
    let list = projects;

    if (exp !== "all") {
      list = list.filter((p) => p.experienceIds?.includes(exp));
    }

    if (active !== "All") {
      list = list.filter((p) => p.category === active);
    }

    return list;
  }, [active, exp]);

  const selected = useMemo(
    () =>
      filtered.find((p) => p.id === openId) ||
      projects.find((p) => p.id === openId) ||
      null,
    [openId, filtered]
  );

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 pb-20 pt-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-sm text-white/60">Selected Work</div>

          {/* ✅ Dynamic Title */}
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            {currentExperience.title}
          </h2>

          <p className="mt-2 max-w-2xl text-white/70">
            Click any project for more details.
          </p>
        </div>

        {/* Experience Dropdown */}
        <div className="w-full sm:w-[320px]">
          <label className="mb-2 block text-xs text-white/60">
            Filter by experience
          </label>

          <div className="relative">
            <select
              value={exp}
              onChange={(e) => setExp(e.target.value)}
              className="w-full appearance-none rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 pr-10 text-sm backdrop-blur transition hover:bg-white/7 focus:outline-none"
            >
              {experienceOptions.map((o) => (
                <option key={o.id} value={o.id} className="bg-[#0b0f17]">
                  {o.label}
                </option>
              ))}
            </select>

            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60">
              ▾
            </span>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={[
              "rounded-full px-4 py-2 text-sm transition",
              t === active
                ? "border border-white/20 bg-white/10"
                : "border border-white/10 bg-white/5 hover:bg-white/10",
            ].join(" ")}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, idx) => {
          const slides =
            p.media?.filter((m) => m.type === "image").map((m) => m.src) ??
            p.images ??
            [];

          return (
            <button
              key={p.id}
              onClick={() => setOpenId(p.id)}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:border-white/20 hover:bg-white/10"
            >
              {/* ✅ Only the first visible card gets priority */}
              {slides.length > 0 && (
                <AutoPreview slides={slides} priority={idx === 0} />
              )}

              <div className="mt-4 text-xs text-white/60">{p.category}</div>
              <div className="mt-2 text-lg font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-white/70">{p.oneLiner}</div>
            </button>
          );
        })}
      </div>

      <ProjectModal project={selected} onClose={() => setOpenId(null)} />
    </section>
  );
}
