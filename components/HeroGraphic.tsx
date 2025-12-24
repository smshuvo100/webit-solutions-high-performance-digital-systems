
import React from 'react';
import { Star, TrendingUp, Users, Bell, User, Briefcase, Calendar, Wallet } from 'lucide-react';

const HeroGraphic: React.FC = () => {
  return (
    <div className="relative w-full aspect-square max-w-[650px] mx-auto flex items-center justify-center select-none pointer-events-none group">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#002B5B]/10 blur-[100px] rounded-full group-hover:bg-[#002B5B]/20 transition-colors duration-1000" />
      
      {/* Central Dashboard Mockup - White Base */}
      <div className="relative z-20 w-[92%] bg-white rounded-[2.5rem] border border-white/20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] overflow-hidden animate-float">
        {/* Dashboard Header */}
        <div className="h-12 border-b border-gray-50 bg-white flex items-center px-8 justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
              <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
              <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
            </div>
            <div className="h-4 w-px bg-gray-100 mx-1" />
            <span className="text-[#002B5B] font-black text-[10px] tracking-[0.2em] uppercase">Scale Monitor</span>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="w-4 h-4 text-gray-300" />
            <div className="w-7 h-7 rounded-full bg-[#F9A825] flex items-center justify-center shadow-lg shadow-[#F9A825]/20">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Dashboard Content Area */}
        <div className="p-6 space-y-6 bg-[#fcfcfc]">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: 'JOBS', val: '305', change: '+105%', icon: <Briefcase /> },
              { label: 'QUEUE', val: '1,024', change: '+125%', icon: <Calendar /> },
              { label: 'REV', val: '$5.5k', change: '+54%', icon: <Wallet /> }
            ].map((card, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{card.label}</span>
                  <div className="p-1.5 rounded-lg bg-[#F9A825]/10 text-[#F9A825]">
                    {React.cloneElement(card.icon as React.ReactElement, { size: 12 })}
                  </div>
                </div>
                <div>
                  <div className="text-xl font-black text-[#002B5B] tracking-tighter">{card.val}</div>
                  <div className="text-[8px] font-bold text-green-500">{card.change}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-[10px] font-black text-[#002B5B] uppercase tracking-widest">Growth</h4>
                <TrendingUp className="w-3.5 h-3.5 text-[#F9A825]" />
              </div>
              <div className="h-24 flex items-end justify-between gap-1.5">
                {[30, 45, 35, 75, 40, 90, 80, 100].map((h, i) => (
                  <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-[#002B5B]' : 'bg-[#F9A825]'} rounded-sm opacity-90`} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-[10px] font-black text-[#002B5B] uppercase tracking-widest">Rev Trend</h4>
                <div className="w-1.5 h-1.5 rounded-full bg-[#F9A825] animate-pulse" />
              </div>
              <div className="h-24 relative">
                <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                  <path d="M0 65 Q 40 55, 80 60 T 120 40 T 160 35 T 200 15" fill="none" stroke="#F9A825" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-[9px] font-black text-[#002B5B] uppercase tracking-[0.2em] mb-4">Live Deployment Status</h4>
            <div className="space-y-4">
              {[1, 2].map(row => (
                <div key={row} className="flex items-center justify-between opacity-80">
                  <div className="flex items-center gap-3">
                    <img src={`https://i.pravatar.cc/100?u=dashboard${row}`} className="w-7 h-7 rounded-full grayscale" alt="U" />
                    <div>
                      <div className="text-[10px] font-black text-[#002B5B]">Project Alpha-Grid</div>
                      <div className="text-[8px] text-gray-400 font-bold uppercase tracking-tighter">Market Authority Active</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-black text-[#002B5B]">+$2,450</div>
                    <div className="text-[8px] text-gray-300 font-bold">12m ago</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ROI CARD - White Background, Yellow Trend Line */}
      <div className="absolute top-[5%] left-[-5%] z-40 w-44 bg-white rounded-3xl p-6 shadow-2xl animate-float-delayed border border-gray-50 flex flex-col justify-between h-40">
        <div>
          <div className="text-[11px] text-[#002B5B]/40 font-black uppercase tracking-widest mb-1">Current ROI</div>
          <div className="text-4xl font-black text-[#002B5B] tracking-tighter">9.4x</div>
        </div>
        <div className="h-10">
          <svg className="w-full h-full" viewBox="0 0 100 40">
            <path d="M0 35 L 20 25 L 40 32 L 60 12 L 80 28 L 100 8" fill="none" stroke="#F9A825" strokeWidth="5" strokeLinecap="round" strokeJoin="round" />
          </svg>
        </div>
      </div>

      {/* PORTRAIT CARD - Professional with Banner */}
      <div className="absolute bottom-[10%] left-[-10%] z-50 w-[45%] aspect-square rounded-[2.5rem] border-[6px] border-white shadow-2xl overflow-hidden animate-float ring-1 ring-black/5">
        <img 
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=500" 
          className="w-full h-full object-cover" 
          alt="Business Professional" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://i.pravatar.cc/500?u=professional";
          }}
        />
        <div className="absolute bottom-4 left-4 right-4 bg-[#002B5B] rounded-2xl p-4 flex items-center justify-between border border-white/10 shadow-xl">
          <div className="text-[9px] font-black text-white uppercase leading-tight tracking-widest">New Leads<br/>Qualified</div>
          <div className="text-2xl font-black text-[#F9A825]">+124</div>
        </div>
      </div>

      {/* RATING CARD - Navy Glass Card */}
      <div className="absolute top-[12%] right-[-10%] z-40 w-56 bg-[#002B5B] rounded-[2.5rem] p-8 shadow-2xl text-white text-center space-y-4 animate-float-slow border border-white/10">
        <div className="relative inline-block">
          <div className="w-20 h-20 rounded-full mx-auto border-4 border-[#F9A825] shadow-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200" alt="Market Leader" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#F9A825] rounded-full border-2 border-[#002B5B] flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
        <div>
          <div className="text-4xl font-black tracking-tighter text-white">4.9/5</div>
          <div className="flex justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#F9A825] text-[#F9A825]" />)}
          </div>
        </div>
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 leading-none">Market Authority<br/>Verified</div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(0.5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-0.5deg); }
        }
        .animate-float { animation: float 7s ease-in-out infinite; }
        .animate-float-delayed { animation: float 7s ease-in-out infinite 3.5s; }
        .animate-float-slow { animation: float-slow 9s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default HeroGraphic;
