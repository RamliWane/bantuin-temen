import { achievements } from "./history";
import { ShieldIcon, TrophyIcon } from "./icons";
import { SectionLabel } from "./SectionLabel";
import { story } from "./history";

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
            <SectionLabel>Tentang Sejarah</SectionLabel>
            <h2 className="mt-2.5 max-w-[20ch] text-[24px] font-bold leading-[1.2] tracking-tight text-navy sm:text-[26px] lg:text-[28px]">
              Perjalanan Panjang Menuju Pendidikan Vokasi yang Unggul
            </h2>
            <div className="mt-3 max-w-[500px] space-y-3">
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

          <div className="lg:my-4 lg:border-l lg:border-line lg:pl-14">
            <ul>
              {achievements.map((item, index) => {
                const Icon = icons[item.icon];
                return (
                  <li
                    key={item.title}
                    className={
                      index === 0
                        ? "flex gap-5"
                        : "mt-6 flex gap-5 border-t border-line pt-6"
                    }
                  >
                    <Icon className="mt-0.5 h-9 w-9 shrink-0 text-navy" />
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                        {item.label}
                      </p>
                      <h3 className="mt-1.5 text-[19px] font-bold leading-snug text-navy">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-[420px] text-[13px] leading-[1.55] text-brand">
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