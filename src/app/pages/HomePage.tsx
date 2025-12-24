import { useRef, useState, useEffect, type MouseEvent } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowDown, ArrowRight, Users, User, Cpu, TrendingUp, Zap, X, Check } from "lucide-react";
import { Slide, SlideHeading, SlideSubheading } from "@/app/components/whitemirrorai/Slide";
import { AmbientSound } from "@/app/components/whitemirrorai/ui/AmbientSound";
import { HomeProgressBar } from "@/app/components/home/HomeProgressBar";
import { cn } from "@/lib/utils";
import type { Language } from "@/app/types/whitemirrorai";

const solutionSteps = [
  {
    key: "explore",
    zh: { title: "探索", subtitle: "Exploration", desc: "寻找新技术与范式" },
    en: { title: "Explore", subtitle: "Exploration", desc: "Search for new technologies and paradigms." },
  },
  {
    key: "productize",
    zh: { title: "产品化", subtitle: "Productization", desc: "验证与封装" },
    en: { title: "Productize", subtitle: "Productization", desc: "Validate and package into usable products." },
  },
  {
    key: "spread",
    zh: { title: "能力扩散", subtitle: "Capability Diffusion", desc: "教学与赋能" },
    en: { title: "Capability Diffusion", subtitle: "Capability Diffusion", desc: "Teach and enable others to replicate." },
  },
] as const;

const ecosystemUnits = [
  {
    id: "Research",
    zh: { idLabel: "研究", title: "MirrorResearch", desc: "探索新的技术方向与工作范式" },
    en: { idLabel: "Research", title: "MirrorResearch", desc: "Explore new technical directions and working paradigms." },
  },
  {
    id: "Labs",
    zh: { idLabel: "实验室", title: "MirrorLabs", desc: "在真实约束中验证假设，孵化原型" },
    en: { idLabel: "Labs", title: "MirrorLabs", desc: "Validate hypotheses under real constraints and incubate prototypes." },
  },
  {
    id: "Studio",
    zh: { idLabel: "工作室", title: "MirrorStudio", desc: "将技术力转化为产品与可复用资产" },
    en: { idLabel: "Studio", title: "MirrorStudio", desc: "Turn technical strength into products and reusable assets." },
  },
  {
    id: "Post",
    zh: { idLabel: "内容", title: "MirrorPost", desc: "对外表达成果与过程，建立信任" },
    en: { idLabel: "Content", title: "MirrorPost", desc: "Share results and process to build trust." },
  },
  {
    id: "Academy",
    zh: { idLabel: "学院", title: "MirrorAcademy", desc: "伴随项目扩散能力，固化训练体系" },
    en: { idLabel: "Academy", title: "MirrorAcademy", desc: "Spread capability alongside projects and codify training." },
  },
] as const;

const efficiencyCases = [
  {
    id: "comms",
    icon: TrendingUp,
    zh: {
      title: "宣发效率",
      subtitle: "Comms Efficiency",
      traditional: { time: "10天/人", dependency: "核心成员依赖", output: "单点内容", status: "低杠杆" },
      native: { time: "1小时", dependency: "全员复用流", output: "资产矩阵", status: "高倍杠杆" },
    },
    en: {
      title: "Comms Efficiency",
      subtitle: "Comms Efficiency",
      traditional: { time: "10 days/person", dependency: "Depend on core members", output: "One-off content", status: "Low leverage" },
      native: { time: "1 hour", dependency: "Reusable flow for everyone", output: "Asset matrix", status: "High scale" },
    },
  },
  {
    id: "collab",
    icon: Users,
    zh: {
      title: "协作效率",
      subtitle: "Collaboration Efficiency",
      traditional: { time: "同步会议", dependency: "人工传递", output: "信息偏差", status: "高摩擦" },
      native: { time: "决策把关", dependency: "AI 聚合拆解", output: "精准执行", status: "低摩擦" },
    },
    en: {
      title: "Collaboration Efficiency",
      subtitle: "Collaboration Efficiency",
      traditional: { time: "Sync meetings", dependency: "Manual relay", output: "Information loss", status: "High friction" },
      native: { time: "Decision checkpoints", dependency: "AI aggregation & decomposition", output: "Precise execution", status: "Zero friction" },
    },
  },
  {
    id: "dev",
    icon: Zap,
    zh: {
      title: "开发效率",
      subtitle: "Development Efficiency",
      traditional: { time: "工程化投入", dependency: "漫长试错", output: "高成本验证", status: "慢循环" },
      native: { time: "原型速验", dependency: "数据驱动", output: "高密度探索", status: "快速迭代" },
    },
    en: {
      title: "Development Efficiency",
      subtitle: "Development Efficiency",
      traditional: { time: "Heavy engineering", dependency: "Slow trial & error", output: "Expensive validation", status: "Slow cycle" },
      native: { time: "Rapid prototyping", dependency: "Data-driven", output: "High-density exploration", status: "Rapid iteration" },
    },
  },
] as const;

