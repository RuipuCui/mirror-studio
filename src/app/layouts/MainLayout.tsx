import type { MouseEvent, ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
  currentPath: string;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, to: string) => void;
};

export function MainLayout({ children, currentPath, onNavigate }: MainLayoutProps) {
  const isMirrorStudio = currentPath === '/mirror-studio' || currentPath.startsWith('/mirror-studio/');
  const isMirrorResearch = currentPath === '/mirror-research' || currentPath.startsWith('/mirror-research/');

  return (
    <div className="min-h-screen">
      <nav 
        className={`fixed right-6 top-6 z-50 flex items-center gap-3 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] backdrop-blur transition-colors duration-500
          ${isMirrorResearch 
            ? 'border-black/10 bg-white/40 text-black/70' 
            : 'border-white/10 bg-black/40 text-white/70'
          }`}
      >
        <a 
          className={`transition hover:opacity-100 ${isMirrorResearch ? 'hover:text-black' : 'hover:text-white'}`} 
          href="/" 
          onClick={(event) => onNavigate(event, '/')}
        >
          WhitemirrorAI
        </a>
        <span className={isMirrorResearch ? 'text-black/20' : 'text-white/20'}>/</span>
        <a
          className={`transition ${isMirrorResearch ? 'text-black hover:text-black' : 'hover:text-white'}`}
          href="/mirror-research"
          onClick={(event) => onNavigate(event, '/mirror-research')}
        >
          Research
        </a>
        <span className={isMirrorResearch ? 'text-black/20' : 'text-white/20'}>/</span>
        <a
          className={`transition ${isMirrorStudio ? 'text-white' : isMirrorResearch ? 'hover:text-black' : 'hover:text-white'}`}
          href="/mirror-studio"
          onClick={(event) => onNavigate(event, '/mirror-studio')}
        >
          Studio
        </a>
      </nav>
      {children}
    </div>
  );
}
