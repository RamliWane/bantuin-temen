import { leaders } from "./leadership";
import { SectionLabel } from "./SectionLabel";

export function HistoryLeadership() {
  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto max-w-[1080px] px-5 py-12 sm:px-6 md:py-14 lg:px-8 lg:py-16">
        <header className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,430px)] lg:items-end lg:gap-16">
          <div>
            <SectionLabel>DEDIKASI PENGABDIAN</SectionLabel>
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
          {leaders.map((leader, index) => (
            <li
              key={leader.name}
              className="grid gap-2.5 border-t border-line py-6 md:grid-cols-[160px_minmax(0,1fr)] md:gap-x-10 md:py-7 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-x-14"
            >
              <div className="flex items-baseline gap-2.5 md:flex-col md:items-start md:gap-0">
                <span
                  aria-hidden="true"
                  className="text-[11px] font-semibold tabular-nums tracking-[0.08em] text-brand md:mb-1.5"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[17px] font-bold leading-none tabular-nums tracking-tight text-navy lg:text-[18px]">
                  {leader.period}
                </p>
              </div>

              <div className="max-w-[640px]">
                <h3 className="text-[19px] font-bold leading-snug text-navy lg:text-[20px]">
                  {leader.name}
                </h3>
                <p className="mt-1.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                  <span
                    aria-hidden="true"
                    className="h-[2px] w-4 shrink-0 bg-accent"
                  />
                  {leader.role}
                </p>
                <p className="mt-2 text-[14px] leading-[1.6] text-brand">
                  {leader.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
