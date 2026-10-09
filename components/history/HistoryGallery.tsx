import { Photo } from "./Photo";
import { SectionLabel } from "./SectionLabel";
import { galleryFeature, galleryStrip } from "./gallery";

export function HistoryGallery() {
  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-10 sm:px-6 lg:px-8 lg:py-12">
        <header>
         <p className="text-[11px] font-semibold uppercase text-brand">Galeri Sekolah</p>
          <h2 className="mt-2.5 max-w-[24ch] text-[24px] font-bold leading-[1.2] tracking-tight text-navy sm:text-[26px] lg:text-[28px]">
            Suasana dan Kegiatan di SMK Taruna Bhakti
          </h2>
          <p className="mt-2 max-w-[620px] text-[14px] leading-[1.55] text-brand">
            Dokumentasi suasana, fasilitas, dan kegiatan siswa SMK Taruna Bhakti.
          </p>
        </header>

        <figure className="mt-5">
          <Photo
            alt={galleryFeature.alt}
            src={galleryFeature.src}
            className="h-[220px] w-full sm:h-[320px] lg:h-[420px]"
            sizes="(max-width: 1240px) 100vw, 1240px"
          />
          <figcaption className="mt-2 text-[11px] leading-5 text-muted">
            {galleryFeature.caption}
          </figcaption>
        </figure>

        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryStrip.map((item) => (
            <figure key={item.caption}>
              <Photo
                alt={item.alt}
                src={item.src}
                className="h-[120px] w-full sm:h-[150px] lg:h-[168px]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <figcaption className="mt-2 text-[12px] leading-[1.4] text-brand">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
