import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-hairlineSoft py-20 md:py-24">
      <div className="mx-auto max-w-content px-7">
        <Reveal>
          <SectionHead eyebrow="skills" title="Toolkit" />
        </Reveal>
        <Reveal>
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="grid grid-cols-1 gap-x-12 border-b border-hairlineSoft py-4 last:border-b-0 sm:grid-cols-[190px_1fr] sm:items-baseline"
            >
              <div className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-blueBright">
                {group.label}
              </div>
              <div className="mt-2.5 flex flex-wrap gap-x-2 gap-y-1.5 sm:mt-0">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-hairline px-2 py-[3px] font-mono text-[0.7rem] text-textMuted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
