
import React from 'react';
import { TrendingUp, Cpu, DollarSign, Activity, Zap, Target, MousePointer2, ArrowRight } from 'lucide-react';

const LeadGraph = () => (
  <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
    <defs><linearGradient id="leadGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F9A825" stopOpacity="0.3" /><stop offset="100%" stopColor="#F9A825" stopOpacity="0" /></linearGradient></defs>
    <path d="M 0 35 Q 15 32, 25 25 T 45 30 T 65 10 T 85 18 T 100 2" fill="url(#leadGrad)" className="animate-pulse" />
    <path d="M 0 35 Q 15 32, 25 25 T 45 30 T 65 10 T 85 18 T 100 2" fill="none" stroke="#F9A825" strokeWidth="2" strokeDasharray="200" strokeDashoffset="200" className="animate-chart-path" />
  </svg>
);

const AIGraph = () => (
  <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
    <g opacity="0.1"><circle cx="50" cy="20" r="12" fill="none" stroke="#F9A825" strokeWidth="0.5" strokeDasharray="2 2" className="animate-spin-slow" /></g>
    <path d="M 10 20 Q 25 5, 40 20 T 70 20 T 100 20" fill="none" stroke="#F9A825" strokeWidth="1.5" className="animate-pulse" />
  </svg>
);

const RevenueGraph = () => (
  <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
    {[15, 35, 55, 75, 95].map((x, i) => (
      <rect key={i} x={x - 3} y={40 - (12 + i * 4)} width="6" height={12 + i * 4} fill="#F9A825" className="animate-bar-grow" style={{ animationDelay: `${i * 0.1}s`, transformOrigin: 'bottom' }} opacity={0.2 + i * 0.12} rx="1" />
    ))}
  </svg>
);

const WhyChooseUs: React.FC = () => {
  const stats = [
    { label: 'Leads Generated', value: '2K', icon: <Activity className="w-4 h-4" />, graph: <LeadGraph />, desc: 'High-intent conversion systems.' },
    { label: 'AI Automations', value: '400%', icon: <Cpu className="w-4 h-4" />, graph: <AIGraph />, desc: 'Autonomous lead qualification.' },
    { label: 'Revenue Growth', value: '$2,478', icon: <DollarSign className="w-4 h-4" />, graph: <RevenueGraph />, desc: 'Predictable recurring growth.' }
  ];

  const btnClass = "bg-[#F9A825] text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-[0.2em] hover:bg-[#ffb63a] shadow-[0_20px_40px_-10px_rgba(249,168,37,0.4)] active:scale-95 flex items-center justify-center gap-3 transition-all";

  return (
    <section id="why-choose" className="py-20 md:py-28 px-4 relative overflow-hidden bg-[#01040a]">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#F9A825]/5 blur-[100px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[8px] font-black uppercase tracking-[0.5em] text-[#F9A825]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F9A825] animate-ping" />
            Operational Alpha
          </div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
            Engineered to <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20 italic">Outperform.</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl group">
          <div className="relative rounded-[2rem] md:rounded-[3rem] p-1.5 md:p-3 bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 shadow-2xl overflow-hidden">
            <div className="relative bg-[#080c14] rounded-[1.8rem] md:rounded-[2.8rem] p-8 md:p-14 border border-white/5 overflow-hidden">
              <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <div className="flex flex-col items-center text-center mb-10 space-y-4">
                  <div className="px-5 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/30 text-[9px] font-black uppercase tracking-widest">Webit Ltd // Growth Engine</div>
                  <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none">Market-Leading Analytics</h3>
                  <p className="text-white/20 font-medium text-base leading-relaxed max-w-xl">We replace uncertainty with data. Our systems provide real-time visualization of your path to market dominance.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  {stats.map((stat, i) => (
                    <div key={i} className="group/card relative flex flex-col p-6 bg-black/40 border border-white/05 rounded-[1.8rem] text-left transition-all duration-700 hover:border-[#F9A825]/30 hover:bg-black/60 hover:-translate-y-2">
                      <div className="flex justify-between items-start mb-4">
                        <div className="space-y-1">
                          <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">{stat.label}</span>
                          <div className="text-2xl font-black text-white tracking-tighter">{stat.value}</div>
                        </div>
                        <div className="p-2.5 bg-white/5 rounded-xl text-[#F9A825] group-hover/card:bg-[#F9A825] group-hover/card:text-black transition-all">
                          {React.cloneElement(stat.icon as React.ReactElement, { size: 14 })}
                        </div>
                      </div>
                      <div className="mt-2 h-24 w-full relative bg-white/[0.01] rounded-xl overflow-hidden border border-white/05 p-3">{stat.graph}</div>
                      <div className="mt-4 flex items-center justify-between"><span className="text-[8px] font-bold text-white/30 uppercase tracking-tighter">{stat.desc}</span><Zap className="w-3 h-3 text-[#F9A825] opacity-10" /></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
           <button className={btnClass}>
             View Case Studies <ArrowRight className="w-5 h-5" />
           </button>
           <div className="flex items-center gap-4 opacity-20 text-[9px] font-black uppercase tracking-[0.4em] text-white">
             <span className="flex items-center gap-2"><Target className="w-4 h-4" /> VERIFIED ROI</span>
             <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> 24/7 MONITORING</span>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes chart-path { to { stroke-dashoffset: 0; } }
        @keyframes bar-grow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        .animate-chart-path { animation: chart-path 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-bar-grow { animation: bar-grow 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
