import { ReflectionBackground } from "./ui/ReflectionBackground";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface SlideProps {
  children: ReactNode;
  className?: string;
  id?: string;
  showBackground?: boolean;
}

export function Slide({ children, className, id, showBackground = true }: SlideProps) {
  const ref = useRef(null);
  
  // Parallax effect for content
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [50, -50]), {
    stiffness: 100,
    damping: 30
  });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "h-screen w-full snap-start flex items-center justify-center overflow-hidden relative bg-black text-white",
        className
      )}
    >
      {showBackground && <ReflectionBackground />}
      
      <motion.div 
        style={{ y }}
        className="container mx-auto px-6 md:px-12 pt-24 md:pt-32 max-w-7xl h-full flex flex-col justify-center relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SlideHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className="overflow-hidden mb-6">
        <motion.h2
        initial={{ opacity: 0, y: 100, rotate: 2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={cn("text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50", className)}
        >
        {children}
        </motion.h2>
    </div>
  );
}

export function SlideSubheading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn("text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed", className)}
    >
      {children}
    </motion.div>
  );
}
