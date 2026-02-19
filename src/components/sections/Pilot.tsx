"use client";

import { motion } from "framer-motion";
import GlowCard from "@/components/ui/GlowCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { useTranslation } from "@/i18n";

const projectIcons = ["💄", "🍜"];

export default function Pilot() {
  const { t, tObj } = useTranslation();
  const projects = tObj<
    Array<{ name: string; category?: string; timeline: string[]; result: string }>
  >("pilot.projects");

  return (
    <section id="pilot" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,_rgba(0,212,170,0.03)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(200,168,78,0.03)_0%,_transparent_40%)]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <SectionLabel text={t("pilot.label")} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-4xl md:text-5xl lg:text-6xl mb-3"
          >
            {t("pilot.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            {t("pilot.subtitle")}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, pi) => (
            <GlowCard
              key={pi}
              variant={pi === 0 ? "mint" : "gold"}
              delay={pi * 0.15}
              className="!p-0 overflow-hidden"
            >
              {/* Header */}
              <div
                className={`px-6 py-5 border-b relative overflow-hidden ${
                  pi === 0
                    ? "border-mint-500/10 bg-mint-500/[0.03]"
                    : "border-gold-500/10 bg-gold-500/[0.03]"
                }`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${pi === 0 ? "#00D4AA" : "#C8A84E"}, transparent)`,
                  }}
                />
                <div className="flex items-center gap-3 mb-1">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl ${
                      pi === 0 ? "bg-mint-500/10 border border-mint-500/20" : "bg-gold-500/10 border border-gold-500/20"
                    }`}
                  >
                    {projectIcons[pi]}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-200">
                      {project.name}
                    </h3>
                    {project.category && (
                      <p className={`text-xs font-medium ${pi === 0 ? "text-mint-500/60" : "text-gold-500/60"}`}>
                        {project.category}
                      </p>
                    )}
                  </div>
                  <span
                    className={`ml-auto text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      pi === 0
                        ? "bg-mint-500/10 text-mint-400 border border-mint-500/20"
                        : "bg-gold-500/10 text-gold-400 border border-gold-500/20"
                    }`}
                  >
                    PILOT #{pi + 1}
                  </span>
                </div>
              </div>

              {/* Timeline */}
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {project.timeline.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex flex-col items-center shrink-0 mt-1.5">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            pi === 0 ? "bg-mint-500/60" : "bg-gold-500/60"
                          }`}
                        />
                        {i < project.timeline.length - 1 && (
                          <div
                            className={`w-px h-6 mt-1 ${
                              pi === 0 ? "bg-mint-500/15" : "bg-gold-500/15"
                            }`}
                          />
                        )}
                      </div>
                      <span className="text-sm text-slate-400 leading-relaxed">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Result */}
                <div
                  className={`px-4 py-3.5 rounded-lg text-center font-bold text-sm relative overflow-hidden ${
                    pi === 0
                      ? "bg-mint-500/10 text-mint-400 border border-mint-500/20"
                      : "bg-gold-500/10 text-gold-400 border border-gold-500/20"
                  }`}
                >
                  <div
                    className={`absolute inset-0 opacity-30 ${
                      pi === 0
                        ? "bg-[radial-gradient(ellipse_at_50%_50%,_rgba(0,212,170,0.15)_0%,_transparent_70%)]"
                        : "bg-[radial-gradient(ellipse_at_50%_50%,_rgba(200,168,78,0.15)_0%,_transparent_70%)]"
                    }`}
                  />
                  <span className="relative z-10">{project.result}</span>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
