import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'manifesto', label: 'Manifesto' },
  { id: 'problem', label: 'Problem' },
  { id: 'solution', label: 'Solution' },
  { id: 'ecosystem', label: 'Ecosystem' },
  { id: 'transformation', label: 'Transformation' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'product-people', label: 'People' },
  { id: 'efficiency', label: 'Efficiency' },
  { id: 'business-model', label: 'Business' },
  { id: 'contact', label: 'Contact' },
];

export function HomeProgressBar() {
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
    <div className="fixed top-0 right-8 bottom-0 z-50 hidden md:flex flex-col justify-center pointer-events-none mix-blend-difference">
      <div className="relative h-[60vh] w-px">
        {/* The Line */}
        <div className="absolute inset-0 bg-white/20 w-px" />

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
                  isActive ? 'opacity-100 translate-x-0 text-white' : 'opacity-0 translate-x-2 text-white/40 group-hover:opacity-100 group-hover:translate-x-0'
                }`}
              >
                {section.label}
              </div>

              {/* Dot */}
              <div
                className={`relative w-2 h-2 rounded-full transition-all duration-500 ${
                  isActive ? 'bg-white scale-150' : 'bg-white/40 group-hover:bg-white/80 group-hover:scale-125'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-50" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
