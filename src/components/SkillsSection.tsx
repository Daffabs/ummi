"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function SkillsSection() {
  const { skills, languages } = PORTFOLIO_DATA;

  return (
    <section
      id="keahlian"
      className="relative w-full bg-surface py-16 sm:py-24 overflow-hidden"
    >
      {/* Background Botanical Wavy Vine */}
      <svg
        className="absolute top-1/4 -right-12 w-56 sm:w-64 h-56 sm:h-64 text-primary opacity-15 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 100 100"
      >
        <path d="M10 90 Q40 60 30 30 Q60 50 80 10" strokeWidth="2.5" />
        <circle cx="80" cy="10" fill="currentColor" r="4" />
        <path d="M30 30 Q50 20 45 40 Z" fill="currentColor" fillOpacity="0.3" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full bg-surface-container-high border border-primary-container/30">
            <span className="material-symbols-outlined text-base">psychology</span>
            <span>Kapasitas Diri</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] font-bold text-on-surface">
            Keahlian Pribadi
          </h2>
          <div className="w-16 h-[2px] bg-primary-container mt-4 mb-3" />
          <p className="text-sm sm:text-base text-on-surface-variant max-w-lg">
            Perpaduan antara kecakapan interpersonal, keterampilan teknis kefarmasian, dan kemampuan komunikasi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Kompetensi & Soft Skills (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-outline-variant/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-surface-container-high text-primary flex items-center justify-center border border-primary-container/20">
                <span className="material-symbols-outlined text-xl">star</span>
              </div>
              <div>
                <h3 className="font-headline text-xl sm:text-2xl text-on-surface font-bold">
                  Kompetensi &amp; Soft Skills
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant">
                  Karakter kerja profesional dan kapabilitas farmasetik
                </p>
              </div>
            </div>

            <div className="space-y-3.5">
              {skills.map((skill, idx) => {
                const isFeatured = skill.isFeatured;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ scale: 1.01, x: 3 }}
                    className={`flex items-center justify-between p-3.5 sm:p-4 rounded-2xl transition-all ${
                      isFeatured
                        ? "bg-gradient-to-r from-surface-container-high/90 to-surface-container-low border border-primary-container/40 shadow-xs"
                        : "bg-surface-container-low hover:bg-surface-container border border-outline-variant/20"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-sm ${
                          isFeatured
                            ? "bg-surface-container-lowest text-primary border border-primary-container/30"
                            : "bg-surface-container-lowest text-primary border border-primary-container/10"
                        }`}
                      >
                        <span className="material-symbols-outlined text-lg">
                          {skill.icon}
                        </span>
                      </div>
                      <span
                        className={`text-sm sm:text-base text-on-surface ${
                          isFeatured ? "font-bold text-primary" : "font-semibold"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isFeatured
                          ? "bg-primary-container text-white shadow-xs"
                          : "bg-surface-container-lowest text-primary border border-outline-variant/30"
                      }`}
                    >
                      {skill.badge}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Column 2: Kemampuan Bahasa & Prinsip Praktik (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            {/* Language Card */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-outline-variant/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-secondary-container/60 text-secondary flex items-center justify-center border border-secondary/20">
                  <span className="material-symbols-outlined text-xl">translate</span>
                </div>
                <div>
                  <h3 className="font-headline text-xl sm:text-2xl text-on-surface font-bold">
                    Kemampuan Bahasa
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant">
                    Komunikasi verbal dan literatur ilmiah
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {languages.map((lang, idx) => (
                  <div key={lang.name} className="space-y-2">
                    {idx > 0 && <div className="w-full h-px bg-surface-container-high my-4" />}
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span className="text-on-surface font-bold">{lang.name}</span>
                      <span
                        className={`text-xs sm:text-sm font-semibold ${
                          idx === 0 ? "text-primary" : "text-secondary"
                        }`}
                      >
                        {lang.level}
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full h-2.5 bg-surface-container-high rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className={`h-full rounded-full ${
                          idx === 0
                            ? "bg-gradient-to-r from-primary to-primary-container"
                            : "bg-gradient-to-r from-secondary to-secondary-container"
                        }`}
                      />
                    </div>

                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {lang.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Values Card with Botanical Branch Icon */}
            <div className="bg-gradient-to-br from-surface-container-high/70 to-surface-container-low p-6 rounded-3xl border border-primary-container/20 flex items-start gap-4 shadow-xs">
              <span className="material-symbols-outlined text-primary text-2xl mt-0.5 shrink-0">
                health_and_safety
              </span>
              <div>
                <h4 className="font-headline text-base sm:text-lg text-on-surface font-bold">
                  Prinsip Praktik Farmasi
                </h4>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                  Mengutamakan ketelitian dosis, keamanan pasien (patient safety), dan kepatuhan penuh terhadap etika profesi kefarmasian Indonesia.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
