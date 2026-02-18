"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About Me", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // close on outside click
  useEffect(() => {
    function onDown(e: MouseEvent | TouchEvent) {
      if (!open) return;
      const t = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(t)) setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-[9996]">
      <div className="mx-auto max-w-6xl px-6 pt-5">
        <div
          className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl"
          style={{
            boxShadow:
              "0 0 0 1px rgba(255,255,255,.05), 0 18px 60px rgba(0,0,0,.35)",
          }}
        >
 {/* Brand */}
<Link
  href="/"
  className="text-lg font-semibold tracking-tight bg-gradient-to-r from-[var(--purple)] via-[var(--blue)] to-[var(--pink)] bg-clip-text text-transparent"
>
  PGJ
</Link>



          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-xl px-3 py-2 text-sm transition",
                    active
                      ? "border border-white/15 bg-white/10 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/85 hover:bg-white/15 transition md:inline-flex"
          >
            Let’s talk
          </Link>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/contact"
              className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/85 hover:bg-white/15 transition"
            >
              Talk
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="rounded-xl border border-white/15 bg-white/10 p-2 text-white/85 hover:bg-white/15 transition"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {open && (
              <motion.div
                ref={panelRef}
                className={[
                  "absolute left-0 right-0 top-[calc(100%+10px)] z-[9999] overflow-hidden rounded-2xl border border-white/10 md:hidden",
                  // ✅ stronger “glass” so background text won’t show through
                  "bg-zinc-950/85 backdrop-blur-2xl backdrop-saturate-150",
                ].join(" ")}
                initial={{ opacity: 0, y: -6, scale: 0.98, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -6, scale: 0.98, filter: "blur(10px)" }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(255,255,255,.05), 0 24px 80px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.05)",
                }}
              >
                <div className="p-2">
                  {nav.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={[
                          "flex items-center justify-between rounded-xl px-4 py-3 text-sm transition",
                          active
                            ? "bg-white/10 text-white"
                            : "text-white/75 hover:bg-white/10 hover:text-white",
                        ].join(" ")}
                      >
                        <span>{item.label}</span>
                        {active ? (
                          <span className="text-xs text-white/50">Current</span>
                        ) : null}
                      </Link>
                    );
                  })}
                </div>

                <div className="border-t border-white/10 p-3">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/90 hover:bg-white/15 transition"
                  >
                    Let’s talk
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
