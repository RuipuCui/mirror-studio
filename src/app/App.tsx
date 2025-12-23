import { useEffect, useState, type MouseEvent } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { MirrorStudioPage } from './pages/MirrorStudioPage';
import { MirrorResearchPage } from './pages/MirrorResearchPage';

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const isMirrorStudio = path === '/mirror-studio' || path.startsWith('/mirror-studio/');
  const isMirrorResearch = path === '/mirror-research' || path.startsWith('/mirror-research/');

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

  return (
    <MainLayout currentPath={path} onNavigate={handleNavigate}>
      {isMirrorResearch ? <MirrorResearchPage /> : isMirrorStudio ? <MirrorStudioPage /> : <HomePage />}
    </MainLayout>
  );
}
