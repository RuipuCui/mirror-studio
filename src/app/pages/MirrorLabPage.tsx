import { useState, type MouseEvent } from 'react';
import { LabHero } from '../components/lab/LabHero';
import { LabMission } from '../components/lab/LabMission';
import { LabProcess } from '../components/lab/LabProcess';
import { LabRelations } from '../components/lab/LabRelations';
import { LabPhilosophy } from '../components/lab/LabPhilosophy';
import { LabExperiments } from '../components/lab/LabExperiments';
import { LabMetrics } from '../components/lab/LabMetrics';
import { LabProgressBar } from '../components/lab/LabProgressBar';
import { AmbientSound } from '../components/whitemirrorai/ui/AmbientSound';
import { PageBackground } from '../components/PageBackground';

export function MirrorLabPage({ onNavigate }: { onNavigate: (event: MouseEvent<HTMLAnchorElement | HTMLDivElement>, to: string) => void }) {
  return (
    <main className="relative h-screen w-full overflow-y-scroll scroll-smooth bg-transparent [&::-webkit-scrollbar]:hidden">
      <AmbientSound />
      <LabProgressBar />
      <PageBackground />
      
      <div className="relative z-10">
        <div id="hero">
          <LabHero />
        </div>
        <div id="metrics">
          <LabMetrics />
        </div>
        <div id="mission">
          <LabMission />
        </div>
        <div id="experiments">
          <LabExperiments />
        </div>
        <div id="process">
          <LabProcess />
        </div>
        <div id="relations">
          <LabRelations />
        </div>
        <div id="philosophy">
          <LabPhilosophy />
        </div>
      </div>

      <footer className="relative z-10 py-12 text-center text-slate-400 text-sm border-t border-black/5 bg-white/80 backdrop-blur-sm">
        <p>© 2024 Mirror Lab. All rights reserved.</p>
      </footer>
    </main>
  );
}
