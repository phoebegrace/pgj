"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type CarouselMediaItem =
  | { type: "image"; src: string }
  | { type: "embed"; src: string; title?: string };

type Props =
  | { title: string; images: string[]; media?: never }
  | { title: string; media: CarouselMediaItem[]; images?: never };

type Point = { x: number; y: number };

function dist(a: Point, b: Point) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.hypot(dx, dy);
}

export default function ModalCarousel(props: Props) {
  const title = props.title;

  const items = useMemo<CarouselMediaItem[]>(() => {
    if ("media" in props) return props.media?.length ? props.media : [];
    const imgs = props.images?.length ? props.images : [];
    return imgs.map((src) => ({ type: "image" as const, src }));
  }, [props]);

  const [i, setI] = useState(0);

  // zoom overlay (images only)
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1.8);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  // pointer tracking for pan + pinch
  const pointers = useRef<Map<number, Point>>(new Map());
  const gestureStart = useRef<{
    pan: { x: number; y: number };
    scale: number;
    dist: number;
    center: Point;
  } | null>(null);

  // double-tap reset (mobile)
  const lastTap = useRef<number>(0);

  useEffect(() => setI(0), [title]);
  useEffect(() => setZoomOpen(false), [i]);

  useEffect(() => {
    if (!zoomOpen) return;
    setPan({ x: 0, y: 0 });
    setZoomScale(1.8);
    pointers.current.clear();
    gestureStart.current = null;
  }, [zoomOpen, i, title]);

  // ESC to close zoom, +/- to zoom, lock scroll while zoomed
  useEffect(() => {
    if (!zoomOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomOpen(false);
      if (e.key === "+" || e.key === "=")
        setZoomScale((s) => Math.min(5, +(s + 0.25).toFixed(2)));
      if (e.key === "-" || e.key === "_")
        setZoomScale((s) => Math.max(1, +(s - 0.25).toFixed(2)));
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

  const openZoom = () => {
    if (current.type !== "image") return;
    setZoomOpen(true);
  };

  const clampScale = (s: number) => Math.max(1, Math.min(5, +s.toFixed(2)));

  const resetView = () => {
    setPan({ x: 0, y: 0 });
    setZoomScale(1);
    pointers.current.clear();
    gestureStart.current = null;
  };

  const onWheelZoom = (e: React.WheelEvent<HTMLDivElement>) => {
    // desktop wheel/trackpad zoom
    e.preventDefault();
    const step = e.ctrlKey ? 0.12 : 0.18;
    setZoomScale((s) => clampScale(e.deltaY > 0 ? s - step : s + step));
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);

    const p = { x: e.clientX, y: e.clientY };
    pointers.current.set(e.pointerId, p);

    const pts = Array.from(pointers.current.values());

    // double tap reset
    const now = Date.now();
    if (now - lastTap.current < 280) {
      resetView();
      lastTap.current = 0;
      return;
    }
    lastTap.current = now;

    if (pts.length === 1) {
      gestureStart.current = {
        pan: { ...pan },
        scale: zoomScale,
        dist: 0,
        center: pts[0],
      };
    } else if (pts.length >= 2) {
      const a = pts[0];
      const b = pts[1];
      const center = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      gestureStart.current = {
        pan: { ...pan },
        scale: zoomScale,
        dist: Math.max(1, dist(a, b)),
        center,
      };
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointers.current.has(e.pointerId)) return;

    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const pts = Array.from(pointers.current.values());
    const start = gestureStart.current;

    if (!start) return;

    if (pts.length === 1) {
      const p = pts[0];
      const dx = p.x - start.center.x;
      const dy = p.y - start.center.y;
      setPan({ x: start.pan.x + dx, y: start.pan.y + dy });
    } else if (pts.length >= 2) {
      const a = pts[0];
      const b = pts[1];
      const newDist = Math.max(1, dist(a, b));
      const factor = newDist / Math.max(1, start.dist);

      const newScale = clampScale(start.scale * factor);

      const newCenter = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      const cdx = newCenter.x - start.center.x;
      const cdy = newCenter.y - start.center.y;

      setZoomScale(newScale);
      setPan({ x: start.pan.x + cdx, y: start.pan.y + cdy });
    }
  };

  const onPointerUpOrCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    pointers.current.delete(e.pointerId);

    const pts = Array.from(pointers.current.values());
    if (pts.length === 0) {
      gestureStart.current = null;
      return;
    }

    if (pts.length === 1) {
      gestureStart.current = {
        pan: { ...pan },
        scale: zoomScale,
        dist: 0,
        center: pts[0],
      };
    } else {
      const a = pts[0];
      const b = pts[1];
      const center = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      gestureStart.current = {
        pan: { ...pan },
        scale: zoomScale,
        dist: Math.max(1, dist(a, b)),
        center,
      };
    }
  };

  return (
    <>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        {/* 16:9 lock */}
        <div className="relative aspect-video w-full">
          <AnimatePresence mode="wait">
            {current.type === "image" ? (
              <motion.div
                key={`img-${i}-${current.src}`}
                className="absolute inset-0 cursor-zoom-in select-none"
                onClick={openZoom}
                initial={{ opacity: 0, x: 10, scale: 1.02 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 1.02 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <Image
                  src={current.src}
                  alt={`${title} preview ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 92vw, 768px"
                  className="object-cover"
                  quality={75}
                  loading="lazy"
                />
              </motion.div>
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
            {current.type === "image" ? "Tap to zoom • Pinch + drag" : "Embedded video"}
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

      {/* Zoom Overlay (images only) */}
      <AnimatePresence>
        {zoomOpen && current.type === "image" && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 sm:p-4"
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
                    Zoom: {zoomScale.toFixed(1)}× • Pinch to zoom • Drag to pan •
                    Double-tap to reset • ESC to close
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setZoomScale((s) => clampScale(s - 0.25))}
                    className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 transition"
                    aria-label="Zoom out"
                  >
                    −
                  </button>
                  <button
                    onClick={() => setZoomScale((s) => clampScale(s + 0.25))}
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

              {/* Pan + Zoom viewer */}
              <div
                className="relative aspect-video w-full overflow-hidden"
                style={{ touchAction: "none" }}
                onWheel={onWheelZoom}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUpOrCancel}
                onPointerCancel={onPointerUpOrCancel}
              >
                {/* NOTE: zoom viewer uses a plain <img> to keep transform/pan simple */}
                <motion.img
                  src={current.src}
                  alt={`${title} zoomed`}
                  draggable={false}
                  className="absolute left-1/2 top-1/2 select-none"
                  style={{
                    transform: `translate(calc(-50% + ${pan.x}px), calc(-50% + ${pan.y}px)) scale(${zoomScale})`,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
