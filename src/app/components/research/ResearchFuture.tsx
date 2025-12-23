import { motion } from 'motion/react';
import { TrendingUp, Target } from 'lucide-react';

export function ResearchFuture() {
  return (
    <section className="py-32 px-6 bg-white border-t border-black/5">
      <div className="max-w-5xl mx-auto">
        
        {/* Why Important */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 tracking-tight">为什么现在更重要？</h2>
          <div className="p-12 rounded-[2.5rem] bg-black text-white relative overflow-hidden">
            {/* Abstract background shape */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#333_0%,_#000_60%)]" />
            
            <div className="relative z-10">
              <p className="text-2xl md:text-4xl text-white/90 leading-tight mb-12 font-light">
                AI 放大的是<span className="font-bold border-b-2 border-white">执行能力</span>，<br className="hidden md:block"/>不是<span className="font-bold border-b-2 border-white">判断能力</span>。
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-white/60 mb-12">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 text-white">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-mono text-lg">COST → 0</span>
                  </div>
                  <span className="text-xs uppercase tracking-widest">Coding & Prototyping</span>
                </div>
                
                <div className="w-px h-12 bg-white/10 hidden md:block" />
                
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 text-white">
                    <TrendingUp className="w-5 h-5 text-red-500 rotate-180" />
                    <span className="font-mono text-lg text-red-400">RISK ↑</span>
                  </div>
                  <span className="text-xs uppercase tracking-widest">Wrong Direction</span>
                </div>
              </div>

              <p className="text-lg text-white/50 font-light max-w-2xl mx-auto">
                在“什么都能做”的时代，帮你持续回答：“我们为什么要做这个？”
              </p>
            </div>
          </div>
        </motion.div>

        {/* Future Evolution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 tracking-tight">未来演进</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10 overflow-hidden rounded-2xl mb-24">
            {[
              "WhiteMirror 的战略中枢",
              "LearningOS 的认知模型来源",
              "面向外部的思想与判断输出"
            ].map((item, index) => (
              <div key={index} className="p-8 bg-white flex items-center justify-center text-center h-40 hover:bg-black/5 transition-colors duration-500">
                <span className="text-xl font-medium text-black">{item}</span>
              </div>
            ))}
          </div>

          <div className="relative py-20 border-t border-black/10">
            <div className="relative z-10">
              <Target className="w-16 h-16 mx-auto mb-8 text-black" />
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-black leading-none">
                我们不卖工具<br />我们输出判断
              </h3>
              <p className="text-black/50 text-xl font-light max-w-2xl mx-auto leading-relaxed">
                MirrorResearch 是 WhiteMirror 用来对抗“方向性失败”的系统。<br />
                它不追求快，而是确保“快的时候不在乱跑”。
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
