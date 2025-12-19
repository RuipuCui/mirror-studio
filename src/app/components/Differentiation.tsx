import { motion } from 'motion/react';
import { Check, X, Zap, Clock, Users, RefreshCw, ShieldAlert, ArrowRight } from 'lucide-react';

const comparison = [
  {
    icon: Users,
    label: "核心模式",
    traditional: { text: '多人协作 / 沟通损耗', sub: 'High Friction' },
    studio: { text: 'AI-Native 个体闭环', sub: 'Zero Latency' },
    highlight: true
  },
  {
    icon: Clock,
    label: "迭代节奏",
    traditional: { text: '周 / 月级发布', sub: 'Slow Feedback' },
    studio: { text: '天 / 小时级发布', sub: 'Real-time' },
    highlight: true
  },
  {
    icon: ShieldAlert,
    label: "风险控制",
    traditional: { text: '发现晚 / 掉头难', sub: 'High Risk' },
    studio: { text: '极速试错 / 快速止损', sub: 'Agile' },
    highlight: true
  },
  {
    icon: Zap,
    label: "交付目标",
    traditional: { text: '完美代码 / 流程合规', sub: 'Process Driven' },
    studio: { text: '验证假设 / 解决问题', sub: 'Outcome Driven' },
    highlight: false
  }
];

export function Differentiation() {
  return (
    <section id="differentiation" className="relative py-32 px-6 bg-black border-t border-white/5 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              本质区别
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            为什么选择 Mirror Studio 而不是传统外包？
          </p>
        </motion.div>

        {/* Header Row */}
        <div className="hidden md:grid grid-cols-12 gap-4 mb-8 px-8 text-sm font-mono text-slate-500 uppercase tracking-wider">
          <div className="col-span-5 text-center">Traditional Team</div>
          <div className="col-span-2 text-center">Metric</div>
          <div className="col-span-5 text-center text-white">Mirror Studio</div>
        </div>

        <div className="space-y-6">
          {comparison.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 items-center bg-white/5 rounded-2xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Traditional Side */}
              <div className="md:col-span-5 p-6 md:p-8 flex flex-col md:items-end md:text-right relative">
                <div className="md:hidden text-xs font-mono text-slate-600 uppercase mb-2">Traditional</div>
                <div className="text-slate-400 font-medium mb-1">{row.traditional.text}</div>
                <div className="text-xs text-slate-600 font-mono">{row.traditional.sub}</div>
                {/* Fade out effect for traditional side */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent md:bg-gradient-to-l pointer-events-none" />
              </div>

              {/* Center Icon */}
              <div className="md:col-span-2 flex justify-center py-4 md:py-0 relative z-10">
                <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:border-white/30 transition-all duration-300">
                  <row.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Studio Side */}
              <div className="md:col-span-5 p-6 md:p-8 relative bg-white/5 md:bg-transparent">
                <div className="md:hidden text-xs font-mono text-slate-400 uppercase mb-2">Mirror Studio</div>
                <div className="flex items-center gap-3">
                  <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <div>
                    <div className="text-white font-bold text-lg mb-1">{row.studio.text}</div>
                    <div className="text-xs text-green-400/70 font-mono flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {row.studio.sub}
                    </div>
                  </div>
                </div>
                {/* Active glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
