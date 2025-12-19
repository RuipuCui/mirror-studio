import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'team', label: 'Team' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'what-we-do', label: 'What We Do' },
  { id: 'metrics', label: 'Metrics' },
  { id: 'how-we-build', label: 'Process' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'differentiation', label: 'Why Us' },
];

export function ProgressBar() {
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
        <div className="absolute inset-0 bg-slate-800/50 w-px" />

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
              <motion.div
                animate={{
                  scale: isActive ? 1.5 : 1,
                  backgroundColor: isActive ? '#ffffff' : '#475569',
                }}
                className="w-2 h-2 rounded-full transition-colors duration-300"
              />
              
              {/* Label */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <span className="text-xs text-slate-400 font-medium">{section.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
