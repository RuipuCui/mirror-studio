import { motion } from 'motion/react';
import { Zap, Brain, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

const capabilities = [
  {
    icon: Rocket,
    title: '系统级交付',
    subtitle: 'System Delivery',
    description: '不是 Demo，而是可以给真实用户用的系统',
    features: [
      { label: '完整网站', sub: '前端 + 后端 + 数据库' },
      { label: '用户系统', sub: '鉴权 / 权限 / 个人中心' },
      { label: '运营工具', sub: 'CMS / 数据看板' },
      { label: '部署运维', sub: 'CI/CD / 域名 / SSL' }
    ],
    gradient: "from-slate-100 to-slate-200"
  },
  {
    icon: Brain,
    title: 'AI 功能模块',
    subtitle: 'AI Integration',
    description: '深度集成 AI 能力，构建智能化应用',
    features: [
      { label: 'RAG 引擎', sub: '文档 / 知识库问答' },
      { label: 'Agent 工作流', sub: '多步推理 / 工具调用' },
      { label: 'AI 辅助', sub: '生成 / 润色 / 分析' },
      { label: '模型微调', sub: 'Prompt Engineering' }
    ],
    gradient: "from-slate-100 to-slate-200"
  },
  {
    icon: Zap,
    title: '高频迭代',
    subtitle: 'Rapid Iteration',
    description: '一天多个版本，快速试错与放大',
    features: [
      { label: '极速原型', sub: '24h 出首版' },
      { label: 'A/B 测试', sub: '多方案并行' },
      { label: '数据驱动', sub: '埋点 / 反馈循环' },
      { label: '即时响应', sub: '小时级修 Bug' }
    ],
    gradient: "from-slate-100 to-slate-200"
  }
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative flex flex-col justify-center py-24 px-6 bg-transparent border-t border-black/5">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left Side - Sticky Header */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-slate-500 mb-4">
              <span className="w-8 h-[1px] bg-slate-500"></span>
              <span className="text-sm uppercase tracking-widest">Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-black">
              从 MVP 到<br/>
              <span className="text-slate-600">真实系统</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mirror Lab 负责将想法变成 MVP，我们负责将 MVP 转化为成熟的商业产品。三大核心能力，确保你的系统既快又稳。
            </p>
            
            <div className="hidden lg:block p-6 rounded-2xl bg-slate-50 border border-black/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-black animate-pulse" />
                <span className="text-sm font-mono text-slate-600">System Status: Operational</span>
              </div>
              <div className="space-y-2">
                <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-black" 
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                  <span>Idea</span>
                  <span>Product</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Cards List */}
        <div className="lg:col-span-8">
          <motion.div 
            className="grid grid-cols-1 gap-6"
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
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}
                className="group relative overflow-hidden rounded-3xl bg-white border border-black/10 hover:border-black/20 transition-all duration-500 shadow-sm hover:shadow-md"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                <div className="relative z-10 p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Icon Column */}
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-black/10 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <item.icon className="w-8 h-8 text-black" />
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                        <span className="text-sm font-mono text-slate-400 uppercase tracking-wider">{item.subtitle}</span>
                      </div>
                      <p className="text-slate-600 mb-8 text-lg">{item.description}</p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {item.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-black/5 hover:bg-slate-100 transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                            <div>
                              <div className="text-slate-700 font-medium text-sm">{feature.label}</div>
                              <div className="text-slate-500 text-xs">{feature.sub}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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
