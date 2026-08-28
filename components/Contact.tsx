import { profile } from "@/lib/data";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Contact() {
  const { email, phone, github, githubLabel, linkedin, linkedinLabel } = profile.contact;

  const direct = [
    { label: "email", value: email, href: `mailto:${email}` },
    { label: "phone", value: phone, href: `tel:${phone.replace(/\s+/g, "")}` },
    { label: "github", value: githubLabel, href: github },
    { label: "linkedin", value: linkedinLabel, href: linkedin },
  ];

  return (
    <section id="contact" className="border-t border-hairlineSoft py-14 md:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-7">
        <Reveal>
          <SectionHead eyebrow="contact" title="Let's talk" />
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-14 md:grid-cols-[1.5fr_1fr] md:gap-20">
          <div>
            <p className="mb-9 max-w-[52ch] text-[0.95rem] leading-relaxed text-textMuted">
              Hiring, collaborating, or just want to compare notes on testing and DevOps? Send
              a message and it lands straight in my inbox.
            </p>
            <ContactForm />
          </div>

          <div>
            <div className="mb-1 border-b border-hairline pb-2.5 font-mono text-[0.64rem] uppercase tracking-[0.14em] text-textFaint">
              or reach me directly
            </div>
            {direct.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex flex-col gap-1 border-b border-hairlineSoft py-3.5 last:border-b-0"
              >
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-textFaint">
                  {c.label}
                </span>
                <span className="break-words font-display text-[0.98rem] transition-colors group-hover:text-blueBright">
                  {c.value}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
