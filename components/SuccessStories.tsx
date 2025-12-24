
import React from 'react';
import { Sparkles, TrendingUp, Cpu, Rocket, ChevronRight, Star } from 'lucide-react';
import { REVIEWS } from '../constants';

const SuccessStories: React.FC = () => {
  const extendedReviews = REVIEWS.map((r, i) => ({
    ...r,
    logo: i === 0 ? <TrendingUp className="w-5 h-5" /> : i === 1 ? <Cpu className="w-5 h-5" /> : <Rocket className="w-5 h-5" />,
    companyLabel: i === 0 ? 'VENTURE' : i === 1 ? 'APPLICATION' : 'STARTUP',
    // Gradient accent color for each card's subtle internal glow
    accentColor: i === 0 ? 'rgba(59, 130, 246, 0.1)' : i === 1 ? 'rgba(249, 168, 37, 0.1)' : 'rgba(16, 185, 129, 0.1)'
  }));

  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      {/* Background Graphic: Grid and Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.03]" 
          style={{ maskImage: 'radial-gradient(circle at center, black, transparent 80%)' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#002B5B]/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4">
        {/* Section Heading */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-4">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/60">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-white">
            Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/30 italic">Feedback.</span>
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {extendedReviews.map((review) => (
            <div 
              key={review.id}
              className="group relative p-10 h-full rounded-[2.5rem] bg-slate-950/40 border border-white/[0.08] flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] shadow-2xl"
            >
              {/* Subtle accent glow inside card */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${review.accentColor}, transparent 50%)` }}
              />

              <div className="relative z-10 space-y-8">
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:bg-[#F9A825] group-hover:text-white transition-colors duration-500">
                      {review.logo}
                    </div>
                    <span className="text-[10px] font-black tracking-widest text-white/40 uppercase">{review.companyLabel}</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-[#F9A825]/5 border border-[#F9A825]/20 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2 h-2 text-[#F9A825] fill-[#F9A825]" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xl md:text-2xl font-bold leading-tight tracking-tight text-white/80 group-hover:text-white transition-colors">
                  “{review.content}”
                </p>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 flex items-center gap-4 pt-8 mt-10 border-t border-white/5">
                <div className="relative">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-14 h-14 rounded-full border-2 border-white/10 object-cover"
                  />
                </div>
                <div>
                  <div className="text-lg font-black text-white tracking-tight">{review.name}</div>
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-[#F9A825]">
                    {review.company}
                  </div>
                </div>
              </div>

              {/* Watermark */}
              <div className="absolute bottom-[-5%] right-[-5%] opacity-[0.02] group-hover:opacity-[0.04] transition-opacity pointer-events-none select-none">
                <span className="text-[120px] font-black tracking-tighter uppercase leading-none">ROI</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-20 text-center">
          <button className="group relative px-10 py-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white hover:text-slate-950 transition-all duration-500 font-black text-[10px] uppercase tracking-[0.4em] active:scale-95 shadow-xl">
            <span className="relative z-10 flex items-center gap-4">
              View Case Studies <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
