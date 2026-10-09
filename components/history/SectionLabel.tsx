import type { ReactNode } from "react";

export function SectionLabel({
  children,
  accent = false,
}: {
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
      <span
        aria-hidden="true"
        className={`h-[3px] w-[30px] shrink-0 ${accent ? "bg-accent" : "bg-brand"}`}
      />
      {children}
    </p>
  );
}