import { motion } from 'motion/react';
import { Quote, Atom, Zap } from 'lucide-react';

export function LabPhilosophy() {
  return (
    <section className="py-24 px-6 relative bg-transparent border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">运行哲学</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">成员角色</h3>
                <p className="text-slate-600">
                  我们不是“写需求的人”和“纯执行者”，而是<span className="text-black font-medium">共同探索者</span>。
                  每个人都是问题提出者，也是快速实现者。
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">核心能力</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                    拆解模糊问题的能力
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                    用 AI 快速补齐技能缺口的能力
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                    对失败诚实的能力
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Orbit Animation Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 pointer-events-none">
               <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-black"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full" />
                </motion.div>
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-black"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-black rounded-full" />
                </motion.div>
            </div>

            <div className="absolute -top-10 -left-10 text-black/5">
              <Quote size={120} />
            </div>
            <blockquote className="relative text-2xl md:text-3xl font-light leading-relaxed text-black/80 italic z-10">
              "Mirror Lab 不是为了产出产品，而是为了让 WhiteMirror 永远不会被错误方向拖死。"
            </blockquote>
            <div className="mt-6 flex items-center gap-4 relative z-10">
              <div className="w-12 h-1 bg-black" />
              <span className="text-sm font-bold uppercase tracking-widest text-black/40">Lab Manifesto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
