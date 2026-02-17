import { Suspense } from "react";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
            Loading projects…
          </div>
        </section>
      }
    >
      <ProjectsSection />
    </Suspense>
  );
}
