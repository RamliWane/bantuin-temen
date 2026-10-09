import { leaders, type Leader } from "./leadership";
import { SectionLabel } from "./SectionLabel";

const former = leaders.slice(0, leaders.length - 1);
const current = leaders[leaders.length - 1];

function ArchiveRow({ leader, index }: { leader: Leader; index: number }) {
  return (
    <li className="grid gap-2 border-t border-line py-4 md:grid-cols-[150px_minmax(0,1fr)] md:gap-x-12 md:py-5">
      <div className="flex items-baseline gap-2.5 md:flex-col md:items-start md:gap-0">
        <span
          aria-hidden="true"
          className="text-[11px] font-semibold tabular-nums tracking-[0.08em] text-brand md:mb-1.5"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="text-[15px] font-bold leading-none tabular-nums tracking-tight text-navy md:text-[16px]">
          {leader.period}
        </p>
      </div>

      <div className="max-w-[640px]">
        <h3 className="text-[17px] font-bold leading-snug text-navy md:text-[18px]">
          {leader.name}
        </h3>
        <p className="mt-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
          <span aria-hidden="true" className="h-[2px] w-3.5 shrink-0 bg-accent" />
          {leader.role}
        </p>
        <p className="mt-1.5 text-[13px] leading-[1.55] text-brand">
          {leader.description}
        </p>
      </div>
    </li>
  );
}

export function HistoryLeadership() {
  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto max-w-[1080px] px-5 py-12 sm:px-6 md:py-14 lg:px-8 lg:py-16">
        <header className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,430px)] lg:items-end lg:gap-16">
          <div>
            <SectionLabel accent>DEDIKASI PENGABDIAN</SectionLabel>
            <h2 className="mt-3 max-w-[18ch] text-[26px] font-bold leading-[1.18] tracking-tight text-navy sm:text-[30px] lg:text-[32px]">
              Kepemimpinan dari Masa ke Masa
            </h2>
          </div>
          <p className="text-[14px] leading-[1.6] text-brand lg:pb-1">
            Para tokoh akademisi dan pendidik berintegritas yang memegang tongkat
            estafet kepemimpinan, membimbing iklim ilmiah dan memelihara marwah
            sekolah.
          </p>
        </header>

        <ol className="mt-8 md:mt-10">
          {former.map((leader, index) => (
            <ArchiveRow key={leader.name} leader={leader} index={index} />
          ))}
        </ol>

        <div className="mt-10 rounded-[6px] bg-navy px-6 py-8 sm:px-9 md:mt-12 md:px-12 md:py-11">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            <span aria-hidden="true" className="h-[2px] w-7 shrink-0 bg-accent" />
            KEPEMIMPINAN SAAT INI
          </p>
          <h3 className="mt-5 text-[24px] font-bold leading-tight tracking-tight text-white sm:text-[28px] md:text-[32px]">
            {current.name}
          </h3>
          <p className="mt-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] tabular-nums text-pale">
            {current.period}
          </p>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
            {current.role}
          </p>
          <p className="mt-4 max-w-[62ch] text-[14px] leading-[1.65] text-pale">
            {current.description}
          </p>
        </div>
      </div>
    </section>
  );
}
