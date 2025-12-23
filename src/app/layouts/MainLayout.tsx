import type { MouseEvent, ReactNode } from 'react';
import { Logo } from '../components/whitemirrorai/ui/Logo';
import type { Language } from '../types/whitemirrorai';

type MainLayoutProps = {
  children: ReactNode;
  currentPath: string;
  onNavigate: (event: MouseEvent<HTMLAnchorElement | HTMLDivElement>, to: string) => void;
  language: Language;
  onToggleLanguage: () => void;
};

export function MainLayout({ children, currentPath, onNavigate, language, onToggleLanguage }: MainLayoutProps) {
  const isMirrorStudio = currentPath === '/mirror-studio' || currentPath.startsWith('/mirror-studio/');
  const isMirrorResearch = currentPath === '/mirror-research' || currentPath.startsWith('/mirror-research/');
  const isMirrorLab = currentPath === '/mirror-lab' || currentPath.startsWith('/mirror-lab/');

  let activeTab: 'home' | 'research' | 'studio' | 'lab' = 'home';
  if (isMirrorResearch) activeTab = 'research';
  if (isMirrorStudio) activeTab = 'studio';
  if (isMirrorLab) activeTab = 'lab';

  return (
    <div className="min-h-screen">
      <Logo 
        language={language} 
        onToggleLanguage={onToggleLanguage} 
        onNavigate={onNavigate}
        activeTab={activeTab}
      />
      {children}
    </div>
  );
}
