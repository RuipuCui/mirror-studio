import { motion } from 'motion/react';
import { ArrowRight, GitMerge, GitBranch } from 'lucide-react';

export function LabRelations() {
  return (
    <section className="py-24 px-6 relative bg-transparent border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">生态位关系</h2>
          <p className="text-slate-500">Lab 如何与其他部门协作</p>
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
              <span className="font-bold text-lg">Mirror Lab</span>
              <ArrowRight className="text-slate-300" />
              <span className="font-bold text-lg text-black/50">Mirror Studio</span>
            </div>
            
            <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
              <GitMerge className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold mb-2">Promote (晋升)</h3>
            <p className="text-slate-600 mb-4">
              当 Lab 验证了一个想法「值得做」且「路径清晰」时，它会被移交给 Studio 进行工程化落地。
            </p>
            <div className="text-xs font-mono bg-black/5 px-3 py-1 rounded-full text-slate-500">
              Output: Validated MVP
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
              <span className="font-bold text-lg text-black/50">Mirror Research</span>
              <ArrowRight className="text-slate-300" />
              <span className="font-bold text-lg">Mirror Lab</span>
            </div>

            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
              <GitBranch className="w-8 h-8 text-blue-500 group-hover:text-white" />
            </div>

            <h3 className="text-xl font-bold mb-2">Inspire (启发)</h3>
            <p className="text-slate-600 mb-4">
              Research 提供的方向性结论和技术白名单，是 Lab 选题的重要输入来源。
            </p>
            <div className="text-xs font-mono bg-blue-50 px-3 py-1 rounded-full text-blue-600">
              Input: Direction Memo
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
