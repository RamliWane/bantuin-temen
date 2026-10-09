import Image from "next/image";
import { leaders, type Leader } from "./leadership";
import { SectionLabel } from "./SectionLabel";

const active = leaders[leaders.length - 1];

function PhotoSlot() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-pale">
      <div className="flex flex-col items-center gap-1.5 border-2 border-dashed border-brand px-6 py-8 text-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
          Foto Resmi
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand">
          Menyusul
        </span>
      </div>
    </div>
  );
}

function LeaderRow({
  leader,
  index,
  isFirst,
  isLast,
}: {
  leader: Leader;
  index: number;
  isFirst: boolean;
  isLast: boolean;
}) {
  const isActive = leader === active;
  const dark = index % 2 === 1;
  const borderClass = isActive ? "border-gray-300" : dark ? "border-gray-300" : "border-gray-300";
  const bgClass = dark ? "bg-navy" : "bg-white";

  return (
    <li className="grid grid-cols-[22px_minmax(0,1fr)] gap-x-4 md:grid-cols-[180px_28px_minmax(0,1fr)] md:gap-x-6 lg:gap-x-8">
      <div className="relative col-start-1 row-start-1 row-end-3 flex justify-center md:col-start-2 md:row-end-2">
        {!isFirst && (
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-[15px] w-0 -translate-x-1/2 border-l-2 border-dashed border-brand md:h-[37px]"
          />
        )}
        {!isLast && (
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-[15px] bottom-0 w-0 -translate-x-1/2 border-l-2 border-dashed border-brand md:top-[37px]"
          />
        )}
        <span
          aria-hidden="true"
          className={`relative z-[1] mt-2 h-3.5 w-3.5 rounded-full border-[3px] border-white md:mt-[30px] ${
            isActive ? "bg-accent" : "bg-navy"
          }`}
        />
      </div>

      <div className="col-start-2 row-start-1 pb-3 pt-0.5 md:col-start-1 md:row-start-1 md:pb-0 md:pt-[26px] md:text-right">
        <p className="text-[18px] font-bold leading-none tabular-nums tracking-tight text-navy md:text-[20px] lg:text-[22px]">
          {leader.period}
        </p>
        <p className="mt-1.5 text-[10px] font-semibold uppercase leading-[1.45] tracking-[0.15em] text-brand md:mt-2">
          {leader.role}
        </p>
      </div>

      <div className="col-start-2 row-start-2 pb-7 md:col-start-3 md:row-start-1 md:pb-9 lg:pb-11">
        <article
          className={`relative grid overflow-hidden rounded-[5px] border border-gray-200 md:grid-cols-[34%_minmax(0,1fr)] ${borderClass} ${bgClass}`}
        >
          {isActive && (
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 z-[2] h-full w-1 bg-accent"
            />
          )}

          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[210px]">
            {leader.photo ? (
              <Image
                src={leader.photo}
                alt={`Foto ${leader.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover"
              />
            ) : (
              <PhotoSlot />
            )}
          </div>

          <div className="flex flex-col justify-center p-6 md:p-7 lg:p-8">
            <p
              className={`flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                dark ? "text-accent" : "text-brand"
              }`}
            >
              <span aria-hidden="true" className="h-[2px] w-5 shrink-0 bg-accent" />
              {leader.role}
            </p>
            <h3
              className={`mt-3 text-[22px] font-bold leading-[1.2] tracking-tight lg:text-[26px] ${
                dark ? "text-white" : "text-navy"
              }`}
            >
              {leader.name}
            </h3>
            <p
              className={`mt-3 max-w-[52ch] text-[14px] leading-[1.7] lg:text-[15px] ${
                dark ? "text-pale" : "text-brand"
              }`}
            >
              {leader.description}
            </p>
          </div>
        </article>
      </div>
    </li>
  );
}

export function HistoryLeadership() {
  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <header className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,430px)] lg:items-end lg:gap-16">
          <div>
            <p className="text-[11px] font-semibold uppercase text-brand">DEDIKASI PENGABDIAN</p>
            <h1 className="mt-3 max-w-[18ch] text-[28px] font-bold text-slate-900 tracking-tight leading-tight sm:text-[32px] lg:text-[34px]">
              Kepemimpinan dari Masa ke Masa
            </h1>
          </div>
          <p className="text-[14px] leading-[1.65] text-brand lg:pb-1.5 lg:text-[15px]">
            Para tokoh akademisi dan pendidik berintegritas yang memegang tongkat
            estafet kepemimpinan, membimbing iklim ilmiah dan memelihara marwah
            sekolah.
          </p>
        </header>

        <ol className="relative mt-12 md:mt-16">
          {leaders.map((leader, index) => (
            <LeaderRow
              key={leader.name}
              leader={leader}
              index={index}
              isFirst={index === 0}
              isLast={index === leaders.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
