"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("beranda");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Determine active section
      const sections = PORTFOLIO_DATA.navigation.map((item) =>
        item.href.replace("#", "")
      );

      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const topOffset = targetEl.offsetTop - 72;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(59,47,47,0.04)] border-b border-outline-variant/40 transition-all duration-300">
        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-primary via-primary-container to-secondary transition-all duration-100 ease-out z-50"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#beranda"
            onClick={(e) => handleNavClick(e, "#beranda")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-primary-container text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined text-xl">medication</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-base sm:text-lg font-bold text-on-surface leading-tight group-hover:text-primary transition-colors">
                Ummi Laila Sakinah
              </span>
              <span className="text-[11px] font-medium text-primary tracking-wider uppercase font-sans">
                S.Farm. • Portofolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {PORTFOLIO_DATA.navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm tracking-wide transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-on-surface-variant hover:text-primary font-medium"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Quick CTA on Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#kontak"
              onClick={(e) => handleNavClick(e, "#kontak")}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary-container/15 text-primary hover:bg-primary-container hover:text-white border border-primary-container/40 transition-all duration-300 shadow-xs"
            >
              Hubungi
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-on-surface hover:text-primary hover:bg-surface-container-high transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-on-surface/20 backdrop-blur-sm z-40 xl:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-20 inset-x-4 bg-surface-container-lowest/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-outline-variant/40 z-50 xl:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-1">
                {PORTFOLIO_DATA.navigation.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base transition-all ${
                        isActive
                          ? "bg-primary-container text-white font-semibold shadow-sm"
                          : "text-on-surface hover:bg-surface-container-high hover:text-primary font-medium"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="material-symbols-outlined text-lg">
                        chevron_right
                      </span>
                    </a>
                  );
                })}
              </div>
              <div className="mt-5 pt-4 border-t border-outline-variant/30 flex justify-between items-center text-xs text-on-surface-variant font-medium">
                <span>Siap Kerja & Berintegritas</span>
                <span className="text-primary font-semibold">S1 Farmasi UBK</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
