import { motion } from 'motion/react';

interface ProgressBarProps {
  progress: number;
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ progress, currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 mb-8">
      <div className="bg-white/10 rounded-full h-2 overflow-hidden mb-2">
        <motion.div 
          className="h-full bg-linear-to-r from-green-start to-green-end"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="flex justify-between text-[10px] md:text-xs font-bold uppercase tracking-wider text-teal-100/60">
        <span>Başlangıç</span>
        <span>Adım {currentStep} / {totalSteps}</span>
        <span>Hedef</span>
      </div>
    </div>
  );
}
