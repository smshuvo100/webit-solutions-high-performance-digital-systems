
import React from 'react';
import { 
  TrendingUp, 
  Code2, 
  Figma, 
  Chrome, 
  Database, 
  Cpu, 
  Globe, 
  Smartphone,
  Zap
} from 'lucide-react';

const GrowthPartnerGraphic: React.FC = () => {
  const innerIcons = [
    { Icon: Code2, color: '#61DAFB', angle: 45 },
    { Icon: Database, color: '#F29111', angle: 135 },
    { Icon: Globe, color: '#4285F4', angle: 225 },
    { Icon: Cpu, color: '#74aa9c', angle: 315 },
  ];

  const outerIcons = [
    { Icon: Figma, color: '#F24E1E', angle: 0 },
    { Icon: Chrome, color: '#4285F4', angle: 72 },
    { Icon: Smartphone, color: '#34A853', angle: 144 },
    { Icon: Zap, color: '#F9A825', angle: 216 },
    { Icon: TrendingUp, color: '#002B5B', angle: 288 },
  ];

  return (
    <div className="relative w-full aspect-square flex items-center justify-center pointer-events-none select-none">
      {/* Background soft glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,43,91,0.05)_0%,_transparent_70%)] blur-3xl" />
      
      {/* Concentric Rings */}
      <div className="absolute w-[60%] h-[60%] border border-black/[0.03] rounded-full animate-pulse-slow" />
      <div className="absolute w-[85%] h-[85%] border border-black/[0.02] rounded-full" />
      <div className="absolute w-[110%] h-[110%] border border-black/[0.01] rounded-full animate-pulse-slow delay-700" />

      {/* Central Brand Identity */}
      <div className="relative z-10 w-32 h-32 md:w-44 md:h-44 bg-white rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col items-center justify-center animate-float-slow">
        <div className="bg-[#002B5B] p-3 rounded-xl shadow-lg mb-2">
          <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>
        <div className="flex flex-col items-center -space-y-1">
          <span className="text-xl font-black tracking-tighter uppercase text-[#F9A825]">Web IT</span>
          <span className="text-[8px] font-black tracking-[0.3em] uppercase text-[#002B5B]/40">Solutions</span>
        </div>
      </div>

      {/* Inner Orbital Icons */}
      {innerIcons.map((item, idx) => {
        const radius = 35; // % of container
        const x = Math.cos((item.angle * Math.PI) / 180) * radius;
        const y = Math.sin((item.angle * Math.PI) / 180) * radius;
        return (
          <div 
            key={idx}
            className="absolute w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-50 animate-float"
            style={{ 
              left: `calc(50% + ${x}%)`, 
              top: `calc(50% + ${y}%)`,
              animationDelay: `${idx * 0.5}s`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <item.Icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: item.color }} />
          </div>
        );
      })}

      {/* Outer Orbital Icons */}
      {outerIcons.map((item, idx) => {
        const radius = 55; // % of container
        const x = Math.cos((item.angle * Math.PI) / 180) * radius;
        const y = Math.sin((item.angle * Math.PI) / 180) * radius;
        return (
          <div 
            key={idx}
            className="absolute w-10 h-10 md:w-14 md:h-14 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-50 animate-float-delayed"
            style={{ 
              left: `calc(50% + ${x}%)`, 
              top: `calc(50% + ${y}%)`,
              animationDelay: `${idx * 0.8}s`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <item.Icon className="w-5 h-5 md:w-7 md:h-7 opacity-60" style={{ color: item.color }} />
          </div>
        );
      })}

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GrowthPartnerGraphic;
