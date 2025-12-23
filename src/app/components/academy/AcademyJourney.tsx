import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Terminal, GitCommit, Cpu, Rocket } from 'lucide-react';

// --- Visual Components ---

function ScanVisual() {
  return (
    <div className="relative w-64 h-64 mx-auto rounded-full bg-white border-2 border-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 p-8">
        {Array.from({ length: 36 }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-black rounded-sm"
            animate={{ opacity: [0.1, 1, 0.1] }}
            transition={{ duration: 2, delay: i * 0.05, repeat: Infinity }}
          />
        ))}
      </div>
      <motion.div 
        className="absolute w-full h-0.5 bg-black"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <Terminal className="w-12 h-12 text-black relative z-10" />
    </div>
  );
}

function WorkflowVisual() {
  return (
    <div className="relative w-64 h-64 mx-auto rounded-full bg-white border-2 border-black overflow-hidden flex items-center justify-center">
      <motion.div 
        className="absolute w-32 h-32 rounded-full border border-black"
        animate={{ scale: [1, 1.5], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div 
        className="absolute w-20 h-20 rounded-full border border-black"
        animate={{ scale: [1, 1.5], opacity: [1, 0] }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
      />
      <Cpu className="w-12 h-12 text-black relative z-10" />
      
      {/* Orbiting dots */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-black rounded-full"
          animate={{ rotate: 360 }}
          style={{ offsetPath: "path('M 0 -50 A 50 50 0 1 1 0 50 A 50 50 0 1 1 0 -50')", offsetDistance: "0%" }}
          transition={{ duration: 3, delay: i, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

function CodeVisual() {
  return (
    <div className="relative w-64 h-64 mx-auto rounded-full bg-white border-2 border-black overflow-hidden flex flex-col items-center justify-center gap-3 p-8">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="w-full h-3 bg-black rounded-full"
          initial={{ width: "20%" }}
          whileInView={{ width: `${Math.random() * 60 + 40}%` }}
          transition={{ duration: 1, delay: i * 0.2 }}
        />
      ))}
      <GitCommit className="absolute bottom-8 right-8 w-8 h-8 text-black" />
    </div>
  );
}

function LaunchVisual() {
  return (
    <div className="relative w-64 h-64 mx-auto rounded-full bg-white border-2 border-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-24 bg-gradient-to-b from-black to-transparent origin-bottom"
            style={{ rotate: deg, bottom: '50%' }}
            animate={{ height: [0, 80, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
          />
        ))}
      </div>
      <Rocket className="w-12 h-12 text-black relative z-10" />
    </div>
  );
}

const steps = [
  {
    id: "01",
    title: "Initialization",
    subtitle: "Profile & Assessment",
    icon: Terminal,
    desc: "学员进入系统，进行能力扫描与思维模式评估。建立初始「能力镜像」。",
    details: ["Cognitive Pattern Scan", "Tech Stack Audit", "Goal Alignment"],
    visual: ScanVisual
  },
  {
    id: "02",
    title: "Calibration",
    subtitle: "AI-Native Workflow",
    icon: Cpu,
    desc: "重塑工作流。从「手写代码」切换到「指挥 AI」。掌握 Prompt Engineering 与 Context Management。",
    details: ["Cursor / Copilot Mastery", "Agent Orchestration", "System Thinking"],
    visual: WorkflowVisual
  },
  {
    id: "03",
    title: "Simulation",
    subtitle: "Real-World Execution",
    icon: GitCommit,
    desc: "进入实战模拟。领取真实需求，在导师（Tech Lead）的 Code Review 下完成交付。",
    details: ["MVP Development", "Production Deployment", "Iterative Feedback"],
    visual: CodeVisual
  },
  {
    id: "04",
    title: "Deployment",
    subtitle: "Ecosystem Integration",
    icon: Rocket,
    desc: "能力固化。带着真实的项目交付记录，被输送到 Mirror Lab 或 Studio 成为核心贡献者。",
    details: ["Portfolio Verification", "Network Access", "Full-Time Offer"],
    visual: LaunchVisual
  }
];

export function AcademyJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 px-6 relative border-t border-black/5 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">The Simulation Path</h2>
          <p className="text-slate-500 text-lg">从「学员」到「构建者」的进化路径</p>
        </div>

        <div className="relative">
          {/* Central Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/20 -translate-x-1/2 hidden md:block overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-black/40 to-transparent"
              animate={{ top: ["-50%", "150%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Snake Curve (Desktop Only) */}
          <div className="absolute inset-0 hidden md:block pointer-events-none z-0">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M 50 0 
                   C 50 6, 25 6, 25 12
                   C 25 24, 75 24, 75 37
                   C 75 50, 25 50, 25 62
                   C 25 74, 75 74, 75 87
                   C 75 94, 50 94, 50 100"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeOpacity="0.1"
                strokeDasharray="4 4"
                vectorEffect="non-scaling-stroke"
              />
              <motion.path
                d="M 50 0 
                   C 50 6, 25 6, 25 12
                   C 25 24, 75 24, 75 37
                   C 75 50, 25 50, 25 62
                   C 25 74, 75 74, 75 87
                   C 75 94, 50 94, 50 100"
                fill="none"
                stroke="#000000"
                strokeWidth="3"
                style={{ pathLength }}
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {/* Mobile Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-black/20 md:hidden overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-black/40 to-transparent"
              animate={{ top: ["-50%", "150%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="space-y-32 relative z-10">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* Left Side */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'hidden md:block pr-24' : 'pl-20 md:pl-0 md:pr-24 md:text-right'}`}>
                    {!isEven ? (
                      // Odd: Content Left
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
                    ) : (
                      // Even: Visual Left
                      <div className="hidden md:block">
                        <step.visual />
                      </div>
                    )}
                  </div>

                  {/* Center Point */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white border border-black/10 shadow-lg z-10 group">
                    <div className="absolute inset-0 rounded-full bg-black/5 scale-0 group-hover:scale-150 transition-transform duration-500" />
                    <step.icon className="w-6 h-6 text-black relative z-10" />
                  </div>

                  {/* Right Side */}
                  <div className={`w-full md:w-1/2 ${!isEven ? 'hidden md:block pl-24' : 'pl-20 md:pl-24'}`}>
                    {isEven ? (
                      // Even: Content Right
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
                    ) : (
                      // Odd: Visual Right
                      <div className="hidden md:block">
                        <step.visual />
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
