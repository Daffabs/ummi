export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  isAccredited: boolean;
  description: string;
}

export interface WorkExperience {
  role: string;
  type: string;
  status: string;
  organization: string;
  period: string;
  location: string;
  category: string;
  responsibilities: string[];
}

export interface OrganizationExperience {
  role: string;
  division: string;
  category: string;
  organization: string;
  period: string;
  responsibilities: string[];
}

export interface SkillItem {
  name: string;
  badge: string;
  icon: string;
  isFeatured?: boolean;
}

export interface LanguageSkill {
  name: string;
  level: string;
  percentage: number;
  description: string;
}

export interface CareerInterest {
  title: string;
  role: string;
  badge: string;
  description: string;
  icon: string;
  isPrimary?: boolean;
  competencies: string[];
}

export interface SoftwareTool {
  name: string;
  fileExt: string;
  category: string;
  description: string;
  feature: string;
  badge: string;
  icon: string;
  colorTheme: 'primary' | 'secondary' | 'accent';
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Ummi Laila Sakinah",
    title: "Ummi Laila Sakinah, S.Farm.",
    subtitle: "Portofolio Profesional Akademis & Farmasi Klinis",
    statusBadge: "TERBUKA UNTUK BEKERJA",
    tagline: "Siap Kerja & Berintegritas",
    summary:
      "Dedikasi akademis dan integritas klinis dalam peracikan formula, ketepatan sediaan steril, serta komitmen penuh terhadap keselamatan dan edukasi pengobatan pasien.",
    bio: "Sarjana Farmasi Universitas Bhakti Kencana Bandung dengan pemahaman dalam peracikan formula dan sediaan farmasi, termasuk sediaan steril seperti tetes mata dan ampul, serta sediaan emulsi oral seperti jamu untuk pengobatan lambung. Memiliki semangat tinggi dan antusias dalam mempelajari hal-hal baru, terutama di bidang farmasi. Siap berkontribusi di lingkungan kerja yang dinamis dan berfokus pada pelayanan kesehatan, dengan tujuan memberikan manfaat maksimal bagi kesehatan masyarakat.",
    email: "ummilailasakinah@gmail.com",
    phone: "+62 895-3767-36089",
    location: "Kota Bandung, Jawa Barat, Indonesia",
    heroImage: "/images/hero-profile.jpg",
    aboutImage: "/images/about-profile.jpg",
    cvLink: "#kontak",
  },
  navigation: [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang Saya", href: "#tentang-saya" },
    { label: "Pendidikan", href: "#pendidikan" },
    { label: "Pengalaman", href: "#pengalaman" },
    { label: "Keahlian", href: "#keahlian" },
    { label: "Minat Bekerja", href: "#minat-bekerja" },
    { label: "Tools", href: "#tools" },
    { label: "Kontak", href: "#kontak" },
  ],
  education: {
    badge: "Gelar Sarjana",
    degree: "S1 Farmasi",
    institution: "Universitas Bhakti Kencana, Bandung, Indonesia",
    period: "2019 – 2023",
    gpa: "IPK 3,45",
    isAccredited: true,
    description:
      "Fokus studi pada teknologi farmasi, formulasi obat cair dan steril, farmakologi klinik, serta manajemen regulasi kefarmasian. Berhasil menyelesaikan rangkaian penelitian formulasi sediaan emulsi dan praktikum laboratorium steril dengan capaian nilai memuaskan.",
  },
  internships: [
    {
      role: "Magang Farmasi",
      organization: "Kimia Farma, Cimahi, Indonesia",
      type: "Apotek Klinis",
      status: "Selesai",
      period: "Jan 2023 – Mar 2023",
      location: "Cimahi, Jawa Barat",
      category: "Pelayanan Komunitas",
      responsibilities: [
        "Melakukan pengecekan resep secara berkala guna menjamin keabsahan dosis dan kompatibilitas obat.",
        "Melakukan monitoring dan evaluasi terhadap resep obat guna mencegah potensi interaksi obat merugikan.",
      ],
    },
    {
      role: "Magang Farmasi",
      organization: "Sekolah Farmasi ITB, Bandung, Indonesia",
      type: "Riset Laboratorium",
      status: "Penelitian",
      period: "Tentatif",
      location: "Bandung, Jawa Barat",
      category: "Pengembangan Formula",
      responsibilities: [
        "Membuat formula sediaan emulsi oral yang stabil dan efektif secara terapeutik.",
        "Melakukan review jurnal ilmiah tentang potensi bahan alam obat herbal terstandar.",
        "Menyiapkan bahan-bahan dan instrumen laboratorium untuk membuat sediaan farmasi presisi.",
      ],
    },
  ],
  organizations: [
    {
      role: "Divisi Logistik",
      division: "Manajemen Logistik",
      organization: "Kewirausahaan Universitas Bhakti Kencana",
      period: "Jul 2021 – Sep 2021",
      responsibilities: [
        "Mengelola ketersediaan bahan baku agar selalu tersedia dan sesuai kebutuhan produksi.",
        "Membuat dan mengemas produk, serta menjaga standar higienitas dan kebersihan produk.",
        "Melakukan pengecekan produk secara berkala untuk memastikan konsistensi mutu.",
        "Mempersiapkan dan menjaga peralatan produksi agar tetap aman, steril, dan berfungsi prima.",
      ],
    },
    {
      role: "Divisi Bidang Kreatif",
      division: "Media & Publikasi",
      organization: "Komunitas Fotografi Farmasi Universitas Bhakti Kencana",
      period: "Apr 2020 – Apr 2021",
      responsibilities: [
        "Membuat mading UKM yang menyajikan berita terkini dan informasi kegiatan di dalam kampus secara estetis.",
        "Menyusun konsep, mengoordinasi divisi, dan menyelenggarakan agenda Dies Natalis UKM Komunitas Fotografi Farmasi.",
      ],
    },
  ],
  skills: [
    {
      name: "Manajemen Waktu",
      badge: "Teruji",
      icon: "schedule",
    },
    {
      name: "Kerja Sama Tim",
      badge: "Kolaboratif",
      icon: "diversity_3",
    },
    {
      name: "Keterampilan Komunikasi",
      badge: "Empatis",
      icon: "forum",
    },
    {
      name: "Kreatif",
      badge: "Inovatif",
      icon: "lightbulb",
    },
    {
      name: "Peracikan Formula & Sediaan Farmasi",
      badge: "Keahlian Khusus",
      icon: "science",
      isFeatured: true,
    },
  ],
  languages: [
    {
      name: "Bahasa Indonesia",
      level: "Fasih / Penutur Asli",
      percentage: 100,
      description:
        "Penggunaan tata bahasa formal, penulisan resep, konseling pasien, dan penyusunan jurnal kefarmasian.",
    },
    {
      name: "Bahasa Inggris",
      level: "Pasif",
      percentage: 60,
      description:
        "Pemahaman komprehensif terhadap jurnal farmakologi internasional, farmakope, dan buku teks medis berbahasa Inggris.",
    },
  ],
  careerInterests: [
    {
      title: "Bidang Farmasi & Klinis",
      role: "Staf Farmasi / Asisten Tenaga Kefarmasian / QC & Formulasi",
      badge: "Pilihan Utama",
      icon: "medication",
      isPrimary: true,
      description:
        "Berfokus pada pelayanan kefarmasian langsung, pemantauan dan telaah resep dokter, peracikan formula steril maupun non-steril, edukasi informasi obat kepada pasien, serta kontrol mutu di fasilitas kesehatan atau laboratorium.",
      competencies: [
        "Pelayanan Pasien",
        "Peracikan Sediaan Steril",
        "Evaluasi Resep",
        "Good Dispensing Practice (GDP)",
        "Manajemen Stok Obat",
      ],
    },
    {
      title: "Bidang Administrasi & Manajemen",
      role: "Administrasi Kesehatan / Logistik Medis / Staf Operasional",
      badge: "Manajemen & Data",
      icon: "fact_check",
      isPrimary: false,
      description:
        "Menitikberatkan pada tata kelola arsip medis dan kefarmasian, pencatatan dan pelaporan inventaris obat (stok opname), verifikasi administrasi klaim atau resep, serta koordinasi operasional berbasis ketelitian data dan akurasi tinggi.",
      competencies: [
        "Tata Kelola Dokumen & Resep",
        "Pencatatan Stok Opname",
        "Microsoft Office Farmasi",
        "Rekonsiliasi Data",
        "Administrasi Faskes",
      ],
    },
  ],
  softwareTools: [
    {
      name: "Microsoft Word",
      fileExt: "DOCS",
      category: "Administrasi & Laporan",
      description:
        "Penyusunan dokumen resep, laporan formulasi, SOP, dan telaah jurnal ilmiah dengan tata letak rapi dan terstandar.",
      feature: "Dokumentasi Standar",
      badge: "Mahir",
      icon: "description",
      colorTheme: "primary",
    },
    {
      name: "Microsoft Excel",
      fileExt: "XLSX",
      category: "Kalkulasi & Inventaris",
      description:
        "Analisis data logistik obat, inventaris farmasi, stok opname, dan penghitungan dosis secara presisi dan sistematis.",
      feature: "Akurasi Data Stok",
      badge: "Kalkulasi Presisi",
      icon: "table_chart",
      colorTheme: "secondary",
    },
    {
      name: "Microsoft PowerPoint",
      fileExt: "PPTX",
      category: "Presentasi Medis",
      description:
        "Presentasi edukasi kesehatan, pemaparan studi kasus klinis, dan hasil riset formulasi kepada audiens akademis maupun pasien.",
      feature: "Komunikasi Visual",
      badge: "Edukasi Publik",
      icon: "slideshow",
      colorTheme: "primary",
    },
  ],
};
