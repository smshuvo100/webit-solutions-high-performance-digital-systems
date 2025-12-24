
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  TrendingUp, 
  Rocket,
  ShieldCheck,
  Zap,
  Star,
  ChevronDown,
  Menu,
  X,
  Target,
  BarChart,
  Settings,
  Layout,
  Search,
  Cpu,
  BarChart3,
  Settings2,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Mail,
  Send,
  Globe
} from 'lucide-react';
import { SERVICES, INDUSTRIES, REVIEWS, getIcon } from './constants';
import LogoSlider from './components/LogoSlider';
import StrategyAI from './components/StrategyAI';
import HeroGraphic from './components/HeroGraphic';
import Integrations from './components/Integrations';
import GrowthPartnerGraphic from './components/GrowthPartnerGraphic';
import SuccessStories from './components/SuccessStories';
import Portfolio from './components/Portfolio';
import ConnectivitySection from './components/ConnectivitySection';
import FinalCTAGraphic from './components/FinalCTAGraphic';
import FeaturedService from './components/FeaturedService';
import WhyChooseUs from './components/WhyChooseUs';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const serviceList = [
    {
      title: "Full Website Sprint",
      description: "By streamlining the process and focusing on key milestones, we ensure your website is ready to go live quickly.",
      price: "$2500",
      duration: "2 - 3 Weeks",
      tags: ["Design + Framer Development", "Interactive Elements", "SEO Optimization"],
      icon: Layout,
      category: "Development",
      accent: "#3b82f6",
      span: "lg:col-span-2"
    },
    {
      title: "Search Supremacy",
      description: "Dominate local and global search results with engineered content strategies.",
      price: "$1500",
      duration: "Monthly",
      tags: ["Keyword Dominance", "Backlink Architecture", "Authority Building"],
      icon: Search,
      category: "SEO",
      accent: "#F9A825"
    },
    {
      title: "AI Integration",
      description: "24/7 autonomous systems to handle leads and operations without human friction.",
      price: "$3000",
      duration: "4 Weeks",
      tags: ["Chatbot Deployment", "Workflow Logic", "CRM Sync"],
      icon: Cpu,
      category: "Automation",
      accent: "#10b981"
    },
    {
      title: "Performance Ads",
      description: "ROI-focused campaigns built to scale your revenue through data-backed decisions.",
      price: "$2000",
      duration: "Monthly",
      tags: ["Meta / Google Ads", "Creative Testing", "Conversion Tracking"],
      icon: BarChart3,
      category: "Marketing",
      accent: "#f43f5e"
    },
    {
      title: "Workflow CRM",
      description: "Connect your entire business into one single source of truth.",
      price: "$2500",
      duration: "3 Weeks",
      tags: ["HubSpot Setup", "Sales Pipeline", "Email Automation"],
      icon: Settings2,
      category: "Systems",
      accent: "#8b5cf6"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-[#F9A825] selection:text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 sm:py-6 pointer-events-none">
        <nav className={`
          w-full max-w-7xl h-16 sm:h-20 bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-[1.25rem] 
          flex items-center justify-between px-4 sm:px-6 
          border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.2)] 
          transition-all duration-300 pointer-events-auto
          ${scrolled ? 'translate-y-2 scale-[0.98]' : 'translate-y-0'}
        `}>
          <div 
            className="flex items-center gap-2 group cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <div className="bg-[#002B5B] p-1.5 rounded-lg group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-[#002B5B]/20">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-lg font-black tracking-tighter uppercase text-[#F9A825]">Web IT</span>
              <span className="text-[8px] font-black tracking-[0.3em] uppercase text-[#002B5B]/40">Solutions</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollTo('services')} className="text-sm font-bold text-gray-900 hover:text-[#F9A825] transition-all">Services</button>
            <button onClick={() => scrollTo('about')} className="text-sm font-bold text-gray-900 hover:text-[#F9A825] transition-all">About</button>
            <button onClick={() => scrollTo('portfolio')} className="text-sm font-bold text-gray-900 hover:text-[#F9A825] transition-all">Results</button>
            <button onClick={() => scrollTo('why-choose')} className="text-sm font-bold text-gray-900 hover:text-[#F9A825] transition-all">Performance</button>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => scrollTo('cta')} className="px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest text-white bg-[#002B5B] hover:bg-[#003d7e] shadow-lg transition-all active:scale-95">Strategy Call</button>
          </div>

          <button className="lg:hidden p-2 text-[#002B5B]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-xl pointer-events-auto">
            <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
               <button onClick={() => scrollTo('services')} className="text-2xl font-black text-white">Services</button>
               <button onClick={() => scrollTo('about')} className="text-2xl font-black text-white">About</button>
               <button onClick={() => scrollTo('portfolio')} className="text-2xl font-black text-white">Results</button>
               <button onClick={() => scrollTo('why-choose')} className="text-2xl font-black text-white">Performance</button>
               <div className="flex flex-col w-full gap-4 mt-8">
                 <button onClick={() => scrollTo('cta')} className="w-full py-5 rounded-2xl bg-[#F9A825] text-white font-black uppercase tracking-[0.2em]">Strategy Call</button>
                 <button onClick={() => setIsMenuOpen(false)} className="w-full py-5 rounded-2xl border border-white/10 text-white font-black uppercase tracking-[0.2em]">Close</button>
               </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* 1. HERO SECTION (Banner) */}
        <section id="home" className="relative min-h-screen flex items-center px-4 overflow-hidden pt-32 pb-20 lg:py-0">
          <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr,0.8fr] gap-12 lg:gap-20 items-center">
            <div className="space-y-8 lg:space-y-10 text-center lg:text-left relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[9px] font-black tracking-[0.3em] uppercase text-[#F9A825]">
                <span className="w-2 h-2 rounded-full bg-[#F9A825] animate-ping" />
                Industry Standard Digital Systems
              </div>
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.95] animate-in fade-in slide-in-from-bottom-12 duration-1000">
                  Digital Systems <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40 italic">That Scale.</span>
                </h1>
                <p className="text-base md:text-lg text-white/50 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed tracking-tight">
                  High-performance websites, SEO, AI automation, and marketing infrastructure
                  built for businesses ready to dominate their market.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button onClick={() => scrollTo('cta')} className="group relative w-full sm:w-auto bg-[#F9A825] text-white px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-xl hover:bg-[#ffb63a]">
                  Get Started
                  <ArrowRight className="inline-block ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button onClick={() => scrollTo('services')} className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-lg border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white hover:text-black transition-all">Explore Services</button>
              </div>
            </div>
            <div className="relative"><div className="animate-in fade-in zoom-in duration-1000 delay-300 scale-90 lg:scale-100"><HeroGraphic /></div></div>
          </div>
        </section>

        {/* 2. CLIENTS SERVED (Logo Slider) */}
        <LogoSlider />

        {/* 3. ABOUT WEBIT SOLUTIONS */}
        <section id="about" className="py-24 md:py-40 relative overflow-hidden bg-gradient-to-b from-transparent via-slate-900/40 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
              <div className="animate-in fade-in slide-in-from-left-12 duration-1000 scale-90 lg:scale-100"><GrowthPartnerGraphic /></div>
              <div className="space-y-10">
                <div className="space-y-4 text-center lg:text-left">
                  <div className="inline-flex px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[9px] font-black uppercase tracking-[0.3em] border border-blue-500/20">About Us</div>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">Your Complete <br /> <span className="text-[#F9A825] italic">Digital Growth Partner.</span></h2>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-5 items-start group">
                    <div className="mt-1 p-3 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20 group-hover:scale-110 transition-transform"><Rocket className="w-5 h-5" /></div>
                    <div><p className="text-base font-bold text-white/60 leading-relaxed tracking-tight">Fully managed IT services that transform your online presence into a revenue generator.</p></div>
                  </div>
                  <div className="flex gap-5 items-start group">
                    <div className="mt-1 p-3 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 group-hover:scale-110 transition-transform"><BarChart className="w-5 h-5" /></div>
                    <div><p className="text-base font-bold text-white/60 leading-relaxed tracking-tight">Data-driven strategies backed by 5+ years of scaling businesses across high-competition industries.</p></div>
                  </div>
                  <div className="flex gap-5 items-start group">
                    <div className="mt-1 p-3 rounded-xl bg-green-500/10 text-green-500 border border-green-500/20 group-hover:scale-110 transition-transform"><Target className="w-5 h-5" /></div>
                    <div><p className="text-base font-bold text-white/60 leading-relaxed tracking-tight">Custom ecosystems that connect leads, automations, and sales teams into one cohesive unit.</p></div>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start pt-4">
                  <button onClick={() => scrollTo('cta')} className="group bg-blue-600 text-white px-10 py-4 rounded-xl font-black text-base transition-all hover:bg-blue-500 shadow-xl active:scale-95 flex items-center gap-3">Learn Our Methodology <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" /></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SERVICES SECTION */}
        <section id="services" className="py-24 md:py-40 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
              <div className="space-y-4 animate-in fade-in slide-in-from-left-12 duration-1000">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-[9px] font-black uppercase tracking-[0.4em] text-blue-400">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  Solutions Suite
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-white">
                  Built to <span className="italic text-white/40">Dominate.</span>
                </h2>
              </div>
              <p className="text-base md:text-lg text-white/40 font-medium max-w-md leading-relaxed animate-in fade-in slide-in-from-right-12 duration-1000">
                Strategic infrastructure designed to convert high-intent traffic into loyal customers automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceList.map((service, idx) => (
                <FeaturedService 
                  key={idx}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  duration={service.duration}
                  tags={service.tags}
                  icon={service.icon}
                  category={service.category}
                  accentColor={service.accent}
                  className={`${service.span || ""} animate-in fade-in slide-in-from-bottom-12 duration-1000`}
                />
              ))}

              <div className="relative flex flex-col items-center justify-center p-10 bg-white rounded-[2rem] border border-gray-100 text-slate-950 text-center overflow-hidden group shadow-xl cursor-pointer hover:scale-[1.02] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 bg-slate-950 rounded-xl mx-auto flex items-center justify-center text-white mb-2 group-hover:rotate-12 transition-transform">
                    <Rocket className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tighter">CUSTOM BUILD</h3>
                  <p className="text-xs font-bold opacity-60 uppercase tracking-widest leading-relaxed">
                    Bespoke engineering for unique business challenges.
                  </p>
                  <button onClick={() => scrollTo('cta')} className="pt-2 flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest mx-auto group-hover:gap-4 transition-all">
                    START PROJECT <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHY CHOOSE US (Performance & Analytics) */}
        <WhyChooseUs />

        <Integrations />
        <Portfolio />
        <SuccessStories />
        <ConnectivitySection />

        <section id="cta" className="relative py-24 md:py-40 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-t from-[#F9A825]/20 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
            <div className="text-center space-y-6 mb-16">
              <div className="inline-flex px-4 py-1.5 rounded-full border border-[#F9A825]/30 bg-[#F9A825]/10 text-[#F9A825] text-[10px] font-black uppercase tracking-[0.4em]">Final Step</div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white">Scale <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9A825] to-white italic">Without Limits.</span></h2>
              <p className="text-base md:text-lg text-white/40 font-bold max-w-2xl mx-auto leading-relaxed">Stop playing small. Book a consultation to see the systems that will redefine your business growth.</p>
            </div>
            <div className="w-full mb-16 scale-90 md:scale-100"><FinalCTAGraphic /></div>
            <div className="flex flex-col items-center gap-10">
              <button onClick={() => scrollTo('cta')} className="group relative bg-[#F9A825] text-white px-16 py-7 rounded-[1.5rem] font-black text-2xl hover:bg-[#ffb63a] transition-all shadow-2xl active:scale-95 flex items-center gap-4">Book Strategy Call <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" /></button>
              <div className="flex flex-wrap justify-center gap-8 opacity-30 text-[9px] font-black uppercase tracking-[0.3em] text-white">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#F9A825]" /> NO TEMPLATES</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#F9A825]" /> FULLY MANAGED</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#F9A825]" /> VERIFIED ROI</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* REDESIGNED DYNAMIC & EYE-CATCHING FOOTER */}
      <footer className="relative pt-24 pb-12 overflow-hidden border-t border-white/5 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr,0.8fr] gap-20 pb-20 border-b border-white/5 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start gap-4">
                <div className="group relative">
                  <div className="bg-[#002B5B] p-2.5 rounded-xl shadow-xl border border-white/10 group-hover:rotate-12 transition-transform duration-500 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex flex-col -space-y-1">
                  <span className="text-2xl font-black tracking-tighter uppercase text-[#F9A825]">Web IT</span>
                  <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/30">Solutions</span>
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-tight max-w-lg mx-auto lg:mx-0">
                The architecture of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9A825] to-white italic">Dominance.</span>
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center">
                {[{ Icon: Twitter }, { Icon: Linkedin }, { Icon: Instagram }, { Icon: Facebook }].map((social, i) => (
                  <a key={i} href="#" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-[#F9A825] hover:text-white transition-all duration-500">
                    <social.Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="relative bg-slate-900 border border-white/10 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F9A825]/20 bg-[#F9A825]/5 text-[#F9A825] text-[9px] font-black uppercase tracking-[0.3em]">Newsletter</div>
                  <h4 className="text-2xl font-black text-white tracking-tighter">Growth Intel v3.0</h4>
                  <p className="text-sm font-bold text-white/40 leading-relaxed">Weekly tactical playbooks for rapid digital scale.</p>
                  <div className="flex gap-2">
                    <input type="email" placeholder="Email" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F9A825] transition-all" />
                    <button className="bg-[#F9A825] text-white p-3 rounded-xl hover:bg-[#ffb63a] transition-all"><Send className="w-5 h-5" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16">
            {[
              { title: 'SOLUTIONS', links: ['Web Systems', 'SEO Dominance', 'AI Automations'] },
              { title: 'COMPANY', links: ['About Us', 'Case Studies', 'Methodology'] },
              { title: 'RESOURCES', links: ['Status', 'Security', 'Client Portal'] },
              { title: 'LEGAL', links: ['Privacy', 'Terms', 'Guarantees'] }
            ].map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#F9A825]">{section.title}</h5>
                <ul className="space-y-3">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}><button className="text-[12px] font-bold text-white/40 hover:text-white transition-colors uppercase tracking-tight">{link}</button></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">© {new Date().getFullYear()} WEBIT SOLUTIONS. ALL RIGHTS RESERVED.</div>
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Infrastructure: Stable</span>
            </div>
          </div>
        </div>
      </footer>
      <StrategyAI />
    </div>
  );
};

export default App;
