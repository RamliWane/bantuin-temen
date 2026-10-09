import Link from "next/link";
import { Photo } from "./Photo";
import { SectionLabel } from "./SectionLabel";
import { heroDescription, heroImage } from "./history";

const profileTabs = [
  { label: "Sejarah", href: "/", active: true },
  { label: "Identitas Sekolah", href: "/profile/identitas-sekolah", active: false },
  { label: "Tenaga Pendidik", href: "/profile/tenaga-pendidik", active: false },
];

export function HistoryHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-9 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,44%)_minmax(0,56%)] lg:gap-14">
          <div>
            <p className="text-[11px] font-semibold uppercase text-brand">Profil Sekolah</p>
            <h1 className="mt-3 max-w-[18ch] text-[28px] font-bold text-slate-900 tracking-tight leading-tight sm:text-[32px] lg:text-[34px]">
              Sejarah Berdirinya SMK Taruna Bhakti
            </h1>
            <p className="mt-4 max-w-[460px] text-[14px] leading-[1.62] text-brand">
              {heroDescription}
            </p>
            <nav aria-label="Halaman profil sekolah" className="mt-5">
              <ul className="flex flex-wrap gap-2">
                {profileTabs.map((tab) => (
                  <li key={tab.label}>
                    <Link
                      href={tab.href}
                      aria-current={tab.active ? "page" : undefined}
                      className={
                        tab.active
                          ? "inline-flex h-10 items-center rounded-full border border-navy bg-navy px-5 text-[13px] font-medium text-white"
                          : "inline-flex h-10 items-center rounded-full border border-line bg-white px-5 text-[13px] font-medium text-brand transition-colors hover:border-navy hover:text-navy"
                      }
                    >
                      {tab.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <figure>
<Photo
              alt="Laboratorium komputer"
              src={heroImage}
              className="h-[220px] w-full sm:h-[240px] lg:h-[262px]"
              preload
              sizes="(max-width: 1024px) 100vw, 56vw"
            />
            <figcaption className="mt-2 text-[11px] leading-5 text-muted">
              Laboratorium komputer
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="h-px w-full bg-line" />
    </section>
  );
}