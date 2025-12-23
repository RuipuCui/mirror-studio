import { motion } from 'motion/react';
import { FileText, Sparkles, Zap, Rocket, ArrowRight, GitBranch, GitMerge } from 'lucide-react';

const steps = [
  {
    icon: Sparkles,
    title: 'Generate',
    subtitle: '生成架构',
    description: 'AI 快速生成 5–10 套方案 (UI + 架构)，不再依赖单一设计稿。',
  },
  {
    icon: GitBranch,
    title: 'Select',
    subtitle: '选择最优',
    description: '从多个版本中快速筛选，找到最符合直觉的实现路径。',
  },
  {
    icon: GitMerge,
    title: 'Refine',
    subtitle: '人工精修',
    description: '连接后端、数据库与 AI 模块，进行细节打磨与逻辑完善。',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    subtitle: '高频上线',
    description: '一天多个版本，哪个行放大，哪个不行直接丢。',
  },
];

export function HowWeBuild() {
  return (
    <section id="how-we-build" className="relative py-32 px-6 bg-white border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Sticky Header - Left Side */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">
                AI-Native<br />Pipeline
              </h2>
              <p className="text-slate-600 text-lg md:text-xl max-w-md leading-relaxed">
                核心不是“写代码快”，而是“生成 → 选择 → 微调 → 上线”的全新工作流。
              </p>
              
              <div className="mt-12 hidden lg:block">
                <div className="w-px h-32 bg-gradient-to-b from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Steps - Right Side */}
          <div className="relative space-y-12">
            {/* Vertical Line with Moving Beam */}
            <div className="absolute left-8 top-8 bottom-8 w-px bg-black/10 hidden md:block overflow-hidden">
              <motion.div
                animate={{ top: ["-20%", "120%"] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "linear",
                  repeatDelay: 1
                }}
                className="absolute left-0 w-full h-40 bg-gradient-to-b from-transparent via-black to-transparent opacity-20"
              />
            </div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-8 group"
              >
                {/* Number/Icon */}
                <div className="relative z-10 shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-black/10 flex items-center justify-center group-hover:border-black/20 transition-colors duration-500 shadow-sm">
                    <step.icon className="w-6 h-6 text-slate-500 group-hover:text-black transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-black">{step.title}</h3>
                    <span className="text-sm font-mono text-slate-400 uppercase tracking-wider">{step.subtitle}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed max-w-md">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
