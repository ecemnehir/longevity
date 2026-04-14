import { useState } from 'react';
import { TABS_DATA } from '../data/tabsData';

export function useLongevityApp() {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const nextTab = () => {
    setActiveTab(prev => Math.min(TABS_DATA.length - 1, prev + 1));
  };

  const prevTab = () => {
    setActiveTab(prev => Math.max(0, prev - 1));
  };

  return {
    activeTab,
    setActiveTab,
    copiedId,
    handleCopy,
    nextTab,
    prevTab,
    tabs: TABS_DATA,
    currentTab: TABS_DATA[activeTab],
    progress: ((activeTab + 1) / TABS_DATA.length) * 100
  };
}
