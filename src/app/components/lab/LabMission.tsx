import { motion } from 'motion/react';
import { Target, AlertTriangle, Zap } from 'lucide-react';

export function LabMission() {
  return (
    <section className="py-24 px-6 relative bg-transparent border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">为什么存在？</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              在 AI 时代，最大的浪费不是做错，<br/>而是<span className="text-black font-semibold">验证得太慢</span>。
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-red-50/50 border border-red-100">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-red-900 text-sm">传统困境</h4>
                  <p className="text-red-700/80 text-sm mt-1">想法死在 PPT 里，或者死在漫长的资源协调中。</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl blur-2xl" />
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-black/5 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                Mirror Lab 的解法
              </h3>
              <div className="space-y-6">
                {[
                  { title: "接住想法", desc: "不让任何一个有价值的灵感流失" },
                  { title: "快速 MVP", desc: "用最低成本做出能跑的东西" },
                  { title: "极速验证", desc: "值不值得继续？用数据说话" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-bold text-black">{item.title}</div>
                      <div className="text-sm text-slate-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
