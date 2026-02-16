import { education } from "@/content/background";

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

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Section>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          About Phoebe Grace Juayong
        </h1>

        <p className="mt-6 max-w-3xl text-white/70 leading-relaxed text-[15px] sm:text-base">
          I build structured digital systems that connect web platforms,
          automation workflows, and AI-powered creative tools into cohesive,
          scalable solutions. My background blends computer science,
          artificial intelligence, and real-world systems execution.
        </p>

        {/* Education Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            Education
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {education.map((e) => (
              <div
                key={e.school}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold">
                      {e.school}
                    </div>
                    <div className="mt-1 text-sm text-white/70">
                      {e.program}
                    </div>
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {e.date}
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-[15px] text-white/70">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span
                        className="mt-[7px] h-2 w-2 rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, var(--purple), var(--blue))",
                        }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {e.tags?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
