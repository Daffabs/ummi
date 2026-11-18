"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function AboutSection() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="tentang-saya"
      className="relative w-full bg-surface-container-low py-16 sm:py-24 overflow-hidden"
    >
      {/* Botanical Wavy Divider Line */}
      <div className="w-full flex items-center justify-center gap-3 pb-8 select-none pointer-events-none opacity-60">
        <div className="w-20 sm:w-28 h-px bg-primary-container" />
        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7 11 11 9 17 8Z" />
        </svg>
        <div className="w-20 sm:w-28 h-px bg-primary-container" />
      </div>

      {/* Background Corner Botanical Flourish */}
      <svg
        className="absolute top-8 left-4 w-32 sm:w-40 h-32 sm:h-40 text-primary-container opacity-15 pointer-events-none"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <path d="M10,10 Q50,20 60,60 Q20,50 10,10 Z" />
        <path d="M10,10 Q20,50 60,60 Q50,20 10,10 Z" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with Corner Accents */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[300px] sm:max-w-sm">
              {/* Botanical Corner Frames */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-primary-container rounded-tl-2xl z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-primary-container rounded-br-2xl z-20 pointer-events-none" />
              <div className="absolute -top-6 -left-6 w-36 h-36 rounded-full border border-primary-container/30 pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-secondary-container/50 rounded-full blur-2xl pointer-events-none" />

              {/* Image Frame */}
              <div className="rounded-3xl overflow-hidden bg-surface-container-lowest shadow-lg aspect-[4/5] border-2 border-primary-container/20 relative z-10 group">
                <Image
                  src={personal.aboutImage}
                  alt={`Potret ${personal.name}`}
                  fill
                  sizes="(max-width: 640px) 300px, 384px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col space-y-5 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest">
              <span className="w-6 h-[1.5px] bg-primary" />
              <span className="material-symbols-outlined text-base">person_pin</span>
              <span>Profil Profesional</span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[42px] font-bold text-on-surface leading-tight">
              Tentang <span className="text-primary-container font-serif italic">Saya</span>
            </h2>

            <div className="flex items-center gap-2">
              <div className="w-16 h-[2px] bg-primary-container" />
              <div className="w-3 h-[2px] bg-secondary" />
            </div>

            <p className="text-base sm:text-lg text-on-surface leading-relaxed text-balance">
              {personal.bio}
            </p>

            {/* Micro Highlights Pill Badges */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-primary text-xs sm:text-sm font-semibold border border-primary-container/30 shadow-xs">
                <span className="material-symbols-outlined text-base">science</span>
                <span>Formulasi Steril & Non-Steril</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-secondary text-xs sm:text-sm font-semibold border border-secondary/30 shadow-xs">
                <span className="material-symbols-outlined text-base">medication</span>
                <span>Edukasi & Keselamatan Pasien</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-on-surface-variant text-xs sm:text-sm font-semibold border border-outline-variant/40 shadow-xs">
                <span className="material-symbols-outlined text-base">verified</span>
                <span>Riset Sediaan Herbal</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
