"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function ContactSection() {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="kontak"
      className="relative w-full bg-surface py-16 sm:py-24 overflow-hidden"
    >
      {/* Background Botanical Fern & Pharmacy Watermark */}
      <svg
        className="absolute -top-10 -right-10 w-80 sm:w-96 h-80 sm:h-96 text-primary opacity-15 pointer-events-none transform rotate-45"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 200 200"
      >
        <path d="M10,190 C50,150 120,80 190,10" strokeWidth="2.5" />
        <path d="M60,140 Q90,130 90,150 Q70,160 60,140 Z" fill="currentColor" fillOpacity="0.3" />
        <path d="M100,100 Q130,90 130,110 Q110,120 100,100 Z" fill="currentColor" fillOpacity="0.3" />
        <path d="M140,60 Q170,50 170,70 Q150,80 140,60 Z" fill="currentColor" fillOpacity="0.3" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Editorial Invitation Card Style Outer Box */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="bg-surface-container-lowest rounded-[32px] sm:rounded-[36px] p-6 sm:p-12 lg:p-16 shadow-xl border-2 border-primary-container/30 relative overflow-hidden ring-4 sm:ring-8 ring-surface-container-high/40"
        >
          {/* 4 Corner Editorial Frame Motifs */}
          <div className="absolute top-4 left-4 w-10 sm:w-12 h-10 sm:h-12 border-t-2 border-l-2 border-primary-container/40 rounded-tl-xl pointer-events-none" />
          <div className="absolute top-4 right-4 w-10 sm:w-12 h-10 sm:h-12 border-t-2 border-r-2 border-primary-container/40 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-10 sm:w-12 h-10 sm:h-12 border-b-2 border-l-2 border-primary-container/40 rounded-bl-xl pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-10 sm:w-12 h-10 sm:h-12 border-b-2 border-r-2 border-primary-container/40 rounded-br-xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Contact Details (7 cols) */}
            <div className="lg:col-span-7 flex flex-col space-y-5">
              <div className="inline-flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest px-4 py-1.5 rounded-full bg-surface-container-high border border-primary-container/20 w-max shadow-xs">
                <span className="material-symbols-outlined text-base">
                  connect_without_contact
                </span>
                <span>Hubungi Saya</span>
              </div>

              <h2 className="font-headline text-3xl sm:text-4xl lg:text-[44px] font-bold text-on-surface leading-tight">
                Mari Terhubung
              </h2>

              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed text-balance">
                Saya terbuka untuk peluang magang, kerja, maupun kolaborasi di bidang farmasi dan pelayanan kesehatan.
              </p>

              <div className="flex items-center gap-2">
                <div className="w-16 h-[2px] bg-primary-container" />
                <svg className="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8 6 6 10 6 14C6 17.3 8.7 20 12 20C15.3 20 18 17.3 18 14C18 10 16 6 12 2Z" />
                </svg>
              </div>

              {/* Contact List */}
              <div className="space-y-3.5 pt-2">
                {/* Email Item */}
                <div className="relative group">
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center justify-between p-4 rounded-2xl hover:bg-surface-container transition-all border border-outline-variant/30 hover:border-primary-container/40 group shadow-xs bg-surface-container-lowest"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 overflow-hidden">
                      <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-white transition-colors shrink-0 shadow-xs">
                        <span className="material-symbols-outlined text-2xl">mail</span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs text-tertiary font-semibold uppercase tracking-wider">
                          Alamat Surel
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-on-surface group-hover:text-primary transition-colors truncate">
                          {personal.email}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      title="Salin alamat email"
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-surface-container-high hover:bg-primary-container hover:text-white transition-colors text-primary shrink-0 ml-2 border border-primary-container/20"
                    >
                      {copied ? "Tersalin!" : "Salin"}
                    </button>
                  </a>
                </div>

                {/* WhatsApp / Phone Item */}
                <a
                  href={`https://wa.me/62895376736089?text=Halo%20Ummi%20Laila%20Sakinah,%20saya%20tertarik%20dengan%20profil%20portofolio%20Anda.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 sm:gap-4 p-4 rounded-2xl hover:bg-surface-container transition-all border border-outline-variant/30 hover:border-secondary/40 group shadow-xs bg-surface-container-lowest"
                >
                  <div className="w-12 h-12 rounded-2xl bg-secondary-container/60 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-2xl">phone_in_talk</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-tertiary font-semibold uppercase tracking-wider">
                      Nomor Telepon / WhatsApp
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-on-surface group-hover:text-primary transition-colors">
                      {personal.phone}
                    </span>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-3.5 sm:gap-4 p-4 rounded-2xl bg-surface-container-low/70 border border-outline-variant/30">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-tertiary font-semibold uppercase tracking-wider">
                      Domisili
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-on-surface">
                      {personal.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-3">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href={`mailto:${personal.email}?subject=Peluang%20Kolaborasi%20/%20Kerja%20-%20Portofolio%20Farmasi`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-primary-container text-white text-base font-semibold shadow-md hover:bg-primary hover:shadow-lg transition-all duration-300 border border-primary/20"
                >
                  <span className="material-symbols-outlined text-xl">send</span>
                  <span>Kirim Email Sekarang</span>
                </motion.a>
              </div>
            </div>

            {/* Right: Editorial Letter Card Presentation with Monogram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col items-center justify-center text-center p-8 sm:p-10 bg-gradient-to-b from-surface-container-low to-surface-container rounded-3xl border-2 border-primary-container/20 relative overflow-hidden shadow-inner"
            >
              {/* Monogram Stamp "ULS" top right */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center rotate-12 bg-surface-container-lowest/80 shadow-xs">
                <span className="font-serif text-[11px] font-bold text-primary tracking-widest">
                  ULS
                </span>
              </div>

              {/* Botanical Sprig in Corner */}
              <svg
                className="absolute bottom-2 left-2 w-16 h-16 text-primary-container opacity-20 pointer-events-none"
                fill="currentColor"
                viewBox="0 0 100 100"
              >
                <path d="M10,90 Q40,60 50,20 Q60,50 90,60 Z" />
              </svg>

              <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm mb-4 border border-primary-container/20">
                <span className="material-symbols-outlined text-3xl">auto_stories</span>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-tertiary uppercase tracking-widest mb-2">
                Salam Hangat &amp; Hormat,
              </p>

              {/* Handwritten cursive styled signature */}
              <div className="my-2 sm:my-3 text-primary-container select-none">
                <span className="font-headline text-3xl sm:text-4xl lg:text-5xl italic tracking-wide font-medium">
                  {personal.name}
                </span>
              </div>

              <div className="w-24 h-[1.5px] bg-primary-container/50 my-3" />

              <p className="text-base sm:text-lg font-bold text-on-surface">
                {personal.title}
              </p>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                Alumni Farmasi Universitas Bhakti Kencana
              </p>

              <div className="mt-6 flex items-center justify-center gap-2 text-primary text-xs sm:text-sm bg-surface-container-lowest/90 px-4 py-2 rounded-full border border-primary-container/20 shadow-xs">
                <span className="material-symbols-outlined text-base">verified_user</span>
                <span className="font-medium">Lulusan Siap Kerja &amp; Berintegritas</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
