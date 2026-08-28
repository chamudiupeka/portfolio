import { certifications } from "@/lib/data";
import { Tag } from "@/lib/tags";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-hairlineSoft py-20 md:py-24">
      <div className="mx-auto max-w-content px-7">
        <Reveal>
          <SectionHead eyebrow="certifications" title="Credentials" />
        </Reveal>
        <Reveal className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-2">
          {certifications.map((cert) => (
            <div key={cert.id} className="border-t border-hairline pt-6">
              <div className="mb-3 flex items-center justify-between gap-4">
                <Tag status="complete" label="earned" />
                <span className="font-mono text-[0.74rem] text-textFaint">{cert.date}</span>
              </div>
              <h3 className="font-display text-[1.1rem] leading-snug">{cert.name}</h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-textMuted">{cert.issuer}</p>
              <p className="mt-3 font-mono text-[0.7rem] tracking-wide text-textFaint">{cert.id}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
