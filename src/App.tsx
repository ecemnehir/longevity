/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimatePresence, motion } from 'motion/react';
import { useLongevityApp } from './hooks/useLongevityApp';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { TabNavigation } from './components/TabNavigation';
import { TabContentDisplay } from './components/TabContentDisplay';
import { Footer } from './components/Footer';

export default function App() {
  const {
    activeTab,
    setActiveTab,
    copiedId,
    handleCopy,
    nextTab,
    prevTab,
    tabs,
    currentTab,
    progress
  } = useLongevityApp();

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-dark to-teal-deeper text-white font-sans selection:bg-gold selection:text-teal-dark">
      <Header />

      <ProgressBar 
        progress={progress} 
        currentStep={activeTab + 1} 
        totalSteps={tabs.length} 
      />

      <TabNavigation 
        tabs={tabs} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      <main className="max-w-4xl mx-auto px-4 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden text-slate-800"
          >
            <TabContentDisplay 
              tab={currentTab} 
              activeTabIndex={activeTab} 
              copiedId={copiedId} 
              onCopy={handleCopy} 
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevTab}
            className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
              activeTab === 0 
                ? "opacity-0 pointer-events-none" 
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Geri
          </button>
          <button
            onClick={nextTab}
            className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
              activeTab === tabs.length - 1 
                ? "opacity-0 pointer-events-none" 
                : "bg-gold text-teal-deeper hover:scale-105"
            }`}
          >
            Sonraki Adım
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
