import { StatusTag } from "./data";

export const tagLabel: Record<StatusTag, string> = {
  active: "active",
  complete: "complete",
  progress: "in progress",
  planned: "planned",
};

const dotClass: Record<StatusTag, string> = {
  active: "bg-blueBright",
  complete: "bg-textFaint",
  progress: "bg-bluePale",
  planned: "bg-transparent ring-1 ring-inset ring-textFaint",
};

const textClass: Record<StatusTag, string> = {
  active: "text-blueBright",
  complete: "text-textFaint",
  progress: "text-bluePale",
  planned: "text-textFaint",
};

export function Tag({ status, label }: { status: StatusTag; label?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap font-mono text-[0.6rem] uppercase tracking-[0.1em] ${textClass[status]}`}
    >
      <span className={`h-[5px] w-[5px] shrink-0 rounded-full ${dotClass[status]}`} />
      {label ?? tagLabel[status]}
    </span>
  );
}
