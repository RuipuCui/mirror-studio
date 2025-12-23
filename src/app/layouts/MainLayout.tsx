import type { MouseEvent, ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
  currentPath: string;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, to: string) => void;
};

export function MainLayout({ children, currentPath, onNavigate }: MainLayoutProps) {
  const isMirrorStudio = currentPath === '/mirror-studio' || currentPath.startsWith('/mirror-studio/');

  return (
    <div className="min-h-screen">
      <nav className="fixed right-6 top-6 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70 backdrop-blur">
        <a className="transition hover:text-white" href="/" onClick={(event) => onNavigate(event, '/')}>
          WhitemirrorAI
        </a>
        <span className="text-white/20">/</span>
        <a
          className={`transition hover:text-white ${isMirrorStudio ? 'text-white' : ''}`}
          href="/mirror-studio"
          onClick={(event) => onNavigate(event, '/mirror-studio')}
        >
          MirrorStudio
        </a>
      </nav>
      {children}
    </div>
  );
}
