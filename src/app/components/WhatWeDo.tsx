import { motion } from 'motion/react';
import { Zap, Brain, Rocket } from 'lucide-react';

const capabilities = [
  {
    icon: Rocket,
    title: '系统级交付',
    description: '不是 Demo，而是可以给真实用户用的系统',
    bullets: [
      '完整网站（前端 + 后端）',
      '用户系统与权限',
      '数据结构设计',
      '基础运营工具'
    ]
  },
  {
    icon: Brain,
    title: 'AI 功能模块',
    description: '深度集成 AI 能力，构建智能化应用',
    bullets: [
      'RAG 文档问答',
      '智能 Agent 工作流',
      'AI 辅助生成',
      '定制化模型调用'
    ]
  },
  {
    icon: Zap,
    title: '高频迭代',
    description: '一天多个版本，快速试错与放大',
    bullets: [
      '快速生成多个版本',
      '哪个行就放大',
      '哪个不行直接丢',
      '极速响应反馈'
    ]
  }
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative flex flex-col justify-center py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left Side - Sticky Header */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">我们做什么</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              三大核心能力驱动极速交付。我们不只是写代码，而是提供从想法到落地的完整解决方案。
            </p>
          </motion.div>
        </div>

        {/* Right Side - Cards List */}
        <div className="lg:col-span-8">
          <motion.div 
            className="grid grid-cols-1 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}
                className="group relative p-8 md:p-10 rounded-2xl bg-black border border-white/10 hover:border-white/30 transition-colors duration-500"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">{item.description}</p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-500 group-hover:text-gray-400 transition-colors text-sm">
                          <span className="text-slate-600 mt-1 group-hover:text-slate-400">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
