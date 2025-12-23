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
import { Logo } from '../components/whitemirrorai/ui/Logo';
import { AmbientSound } from '../components/whitemirrorai/ui/AmbientSound';
import type { Language } from '../types/whitemirrorai';

export function MirrorStudioPage() {
  const [showIntro, setShowIntro] = useState(true);
  const [language, setLanguage] = useState<Language>("zh");
  const toggleLanguage = () => setLanguage((prev) => (prev === "zh" ? "en" : "zh"));

  return (
    <main className={`relative h-screen w-full overflow-y-scroll scroll-smooth bg-white [&::-webkit-scrollbar]:hidden ${showIntro ? 'overflow-hidden' : ''}`}>
      <Logo language={language} onToggleLanguage={toggleLanguage} />
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
