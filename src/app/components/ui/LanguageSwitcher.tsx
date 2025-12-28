import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Language } from "@/app/types/whitemirrorai";

interface LanguageSwitcherProps {
  language: Language;
  onToggle: () => void;
  className?: string;
}

export function LanguageSwitcher({ language, onToggle, className }: LanguageSwitcherProps) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "group relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-black/5 hover:border-black/20 transition-all duration-300 shadow-sm hover:shadow-md z-50",
        className
      )}
    >
      <Globe className="w-4 h-4 text-slate-500 group-hover:text-black transition-colors" />
      <div className="relative h-5 w-8 overflow-hidden">
        <motion.div
          initial={false}
          animate={{ y: language === "zh" ? -20 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex flex-col items-center"
        >
          <span className="h-5 flex items-center text-xs font-mono font-medium text-slate-600 group-hover:text-black">EN</span>
          <span className="h-5 flex items-center text-xs font-mono font-medium text-slate-600 group-hover:text-black">ZH</span>
        </motion.div>
      </div>
    </button>
  );
}
