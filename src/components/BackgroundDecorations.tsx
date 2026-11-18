"use client";

import { motion } from "framer-motion";

export default function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden">
      {/* Top Left Botanical Branch */}
      <motion.svg
        initial={{ opacity: 0, x: -30, rotate: -20 }}
        animate={{ opacity: 0.2, x: 0, rotate: -12 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-12 -left-12 w-80 sm:w-96 h-80 sm:h-96 text-primary pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 200 200"
      >
        <path d="M20,180 C40,110 90,60 170,25" strokeLinecap="round" strokeWidth="2.5" />
        <path d="M50,150 C35,130 40,110 65,115 C75,120 70,140 50,150 Z" fill="currentColor" fillOpacity="0.3" strokeWidth="1.5" />
        <path d="M80,120 C70,95 85,85 105,95 C110,105 100,120 80,120 Z" fill="currentColor" fillOpacity="0.3" strokeWidth="1.5" />
        <path d="M115,85 C110,60 130,50 145,65 C145,75 135,90 115,85 Z" fill="currentColor" fillOpacity="0.3" strokeWidth="1.5" />
        <path d="M145,55 C150,30 170,30 175,45 C170,60 155,60 145,55 Z" fill="currentColor" fillOpacity="0.3" strokeWidth="1.5" />
      </motion.svg>

      {/* Right Floating Mortar & Pestle Pharmacy Watermark */}
      <motion.svg
        animate={{
          y: [0, -12, 0],
          rotate: [6, 8, 6],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[28%] -right-16 w-64 sm:w-80 h-64 sm:h-80 text-secondary opacity-15 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 100 100"
      >
        <path d="M30 35 L70 35 C70 55 60 70 50 70 C40 70 30 55 30 35 Z" fill="currentColor" fillOpacity="0.15" strokeWidth="2.5" />
        <path d="M25 35 C25 32 75 32 75 35" strokeLinecap="round" strokeWidth="3" />
        <path d="M42 68 L36 78 C35 80 65 80 64 78 L58 68" strokeLinecap="round" strokeWidth="2" />
        <path d="M58 20 L44 45" strokeLinecap="round" strokeWidth="3.5" />
        <path d="M68 45 Q80 35 88 40 Q82 50 68 45" fill="currentColor" fillOpacity="0.4" strokeWidth="1.5" />
      </motion.svg>

      {/* Mid-Left Molecular & Botanical Flora */}
      <motion.svg
        animate={{
          y: [0, 10, 0],
          rotate: [-45, -42, -45],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[52%] -left-16 w-72 sm:w-88 h-72 sm:h-88 text-primary opacity-15 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 160 160"
      >
        <polygon points="50,40 75,25 100,40 100,70 75,85 50,70" strokeDasharray="4 3" strokeWidth="2" />
        <circle cx="50" cy="40" fill="currentColor" r="4" />
        <circle cx="75" cy="25" fill="currentColor" r="4" />
        <circle cx="100" cy="40" fill="currentColor" r="4" />
        <circle cx="100" cy="70" fill="currentColor" r="4" />
        <circle cx="75" cy="85" fill="currentColor" r="4" />
        <circle cx="50" cy="70" fill="currentColor" r="4" />
        <path d="M30 110 Q70 80 120 30" strokeLinecap="round" strokeWidth="2.5" />
        <path d="M65 90 Q85 85 80 70 Q65 75 65 90" fill="currentColor" fillOpacity="0.35" strokeWidth="1.5" />
        <path d="M95 55 Q115 50 110 35 Q95 40 95 55" fill="currentColor" fillOpacity="0.35" strokeWidth="1.5" />
      </motion.svg>

      {/* Bottom Right Large Pharmaceutical Botanical Fern */}
      <motion.svg
        animate={{
          rotate: [12, 14, 12],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-16 -right-16 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] text-primary-container opacity-20 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 200 200"
      >
        <path d="M20,190 C60,150 110,100 180,30" strokeLinecap="round" strokeWidth="3" />
        <path d="M60,155 C78,135 102,142 100,162 C85,172 70,165 60,155 Z" fill="currentColor" fillOpacity="0.4" strokeWidth="1.5" />
        <path d="M95,120 C112,100 136,108 132,128 C118,138 105,130 95,120 Z" fill="currentColor" fillOpacity="0.4" strokeWidth="1.5" />
        <path d="M130,85 C145,68 168,74 165,92 C152,100 140,94 130,85 Z" fill="currentColor" fillOpacity="0.4" strokeWidth="1.5" />
        <path d="M75,142 C60,125 65,105 82,112 C88,125 82,138 75,142 Z" fill="currentColor" fillOpacity="0.35" strokeWidth="1.5" />
        <path d="M110,105 C95,90 100,70 116,78 C122,90 118,102 110,105 Z" fill="currentColor" fillOpacity="0.35" strokeWidth="1.5" />
      </motion.svg>

      {/* Floating Sparkles with Twinkle Animation */}
      <motion.div
        animate={{
          opacity: [0.15, 0.45, 0.15],
          scale: [0.85, 1.15, 0.85],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] left-[12%] text-primary pointer-events-none"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [0.9, 1.2, 0.9],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[42%] right-[10%] text-secondary pointer-events-none"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          opacity: [0.15, 0.4, 0.15],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[75%] left-[8%] text-primary-container pointer-events-none"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" />
        </svg>
      </motion.div>
    </div>
  );
}
