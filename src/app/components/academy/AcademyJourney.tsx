import { motion } from 'motion/react';
import { Terminal, GitCommit, Cpu, Rocket } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Initialization",
    subtitle: "Profile & Assessment",
    icon: Terminal,
    desc: "学员进入系统，进行能力扫描与思维模式评估。建立初始「能力镜像」。",
    details: ["Cognitive Pattern Scan", "Tech Stack Audit", "Goal Alignment"]
  },
  {
    id: "02",
    title: "Calibration",
    subtitle: "AI-Native Workflow",
    icon: Cpu,
    desc: "重塑工作流。从「手写代码」切换到「指挥 AI」。掌握 Prompt Engineering 与 Context Management。",
    details: ["Cursor / Copilot Mastery", "Agent Orchestration", "System Thinking"]
  },
  {
    id: "03",
    title: "Simulation",
    subtitle: "Real-World Execution",
    icon: GitCommit,
    desc: "进入实战模拟。领取真实需求，在导师（Tech Lead）的 Code Review 下完成交付。",
    details: ["MVP Development", "Production Deployment", "Iterative Feedback"]
  },
  {
    id: "04",
    title: "Deployment",
    subtitle: "Ecosystem Integration",
    icon: Rocket,
    desc: "能力固化。带着真实的项目交付记录，被输送到 Mirror Lab 或 Studio 成为核心贡献者。",
    details: ["Portfolio Verification", "Network Access", "Full-Time Offer"]
  }
];

export function AcademyJourney() {
  return (
    <section className="py-32 px-6 relative border-t border-black/5 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">The Simulation Path</h2>
          <p className="text-slate-500 text-lg">从「学员」到「构建者」的进化路径</p>
        </div>

        <div className="relative">
          {/* Central Line (Desktop) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-black/5 md:-translate-x-1/2 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-black/40 to-transparent"
              animate={{ top: ["-50%", "150%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Left Side (Content for Odd, Empty for Even) */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'hidden md:block' : 'pl-20 md:pl-0 md:pr-16 md:text-right'}`}>
                    {!isEven && (
                      <div className="flex flex-col md:items-end group">
                        <div className="text-8xl font-bold text-black/5 mb-[-2rem] z-0 font-mono select-none transition-colors duration-500 group-hover:text-black/10">
                          {step.id}
                        </div>
                        <div className="relative z-10 flex flex-col md:items-end">
                          <h3 className="text-3xl font-bold text-black mb-3">{step.title}</h3>
                          <div className="inline-block text-xs font-mono uppercase tracking-wider text-slate-500 mb-6 bg-slate-100 px-3 py-1 rounded border border-slate-200">
                            {step.subtitle}
                          </div>
                          <p className="text-slate-600 leading-relaxed mb-6 max-w-md text-lg">
                            {step.desc}
                          </p>
                          <ul className="space-y-3 flex flex-col md:items-end">
                            {step.details.map((detail, j) => (
                              <li key={j} className="text-sm text-slate-500 flex items-center gap-3 justify-end">
                                {detail}
                                <span className="w-1.5 h-1.5 rounded-full bg-black/20 group-hover:bg-black/60 transition-colors" />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center Point */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white border border-black/10 shadow-lg z-10 group">
                    <div className="absolute inset-0 rounded-full bg-black/5 scale-0 group-hover:scale-150 transition-transform duration-500" />
                    <step.icon className="w-6 h-6 text-black relative z-10" />
                  </div>

                  {/* Right Side (Content for Even, Empty for Odd) */}
                  <div className={`w-full md:w-1/2 ${!isEven ? 'hidden md:block' : 'pl-20 md:pl-16'}`}>
                    {isEven && (
                      <div className="flex flex-col items-start group">
                        <div className="text-8xl font-bold text-black/5 mb-[-2rem] z-0 font-mono select-none transition-colors duration-500 group-hover:text-black/10">
                          {step.id}
                        </div>
                        <div className="relative z-10 flex flex-col items-start">
                          <h3 className="text-3xl font-bold text-black mb-3">{step.title}</h3>
                          <div className="inline-block text-xs font-mono uppercase tracking-wider text-slate-500 mb-6 bg-slate-100 px-3 py-1 rounded border border-slate-200">
                            {step.subtitle}
                          </div>
                          <p className="text-slate-600 leading-relaxed mb-6 max-w-md text-lg text-left">
                            {step.desc}
                          </p>
                          <ul className="space-y-3">
                            {step.details.map((detail, j) => (
                              <li key={j} className="text-sm text-slate-500 flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-black/20 group-hover:bg-black/60 transition-colors" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
