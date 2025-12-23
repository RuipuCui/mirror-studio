import { motion, useScroll, useTransform } from 'motion/react';
import { Quote, CheckCircle2, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export function PostPhilosophy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 px-6 relative bg-transparent text-black overflow-hidden min-h-[80vh] flex flex-col justify-center">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00000033_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Requirements List */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-sm font-mono uppercase tracking-widest text-black/60">Talent Requirements</h2>
            </div>
            <h3 className="text-4xl font-bold mb-10">为什么 MirrorPost 不是谁都能做？</h3>
            
            <div className="space-y-6">
              {[
                { text: "能理解技术 / 教育 / 产品，而不只是写字", sub: "Deep Understanding" },
                { text: "能听懂创始团队在想什么", sub: "Strategic Alignment" },
                { text: "能把复杂东西讲清楚而不降级", sub: "Clarity without Simplification" },
                { text: "有长期耐心，不急着要爆款", sub: "Long-term Mindset" }
              ].map((req, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1 w-6 h-6 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-black/90">{req.text}</p>
                    <p className="text-xs font-mono text-black/40 uppercase tracking-wider mt-1">{req.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Manifesto Quote */}
          <div className="order-1 lg:order-2 relative">
            <motion.div style={{ y, opacity }} className="absolute -top-20 -right-20 text-black/5 pointer-events-none select-none">
              <Quote size={300} />
            </motion.div>
            
            <div className="relative z-10">
              <blockquote className="text-3xl md:text-5xl font-serif leading-tight text-black/90">
                <span className="text-black/40">"</span>
                MirrorPost 不负责制造声量，<br/>
                它负责让 <span className="text-black border-b-2 border-black">WhiteMirror 的真实价值</span>，<br/>
                被世界正确看见。
                <span className="text-black/40">"</span>
              </blockquote>
              
              <div className="mt-12 flex items-center gap-4">
                <div className="h-px w-12 bg-black/30" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/50">Manifesto</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
