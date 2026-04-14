import { Hospital, BarChart3, Instagram, BookOpen } from 'lucide-react';
import { FooterLinkProps } from '../types';

export function Footer() {
  return (
    <footer className="bg-teal-deeper/50 backdrop-blur-md border-t border-white/5 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <FooterLink 
            href="https://chatgpt.com/g/g-GKsuaDZUU-longevity-guide" 
            label="Longevity Guide" 
            icon={<Hospital className="w-4 h-4" />}
          />
          <FooterLink 
            href="https://chatgpt.com/g/g-SZqNg3QPk-msproject-pro" 
            label="MS Project Pro" 
            icon={<BarChart3 className="w-4 h-4" />}
          />
          <FooterLink 
            href="https://www.instagram.com/longevity.story/" 
            label="Instagram" 
            icon={<Instagram className="w-4 h-4" />}
          />
          <FooterLink 
            href="https://notebooklm.google.com/" 
            label="NotebookLM" 
            icon={<BookOpen className="w-4 h-4" />}
          />
        </div>
        <div className="text-center space-y-2">
          <p className="text-teal-100/40 text-xs font-bold uppercase tracking-widest">
            Hazırlayan: Cemil Aksel | Üretken Yapay Zeka Eğitimi
          </p>
          <p className="text-teal-100/20 text-[10px]">
            &copy; 2026 Longevity Guide GPT Prompt Koleksiyonu. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label, icon }: FooterLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all group"
    >
      <div className="mb-2 text-teal-100/60 group-hover:text-gold transition-colors">
        {icon}
      </div>
      <span className="text-[10px] md:text-xs font-bold text-teal-100/80 text-center">{label}</span>
    </a>
  );
}
