import { useState, type MouseEvent } from 'react';
import { PageBackground } from '../components/PageBackground';
import { AcademyHero } from '../components/academy/AcademyHero';
import { AcademyManifesto } from '../components/academy/AcademyManifesto';
import { AcademyPrinciples } from '../components/academy/AcademyPrinciples';
import { AcademyStructure } from '../components/academy/AcademyStructure';
import { AcademyJourney } from '../components/academy/AcademyJourney';
import { AcademyRole } from '../components/academy/AcademyRole';
import { AcademyProgressBar } from '../components/academy/AcademyProgressBar';

import type { Language } from '../types/whitemirrorai';

export function MirrorAcademyPage({ onNavigate, language }: { onNavigate: (event: MouseEvent<HTMLAnchorElement | HTMLDivElement>, to: string) => void, language: Language }) {
  return (
    <main className="relative h-screen w-full overflow-y-scroll scroll-smooth bg-transparent text-black selection:bg-orange-500 selection:text-white [&::-webkit-scrollbar]:hidden">
      <AcademyProgressBar language={language} />
      <PageBackground />
      
      <div className="relative z-10 flex flex-col gap-0">
        <div id="hero" className="scroll-mt-24">
          <AcademyHero language={language} />
        </div>
        <div id="manifesto" className="scroll-mt-24">
          <AcademyManifesto language={language} />
        </div>
        <div id="principles" className="scroll-mt-24">
          <AcademyPrinciples language={language} />
        </div>
        <div id="structure" className="scroll-mt-24">
          <AcademyStructure language={language} />
        </div>
        <div id="journey" className="scroll-mt-24">
          <AcademyJourney language={language} />
        </div>
        <div id="role" className="scroll-mt-24">
          <AcademyRole language={language} />
        </div>
      </div>

      <footer className="relative z-10 py-12 text-center text-slate-400 text-sm border-t border-black/5 bg-white/80 backdrop-blur-sm">
        <p>© 2025 Mirror Academy. All rights reserved.</p>
      </footer>
    </main>
  );
}
