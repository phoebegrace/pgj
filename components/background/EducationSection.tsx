import { education } from "@/content/background";

export default function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 pb-16 pt-2">
      <div>
        <div className="text-sm text-white/60">Academic</div>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Education
        </h2>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {education.map((e) => (
          <div
            key={e.school}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold">{e.school}</div>
                <div className="mt-1 text-sm text-white/70">{e.program}</div>
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                {e.date}
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span
                    className="mt-[7px] h-2 w-2 rounded-full"
                    style={{ background: "linear-gradient(90deg, var(--purple), var(--blue))" }}
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
    </section>
  );
}
