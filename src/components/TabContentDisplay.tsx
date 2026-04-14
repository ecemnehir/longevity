import { motion } from 'motion/react';
import { Check, Clipboard, ExternalLink, BarChart3 } from 'lucide-react';
import { TabContent } from '../types';

interface TabContentDisplayProps {
  tab: TabContent;
  activeTabIndex: number;
  copiedId: string | null;
  onCopy: (text: string, id: string) => void;
}

export function TabContentDisplay({ tab, activeTabIndex, copiedId, onCopy }: TabContentDisplayProps) {
  return (
    <div className="p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-teal-dark mb-6 flex items-center">
        <span className="mr-3">{tab.title.split(' ')[0]}</span>
        {tab.title.split(' ').slice(1).join(' ')}
      </h2>

      {/* Step List */}
      {tab.steps && (
        <ul className="space-y-4 mb-8">
          {tab.steps.map((step, i) => (
            <li key={i} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-teal-dark/10 rounded-full flex items-center justify-center text-teal-dark font-bold text-xs">
                {i + 1}
              </div>
              <p className="text-slate-600 font-medium">{step}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Info Box */}
      {tab.infoBox && (
        <div className={`p-4 rounded-2xl mb-8 font-medium text-sm leading-relaxed ${
          tab.infoBox.type === 'green' 
            ? "bg-green-50 text-green-800 border border-green-100" 
            : "bg-amber-50 text-amber-800 border border-amber-100"
        }`}>
          <pre className="whitespace-pre-wrap font-sans">{tab.infoBox.text}</pre>
        </div>
      )}

      {/* Principles */}
      {tab.principles && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {tab.principles.map((p, i) => (
            <div key={i} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-xl">{p.icon}</span>
              <span className="font-semibold text-slate-700 text-sm">{p.text}</span>
            </div>
          ))}
        </div>
      )}

      {/* Prompts */}
      {tab.prompts && (
        <div className="space-y-8">
          {tab.prompts.map((prompt, i) => (
            <div key={i} className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className={`text-sm font-bold uppercase tracking-wider ${prompt.isExample ? 'text-amber-600' : 'text-slate-400'}`}>
                  {prompt.title}
                </h3>
                {prompt.note && (
                  <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-lg">
                    {prompt.note}
                  </span>
                )}
              </div>
              <div className="relative group">
                <pre className="bg-slate-900 text-slate-100 p-5 rounded-2xl text-sm overflow-x-auto leading-relaxed font-mono whitespace-pre-wrap">
                  {prompt.content}
                </pre>
                <button
                  onClick={() => onCopy(prompt.content, `${activeTabIndex}-${i}`)}
                  className={`absolute top-3 right-3 flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                    copiedId === `${activeTabIndex}-${i}`
                      ? "bg-green-500 text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/20 backdrop-blur-md"
                  }`}
                >
                  {copiedId === `${activeTabIndex}-${i}` ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>✅ Kopyalandı!</span>
                    </>
                  ) : (
                    <>
                      <Clipboard className="w-3.5 h-3.5" />
                      <span>📋 Kopyala</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Link Button */}
      {tab.link && (
        <div className="mt-8">
          <a
            href={tab.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full py-4 bg-linear-to-r from-green-start to-green-end text-white font-bold rounded-2xl shadow-xl shadow-green-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            {tab.name.includes("Grafik") ? <BarChart3 className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
            <span>{tab.linkText}</span>
          </a>
        </div>
      )}
    </div>
  );
}
