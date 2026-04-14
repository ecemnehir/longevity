import { TabContent } from '../types';

interface TabNavigationProps {
  tabs: TabContent[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

export function TabNavigation({ tabs, activeTab, setActiveTab }: TabNavigationProps) {
  return (
    <nav className="max-w-4xl mx-auto px-4 mb-8 overflow-x-auto no-scrollbar">
      <div className="flex space-x-2 pb-2 min-w-max">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
              activeTab === index 
                ? "bg-gold text-teal-deeper shadow-lg shadow-gold/20 scale-105" 
                : "bg-white/5 text-teal-100/70 hover:bg-white/10"
            }`}
          >
            {tab.icon}
            <span>{tab.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
