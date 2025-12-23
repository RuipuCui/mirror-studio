import { useState, type MouseEvent } from 'react';
import { AmbientSound } from '../components/whitemirrorai/ui/AmbientSound';
import { ResearchHero } from '../components/research/ResearchHero';
import { CoreQuestions } from '../components/research/CoreQuestions';
import { ResearchFocus } from '../components/research/ResearchFocus';
import { ResearchOutputs } from '../components/research/ResearchOutputs';
import { ResearchRelations } from '../components/research/ResearchRelations';
import { ResearchFuture } from '../components/research/ResearchFuture';
import { ResearchProgressBar } from '../components/research/ResearchProgressBar';
import { PageBackground } from '../components/PageBackground';

export function MirrorResearchPage({ onNavigate }: { onNavigate: (event: MouseEvent<HTMLAnchorElement | HTMLDivElement>, to: string) => void }) {

  return (
    <main className="relative h-screen w-full overflow-y-scroll scroll-smooth bg-transparent text-black selection:bg-black selection:text-white [&::-webkit-scrollbar]:hidden">
      <AmbientSound />
      <ResearchProgressBar />
      <PageBackground />
      
      <div className="relative z-10 flex flex-col gap-0"> {/* Removed gap to reduce space */}
        <div id="hero">
          <ResearchHero />
        </div>
        <div id="core-questions">
          <CoreQuestions />
        </div>
        <div id="focus">
          <ResearchFocus />
        </div>
        <div id="outputs">
          <ResearchOutputs />
        </div>
        <div id="relations">
          <ResearchRelations />
        </div>
        <div id="future">
          <ResearchFuture />
        </div>
      </div>

      <footer className="relative z-10 py-12 text-center text-slate-400 text-sm border-t border-black/5 bg-white/80 backdrop-blur-sm">
        <p>© 2025 WhiteMirror Research. All rights reserved.</p>
      </footer>
    </main>
  );
}
