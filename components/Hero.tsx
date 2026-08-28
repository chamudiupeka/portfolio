import fs from "node:fs";
import path from "node:path";
import { profile } from "@/lib/data";
import Portrait from "./Portrait";

// Accept whichever extension the photo gets saved as, and resolve it here so a
// missing file renders the placeholder instead of 404ing the image optimizer.
const PORTRAIT_FILES = ["portrait.jpg", "portrait.jpeg", "portrait.png", "portrait.webp"];

function findPortrait(): string | null {
  for (const file of PORTRAIT_FILES) {
    if (fs.existsSync(path.join(process.cwd(), "public", file))) return `/${file}`;
  }
  return null;
}

export default function Hero() {
  const portrait = findPortrait();

  return (
    // min-h keeps the whole hero inside the first screen, minus the sticky nav.
    <header
      id="top"
      className="flex flex-col justify-center overflow-hidden py-14 md:min-h-[calc(100svh-4.5rem)] md:py-10"
    >
      <div className="mx-auto w-full max-w-content px-7">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] md:gap-16">
          <div className="mx-auto w-full max-w-[280px] md:mx-0 md:max-w-[350px]">
            <Portrait src={portrait} />
          </div>

          <div>
            <h1 className="font-display text-[clamp(2.4rem,4.6vw,3.5rem)] font-normal leading-[1.06] tracking-[-0.02em]">
              Hi!
              <span className="mt-1 block md:whitespace-nowrap">
                I&apos;m <span className="italic text-bluePale">Chamudi</span> Upeka
              </span>
            </h1>

            <div className="my-6 h-px w-16 bg-blueBright/60" />

            <p className="max-w-[46ch] text-[1rem] leading-[1.7] text-textMuted">
              {profile.intro}
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-textFaint">
              {profile.disciplines.map((d) => (
                <li key={d} className="flex items-center gap-2">
                  <span className="h-[3px] w-[3px] rounded-full bg-blueBright" />
                  {d}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="#projects"
                className="rounded-full border border-offwhite/25 px-7 py-3 text-[0.85rem] tracking-wide transition-colors hover:border-blueBright hover:bg-blueBright hover:text-ink"
              >
                View work
              </a>
              <a
                href="/resume.pdf"
                download
                className="font-mono text-[0.78rem] text-textMuted underline-offset-4 transition-colors hover:text-blueBright hover:underline"
              >
                resume ↓
              </a>
              <a
                href="#contact"
                className="font-mono text-[0.78rem] text-textMuted underline-offset-4 transition-colors hover:text-blueBright hover:underline"
              >
                get in touch →
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
