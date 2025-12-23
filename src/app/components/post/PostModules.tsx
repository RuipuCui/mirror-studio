import { motion } from 'motion/react';
import { Layers, PenTool, Image, Share, RefreshCw, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const modules = [
  {
    id: 1,
    icon: Layers,
    title: "内容资产",
    subtitle: "Content Layer",
    desc: "项目解读、方法论文章、Showcase 拆解、团队成员视角输出。",
    tag: "真实、长期、可回看",
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: 2,
    icon: PenTool,
    title: "叙事结构",
    subtitle: "Narrative Layer",
    desc: "我们在解决什么问题？为什么这样做？如何一步步推进？",
    tag: "CMO + CSO 级工作",
    color: "bg-purple-50 text-purple-600"
  },
  {
    id: 3,
    icon: Image,
    title: "视觉与统一表达",
    subtitle: "Visual Layer",
    desc: "海报、网站、PPT、Landing Page。一眼看上去，就知道这是同一个组织。",
    tag: "统一识别度",
    color: "bg-pink-50 text-pink-600"
  },
  {
    id: 4,
    icon: Share,
    title: "渠道分发",
    subtitle: "Distribution Layer",
    desc: "Website, Notion, 小红书, Twitter, LinkedIn。内容没立住，发哪里都没用。",
    tag: "触达窗口",
    color: "bg-orange-50 text-orange-600"
  },
  {
    id: 5,
    icon: RefreshCw,
    title: "内部协同接口",
    subtitle: "Internal Sync",
    desc: "紧贴 Labs, Studio, Research, LearningOS。不是外宣部门，是组织的对外接口层。",
    tag: "关键核心",
    color: "bg-green-50 text-green-600"
  }
];

export function PostModules() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 relative bg-transparent border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-4 tracking-tight">工作模块</h2>
            <p className="text-slate-500 text-lg">MirrorPost 的具体落地层</p>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-sm font-mono text-slate-400">5 KEY MODULES</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[380px]">
          {modules.map((mod) => {
            const isActive = activeId === mod.id;
            return (
              <motion.div
                key={mod.id}
                layout
                onHoverStart={() => setActiveId(mod.id)}
                onHoverEnd={() => setActiveId(null)}
                className={`relative rounded-3xl border border-black/5 overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
                  isActive ? 'lg:flex-[3] bg-black text-white' : 'lg:flex-[1] bg-white hover:bg-slate-50'
                }`}
              >
                <div className="p-6 h-full flex flex-col justify-between relative z-10">
                  <div className="flex justify-between items-start">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-black'
                    }`}>
                      <mod.icon className="w-5 h-5" />
                    </div>
                    <span className={`text-xs font-mono uppercase tracking-wider ${
                      isActive ? 'text-white/60' : 'text-slate-400'
                    }`}>
                      0{mod.id}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className={`text-xl font-bold whitespace-nowrap ${isActive ? 'text-white' : 'text-black'}`}>
                      {mod.title}
                    </h3>
                    
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0.6,
                        height: "auto"
                      }}
                      className="overflow-hidden"
                    >
                      <p className={`text-sm leading-relaxed ${isActive ? 'text-white/80' : 'text-slate-500 line-clamp-2'}`}>
                        {mod.desc}
                      </p>
                    </motion.div>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="pt-4"
                      >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-mono text-white/90 border border-white/10">
                          {mod.tag}
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
                
                {/* Background Decoration */}
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" 
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
