import { useState, type MouseEvent } from 'react';
import { AmbientSound } from '../components/whitemirrorai/ui/AmbientSound';
import { PageBackground } from '../components/PageBackground';
import { AcademyHero } from '../components/academy/AcademyHero';
import { AcademyManifesto } from '../components/academy/AcademyManifesto';
import { AcademyPrinciples } from '../components/academy/AcademyPrinciples';
import { AcademyStructure } from '../components/academy/AcademyStructure';
import { AcademyJourney } from '../components/academy/AcademyJourney';
import { AcademyRole } from '../components/academy/AcademyRole';
import { AcademyProgressBar } from '../components/academy/AcademyProgressBar';

export function MirrorAcademyPage({ onNavigate }: { onNavigate: (event: MouseEvent<HTMLAnchorElement | HTMLDivElement>, to: string) => void }) {
  return (
    <main className="relative h-screen w-full overflow-y-scroll scroll-smooth bg-transparent text-black selection:bg-orange-500 selection:text-white [&::-webkit-scrollbar]:hidden">
      <AmbientSound />
      <AcademyProgressBar />
      <PageBackground />
      
      <div className="relative z-10 flex flex-col gap-0">
        <div id="hero">
          <AcademyHero />
        </div>
        <div id="manifesto">
          <AcademyManifesto />
        </div>
        <div id="principles">
          <AcademyPrinciples />
        </div>
        <div id="structure">
          <AcademyStructure />
        </div>
        <div id="journey">
          <AcademyJourney />
        </div>
        <div id="role">
          <AcademyRole />
        </div>
      </div>

      <footer className="relative z-10 py-12 text-center text-slate-400 text-sm border-t border-black/5 bg-white/80 backdrop-blur-sm">
        <p>© 2025 Mirror Academy. All rights reserved.</p>
      </footer>
    </main>
  );
}
