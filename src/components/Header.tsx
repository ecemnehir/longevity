import { Hospital } from 'lucide-react';

export function Header() {
  return (
    <header className="pt-8 pb-6 px-4 text-center">
      <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-4 backdrop-blur-sm">
        <Hospital className="w-8 h-8 text-gold" />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-gold mb-2 tracking-tight">
        Longevity Guide - IF ve Kilo Takibi
      </h1>
      <p className="text-teal-100/80 text-sm md:text-base font-medium">
        Prof. Dr. Müftüoğlu | Peakspan | 5 Altın Kural
      </p>
    </header>
  );
}
