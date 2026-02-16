"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Facebook,
  Instagram,
  ArrowUpRight,
  Calendar,
  Paperclip,
  Send,
  Loader2,
} from "lucide-react";

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={[
        "mx-auto w-full max-w-6xl px-6",
        "py-16 sm:py-20",
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}

const contacts = [
  { label: "GitHub", href: "https://github.com/phoebegrace", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/phoebe-grace-juayong-785863290/",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:juayongphoebe@gmail.com", icon: Mail },
  { label: "Facebook", href: "https://www.facebook.com/juayongphoebe/", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/chosenphoebe", icon: Instagram },
];

// ✅ Option A: Calendly (recommended) — paste your link later
const CALENDAR_URL = "https://calendly.com/juayongphoebe/new-meeting";
// ✅ Option B: Google Calendar appointment scheduling link also works if you have one

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <main className="min-h-screen">
      <Section>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left: Intro + socials */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Contact
            </h1>

            <p className="mt-4 max-w-xl text-[15px] sm:text-base text-white/70 leading-relaxed">
              Want to work together, hire me for a role, or ask about my systems and builds?
              Send a message here — or schedule a quick call.
            </p>

            {/* Calendar */}
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm text-white/90 backdrop-blur hover:bg-white/15 transition"
            >
              <Calendar size={16} />
              Schedule a call
              <ArrowUpRight size={16} className="text-white/60" />
            </a>

            {/* Social cards */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {contacts.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur transition hover:border-white/20 hover:bg-white/7"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                          <Icon size={16} className="text-white/80" />
                        </div>
                        <div className="text-sm font-medium text-white/85">
                          {item.label}
                        </div>
                      </div>
                      <ArrowUpRight size={16} className="text-white/35 group-hover:text-white/70 transition" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-semibold text-white/90">
                Send a message
              </div>
              <p className="mt-2 text-[13px] text-white/55">
                Messages go directly to Phoebe’s inbox.
              </p>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="text-xs text-white/60">Your name</label>
                    <input
                      name="name"
                      required
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/90 placeholder:text-white/40 outline-none focus:border-white/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/60">Your email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/90 placeholder:text-white/40 outline-none focus:border-white/20"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/60">Subject</label>
                  <input
                    name="subject"
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/90 placeholder:text-white/40 outline-none focus:border-white/20"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="text-xs text-white/60">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/90 placeholder:text-white/40 outline-none focus:border-white/20"
                    placeholder="Write your message…"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 hover:bg-white/7 transition">
                    <Paperclip size={16} className="text-white/70" />
                    Add attachment
                    <input
                      name="attachment"
                      type="file"
                      className="hidden"
                      accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm text-white/90 hover:bg-white/15 transition disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send message
                      </>
                    )}
                  </button>
                </div>

                {status === "success" && (
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                    ✅ Sent! I’ll get back to you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                    ❌ {errorMsg || "Something went wrong."}
                  </div>
                )}

                <div className="text-[11px] text-white/45">
                  Attachments are limited in size (we’ll enforce this server-side).
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
