import { motion } from 'motion/react';
import { Layers, PenTool, Image, Share, RefreshCw } from 'lucide-react';

const modules = [
  {
    icon: Layers,
    title: "内容资产",
    subtitle: "Content Layer",
    desc: "项目解读、方法论文章、Showcase 拆解、团队成员视角输出。",
    tag: "真实、长期、可回看"
  },
  {
    icon: PenTool,
    title: "叙事结构",
    subtitle: "Narrative Layer",
    desc: "我们在解决什么问题？为什么这样做？如何一步步推进？",
    tag: "CMO + CSO 级工作"
  },
  {
    icon: Image,
    title: "视觉与统一表达",
    subtitle: "Visual Layer",
    desc: "海报、网站、PPT、Landing Page。一眼看上去，就知道这是同一个组织。",
    tag: "统一识别度"
  },
  {
    icon: Share,
    title: "渠道分发",
    subtitle: "Distribution Layer",
    desc: "Website, Notion, 小红书, Twitter, LinkedIn。内容没立住，发哪里都没用。",
    tag: "触达窗口"
  },
  {
    icon: RefreshCw,
    title: "内部协同接口",
    subtitle: "Internal Sync",
    desc: "紧贴 Labs, Studio, Research, LearningOS。不是外宣部门，是组织的对外接口层。",
    tag: "关键核心"
  }
];

export function PostModules() {
  return (
    <section className="py-24 px-6 relative bg-transparent border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">工作模块</h2>
          <p className="text-slate-500">MirrorPost 的具体落地层</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-white border border-black/5 hover:border-black/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                  <mod.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-slate-400 uppercase">{mod.subtitle}</span>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-3">{mod.title}</h3>
              <p className="text-slate-600 text-sm mb-6 min-h-[40px]">{mod.desc}</p>
              
              <div className="inline-block px-2 py-1 rounded bg-slate-100 text-xs font-medium text-slate-600">
                {mod.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
