import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
      <span aria-hidden="true" className="h-[2px] w-[30px] shrink-0 bg-brand" />
      {children}
    </p>
  );
}