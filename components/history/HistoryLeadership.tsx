import { leaders, type Leader } from "./leadership";

const active = leaders[leaders.length - 1];

function wavePath(periods: number, height: number, cx = 10, amp = 8) {
  const half = height / (periods * 2);
  const segments = [`M ${cx} 0`];
  for (let i = 0; i < periods * 2; i++) {
    const direction = i % 2 === 0 ? 1 : -1;
    const controlY = i * half + half / 2;
    const endY = (i + 1) * half;
    segments.push(`Q ${cx + direction * amp} ${controlY} ${cx} ${endY}`);
  }
  return segments.join(" ");
}

function LeaderRow({
  leader,
  index,
}: {
  leader: Leader;
  index: number;
}) {
  const isActive = leader === active;
  const dark = index % 2 === 1;
  const borderClass = isActive ? "border-gray-300" : dark ? "border-gray-300" : "border-gray-300";
  const bgClass = dark ? "bg-navy" : "bg-white";

  return (
    <li className="grid grid-cols-[22px_minmax(0,1fr)] gap-x-4 md:grid-cols-[180px_28px_minmax(0,1fr)] md:gap-x-6 lg:gap-x-8">
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
          className={`relative overflow-hidden rounded-[5px] border border-gray-200 ${borderClass} ${bgClass}`}
        >
          {isActive && (
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 z-[2] h-full w-1 bg-accent"
            />
          )}

          <div className="p-6 md:p-7 lg:p-8">
            <h3
              className={`text-[20px] font-bold leading-[1.2] tracking-tight md:text-[22px] lg:text-[26px] ${
                dark ? "text-white" : "text-navy"
              }`}
            >
              {leader.name}
            </h3>
            <p
              className={`mt-3 max-w-[72ch] text-[14px] leading-[1.7] lg:text-[15px] ${
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
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 bottom-7 grid grid-rows-1 grid-cols-[22px_minmax(0,1fr)] gap-x-4 md:bottom-9 md:grid-cols-[180px_28px_minmax(0,1fr)] md:gap-x-6 lg:bottom-11 lg:gap-x-8"
          >
            <div className="col-start-1 flex justify-center md:col-start-2">
              <svg
                className="h-full w-full"
                viewBox="0 0 20 1000"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d={wavePath(16, 1000)}
                  className="stroke-navy"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="3 6"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>
          {leaders.map((leader, index) => (
            <LeaderRow key={leader.name} leader={leader} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
