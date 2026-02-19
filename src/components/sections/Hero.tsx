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

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,212,170,0.06)_0%,_transparent_60%)]" />

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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-10"
        >
          <div className="w-2 h-2 rounded-full bg-mint-500 animate-pulse" />
          <span className="text-sm font-medium tracking-widest text-slate-300">
            {t("hero.badge")}
          </span>
        </motion.div>

        {/* Title lines */}
        <div className="space-y-2 md:space-y-3 mb-8">
          {["hero.title_1", "hero.title_2", "hero.title_3"].map((key, i) => (
            <motion.h1
              key={key}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4 + i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="section-title text-5xl md:text-7xl lg:text-8xl"
              style={
                i === 2
                  ? {
                      background: "linear-gradient(135deg, #00F5CC, #6366F1)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }
                  : undefined
              }
            >
              {t(key)}
            </motion.h1>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#problem"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-mint-500/30 bg-mint-500/5 text-mint-400 font-medium hover:bg-mint-500/10 hover:border-mint-500/50 transition-all duration-300"
        >
          {t("hero.cta")}
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.span>
        </motion.a>
      </div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.4 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex items-center gap-8 md:gap-12 px-8 py-4 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/5">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-xl md:text-2xl font-black text-slate-100">
                <CountUp
                  end={parseInt(String(stat.value).replace(",", ""))}
                  suffix={stat.unit}
                />
              </div>
              <div className="text-[10px] md:text-xs text-slate-500 font-medium mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent z-[5]" />
    </section>
  );
}
