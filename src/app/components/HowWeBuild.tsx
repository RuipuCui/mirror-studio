import { motion } from 'motion/react';
import { FileText, Sparkles, Zap, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Sparkles,
    title: '生成整体架构',
    description: 'AI 快速生成 5–10 套方案 (UI + 架构)，不再依赖单一设计稿。',
  },
  {
    icon: Zap,
    title: '选择最优方案',
    description: '从多个版本中快速筛选，找到最符合直觉的实现路径。',
  },
  {
    icon: FileText,
    title: '人工精修与连接',
    description: '连接后端、数据库与 AI 模块，进行细节打磨与逻辑完善。',
  },
  {
    icon: Rocket,
    title: '高频迭代上线',
    description: '一天多个版本，哪个行放大，哪个不行直接丢。',
  },
];

export function HowWeBuild() {
  return (
    <section id="how-we-build" className="relative flex flex-col justify-center py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">AI-Native 开发方式</h2>
          <p className="text-gray-400 text-lg">核心不是“写代码快”，而是“生成 → 选择 → 微调 → 上线”</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800/50 -translate-x-1/2">
            <motion.div
              initial={{ height: '0%' }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-transparent via-slate-500 to-transparent opacity-50"
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className={`flex-1 w-full md:w-auto pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                }`}>
                  <div className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">步骤 {index + 1}</div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>

                {/* Center Icon */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,0,0,1)]">
                  <step.icon className="w-5 h-5 text-white" />
                </div>

                {/* Empty Side for Balance */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
