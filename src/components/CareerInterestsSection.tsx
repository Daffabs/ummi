"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function CareerInterestsSection() {
  const { careerInterests } = PORTFOLIO_DATA;

  return (
    <section
      id="minat-bekerja"
      className="relative w-full bg-surface-container-low py-16 sm:py-24 overflow-hidden"
    >
      {/* Decorative Botanical Ornaments in Background */}
      <svg
        className="absolute -top-12 -left-12 w-64 sm:w-80 h-64 sm:h-80 text-primary opacity-15 pointer-events-none transform -rotate-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 200 200"
      >
        <path d="M30,170 C50,110 90,60 170,30" strokeLinecap="round" strokeWidth="2.5" />
        <path d="M60,140 C45,120 50,100 75,105 C85,110 80,130 60,140 Z" fill="currentColor" fillOpacity="0.3" strokeWidth="1.5" />
        <path d="M95,110 C85,85 100,75 120,85 C125,95 115,110 95,110 Z" fill="currentColor" fillOpacity="0.3" strokeWidth="1.5" />
        <path d="M130,75 C125,50 145,40 160,55 C160,65 150,80 130,75 Z" fill="currentColor" fillOpacity="0.3" strokeWidth="1.5" />
      </svg>

      <svg
        className="absolute bottom-4 -right-10 w-60 sm:w-72 h-60 sm:h-72 text-secondary opacity-15 pointer-events-none transform rotate-12"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <path d="M50 10 Q70 50 40 90 Q50 60 30 70 Q50 40 20 45 Q50 25 50 10 Z" />
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
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full bg-surface-container-high border border-primary-container/30 shadow-xs">
            <span className="material-symbols-outlined text-base">target</span>
            <span>Fokus Karir &amp; Aspirasi</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] font-bold text-on-surface">
            Minat <span className="text-primary font-serif italic">Bekerja</span>
          </h2>

          <div className="flex items-center gap-2 mt-4 mb-3">
            <div className="w-16 h-[2px] bg-primary-container" />
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8 6 6 10 6 14C6 17.3 8.7 20 12 20C15.3 20 18 17.3 18 14C18 10 16 6 12 2Z" />
            </svg>
            <div className="w-8 h-[1px] bg-outline-variant/60" />
          </div>

          <p className="text-sm sm:text-base text-on-surface-variant max-w-xl text-balance">
            Bidang keahlian dan peran profesional yang diminati untuk berkontribusi secara optimal dalam dunia kesehatan dan manajemen.
          </p>
        </motion.div>

        {/* 2 Career Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {careerInterests.map((interest, idx) => {
            const isPrimary = interest.isPrimary;
            return (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className={`bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 relative overflow-hidden flex flex-col justify-between group ${
                  isPrimary
                    ? "border-outline-variant/30 hover:border-primary-container/60"
                    : "border-outline-variant/30 hover:border-secondary/60"
                }`}
              >
                {/* Top Right Ambient Gradient */}
                <div
                  className={`absolute top-0 right-0 w-28 h-28 rounded-bl-3xl pointer-events-none ${
                    isPrimary
                      ? "bg-gradient-to-bl from-primary-container/20 to-transparent"
                      : "bg-gradient-to-bl from-secondary-container/40 to-transparent"
                  }`}
                />

                <div>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border group-hover:scale-105 transition-transform ${
                        isPrimary
                          ? "bg-gradient-to-br from-surface-container-high to-primary-container/30 text-primary border-primary-container/30"
                          : "bg-gradient-to-br from-secondary-container/60 to-surface-container-high text-secondary border-secondary/30"
                      }`}
                    >
                      <span className="material-symbols-outlined text-3xl">
                        {interest.icon}
                      </span>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
                        isPrimary
                          ? "bg-surface-container-high text-primary border-primary-container/20"
                          : "bg-secondary-container/60 text-on-secondary-container border-secondary/20"
                      }`}
                    >
                      {interest.badge}
                    </span>
                  </div>

                  <h3 className="font-headline text-2xl sm:text-3xl text-on-surface font-bold">
                    {interest.title}
                  </h3>

                  <p
                    className={`text-sm sm:text-base mt-1 font-semibold flex items-center gap-1.5 ${
                      isPrimary ? "text-primary" : "text-secondary"
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">
                      {isPrimary ? "clinical_notes" : "inventory_2"}
                    </span>
                    <span>{interest.role}</span>
                  </p>

                  <div className="w-full h-px bg-surface-container-high my-4" />

                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-outline-variant/20">
                  <p className="text-xs uppercase tracking-wider mb-3 font-semibold flex items-center gap-1.5 text-tertiary">
                    <span
                      className={`material-symbols-outlined text-sm ${
                        isPrimary ? "text-primary" : "text-secondary"
                      }`}
                    >
                      verified
                    </span>
                    <span>Fokus Kompetensi &amp; Peran:</span>
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {interest.competencies.map((comp, cIdx) => (
                      <span
                        key={comp}
                        className={`px-3 py-1.5 rounded-xl bg-surface-container-low text-on-surface text-xs sm:text-sm border border-outline-variant/30 flex items-center gap-1.5 transition-colors ${
                          isPrimary
                            ? "hover:border-primary-container/40"
                            : "hover:border-secondary/40"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            cIdx % 2 === 0 ? "bg-primary" : "bg-secondary"
                          }`}
                        />
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
