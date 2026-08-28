"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "work" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-hairlineSoft bg-ink/85 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-content items-center gap-7 px-7 py-5">
        <a
          href="#top"
          className="font-display text-[1.15rem] tracking-tight transition-colors hover:text-bluePale"
        >
          Chamudi Upeka
        </a>

        <div className="hidden items-center whitespace-nowrap font-mono text-[0.68rem] uppercase tracking-[0.1em] text-textFaint md:flex">
          <span className="mr-2 inline-block h-[6px] w-[6px] rounded-full bg-blueBright animate-pulseBright motion-reduce:animate-none" />
          open to work
        </div>

        <ul
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-4 border-b border-hairlineSoft bg-panel px-7 py-5 font-mono text-[0.78rem] text-textMuted md:static md:ml-auto md:flex md:flex-row md:gap-7 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="underline-offset-4 transition-colors hover:text-offwhite hover:underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex h-[34px] w-[34px] items-center justify-center rounded-sm border border-hairline text-offwhite md:hidden"
        >
          ≡
        </button>
      </div>
    </nav>
  );
}
