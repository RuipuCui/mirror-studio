import { motion, useMotionValue, useSpring } from "motion/react";
import { useCallback, useEffect, type KeyboardEvent, type MouseEvent } from "react";

import logoImg from "@/assets/d8ccf2882154af147033fb89190f48a94362c766.png";
import type { Language } from "@/app/types/whitemirrorai";

interface LogoProps {
  language: Language;
  onToggleLanguage: () => void;
  onNavigate: (event: MouseEvent<HTMLAnchorElement | HTMLDivElement>, to: string) => void;
  activeTab?: 'home' | 'research' | 'studio' | 'lab' | 'academy' | 'post';
}

export function Logo({ language, onToggleLanguage, onNavigate, activeTab = 'home' }: LogoProps) {
  const rotate = useMotionValue(0);
  const smoothRotate = useSpring(rotate, { damping: 20, stiffness: 100 });
  const flipX = useSpring(1, { damping: 14, stiffness: 140 });

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const handleScroll = () => {
      const scrollY = main.scrollTop;
      const h = main.clientHeight || window.innerHeight;
      rotate.set((scrollY / h) * 360);
    };

    main.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => main.removeEventListener("scroll", handleScroll);
  }, [rotate, activeTab]);

  useEffect(() => {
    flipX.set(language === "en" ? -1 : 1);
  }, [language, flipX]);

  const handleLanguageToggle = useCallback(() => {
    onToggleLanguage();
  }, [onToggleLanguage]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onToggleLanguage();
    }
  };

  const navItems = [
    { id: 'research', label: 'Research', path: '/mirror-research' },
    { id: 'lab', label: 'Lab', path: '/mirror-lab' },
    { id: 'studio', label: 'Studio', path: '/mirror-studio' },
    { id: 'academy', label: 'Academy', path: '/mirror-academy' },
    { id: 'post', label: 'Post', path: '/mirror-post' },
  ];

  const isHome = activeTab === 'home';
  const textColor = isHome ? 'text-white' : 'text-black';
  const subTextColor = isHome ? 'text-white/50' : 'text-black/50';
  const hoverTextColor = isHome ? 'group-hover:text-white/90' : 'group-hover:text-black/90';
  const subHoverTextColor = isHome ? 'group-hover:text-white/70' : 'group-hover:text-black/70';
  const navHoverColor = isHome ? 'hover:text-white' : 'hover:text-black';

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={isHome 
        ? "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10 md:py-6 mix-blend-difference pointer-events-none select-none bg-gradient-to-b from-black/20 to-transparent backdrop-blur-[1px]"
        : "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10 md:py-6 pointer-events-none select-none bg-white/80 backdrop-blur-md shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-colors duration-300 overflow-hidden"
      }
    >
      {/* Left: Logo & Brand */}
      <div className="flex items-center gap-4 pointer-events-auto group cursor-pointer" onClick={(e) => onNavigate(e, '/')}>
        {/* Logo Mark */}
        <div className="relative z-50 flex flex-col items-center justify-center perspective-[500px]">
          <motion.div
            className="relative z-20"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ rotate: smoothRotate, scaleX: flipX }}
          >
            <img
              src={logoImg}
              alt="White Mirror"
              className={`w-10 h-10 md:w-12 md:h-12 object-contain opacity-90 group-hover:opacity-100 transition-all duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] ${!isHome ? 'invert' : ''}`}
            />
          </motion.div>
          
           {/* Reflection Effect */}
          <div className="absolute top-full left-0 w-10 h-10 md:w-12 md:h-12 -mt-1 z-10 overflow-hidden opacity-40 pointer-events-none">
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: 0.5 }}
              style={{ rotate: smoothRotate, scaleX: flipX }}
            >
              <motion.img
                src={logoImg}
                alt=""
                className={`w-full h-full object-contain blur-[1px] grayscale ${!isHome ? 'invert' : ''}`}
                style={{
                  transform: "scaleY(-1)",
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 70%)",
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 70%)",
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="flex flex-col justify-center">
          <h1 className={`text-base md:text-lg font-light tracking-[0.2em] font-sans whitespace-nowrap transition-colors ${textColor} ${hoverTextColor}`}>WHITE MIRROR</h1>
          <span className={`block text-[0.65rem] tracking-[0.3em] uppercase whitespace-nowrap transition-colors ${subTextColor} ${subHoverTextColor}`}>
            {language === "zh" ? "AI 原生孵化器" : "AI Native Incubator"}
          </span>
        </div>
      </div>

      {/* Right: Navigation */}
      <nav className="flex items-center gap-6 md:gap-8 pointer-events-auto">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.path}
            onClick={(e) => onNavigate(e, item.path)}
            className={`relative text-xs md:text-sm tracking-[0.15em] uppercase transition-all duration-300 ${navHoverColor} ${
              activeTab === item.id 
                ? (isHome ? 'text-white font-medium' : 'text-black font-medium') 
                : (isHome ? 'text-white/60' : 'text-black/60')
            }`}
          >
            {item.label}
            {activeTab === item.id && (
              <motion.div
                layoutId="activeTabIndicator"
                className={`absolute -bottom-2 left-0 right-0 h-[1px] ${isHome ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'bg-black shadow-[0_0_8px_rgba(0,0,0,0.2)]'}`}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
