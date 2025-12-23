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
import { AmbientSound } from '../components/whitemirrorai/ui/AmbientSound';
import { PageBackground } from '../components/PageBackground';

export function MirrorStudioPage({ onNavigate }: { onNavigate: (event: MouseEvent<HTMLAnchorElement | HTMLDivElement>, to: string) => void }) {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className={`relative h-screen w-full overflow-y-scroll scroll-smooth bg-transparent [&::-webkit-scrollbar]:hidden ${showIntro ? 'overflow-hidden' : ''}`}>
      <AmbientSound />
      {/* <MouseSpotlight /> - Removed for light theme */}
      {!showIntro && <ProgressBar />}
      <PageBackground />
      
      <div className="relative z-10">
        <div id="hero" className="scroll-mt-24">
          <Hero showIntro={showIntro} setShowIntro={setShowIntro} />
        </div>
        <div id="team" className="scroll-mt-24">
          <Team />
        </div>
        <div id="philosophy" className="scroll-mt-24">
          <Philosophy />
        </div>
        <div id="what-we-do" className="scroll-mt-24">
          <WhatWeDo />
        </div>
        <div id="metrics" className="scroll-mt-24">
          <Metrics />
        </div>
        <div id="how-we-build" className="scroll-mt-24">
          <HowWeBuild />
        </div>
        <div id="capabilities" className="scroll-mt-24">
          <Capabilities />
        </div>
        <div id="differentiation" className="scroll-mt-24">
          <Differentiation />
        </div>
      </div>

      <footer className="relative z-10 py-12 text-center text-slate-400 text-sm border-t border-black/5 bg-white/80 backdrop-blur-sm">
        <p>© 2024 MirrorStudio. All rights reserved.</p>
      </footer>
    </main>
  );
}
