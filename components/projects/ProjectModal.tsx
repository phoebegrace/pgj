"use client";

import { useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/content/projects";
import ModalCarousel, { type CarouselMediaItem } from "./ModalCarousel";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // ✅ Normalize: project.media (embed/image) OR fallback to project.images
  const resolvedMedia: CarouselMediaItem[] = useMemo(() => {
    if (!project) return [];

    // If you later add project.media, it will be used automatically
    const maybeMedia = (project as any).media as CarouselMediaItem[] | undefined;
    if (maybeMedia?.length) return maybeMedia;

    // fallback: old images array
    return (project.images ?? []).map((src) => ({ type: "image" as const, src }));
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[9998] overflow-y-auto px-4 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />

          {/* panel */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl"
            style={{
              maxHeight: "85vh",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,.06), 0 30px 80px rgba(0,0,0,.60)",
            }}
            initial={{ y: 18, scale: 0.98, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, scale: 1, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: 18, scale: 0.98, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* gradient stroke */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,.35), rgba(37,99,235,.25), rgba(236,72,153,.18))",
                maskImage:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                maskComposite: "exclude",
                padding: "1px",
              }}
            />

            {/* scrollable content */}
            <div className="max-h-[85vh] overflow-y-auto p-6 pr-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs text-white/60">{project.category}</div>
                  <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-white/70">{project.overview}</p>
                </div>

                <button
                  onClick={onClose}
                  className="shrink-0 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/10 transition"
                >
                  Close
                </button>
              </div>

              {/* ✅ Carousel */}
              {resolvedMedia.length ? (
                <div className="mt-5">
                  <ModalCarousel media={resolvedMedia} title={project.title} />
                </div>
              ) : null}

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <div className="text-sm font-medium text-white/90">Highlights</div>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span
                          className="mt-[7px] h-2 w-2 rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, var(--purple), var(--blue))",
                          }}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-sm font-medium text-white/90">Tools</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 text-sm font-medium text-white/90">Links</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/10 transition"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs text-white/45">
                Tip: Press <span className="text-white/70">Esc</span> to close.
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