const businessModels = [
  {
    key: "ignite",
    zh: { phase: "启动 (Ignite)", type: "短期现金流", desc: "教学培训，To B项目开发，技术力输出", sub: "产生现金流、案例与人才" },
    en: { phase: "Ignite", type: "Short-term Cash Flow", desc: "Education, B2B project delivery, technical output", sub: "Generate cash flow, proof points, and talent" },
  },
  {
    key: "self-sustain",
    zh: { phase: "自驱 (Self-Sustain)", type: "长期价值", desc: "品牌软件订阅 (Branded Software Subscription)", sub: "将内部工具链产品化，形成可规模化的ARR" },
    en: { phase: "Self-Sustain", type: "Long-term Value", desc: "Branded software subscriptions", sub: "Productize internal toolchains into scalable ARR" },
  },
  {
    key: "accelerate",
    zh: { phase: "加速 (Accelerate)", type: "品牌资产", desc: "交付高质量项目，建立品牌信任", sub: "品牌资产积累" },
    en: { phase: "Accelerate", type: "Building the Brand", desc: "Deliver high-quality projects to earn trust", sub: "Accumulate brand equity" },
  },
] as const;

const contactTargets = [
  {
    key: "students",
    zh: { role: "面向学生", subtitle: "For Students", reward: "用最短的时间，把热情变成可验证的能力和作品。" },
    en: { role: "For Students", subtitle: "For Students", reward: "Turn passion into verifiable skills and portfolio fast." },
  },
  {
    key: "enterprises",
    zh: { role: "面向企业", subtitle: "For Enterprises", reward: "更快落地的 AI 系统、更低的试错成本，以及可沉淀为组织能力的方法论。" },
    en: { role: "For Enterprises", subtitle: "For Enterprises", reward: "Ship AI systems faster, reduce trial costs, and retain the methodology as org capability." },
  },
  {
    key: "investors",
    zh: { role: "面向投资人", subtitle: "For Investors", reward: "一种新的孵化器形态——更低筛选成本、更快验证节奏，以及把“技术潜力”持续转化为“产品与人才资产”的能力。" },
    en: { role: "For Investors", subtitle: "For Investors", reward: "A new incubator model—lower selection cost, faster validation cadence, and the ability to turn technical potential into product and talent assets." },
  },
] as const;

