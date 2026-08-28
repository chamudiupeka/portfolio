import { experience } from "@/lib/data";
import { Tag } from "@/lib/tags";
import Disclosure from "./Disclosure";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-hairlineSoft py-20 md:py-24">
      <div className="mx-auto max-w-content px-7">
        <Reveal>
          <SectionHead eyebrow="experience" title="Where I've been building" />
        </Reveal>

        {experience.map((item, i) => (
          <Reveal key={item.org} className="border-b border-hairlineSoft py-7 last:border-b-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <div>
                <h3 className="font-display text-[1.25rem]">{item.role}</h3>
                <div className="mt-1 text-[0.92rem] text-blueBright">{item.org}</div>
              </div>
              <div className="flex items-center gap-4">
                <Tag status={item.status} />
                <span className="font-mono text-[0.75rem] text-textFaint">{item.date}</span>
              </div>
            </div>

            <Disclosure
              className="mt-5"
              openLabel={`what I did · ${item.bullets.length}`}
              closeLabel="hide"
              defaultOpen={i === 0}
            >
              <ul className="mt-4 space-y-2.5">
                {item.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative max-w-[72ch] pl-5 text-[0.92rem] leading-relaxed text-textMuted"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.62em] h-px w-2.5 bg-blueBright/70"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </Disclosure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
