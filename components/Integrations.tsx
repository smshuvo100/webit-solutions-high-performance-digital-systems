
import React from 'react';
import { INTEGRATIONS } from '../constants';
import { TrendingUp } from 'lucide-react';

const Integrations: React.FC = () => {
  return (
    <section className="relative py-40 md:py-60 px-4 overflow-hidden bg-[#01040a]">
      {/* Immersive Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,_rgba(0,43,91,0.2)_0%,_rgba(249,168,37,0.08)_30%,_transparent_70%)] blur-[140px]" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center space-y-24">
        <div className="space-y-8">
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-[10px] font-black uppercase tracking-[0.4em] text-[#F9A825] shadow-[0_0_20px_rgba(249,168,37,0.2)]">
            Powerful Integrations
          </div>
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white">
            Seamlessly Integrate <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F9A825] to-white/40 italic">Every App</span>
          </h2>
        </div>

        {/* Central Orb Area */}
        <div className="relative h-[500px] md:h-[700px] flex items-center justify-center">
          
          {/* Enhanced Sphere with Brand Logo */}
          <div className="absolute w-72 h-72 md:w-[480px] md:h-[480px] rounded-full group cursor-pointer flex items-center justify-center z-20">
            {/* Outer Atmospheric Glows */}
            <div className="absolute inset-[-60px] bg-[#002B5B]/30 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute inset-[-30px] bg-[#F9A825]/15 rounded-full blur-[80px] animate-pulse delay-1000" />
            
            {/* Main Sphere Body */}
            <div className="absolute inset-0 rounded-full glass-card border-white/20 shadow-[0_0_100px_rgba(0,43,91,0.5),_inset_0_0_80px_rgba(255,255,255,0.1)] overflow-hidden">
              {/* Internal Fluid Gradients */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.25),_transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(249,168,37,0.2),_transparent_60%)]" />
              
              {/* Spinning Light Rings */}
              <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,_transparent,_rgba(0,210,255,0.15),_transparent,_rgba(249,168,37,0.15),_transparent)] animate-[spin_15s_linear_infinite]" />
              
              {/* Core Glow */}
              <div className="absolute inset-[20%] bg-[#002B5B] rounded-full blur-[50px] opacity-70" />
            </div>

            {/* Central Brand Content */}
            <div className="relative z-30 flex flex-col items-center gap-3 animate-float-slow">
              <div className="bg-[#002B5B] p-5 rounded-[2rem] shadow-2xl shadow-[#002B5B]/50 border border-white/10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                <TrendingUp className="w-10 h-10 md:w-16 md:h-16 text-white" />
              </div>
              <div className="flex flex-col items-center -space-y-1">
                <span className="text-3xl font-black tracking-tighter uppercase text-[#F9A825]">Web IT</span>
                <span className="text-[12px] font-black tracking-[0.5em] uppercase text-white/50">Solutions</span>
              </div>
            </div>

            {/* Subtle Surface Reflection */}
            <div className="absolute inset-0 rounded-full border-t border-white/20 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          </div>

          {/* Floating Icons in a perfect circular ring */}
          <div className="absolute inset-0 pointer-events-none group-icons">
            {INTEGRATIONS.map((item, idx) => {
              // Perfect circular positioning
              const angle = (idx / INTEGRATIONS.length) * 2 * Math.PI - (Math.PI / 2);
              const radius = window.innerWidth < 768 ? 200 : 320; 
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
                    className="w-16 h-16 md:w-22 md:h-22 rounded-[1.8rem] glass-card flex items-center justify-center pointer-events-auto hover:scale-125 hover:-rotate-12 transition-all duration-500 cursor-pointer shadow-2xl group border-white/10 overflow-visible"
                    style={{ borderColor: `${item.color}33` }}
                  >
                    <div 
                      className="transition-all duration-500 group-hover:drop-shadow-[0_0_15px_currentColor]"
                      style={{ color: item.color }}
                    >
                      {React.cloneElement(item.icon as React.ReactElement, { size: 32, className: 'w-8 h-8 md:w-11 md:h-11' })}
                    </div>
                    
                    {/* Floating Label with brand color accent */}
                    <div 
                      className="absolute -bottom-12 opacity-0 group-hover:opacity-100 transition-all bg-white text-black text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap shadow-2xl border-b-2"
                      style={{ borderBottomColor: item.color }}
                    >
                      {item.name}
                    </div>

                    {/* Background glow specific to icon color */}
                    <div 
                      className="absolute inset-0 rounded-[1.8rem] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pt-10">
          <button className="group relative px-16 py-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-[#F9A825]/50 active:scale-95 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F9A825]/0 via-[#F9A825]/10 to-[#F9A825]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <span className="relative text-[11px] font-black uppercase tracking-[0.5em] text-white group-hover:text-[#F9A825] transition-colors">
              Explore Connectivity
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes orbital {
          0%, 100% { transform: translate(calc(var(--x) - 50%), calc(var(--y) - 50%)) scale(1); }
          50% { transform: translate(calc(var(--x) - 50%), calc(var(--y) - 50% - 15px)) scale(1.03); }
        }
        .animate-orbital {
          animation: orbital ease-in-out infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        .w-22 { width: 5.5rem; }
        .h-22 { height: 5.5rem; }
      `}</style>
    </section>
  );
};

export default Integrations;
