import type { MouseEvent, ReactNode } from 'react';
import { Logo } from '../components/whitemirrorai/ui/Logo';
import { LanguageSwitcher } from '../components/ui/LanguageSwitcher';
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
  const isMirrorAcademy = currentPath === '/mirror-academy' || currentPath.startsWith('/mirror-academy/');
  const isMirrorPost = currentPath === '/mirror-post' || currentPath.startsWith('/mirror-post/');

  let activeTab: 'home' | 'research' | 'studio' | 'lab' | 'academy' | 'post' = 'home';
  if (isMirrorResearch) activeTab = 'research';
  if (isMirrorStudio) activeTab = 'studio';
  if (isMirrorLab) activeTab = 'lab';
  if (isMirrorAcademy) activeTab = 'academy';
  if (isMirrorPost) activeTab = 'post';

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
