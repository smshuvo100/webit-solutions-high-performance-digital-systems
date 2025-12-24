
import React from 'react';
import { Sparkles, TrendingUp, Cpu, Rocket, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { REVIEWS } from '../constants';

const SuccessStories: React.FC = () => {
  const extendedReviews = REVIEWS.map((r, i) => ({
    ...r,
    logo: i === 0 ? <TrendingUp className="w-5 h-5" /> : i === 1 ? <Cpu className="w-5 h-5" /> : <Rocket className="w-5 h-5" />,
    companyLabel: i === 0 ? 'VENTURE' : i === 1 ? 'APPLICATION' : 'STARTUP',
    accentColor: i === 0 ? 'rgba(59, 130, 246, 0.1)' : i === 1 ? 'rgba(249, 168, 37, 0.1)' : 'rgba(16, 185, 129, 0.1)'
  }));

  const btnClass = "bg-[#F9A825] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-[#ffb63a] shadow-[0_20px_40px_-10px_rgba(249,168,37,0.4)] active:scale-95 flex items-center justify-center gap-3 transition-all mx-auto";

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#01040a]">
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.02]" 
          style={{ maskImage: 'radial-gradient(circle at center, black, transparent 80%)' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#002B5B]/05 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-2">
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/60">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[1.0] text-white">
            Hear from our customers <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/30 italic">
              & their success stories
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {extendedReviews.map((review) => (
            <div 
              key={review.id}
              className="group relative p-8 md:p-10 h-full rounded-[2.5rem] bg-[#0c1018] border border-white/[0.08] flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] shadow-xl"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${review.accentColor}, transparent 50%)` }}
              />

              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:bg-[#F9A825] group-hover:text-white transition-colors duration-500">
                      {React.cloneElement(review.logo as React.ReactElement, { size: 16 })}
                    </div>
                    <span className="text-[10px] font-black tracking-widest text-white/40 group-hover:text-white/80 transition-colors uppercase">{review.companyLabel}</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-[#F9A825]/5 border border-[#F9A825]/10 flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2 h-2 text-[#F9A825] fill-[#F9A825]" />
                    ))}
                  </div>
                </div>
                <p className="text-xl md:text-2xl font-bold leading-tight tracking-tight text-white/80 group-hover:text-white transition-colors">
                  “{review.content}”
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4 pt-8 mt-10 border-t border-white/5">
                <div className="relative">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border border-white/10 object-cover" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#F9A825] rounded-full border border-[#0c1018] flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-3 h-3 text-[#0c1018] stroke-[3px]" />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-black text-white tracking-tight">{review.name}</div>
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-[#F9A825]">{review.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className={btnClass}>
             View All Results <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
