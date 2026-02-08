import React, { useState, useEffect } from 'react';
import { Users, FileText, Calendar } from 'lucide-react';
import { TabView } from './types';
import FandomDashboard from './components/FandomDashboard';
import ContentDashboard from './components/ContentDashboard';
import { dashboardData } from './data';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabView>(TabView.FANDOM);
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    // Set current date dynamically
    const today = new Date();
    const formatted = `${today.getFullYear()}. ${String(today.getMonth() + 1).padStart(2, '0')}. ${String(today.getDate()).padStart(2, '0')}`;
    setCurrentDate(formatted);
  }, []);

  return (
    <div className="min-h-screen bg-[#F3F5F9] text-slate-800 pb-20">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">
            {/* Logo - Updated to text-only style based on image */}
            <div className="flex items-center z-10">
              <span className="font-logo text-4xl font-normal tracking-tight text-brand cursor-pointer select-none">
                Celebeauty
              </span>
            </div>

            {/* Tabs - Centered using absolute positioning */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex bg-slate-100 p-1 rounded-lg">
                <button
                  onClick={() => setActiveTab(TabView.FANDOM)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === TabView.FANDOM
                      ? 'bg-white text-brand shadow-sm'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <Users size={16} />
                  팬덤 지표 분석
                </button>
                <button
                  onClick={() => setActiveTab(TabView.CONTENT)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === TabView.CONTENT
                      ? 'bg-white text-brand shadow-sm'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <FileText size={16} />
                  채널 핵심 콘텐츠 분석
                </button>
              </div>
            </div>

            {/* Meta Info - Dynamic Date */}
            <div className="hidden md:flex items-center gap-4 text-xs text-slate-400 font-medium z-10">
              <div className="text-right">
                <p className="uppercase tracking-wider">Last Updated</p>
                <div className="flex items-center justify-end gap-1 text-slate-600">
                  <Calendar size={12} />
                  <span>{currentDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        {activeTab === TabView.FANDOM ? <FandomDashboard data={dashboardData.fandom} /> : <ContentDashboard data={dashboardData.content} />}
      </main>
    </div>
  );
};

export default App;