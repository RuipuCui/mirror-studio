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
      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={!showIntro ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="mb-6">
            <span className="block text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Mirror Studio
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            AI-native 产品与系统实现引擎：把“已经被验证的想法”，在极短时间内变成“真实可运行的系统”
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollTo('capabilities')}
              className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              查看能力
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
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 1.0 }}
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