export default function SectionHead({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <span className="mb-3 flex items-center gap-2.5 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-textFaint">
        <span className="h-px w-6 bg-blueBright/60" />
        {eyebrow}
      </span>
      <h2 className="font-display text-[clamp(1.6rem,3.2vw,2.25rem)] font-normal tracking-[-0.01em]">
        {title}
      </h2>
    </div>
  );
}
