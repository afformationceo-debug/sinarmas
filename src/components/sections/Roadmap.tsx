"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { useTranslation } from "@/i18n";

const phaseColors = ["#00D4AA", "#6366F1", "#C8A84E"];
const phaseEmojis = ["🚀", "📈", "🤝"];

export default function Roadmap() {
  const { t, tObj } = useTranslation();
  const phases = tObj<
    Array<{
      phase: string;
      name: string;
      period: string;
      items: string[];
      goal: string;
    }>
  >("roadmap.phases");

  return (
    <section id="roadmap" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(200,168,78,0.03)_0%,_transparent_50%)]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <SectionLabel text={t("roadmap.label")} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            {t("roadmap.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            {t("roadmap.subtitle")}
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px">
            <div
              className="h-full w-full"
              style={{
                background: `linear-gradient(to bottom, ${phaseColors[0]}40, ${phaseColors[1]}40, ${phaseColors[2]}40)`,
              }}
            />
          </div>

          <div className="space-y-16">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } pl-16 md:pl-0`}
              >
                {/* Node */}
                <div
                  className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-2 z-10"
                  style={{
                    borderColor: phaseColors[i],
                    background: `${phaseColors[i]}20`,
                    boxShadow: `0 0 20px ${phaseColors[i]}30`,
                  }}
                />

                {/* Content */}
                <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                  <div
                    className="p-6 md:p-8 rounded-2xl border"
                    style={{
                      background: `${phaseColors[i]}05`,
                      borderColor: `${phaseColors[i]}15`,
                    }}
                  >
                    {/* Header */}
                    <div className={`flex items-center gap-3 mb-4 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                      <span className="text-2xl">{phaseEmojis[i]}</span>
                      <div>
                        <span
                          className="text-xs font-bold tracking-[0.15em]"
                          style={{ color: phaseColors[i] }}
                        >
                          {phase.phase}
                        </span>
                        <h3 className="text-xl font-black text-slate-200">
                          {phase.name}
                        </h3>
                      </div>
                      <span
                        className="ml-auto text-xs px-3 py-1 rounded-full font-medium"
                        style={{
                          background: `${phaseColors[i]}15`,
                          color: phaseColors[i],
                        }}
                      >
                        {phase.period}
                      </span>
                    </div>

                    {/* Items */}
                    <div className="space-y-2 mb-4">
                      {phase.items.map((item, ii) => (
                        <div
                          key={ii}
                          className={`flex items-center gap-2 text-sm text-slate-400 ${
                            i % 2 === 1 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <div
                            className="w-1 h-1 rounded-full shrink-0"
                            style={{ background: phaseColors[i] }}
                          />
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* Goal */}
                    <div
                      className="px-4 py-2 rounded-lg text-center text-sm font-bold"
                      style={{
                        background: `${phaseColors[i]}10`,
                        color: phaseColors[i],
                        border: `1px solid ${phaseColors[i]}20`,
                      }}
                    >
                      {phase.goal}
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
