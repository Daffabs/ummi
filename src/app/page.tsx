"use client";

import { useState } from "react";
import BackgroundDecorations from "@/components/BackgroundDecorations";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import CareerInterestsSection from "@/components/CareerInterestsSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CVModal from "@/components/CVModal";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <>
      {/* Background Floating Ornaments & Watermarks */}
      <BackgroundDecorations />

      {/* Fixed Sticky Header / Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="w-full pt-20 bg-surface relative z-10">
        <HeroSection onOpenCVModal={() => setCvModalOpen(true)} />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <CareerInterestsSection />
        <ToolsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenCVModal={() => setCvModalOpen(true)} />

      {/* Interactive CV Modal */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
}
