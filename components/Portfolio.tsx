
import React, { useState } from 'react';
import { ChevronRight, Code2, Layers, Cpu, Database, Figma, Globe, MessageCircle, ArrowRight } from 'lucide-react';
import { PORTFOLIO_NEW } from '../constants';

const TechIcon: React.FC<{ type: string }> = ({ type }) => {
  const icons: Record<string, React.ReactNode> = {
    node: <div className="bg-black text-white p-1 rounded-md"><Code2 size={12} /></div>,
    next: <div className="bg-black text-white p-1 rounded-md font-black text-[8px]">N</div>,
    postgres: <div className="bg-black text-white p-1 rounded-md"><Database size={12} /></div>,
    wp: <div className="bg-black text-white p-1 rounded-md font-black text-[8px]">W</div>,
    php: <div className="bg-black text-white p-1 rounded-md font-black text-[8px]">php</div>,
    elementor: <div className="bg-black text-white p-1 rounded-md font-black text-[8px]">E</div>,
    react: <div className="bg-black text-white p-1 rounded-md"><Globe size={12} /></div>,
    tailwind: <div className="bg-black text-white p-1 rounded-md"><Layers size={12} /></div>,
  };
  return icons[type] || null;
};

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Web System', 'WordPress', 'SEO', 'Automation'];

  const filteredItems = activeTab === 'All' 
    ? PORTFOLIO_NEW 
    : PORTFOLIO_NEW.filter(item => item.category === activeTab);

  const btnClass = "bg-[#F9A825] text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-[0.2em] hover:bg-[#ffb63a] shadow-[0_20px_40px_-10px_rgba(249,168,37,0.4)] active:scale-95 flex items-center justify-center gap-3 transition-all";

  return (
    <section id="portfolio" className="relative py-16 md:py-24 bg-[#01040a] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/03 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-yellow-600/03 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-2">
          <span className="text-[#3b82f6] font-black text-[10px] uppercase tracking-[0.4em]">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Our Work</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-300 border ${
                activeTab === tab 
                ? 'bg-[#3b82f6] text-white border-[#3b82f6] shadow-lg shadow-blue-500/20 scale-105' 
                : 'bg-white/5 text-white/30 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative flex flex-col bg-[#0c1018] border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:-translate-y-2 shadow-2xl">
              <div className="p-8 flex items-center justify-between relative z-10 bg-white/[0.01]">
                <h3 className="text-xl font-black tracking-tight text-white group-hover:text-[#3b82f6] transition-colors">{item.title}</h3>
                <div className="flex gap-1.5">{item.tech.map((t, idx) => (<TechIcon key={idx} type={t} />))}</div>
              </div>
              <div className="relative aspect-video overflow-hidden px-6 pt-0">
                <div className="w-full h-full rounded-2xl overflow-hidden border border-white/5 shadow-xl relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
              </div>
              <div className="p-8 pt-6 flex flex-wrap gap-2 mt-auto">
                {item.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] shadow-sm group-hover:border-[#3b82f6]/20 transition-all">
                    <span className="text-[9px] font-bold text-white/60 tracking-tight group-hover:text-white">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center flex justify-center">
          <button className={btnClass}>
             Explore All Results <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
