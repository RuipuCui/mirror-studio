import { useState, type MouseEvent } from 'react';
import { ResearchHero } from '../components/research/ResearchHero';
import { CoreQuestions } from '../components/research/CoreQuestions';
import { ResearchFocus } from '../components/research/ResearchFocus';
import { ResearchOutputs } from '../components/research/ResearchOutputs';
import { ResearchRelations } from '../components/research/ResearchRelations';
import { ResearchFuture } from '../components/research/ResearchFuture';
import { ResearchRadar } from '../components/research/ResearchRadar';
import { ResearchProgressBar } from '../components/research/ResearchProgressBar';
import { PageBackground } from '../components/PageBackground';

export function MirrorResearchPage({ onNavigate }: { onNavigate: (event: MouseEvent<HTMLAnchorElement | HTMLDivElement>, to: string) => void }) {

  return (
    <main className="relative h-screen w-full overflow-y-scroll scroll-smooth bg-transparent text-black selection:bg-black selection:text-white [&::-webkit-scrollbar]:hidden">
      <ResearchProgressBar />
      <PageBackground />
      
      <div className="relative z-10 flex flex-col gap-0">
        <div id="hero" className="scroll-mt-24">
          <ResearchHero />
        </div>
        <div id="radar" className="scroll-mt-24">
          <ResearchRadar />
        </div>
        <div id="core-questions" className="scroll-mt-24">
          <CoreQuestions />
        </div>
        <div id="focus" className="scroll-mt-24">
          <ResearchFocus />
        </div>
        <div id="outputs" className="scroll-mt-24">
          <ResearchOutputs />
        </div>
        <div id="relations" className="scroll-mt-24">
          <ResearchRelations />
        </div>
        <div id="future" className="scroll-mt-24">
          <ResearchFuture />
        </div>
      </div>

      <footer className="relative z-10 py-12 text-center text-slate-400 text-sm border-t border-black/5 bg-white/80 backdrop-blur-sm">
        <p>© 2025 WhiteMirror Research. All rights reserved.</p>
      </footer>
    </main>
  );
}
