"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/i18n";

const sections = [
  "hero",
  "problem",
  "loop",
  "strategy",
  "scoutmanager",
  "synergy",
  "pilot",
  "track",
  "roadmap",
  "cta",
];

const navKeys = [
  "",
  "nav.problem",
  "nav.loop",
  "nav.strategy",
  "nav.scoutmanager",
  "nav.synergy",
  "nav.pilot",
  "nav.track",
  "nav.roadmap",
  "nav.cta",
];

export default function Navigation() {
  const { lang, setLang, t } = useTranslation();
  const [activeSection, setActiveSection] = useState(0);
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(i);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top bar - Language toggle */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-end px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-dark-800/80 backdrop-blur-sm border border-white/5"
        >
          <button
            onClick={() => setLang("ko")}
            className={`text-xs font-bold px-2.5 py-1 rounded-full transition-all ${
              lang === "ko"
                ? "bg-mint-500/20 text-mint-400"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            KO
          </button>
          <div className="w-px h-3 bg-slate-700" />
          <button
            onClick={() => setLang("en")}
            className={`text-xs font-bold px-2.5 py-1 rounded-full transition-all ${
              lang === "en"
                ? "bg-mint-500/20 text-mint-400"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            EN
          </button>
        </motion.div>
      </div>

      {/* Side dot navigation */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-3"
      >
        {sections.map((id, i) => (
          <div
            key={id}
            className="flex items-center gap-3"
            onMouseEnter={() => setHoveredDot(i)}
            onMouseLeave={() => setHoveredDot(null)}
          >
            <AnimatePresence>
              {hoveredDot === i && navKeys[i] && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="text-xs text-slate-400 font-medium whitespace-nowrap"
                >
                  {t(navKeys[i])}
                </motion.span>
              )}
            </AnimatePresence>
            <button
              onClick={() => scrollTo(id)}
              className={`rounded-full transition-all duration-300 ${
                activeSection === i
                  ? "w-3 h-3 bg-mint-500 shadow-[0_0_10px_rgba(0,212,170,0.5)]"
                  : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
              }`}
            />
          </div>
        ))}
      </motion.nav>

      {/* Scroll progress */}
      <ScrollProgress />
    </>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
      <div
        className="h-full bg-gradient-to-r from-mint-500 to-indigo-500 transition-[width] duration-100"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
