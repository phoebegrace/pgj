"use client";

import { useEffect, useMemo, useState } from "react";
import { projects, type Project } from "@/content/projects";
import ProjectModal from "./ProjectModal";

const tabs: Array<Project["category"] | "All"> = ["All", "Systems", "Web", "AI", "Media"];

function AutoPreview({ slides }: { slides: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!slides?.length) return;
    if (slides.length === 1) {
      setIndex(0);
      return;
    }

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // ⏳ slower switch (4s)

    return () => window.clearInterval(id);
  }, [slides]);

  if (!slides?.length) return null;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/20">
      {slides.map((src, i) => (
        <img
          key={`${src}-${i}`}
          src={src}
          alt=""
          className={[
            "absolute inset-0 h-full w-full object-cover select-none",
            "transition-all duration-[1200ms] ease-[cubic-bezier(.22,.61,.36,1)]", // smoother easing
            i === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-[1.02]", // subtle zoom out
          ].join(" ")}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      ))}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,.08) 0%, rgba(11,15,23,.55) 100%)",
        }}
      />
    </div>
  );
}


export default function ProjectsSection() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  const selected = useMemo(
    () =>
      filtered.find((p) => p.id === openId) ||
      projects.find((p) => p.id === openId) ||
      null,
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
        {filtered.map((p) => {
          // ✅ autoplay slides: prefer media images; fallback to images
          const slides =
            p.media?.filter((m) => m.type === "image").map((m) => m.src) ??
            p.images ??
            [];

          return (
            <button
              key={p.id}
              onClick={() => setOpenId(p.id)}
              className="group text-left rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              {/* ✅ Auto-rotating preview (no video badge) */}
              {slides.length ? <AutoPreview slides={slides} /> : null}

              <div className="mt-4 flex items-center justify-between gap-3">
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
          );
        })}
      </div>

      <ProjectModal project={selected} onClose={() => setOpenId(null)} />
    </section>
  );
}
 