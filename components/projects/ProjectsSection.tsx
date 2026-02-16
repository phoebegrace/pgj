"use client";

import { useMemo, useState } from "react";
import { projects, type Project } from "@/content/projects";
import ProjectModal from "./ProjectModal";
import ProjectCarousel from "./ProjectCarousel";

const tabs: Array<Project["category"] | "All"> = ["All", "Systems", "Web", "AI", "Media"];

export default function ProjectsSection() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  const selected = useMemo(
    () => filtered.find((p) => p.id === openId) || projects.find((p) => p.id === openId) || null,
    [openId, filtered]
  );

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 pb-20 pt-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-sm text-white/60">Selected Work</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Projects with story-driven breakdowns
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Click any project to open a glass modal with the full story, tools, and links.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={[
              "rounded-full px-4 py-2 text-sm backdrop-blur transition",
              t === active
                ? "border border-white/20 bg-white/10"
                : "border border-white/10 bg-white/5 hover:bg-white/10",
            ].join(" ")}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <button
            key={p.id}
            onClick={() => setOpenId(p.id)}
            className="group text-left rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
          >
            <ProjectCarousel images={p.images} /><div className="mt-4 flex items-center justify-between gap-3">
              <span className="text-xs text-white/60">{p.category}</span>
              <span className="text-xs text-white/40 transition group-hover:text-white/60">
                Click to open ↗
              </span>
            </div>

            <div className="mt-3 text-lg font-semibold">{p.title}</div>
            <div className="mt-2 text-sm text-white/70">{p.oneLiner}</div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tools.slice(0, 3).map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {tool}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setOpenId(null)} />
    </section>
  );
}
