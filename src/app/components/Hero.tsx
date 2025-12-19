import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

const logo = new URL('../../assets/logo.png', import.meta.url).href;

interface HeroProps {
  showIntro: boolean;
  setShowIntro: (show: boolean) => void;
}

export function Hero({ showIntro, setShowIntro }: HeroProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [setShowIntro]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Intro Overlay Background */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-40 bg-black"
          />
        )}
      </AnimatePresence>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-slate-800/30 rounded-full blur-[100px]"
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-72 h-72 bg-slate-800/20 rounded-full blur-[80px]"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />


      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={!showIntro ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-slate-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            AI-Native System Engine
          </div>

          <h1 className="mb-8">
            <span className="block text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              Mirror Studio
            </span>
            <span className="block text-2xl md:text-3xl font-light text-slate-400 mt-4">
              AI-native 的产品与系统实现引擎
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
            专门把“已经被验证的想法”，在极短时间内变成“真实可运行的系统”。
          </p>

          <div className="flex flex-wrap gap-3 mb-10 text-sm text-slate-500 font-mono">
            <span className="px-3 py-1 border border-white/10 rounded-md">Not Idea Factory</span>
            <span className="px-3 py-1 border border-white/10 rounded-md">Not Outsourcing</span>
            <span className="px-3 py-1 border border-white/10 rounded-md">Not Traditional Studio</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollTo('capabilities')}
              className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-slate-200 transition-all duration-300"
            >
              查看能力
            </button>
            <button 
              onClick={() => scrollTo('philosophy')}
              className="px-8 py-4 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              了解理念
            </button>
          </div>
        </motion.div>

        {/* Right side - Logo visual */}
        <div className="hidden lg:flex items-center justify-center min-h-[400px]">
          {!showIntro && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full scale-150" />
                <img src={logo} alt="Mirror Studio" className="relative h-64 md:h-80 drop-shadow-[0_0_35px_rgba(255,255,255,0.4)] brightness-0 invert object-contain" />
              </motion.div>
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