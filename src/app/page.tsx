"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronUp } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { About } from "@/components/About";
import { WorkHistory } from "@/components/WorkHistory";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Languages } from "@/components/Languages";
import { Projects } from "@/components/Projects";
import { cvDataPL, cvDataEN, translations, type Language } from "@/data/cvData";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const data = language === "pl" ? cvDataPL : cvDataEN;
  const t = translations[language];

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "skills", label: t.nav.skills },
    { id: "education", label: t.nav.education },
    { id: "languages", label: t.nav.languages },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setShowScrollTop(window.scrollY > 400);
    });
  }

  return (
    <div className="min-h-screen bg-base-100">
      <nav
        className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-200"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="text-xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              aria-label="Piotr Glejzer - Frontend Developer"
            >
              PG
            </motion.div>

            <div
              className="hidden md:flex items-center space-x-8"
              role="navigation"
              aria-label="Desktop menu"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-base-content hover:opacity-70 transition-opacity cursor-pointer"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div
              className="flex items-center gap-2"
              aria-label="Settings and controls"
            >
              <LanguageToggle
                language={language}
                onLanguageChange={setLanguage}
              />
              <ThemeToggle />

              <button
                className="md:hidden btn btn-ghost btn-circle cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="absolute left-0 top-16 w-full bg-base-100 shadow-md border-t border-base-200 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            role="navigation"
            aria-label="Mobile menu"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="text-left px-4 py-2 text-base-content hover:bg-base-200 rounded-lg transition-colors"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <main
        className="container mx-auto px-4 py-8 max-w-6xl"
        role="main"
        aria-label="Main content"
      >
        <About data={data} t={t} />
        <WorkHistory data={data} t={t} />
        <Skills data={data} t={t} />
        <Education data={data} t={t} />
        <Languages data={data} t={t} />
        <Projects data={data} t={t} />
      </main>

      {showScrollTop && (
        <motion.button
          className="fixed bottom-8 right-8 btn btn-circle bg-base-content text-base-100 hover:bg-base-content/90 z-40"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" aria-hidden="true" />
        </motion.button>
      )}

      <footer
        className="bg-base-200/50 border-t border-base-200"
        role="contentinfo"
        aria-label="Footer"
      >
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-base-content/70">
            <p className="mb-2">
              © {new Date().getFullYear()} Piotr Glejzer.
              {language === "pl"
                ? " Wszystkie prawa zastrzeżone."
                : " All rights reserved."}
            </p>
            <p className="text-sm">
              {language === "pl"
                ? "Zbudowane z Next.js, TailwindCSS i DaisyUI"
                : "Built with Next.js, TailwindCSS and DaisyUI"}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
