"use client";

import { ReactNode, useId, useState } from "react";

export default function Disclosure({
  children,
  openLabel,
  closeLabel,
  defaultOpen = false,
  className = "",
}: {
  children: ReactNode;
  openLabel: string;
  closeLabel: string;
  defaultOpen?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        // py/-my pair expands the tap target to ~38px without moving anything.
        className="group -my-2.5 flex items-center gap-2 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-textFaint transition-colors hover:text-blueBright"
      >
        {open ? closeLabel : openLabel}
        <span
          aria-hidden
          className={`inline-block text-[0.65rem] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      <div
        id={id}
        className={`grid transition-all duration-500 ease-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