const copy = {
  zh: {
    hero: { tag: "AI 原生孵化中心", strap: "AI 时代的全新生产方式", caption: "用智能重塑生产方式" },
    manifesto: { line1: "AI 颠覆的不是岗位，", line2: "而是生产方式。" },
    problem: {
      heading: "行业困境",
      subheading: ["能力被系统性割裂。", "一个荒诞的三角，决定了效率的上限。"],
      researchTitle: "研究 (Research)",
      researchDesc: "离实际用户太远，成果难以产品化",
      enterpriseTitle: "企业 (Enterprise)",
      enterpriseDesc: "AI认知碎片化，难以沉淀组织资产",
      educationTitle: "教学 (Education)",
      educationDesc: "内容滞后于实践，能力无法形成闭环",
    },
    solution: { heading: "我们的解法", subheading: "产研学一体化流水线 · 效率优先", viewDetails: "查看详情" },
    ecosystem: { heading: "Ecosystem", lines: ["互相咬合的五个单元", "Interlocking Intelligence Modules"] },
    transformation: {
      heading: "效率的关键：AI把每个人变成六边形战士",
      traditionalTitle: "传统团队",
      researcher: "研究员",
      meeting: "会议/文档",
      pm: "产品经理",
      rework: "同步/返工",
      engineer: "工程师",
      build: "开发",
      traditionalNote: "流程割裂，沟通成本高",
      aiTitle: "WhiteMirror 成员",
      aiStatus: "AI接管重复工作，人专注判断与设计",
      engine: "引擎",
      hexCreator: "六边形创作者",
      status: "已部署",
    },
    philosophy: {
      headingTop: "真正的壁垒",
      tail: "是内化为组织的",
      highlight: "「生产认知」",
      description: "关键在于如何将工具组合成流水线，哪里必须人工把关，哪里可以全自动推进。这不是个人技能，而是组织能力。",
    },
    productPeople: { heading: "我们真正的产品，是人。", personWithLead: "AI 热情的", personWithMain: "创作者", rawInput: "原始输入", waiting: "等待升级" },
    efficiency: { heading: "10x Efficiency", subheading: "重塑生产关系的每一个环节", traditionalLabel: "传统模式", aiLabel: "AI 原生", time: "时间成本", dependency: "依赖", outcome: "产出" },
    business: { heading: "商业模式" },
    contact: { heading: "我们正在寻找同行者", subheading: "我们在探索AI时代的高效生产方式，并把它做成可复制的人才与系统。", footer: "WhiteMirror © 2025 · AI-Native Incubator" },
  },
  en: {
    hero: { tag: "AI-Native Incubator", strap: "A new production method for the AI era", caption: "Revolutionizing production with intelligence" },
    manifesto: { line1: "AI isn't replacing roles,", line2: "it's rewriting production." },
    problem: {
      heading: "Industry Challenges",
      subheading: ["Capabilities stay fragmented.", "An odd triangle caps efficiency."],
      researchTitle: "Research",
      researchDesc: "Too far from users; outcomes rarely become products.",
      enterpriseTitle: "Enterprise",
      enterpriseDesc: "Fragmented AI cognition prevents reusable assets.",
      educationTitle: "Education",
      educationDesc: "Content trails practice; skills never close the loop.",
    },
    solution: { heading: "Our Approach", subheading: "Integrated R&D × Product × Learning pipeline, efficiency-first", viewDetails: "View Details" },
    ecosystem: { heading: "Ecosystem", lines: ["Five interlocking units", "Interlocking Intelligence Modules"] },
    transformation: {
      heading: "The key to efficiency: everyone becomes a multi-skill player",
      traditionalTitle: "Traditional Team",
      researcher: "Researcher",
      meeting: "Meetings / Docs",
      pm: "Product Manager",
      rework: "Sync / Rework",
      engineer: "Engineer",
      build: "Build",
      traditionalNote: "Fragmented flow, high communication cost",
      aiTitle: "WhiteMirror Member",
      aiStatus: "AI handles repetition; humans focus on judgment and design",
      engine: "ENGINE",
      hexCreator: "Hexagonal Creator",
      status: "DEPLOYED",
    },
    philosophy: {
      headingTop: "The real moat",
      tail: "is the embedded",
      highlight: `"production cognition"`,
      description: "The crux is how tools chain into pipelines—where humans gatekeep and where full automation runs. It's not an individual skill; it's an organizational capability.",
    },
    productPeople: { heading: "Our true product is people.", personWithLead: "A person with", personWithMain: "AI Passion", rawInput: "RAW_INPUT", waiting: "WAITING_FOR_UPGRADE" },
    efficiency: { heading: "10x Efficiency", subheading: "Rewire every link in production", traditionalLabel: "Traditional", aiLabel: "AI-Native", time: "Time Cost", dependency: "Dependency", outcome: "Outcome" },
    business: { heading: "Business Model" },
    contact: { heading: "We are looking for partners", subheading: "We explore high-efficiency production in the AI era and turn it into replicable people and systems.", footer: "WhiteMirror © 2025 · AI-Native Incubator" },
  },
} as const;

function HeroSection({ language }: { language: Language }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const t = copy[language];

  return (
    <Slide id="hero" className="bg-black text-white relative" showBackground>
      <div ref={containerRef} className="relative z-10 flex flex-col justify-center h-full items-center text-center">
        <motion.div style={{ opacity, scale, y }} className="relative z-20">
          <motion.div
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-8 inline-block"
          >
            <span className="px-4 py-1.5 border border-white/20 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-md bg-white/5">
              {t.hero.tag}
            </span>
          </motion.div>

          <div className="relative">
            <SlideHeading className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter mix-blend-difference z-20 relative">
              WhiteMirror
            </SlideHeading>

            <div className="absolute top-full left-0 right-0 transform -scale-y-100 opacity-20 bg-gradient-to-b from-transparent to-black pointer-events-none blur-sm select-none">
              <span className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white">WhiteMirror</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 space-y-2"
          >
            <p className="text-xl md:text-3xl font-light text-zinc-300">{t.hero.strap}</p>
            <p className="text-sm md:text-base text-zinc-500 uppercase tracking-widest">{t.hero.caption}</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-500 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">
          {language === "zh" ? "下滑探索" : "Explore"}
        </span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </Slide>
  );
}

function ManifestoSection({ language }: { language: Language }) {
  const t = copy[language];
  return (
    <Slide id="manifesto" className="bg-black text-white" showBackground>
      <div className="flex flex-col items-start justify-center h-full max-w-6xl relative z-10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 1 }}
          className="h-1 bg-white mb-12 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        />
        <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold leading-tight tracking-tighter mix-blend-difference">
          <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="block text-zinc-500">
            {t.manifesto.line1}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500"
          >
            {t.manifesto.line2}
          </motion.span>
        </h2>
      </div>
    </Slide>
  );
}

