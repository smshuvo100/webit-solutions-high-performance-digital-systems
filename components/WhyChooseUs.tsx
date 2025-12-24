
import React from 'react';
import { TrendingUp, Cpu, DollarSign, Activity, Zap, Target, MousePointer2 } from 'lucide-react';

const LeadGraph = () => (
  <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
    <defs>
      <linearGradient id="leadGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F9A825" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#F9A825" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path 
      d="M 0 35 Q 15 32, 25 25 T 45 30 T 65 10 T 85 18 T 100 2" 
      fill="url(#leadGrad)" 
      className="animate-pulse"
    />
    <path 
      d="M 0 35 Q 15 32, 25 25 T 45 30 T 65 10 T 85 18 T 100 2" 
      fill="none" 
      stroke="#F9A825" 
      strokeWidth="2" 
      strokeDasharray="200" 
      strokeDashoffset="200"
      className="animate-chart-path"
    />
    {[25, 65, 100].map((x, i) => (
      <circle key={i} cx={x} cy={x === 25 ? 25 : x === 65 ? 10 : 2} r="1.5" fill="#F9A825" className="animate-ping" style={{ animationDelay: `${i * 0.5}s` }} />
    ))}
  </svg>
);

const AIGraph = () => (
  <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
    <g opacity="0.2">
      <circle cx="50" cy="20" r="15" fill="none" stroke="#F9A825" strokeWidth="0.5" strokeDasharray="2 2" className="animate-spin-slow" />
      <circle cx="50" cy="20" r="10" fill="none" stroke="#F9A825" strokeWidth="0.5" strokeDasharray="4 4" className="animate-spin-reverse" />
    </g>
    <line x1="0" y1="20" x2="100" y2="20" stroke="#F9A825" strokeWidth="0.2" strokeOpacity="0.3" />
    <path d="M 10 20 Q 25 5, 40 20 T 70 20 T 100 20" fill="none" stroke="#F9A825" strokeWidth="1.5" className="animate-pulse" />
    <rect x="48" y="5" width="4" height="30" fill="#F9A825" opacity="0.1" className="animate-scan-horizontal" />
    <circle cx="50" cy="20" r="2" fill="#F9A825">
      <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const RevenueGraph = () => (
  <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
    {[15, 35, 55, 75, 95].map((x, i) => (
      <rect 
        key={i} 
        x={x - 4} 
        y={40 - (15 + i * 5)} 
        width="8" 
        height={15 + i * 5} 
        fill="#F9A825" 
        className="animate-bar-grow" 
        style={{ animationDelay: `${i * 0.1}s`, transformOrigin: 'bottom' }} 
        opacity={0.3 + i * 0.15} 
        rx="1"
      />
    ))}
    <path 
      d="M 5 35 L 95 5" 
      stroke="#F9A825" 
      strokeWidth="1" 
      strokeDasharray="4 2" 
      className="animate-chart-path"
      style={{ strokeDasharray: 150, strokeDashoffset: 150 }}
    />
  </svg>
);

const WhyChooseUs: React.FC = () => {
  const stats = [
    { 
      label: 'Leads Generated', 
      value: '2K', 
      icon: <Activity className="w-4 h-4" />,
      graph: <LeadGraph />,
      desc: 'High-intent conversion systems.'
    },
    { 
      label: 'AI Automations', 
      value: '400%', 
      icon: <Cpu className="w-4 h-4" />,
      graph: <AIGraph />,
      desc: 'Autonomous lead qualification.'
    },
    { 
      label: 'Revenue This Month', 
      value: '$2,478', 
      icon: <DollarSign className="w-4 h-4" />,
      graph: <RevenueGraph />,
      desc: 'Predictable recurring growth.'
    }
  ];

  return (
    <section id="why-choose" className="py-24 md:py-40 px-4 relative overflow-hidden bg-gradient-to-b from-transparent via-slate-900/10 to-transparent">
      {/* Immersive Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#F9A825]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[9px] font-black uppercase tracking-[0.4em] text-[#F9A825]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F9A825] animate-ping" />
            Performance Metrics
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-tight">
            Engineered to <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20 italic">Outperform.</span>
          </h2>
        </div>

        {/* Laptop / Screen Mockup */}
        <div className="relative mx-auto max-w-6xl group">
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-12 bg-black/90 blur-3xl opacity-80" />
          
          <div className="relative rounded-[2rem] md:rounded-[3rem] p-2 md:p-3 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 shadow-2xl overflow-hidden border border-white/5">
            <div className="relative bg-[#080c14] rounded-[1.8rem] md:rounded-[2.8rem] p-8 md:p-16 border border-white/5 overflow-hidden">
              <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                <div className="flex flex-col items-center text-center mb-12 space-y-4">
                  <div className="px-5 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/30 text-[10px] font-black uppercase tracking-widest">
                    Webit Ltd // Analytics
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none">
                    Market-Leading Systems
                  </h3>
                  <p className="text-white/30 font-medium text-base leading-relaxed max-w-xl">
                    Real-time visualization of your path to market dominance through data-backed decisions.
                  </p>
                </div>

                {/* Advanced Analytics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  {stats.map((stat, i) => (
                    <div key={i} className="group/card relative flex flex-col p-8 bg-slate-950/40 border border-white/5 rounded-[2rem] text-left transition-all duration-700 hover:border-[#F9A825]/40 hover:bg-slate-950/60 hover:-translate-y-2">
                      <div className="flex justify-between items-start mb-6">
                        <div className="space-y-1">
                          <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">{stat.label}</span>
                          <div className="text-2xl font-black text-white tracking-tighter flex items-center gap-2">
                             {stat.value}
                             <TrendingUp className="w-4 h-4 text-green-500 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                          </div>
                        </div>
                        <div className="p-2.5 bg-white/5 rounded-xl text-[#F9A825] group-hover/card:bg-[#F9A825] group-hover/card:text-slate-950 transition-all duration-500 shadow-xl">
                          {stat.icon}
                        </div>
                      </div>
                      
                      {/* Custom Visualization Area */}
                      <div className="mt-4 h-28 w-full relative bg-white/[0.02] rounded-xl overflow-hidden border border-white/5 p-4">
                        {stat.graph}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-[8px] font-bold text-white/30 uppercase tracking-tighter">
                          {stat.desc}
                        </span>
                        <Zap className="w-3 h-3 text-[#F9A825] opacity-20" />
                      </div>

                      {/* Card Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Background Digital Grid */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                   style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)`, backgroundSize: '30px 30px' }} />
            </div>
          </div>

          {/* Device Chassis Base */}
          <div className="relative mt-[-2px] mx-auto w-[98%] h-6 bg-gradient-to-b from-slate-600 to-slate-900 rounded-b-[1.25rem] shadow-2xl flex items-center justify-center border-t border-white/10">
            <div className="w-24 h-1.5 bg-black/20 rounded-full" />
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6">
           <button onClick={() => scrollTo('cta')} className="group relative px-10 py-6 rounded-xl bg-[#F9A825] text-white font-black text-lg hover:bg-[#ffb63a] transition-all shadow-xl active:scale-95 flex items-center gap-3">
             View Case Studies
             <MousePointer2 className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </button>
           <div className="flex items-center gap-6 opacity-30 text-[9px] font-black uppercase tracking-[0.4em] text-white">
             <span className="flex items-center gap-2 tracking-widest"><Target className="w-4 h-4" /> VERIFIED ROI</span>
             <span className="flex items-center gap-2 tracking-widest"><Zap className="w-4 h-4" /> 24/7 MONITORING</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
