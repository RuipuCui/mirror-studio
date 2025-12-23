import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useEffect } from 'react';

const logo = new URL('../../assets/logo.png', import.meta.url).href;

interface HeroProps {
  showIntro: boolean;
  setShowIntro: (show: boolean) => void;
}

export function Hero({ showIntro, setShowIntro }: HeroProps) {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [setShowIntro]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Intro Overlay Background */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-40 bg-white"
          />
        )}
      </AnimatePresence>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-black/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />


      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={!showIntro ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="px-3 py-1 rounded-full bg-black/5 border border-black/10 text-slate-600 text-xs font-mono uppercase tracking-wider flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
              </span>
              AI-Native System Engine
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-black tracking-tight mb-8">
            Mirror Studio
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed font-light mb-12">
            AI-native 的产品与系统实现引擎<br/>
            <span className="text-black font-medium">专门把“已经被验证的想法”，在极短时间内变成“真实可运行的系统”。</span>
          </p>

          <div className="flex flex-wrap gap-3 mb-10 text-sm text-slate-500 font-mono">
            <span className="px-3 py-1 border border-black/10 rounded-md">Not Idea Factory</span>
            <span className="px-3 py-1 border border-black/10 rounded-md">Not Outsourcing</span>
            <span className="px-3 py-1 border border-black/10 rounded-md">Not Traditional Studio</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollTo('capabilities')}
              className="px-8 py-4 rounded-full bg-black text-white font-bold hover:bg-slate-800 transition-all duration-300"
            >
              查看能力
            </button>
            <button 
              onClick={() => scrollTo('philosophy')}
              className="px-8 py-4 rounded-full border border-black/20 hover:border-black/40 hover:bg-black/5 transition-all duration-300 text-black"
            >
              了解理念
            </button>
          </div>
        </motion.div>

        {/* Right side - Logo visual */}
        <div className="hidden lg:flex items-center justify-center min-h-[600px] relative perspective-[1000px]">
          {!showIntro && (
            <motion.div
              style={{ y: y2, rotateX: 5, rotateY: -5 }}
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent blur-[100px] rounded-full scale-150" />
              <motion.img 
                src={logo} 
                alt="Mirror Studio" 
                className="relative w-[400px] h-[400px] object-contain drop-shadow-2xl brightness-0"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Orbiting Elements */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border border-black/5 rounded-full"
                  style={{ x: '-50%', y: '-50%' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear", delay: i * 2 }}
                >
                  <div className="absolute top-0 left-1/2 w-3 h-3 bg-black rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Intro Logo (Fixed Center) */}
      <AnimatePresence>
        {showIntro && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full scale-150" />
                <img src={logo} alt="Mirror Studio" className="relative h-80 md:h-[500px] drop-shadow-[0_0_50px_rgba(255,255,255,0.6)] brightness-0 invert object-contain" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}