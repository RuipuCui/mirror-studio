import { motion } from 'motion/react';
import { FileText, Sparkles, Zap, Rocket } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: '输入',
    description: '一句话需求 / 参考链接 / 目标用户',
  },
  {
    icon: Sparkles,
    title: '生成',
    description: 'AI 生成 5–10 套方案 (UI + 架构)',
  },
  {
    icon: Zap,
    title: '选择与连接',
    description: '选择最优 → 连接后端/数据库/AI 模块',
  },
  {
    icon: Rocket,
    title: '交付',
    description: '上线部署 + 极速迭代 (24h/版本)',
  },
];

export function HowWeBuild() {
  return (
    <section id="how-we-build" className="relative min-h-screen flex flex-col justify-center py-20 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">构建方式</h2>
          <p className="text-gray-400 text-lg">Demo 驱动，而非 PRD 驱动</p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800/50 -translate-y-1/2 overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              whileInView={{ x: '0%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-50"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="relative z-10 p-6 rounded-xl bg-black border border-white/10 group-hover:border-white/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-lg bg-slate-900 border border-white/10 mb-4 mx-auto group-hover:scale-110 transition-transform duration-500">
                    <step.icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-500" />
                  </div>

                  <div className="relative text-center">
                    <div className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">步骤 {index + 1}</div>
                    <h3 className="text-xl font-bold mb-3 text-slate-200 group-hover:text-white transition-colors">{step.title}</h3>
                    <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">{step.description}</p>
                  </div>
                </div>

                {/* Step number circle */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center text-sm font-bold z-20 text-slate-500 group-hover:text-white group-hover:border-white/50 transition-all duration-500">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
