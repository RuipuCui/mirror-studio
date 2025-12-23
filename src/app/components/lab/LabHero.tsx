import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const logo = new URL('../../../assets/logo.png', import.meta.url).href;

export function LabHero() {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="px-3 py-1 rounded-full bg-black/5 border border-black/10 text-slate-600 text-xs font-mono uppercase tracking-wider flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
              </span>
              Validation Engine
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-black tracking-tight mb-8">
            Mirror Lab
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed font-light mb-8">
            想法—验证—孵化引擎<br/>
            <span className="text-black font-medium">Mirror Lab 不负责成功，它负责“尽快知道什么不值得继续做”。</span>
          </p>

          <div className="flex flex-wrap gap-3 mb-10 text-sm text-slate-500 font-mono">
            <span className="px-3 py-1 border border-black/10 rounded-md">Not Success Guarantee</span>
            <span className="px-3 py-1 border border-black/10 rounded-md">Not Just Demos</span>
            <span className="px-3 py-1 border border-black/10 rounded-md">Not Slow Research</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
             <button 
              onClick={() => scrollTo('mission')}
              className="px-8 py-4 rounded-full bg-black text-white font-bold hover:bg-slate-800 transition-all duration-300"
            >
              了解机制
            </button>
            <button 
              onClick={() => scrollTo('process')}
              className="px-8 py-4 rounded-full border border-black/20 hover:border-black/40 hover:bg-black/5 transition-all duration-300 text-black"
            >
              孵化流程
            </button>
          </div>
        </motion.div>

        {/* Right side - Logo visual */}
        <div className="hidden lg:flex items-center justify-center min-h-[600px] relative perspective-[1000px]">
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
                alt="Mirror Lab" 
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
        </div>
      </div>
      
    </section>
  );
}
