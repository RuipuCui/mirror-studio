import { motion } from 'motion/react';
import { Zap, Brain, Rocket } from 'lucide-react';

const capabilities = [
  {
    icon: Zap,
    title: '极速 MVP',
    description: '从需求到可运行产品 (Web / SaaS)',
    bullets: [
      '24–72 小时交付周期',
      '真实可用的系统，而非 Demo',
      '即刻可用于用户测试'
    ]
  },
  {
    icon: Brain,
    title: 'AI 功能模块',
    description: 'RAG / Agent / Workflow / AI UI',
    bullets: [
      '文档问答系统',
      '智能 Agent 工作流',
      '定制化 AI 集成'
    ]
  },
  {
    icon: Rocket,
    title: '系统级交付',
    description: '可部署、可维护、可扩展',
    bullets: [
      '包含云端部署',
      '数据库与权限系统',
      '监控与持续迭代'
    ]
  }
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative min-h-screen flex flex-col justify-center py-20 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">我们做什么</h2>
          <p className="text-gray-400 text-lg">三大核心能力驱动极速交付</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
              className="group relative p-8 rounded-2xl bg-black border border-white/10 hover:border-white/30 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">{item.description}</p>

                <ul className="space-y-3">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-500 group-hover:text-gray-400 transition-colors">
                      <span className="text-slate-600 mt-1 group-hover:text-slate-400">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
