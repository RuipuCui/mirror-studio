import { motion } from 'motion/react';
import { ArrowRight, GitMerge, GitBranch } from 'lucide-react';
import type { Language } from '@/app/types/whitemirrorai';

const content = {
  zh: {
    title: "生态位关系",
    subtitle: "Lab 如何与其他部门协作",
    studio: {
      from: "Mirror Lab",
      to: "Mirror Studio",
      title: "Promote (晋升)",
      desc: "当 Lab 验证了一个想法「值得做」且「路径清晰」时，它会被移交给 Studio 进行工程化落地。",
      output: "Output: Validated MVP"
    },
    research: {
      from: "Mirror Research",
      to: "Mirror Lab",
      title: "Inspire (启发)",
      desc: "Research 提供的方向性结论和技术白名单，是 Lab 选题的重要输入来源。",
      input: "Input: Direction Memo"
    }
  },
  en: {
    title: "Ecosystem Relations",
    subtitle: "How Lab collaborates with other teams",
    studio: {
      from: "Mirror Lab",
      to: "Mirror Studio",
      title: "Promote",
      desc: "When Lab proves an idea is worth doing with a clear path, it hands it to Studio for engineering delivery.",
      output: "Output: Validated MVP"
    },
    research: {
      from: "Mirror Research",
      to: "Mirror Lab",
      title: "Inspire",
      desc: "Research outputs and technical white-lists are key inputs for Lab topics.",
      input: "Input: Direction Memo"
    }
  }
};

export function LabRelations({ language }: { language: Language }) {
  const t = content[language];
  return (
    <section className="py-24 px-6 relative bg-transparent border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t.title}</h2>
          <p className="text-slate-500">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Studio Relation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black to-transparent" />
            
            <div className="flex items-center gap-4 mb-6 w-full justify-center">
              <span className="font-bold text-lg">{t.studio.from}</span>
              <ArrowRight className="text-slate-300" />
              <span className="font-bold text-lg text-black/50">{t.studio.to}</span>
            </div>
            
            <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
              <GitMerge className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold mb-2">{t.studio.title}</h3>
            <p className="text-slate-600 mb-4">
              {t.studio.desc}
            </p>
            <div className="text-xs font-mono bg-black/5 px-3 py-1 rounded-full text-slate-500">
              {t.studio.output}
            </div>
          </motion.div>

          {/* Research Relation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent" />

            <div className="flex items-center gap-4 mb-6 w-full justify-center">
              <span className="font-bold text-lg text-black/50">{t.research.from}</span>
              <ArrowRight className="text-slate-300" />
              <span className="font-bold text-lg">{t.research.to}</span>
            </div>

            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
              <GitBranch className="w-8 h-8 text-blue-500 group-hover:text-white" />
            </div>

            <h3 className="text-xl font-bold mb-2">{t.research.title}</h3>
            <p className="text-slate-600 mb-4">
              {t.research.desc}
            </p>
            <div className="text-xs font-mono bg-blue-50 px-3 py-1 rounded-full text-blue-600">
              {t.research.input}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
