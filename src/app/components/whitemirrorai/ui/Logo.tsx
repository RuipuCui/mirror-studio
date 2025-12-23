import { motion, useMotionValue, useSpring } from "motion/react";
import { useCallback, useEffect, type KeyboardEvent, type MouseEvent } from "react";

import logoImg from "@/assets/d8ccf2882154af147033fb89190f48a94362c766.png";
import type { Language } from "@/app/types/whitemirrorai";

interface LogoProps {
  language: Language;
  onToggleLanguage: () => void;
  onNavigate: (event: MouseEvent<HTMLAnchorElement | HTMLDivElement>, to: string) => void;
}

export function Logo({ language, onToggleLanguage, onNavigate }: LogoProps) {
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
  }, [rotate]);

  useEffect(() => {
    flipX.set(language === "en" ? -1 : 1);
  }, [language, flipX]);

  const handleLanguageToggle = useCallback(() => {
    onToggleLanguage();
  }, [onToggleLanguage]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleLanguageToggle();
      }
    },
    [handleLanguageToggle]
  );

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="fixed top-6 left-6 md:top-8 md:left-10 z-50 flex items-center mix-blend-difference pointer-events-none select-none"
    >
      <div className="group relative flex items-center gap-4 pointer-events-auto p-2">
        {/* Logo Mark with Reflection (click to toggle language) */}
        <div className="relative z-50 flex flex-col items-center justify-center perspective-[500px]">
          <motion.div
            className="relative z-20 cursor-pointer"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ rotate: smoothRotate, scaleX: flipX }}
            onClick={(e) => onNavigate(e, '/')}
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            <img
              src={logoImg}
              alt="White Mirror"
              className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-90 group-hover:opacity-100 transition-all duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.6)]"
            />
          </motion.div>

          {/* Reflection Effect */}
          <div className="absolute top-full left-0 w-12 h-12 md:w-16 md:h-16 -mt-2 z-10 overflow-hidden opacity-50 pointer-events-none">
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: 0.5 }}
              style={{ rotate: smoothRotate, scaleX: flipX }}
            >
              <motion.img
                src={logoImg}
                alt=""
                className="w-full h-full object-contain blur-[1.5px] grayscale"
                style={{
                  transform: "scaleY(-1)",
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 70%)",
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 70%)",
                }}
                animate={{
                  filter: ["blur(1.5px)", "blur(2.5px)", "blur(1.5px)"],
                  scaleY: [-1, -1.05, -1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
        {/* Dynamic Content Container */}
        <div className="relative h-12 md:h-16 flex items-center">
          {/* Default State: Brand Name */}
          <div className="absolute left-0 flex flex-col justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-left">
            <h1 className="text-lg md:text-xl font-light tracking-[0.25em] text-white font-sans whitespace-nowrap">WHITE MIRROR</h1>
            <span className="block text-[0.6rem] tracking-[0.4em] text-white/50 uppercase whitespace-nowrap">
              {language === "zh" ? "AI 原生孵化器" : "AI Native Incubator"}
            </span>
          </div>

        </div>
      </div>
    </motion.header>
  );
}
