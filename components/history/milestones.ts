export type Milestone = {
  year: string;
  title: string;
  description: string;
  current?: boolean;
};

export const milestones: Milestone[] = [
  {
    year: "2004",
    title: "Pendirian SMK Taruna Bhakti",
    description:
      "Didirikan oleh Yayasan Setya Bhakti pada 16 Juni 2004 di Jl. Pekapuran, Kelurahan Curug, Kecamatan Cimanggis, Depok. Tahun pertama dibuka dengan 3 rombongan belajar, 126 siswa, 13 guru pengajar, dan 1 laboratorium komputer.",
  },
  {
    year: "2005–2006",
    title: "Pertumbuhan & Tantangan Awal",
    description:
      "Tahun kedua jumlah siswa sempat turun menjadi 64 akibat tingginya biaya pendidikan. Setelah perubahan sistem manajemen dari terpusat di Yayasan menjadi Manajemen Berbasis Sekolah, siswa kembali tumbuh menjadi 163 siswa dalam 4 rombongan belajar.",
  },
  {
    year: "2008",
    title: "Akreditasi A & Rekor MURI",
    description:
      "Meraih nilai Akreditasi Sekolah predikat A (Amat Baik) serta memperoleh rekor MURI dalam bidang Teknologi Informasi dan Komunikasi. Jumlah siswa meningkat menjadi 242 siswa dalam 6 rombongan belajar.",
  },
  {
    year: "2009",
    title: "Pembukaan Kompetensi Multimedia",
    description:
      "Dibuka kompetensi keahlian Teknik Multimedia yang masih satu rumpun dengan Teknik Komputer dan Jaringan. SMK Taruna Bhakti berkembang menjadi 9 rombongan belajar dengan 360 siswa.",
  },
  {
    year: "2026–Sekarang",
    title: "6 Program Keahlian Aktif",
    description:
      "Pada tahun pelajaran 2026/2027 sekolah memiliki 1.664 siswa dalam 47 rombongan belajar, terdiri dari 6 kompetensi keahlian: Teknik Jaringan Komputer dan Telekomunikasi (12 rombel), Pengembangan Perangkat Lunak dan Gim (15 rombel), Broadcasting dan Perfilman (9 rombel), Teknik Elektronika (4 rombel), Animasi (5 rombel), dan Desain Komunikasi Visual (2 rombel).",
    current: true,
  },
];