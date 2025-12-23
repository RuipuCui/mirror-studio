import { useState } from 'react';
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

export function MirrorStudioPage() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className={`min-h-screen bg-black text-white ${showIntro ? 'overflow-hidden h-screen' : ''}`}>
      <MouseSpotlight />
      {!showIntro && <ProgressBar />}
      <Hero showIntro={showIntro} setShowIntro={setShowIntro} />
      <Team />
      <Philosophy />
      <WhatWeDo />
      <Metrics />
      <HowWeBuild />
      <Capabilities />
      <Differentiation />

      <footer className="py-12 text-center text-slate-600 text-sm border-t border-white/5">
        <p>© 2024 MirrorStudio. All rights reserved.</p>
      </footer>
    </div>
  );
}
