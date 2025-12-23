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
    <section className="py-32 px-6 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        
        {/* What We Don't Do */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[2rem] bg-black text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-12 flex items-center gap-4">
                <span className="w-2 h-8 bg-white" />
                明确「不做什么」
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {donts.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 text-white/80">
                    <span className="text-white font-bold text-xl leading-none mt-1">✕</span>
                    <span className="font-light text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-12 border-t border-white/10 text-center">
                <p className="text-white/60 text-lg">
                  它的存在标准只有一个：<br className="md:hidden"/>
                  <span className="text-white font-medium border-b border-white/30 pb-1">研究结论，是否能让后续团队少走弯路？</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Outputs */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">核心产出</h2>
            <p className="text-black/50 text-xl font-light">不是 PPT，而是 “可被使用的判断”</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {outputs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-3xl bg-white border border-black/5 hover:border-black/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 group"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-black/5 text-black group-hover:bg-black group-hover:text-white transition-colors duration-500">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3>
                    <p className="text-black/60 mb-6 font-light leading-relaxed">{item.desc}</p>
                    <div className="inline-block px-3 py-1 rounded-md bg-black/5 text-xs font-mono text-black/50 uppercase tracking-wider">
                      Target: {item.target}
                    </div>
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
