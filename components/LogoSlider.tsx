
import React from 'react';

const LogoSlider: React.FC = () => {
  const logos = [
    "TECH CORE", "LUMINA", "VERTEX", "NEXUS", "QUANTUM", "VELOCITY", "TITAN", "APEX"
  ];

  return (
    <div className="py-12 border-y border-white/5 bg-black overflow-hidden group">
      <div className="flex whitespace-nowrap animate-scroll">
        {[...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="flex items-center justify-center mx-12 text-2xl font-black text-white/20 hover:text-white/60 transition-colors cursor-default select-none tracking-tighter italic">
            {logo}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;
