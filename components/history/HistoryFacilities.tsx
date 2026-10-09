import { Photo } from "./Photo";
import { SectionLabel } from "./SectionLabel";
import { FilmIcon, MonitorIcon } from "./icons";

const spots = [
  {
    icon: MonitorIcon,
    src: "https://smktarunabhakti.sch.id/wp-content/uploads/2024/11/Ruang-CC-Animasi-1.jpg",
    alt: "Siswa mengerjakan latihan praktik di ruang komputer sekolah",
    caption: "Praktikum siswa di laboratorium Jurusan TJKT",
    description:
      "Suasana pembelajaran di ruang laboratorium dengan panduan instruktur terkait.",
  },
  {
    icon: FilmIcon,
    src: "https://smktarunabhakti.sch.id/wp-content/uploads/2024/11/Studio-BRF.jpg",
    alt: "Siswa menyiapkan syuting di studio dengan dinding hijau dan lampu produksi",
    caption: "Studio Multimedia & Produksi Kreatif",
    description:
      "Kolaborasi antar siswa dalam pengerjaan konten siaran, desain grafis, dan animasi digital berbasis proyek riil.",
  },
];

export function HistoryFacilities() {
  return (
    <section className="border-t border-line bg-blue-100">
      <div className="mx-auto max-w-[1240px] px-5 pb-10 pt-7 sm:px-6 lg:px-8 lg:pb-12 lg:pt-7">
        <p className="text-[11px] font-semibold uppercase text-brand">
          Fasilitas &amp; Kegiatan
        </p>
          
        <h1 className="mt-3 text-[28px] font-bold text-slate-900 tracking-tight leading-tight sm:text-[32px] lg:text-[34px]">
          Ruang untuk Berkarya dan Berkolaborasi
        </h1>
        <p className="mt-2 max-w-[620px] text-[14px] leading-[1.55] text-brand">
          Fasilitas dan kegiatan di SMK Taruna Bhakti mendukung proses belajar
          yang praktis, kreatif, dan relevan dengan dunia kerja.
        </p>

        <div className="mt-5 grid gap-5 md:grid-cols-[minmax(0,57%)_minmax(0,43%)]">
          {spots.map((spot) => {
            const Icon = spot.icon;
            return (
              <figure key={spot.caption}>
                <Photo
                  alt={spot.alt}
                  src={spot.src}
                  className="h-[190px] w-full md:h-[228px]"
                  sizes="(max-width: 768px) 100vw, 56vw"
                />
                <figcaption className="mt-2.5">
                  <div className="flex items-start gap-3">
                    <Icon className="mt-[3px] h-[22px] w-[22px] shrink-0 text-navy" />
                    <div>
                      <h3 className="text-[14px] font-bold leading-snug text-navy">
                        {spot.caption}
                      </h3>
                      <p className="mt-1 text-[12px] leading-[1.5] text-brand">
                        {spot.description}
                      </p>
                    </div>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}