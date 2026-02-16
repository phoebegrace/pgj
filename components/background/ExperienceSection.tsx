import Link from "next/link";
import { experience } from "@/content/background";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20"
    >
      <div>
        <div className="text-[13px] sm:text-sm text-white/60">Background</div>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Experience
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] sm:text-base text-white/70 leading-relaxed">
          Systems work, creative production, and real-world execution — organized
          as a timeline.
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-10 relative">
        {/* Vertical line */}
        <div
          className="absolute left-[14px] top-0 bottom-0 w-px bg-white/10"
          aria-hidden="true"
        />

        <div className="grid gap-6">
          {experience.map((x, idx) => {
            // ✅ IMPORTANT: your experience items should have a stable id like:
            // x.id = "hmpc" | "lunatik" | "primof"
            const expId = (x as any).id as string | undefined;

            const Card = (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/7 hover:-translate-y-[1px] hover:shadow-[0_18px_60px_rgba(0,0,0,.30)]">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold text-white/90">
                      {x.title}
                    </div>
                    <div className="mt-1 text-sm text-white/70">
                      {x.org}
                      {x.location ? (
                        <span className="text-white/45"> • {x.location}</span>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {expId ? (
                      <span className="hidden sm:inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                        View projects →
                      </span>
                    ) : null}

                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      {x.date}
                    </div>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-[15px] text-white/70 leading-relaxed">
                  {x.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span
                        className="mt-[7px] h-2 w-2 rounded-full shrink-0"
                        style={{
                          background:
                            "linear-gradient(90deg, var(--purple), var(--blue))",
                        }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {x.tags?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {x.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                {expId ? (
                  <div className="mt-4 flex items-center gap-2 text-xs text-white/55 sm:hidden">
                    <span>View projects</span>
                    <span className="text-white/70">→</span>
                  </div>
                ) : null}
              </div>
            );

            return (
              <div key={`${x.org}-${idx}`} className="relative pl-10">
                {/* Timeline dot */}
                <div
                  className="absolute left-[7px] top-7 h-4 w-4 rounded-full border border-white/20 bg-black/60"
                  style={{
                    boxShadow:
                      "0 0 0 1px rgba(255,255,255,.06), 0 10px 30px rgba(0,0,0,.45)",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="absolute inset-[3px] rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--purple), var(--blue))",
                      opacity: 0.9,
                    }}
                  />
                </div>

                {/* Clickable Card */}
                {expId ? (
                  <Link
                    href={`/projects?exp=${encodeURIComponent(expId)}`}
                    className="group block"
                    aria-label={`View projects from ${x.org}`}
                  >
                    {Card}
                  </Link>
                ) : (
                  Card
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
