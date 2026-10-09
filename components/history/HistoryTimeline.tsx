import { milestones } from "./milestones";
import { SectionLabel } from "./SectionLabel";

const rowClasses =
  "grid grid-cols-[14px_minmax(0,1fr)] md:grid-cols-[132px_28px_minmax(0,1fr)] md:gap-x-4";

export function HistoryTimeline() {
  const lastIndex = milestones.length - 1;

  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto max-w-[1080px] px-5 py-12 sm:px-6 md:py-14 lg:px-8 lg:py-[60px]">
        <header className="flex flex-col items-center text-center">
          <p className="text-[11px] font-semibold uppercase text-brand">Tonggak Sejarah</p>
          <h2 className="mt-3 text-[26px] font-bold leading-[1.2] tracking-tight text-navy sm:text-[30px] lg:text-[32px]">
            Tonggak Sejarah Utama
          </h2>
          <p className="mt-2 max-w-[54ch] text-[14px] leading-[1.5] text-brand">
            Rangkaian perkembangan dan pencapaian SMK Taruna Bhakti dari masa
            ke masa
          </p>
        </header>

        <ol className="mt-8 md:mt-9">
          {milestones.map((milestone, index) => {
            const isLast = index === lastIndex;

            return (
              <li key={milestone.year} className={rowClasses}>
                <div
                  aria-hidden="true"
                  className="relative col-start-1 row-start-1 row-end-4 md:col-start-2 md:row-end-1"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-line"
                  />
                </div>

                <div
                  aria-hidden="true"
                  className="col-start-1 row-start-1 flex justify-center self-center md:col-start-2 md:row-start-1 md:self-start md:pt-[26px]"
                >
                  <span
                    className={
                      milestone.current
                        ? "h-[10px] w-[10px] rounded-full border-2 border-white bg-accent"
                        : "h-[10px] w-[10px] rounded-full border-2 border-white bg-navy"
                    }
                  />
                </div>

                <p className="col-start-2 row-start-1 text-[15px] font-bold leading-[1.3] text-navy md:col-start-1 md:row-start-1 md:pt-[18px] md:text-right md:text-[16px]">
                  {milestone.year}
                </p>

                <div
                  className={
                    isLast
                      ? "col-start-2 row-start-2 md:col-start-3 md:row-start-1"
                      : "col-start-2 row-start-2 pb-[18px] md:col-start-3 md:row-start-1 md:pb-5"
                  }
                >
                  <article className="rounded-[9px] border border-line bg-white p-4 md:px-5 md:py-[18px]">
                    <div className="flex items-start gap-2.5">
                      <h3 className="text-[16px] font-bold leading-[1.35] text-navy md:text-[17px]">
                        {milestone.title}
                      </h3>
                      {milestone.current ? (
                        <span
                          aria-hidden="true"
                          className="mt-[9px] h-[2px] w-7 shrink-0 bg-accent"
                        />
                      ) : null}
                    </div>
                    <p className="mt-[7px] max-w-[68ch] text-[13px] leading-[1.6] text-brand md:text-[14px]">
                      {milestone.description}
                    </p>
                  </article>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}