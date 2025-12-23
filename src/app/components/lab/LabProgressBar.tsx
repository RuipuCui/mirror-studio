import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'metrics', label: 'Metrics' },
  { id: 'mission', label: 'Mission' },
  { id: 'experiments', label: 'Experiments' },
  { id: 'process', label: 'Process' },
  { id: 'relations', label: 'Relations' },
  { id: 'philosophy', label: 'Philosophy' },
];

export function LabProgressBar() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
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
    <div className="fixed top-0 right-8 bottom-0 z-50 hidden md:flex flex-col justify-center pointer-events-auto">
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
              className="absolute left-1/2 -translate-x-1/2 flex items-center group"
              style={{ top }}
            >
              {/* Label */}
              <div 
                className={`absolute right-6 px-3 py-1 rounded-md text-xs font-medium transition-all duration-300 whitespace-nowrap
                  ${isActive 
                    ? 'opacity-100 translate-x-0 bg-black text-white' 
                    : 'opacity-0 translate-x-2 text-slate-400 group-hover:opacity-100 group-hover:translate-x-0'
                  }`}
              >
                {section.label}
              </div>

              {/* Dot */}
              <button
                onClick={() => scrollTo(section.id)}
                className={`relative w-3 h-3 rounded-full transition-all duration-500 border-2 
                  ${isActive 
                    ? 'bg-black border-black scale-125' 
                    : 'bg-white border-slate-300 hover:border-black hover:scale-110'
                  }`}
                aria-label={`Scroll to ${section.label}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
