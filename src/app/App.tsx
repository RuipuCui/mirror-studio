import { useEffect, useState, type MouseEvent, type ReactNode } from 'react';
import { LandingPage } from './whitemirrorai/LandingPage';
import { MirrorStudioPage } from './pages/MirrorStudioPage';

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const isMirrorStudio = path === '/mirror-studio' || path.startsWith('/mirror-studio/');

  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, to: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }
    event.preventDefault();
    if (to === path) {
      return;
    }
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  const InternalLink = ({
    to,
    children,
    className,
  }: {
    to: string;
    children: ReactNode;
    className?: string;
  }) => (
    <a className={className} href={to} onClick={(event) => handleNavigate(event, to)}>
      {children}
    </a>
  );

  return (
    <div className="min-h-screen">
      <nav className="fixed right-6 top-6 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70 backdrop-blur">
        <InternalLink className="transition hover:text-white" to="/">
          WhitemirrorAI
        </InternalLink>
        <span className="text-white/20">/</span>
        <InternalLink className="transition hover:text-white" to="/mirror-studio">
          MirrorStudio
        </InternalLink>
      </nav>
      {isMirrorStudio ? <MirrorStudioPage /> : <LandingPage />}
    </div>
  );
}
