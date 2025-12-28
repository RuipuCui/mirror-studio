import { motion } from 'motion/react';
import { Share2, Beaker, Monitor, BookOpen, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import type { Language } from '@/app/types/whitemirrorai';

const content = {
  zh: {
    title: "生态位",
    subtitle: "MirrorPost 在 WhiteMirror 体系中的位置",
    nodes: [
      { id: 'labs', label: 'Mirror Labs', icon: Beaker, desc: '想法 / 探索 / MVP', x: 20, y: 20 },
      { id: 'studio', label: 'Mirror Studio', icon: Monitor, desc: '产品 / 系统落地', x: 80, y: 20 },
      { id: 'research', label: 'Mirror Research', icon: BookOpen, desc: '科研 / 信用 / 方法论', x: 20, y: 80 },
      { id: 'learning', label: 'LearningOS', icon: GraduationCap, desc: '教育基础设施', x: 80, y: 80 },
    ],
    valueTitle: "为什么需要 MirrorPost？",
    valueDesc: (
      <>
        WhiteMirror 如果只做事、不说清楚，就永远只能在小圈子里强。
        <br/><br/>
        MirrorPost 的作用，是让<span className="bg-black text-white px-2 py-0.5 mx-1 font-medium">“做出来的价值”</span>被外界正确理解。
      </>
    ),
    principles: [
      {
        title: "Translation, Not Promotion",
        desc: "不是为了“宣传”，而是为了“翻译”内部的复杂价值。"
      },
      {
        title: "Trust Asset, Not Traffic",
        desc: "不是为了“流量”，而是为了建立长期的“信任资产”。"
      }
    ]
  },
  en: {
    title: "Ecosystem",
    subtitle: "Where MirrorPost sits inside the WhiteMirror system",
    nodes: [
      { id: 'labs', label: 'Mirror Labs', icon: Beaker, desc: 'Ideas / Exploration / MVP', x: 20, y: 20 },
      { id: 'studio', label: 'Mirror Studio', icon: Monitor, desc: 'Product / System Delivery', x: 80, y: 20 },
      { id: 'research', label: 'Mirror Research', icon: BookOpen, desc: 'Research / Credibility / Methodology', x: 20, y: 80 },
      { id: 'learning', label: 'LearningOS', icon: GraduationCap, desc: 'Learning Infrastructure', x: 80, y: 80 },
    ],
    valueTitle: "Why MirrorPost?",
    valueDesc: (
      <>
        If WhiteMirror only does the work and never explains it, it stays strong only inside a small circle.
        <br/><br/>
        MirrorPost makes the<span className="bg-black text-white px-2 py-0.5 mx-1 font-medium">value we create</span>understood by the outside world.
      </>
    ),
    principles: [
      {
        title: "Translation, Not Promotion",
        desc: "Not to hype, but to translate complex internal value."
      },
      {
        title: "Trust Asset, Not Traffic",
        desc: "Not for short-term traffic, but for long-term trust."
      }
    ]
  }
};

export function PostRole({ language }: { language: Language }) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const t = content[language];

  return (
    <section className="py-32 px-6 relative bg-transparent border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">{t.title}</h2>
          <p className="text-slate-500 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Interactive Node Graph */}
          <div className="relative aspect-square max-w-[600px] mx-auto w-full bg-slate-50 rounded-[3rem] border border-black/5 p-8 shadow-inner">
            {/* Center Node (Mirror Post) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                animate={{ scale: hoveredNode ? 1.1 : 1 }}
                className="w-32 h-32 bg-black rounded-full flex flex-col items-center justify-center text-white shadow-2xl relative z-20"
              >
                <Share2 className="w-8 h-8 mb-2" />
                <span className="font-bold text-sm">Mirror Post</span>
              </motion.div>
              {/* Pulse Effect */}
              <div className="absolute inset-0 bg-black/20 rounded-full animate-ping z-10" />
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {t.nodes.map((node) => (
                <motion.line
                  key={node.id}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2="50%"
                  y2="50%"
                  stroke="black"
                  strokeWidth={hoveredNode === node.id ? 3 : 1}
                  strokeOpacity={hoveredNode === node.id ? 0.8 : 0.1}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              ))}
            </svg>

            {/* Satellite Nodes */}
            {t.nodes.map((node) => (
              <motion.div
                key={node.id}
                className="absolute w-40 p-4 bg-white rounded-2xl border border-black/5 shadow-lg cursor-pointer hover:border-black/20 transition-colors z-10"
                style={{ left: `${node.x}%`, top: `${node.y}%`, x: '-50%', y: '-50%' }}
                whileHover={{ scale: 1.05, y: -5 }}
                onHoverStart={() => setHoveredNode(node.id)}
                onHoverEnd={() => setHoveredNode(null)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <node.icon className="w-4 h-4 text-slate-700" />
                  </div>
                  <span className="font-bold text-sm text-slate-800">{node.label}</span>
                </div>
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wide">{node.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: The Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">{t.valueTitle}</h3>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                {t.valueDesc}
              </p>
            </div>
            
            <div className="grid gap-6">
              {t.principles.map((item) => (
                <div key={item.title} className="group p-6 bg-white rounded-2xl border border-black/5 hover:border-black/20 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-2 h-2 rounded-full bg-black group-hover:scale-150 transition-transform" />
                    <h4 className="font-bold text-lg">{item.title}</h4>
                  </div>
                  <p className="text-slate-500 pl-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
