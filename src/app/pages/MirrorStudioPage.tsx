import { useState, type MouseEvent } from 'react';
import { Hero } from '../components/Hero';
import { Team } from '../components/Team';
import { Philosophy } from '../components/Philosophy';
import { WhatWeDo } from '../components/WhatWeDo';
import { Metrics } from '../components/Metrics';
import { HowWeBuild } from '../components/HowWeBuild';
import { Capabilities } from '../components/Capabilities';
import { Differentiation } from '../components/Differentiation';
import { ProgressBar } from '../components/ProgressBar';
import { MouseSpotlight } from '../components/ui/MouseSpotlight';
import { PageBackground } from '../components/PageBackground';
import type { Language } from '../types/whitemirrorai';

export function MirrorStudioPage({ onNavigate, language }: { onNavigate: (event: MouseEvent<HTMLAnchorElement | HTMLDivElement>, to: string) => void, language: Language }) {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className={`relative h-screen w-full overflow-y-scroll scroll-smooth bg-transparent [&::-webkit-scrollbar]:hidden ${showIntro ? 'overflow-hidden' : ''}`}>
      {/* <MouseSpotlight /> - Removed for light theme */}
      {!showIntro && <ProgressBar language={language} />}
      <PageBackground />
      
      <div className="relative z-10">
        <div id="hero" className="scroll-mt-24">
          <Hero showIntro={showIntro} setShowIntro={setShowIntro} language={language} />
        </div>
        <div id="team" className="scroll-mt-24">
          <Team language={language} />
        </div>
        <div id="philosophy" className="scroll-mt-24">
          <Philosophy language={language} />
        </div>
        <div id="what-we-do" className="scroll-mt-24">
          <WhatWeDo language={language} />
        </div>
        <div id="metrics" className="scroll-mt-24">
          <Metrics language={language} />
        </div>
        <div id="how-we-build" className="scroll-mt-24">
          <HowWeBuild language={language} />
        </div>
        <div id="capabilities" className="scroll-mt-24">
          <Capabilities language={language} />
        </div>
        <div id="differentiation" className="scroll-mt-24">
          <Differentiation language={language} />
        </div>
      </div>

      <footer className="relative z-10 py-12 text-center text-slate-400 text-sm border-t border-black/5 bg-white/80 backdrop-blur-sm">
        <p>© 2025 MirrorStudio. All rights reserved.</p>
      </footer>
    </main>
  );
}
