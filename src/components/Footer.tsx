"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";

interface FooterProps {
  onOpenCVModal?: () => void;
}

export default function Footer({ onOpenCVModal }: FooterProps) {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/40 py-12 sm:py-14 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand & Credential */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <div className="w-8 h-8 rounded-full bg-primary-container/20 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">medication</span>
            </div>
            <p className="font-headline text-lg sm:text-xl text-on-surface font-bold">
              {personal.title}
            </p>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant">
            {personal.subtitle}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-6 text-sm text-on-surface-variant font-medium">
          <a
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
            href={`mailto:${personal.email}`}
          >
            <span className="material-symbols-outlined text-base">alternate_email</span>
            <span>Surel</span>
          </a>

          <button
            type="button"
            onClick={onOpenCVModal}
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-base">description</span>
            <span>Dokumen CV</span>
          </button>

          <a
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
            href="#beranda"
            onClick={scrollToTop}
          >
            <span className="material-symbols-outlined text-base">arrow_upward</span>
            <span>Ke Atas</span>
          </a>
        </div>
      </div>

      {/* Copyright & Standard note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-8 pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-on-surface-variant">
        <p>© 2026 {personal.name}. Semua hak dilindungi.</p>
        <p className="text-tertiary flex items-center gap-1.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span>Praktik &amp; Standar Farmasi Indonesia</span>
        </p>
      </div>
    </footer>
  );
}
