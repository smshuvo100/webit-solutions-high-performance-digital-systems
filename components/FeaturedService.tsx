
import React from 'react';
import { CheckCircle2, LucideIcon, ArrowRight } from 'lucide-react';

interface FeaturedServiceProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  tags: string[];
  icon: LucideIcon;
  category: string;
  accentColor?: string;
  className?: string;
}

const FeaturedService: React.FC<FeaturedServiceProps> = ({ 
  title, 
  description, 
  price, 
  duration, 
  tags, 
  icon: Icon, 
  category, 
  accentColor = "#3b82f6",
  className = "" 
}) => {
  const btnClassSm = "bg-[#F9A825] text-white px-5 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#ffb63a] shadow-lg shadow-[#F9A825]/20 active:scale-95 flex items-center justify-center gap-2 transition-all w-full mt-6";

  return (
    <div className={`relative flex flex-col bg-gradient-to-br from-[#0c1220] to-[#040814] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] group transition-all duration-700 hover:border-white/20 h-full ${className}`}>
      {/* Background Glow */}
      <div 
        className="absolute top-0 right-0 w-48 h-48 blur-[80px] -z-10 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-1000" 
        style={{ backgroundColor: accentColor }}
      />
      
      {/* Header Area */}
      <div className="flex justify-between items-start mb-8">
        <div 
          className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundColor: `${accentColor}1A`, color: accentColor }}
        >
          <Icon className="w-7 h-7" />
        </div>
        <div className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-[9px] font-black uppercase tracking-widest text-white/30">
          {category}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-4">
        <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">
          {title}
        </h3>
        <p className="text-sm md:text-base text-white/40 leading-relaxed font-medium">
          {description}
        </p>

        {/* Info Pills */}
        <div className="flex flex-wrap gap-3 my-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
            <span className="text-white font-black text-base">{price}</span>
            <span className="text-white/20 font-bold text-[8px] uppercase tracking-widest">/ Project</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
            <span className="text-white font-black text-base">{duration}</span>
            <span className="text-white/20 font-bold text-[8px] uppercase tracking-widest">Timeframe</span>
          </div>
        </div>

        {/* Features Checklist */}
        <div className="space-y-3 mt-auto pt-4 border-t border-white/5">
          {tags.slice(0, 3).map((tag, i) => (
            <div key={i} className="flex items-center gap-3 group/item">
              <div 
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover/item:scale-110"
                style={{ backgroundColor: accentColor }}
              >
                <CheckCircle2 className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs text-white/60 font-bold tracking-tight group-hover/item:text-white transition-colors">
                {tag}
              </span>
            </div>
          ))}
        </div>
        
        <button className={btnClassSm}>
          Get Started <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Decorative interactive element */}
      <div className="absolute bottom-10 right-10 opacity-10 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: accentColor }} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedService;
