import { motion } from 'motion/react';
import { TrendingUp, Target, AlertTriangle, Zap, Atom } from 'lucide-react';

export function ResearchFuture() {
  return (
    <section className="py-20 px-6 relative bg-transparent border-t border-black/5 min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Why Important */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 tracking-tight">研究的意义</h2>
            <div className="p-8 rounded-[2rem] bg-black text-white relative overflow-hidden group">
              {/* Background Animation */}
              <motion.div 
                className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <Atom className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Studio 的“大脑”</h3>
                <p className="text-white/70 leading-relaxed mb-8">
                  没有研究，我们只是在盲目编码。Research 为整个生态系统提供了“地图”。
                </p>

                {/* Orbit Animation */}
                <div className="relative h-48 flex items-center justify-center">
                  {/* Core */}
                  <div className="absolute w-12 h-12 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center z-20">
                    <Zap className="w-6 h-6 text-black fill-black" />
                  </div>

                  {/* Orbit 1 */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute w-32 h-32 rounded-full border border-white/20"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                  </motion.div>

                  {/* Orbit 2 */}
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute w-48 h-48 rounded-full border border-white/10"
                  >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Future Goals */}
          <div className="space-y-6">
            {[
              { title: "预测趋势", desc: "在成为主流之前识别下一个风口。", icon: TrendingUp },
              { title: "定义标准", desc: "为所有 Studio 项目设定技术标杆。", icon: Target },
              { title: "风险规避", desc: "测试危险的想法，让 Studio 免于试错成本。", icon: AlertTriangle }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-black/5 hover:border-black/20 transition-all duration-300 hover:shadow-md group"
              >
                <div className="mt-1 w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
