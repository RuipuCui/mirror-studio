import { motion } from 'motion/react';
import { Share2, Beaker, Monitor, BookOpen, GraduationCap } from 'lucide-react';
import { useState } from 'react';

const nodes = [
  { id: 'labs', label: 'Mirror Labs', icon: Beaker, desc: '想法 / 探索 / MVP', x: 20, y: 20 },
  { id: 'studio', label: 'Mirror Studio', icon: Monitor, desc: '产品 / 系统落地', x: 80, y: 20 },
  { id: 'research', label: 'Mirror Research', icon: BookOpen, desc: '科研 / 信用 / 方法论', x: 20, y: 80 },
  { id: 'learning', label: 'LearningOS', icon: GraduationCap, desc: '教育基础设施', x: 80, y: 80 },
];

export function PostRole() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="py-32 px-6 relative bg-transparent border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">Ecosystem</h2>
          <p className="text-slate-500 text-lg">MirrorPost 在 WhiteMirror 体系中的位置</p>
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
              {nodes.map((node) => (
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
            {nodes.map((node) => (
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
              <h3 className="text-3xl font-bold mb-6">为什么需要 MirrorPost？</h3>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                WhiteMirror 如果只做事、不说清楚，就永远只能在小圈子里强。
                <br/><br/>
                MirrorPost 的作用，是让<span className="bg-black text-white px-2 py-0.5 mx-1 font-medium">“做出来的价值”</span>被外界正确理解。
              </p>
            </div>
            
            <div className="grid gap-6">
              <div className="group p-6 bg-white rounded-2xl border border-black/5 hover:border-black/20 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-2 h-2 rounded-full bg-black group-hover:scale-150 transition-transform" />
                  <h4 className="font-bold text-lg">Translation, Not Promotion</h4>
                </div>
                <p className="text-slate-500 pl-6">不是为了“宣传”，而是为了“翻译”内部的复杂价值。</p>
              </div>

              <div className="group p-6 bg-white rounded-2xl border border-black/5 hover:border-black/20 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-2 h-2 rounded-full bg-black group-hover:scale-150 transition-transform" />
                  <h4 className="font-bold text-lg">Trust Asset, Not Traffic</h4>
                </div>
                <p className="text-slate-500 pl-6">不是为了“流量”，而是为了建立长期的“信任资产”。</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
