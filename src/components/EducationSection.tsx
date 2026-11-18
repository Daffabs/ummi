"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function EducationSection() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section
      id="pendidikan"
      className="relative w-full bg-surface py-16 sm:py-24 overflow-hidden"
    >
      {/* Background Floral Vine Watermark */}
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none">
        <svg className="w-72 h-72 text-primary" fill="currentColor" viewBox="0 0 200 200">
          <path d="M100 20 C140 60 160 120 120 180 C80 140 60 80 100 20 Z" />
        </svg>
      </div>

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
            <span className="material-symbols-outlined text-base">history_edu</span>
            <span>Latar Belakang Akademis</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] font-bold text-on-surface">
            Pendidikan Formal
          </h2>
          <div className="w-16 h-[2px] bg-primary-container mt-4 mb-3" />
          <p className="text-sm sm:text-base text-on-surface-variant max-w-lg">
            Landasan keilmuan kefarmasian yang kokoh melalui pendidikan terakreditasi dan berorientasi klinis.
          </p>
        </motion.div>

        {/* Academic Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-surface-container-lowest p-6 sm:p-9 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-primary-container/30 relative overflow-hidden ring-4 ring-surface-container-high/60 group">
            {/* Watermark Graduate Hat in Background */}
            <div className="absolute -right-6 -bottom-6 w-52 h-52 text-primary opacity-10 group-hover:opacity-15 transition-opacity pointer-events-none select-none flex items-center justify-center">
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
                <path d="M50 15 L10 35 L50 55 L90 35 Z" />
                <path d="M25 45 L25 70 C25 80 75 80 75 70 L75 45 L50 58 Z" />
                <path d="M90 35 L90 65" stroke="currentColor" strokeWidth="4" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary text-xs font-semibold uppercase tracking-wider border border-primary-container/20">
                      {education.badge}
                    </span>
                    <span className="px-3 py-0.5 rounded-full bg-secondary-container/50 text-secondary text-xs font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">verified</span>
                      <span>Terakreditasi</span>
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl sm:text-3xl text-on-surface font-bold">
                    {education.degree}
                  </h3>
                  <p className="text-sm sm:text-base text-primary mt-1 flex items-center gap-1.5 font-medium">
                    <span className="material-symbols-outlined text-base">school</span>
                    <span>{education.institution}</span>
                  </p>
                </div>

                <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 shrink-0">
                  <span className="px-3.5 py-1.5 rounded-full bg-secondary-container/60 text-on-secondary-container text-xs sm:text-sm font-semibold border border-secondary/20">
                    {education.period}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-container text-white text-xs sm:text-sm font-semibold shadow-sm">
                    <span className="material-symbols-outlined text-sm">grade</span>
                    <span>{education.gpa}</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-surface-container-high my-4" />

              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                {education.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
