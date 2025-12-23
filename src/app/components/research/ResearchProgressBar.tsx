import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'core-questions', label: 'Core' },
  { id: 'focus', label: 'Focus' },
  { id: 'outputs', label: 'Outputs' },
  { id: 'relations', label: 'Relations' },
  { id: 'future', label: 'Future' },
];

export function ResearchProgressBar() {
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
      <div className="relative h-[40vh] w-px">
        {/* The Line */}
        <div className="absolute inset-0 bg-black/10 w-px" />

        {/* Dots */}
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          const top = `${(index / (sections.length - 1)) * 100}%`;
          
          return (
            <div
              key={section.id}
              className="absolute left-1/2 -translate-x-1/2 group cursor-pointer"
              style={{ top }}
              onClick={() => scrollTo(section.id)}
            >
              {/* Dot */}
              <div 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-black scale-125' : 'bg-black/20 group-hover:bg-black/40'
                }`} 
              />
              
              {/* Label */}
              <div 
                className={`absolute right-6 top-1/2 -translate-y-1/2 text-xs font-mono transition-all duration-300 whitespace-nowrap ${
                  isActive ? 'opacity-100 text-black translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-black/40'
                }`}
              >
                {section.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
