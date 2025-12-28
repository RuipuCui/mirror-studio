import { useState, type MouseEvent } from 'react';
import { PostHero } from '../components/post/PostHero';
import { PostRole } from '../components/post/PostRole';
import { PostCore } from '../components/post/PostCore';
import { PostModules } from '../components/post/PostModules';
import { PostPhilosophy } from '../components/post/PostPhilosophy';
import { PostProgressBar } from '../components/post/PostProgressBar';
import { PageBackground } from '../components/PageBackground';
import type { Language } from '../types/whitemirrorai';

export function MirrorPostPage({ onNavigate, language }: { onNavigate: (event: MouseEvent<HTMLAnchorElement | HTMLDivElement>, to: string) => void, language: Language }) {
  return (
    <main className="relative h-screen w-full overflow-y-scroll scroll-smooth bg-transparent [&::-webkit-scrollbar]:hidden">
      <PostProgressBar language={language} />
      <PageBackground />
      
      <div className="relative z-10">
        <div id="hero" className="scroll-mt-24">
          <PostHero language={language} />
        </div>
        <div id="role" className="scroll-mt-24">
          <PostRole language={language} />
        </div>
        <div id="core" className="scroll-mt-24">
          <PostCore language={language} />
        </div>
        <div id="modules" className="scroll-mt-24">
          <PostModules language={language} />
        </div>
        <div id="philosophy" className="scroll-mt-24">
          <PostPhilosophy language={language} />
        </div>
      </div>

      <footer className="relative z-10 py-12 text-center text-slate-400 text-sm border-t border-black/5 bg-white/80 backdrop-blur-sm">
        <p>© 2025 Mirror Post. All rights reserved.</p>
      </footer>
    </main>
  );
}
