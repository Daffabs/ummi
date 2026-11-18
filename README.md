# Portofolio Profesional Ummi Laila Sakinah, S.Farm. (Next.js)

Portofolio web modern, elegan, responsif, dan kaya animasi yang dibangun dengan **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, dan **Framer Motion**. Desain ini secara presisi mengadopsi estetika *Editorial Farmasi Elegan* sesuai dengan file `screen.png` dan spesifikasi `DESIGN.md`.

---

## 🌟 Fitur Utama

1. **Desain Editorial Farmasi Sesuai `screen.png`:**
   - Palet warna lembut *Dusty Rose*, *Soft Taupe*, *Soft Blush-Pink*, dan *Warm Cream*.
   - Tipografi elegan kombinasi *Playfair Display* (judul akademis editorial) dan *Plus Jakarta Sans* (keterbacaan data & konten teknis).
   - Ornamen botani & kefarmasian mengambang (*floating botanical branches, mortar & pestle watermark, molecular flora*).

2. **Animasi Halus & Interaktif (Framer Motion):**
   - **Scroll Progress Bar:** Indikator progres membaca di bagian atas navbar.
   - **Reveal on Scroll:** Transisi masuk halus (*fade up*, *slide in*, *staggered elements*) saat elemen memasuki layar viewport.
   - **Interactive Hover Effects:** Efek kartu terangkat (*card lift*), *micro-glow*, dan pembesaran halus pada gambar potret.
   - **Animated Progress Bars:** Batang persentase kemampuan bahasa (Bahasa Indonesia & Bahasa Inggris) yang terisi dinamis saat digulir.
   - **Floating Badges & Twinkling Sparkles:** Efek melayang perlahan dan kelap-kelip lembut pada ornamen latar belakang.
   - **Floating Back to Top:** Tombol kembali ke atas yang muncul otomatis setelah menggulir ke bawah.

3. **Responsivitas Penuh (Mobile, Tablet, Desktop):**
   - **Navbar Responsif:** Dilengkapi tombol hamburger dan *animated mobile drawer menu* untuk pengalaman navigasi yang mulus di ponsel dan tablet.
   - **Grid Adaptif:** Tata letak fleksibel (1 kolom di mobile, 2 kolom di tablet, hingga 12 kolom di layar desktop lebar) tanpa *horizontal overflow*.

4. **Fitur Tambahan:**
   - **Modal Dokumen CV:** Pratinjau interaktif Curriculum Vitae dengan opsi cetak/simpan PDF dan permohonan via email.
   - **One-Click Salin Email:** Tombol salin alamat email langsung ke clipboard dengan indikator status "Tersalin!".
   - **Tautan WhatsApp Langsung:** Menghubungkan langsung ke obrolan WhatsApp dengan pesan pembuka otomatis.

---

## 🚀 Panduan Menjalankan Proyek

### 1. Jalankan Mode Pengembangan (Development Server)
```bash
npm run dev
```
Buka browser dan akses [http://localhost:3000](http://localhost:3000) untuk melihat portofolio secara langsung.

### 2. Membangun untuk Produksi (Production Build)
```bash
npm run build
npm run start
```

---

## 📁 Struktur Proyek

```
portofolio/
├── public/
│   └── images/
│       ├── hero-profile.jpg      # Foto beranda utama dengan bingkai lengkung
│       └── about-profile.jpg     # Foto potret wisuda profil
├── src/
│   ├── app/
│   │   ├── globals.css           # Styling Tailwind CSS & utilitas scrollbar
│   │   ├── layout.tsx            # Metadata SEO & konfigurasi Google Fonts
│   │   └── page.tsx              # Halaman beranda utama
│   ├── components/
│   │   ├── BackgroundDecorations.tsx # Ornamen botani & watermark mengambang
│   │   ├── Navbar.tsx            # Navigasi lekat dengan progress bar & mobile menu
│   │   ├── HeroSection.tsx       # Seksi beranda (Hero)
│   │   ├── AboutSection.tsx      # Seksi Tentang Saya
│   │   ├── EducationSection.tsx  # Seksi Pendidikan Formal
│   │   ├── ExperienceSection.tsx # Seksi Magang Farmasi & Organisasi
│   │   ├── SkillsSection.tsx     # Seksi Keahlian & Bahasa
│   │   ├── CareerInterestsSection.tsx # Seksi Minat Bekerja
│   │   ├── ToolsSection.tsx      # Seksi Perangkat Lunak (Word, Excel, PPT)
│   │   ├── ContactSection.tsx    # Seksi Kontak & Monogram Editorial
│   │   ├── Footer.tsx            # Footer & tautan navigasi bawah
│   │   ├── CVModal.tsx           # Modal pratinjau & unduh CV
│   │   └── ScrollToTop.tsx       # Tombol floating kembali ke atas
│   └── data/
│       └── portfolio.ts          # Data terstruktur portofolio
├── DESIGN.md                     # Panduan sistem desain
├── screen.png                    # Referensi visual desain asli
├── tailwind.config.ts            # Konfigurasi token warna & tipografi Tailwind
├── tsconfig.json                 # Konfigurasi TypeScript
└── package.json                  # Manajemen dependensi
```