function ProblemSection({ language }: { language: Language }) {
  const t = copy[language];
  const breakLines = (text: string) => text.split(/[，,;]\s*/).filter(Boolean);
  return (
    <Slide id="problem" className="bg-black text-white" showBackground>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full max-w-7xl mx-auto">
        <div className="order-2 lg:order-1">
          <SlideHeading>{t.problem.heading}</SlideHeading>
          <SlideSubheading>
            {t.problem.subheading[0]}
            <br />
            {t.problem.subheading[1]}
          </SlideSubheading>
        </div>

        <div className="relative h-[400px] w-full flex items-center justify-center order-1 lg:order-2">
          <svg viewBox="0 0 400 400" className="w-full max-w-md h-auto overflow-visible">
            <filter id="glow">
              <feGaussianBlur stdDeviation="5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <motion.path
              d="M200 100 L350 350 L50 350 Z"
              fill="transparent"
              stroke="white"
              strokeWidth="2"
              className="opacity-50"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            <g transform="translate(200, 100)">
              <motion.circle r="6" fill="white" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1 }} />
              <foreignObject x="-100" y="-90" width="200" height="80">
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="text-center">
                  <h3 className="font-bold text-lg text-white">{t.problem.researchTitle}</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    {breakLines(t.problem.researchDesc).map((segment, idx) => (
                      <span key={`${segment}-${idx}`}>
                        {segment}
                        {idx === 0 ? <br /> : null}
                      </span>
                    ))}
                  </p>
                </motion.div>
              </foreignObject>
            </g>

            <g transform="translate(350, 350)">
              <motion.circle r="6" fill="white" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.2 }} />
              <foreignObject x="20" y="0" width="200" height="80">
                <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.3 }} className="text-left">
                  <h3 className="font-bold text-lg text-white">{t.problem.enterpriseTitle}</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    {breakLines(t.problem.enterpriseDesc).map((segment, idx) => (
                      <span key={`${segment}-${idx}`}>
                        {segment}
                        {idx === 0 ? <br /> : null}
                      </span>
                    ))}
                  </p>
                </motion.div>
              </foreignObject>
            </g>

            <g transform="translate(50, 350)">
              <motion.circle r="6" fill="white" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.4 }} />
              <foreignObject x="-220" y="0" width="200" height="80">
                <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }} className="text-right">
                  <h3 className="font-bold text-lg text-white">{t.problem.educationTitle}</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    {breakLines(t.problem.educationDesc).map((segment, idx) => (
                      <span key={`${segment}-${idx}`}>
                        {segment}
                        {idx === 0 ? <br /> : null}
                      </span>
                    ))}
                  </p>
                </motion.div>
              </foreignObject>
            </g>
          </svg>
        </div>
      </div>
    </Slide>
  );
}

function SolutionSection({ language }: { language: Language }) {
  const t = copy[language];
  return (
    <Slide id="solution" className="bg-black text-white" showBackground>
      <div className="mb-16 relative z-10">
        <SlideHeading>{t.solution.heading}</SlideHeading>
        <SlideSubheading className="text-zinc-400">{t.solution.subheading}</SlideSubheading>
      </div>

      <div className="flex flex-col md:flex-row w-full relative max-w-7xl z-10 h-auto md:h-[500px] gap-2 md:gap-0">
        {solutionSteps.map((step, index) => {
          const content = step[language];
          return (
            <motion.div
              key={step.key}
              className="group relative flex-1 border border-white/10 bg-gradient-to-b from-white/5 to-black/50 backdrop-blur-sm overflow-hidden transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[2] md:min-w-[200px]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

              <div className="relative h-full p-8 md:p-12 flex flex-col justify-between z-10">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-xs font-mono text-white/50 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500">
                      0{index + 1}
                    </span>
                    <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-white/30 transition-colors duration-500" />
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-5xl font-light text-white mb-2 tracking-tight group-hover:tracking-normal transition-all duration-700">{content.title}</h3>
                    <p className="text-xs font-mono uppercase tracking-[0.4em] text-white/40 group-hover:text-white/70 transition-colors duration-500">{content.subtitle}</p>
                  </div>
                </div>

                <div className="md:max-w-md">
                  <div className="h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-white/50 to-transparent transition-all duration-700 delay-100 mb-6" />
                  <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transform md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-700 delay-100">
                    {content.desc}
                  </p>

                  <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white">{t.solution.viewDetails}</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <motion.div
                className="hidden md:block absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/50 to-transparent"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
              />
            </motion.div>
          );
        })}
      </div>
    </Slide>
  );
}

