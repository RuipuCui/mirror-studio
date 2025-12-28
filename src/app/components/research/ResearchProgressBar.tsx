import { useEffect, useState } from 'react';
import type { Language } from '@/app/types/whitemirrorai';

const content = {
  zh: [
    { id: 'hero', label: '首页' },
    { id: 'radar', label: '雷达' },
    { id: 'core-questions', label: '命题' },
    { id: 'focus', label: '研究范畴' },
    { id: 'outputs', label: '产出' },
    { id: 'relations', label: '协同' },
    { id: 'future', label: '意义' },
  ],
  en: [
    { id: 'hero', label: 'Home' },
    { id: 'radar', label: 'Radar' },
    { id: 'core-questions', label: 'Questions' },
    { id: 'focus', label: 'Focus' },
    { id: 'outputs', label: 'Outputs' },
    { id: 'relations', label: 'Relations' },
    { id: 'future', label: 'Future' },
  ],
};

export function ResearchProgressBar({ language }: { language: Language }) {
  const [activeSection, setActiveSection] = useState('hero');
  const sections = content[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 right-8 bottom-0 z-50 hidden md:flex flex-col justify-center pointer-events-none">
      <div className="relative h-[60vh] w-px">
        {/* The Line */}
        <div className="absolute inset-0 bg-slate-200 w-px" />

        {/* Dots */}
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          const top = `${(index / (sections.length - 1)) * 100}%`;
          
          return (
            <div
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center group cursor-pointer pointer-events-auto py-2"
              style={{ top }}
            >
              {/* Label */}
              <div 
                className={`absolute right-6 text-xs font-medium tracking-wider uppercase transition-all duration-300 origin-right ${
                  isActive ? 'opacity-100 translate-x-0 text-black' : 'opacity-0 translate-x-2 text-slate-400 group-hover:opacity-100 group-hover:translate-x-0'
                }`}
              >
                {section.label}
              </div>

              {/* Dot */}
              <div
                className={`relative w-2 h-2 rounded-full transition-all duration-500 ${
                  isActive ? 'bg-black scale-150' : 'bg-slate-300 group-hover:bg-slate-500 group-hover:scale-125'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-black animate-ping opacity-50" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
