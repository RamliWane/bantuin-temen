import type { ReactNode } from "react";
import Link from "next/link";
import { LogoMark } from "./LogoMark";

const navLinks = [
  { label: "Sejarah", href: "#sejarah" },
  { label: "Fasilitas", href: "#fasilitas" },
  { label: "Perjalanan", href: "#perjalanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kepemimpinan", href: "#kepemimpinan" },
];

const programs = [
  "Teknik Jaringan Komputer dan Telekomunikasi",
  "Pengembangan Perangkat Lunak dan Gim",
  "Broadcasting dan Perfilman",
  "Teknik Elektronika",
  "Animasi",
  "Desain Komunikasi Visual",
];

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="kontak" className="bg-navy">
      <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark variant="inverse" />
              <span className="flex flex-col leading-none">
                <span className="text-[14px] font-bold tracking-tight text-white">
                  SMK TARUNA BHAKTI
                </span>
                <span className="mt-[5px] text-[11px] font-medium text-pale">
                  Cimanggis &middot; Depok
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-[36ch] text-[13px] leading-[1.7] text-pale">
              Sekolah menengah kejuruan berbasis teknologi informasi dan
              komunikasi, berdiri sejak 16 Juni 2004 di Cimanggis, Depok.
            </p>
          </div>

          <FooterColumn title="Navigasi">
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-pale transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Kompetensi Keahlian">
            <ul className="space-y-2.5">
              {programs.map((program) => (
                <li key={program} className="text-[13px] leading-[1.5] text-pale">
                  {program}
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Kontak">
            <address className="text-[13px] not-italic leading-[1.7] text-pale">
              <span className="block">Jl. Pekapuran, Kelurahan Curug</span>
              <span className="block">Kec. Cimanggis, Depok</span>
              <span className="block">Jawa Barat</span>
            </address>
            <a
              href="https://smktarunabhakti.sch.id"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-[13px] font-medium text-accent transition-colors hover:text-white"
            >
              smktarunabhakti.sch.id
            </a>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-brand pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-pale">
            &copy; 2026 SMK Taruna Bhakti. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-[12px] text-pale">Cimanggis, Depok — Jawa Barat</p>
        </div>
      </div>
    </footer>
  );
}
