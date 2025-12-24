
import React, { useMemo } from 'react';
import { TrendingUp, Cpu, Globe, Zap, Smartphone, Search, Target, Shield } from 'lucide-react';

const ConnectivitySection: React.FC = () => {
  const services = useMemo(() => [
    { title: 'WEB SYSTEMS', icon: <Globe />, x: -35, y: -25, color: '#F9A825', desc: 'SCALABLE INFRASTRUCTURE' },
    { title: 'MARKETING AI', icon: <Target />, x: 35, y: -25, color: '#3b82f6', desc: 'ROI DRIVEN AUTOMATION' },
    { title: 'SEO DOMINANCE', icon: <Search />, x: 45, y: 15, color: '#F9A825', desc: 'MARKET AUTHORITY' },
    { title: 'AI WORKFLOWS', icon: <Cpu />, x: -45, y: 15, color: '#3b82f6', desc: 'OPERATIONAL EFFICIENCY' },
    { title: 'APP ARCHITECTURE', icon: <Smartphone />, x: 0, y: 40, color: '#F9A825', desc: 'CUSTOM ECOSYSTEMS' },
  ], []);

  return (
    <section className="relative py-24 md:py-32 bg-[#01040a] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,43,91,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      </div>

      <div className="absolute top-12 left-12 animate-pulse hidden md:block">
        <div className="flex items-center gap-4 opacity-30">
          <div className="w-0.5 h-10 bg-blue-500" />
          <div>
            <div className="text-[9px] font-black tracking-[0.6em] text-blue-400 uppercase leading-none">Establishing Connection</div>
            <div className="text-[7px] font-mono text-white/20 mt-1 uppercase">PROTOCOL: BIG-DOG-V2.0</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        <div className="relative w-full aspect-square max-w-[650px] flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
            {services.map((s, i) => (
              <g key={i}>
                <polyline points={`50,50 ${50 + s.x * 0.4},50 ${50 + s.x * 0.4},${50 + s.y}`} fill="none" stroke="white" strokeWidth="0.1" strokeOpacity="0.08" />
                <polyline points={`50 + s.x * 0.4,50 ${50 + s.x},50 ${50 + s.x},${50 + s.y}`} fill="none" stroke="white" strokeWidth="0.1" strokeOpacity="0.08" />
                <circle r="0.3" fill={s.color} opacity="0.6">
                  <animateMotion dur={`${2.5 + i * 0.5}s`} repeatCount="indefinite" path={`M 50 50 L ${50 + s.x * 0.4} 50 L ${50 + s.x} ${50 + s.y}`} />
                </circle>
              </g>
            ))}
            <circle cx="50" cy="50" r="15" fill="none" stroke="blue" strokeWidth="0.05" strokeOpacity="0.1" />
          </svg>

          <div className="relative z-20 group">
            <div className="absolute inset-[-40px] border border-blue-500/05 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#0c1018] rounded-[2.5rem] rotate-[30deg] border border-white/10 shadow-2xl" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#002B5B] rounded-xl flex items-center justify-center mb-3 shadow-xl border border-white/10 group-hover:scale-110 transition-transform duration-700">
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-black text-white tracking-tighter leading-none">CORE</div>
                  <div className="text-[8px] font-black text-[#F9A825] tracking-[0.4em] uppercase mt-1">HUB ALPHA</div>
                </div>
              </div>
            </div>
          </div>

          {services.map((s, i) => (
            <div key={i} className="absolute group/node cursor-pointer" style={{ left: `${50 + s.x}%`, top: `${50 + s.y}%`, transform: 'translate(-50%, -50%)' }}>
              <div className="relative flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-[#0c1018] border border-white/08 rounded-2xl overflow-hidden shadow-xl group-hover/node:border-white/20 transition-all duration-500">
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-3">
                    <div className="mb-2 transition-all duration-500" style={{ color: s.color }}>{React.cloneElement(s.icon as React.ReactElement, { size: 24 })}</div>
                    <div className="text-center">
                      <div className="text-[8px] font-black text-white tracking-widest uppercase mb-1">{s.title}</div>
                      <div className="text-[6px] font-bold text-white/20 uppercase tracking-tighter group-hover/node:text-white/50 transition-colors">{s.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <div className="flex justify-center items-center gap-6 opacity-30">
             <div className="flex items-center gap-2"><Shield className="w-3 h-3 text-blue-500" /><span className="text-[8px] font-black uppercase tracking-widest text-white/50">Secure Tunneling</span></div>
             <div className="w-px h-3 bg-white/10" />
             <div className="flex items-center gap-2"><Zap className="w-3 h-3 text-[#F9A825]" /><span className="text-[8px] font-black uppercase tracking-widest text-white/50">Real-time Sync</span></div>
          </div>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white opacity-05 italic uppercase select-none">Scale Architecture</h3>
        </div>
      </div>
    </section>
  );
};

export default ConnectivitySection;
