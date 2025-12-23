import { useState, type MouseEvent } from 'react';
import { Logo } from '../components/whitemirrorai/ui/Logo';
import { AmbientSound } from '../components/whitemirrorai/ui/AmbientSound';
import { ResearchHero } from '../components/research/ResearchHero';
import { CoreQuestions } from '../components/research/CoreQuestions';
import { ResearchFocus } from '../components/research/ResearchFocus';
import { ResearchOutputs } from '../components/research/ResearchOutputs';
import { ResearchRelations } from '../components/research/ResearchRelations';
import { ResearchFuture } from '../components/research/ResearchFuture';
import { ResearchProgressBar } from '../components/research/ResearchProgressBar';
import type { Language } from '../types/whitemirrorai';

export function MirrorResearchPage({ onNavigate }: { onNavigate: (event: MouseEvent<HTMLAnchorElement | HTMLDivElement>, to: string) => void }) {
  const [language, setLanguage] = useState<Language>("zh");
  const toggleLanguage = () => setLanguage((prev) => (prev === "zh" ? "en" : "zh"));

  return (
    <main className="relative h-screen w-full overflow-y-scroll scroll-smooth bg-white text-black selection:bg-black selection:text-white [&::-webkit-scrollbar]:hidden">
      {/* Note: Logo might need a 'dark' mode prop if it's white-only. Assuming it adapts or we might need to invert it. 
          For now, let's assume Logo is white text. We might need to wrap it or pass a prop. 
          Checking Logo.tsx... it uses an image and white text. 
          We'll need to handle that. For now, let's focus on the page content. 
      */}
      <div className="mix-blend-difference z-50 relative">
         <Logo language={language} onToggleLanguage={toggleLanguage} onNavigate={onNavigate} />
      </div>
      
      <AmbientSound />
      <ResearchProgressBar />
      
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

      <footer className="py-12 text-center text-slate-400 text-sm border-t border-black/5 bg-white">
        <p>© 2025 WhiteMirror Research. All rights reserved.</p>
      </footer>
    </main>
  );
}
