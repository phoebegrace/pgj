"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PebooIcon from "./PebooIcon";

type Msg = { role: "peboo" | "user"; text: string };

const pebooHello =
  "Hi, I’m Peboo. I can help you explore Phoebe’s GoHighLevel systems, AI tools/workflows, web development, and creative design work. What do you want to see?";

const quickPrompts = [
  "Show GoHighLevel systems Phoebe builds",
  "What AI tools/workflows does she use?",
  "What web dev stack does she use?",
  "Show creative design work / assets",
  "How can I contact Phoebe?",
];

export default function PebooWidget() {
  const [showHint, setShowHint] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "peboo", text: pebooHello }]);
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  // strict scope signal; actual enforcement should still happen server-side
  const scope = useMemo(() => "phoebe_only" as const, []);

  // auto-scroll to newest messages when open
  useEffect(() => {
    if (!open) return;
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  }, [open, msgs, loading]);

  // hint bubble (only once per session)
  useEffect(() => {
    try {
      const hasSeen = sessionStorage.getItem("peboo_hint_seen");
      if (!hasSeen) {
        const timer = window.setTimeout(() => setShowHint(true), 2000);
        return () => window.clearTimeout(timer);
      }
    } catch {
      // ignore sessionStorage errors (private mode / blocked)
    }
  }, []);

  const respond = async (userText: string) => {
    try {
      setLoading(true);

      const res = await fetch("/api/peboo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userText,
          history: msgs,
          scope,
        }),
      });

      const data = await res.json();

      setMsgs((m) => [
        ...m,
        {
          role: "peboo",
          text:
            data?.reply ||
            "I didn’t catch that—try asking about GoHighLevel, AI tools, web dev, or design work.",
        },
      ]);
    } catch {
      setMsgs((m) => [
        ...m,
        { role: "peboo", text: "Oops—Peboo had a hiccup. Try again?" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const send = async (text?: string) => {
    const value = (text ?? input).trim();
    if (!value || loading) return;

    setMsgs((m) => [...m, { role: "user", text: value }]);
    setInput("");

    await respond(value);
  };

  const openPeboo = () => {
    setOpen(true);
    setShowHint(false);
    try {
      sessionStorage.setItem("peboo_hint_seen", "true");
    } catch {
      // ignore
    }
  };

  const closePeboo = () => setOpen(false);

  const resetChat = () => {
    if (loading) return;
    setMsgs([{ role: "peboo", text: pebooHello }]);
    setInput("");
  };

  return (
    <>
      {showHint && !open && (
        <div className="fixed bottom-24 right-6 z-[9996] animate-fadeInUp">
          <div className="relative rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/85 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,.45)]">
            Have questions about Phoebe?{" "}
            <span className="font-medium">Ask Peboo.</span>

            {/* little arrow */}
            <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 border-r border-b border-white/10 bg-white/10 backdrop-blur" />
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => {
          if (open) closePeboo();
          else openPeboo();
        }}
        className="fixed bottom-6 right-6 z-[9997] flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-medium text-white/85 backdrop-blur hover:bg-white/10 transition"
        style={{
          boxShadow:
            "0 0 0 1px rgba(255,255,255,.06), 0 18px 60px rgba(0,0,0,.55)",
        }}
        aria-label={open ? "Close Peboo" : "Open Peboo"}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30">
          <PebooIcon size={20} />
        </div>

        <span className="leading-none">Peboo</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* overlay */}
            <button
              type="button"
              className="absolute inset-0 bg-black/60"
              onClick={closePeboo}
              aria-label="Close Peboo overlay"
            />

            {/* panel */}
            <motion.div
              className="absolute bottom-6 right-6 w-[92vw] max-w-md overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl"
              initial={{ y: 16, opacity: 0, scale: 0.98, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ y: 16, opacity: 0, scale: 0.98, filter: "blur(10px)" }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              style={{
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,.06), 0 26px 80px rgba(0,0,0,.60)",
              }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Peboo chat"
            >
              {/* gradient stroke */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,.35), rgba(37,99,235,.25), rgba(236,72,153,.18))",
                  maskImage:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  maskComposite: "exclude",
                  padding: "1px",
                  borderRadius: "24px",
                }}
              />

              {/* header */}
              <div className="flex items-start justify-between gap-3 p-4">
                <div className="flex items-start gap-3">
                  <PebooIcon size={32} />
                  <div>
                    <div className="text-sm font-semibold text-white">Peboo</div>
                    <div className="text-xs text-white/60">
                      GHL • AI • Web Dev • Design
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={resetChat}
                    className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10 transition disabled:opacity-50"
                    disabled={loading}
                    aria-label="Reset chat"
                  >
                    Reset
                  </button>
                  <button
                    onClick={closePeboo}
                    className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10 transition"
                    aria-label="Close chat"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* messages */}
              <div
                ref={listRef}
                className="max-h-[52vh] overflow-y-auto px-4 pb-3 pr-3"
              >
                <div className="space-y-3">
                  {msgs.map((m, idx) => (
                    <div
                      key={idx}
                      className={[
                        "max-w-[92%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                        m.role === "user"
                          ? "ml-auto border border-white/10 bg-white/10 text-white/90"
                          : "border border-white/10 bg-white/5 text-white/90",
                      ].join(" ")}
                    >
                      {m.text}
                    </div>
                  ))}

                  {loading && (
                    <div className="max-w-[92%] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
                      typing…
                    </div>
                  )}
                </div>

                {/* quick prompts */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {quickPrompts.map((p) => (
                    <button
                      key={p}
                      onClick={() => send(p)}
                      disabled={loading}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75 hover:bg-white/10 transition disabled:opacity-50"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* input */}
              <div className="border-t border-white/10 p-3">
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        send();
                      }
                    }}
                    placeholder="Ask about GoHighLevel, AI tools, web dev, or design…"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/90 placeholder:text-white/40 outline-none focus:border-white/20"
                    disabled={loading}
                  />
                  <button
                    onClick={() => send()}
                    disabled={loading}
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/85 hover:bg-white/15 transition disabled:opacity-50"
                  >
                    Send
                  </button>
                </div>

                <div className="mt-2 text-[11px] text-white/45">
                  Peboo answers questions about Phoebe Grace Juayong only.
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}