"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function ToolsSection() {
  const { softwareTools } = PORTFOLIO_DATA;

  return (
    <section
      id="tools"
      className="relative w-full bg-surface py-16 sm:py-24 overflow-hidden"
    >
      {/* Background Decorative Floral Orbs */}
      <div className="absolute -top-10 left-1/3 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />

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
            <span className="material-symbols-outlined text-base">terminal</span>
            <span>Perangkat Lunak</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] font-bold text-on-surface">
            Tools yang Saya Gunakan
          </h2>
          <div className="w-16 h-[2px] bg-primary-container mt-4 mb-3" />
          <p className="text-sm sm:text-base text-on-surface-variant max-w-xl">
            Perangkat lunak penunjang administrasi, analisis data, dan pelaporan kefarmasian.
          </p>
        </motion.div>

        {/* 3 Interactive Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {softwareTools.map((tool, idx) => {
            const isSecondary = tool.colorTheme === "secondary";
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className={`bg-surface-container-lowest p-7 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border-2 relative overflow-hidden group ${
                  isSecondary
                    ? "border-outline-variant/30 hover:border-secondary/60"
                    : "border-outline-variant/30 hover:border-primary-container/60"
                }`}
              >
                {/* Top-Right Ambient Accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 rounded-bl-3xl pointer-events-none ${
                    isSecondary
                      ? "bg-gradient-to-bl from-secondary-container/40 to-transparent"
                      : "bg-gradient-to-bl from-primary-container/20 to-transparent"
                  }`}
                />
                <div
                  className={`absolute top-4 right-4 font-mono text-xs font-bold tracking-widest opacity-40 ${
                    isSecondary ? "text-secondary" : "text-primary-container"
                  }`}
                >
                  {tool.fileExt}
                </div>

                <div>
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm border group-hover:scale-110 transition-transform ${
                      isSecondary
                        ? "bg-gradient-to-br from-secondary-container/60 to-surface-container-high text-secondary border-secondary/30"
                        : "bg-gradient-to-br from-surface-container-high to-primary-container/20 text-primary border-primary-container/30"
                    }`}
                  >
                    <span className="material-symbols-outlined text-3xl">
                      {tool.icon}
                    </span>
                  </div>

                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border ${
                      isSecondary
                        ? "bg-secondary-container/60 text-on-secondary-container border-secondary/20"
                        : "bg-surface-container-high text-primary border-primary-container/20"
                    }`}
                  >
                    {tool.category}
                  </div>

                  <h3 className="font-headline text-2xl text-on-surface font-bold">
                    {tool.name}
                  </h3>

                  <p className="text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                  <span
                    className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold ${
                      isSecondary ? "text-secondary" : "text-primary"
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">
                      check_circle
                    </span>
                    <span>{tool.feature}</span>
                  </span>

                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                      isSecondary
                        ? "bg-secondary/10 text-secondary"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {tool.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
