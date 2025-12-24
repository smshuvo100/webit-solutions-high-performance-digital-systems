
import React from 'react';
import { INTEGRATIONS } from '../constants';
import { TrendingUp } from 'lucide-react';

const Integrations: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden bg-[#01040a]">
      {/* Immersive Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,_rgba(0,43,91,0.15)_0%,_rgba(249,168,37,0.06)_30%,_transparent_70%)] blur-[140px]" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center space-y-16">
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-[9px] font-black uppercase tracking-[0.4em] text-[#F9A825] shadow-[0_0_20px_rgba(249,168,37,0.1)]">
            Powerful Integrations
          </div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white">
            Seamlessly Integrate <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F9A825] to-white/40 italic">Every App</span>
          </h2>
        </div>

        {/* Central Orb Area - slightly scaled down */}
        <div className="relative h-[400px] md:h-[550px] flex items-center justify-center">
          <div className="absolute w-56 h-56 md:w-[380px] md:h-[380px] rounded-full group cursor-pointer flex items-center justify-center z-20">
            <div className="absolute inset-[-40px] bg-[#002B5B]/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute inset-0 rounded-full glass-card border-white/20 shadow-[0_0_80px_rgba(0,43,91,0.4)] overflow-hidden">
              <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,_transparent,_rgba(0,210,255,0.1),_transparent,_rgba(249,168,37,0.1),_transparent)] animate-[spin_15s_linear_infinite]" />
              <div className="absolute inset-[25%] bg-[#002B5B] rounded-full blur-[40px] opacity-60" />
            </div>

            <div className="relative z-30 flex flex-col items-center gap-2 animate-float-slow">
              <div className="bg-[#002B5B] p-4 rounded-2xl shadow-xl border border-white/10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                <TrendingUp className="w-8 h-8 md:w-12 md:h-12 text-white" />
              </div>
              <div className="flex flex-col items-center -space-y-1">
                <span className="text-2xl font-black tracking-tighter uppercase text-[#F9A825]">Web IT</span>
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/50">Solutions</span>
              </div>
            </div>
          </div>

          {/* Floating Icons Ring */}
          <div className="absolute inset-0 pointer-events-none group-icons">
            {INTEGRATIONS.map((item, idx) => {
              const angle = (idx / INTEGRATIONS.length) * 2 * Math.PI - (Math.PI / 2);
              const radius = window.innerWidth < 768 ? 160 : 260; 
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div 
                  key={idx}
                  className="absolute top-1/2 left-1/2 flex items-center justify-center animate-orbital"
                  style={{ 
                    '--x': `${x}px`,
                    '--y': `${y}px`,
                    animationDelay: `${idx * 0.15}s`,
                    animationDuration: `${5 + Math.random() * 2}s`
                  } as React.CSSProperties}
                >
                  <div 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-2xl glass-card flex items-center justify-center pointer-events-auto hover:scale-125 hover:-rotate-12 transition-all duration-500 cursor-pointer shadow-xl group border-white/10"
                    style={{ borderColor: `${item.color}33` }}
                  >
                    <div style={{ color: item.color }} className="transition-all duration-500 group-hover:drop-shadow-[0_0_10px_currentColor]">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 24, className: 'w-6 h-6 md:w-8 md:h-8' })}
                    </div>
                    <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all bg-white text-black text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap shadow-xl border-b-2" style={{ borderBottomColor: item.color }}>
                      {item.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pt-4">
          <button className="group relative px-12 py-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-[#F9A825]/50 active:scale-95 shadow-xl">
            <span className="relative text-[10px] font-black uppercase tracking-[0.4em] text-white group-hover:text-[#F9A825] transition-colors">
              Explore Connectivity
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes orbital {
          0%, 100% { transform: translate(calc(var(--x) - 50%), calc(var(--y) - 50%)) scale(1); }
          50% { transform: translate(calc(var(--x) - 50%), calc(var(--y) - 50% - 10px)) scale(1.02); }
        }
        .animate-orbital {
          animation: orbital ease-in-out infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Integrations;
