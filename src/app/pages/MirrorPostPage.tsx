import { useState, type MouseEvent } from 'react';
import { PostHero } from '../components/post/PostHero';
import { PostRole } from '../components/post/PostRole';
import { PostCore } from '../components/post/PostCore';
import { PostModules } from '../components/post/PostModules';
import { PostPhilosophy } from '../components/post/PostPhilosophy';
import { PostProgressBar } from '../components/post/PostProgressBar';
import { AmbientSound } from '../components/whitemirrorai/ui/AmbientSound';
import { PageBackground } from '../components/PageBackground';

export function MirrorPostPage({ onNavigate }: { onNavigate: (event: MouseEvent<HTMLAnchorElement | HTMLDivElement>, to: string) => void }) {
  return (
    <main className="relative h-screen w-full overflow-y-scroll scroll-smooth bg-transparent [&::-webkit-scrollbar]:hidden">
      <AmbientSound />
      <PostProgressBar />
      <PageBackground />
      
      <div className="relative z-10">
        <div id="hero">
          <PostHero />
        </div>
        <div id="role">
          <PostRole />
        </div>
        <div id="core">
          <PostCore />
        </div>
        <div id="modules">
          <PostModules />
        </div>
        <div id="philosophy">
          <PostPhilosophy />
        </div>
      </div>

      <footer className="relative z-10 py-12 text-center text-slate-400 text-sm border-t border-black/5 bg-white/80 backdrop-blur-sm">
        <p>© 2024 Mirror Post. All rights reserved.</p>
      </footer>
    </main>
  );
}
