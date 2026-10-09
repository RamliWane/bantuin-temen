import { achievements, story } from "./history";
import { ShieldIcon, TrophyIcon } from "./icons";
import { SectionLabel } from "./SectionLabel";

const icons = {
  shield: ShieldIcon,
  trophy: TrophyIcon,
};

export function HistoryOverview() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-8 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="lg:pr-2">
            <p className="text-[11px] mb-3 font-semibold uppercase text-brand">
              Tentang Sejarah
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
              Perjalanan Panjang Menuju Pendidikan Vokasi yang Unggul
            </h2>
            <div className="mt-3">
              {story.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[14px] leading-[1.62] text-brand"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="border-l border-line pl-6 sm:pl-8 lg:my-4 lg:pl-12">
            <p className="text-[11px] font-semibold uppercase text-brand">PRESTASI &amp; AKREDITASI</p>

            <ul className="mt-5 sm:mt-6">
              {achievements.map((item, index) => {
                const Icon = icons[item.icon];
                const isFirst = index === 0;
                const isLast = index === achievements.length - 1;
                return (
                  <li
                    key={item.title}
                    className="grid grid-cols-[26px_minmax(0,1fr)] items-start gap-x-5 sm:grid-cols-[28px_minmax(0,1fr)] sm:gap-x-8"
                  >
                    <Icon
                      className={`h-10 w-10 shrink-0 text-navy sm:h-12 sm:w-12 ${
                        isFirst ? "" : "mt-6"
                      }`}
                    />
                    <div
                      className={`${isFirst ? "" : "border-t border-line pt-6"} ${
                        isLast ? "" : "pb-6"
                      }`}
                    >
                      <h3 className="text-[15px] font-semibold leading-snug text-navy sm:text-[16px]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-[1.6] text-brand sm:text-[14px]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
