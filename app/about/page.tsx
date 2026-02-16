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

        {/* INTRO */}
        <p className="mt-6 max-w-3xl text-white/70 leading-relaxed text-[15px] sm:text-base">
          I build structured digital systems that connect web platforms,
          automation workflows, and AI-powered creative tools into cohesive,
          scalable solutions. My background blends computer science,
          artificial intelligence, and real-world systems execution.
        </p>

        {/* PERSONAL PROFILE */}
        <div className="mt-16 max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            Personal Profile
          </h2>

          <p className="mt-6 text-white/70 leading-relaxed text-[15px] sm:text-base">
            I’m a Computer Science graduate specializing in Artificial
            Intelligence, with a strong focus on automation systems,
            structured workflows, and digital authority building.
          </p>

          <p className="mt-4 text-white/70 leading-relaxed text-[15px] sm:text-base">
            Beyond technical execution, I enjoy blending logic with creativity —
            building funnels, designing digital assets, editing short-form
            content, and creating structured systems that actually move results.
            I naturally gravitate toward optimization, organization, and
            turning chaos into clarity.
          </p>

          <p className="mt-4 text-white/70 leading-relaxed text-[15px] sm:text-base">
            Outside of professional work, I lead community-based creative
            projects, manage large-scale events, and enjoy producing content
            that connects people. I value discipline, leadership, and long-term
            skill development — traits I developed through academic excellence,
            scouting, and organizational leadership roles.
          </p>
        </div>

        {/* PERSONAL DETAILS */}
<div className="mt-12">
  <h2 className="text-2xl font-semibold tracking-tight">
    Personal Details
  </h2>

  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {[
      { label: "Age", value: "23" }, // update if needed
      { label: "Location", value: "Antique, Philippines" },
      { label: "Time Zone", value: "GMT+8 (Philippine Time) - Flexible" },
      { label: "Work Setup", value: "Remote & Hybrid" },
      { label: "Nationality", value: "Filipino" },
      { label: "Availability", value: "Open to international clients" },
    ].map((item) => (
      <div
        key={item.label}
        className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
      >
        <div className="text-xs uppercase tracking-wide text-white/40">
          {item.label}
        </div>
        <div className="mt-2 text-sm text-white/80">
          {item.value}
        </div>
      </div>
    ))}
  </div>
</div>


        {/* WHAT DRIVES ME */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            What Drives Me
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Structured Systems",
                desc: "I enjoy building workflows, funnels, and automations that remove friction and improve clarity.",
              },
              {
                title: "AI + Creative Integration",
                desc: "I explore how AI tools can enhance digital media, content systems, and scalable online platforms.",
              },
              {
                title: "Leadership & Execution",
                desc: "From events to digital operations, I step into responsibility and make sure outcomes are delivered.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="text-lg font-semibold">
                  {item.title}
                </div>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* EDUCATION SECTION */}
        <div className="mt-20">
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
