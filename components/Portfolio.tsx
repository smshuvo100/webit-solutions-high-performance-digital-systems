
import React, { useState } from 'react';
import { ChevronRight, Code2, Layers, Cpu, Database, Figma, Globe, MessageCircle } from 'lucide-react';
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

  return (
    <section id="portfolio" className="relative py-32 md:py-48 bg-[#01040a] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-yellow-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading Section */}
        <div className="text-center mb-24 space-y-4">
          <span className="text-[#3b82f6] font-black text-[12px] uppercase tracking-[0.4em]">Portfolio</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white">Our Work</h2>
        </div>

        {/* Tabs Section */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                activeTab === tab 
                ? 'bg-[#3b82f6] text-white border-[#3b82f6] shadow-[0_10px_30px_rgba(59,130,246,0.3)] scale-105' 
                : 'bg-white/5 text-white/40 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative flex flex-col bg-[#0c1018] border border-white/10 rounded-[3rem] overflow-hidden transition-all duration-700 hover:-translate-y-4 shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
            >
              {/* Card Header Content */}
              <div className="p-10 flex items-center justify-between relative z-10 bg-white/[0.02]">
                <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-[#3b82f6] transition-colors">{item.title}</h3>
                <div className="flex gap-2">
                  {item.tech.map((t, idx) => (
                    <TechIcon key={idx} type={t} />
                  ))}
                </div>
              </div>

              {/* Main Image Container */}
              <div className="relative aspect-video overflow-hidden px-8 pt-0">
                <div className="w-full h-full rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Subtle Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                </div>
              </div>

              {/* Metrics Section (Added below image as per screenshot) */}
              <div className="p-10 pt-8 flex flex-wrap gap-3 mt-auto">
                {item.metrics.map((metric, mIdx) => (
                  <div 
                    key={mIdx}
                    className="px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.3)] group-hover:border-[#3b82f6]/20 transition-all duration-500"
                  >
                    <span className="text-[10px] md:text-[11px] font-bold text-white/80 tracking-tight group-hover:text-white">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Light Streak */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                 <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent,rgba(59,130,246,0.03),transparent)] animate-[spin_20s_linear_infinite]" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-28 text-center">
          <button className="group relative px-16 py-8 rounded-2xl bg-white text-[#01040a] font-black text-[13px] uppercase tracking-[0.5em] hover:bg-[#3b82f6] hover:text-white transition-all duration-700 shadow-2xl active:scale-95 overflow-hidden">
            <span className="relative z-10 flex items-center gap-5">
              Explore All Results <ChevronRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
