"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface HeroSectionProps {
  onOpenCVModal?: () => void;
}

export default function HeroSection({ onOpenCVModal }: HeroSectionProps) {
  const { personal } = PORTFOLIO_DATA;

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("kontak");
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 72,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="beranda"
      className="relative overflow-hidden w-full bg-surface pt-10 pb-20 sm:py-24 lg:py-28"
    >
      {/* Huge Typographic Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <span className="font-headline text-[90px] sm:text-[140px] md:text-[180px] lg:text-[220px] font-bold text-surface-container-high/60 tracking-widest whitespace-nowrap">
          PORTOFOLIO
        </span>
      </div>

      {/* Decorative Floating Organic Wave behind Hero */}
      <svg
        className="absolute top-10 right-0 w-80 sm:w-96 h-80 sm:h-96 text-primary-container/20 pointer-events-none z-0"
        fill="none"
        viewBox="0 0 200 200"
      >
        <path
          d="M0,100 C50,150 150,50 200,100 L200,200 L0,200 Z"
          fill="currentColor"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start space-y-5"
          >
            {/* Subtitle Badge with botanical icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-sm border border-primary-container/20"
            >
              <span className="material-symbols-outlined text-base">spa</span>
              <span>{personal.statusBadge}</span>
            </motion.div>

            {/* Main Name Heading */}
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-on-surface leading-tight font-bold tracking-tight text-balance">
              {personal.name.toUpperCase()}
            </h1>

            {/* Elegant Dusty Rose Accent Line with Leaf Icon */}
            <div className="flex items-center gap-3 w-full">
              <div className="w-16 h-[2px] bg-primary-container rounded-full" />
              <svg
                className="w-4 h-4 text-primary shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8 6 6 10 6 14C6 17.3 8.7 20 12 20C15.3 20 18 17.3 18 14C18 10 16 6 12 2Z" />
              </svg>
              <div className="w-24 h-[1px] bg-outline-variant/60 rounded-full" />
            </div>

            {/* Short Intro Paragraph */}
            <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed text-balance">
              {personal.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.a
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#kontak"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-primary-container text-white text-sm sm:text-base font-semibold shadow-md hover:bg-primary hover:shadow-lg transition-all duration-300 border border-primary/20 group"
              >
                <span>Hubungi Saya</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </motion.a>

              <motion.button
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (onOpenCVModal) {
                    onOpenCVModal();
                  } else {
                    const el = document.getElementById("kontak");
                    if (el) {
                      window.scrollTo({
                        top: el.offsetTop - 72,
                        behavior: "smooth",
                      });
                    }
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-surface-container-lowest text-primary text-sm sm:text-base font-semibold shadow-sm hover:bg-primary-container/10 hover:shadow-md transition-all duration-300 border border-primary-container/40"
              >
                <span className="material-symbols-outlined text-lg text-primary">
                  download
                </span>
                <span>Unduh CV (PDF)</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Profile Image with Arch Frame & Halo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center relative mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[380px]">
              {/* Dashed Circular Rings & Ambient Glow */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -left-10 w-52 sm:w-60 h-52 sm:h-60 rounded-full border-2 border-dashed border-primary-container/40 pointer-events-none -z-0"
              />
              <div className="absolute -bottom-10 -right-10 w-60 sm:w-68 h-60 sm:h-68 rounded-full border border-secondary/30 pointer-events-none -z-0" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-secondary-container/40 to-primary-container/25 rounded-[70px] -rotate-3 transform shadow-inner" />

              {/* Botanical Sprigs behind frame */}
              <svg
                className="absolute -top-8 -right-8 w-32 sm:w-36 h-32 sm:h-36 text-primary opacity-35 pointer-events-none z-0 transform rotate-45"
                fill="currentColor"
                viewBox="0 0 100 100"
              >
                <path d="M50 90 Q30 50 60 10 Q50 40 70 30 Q50 60 80 55 Q50 75 50 90 Z" />
              </svg>
              <svg
                className="absolute -bottom-8 -left-8 w-28 sm:w-32 h-28 sm:h-32 text-secondary opacity-30 pointer-events-none z-0 transform -rotate-30"
                fill="currentColor"
                viewBox="0 0 100 100"
              >
                <path d="M50 10 Q70 50 40 90 Q50 60 30 70 Q50 40 20 45 Q50 25 50 10 Z" />
              </svg>

              {/* Main Photo Frame with Arch and Shadow */}
              <div className="relative z-10 rounded-[50px] sm:rounded-[54px] overflow-hidden bg-surface-container-lowest shadow-2xl ring-4 ring-primary-container/25 aspect-[3/4]">
                <Image
                  src={personal.heroImage}
                  alt={personal.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, 380px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Badge: Siap Kerja & Berintegritas */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-5 -right-2 sm:-right-4 z-30 bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2 rounded-full shadow-xl flex items-center gap-2 border border-outline-variant/40"
              >
                <span className="text-base">💼</span>
                <span className="text-xs sm:text-sm text-on-surface font-semibold tracking-wide">
                  {personal.tagline}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
