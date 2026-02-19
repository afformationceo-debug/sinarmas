"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { useTranslation } from "@/i18n";

const loopIcons = ["🔍", "🎯", "🤖", "📢", "🛒", "🚛", "📈", "🔄"];
const nodeColors = [
  "#00D4AA", "#00D4AA", "#6366F1", "#6366F1",
  "#00D4AA", "#C8A84E", "#00D4AA", "#6366F1",
];

export default function TheLoop() {
  const { t, tObj } = useTranslation();
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const steps = tObj<Array<{ name: string; desc: string }>>("loop.steps");

  const radius = 220;
  const centerX = 300;
  const centerY = 300;

  const getNodePos = (i: number) => {
    const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  // Generate arrow positions on the circle between nodes
  const getArrowAngle = (i: number) => {
    return ((i + 0.5) / 8) * Math.PI * 2 - Math.PI / 2;
  };

  return (
    <section id="loop" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(99,102,241,0.04)_0%,_transparent_50%)]" />
      {/* Secondary radial for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(0,212,170,0.03)_0%,_transparent_40%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <SectionLabel text={t("loop.label")} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            {t("loop.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            {t("loop.subtitle")}
          </motion.p>
        </div>

        {/* SVG Loop Diagram - Desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex justify-center mb-12"
        >
          <div className="relative" style={{ width: 600, height: 600 }}>
            <svg width="600" height="600" viewBox="0 0 600 600" className="absolute inset-0">
              <defs>
                <linearGradient id="loopGrad" gradientUnits="userSpaceOnUse" x1="80" y1="80" x2="520" y2="520">
                  <stop offset="0%" stopColor="#00D4AA" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#6366F1" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#C8A84E" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Outer glow circle */}
              <circle
                cx={centerX} cy={centerY} r={radius + 10}
                fill="none" stroke="url(#loopGrad)" strokeWidth="1" opacity="0.3"
              />
              {/* Main circular path */}
              <circle
                cx={centerX} cy={centerY} r={radius}
                fill="none" stroke="url(#loopGrad)" strokeWidth="2.5"
              />
              {/* Inner subtle circle */}
              <circle
                cx={centerX} cy={centerY} r={radius - 10}
                fill="none" stroke="url(#loopGrad)" strokeWidth="0.5" opacity="0.2"
              />

              {/* Direction arrows between nodes */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = getArrowAngle(i);
                const ax = centerX + radius * Math.cos(angle);
                const ay = centerY + radius * Math.sin(angle);
                const tangentAngle = angle + Math.PI / 2;
                const size = 6;
                return (
                  <polygon
                    key={`arrow-${i}`}
                    points={`${ax + size * Math.cos(tangentAngle)},${ay + size * Math.sin(tangentAngle)} ${ax - size * 0.5 * Math.cos(tangentAngle) + size * 0.6 * Math.cos(tangentAngle - Math.PI / 2)},${ay - size * 0.5 * Math.sin(tangentAngle) + size * 0.6 * Math.sin(tangentAngle - Math.PI / 2)} ${ax - size * 0.5 * Math.cos(tangentAngle) - size * 0.6 * Math.cos(tangentAngle - Math.PI / 2)},${ay - size * 0.5 * Math.sin(tangentAngle) - size * 0.6 * Math.sin(tangentAngle - Math.PI / 2)}`}
                    fill="rgba(255,255,255,0.15)"
                  />
                );
              })}

              {/* Animated orbit particles */}
              <circle r="5" fill="#00D4AA" filter="url(#glow)">
                <animateMotion
                  dur="10s" repeatCount="indefinite"
                  path={`M ${centerX + radius} ${centerY} A ${radius} ${radius} 0 1 1 ${centerX + radius - 0.01} ${centerY}`}
                />
              </circle>
              <circle r="4" fill="#6366F1" opacity="0.8" filter="url(#glow)">
                <animateMotion
                  dur="10s" repeatCount="indefinite" begin="3.33s"
                  path={`M ${centerX + radius} ${centerY} A ${radius} ${radius} 0 1 1 ${centerX + radius - 0.01} ${centerY}`}
                />
              </circle>
              <circle r="4" fill="#C8A84E" opacity="0.8" filter="url(#glow)">
                <animateMotion
                  dur="10s" repeatCount="indefinite" begin="6.67s"
                  path={`M ${centerX + radius} ${centerY} A ${radius} ${radius} 0 1 1 ${centerX + radius - 0.01} ${centerY}`}
                />
              </circle>
              {/* Glow trails */}
              <circle r="18" fill="none" stroke="#00D4AA" strokeWidth="1" opacity="0.2">
                <animateMotion
                  dur="10s" repeatCount="indefinite"
                  path={`M ${centerX + radius} ${centerY} A ${radius} ${radius} 0 1 1 ${centerX + radius - 0.01} ${centerY}`}
                />
              </circle>
              <circle r="14" fill="none" stroke="#6366F1" strokeWidth="1" opacity="0.15">
                <animateMotion
                  dur="10s" repeatCount="indefinite" begin="3.33s"
                  path={`M ${centerX + radius} ${centerY} A ${radius} ${radius} 0 1 1 ${centerX + radius - 0.01} ${centerY}`}
                />
              </circle>
            </svg>

            {/* Nodes */}
            {steps.map((step, i) => {
              const pos = getNodePos(i);
              const isActive = activeNode === i;
              const isGold = i === 5;
              return (
                <div
                  key={i}
                  className="absolute cursor-pointer transition-all duration-300"
                  style={{
                    left: pos.x - 46,
                    top: pos.y - 46,
                    zIndex: isActive ? 20 : 10,
                  }}
                  onMouseEnter={() => setActiveNode(i)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div
                    className={`w-[92px] h-[92px] rounded-full flex flex-col items-center justify-center transition-all duration-300 ${
                      isActive ? "scale-115" : ""
                    }`}
                    style={{
                      background: `rgba(${isGold ? "200,168,78" : nodeColors[i] === "#6366F1" ? "99,102,241" : "0,212,170"},${isActive ? 0.25 : 0.1})`,
                      border: `2px solid ${isActive ? nodeColors[i] : `${nodeColors[i]}50`}`,
                      boxShadow: isActive
                        ? `0 0 30px ${nodeColors[i]}40, 0 0 60px ${nodeColors[i]}15, inset 0 0 20px ${nodeColors[i]}10`
                        : `0 0 15px ${nodeColors[i]}08`,
                    }}
                  >
                    <span className="text-2xl mb-0.5">{loopIcons[i]}</span>
                    <span className="text-[9px] font-bold text-center leading-tight px-1 text-slate-300">
                      {step.name}
                    </span>
                  </div>

                  {/* Step number badge */}
                  <div
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-black"
                    style={{
                      background: `${nodeColors[i]}20`,
                      border: `1px solid ${nodeColors[i]}40`,
                      color: nodeColors[i],
                    }}
                  >
                    {i + 1}
                  </div>

                  {/* Detail popup */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 glass-card p-5 z-30"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{loopIcons[i]}</span>
                        <span className="font-bold text-sm" style={{ color: nodeColors[i] }}>
                          {step.name}
                        </span>
                        {isGold && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-400 font-bold ml-auto">
                            {t("loop.synergy_note")}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                    </motion.div>
                  )}
                </div>
              );
            })}

            {/* Center element */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative">
                {/* Pulsing rings */}
                <div
                  className="absolute -inset-8 rounded-full border border-mint-500/10"
                  style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
                />
                <div
                  className="absolute -inset-4 rounded-full border border-indigo-500/10"
                  style={{ animation: "pulse-glow 3s ease-in-out infinite 1s" }}
                />
                <div className="w-24 h-24 rounded-full bg-dark-900/80 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(0,212,170,0.08)]">
                  <span className="text-[10px] font-black tracking-[0.25em] gradient-text-mint">
                    AFFORMATION
                  </span>
                  <span className="text-lg font-black text-slate-300 -mt-0.5">
                    LOOP
                  </span>
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-mint-500/50 to-transparent mt-0.5" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile - Vertical timeline */}
        <div className="md:hidden space-y-4 mb-12">
          {steps.map((step, i) => {
            const isGold = i === 5;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`flex items-start gap-4 p-4 rounded-xl ${
                  isGold ? "glass-card-gold" : "glass-card"
                }`}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-lg"
                  style={{
                    background: `${nodeColors[i]}15`,
                    border: `1.5px solid ${nodeColors[i]}40`,
                  }}
                >
                  {loopIcons[i]}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-bold text-sm text-slate-200">{step.name}</span>
                    {isGold && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gold-500/20 text-gold-400 font-bold">
                        {t("loop.synergy_note")}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed px-8 py-4 rounded-xl border border-white/5 bg-white/[0.02]">
            {t("loop.bottom")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
