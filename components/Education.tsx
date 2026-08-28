import { education } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Education() {
  return (
    <section id="education" className="border-t border-hairlineSoft py-14 md:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-7">
        <Reveal>
          <SectionHead eyebrow="education" title="Background" />
        </Reveal>
        <Reveal>
          {education.map((e) => (
            <div
              key={e.school}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5 border-b border-hairlineSoft py-4 last:border-b-0"
            >
              <div>
                <div className="font-display text-[1.08rem]">{e.school}</div>
                <div className="mt-1 max-w-[62ch] text-[0.9rem] text-textMuted">{e.detail}</div>
              </div>
              <div className="whitespace-nowrap font-mono text-[0.75rem] text-textFaint">
                {e.date}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
