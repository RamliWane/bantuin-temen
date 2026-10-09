export type Achievement = {
  label: string;
  title: string;
  description: string;
  icon: "shield" | "trophy";
};

export const achievements: Achievement[] = [
  {
    icon: "shield",
    label: "Prestasi & Akreditasi",
    title: "Predikat Unggul (A)",
    description:
      "Standar keunggulan mutu BAN-S/M dengan skor tinggi berulang kali untuk seluruh kompetensi keahlian.",
  },
  {
    icon: "trophy",
    label: "Prestasi",
    title: "Peraih Rekor MURI Bidang TIK",
    description:
      "Apresiasi atas karya dan kepeloporan penguasaan teknologi informasi di jenjang SMK.",
  },
];

export const heroDescription =
  "SMK Taruna Bhakti berdiri dengan semangat untuk mencetak sumber daya manusia yang kompeten, berkarakter, dan siap menghadapi dunia kerja. Sejak awal berdirinya, sekolah ini terus berkembang menjadi salah satu SMK unggulan di wilayah Depok dengan fokus pada pendidikan vokasi yang berkualitas.";

export const story = [
  "SMK Taruna Bhakti berdiri pada tahun 2004 dan terletak di wilayah Cimanggis, Depok. Fokus awal sekolah ini adalah bidang Teknologi Informasi dan Komunikasi serta Teknik Komputer dan Jaringan.",
  "Melalui perkembangan kompetensi keahlian yang berkelanjutan, sekolah terus menyesuaikan sarana dan pembelajaran bagi siswa.",
];