"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type CarouselMediaItem =
  | { type: "image"; src: string }
  | { type: "embed"; src: string; title?: string };

type Props =
  | { title: string; images: string[]; media?: never }
  | { title: string; media: CarouselMediaItem[]; images?: never };

export default function ModalCarousel(props: Props) {
  const title = props.title;

  const items = useMemo<CarouselMediaItem[]>(() => {
    if ("media" in props) return props.media?.length ? props.media : [];
    const imgs = props.images?.length ? props.images : [];
    return imgs.map((src) => ({ type: "image" as const, src }));
  }, [props]);

  const [i, setI] = useState(0);

  // zoom / magnifier (images only)
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState("50% 50%");
  const [zoomScale, setZoomScale] = useState(2.2);

  useEffect(() => setI(0), [title]);
  useEffect(() => setZoomOpen(false), [i]);

  // ESC to close zoom, lock scroll while zoomed
  useEffect(() => {
    if (!zoomOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomOpen(false);
      if (e.key === "+" || e.key === "=")
        setZoomScale((s) => Math.min(4, +(s + 0.4).toFixed(2)));
      if (e.key === "-" || e.key === "_")
        setZoomScale((s) => Math.max(1.4, +(s - 0.4).toFixed(2)));
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [zoomOpen]);

  if (!items.length) return null;

  const prev = () => setI((v) => (v - 1 + items.length) % items.length);
  const next = () => setI((v) => (v + 1) % items.length);

  const current = items[i];

  const openZoomAtClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (current.type !== "image") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
    setZoomScale(2.2);
    setZoomOpen(true);
  };

  const onZoomMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  };

  return (
    <>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        {/* 16:9 lock */}
        <div className="relative aspect-video w-full">
          <AnimatePresence mode="wait">
            {current.type === "image" ? (
              <motion.img
                key={`img-${i}-${current.src}`}
                src={current.src}
                alt={`${title} preview ${i + 1}`}
                draggable={false}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover cursor-zoom-in select-none"
                onClick={openZoomAtClick}
                initial={{ opacity: 0, x: 10, scale: 1.02 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 1.02 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              />
            ) : (
              <motion.div
                key={`embed-${i}-${current.src}`}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 10, scale: 1.02 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 1.02 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <iframe
                  src={current.src}
                  title={current.title ?? `${title} video`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,.10) 0%, rgba(11,15,23,.70) 100%)",
            }}
          />

          {items.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm text-white/80 backdrop-blur hover:bg-black/45 transition"
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm text-white/80 backdrop-blur hover:bg-black/45 transition"
              >
                →
              </button>
            </>
          )}

          <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur">
            {current.type === "image" ? "Click to zoom" : "Embedded video"}
          </div>

          <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur">
            {i + 1} / {items.length}
          </div>
        </div>

        {items.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 p-3">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to item ${idx + 1}`}
                className={[
                  "h-2.5 w-2.5 rounded-full transition",
                  idx === i ? "bg-white/80" : "bg-white/20 hover:bg-white/35",
                ].join(" ")}
              />
            ))}
          </div>
        )}
      </div>

      {/* Zoom / Magnifier Overlay (images only) */}
      <AnimatePresence>
        {zoomOpen && current.type === "image" && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setZoomOpen(false);
            }}
          >
            <motion.div
              className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/12 bg-black/30 backdrop-blur"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-white/90">
                    {title}
                  </div>
                  <div className="text-xs text-white/55">
                    Zoom: {zoomScale.toFixed(1)}× • Move your mouse to magnify •
                    ESC to close
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setZoomScale((s) => Math.max(1.4, +(s - 0.4).toFixed(2)))
                    }
                    className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 transition"
                    aria-label="Zoom out"
                  >
                    −
                  </button>
                  <button
                    onClick={() =>
                      setZoomScale((s) => Math.min(4, +(s + 0.4).toFixed(2)))
                    }
                    className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 transition"
                    aria-label="Zoom in"
                  >
                    +
                  </button>
                  <button
                    onClick={() => setZoomOpen(false)}
                    className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 transition"
                    aria-label="Close zoom"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="relative aspect-video w-full">
                <motion.img
                  src={current.src}
                  alt={`${title} zoomed`}
                  draggable={false}
                  className="absolute inset-0 h-full w-full select-none cursor-zoom-out object-cover"
                  style={{
                    transformOrigin: zoomOrigin,
                    transform: `scale(${zoomScale})`,
                  }}
                  onMouseMove={onZoomMove}
                  onClick={() => setZoomOpen(false)}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
