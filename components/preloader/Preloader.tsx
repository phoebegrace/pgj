"use client";

import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] grid place-items-center"
      style={{
        background:
          "radial-gradient(900px 600px at 20% 10%, rgba(124,58,237,.18), transparent 60%)," +
          "radial-gradient(900px 600px at 80% 20%, rgba(37,99,235,.18), transparent 60%)," +
          "radial-gradient(700px 500px at 60% 90%, rgba(236,72,153,.08), transparent 55%)," +
          "var(--bg)",
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <motion.div
          className="text-5xl font-semibold tracking-[0.35em] bg-gradient-to-r from-[var(--purple)] via-[var(--blue)] to-[var(--pink)] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          PGJ
        </motion.div>

        <motion.div
          className="mx-auto mt-5 h-[2px] w-56 overflow-hidden rounded-full bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.3 }}
        >
          <motion.div
            className="h-full w-full"
            style={{
              background:
                "linear-gradient(90deg, var(--purple), var(--blue), var(--pink))",
            }}
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          className="mt-4 text-sm text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.35 }}
        >
          Initializing systems…
        </motion.div>
      </div>
    </motion.div>
  );
}
