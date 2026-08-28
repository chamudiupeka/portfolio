import { projects } from "@/lib/data";
import { Tag } from "@/lib/tags";
import Disclosure from "./Disclosure";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-hairlineSoft py-14 md:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-7">
        <Reveal>
          <SectionHead eyebrow="selected work" title="Things I've shipped" />
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.name} className="flex flex-col border-t border-hairline pt-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-[1.2rem] leading-tight">{p.name}</h3>
                <span className="mt-1.5">
                  <Tag status={p.status} />
                </span>
              </div>

              <p className="mt-3 flex-grow text-[0.92rem] leading-relaxed text-textMuted">
                {p.description}
              </p>

              <Disclosure className="mt-5" openLabel={`stack · ${p.stack.length}`} closeLabel="hide stack">
                <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5 font-mono text-[0.66rem] text-textFaint">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-sm border border-hairline px-2 py-[3px]">
                      {s}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    className="mt-4 inline-block font-mono text-[0.72rem] text-blueBright underline-offset-4 hover:underline"
                  >
                    repository ↗
                  </a>
                )}
              </Disclosure>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
