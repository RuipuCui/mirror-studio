import { motion } from 'motion/react';
import { Check, X, Zap, Clock, Users, RefreshCw, ShieldAlert } from 'lucide-react';

const comparison = [
  {
    icon: Users,
    traditional: '核心成本：沟通、对齐、协作',
    studio: '核心能力：AI-native 个体闭环',
    highlight: true
  },
  {
    icon: Clock,
    traditional: '节奏：周 / 月',
    studio: '节奏：天 / 小时',
    highlight: true
  },
  {
    icon: ShieldAlert,
    traditional: '风险：方向错了，但发现太晚',
    studio: '风险：错得快、改得快、止损快',
    highlight: true
  },
  {
    icon: RefreshCw,
    traditional: '追求：功能完整、代码规范、流程完美',
    studio: '追求：验证速度、系统可运行性、迭代能力',
    highlight: false
  },
  {
    icon: Zap,
    traditional: '目标：一次性做完，一开始就完美',
    studio: '目标：能不能跑、能不能用、能不能快速验证',
    highlight: false
  }
];

export function Differentiation() {
  return (
    <section id="differentiation" className="relative flex flex-col justify-center py-24 px-6 bg-black border-t border-white/5 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              本质区别
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Mirror Studio vs 传统软件团队
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 relative">
          {/* VS Badge */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black border border-white/10 rounded-full items-center justify-center z-20 shadow-xl">
            <span className="text-xl font-bold text-white/50 italic">VS</span>
          </div>

          {/* Traditional Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/20 border border-white/5 rounded-3xl md:rounded-r-none md:border-r-0 p-8 md:p-12 backdrop-blur-sm"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-slate-500 mb-2">传统软件团队</h3>
              <p className="text-slate-600 text-sm">高成本 · 低效率 · 慢迭代</p>
            </div>
            
            <div className="space-y-8">
              {comparison.map((row, index) => (
                <div key={index} className="flex items-start gap-4 opacity-60 group hover:opacity-100 transition-opacity">
                  <div className="mt-1 p-1.5 rounded-full bg-slate-800/50 text-slate-500">
                    <X className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-400 leading-relaxed">{row.traditional}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mirror Studio Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-900/40 to-black border border-white/10 rounded-3xl md:rounded-l-none md:border-l-0 p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/5" />
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-white mb-2">Mirror Studio</h3>
                <p className="text-slate-300 text-sm">AI 驱动 · 极速 · 敏捷</p>
              </div>
              
              <div className="space-y-8">
                {comparison.map((row, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className={`mt-1 p-1.5 rounded-full ${row.highlight ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'bg-white/10 text-white'}`}>
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`leading-relaxed ${row.highlight ? 'text-white font-medium' : 'text-slate-300'}`}>
                        {row.studio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent">
            <div className="px-8 py-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
              <p className="text-xl md:text-2xl font-light text-white tracking-wide">
                <span className="text-white font-bold">唯快</span>不破。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
