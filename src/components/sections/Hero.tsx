"use client";

import { motion } from "framer-motion";
import GradientOrb from "@/components/ui/GradientOrb";
import CountUp from "@/components/ui/CountUp";
import { useTranslation } from "@/i18n";

export default function Hero() {
  const { t, tObj } = useTranslation();
  const stats = tObj<Array<{ value: string; unit: string; label: string }>>(
    "hero.stats"
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise-bg"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(248,250,252,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Multiple radial gradient overlays for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,212,170,0.06)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(99,102,241,0.04)_0%,_transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(200,168,78,0.03)_0%,_transparent_40%)]" />

      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-mint-500/20 to-transparent"
          style={{ animation: "scan-line 8s linear infinite" }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              background: i % 3 === 0 ? "#00D4AA" : i % 3 === 1 ? "#6366F1" : "#C8A84E",
              opacity: 0.3,
              animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <GradientOrb />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-10"
        >
          <div className="w-2 h-2 rounded-full bg-mint-500 animate-pulse" />
          <span className="text-sm font-medium tracking-[0.2em] text-slate-300">
            {t("hero.badge")}
          </span>
        </motion.div>

        {/* Title lines - dramatic staggered reveal */}
        <div className="space-y-2 md:space-y-3 mb-8">
          {["hero.title_1", "hero.title_2", "hero.title_3"].map((key, i) => (
            <motion.h1
              key={key}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.4 + i * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`section-title text-5xl md:text-7xl lg:text-8xl ${
                i === 2 ? "shimmer-text" : ""
              }`}
              style={
                i === 1
                  ? { color: "rgba(248,250,252,0.7)" }
                  : undefined
              }
            >
              {t(key)}
            </motion.h1>
          ))}
        </div>

        {/* Animated horizontal line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-48 h-px mx-auto mb-8"
          style={{
            background: "linear-gradient(90deg, transparent, #00D4AA, #6366F1, transparent)",
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#problem"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-mint-500/30 bg-mint-500/5 text-mint-400 font-bold hover:bg-mint-500/10 hover:border-mint-500/50 hover:shadow-[0_0_40px_rgba(0,212,170,0.15)] transition-all duration-500"
        >
          {t("hero.cta")}
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-lg"
          >
            ↓
          </motion.span>
        </motion.a>
      </div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex items-center gap-8 md:gap-16 px-10 py-5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 gradient-border">
          {stats.map((stat, i) => (
            <div key={i} className="text-center relative">
              {i > 0 && (
                <div className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 w-px h-8 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              )}
              <div className="text-2xl md:text-3xl font-black text-slate-100">
                <CountUp
                  end={parseInt(String(stat.value).replace(",", ""))}
                  suffix={stat.unit}
                />
              </div>
              <div className="text-[10px] md:text-xs text-slate-500 font-medium mt-1 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent z-[5]" />
    </section>
  );
}
