import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-10 pt-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        
        <div className="flex items-center">
          
          {/* LEFT */}
          <div>
            <div className="text-sm font-semibold">
              Phoebe Grace Juayong
            </div>
            <div className="mt-1 text-sm text-white/60">
              Systems • Web • Automation • AI Creative
            </div>
          </div>

          {/* RIGHT — pushed fully right */}
          <div className="ml-auto flex items-center gap-4">
            <Link
              href="https://github.com/phoebegrace"
              target="_blank"
              className="text-white/70 hover:text-white transition"
            >
              <Github size={20} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/phoebe-grace-juayong-785863290/"
              target="_blank"
              className="text-white/70 hover:text-white transition"
            >
              <Linkedin size={20} />
            </Link>

            <Link
              href="mailto:juayongphoebe@gmail.com"
              className="text-white/70 hover:text-white transition"
            >
              <Mail size={20} />
            </Link>
          </div>

        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/45">
          © {new Date().getFullYear()} PGJ. Built with Next.js + Tailwind.
        </div>
      </div>
    </footer>
  );
}
