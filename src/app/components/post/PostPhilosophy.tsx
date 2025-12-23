import { motion } from 'motion/react';
import { Quote, CheckCircle2 } from 'lucide-react';

export function PostPhilosophy() {
  return (
    <section className="py-24 px-6 relative bg-transparent border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Requirements */}
          <div>
            <h2 className="text-4xl font-bold text-black mb-8">对人的要求</h2>
            <p className="text-slate-600 mb-8">为什么 MirrorPost 不是谁都能做？</p>
            
            <div className="space-y-4">
              {[
                "能理解技术 / 教育 / 产品，而不只是写字",
                "能听懂创始团队在想什么",
                "能把复杂东西讲清楚而不降级",
                "有长期耐心，不急着要爆款"
              ].map((req, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-black shrink-0" />
                  <span className="text-slate-700 font-medium">{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-black/5">
              <Quote size={120} />
            </div>
            <blockquote className="relative text-2xl md:text-3xl font-light leading-relaxed text-black/80 italic z-10">
              "MirrorPost 不负责制造声量，<br/>
              它负责让 WhiteMirror 的真实价值，<br/>
              被世界正确看见。"
            </blockquote>
            <div className="mt-6 flex items-center gap-4 relative z-10">
              <div className="w-12 h-1 bg-black" />
              <span className="text-sm font-bold uppercase tracking-widest text-black/40">Mirror Post Manifesto</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
