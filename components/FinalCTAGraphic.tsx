
import React, { useMemo } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Activity, 
  Instagram, 
  Twitter, 
  Facebook, 
  Globe, 
  MessageSquare,
  Zap,
  ShieldCheck
} from 'lucide-react';

const FinalCTAGraphic: React.FC = () => {
  const socialNodes = useMemo(() => [
    { icon: <Instagram />, label: 'Insta', color: '#E4405F', x: -40, y: -30 },
    { icon: <Twitter />, label: 'X.com', color: '#1DA1F2', x: -45, y: 10 },
    { icon: <Facebook />, label: 'Meta', color: '#1877F2', x: -30, y: 45 },
    { icon: <Globe />, label: 'Search', color: '#4285F4', x: 40, y: -35 },
    { icon: <MessageSquare />, label: 'Ads', color: '#F9A825', x: 45, y: 5 },
  ], []);

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[500px] md:h-[650px] flex items-center justify-center select-none pointer-events-none group">
      {/* 1. ATMOSPHERIC DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,43,91,0.2),_transparent_70%)]" />
      
      {/* 2. CENTRAL PROCESSING HUB (The "System") */}
      <div className="relative z-30 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
        {/* Orbiting Rings */}
        <div className="absolute inset-[-40px] border border-blue-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute inset-[-20px] border-t-2 border-[#F9A825]/20 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
        
        {/* Core Container */}
        <div className="relative w-full h-full bg-[#0c1018] rounded-[3rem] border border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.2)] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />
          
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-[#002B5B] rounded-2xl flex items-center justify-center shadow-2xl border border-white/10">
              <Zap className="w-8 h-8 text-[#F9A825] fill-[#F9A825]" />
            </div>
            <div className="text-center">
              <div className="text-xl font-black text-white tracking-tighter uppercase leading-none">DOMINATOR</div>
              <div className="text-[8px] font-black text-blue-400 tracking-[0.4em] uppercase mt-1">SYSTEM_CORE</div>
            </div>
          </div>

          {/* Vertical Scan Line */}
          <div className="absolute inset-0 w-full h-1/2 bg-gradient-to-b from-blue-500/20 to-transparent animate-scan-fast" />
        </div>
      </div>

      {/* 3. SOCIAL INPUT NODES & DATA STREAMS */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {socialNodes.map((node, i) => (
          <g key={i}>
            {/* Connection Line */}
            <path 
              d={`M ${50 + node.x} ${50 + node.y} Q ${50 + node.x * 0.5} ${50 + node.y} 50 50`}
              stroke="white"
              strokeWidth="0.1"
              strokeDasharray="0.5 1"
              strokeOpacity="0.2"
              fill="none"
            />
            {/* Animated Data Packets Flowing to Core */}
            <circle r="0.4" fill={node.color} filter="url(#nodeGlow)">
              <animateMotion 
                dur={`${2 + i * 0.5}s`}
                repeatCount="indefinite"
                path={`M ${50 + node.x} ${50 + node.y} Q ${50 + node.x * 0.5} ${50 + node.y} 50 50`}
              />
            </circle>
          </g>
        ))}
      </svg>

      {/* Node Components */}
      {socialNodes.map((node, i) => (
        <div 
          key={i}
          className="absolute flex flex-col items-center gap-2 animate-float"
          style={{ 
            left: `${50 + node.x}%`, 
            top: `${50 + node.y}%`, 
            transform: 'translate(-50%, -50%)',
            animationDelay: `${i * 0.4}s` 
          }}
        >
          <div className="w-10 h-10 md:w-14 md:h-14 bg-[#0c1018] border border-white/10 rounded-xl flex items-center justify-center text-white/40 shadow-xl group-hover:border-white/30 transition-all">
             {React.cloneElement(node.icon as React.ReactElement, { size: 20 })}
             <div className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-5" style={{ backgroundColor: node.color }} />
          </div>
          <span className="text-[8px] font-black uppercase tracking-widest text-white/30">{node.label}</span>
        </div>
      ))}

      {/* 4. REVENUE OUTPUT CHART (Top Right Layer) */}
      <div className="absolute top-0 right-0 w-full md:w-[45%] h-full md:h-[60%] pointer-events-none p-10 flex flex-col justify-center">
        <div className="bg-[#0c1018]/60 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group/chart">
          {/* Chart Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <div className="text-[10px] font-black text-[#F9A825] tracking-widest uppercase">System Output</div>
              <div className="text-3xl font-black text-white tracking-tighter">PREDICTABLE REVENUE</div>
            </div>
            <Activity className="w-8 h-8 text-blue-500 animate-pulse" />
          </div>

          {/* The Actual Graph */}
          <div className="relative h-48 w-full">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="100">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Reference Grid */}
              {[...Array(5)].map((_, i) => (
                <line key={i} x1="0" y1={i * 25} x2="100" y2={i * 25} stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
              ))}
              {/* Revenue Path */}
              <path 
                d="M 0 90 Q 20 85, 40 70 T 70 30 T 100 5" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="3" 
                className="animate-chart-reveal"
                style={{ strokeDasharray: '200', strokeDashoffset: '200' }}
              />
              <path 
                d="M 0 90 Q 20 85, 40 70 T 70 30 T 100 5 L 100 100 L 0 100 Z" 
                fill="url(#areaGrad)" 
              />
            </svg>
            
            {/* Dynamic Label */}
            <div className="absolute top-4 right-0 bg-blue-500 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg animate-bounce">
              +412% DOMINATION
            </div>
          </div>

          {/* Stats Footer */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-[8px] font-black text-white/30 uppercase mb-1">CPA REDUCTION</div>
              <div className="text-xl font-black text-green-500">-64.2%</div>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-[8px] font-black text-white/30 uppercase mb-1">MONTHLY LEAD FLOW</div>
              <div className="text-xl font-black text-white">+1,240</div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. FLOATING KPI PANEL (Bottom Left) */}
      <div className="absolute bottom-[10%] left-[5%] md:w-64 bg-white rounded-3xl p-6 shadow-2xl animate-float-delayed border border-gray-100 hidden md:block">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 bg-orange-50 rounded-xl">
             <DollarSign className="w-6 h-6 text-[#F9A825]" />
          </div>
          <div>
            <div className="text-[9px] font-black text-[#002B5B]/30 uppercase tracking-widest">Client ROI</div>
            <div className="text-2xl font-black text-[#002B5B]">12.4x</div>
          </div>
        </div>
        <div className="space-y-2">
           <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#F9A825] w-[88%] animate-width" />
           </div>
           <div className="flex justify-between text-[8px] font-black text-[#002B5B]/40 uppercase tracking-tighter">
              <span>EFFICIENCY</span>
              <span>OPTIMIZED</span>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes scan-fast {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        @keyframes chart-reveal {
          to { stroke-dashoffset: 0; }
        }
        @keyframes width-grow {
          from { width: 0; }
        }
        .animate-scan-fast {
          animation: scan-fast 1.5s linear infinite;
        }
        .animate-chart-reveal {
          animation: chart-reveal 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-width {
          animation: width-grow 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FinalCTAGraphic;
