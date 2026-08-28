import Image from "next/image";

export default function Portrait({ src }: { src: string | null }) {
  return (
    <div className="relative">
      {/* Offset accent block behind the frame, lower-left. */}
      <div
        aria-hidden
        className="absolute -bottom-5 -left-5 h-[68%] w-[72%] rounded-sm bg-panelAlt sm:-bottom-7 sm:-left-7"
      />
      {/* Thin outline echoing it from the opposite corner. */}
      <div
        aria-hidden
        className="absolute -right-4 -top-4 h-[55%] w-[52%] rounded-sm border border-hairline"
      />

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-panel">
        {src ? (
          <>
            <Image
              src={src}
              alt="Chamudi Upeka"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover object-[50%_15%] brightness-[0.94] contrast-[1.06] grayscale-[0.4] transition-all duration-700 ease-out hover:brightness-100 hover:grayscale-0"
            />
            {/* Sinks the busy night background into the page. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-blueDeep/20 mix-blend-overlay"
            />
          </>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="font-display text-[3.5rem] leading-none text-hairline">CU</span>
            <span className="font-mono text-[0.6rem] uppercase leading-relaxed tracking-[0.12em] text-textFaint">
              add your photo at
              <br />
              public/portrait.jpg
            </span>
          </div>
        )}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset ring-hairline"
        />
      </div>
    </div>
  );
}
