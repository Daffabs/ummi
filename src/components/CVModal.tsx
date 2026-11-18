"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const { personal, education, internships, skills } = PORTFOLIO_DATA;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-surface-container-lowest w-full max-w-2xl rounded-3xl shadow-2xl border-2 border-primary-container/30 overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-surface-container-high/80 via-surface-container-low to-secondary-container/40 border-b border-outline-variant/30 flex items-start justify-between relative">
              <div>
                <span className="px-3 py-1 rounded-full bg-primary-container text-white text-xs font-semibold uppercase tracking-wider">
                  Curriculum Vitae
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mt-2">
                  {personal.title}
                </h3>
                <p className="text-xs sm:text-sm text-primary font-medium mt-0.5">
                  Sarjana Farmasi • Universitas Bhakti Kencana Bandung
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-surface-container-lowest/90 text-on-surface hover:text-primary hover:bg-surface-container-high transition-colors flex items-center justify-center shadow-xs border border-outline-variant/20"
                aria-label="Tutup"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
              {/* Profile Brief */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-2 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">person</span>
                  <span>Profil Singkat</span>
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {personal.bio}
                </p>
              </div>

              {/* Education */}
              <div className="border-t border-outline-variant/20 pt-4">
                <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-2 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">school</span>
                  <span>Pendidikan Terakhir</span>
                </h4>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-sm text-on-surface">
                      {education.degree} – {education.institution}
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      Fokus Formulasi Obat Cair &amp; Steril, Farmasi Klinis
                    </p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-container/15 text-primary text-xs font-bold shrink-0">
                    {education.gpa}
                  </span>
                </div>
              </div>

              {/* Work Experience */}
              <div className="border-t border-outline-variant/20 pt-4">
                <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-3 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">work</span>
                  <span>Riwayat Praktik &amp; Magang</span>
                </h4>
                <div className="space-y-3">
                  {internships.map((item) => (
                    <div key={item.organization} className="text-sm">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-on-surface">
                          {item.role} – {item.organization}
                        </span>
                        <span className="text-xs text-on-surface-variant">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        {item.responsibilities[0]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Skills */}
              <div className="border-t border-outline-variant/20 pt-4">
                <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-2 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">psychology</span>
                  <span>Keahlian Utama</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((s) => (
                    <span
                      key={s.name}
                      className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface text-xs font-medium"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t border-outline-variant/20 pt-4 text-xs text-on-surface-variant flex flex-col sm:flex-row gap-2 sm:gap-6">
                <span>📧 {personal.email}</span>
                <span>📱 {personal.phone}</span>
                <span>📍 Bandung, Indonesia</span>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-4 sm:p-6 bg-surface-container-low border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-on-surface-variant">
                Format dokumen: PDF / Cetak Siap Pakai
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface hover:text-primary text-xs font-semibold border border-outline-variant/30 transition-colors"
                >
                  <span className="material-symbols-outlined text-base">print</span>
                  <span>Cetak / Simpan PDF</span>
                </button>

                <a
                  href={`mailto:${personal.email}?subject=Permintaan%20Dokumen%20CV%20Lengkap%20-%20Ummi%20Laila%20Sakinah`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary-container text-white hover:bg-primary text-xs font-semibold transition-colors shadow-xs"
                >
                  <span className="material-symbols-outlined text-base">mail</span>
                  <span>Minta File via Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
