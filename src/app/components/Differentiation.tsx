import { motion } from 'motion/react';
import { Check, X, Zap, Clock, Users, RefreshCw, ShieldAlert, ArrowRight } from 'lucide-react';
import type { Language } from '@/app/types/whitemirrorai';

const content = {
  zh: {
    title: "本质区别",
    subtitle: "为什么选择 Mirror Studio 而不是传统外包？",
    efficiencyLabel: "EFFICIENCY GAIN",
    efficiencyValue: "10x",
    efficiencyNote: "Faster Iteration Cycles",
    columns: { traditional: "Traditional", studio: "Mirror Studio" },
    comparison: [
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
    ]
  },
  en: {
    title: "Core Differences",
    subtitle: "Why choose Mirror Studio over traditional outsourcing?",
    efficiencyLabel: "EFFICIENCY GAIN",
    efficiencyValue: "10x",
    efficiencyNote: "Faster Iteration Cycles",
    columns: { traditional: "Traditional", studio: "Mirror Studio" },
    comparison: [
      {
        icon: Users,
        label: "Core model",
        traditional: { text: 'Large teams / communication overhead', sub: 'High Friction' },
        studio: { text: 'AI-native individual loops', sub: 'Zero Latency' },
        highlight: true
      },
      {
        icon: Clock,
        label: "Iteration pace",
        traditional: { text: 'Weekly / monthly releases', sub: 'Slow Feedback' },
        studio: { text: 'Daily / hourly releases', sub: 'Real-time' },
        highlight: true
      },
      {
        icon: ShieldAlert,
        label: "Risk control",
        traditional: { text: 'Late discovery / hard pivots', sub: 'High Risk' },
        studio: { text: 'Fast experiments / quick stops', sub: 'Agile' },
        highlight: true
      },
      {
        icon: Zap,
        label: "Delivery goal",
        traditional: { text: 'Perfect code / process compliance', sub: 'Process Driven' },
        studio: { text: 'Validate hypotheses / solve problems', sub: 'Outcome Driven' },
        highlight: false
      }
    ]
  }
};

export function Differentiation({ language }: { language: Language }) {
  const t = content[language];
  return (
    <section id="differentiation" className="relative py-32 px-6 bg-transparent border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Header - Left Side */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              {t.title}
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8">
              {t.subtitle}
            </p>
              
              <div className="hidden lg:block p-6 rounded-2xl bg-slate-50 border border-black/10 relative overflow-hidden">
                <motion.div
                  animate={{ left: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-black/5 to-transparent skew-x-12"
                />
                <div className="text-sm font-mono text-slate-500 mb-4">{t.efficiencyLabel}</div>
                <div className="text-5xl font-bold text-black mb-2">{t.efficiencyValue}</div>
                <div className="text-sm text-slate-400">{t.efficiencyNote}</div>
              </div>
            </motion.div>
          </div>

          {/* Comparison Table - Right Side */}
          <div className="lg:col-span-8 space-y-4">
            {/* Header Row */}
            <div className="grid grid-cols-2 gap-4 px-6 pb-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <div>{t.columns.traditional}</div>
              <div className="text-black">{t.columns.studio}</div>
            </div>

            {t.comparison.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative grid grid-cols-2 gap-4 p-6 md:p-8 rounded-2xl bg-slate-50 border border-black/5 hover:border-black/10 transition-colors"
              >
                {/* Traditional Side */}
                <div className="relative">
                  <div className="text-slate-500 font-medium mb-1 group-hover:text-slate-600 transition-colors">{row.traditional.text}</div>
                  <div className="text-xs text-slate-400 font-mono">{row.traditional.sub}</div>
                </div>

                {/* Studio Side */}
                <div className="relative">
                  <div className="text-black font-bold text-lg mb-1">{row.studio.text}</div>
                  <div className="text-xs text-emerald-600 font-mono flex items-center gap-1">
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Zap className="w-3 h-3" />
                    </motion.div>
                    {row.studio.sub}
                  </div>
                  
                  {/* Subtle Glow */}
                  <div className="absolute inset-0 bg-emerald-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Divider Line */}
                <div className="absolute left-1/2 top-4 bottom-4 w-px bg-black/5" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