function EcosystemSection({ language, onNavigate }: { language: Language; onNavigate: (event: MouseEvent<HTMLAnchorElement | HTMLDivElement>, to: string) => void }) {
  const t = copy[language];
  return (
    <Slide id="ecosystem" className="bg-black text-white" showBackground>
      <div className="relative w-full h-full max-w-7xl mx-auto flex flex-col justify-center z-10">
        <div className="mb-12 md:mb-16 relative pl-6 border-l-2 border-white/20">
          <SlideHeading className="text-6xl md:text-8xl">{t.ecosystem.heading}</SlideHeading>
          <SlideSubheading className="text-zinc-400">
            {t.ecosystem.lines[0]} <br />
            <span className="text-sm font-mono uppercase tracking-widest text-zinc-600">{t.ecosystem.lines[1]}</span>
          </SlideSubheading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 w-full auto-rows-[240px]">
          {ecosystemUnits.map((unit, index) => {
            const content = unit[language];
            const isClickable = unit.id === "Research" || unit.id === "Studio";
            
            return (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={(e) => {
                  if (unit.id === "Research") onNavigate(e, "/mirror-research");
                  if (unit.id === "Studio") onNavigate(e, "/mirror-studio");
                }}
                className={`relative group overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-between hover:border-white/50 transition-colors duration-500 ${
                  isClickable ? "cursor-pointer" : ""
                } ${
                  index === 0 ? "md:col-span-6 lg:col-span-8 bg-gradient-to-br from-zinc-900/50 to-black" :
                  index === 1 ? "md:col-span-6 lg:col-span-4" :
                  "md:col-span-6 lg:col-span-4"
                }`}
              >
                <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none overflow-hidden">
                  {index === 0 && (
                    <svg className="w-full h-full absolute inset-0 animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                      <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
                      <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="0.5" fill="none" />
                      <line x1="10" y1="50" x2="90" y2="50" stroke="white" strokeWidth="0.2" />
                      <line x1="50" y1="10" x2="50" y2="90" stroke="white" strokeWidth="0.2" />
                    </svg>
                  )}
                  {index === 1 && (
                    <div className="w-full h-full flex flex-col gap-2 p-4">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-[2px] bg-white/50 w-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-1000"
                          style={{ transitionDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                  )}
                  {index === 2 && (
                    <svg className="w-full h-full absolute -right-10 -bottom-10" viewBox="0 0 100 100">
                      <rect x="20" y="20" width="60" height="60" stroke="white" strokeWidth="1" fill="none" className="group-hover:rotate-12 transition-transform duration-700 origin-center" />
                      <rect x="30" y="30" width="40" height="40" stroke="white" strokeWidth="0.5" fill="none" className="group-hover:-rotate-12 transition-transform duration-700 origin-center" />
                    </svg>
                  )}
                  {index > 2 && <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px]" />}
                </div>

                <div className="flex items-start justify-between relative z-10">
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-white/10 group-hover:text-white/30 transition-colors duration-500 font-mono">{content.idLabel}</span>
                    <span className="text-[10px] text-green-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      ● System Online
                    </span>
                  </div>
                  <div className="w-2 h-2 border border-white/50 group-hover:bg-white transition-all duration-300" />
                </div>

                <div className="relative z-10 mt-auto transform group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-300">
                    {content.title}
                  </h3>
                  <div className="relative overflow-hidden">
                    <div className="w-8 h-[1px] bg-white/50 mb-4 group-hover:w-full transition-all duration-700 ease-out" />
                    <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed group-hover:text-white transition-colors duration-300">{content.desc}</p>
                  </div>
                </div>

                <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500 pointer-events-none rounded-sm" />
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 group-hover:duration-200" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}

function TransformationSection({ language }: { language: Language }) {
  const t = copy[language];
  return (
    <Slide id="transformation" className="bg-black text-white" showBackground>
      <div className="w-full">
        <SlideHeading className="text-center mb-16 text-4xl md:text-6xl">{t.transformation.heading}</SlideHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 border border-zinc-800 rounded-lg bg-zinc-900/50 backdrop-blur-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            <div className="flex items-center gap-3 mb-6 text-zinc-500">
              <Users className="w-6 h-6" />
              <h3 className="text-xl font-bold">{t.transformation.traditionalTitle}</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-zinc-950/50 rounded border border-zinc-800/50">
                <span className="text-zinc-400">{t.transformation.researcher}</span>
                <ArrowRight className="w-4 h-4 text-zinc-700" />
                <span className="text-zinc-600 text-sm">{t.transformation.meeting}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-zinc-950/50 rounded border border-zinc-800/50">
                <span className="text-zinc-400">{t.transformation.pm}</span>
                <ArrowRight className="w-4 h-4 text-zinc-700" />
                <span className="text-zinc-600 text-sm">{t.transformation.rework}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-zinc-950/50 rounded border border-zinc-800/50">
                <span className="text-zinc-400">{t.transformation.engineer}</span>
                <ArrowRight className="w-4 h-4 text-zinc-700" />
                <span className="text-zinc-600 text-sm">{t.transformation.build}</span>
              </div>
            </div>
            <div className="mt-6 text-zinc-500 text-sm flex items-center gap-2">
              <X className="w-4 h-4" /> {t.transformation.traditionalNote}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 border border-white/20 rounded-lg bg-zinc-900/80 backdrop-blur-md relative overflow-hidden shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)]"
          >
            <div className="absolute top-0 right-0 p-3 bg-white text-black text-[10px] font-bold tracking-widest uppercase">
              {language === "zh" ? "AI 原生" : "AI-Native"}
            </div>
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-white" />
              <h3 className="text-xl font-bold text-white">{t.transformation.aiTitle}</h3>
            </div>

            <div className="flex items-center justify-center h-[180px] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="w-32 h-32 border border-dashed border-white/30 rounded-full" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="w-48 h-48 border border-dotted border-white/10 rounded-full absolute" />
              </div>
              <div className="text-center z-10">
                <div className="font-bold text-lg text-white">{t.transformation.hexCreator}</div>
                <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">Research + PM + Dev + Design</div>
              </div>
            </div>

            <div className="mt-6 text-white text-sm flex items-center gap-2 font-medium">
              <Check className="w-4 h-4" /> {t.transformation.aiStatus}
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

function PhilosophySection({ language }: { language: Language }) {
  const t = copy[language];
  return (
    <Slide id="philosophy" className="bg-black text-white" showBackground>
      <div className="max-w-5xl text-center relative z-10">
        <SlideHeading className="text-4xl md:text-6xl lg:text-7xl leading-tight">
          {t.philosophy.headingTop}
          <br />
          {t.philosophy.tail}
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"> {t.philosophy.highlight}</span>
        </SlideHeading>
        <SlideSubheading className="mx-auto mt-12 text-left md:text-center text-xl md:text-2xl leading-relaxed max-w-3xl text-zinc-400">
          {t.philosophy.description}
        </SlideSubheading>
      </div>
    </Slide>
  );
}

function ProductPeopleSection({ language }: { language: Language }) {
  const t = copy[language];
  const transformCopy = copy[language].transformation;

  return (
    <Slide id="product-people" className="bg-black text-white" showBackground>
      <div className="w-full max-w-7xl relative z-10">
        <SlideHeading className="text-center mb-24">{t.productPeople.heading}</SlideHeading>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 w-full perspective-[1000px]">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-500/50 to-transparent -translate-y-1/2 z-0 hidden md:block" />

          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group w-full md:w-[30%] h-[320px] z-10"
          >
            <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02] shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
              <motion.div
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-20"
              />

              <div className="h-full flex flex-col justify-between p-8 relative">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] text-zinc-500 tracking-[0.2em] font-mono border border-zinc-800 px-2 py-1 rounded">{t.productPeople.rawInput}</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-zinc-500 rounded-full animate-pulse" />
                    <div className="w-1 h-1 bg-zinc-500 rounded-full animate-pulse delay-75" />
                    <div className="w-1 h-1 bg-zinc-500 rounded-full animate-pulse delay-150" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                    <span className="text-xl">👤</span>
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-300 group-hover:text-white transition-colors">
                    <span className="text-zinc-500 text-lg block font-light mb-1">{t.productPeople.personWithLead}</span>
                    {t.productPeople.personWithMain}
                  </h3>
                </div>

                <div className="text-[10px] text-zinc-600 font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  {t.productPeople.waiting}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative z-20 md:mx-4">
            <motion.div initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} transition={{ duration: 1, type: "spring" }} className="w-40 h-40 md:w-56 md:h-56 relative flex items-center justify-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-dashed border-zinc-700 opacity-50" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-4 rounded-full border border-white/10 border-t-white/50 border-r-white/50 shadow-[0_0_20px_rgba(255,255,255,0.1)]" />

              <div className="relative w-24 h-24 bg-black rounded-full border border-white/20 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)] z-10 backdrop-blur-xl group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-900 to-black z-0" />
                <motion.div animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-radial-gradient from-white/20 to-transparent z-0" />

                <Cpu className="w-8 h-8 text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
                <span className="text-[8px] font-bold text-white/80 mt-1 relative z-10 tracking-widest">{transformCopy.engine}</span>
              </div>

              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  animate={{ x: [0, 10, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-12"
                >
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent opacity-50" />
                </motion.div>

                <motion.div
                  animate={{ x: [0, 10, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16"
                >
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent opacity-30" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative group w-full md:w-[35%] h-[360px] z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)]">
              <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
              <div className="absolute top-0 right-0 p-8 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="h-full flex flex-col justify-between p-8 relative z-10">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-[10px] font-bold text-white bg-white/20 px-3 py-1 rounded-full tracking-widest backdrop-blur-md">PRODUCT_PEOPLE</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse" />
                </div>

                <div className="flex-1 flex flex-col justify-center my-6">
                  <div className="relative mb-6">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-white via-white/50 to-transparent" />
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                      {transformCopy.hexCreator}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    {[language === "zh" ? "业务逻辑" : "Business Logic", language === "zh" ? "工程化" : "Engineering", language === "zh" ? "可复制" : "Replication"].map((skill) => (
                      <div key={skill} className="flex items-center gap-3 text-sm text-zinc-300 bg-white/5 p-2 rounded border border-white/5">
                        <div className="w-1.5 h-1.5 bg-white rotate-45" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{language === "zh" ? "状态" : "Status"}</span>
                    <span className="text-xs font-bold text-white tracking-wider">{transformCopy.status}</span>
                  </div>
                  <div className="text-4xl opacity-10 group-hover:opacity-30 transition-opacity">✦</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

function EfficiencySection({ language }: { language: Language }) {
  const [activeTab, setActiveTab] = useState(0);
  const t = copy[language];

  return (
    <Slide id="efficiency" className="bg-black text-white" showBackground>
      <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto">
        <div className="mb-12 md:mb-20">
          <SlideHeading>{t.efficiency.heading}</SlideHeading>
          <p className="text-zinc-400 text-xl font-light">{t.efficiency.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4 flex flex-col gap-2">
            {efficiencyCases.map((item, index) => {
              const content = item[language];
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className="group relative text-left py-6 px-4 transition-all duration-500"
                >
                  {activeTab === index && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-white/5 border-l-2 border-white backdrop-blur-sm"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <div
                    className={cn(
                      "relative z-10 flex items-center justify-between group-hover:translate-x-2 transition-transform duration-300",
                      activeTab === index ? "translate-x-2" : ""
                    )}
                  >
                    <div className="flex flex-col">
                      <span className={cn("text-2xl font-bold transition-colors", activeTab === index ? "text-white" : "text-zinc-600 group-hover:text-zinc-400")}>{content.title}</span>
                      <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 mt-1">{content.subtitle}</span>
                    </div>
                    <item.icon className={cn("w-6 h-6 transition-colors", activeTab === index ? "text-white" : "text-zinc-700")} />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="md:col-span-8 relative h-auto md:h-[500px] perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, rotateY: 10, x: 50 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                exit={{ opacity: 0, rotateY: -10, x: -50 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="w-full h-full border border-white/10 bg-zinc-900/40 backdrop-blur-xl p-8 md:p-12 relative overflow-hidden group"
              >
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 h-full relative z-10">
                  <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 pb-8 md:pb-0 md:pr-8 opacity-60 transition-opacity group-hover:opacity-40">
                    <div className="flex items-center gap-2 text-zinc-500 mb-8">
                      <X className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-[0.2em]">{t.efficiency.traditionalLabel}</span>
                    </div>

                    <div className="space-y-8 md:space-y-12 font-mono text-sm text-zinc-400">
                      <div>
                        <label className="block text-[10px] uppercase text-zinc-600 mb-2">{t.efficiency.time}</label>
                        <div className="text-xl line-through decoration-zinc-600">{efficiencyCases[activeTab][language].traditional.time}</div>
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase text-zinc-600 mb-2">{t.efficiency.dependency}</label>
                        <div>{efficiencyCases[activeTab][language].traditional.dependency}</div>
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase text-zinc-600 mb-2">{t.efficiency.outcome}</label>
                        <div>{efficiencyCases[activeTab][language].traditional.output}</div>
                      </div>
                    </div>

                    <div className="mt-8 md:mt-auto pt-8 border-t border-white/5 text-zinc-600 text-xs font-mono">
                      {language === "zh" ? "状态" : "STATUS"}: {efficiencyCases[activeTab][language].traditional.status}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between md:pl-4">
                    <div className="flex items-center gap-2 text-white mb-8">
                      <Check className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-[0.2em] font-bold">{t.efficiency.aiLabel}</span>
                    </div>

                    <div className="space-y-8 md:space-y-12">
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <label className="block text-[10px] uppercase text-zinc-500 mb-2">{t.efficiency.time}</label>
                        <div className="text-4xl md:text-5xl font-bold text-white tracking-tighter shadow-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                          {efficiencyCases[activeTab][language].native.time}
                        </div>
                      </motion.div>

                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <label className="block text-[10px] uppercase text-zinc-500 mb-2">{t.efficiency.dependency}</label>
                        <div className="text-xl md:text-2xl text-white font-light">{efficiencyCases[activeTab][language].native.dependency}</div>
                      </motion.div>

                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        <label className="block text-[10px] uppercase text-zinc-500 mb-2">{t.efficiency.outcome}</label>
                        <div className="text-xl md:text-2xl text-white font-light">{efficiencyCases[activeTab][language].native.output}</div>
                      </motion.div>
                    </div>

                    <div className="mt-8 md:mt-auto pt-8 border-t border-white/20 text-white text-xs font-mono flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      {language === "zh" ? "状态" : "STATUS"}: {efficiencyCases[activeTab][language].native.status}
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-black border border-zinc-800 rounded-full z-20 hidden md:block">
                  <ArrowRight className="w-4 h-4 text-zinc-500" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function BusinessModelSection({ language }: { language: Language }) {
  const t = copy[language];
  return (
    <Slide id="business-model" className="bg-black text-white" showBackground>
      <div className="w-full max-w-7xl relative z-10">
        <SlideHeading className="mb-20">{t.business.heading}</SlideHeading>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {businessModels.map((model, index) => {
            const content = model[language];
            return (
              <motion.div
                key={model.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="flex-1 w-full border-t border-zinc-800 pt-6 group hover:border-white transition-colors"
              >
                <div className="text-5xl font-bold mb-4 text-zinc-800 group-hover:text-white/20 transition-colors">0{index + 1}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">{content.phase}</h3>
                <p className="text-[10px] font-mono text-zinc-500 uppercase mb-6 tracking-widest border-b border-zinc-900 pb-2 inline-block">{content.type}</p>

                <p className="text-lg font-medium mb-2 text-zinc-300 group-hover:text-white transition-colors">{content.desc}</p>
                <p className="text-zinc-600 text-sm group-hover:text-zinc-500 transition-colors">{content.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}

function ContactSection({ language }: { language: Language }) {
  const t = copy[language];
  return (
    <Slide id="contact" className="bg-black text-white" showBackground>
      <div className="w-full max-w-7xl relative z-10">
        <SlideHeading className="mb-8">{t.contact.heading}</SlideHeading>
        <SlideSubheading className="mb-16 text-zinc-500">{t.contact.subheading}</SlideSubheading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactTargets.map((target, index) => {
            const content = target[language];
            return (
              <motion.div
                key={target.key}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-zinc-900/50 backdrop-blur-md p-8 rounded border border-zinc-800 flex flex-col justify-between h-[350px] hover:bg-zinc-800/80 hover:border-zinc-600 transition-all duration-300 group cursor-pointer"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-white transition-colors">{content.role}</h3>
                  <p className="text-[10px] font-mono text-zinc-600 uppercase mb-8 tracking-widest">{content.subtitle}</p>
                  <p className="text-zinc-400 leading-relaxed text-sm group-hover:text-zinc-200 transition-colors">{content.reward}</p>
                </div>

                <div className="flex justify-end">
                  <div className="p-2 rounded-full border border-transparent group-hover:border-zinc-600 transition-colors">
                    <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 text-center text-zinc-700 text-xs font-mono uppercase tracking-widest">{t.contact.footer}</div>
      </div>
    </Slide>
  );
}

export function HomePage({ onNavigate, language }: { onNavigate: (event: MouseEvent<HTMLAnchorElement | HTMLDivElement>, to: string) => void, language: Language }) {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const savedPosition = sessionStorage.getItem("homePageScrollPosition");
    if (savedPosition && mainRef.current) {
      requestAnimationFrame(() => {
        if (mainRef.current) {
          mainRef.current.scrollTop = parseInt(savedPosition, 10);
        }
      });
    }
  }, []);

  const handleScroll = () => {
    if (mainRef.current) {
      sessionStorage.setItem("homePageScrollPosition", mainRef.current.scrollTop.toString());
    }
  };

  return (
    <main 
      ref={mainRef}
      onScroll={handleScroll}
      className="relative h-screen w-full overflow-y-auto md:snap-y md:snap-mandatory scroll-smooth bg-black [&::-webkit-scrollbar]:hidden"
    >
      <AmbientSound />
      <HeroSection language={language} />
      <ManifestoSection language={language} />
      <ProblemSection language={language} />
      <SolutionSection language={language} />
      <EcosystemSection language={language} onNavigate={onNavigate} />
      <TransformationSection language={language} />
      <PhilosophySection language={language} />
      <ProductPeopleSection language={language} />
      <EfficiencySection language={language} />
      <BusinessModelSection language={language} />
      <ContactSection language={language} />

      <HomeProgressBar />
    </main>
  );
}
