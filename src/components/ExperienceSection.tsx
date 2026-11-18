"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function ExperienceSection() {
  const { internships, organizations } = PORTFOLIO_DATA;

  return (
    <section
      id="pengalaman"
      className="relative w-full bg-surface-container-low py-16 sm:py-24 overflow-hidden"
    >
      {/* Background Herb Silhouette */}
      <svg
        className="absolute bottom-10 left-4 w-48 sm:w-60 h-48 sm:h-60 text-secondary opacity-15 pointer-events-none transform -rotate-12"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <path d="M50 90 C30 70 20 40 50 10 C80 40 70 70 50 90 Z M48 25 Q35 45 48 65 M52 35 Q65 50 52 70" />
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
            <span className="material-symbols-outlined text-base">badge</span>
            <span>Rekam Jejak Praktis</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] font-bold text-on-surface">
            Pengalaman Kerja &amp; Organisasi
          </h2>
          <div className="w-16 h-[2px] bg-primary-container mt-4 mb-3" />
          <p className="text-sm sm:text-base text-on-surface-variant max-w-lg">
            Kombinasi pengalaman lapangan di apotek jejaring nasional, laboratorium riset ternama, serta kepengurusan organisasi.
          </p>
        </motion.div>

        {/* Timeline: Pengalaman Magang Farmasi */}
        <div className="mb-16 sm:mb-20 max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-12 space-y-8 sm:space-y-10">
            {/* Vertical Timeline Gradient Line */}
            <div className="absolute left-3.5 sm:left-5 top-5 bottom-5 w-[3px] bg-gradient-to-b from-primary via-primary-container to-secondary-container rounded-full" />

            {internships.map((intern, idx) => (
              <motion.div
                key={intern.organization}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Pharmacy Node Icon with Ring */}
                <div
                  className={`absolute -left-[27px] sm:-left-[39px] top-6 w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-md border-2 ${
                    idx === 0
                      ? "border-primary ring-4 ring-primary-container/20"
                      : "border-primary-container ring-4 ring-secondary-container/30"
                  } group-hover:scale-110 transition-transform`}
                >
                  <span
                    className={`material-symbols-outlined text-sm ${
                      idx === 0 ? "text-primary" : "text-primary-container"
                    }`}
                  >
                    {idx === 0 ? "medication" : "science"}
                  </span>
                </div>

                {/* Content Card */}
                <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-outline-variant/40 hover:border-primary-container/50">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary text-xs font-semibold uppercase tracking-wider border border-primary-container/20">
                          {intern.type}
                        </span>
                        <span
                          className={`text-xs font-medium flex items-center gap-1.5 ${
                            intern.status === "Selesai"
                              ? "text-emerald-700"
                              : "text-secondary"
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              intern.status === "Selesai"
                                ? "bg-emerald-600 animate-pulse"
                                : "bg-secondary"
                            }`}
                          />
                          {intern.status}
                        </span>
                      </div>
                      <h4 className="font-headline text-xl sm:text-2xl text-on-surface font-bold">
                        {intern.role}
                      </h4>
                      <p className="text-sm sm:text-base text-primary mt-0.5 font-semibold">
                        {intern.organization}
                      </p>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-secondary-container/60 text-on-secondary-container text-xs sm:text-sm font-medium border border-secondary/20 shrink-0 self-start">
                      {intern.period}
                    </span>
                  </div>

                  <div className="w-full h-px bg-surface-container-high my-4" />

                  <ul className="space-y-3 text-sm sm:text-base text-on-surface-variant">
                    {intern.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-primary-container text-lg mt-0.5 shrink-0">
                          check_circle
                        </span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-tertiary">
                    <div className="flex items-center gap-1.5 text-primary font-medium">
                      <span className="material-symbols-outlined text-base">pin_drop</span>
                      <span>{intern.location}</span>
                    </div>
                    <span className="text-xs bg-surface-container-low px-3 py-1 rounded-full border border-outline-variant/30 text-on-surface-variant font-medium">
                      {intern.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subsection: Pengalaman Organisasi */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-secondary to-secondary-container text-white flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-xl">groups</span>
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl text-on-surface font-bold">
              Pengalaman Organisasi
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-secondary-container via-outline-variant/30 to-transparent ml-2 hidden sm:block" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {organizations.map((org, idx) => (
              <motion.div
                key={org.organization}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -4 }}
                className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-outline-variant/30 hover:border-secondary/50 relative overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-surface-container-high to-secondary-container/40 text-primary text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 border border-primary-container/20">
                      <span className="material-symbols-outlined text-sm">
                        {idx === 0 ? "inventory_2" : "photo_camera"}
                      </span>
                      <span>{org.division}</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary-container/60 text-on-secondary-container text-xs font-medium border border-secondary/20">
                      {org.period}
                    </span>
                  </div>

                  <h4 className="font-headline text-xl sm:text-2xl text-on-surface font-bold">
                    {org.role}
                  </h4>
                  <p className="text-sm sm:text-base text-secondary mt-1 font-semibold">
                    {org.organization}
                  </p>

                  <div className="w-full h-px bg-surface-container-high my-4" />

                  <ul className="space-y-3 text-sm sm:text-base text-on-surface-variant">
                    {org.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-secondary text-base mt-0.5 shrink-0">
                          done_all
                        </span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
