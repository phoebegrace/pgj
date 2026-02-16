"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ModalCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const safeImages = useMemo(() => (images?.length ? images : []), [images]);
  const [i, setI] = useState(0);

  useEffect(() => {
    setI(0);
  }, [title]);

  if (!safeImages.length) return null;

  const prev = () => setI((v) => (v - 1 + safeImages.length) % safeImages.length);
  const next = () => setI((v) => (v + 1) % safeImages.length);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="relative aspect-[16/9] w-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={i}
            src={safeImages[i]}
            alt={`${title} preview ${i + 1}`}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, x: 10, scale: 1.02 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 1.02 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          />
        </AnimatePresence>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,.10) 0%, rgba(11,15,23,.70) 100%)",
          }}
        />

        {safeImages.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm text-white/80 backdrop-blur hover:bg-black/45 transition"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm text-white/80 backdrop-blur hover:bg-black/45 transition"
            >
              →
            </button>
          </>
        )}

        <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur">
          {i + 1} / {safeImages.length}
        </div>
      </div>

      {safeImages.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 p-3">
          {safeImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to image ${idx + 1}`}
              className={[
                "h-2.5 w-2.5 rounded-full transition",
                idx === i ? "bg-white/80" : "bg-white/20 hover:bg-white/35",
              ].join(" ")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
