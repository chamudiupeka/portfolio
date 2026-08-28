import { leadership } from "@/lib/data";
import Disclosure from "./Disclosure";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Leadership() {
  return (
    <section id="leadership" className="border-t border-hairlineSoft py-14 md:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-7">
        <Reveal>
          <SectionHead eyebrow="beyond code" title="Leadership & community" />
        </Reveal>
        <Reveal>
          {leadership.map((item) => (
            <div
              key={item.org}
              className="grid grid-cols-1 gap-x-12 border-b border-hairlineSoft py-5 last:border-b-0 sm:grid-cols-[230px_1fr]"
            >
              <div>
                <div className="font-display text-[1.05rem]">{item.org}</div>
                <div className="mt-1 font-mono text-[0.73rem] text-textFaint">{item.date}</div>
              </div>
              <Disclosure
                className="mt-3 sm:mt-0"
                openLabel={`roles · ${item.roles.length}`}
                closeLabel="hide"
              >
                <ul className="mt-3 space-y-2">
                  {item.roles.map((r) => (
                    <li
                      key={r}
                      className="relative max-w-[70ch] pl-5 text-[0.9rem] leading-relaxed text-textMuted"
                    >
                      <span
                        aria-hidden
                        className="absolute left-0 top-[0.62em] h-px w-2.5 bg-blueBright/70"
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </Disclosure>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
