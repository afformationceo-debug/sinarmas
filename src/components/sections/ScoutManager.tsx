"use client";

import { motion } from "framer-motion";
import GlowCard from "@/components/ui/GlowCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { useTranslation } from "@/i18n";

const featureIcons = ["🔍", "📨", "📥", "📊", "💳"];

export default function ScoutManager() {
  const { t, tObj } = useTranslation();
  const features = tObj<Array<{ title: string; desc: string }>>(
    "scout.features"
  );
  const metrics = tObj<Array<{ value: string; label: string }>>(
    "scout.metrics"
  );

  return (
    <section id="scoutmanager" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_50%,_rgba(99,102,241,0.04)_0%,_transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <SectionLabel text={t("scout.label")} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-4xl md:text-5xl lg:text-6xl mb-3"
          >
            {t("scout.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto"
          >
            {t("scout.subtitle")}
          </motion.p>
        </div>

        {/* Key Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12"
        >
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-indigo-500/10 bg-indigo-500/[0.03] text-center"
            >
              <div className="text-2xl md:text-3xl font-black text-indigo-400 mb-0.5">
                {metric.value}
              </div>
              <div className="text-[10px] md:text-xs text-slate-500 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 p-1 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-mint-500/10 to-transparent"
        >
          <div className="rounded-xl bg-dark-900 p-6 md:p-10">
            {/* Mock header */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-4 text-xs text-slate-600 font-mono">
                scoutmanager.io/dashboard
              </span>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-green-500/70 font-mono">LIVE</span>
              </div>
            </div>

            {/* Feature cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {features.slice(0, 3).map((feat, i) => (
                <GlowCard
                  key={i}
                  variant={i === 0 ? "mint" : "default"}
                  delay={0.1 + i * 0.1}
                  className="!p-5"
                >
                  <span className="text-2xl mb-3 block">{featureIcons[i]}</span>
                  <h4 className="font-bold text-sm text-slate-200 mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {feat.desc}
                  </p>
                </GlowCard>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.slice(3).map((feat, i) => (
                <GlowCard
                  key={i}
                  variant="default"
                  delay={0.4 + i * 0.1}
                  className="!p-5"
                >
                  <span className="text-2xl mb-3 block">
                    {featureIcons[i + 3]}
                  </span>
                  <h4 className="font-bold text-sm text-slate-200 mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {feat.desc}
                  </p>
                </GlowCard>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Platform & Language support */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-wider text-slate-600 uppercase">
              Platforms
            </span>
            <div className="w-px h-3 bg-slate-700" />
            <span className="text-slate-400">{t("scout.platforms")}</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-slate-700" />
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-wider text-slate-600 uppercase">
              Languages
            </span>
            <div className="w-px h-3 bg-slate-700" />
            <span className="text-slate-400">{t("scout.languages")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
