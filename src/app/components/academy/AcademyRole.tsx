import { motion } from 'motion/react';
import { Database, FlaskConical, Layout, Share2 } from 'lucide-react';
import type { Language } from '@/app/types/whitemirrorai';

const roleMeta = [
  { icon: FlaskConical, label: "Lab" },
  { icon: Layout, label: "Studio" },
  { icon: Database, label: "Research" },
  { icon: Share2, label: "Post" },
];

export function AcademyRole({ language }: { language: Language }) {
  const content = {
    zh: {
      title: "Human OS Installer",
      desc: "Mirror Academy 是 WhiteMirror 的「人类操作系统安装器」，为整个生态输送能驾驭这一切的人。",
      center: {
        title: "Academy",
        sub: "Talent Engine"
      },
      roleDescs: ["发现方向", "实现系统", "抽象方法", "传播叙事"]
    },
    en: {
      title: "Human OS Installer",
      desc: "Mirror Academy is the 'Human OS Installer' for WhiteMirror, supplying people who can master all of this to the entire ecosystem.",
      center: {
        title: "Academy",
        sub: "Talent Engine"
      },
      roleDescs: ["Discover Direction", "Implement System", "Abstract Method", "Spread Narrative"]
    }
  };

  const t = content[language];
  const roles = roleMeta.map((role, i) => ({
    ...role,
    desc: t.roleDescs[i]
  }));

  return (
    <section className="py-24 px-6 relative border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">{t.title}</h2>
          <p className="text-xl text-slate-500 mb-16 max-w-2xl mx-auto">
            {t.desc}
          </p>

          <div className="relative flex flex-col items-center">
            {/* Academy Core */}
            <div className="relative z-20 w-48 h-48 rounded-full bg-black text-white flex flex-col items-center justify-center shadow-2xl shadow-black/30 mb-12">
              <div className="text-3xl font-bold mb-1">{t.center.title}</div>
              <div className="text-xs opacity-70 uppercase tracking-wider">{t.center.sub}</div>
              
              {/* Pulse Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-black animate-ping opacity-20" />
            </div>

            {/* Connections */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 w-full max-w-4xl">
              {roles.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`p-6 rounded-2xl border border-black/5 bg-white hover:border-black/20 transition-colors duration-300 flex flex-col items-center group`}
                >
                  <item.icon className={`w-8 h-8 mb-4 text-black group-hover:text-slate-600 transition-colors`} />
                  <div className="font-bold text-black mb-1">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Connecting Lines (Visual only) */}
            <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[80%] h-24 -z-10 hidden md:block">
               <svg className="w-full h-full overflow-visible">
                 <path d="M 50% 0 L 15% 100%" stroke="rgba(0,0,0,0.1)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                 <path d="M 50% 0 L 38% 100%" stroke="rgba(0,0,0,0.1)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                 <path d="M 50% 0 L 62% 100%" stroke="rgba(0,0,0,0.1)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                 <path d="M 50% 0 L 85% 100%" stroke="rgba(0,0,0,0.1)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
               </svg>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
