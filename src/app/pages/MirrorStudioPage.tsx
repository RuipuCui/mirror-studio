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

export function MirrorStudioPage({ onNavigate }: { onNavigate: (event: MouseEvent<HTMLAnchorElement | HTMLDivElement>, to: string) => void }) {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className={`relative h-screen w-full overflow-y-scroll scroll-smooth bg-white [&::-webkit-scrollbar]:hidden ${showIntro ? 'overflow-hidden' : ''}`}>
      <AmbientSound />
      {/* <MouseSpotlight /> - Removed for light theme */}
      {!showIntro && <ProgressBar />}
      <Hero showIntro={showIntro} setShowIntro={setShowIntro} />
      <Team />
      <Philosophy />
      <WhatWeDo />
      <Metrics />
      <HowWeBuild />
      <Capabilities />
      <Differentiation />

      <footer className="py-12 text-center text-slate-400 text-sm border-t border-black/5">
        <p>© 2024 MirrorStudio. All rights reserved.</p>
      </footer>
    </main>
  );
}
