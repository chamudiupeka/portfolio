import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section id="about" className="border-t border-hairlineSoft py-14 md:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-7">
        <Reveal>
          <SectionHead eyebrow="about" title="A bit about how I got here" />
        </Reveal>
        <Reveal className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.35fr_1fr] md:gap-16">
          <div className="max-w-[62ch] space-y-5 text-[0.98rem] leading-[1.75] text-textMuted">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="font-mono text-[0.8rem]">
            <div className="mb-1 border-b border-hairline pb-2.5 text-[0.66rem] uppercase tracking-[0.14em] text-textFaint">
              quick facts
            </div>
            {profile.facts.map((f) => (
              <div
                key={f.label}
                className="flex justify-between gap-5 border-b border-hairlineSoft py-2.5 last:border-b-0"
              >
                <dt className="text-textFaint">{f.label}</dt>
                <dd className="text-right text-offwhite">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
