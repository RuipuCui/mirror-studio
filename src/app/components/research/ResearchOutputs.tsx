import { motion } from 'motion/react';
import { XCircle, FileText, Compass, Layers, ArrowRightCircle } from 'lucide-react';

const donts = [
  "不直接写产品代码",
  "不负责 UI / 前端 / 工程交付",
  "不为了发论文而研究",
  "不做“看起来很深但无法落地”的研究"
];

const outputs = [
  {
    title: "问题白名单 / 黑名单",
    desc: "哪些问题值得投入？哪些看起来高级但不值得做？",
    target: "给 MirrorLabs 决定“选什么 idea”用的",
    icon: FileText
  },
  {
    title: "方向性结论 (Direction Memo)",
    desc: "战略护栏，例如“早期不要追求完美自动化”。",
    target: "战略决策依据",
    icon: Compass
  },
  {
    title: "方法论 / 框架",
    desc: "AI-native 学习系统的最小闭环模型、失败分类模型等。",
    target: "被 Labs / Studio 反复复用",
    icon: Layers
  },
  {
    title: "Research → Product 转化建议",
    desc: "如果要把结论变成产品，第一版应该验证什么？",
    target: "最小形式验证方案",
    icon: ArrowRightCircle
  }
];

export function ResearchOutputs() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* What We Don't Do - Compact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 p-8 rounded-2xl bg-black text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="relative z-10 shrink-0">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-1.5 h-6 bg-white" />
              明确「不做什么」
            </h3>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 w-full md:w-auto">
            {donts.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-white/80 text-sm">
                <span className="text-white/40 font-bold">✕</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          {/* Background Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]" />
        </motion.div>

        {/* Core Outputs */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-2 tracking-tight">核心产出</h2>
              <p className="text-black/50 text-lg font-light">不是 PPT，而是 “可被使用的判断”</p>
            </div>
            <div className="h-px flex-1 bg-black/5 mx-8 hidden md:block translate-y-[-1rem]" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outputs.map((output, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-black/5 hover:border-black/20 transition-all duration-300 hover:shadow-lg flex gap-6"
              >
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <output.icon className="w-6 h-6" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{output.title}</h3>
                  <p className="text-black/60 text-sm mb-4 leading-relaxed">{output.desc}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-black/5 text-xs font-medium text-black/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
                    Target: {output.target}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
