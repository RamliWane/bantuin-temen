export type Leader = {
  period: string;
  name: string;
  role: string;
  description: string;
  photo?: string;
};

const DUMMY_PHOTO =
  "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/01/17043326/kerap-abai-ini-penyakit-yang-menyasar-kesehatan-pekerja-kantoran-halodoc.jpg.webp";

export const leaders: Leader[] = [
  {
    period: "2005 – 2008",
    name: "Drs. H. AR Harahap, MM (Alm)",
    role: "KEPALA SEKOLAH PERTAMA",
    description:
      "Membangun tata kelola awal sekolah kejuruan dari 3 kelas perdana, pembentukan kurikulum dasar TIK, serta penguatan etos kedisiplinan almamater.",
    photo: DUMMY_PHOTO,
  },
  {
    period: "2008 – 2009",
    name: "H. Abdul Yazid",
    role: "KEPALA SEKOLAH KE-2",
    description:
      "Mengawal kesinambungan manajemen berbasis sekolah (MBS) serta peningkatan mutu kegiatan belajar mengajar secara mandiri.",
    photo: DUMMY_PHOTO,
  },
  {
    period: "2009 – 2012",
    name: "Drs. H. Wirya Jayaatmaja",
    role: "KEPALA SEKOLAH KE-3",
    description:
      "Membawa SMK Taruna Bhakti meraih Akreditasi A, pencapaian rekor prestisius MURI TIK, dan ekspansi kompetensi keahlian Multimedia.",
    photo: DUMMY_PHOTO,
  },
  {
    period: "2012 – 2016",
    name: "Usman Hasan, S.Pd",
    role: "KEPALA SEKOLAH KE-4",
    description:
      "Perluasan sarana laboratorium komputer modern dan penguatan jejaring kemitraan dunia usaha serta dunia industri (DUDI).",
    photo: DUMMY_PHOTO,
  },
  {
    period: "2016 – 2022",
    name: "Ramadin Tarigan, ST",
    role: "KEPALA SEKOLAH KE-5",
    description:
      "Pengembangan kurikulum kejuruan berbasis standar industri, pembukaan jurusan vokasi baru, serta modernisasi sarana studio kreatif.",
    photo: DUMMY_PHOTO,
  },
  {
    period: "2022 – 2025",
    name: "Nursidik, ST",
    role: "KEPALA SEKOLAH KE-6",
    description:
      "Memimpin modernisasi 6 program keahlian, kemitraan industri global, digitalisasi kurikulum berbasis teaching factory, dan inovasi smart learning.",
    photo: DUMMY_PHOTO,
  },
  {
    period: "2025 – Sekarang",
    name: "Aina Novera S.Pd, MM",
    role: "KEPALA SEKOLAH AKTIF",
    description:
      "Meneruskan estafet kepemimpinan untuk akselerasi keunggulan vokasi global, pembinaan karakter berakhlak, dan penguatan prestasi berkelanjutan.",
    photo: DUMMY_PHOTO,
  },
];
