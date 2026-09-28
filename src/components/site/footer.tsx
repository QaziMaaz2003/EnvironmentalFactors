import { ArrowUp } from "lucide-react";
import { footerNote, navLinks, site } from "@/lib/site-data";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="relative bg-abyss text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Turning landfill gas into renewable methane and captured carbon. Developed in
              collaboration with {site.partner}.
            </p>
          </div>
          <nav aria-label="Footer" className="md:col-span-3">
            <p className="eyebrow text-white/40">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/70 transition-colors hover:text-leaf">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-white/70 transition-colors hover:text-leaf">
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
          <div className="md:col-span-4">
            <p className="eyebrow text-white/40">Visit</p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {site.company} · {site.name}
              <br />
              {site.address}
            </p>
            <a
              href="#top"
              className="group mt-8 inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition-colors group-hover:border-leaf group-hover:bg-leaf group-hover:text-abyss">
                <ArrowUp className="h-4 w-4" />
              </span>
              Back to top
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/45 md:flex-row md:justify-between">
          <p className="max-w-2xl">{footerNote}</p>
          <p className="shrink-0">
            © {new Date().getFullYear()} {site.company} · {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
