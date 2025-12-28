import { useState, type MouseEvent } from 'react';
import { LabHero } from '../components/lab/LabHero';
import { LabMission } from '../components/lab/LabMission';
import { LabProcess } from '../components/lab/LabProcess';
import { LabRelations } from '../components/lab/LabRelations';
import { LabPhilosophy } from '../components/lab/LabPhilosophy';
import { LabExperiments } from '../components/lab/LabExperiments';
import { LabStatus } from '../components/lab/LabStatus';
import { LabProgressBar } from '../components/lab/LabProgressBar';
import { PageBackground } from '../components/PageBackground';
import type { Language } from '../types/whitemirrorai';

export function MirrorLabPage({ onNavigate, language }: { onNavigate: (event: MouseEvent<HTMLAnchorElement | HTMLDivElement>, to: string) => void, language: Language }) {
  return (
    <main className="relative h-screen w-full overflow-y-scroll scroll-smooth bg-transparent [&::-webkit-scrollbar]:hidden">
      <LabProgressBar />
      <PageBackground />
      
      <div className="relative z-10">
        <div id="hero" className="scroll-mt-24">
          <LabHero language={language} />
        </div>
        <div id="status" className="scroll-mt-24">
          <LabStatus language={language} />
        </div>
        <div id="mission" className="scroll-mt-24">
          <LabMission language={language} />
        </div>
        <div id="experiments" className="scroll-mt-24">
          <LabExperiments language={language} />
        </div>
        <div id="process" className="scroll-mt-24">
          <LabProcess language={language} />
        </div>
        <div id="relations" className="scroll-mt-24">
          <LabRelations language={language} />
        </div>
        <div id="philosophy" className="scroll-mt-24">
          <LabPhilosophy language={language} />
        </div>
      </div>

      <footer className="relative z-10 py-12 text-center text-slate-400 text-sm border-t border-black/5 bg-white/80 backdrop-blur-sm">
        <p>© 2025 Mirror Lab. All rights reserved.</p>
      </footer>
    </main>
  );
}
