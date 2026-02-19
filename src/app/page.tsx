"use client";

import { I18nProvider } from "@/i18n";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import TheLoop from "@/components/sections/TheLoop";
import Strategy from "@/components/sections/Strategy";
import ScoutManager from "@/components/sections/ScoutManager";
import Synergy from "@/components/sections/Synergy";
import Pilot from "@/components/sections/Pilot";
import TrackRecord from "@/components/sections/TrackRecord";
import Roadmap from "@/components/sections/Roadmap";
import CTA from "@/components/sections/CTA";

function SectionDivider() {
  return (
    <div className="section-divider max-w-xl mx-auto" />
  );
}

export default function Home() {
  return (
    <I18nProvider>
      <Navigation />
      <main>
        <Hero />
        <div className="relative">
          {/* Section connector line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-mint-500/10 via-indigo-500/10 to-gold-500/10 hidden lg:block z-0" />
          <SectionDivider />
          <Problem />
          <SectionDivider />
          <TheLoop />
          <SectionDivider />
          <Strategy />
          <SectionDivider />
          <ScoutManager />
          <SectionDivider />
          <Synergy />
          <SectionDivider />
          <Pilot />
          <SectionDivider />
          <TrackRecord />
          <SectionDivider />
          <Roadmap />
          <SectionDivider />
          <CTA />
        </div>
      </main>
    </I18nProvider>
  );
}
