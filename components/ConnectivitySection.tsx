
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
    <section className="relative py-48 md:py-72 bg-[#01040a] overflow-hidden border-t border-white/5">
      {/* 1. BACKGROUND GRID & AMBIENCE */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,43,91,0.15)_0%,transparent_70%)]" />
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }}
        />
      </div>

      {/* 2. HUD OVERLAYS (CORNERS) */}
      <div className="absolute top-12 left-12 md:top-24 md:left-24 animate-pulse">
        <div className="flex items-center gap-4">
          <div className="w-1 h-12 bg-blue-500" />
          <div>
            <div className="text-[10px] font-black tracking-[0.6em] text-blue-400 uppercase">Establishing Connection</div>
            <div className="text-[8px] font-mono text-white/30">PROTOCOL: BIG-DOG-V2.0</div>
            <div className="flex gap-1 mt-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-blue-500/40 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 md:bottom-24 md:right-24 text-right opacity-40">
        <div className="text-[10px] font-black tracking-[0.6em] text-[#F9A825] uppercase mb-1">C-LINK STATUS</div>
        <div className="text-3xl md:text-5xl font-black text-white/10 tracking-tighter uppercase font-outfit">Synchronized</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        
        <div className="relative w-full aspect-square max-w-[800px] flex items-center justify-center">
          
          {/* 3. SVG CIRCUITRY LAYER */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
            <defs>
              <filter id="glow-stable">
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Circuit Paths with 90-degree bends */}
            {services.map((s, i) => (
              <g key={i}>
                {/* Static Path */}
                <polyline
                  points={`50,50 ${50 + s.x * 0.4},50 ${50 + s.x * 0.4},${50 + s.y}`}
                  fill="none"
                  stroke="white"
                  strokeWidth="0.15"
                  strokeOpacity="0.1"
                />
                <polyline
                  points={`50 + s.x * 0.4,50 ${50 + s.x},50 ${50 + s.x},${50 + s.y}`}
                  fill="none"
                  stroke="white"
                  strokeWidth="0.15"
                  strokeOpacity="0.1"
                />
                
                {/* Animated Data Packets (Dots) */}
                <circle r="0.4" fill={s.color} filter="url(#glow-stable)">
                  <animateMotion
                    dur={`${2.5 + i * 0.5}s`}
                    repeatCount="indefinite"
                    path={`M 50 50 L ${50 + s.x * 0.4} 50 L ${50 + s.x} ${50 + s.y}`}
                  />
                </circle>
              </g>
            ))}

            {/* Decorative Grid Lines within the Circuitry */}
            <circle cx="50" cy="50" r="15" fill="none" stroke="blue" strokeWidth="0.05" strokeOpacity="0.2" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="blue" strokeWidth="0.05" strokeOpacity="0.1" />
          </svg>

          {/* 4. CENTRAL HEXAGON CORE (Reference: B-DEFEND) */}
          <div className="relative z-20 group">
            {/* Rotating Tech Rings */}
            <div className="absolute inset-[-60px] border border-blue-500/10 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-[-40px] border-t border-b border-[#F9A825]/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
            
            {/* Hexagon Shape Container */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#0c1018] rounded-[3rem] rotate-[30deg] border border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.2)]" />
              <div className="absolute inset-2 bg-[#0c1018] rounded-[2.8rem] rotate-[30deg] border border-white/5" />
              
              {/* Internal Content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#002B5B] rounded-2xl flex items-center justify-center mb-4 shadow-2xl border border-white/10 group-hover:scale-110 transition-transform duration-700">
                  <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-none">CORE</div>
                  <div className="text-[10px] font-black text-[#F9A825] tracking-[0.4em] uppercase mt-1">HUB ALPHA</div>
                </div>
                {/* Pulsing Scan Line */}
                <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/20 to-transparent animate-scan" />
                </div>
              </div>
            </div>
          </div>

          {/* 5. SERVICE PROCESSOR NODES */}
          {services.map((s, i) => (
            <div 
              key={i}
              className="absolute group/node cursor-pointer"
              style={{ left: `${50 + s.x}%`, top: `${50 + s.y}%`, transform: 'translate(-50%, -50%)' }}
            >
              <div className="relative flex flex-col items-center">
                {/* Node Box */}
                <div className="w-28 h-28 md:w-36 md:h-36 bg-[#0c1018] border border-white/10 rounded-2xl overflow-hidden shadow-2xl group-hover/node:border-white/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
                  
                  {/* Internal Grid */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[size:10px_10px] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]" />

                  {/* Icon & Label */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
                    <div className="mb-3 text-white/50 group-hover/node:text-white group-hover/node:scale-110 transition-all duration-500" style={{ color: s.color }}>
                      {React.cloneElement(s.icon as React.ReactElement, { size: 32, strokeWidth: 1.5 })}
                    </div>
                    <div className="text-center">
                      <div className="text-[9px] font-black text-white tracking-widest uppercase mb-1">{s.title}</div>
                      <div className="text-[6px] font-bold text-white/30 uppercase tracking-tighter group-hover/node:text-white/60 transition-colors">
                        {s.desc}
                      </div>
                    </div>
                  </div>

                  {/* Hexagon Frame Effect (On Hover) */}
                  <div className="absolute inset-[-10px] border border-blue-400/0 group-hover/node:border-blue-400/20 rounded-3xl transition-all duration-500 rotate-12 scale-90 group-hover/node:scale-100" />
                </div>

                {/* Vertical "Establishment" Marker */}
                <div className="absolute -bottom-6 flex flex-col items-center opacity-40 group-hover/node:opacity-100 transition-opacity">
                  <div className="w-px h-6 bg-gradient-to-b from-white to-transparent" />
                  <div className="text-[7px] font-mono text-white/50 tracking-tighter">NODE_ID_{i+1}0X</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION FOOTER CONTENT */}
        <div className="mt-32 text-center space-y-6">
          <div className="flex justify-center items-center gap-8">
             <div className="flex items-center gap-2">
               <Shield className="w-4 h-4 text-blue-500" />
               <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Secure Tunneling</span>
             </div>
             <div className="w-px h-4 bg-white/10" />
             <div className="flex items-center gap-2">
               <Zap className="w-4 h-4 text-[#F9A825]" />
               <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Real-time Sync</span>
             </div>
          </div>
          <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-white opacity-10 italic uppercase select-none">
            Scale Architecture
          </h3>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        .animate-scan {
          animation: scan 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default ConnectivitySection;
