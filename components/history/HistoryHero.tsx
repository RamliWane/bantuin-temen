import Link from "next/link";
import { Photo } from "./Photo";
import { PhotoIcon } from "./icons";
import { heroDescription, heroImage } from "./history";

const profileTabs = [
  { label: "Sejarah", href: "/", active: true },
  { label: "Identitas Sekolah", href: "/profile/identitas-sekolah", active: false },
  { label: "Tenaga Pendidik", href: "/profile/tenaga-pendidik", active: false },
];

export function HistoryHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
            Profil Sekolah
          </p>
          <h1 className="mt-3 max-w-[560px] text-[30px] font-bold leading-[1.14] tracking-tight text-navy sm:text-[38px] lg:text-[44px]">
            Sejarah Berdirinya SMK Taruna Bhakti
          </h1>
          <p className="mt-5 max-w-[640px] text-[14px] leading-[1.75] text-brand sm:text-[15px]">
            {heroDescription}
          </p>

          <nav aria-label="Halaman profil sekolah" className="mt-7 w-full">
            <ul className="mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-1 rounded-full border border-line bg-pale p-1">
              {profileTabs.map((tab) => (
                <li key={tab.label}>
                  <Link
                    href={tab.href}
                    aria-current={tab.active ? "page" : undefined}
                    className={
                      tab.active
                        ? "inline-flex h-9 items-center rounded-full bg-navy px-4 text-[13px] font-medium text-white sm:px-5"
                        : "inline-flex h-9 items-center rounded-full px-4 text-[13px] font-medium text-brand transition-colors hover:bg-white hover:text-navy sm:px-5"
                    }
                  >
                    {tab.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <figure className="mx-auto mt-10 w-full max-w-[920px] overflow-hidden rounded-2xl border border-line bg-white lg:mt-12 [&>div]:rounded-2xl">
          <Photo
            alt="Laboratorium komputer"
            src={heroImage}
            className="aspect-[16/9] w-full"
            preload
            sizes="(max-width: 1024px) 100vw, 920px"
          />
          <figcaption className="flex flex-col gap-1 border-t border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <span className="flex items-center gap-2 text-[12px] font-medium text-navy">
              <PhotoIcon className="h-4 w-4 shrink-0 text-brand" />
              Laboratorium Komputer
            </span>
          </figcaption>
        </figure>
      </div>
      <div className="h-px w-full bg-line" />
    </section>
  );
}
