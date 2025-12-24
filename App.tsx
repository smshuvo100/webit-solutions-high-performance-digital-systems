
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

  const btnClass = "bg-[#F9A825] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-[#ffb63a] shadow-[0_20px_40px_-10px_rgba(249,168,37,0.4)] active:scale-95 flex items-center justify-center gap-3 transition-all";
  const btnClassSm = "bg-[#F9A825] text-white px-5 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#ffb63a] shadow-lg shadow-[#F9A825]/20 active:scale-95 flex items-center justify-center gap-2 transition-all";

  const serviceList = [
    {
      title: "Full Website Sprint",
      description: "By streamlining the process and focusing on key milestones, we ensure your website is ready to go live quickly.",
      price: "$2500",
      duration: "2 - 3 Weeks",
      tags: ["Design + Framer Development", "Interactive Elements", "SEO Optimization"],
      icon: Layout,
      category: "Development",
      accent: "#3b82f6"
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
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-2 sm:py-4 pointer-events-none">
        <nav className={`
          w-full max-w-7xl h-14 sm:h-16 bg-white rounded-xl sm:rounded-2xl 
          flex items-center justify-between px-4 sm:px-6 
          border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] 
          transition-all duration-300 pointer-events-auto
          ${scrolled ? 'translate-y-0 scale-[0.98] sm:scale-100' : 'translate-y-0'}
        `}>
          <div 
            className="flex items-center gap-2 group cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <div className="bg-[#002B5B] p-1 rounded-lg group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-[#002B5B]/20">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-base font-black tracking-tighter uppercase text-[#F9A825]">Web IT</span>
              <span className="text-[7px] font-black tracking-[0.3em] uppercase text-[#002B5B]/40">Solutions</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            <button onClick={() => scrollTo('services')} className="text-xs font-bold text-gray-900 hover:text-[#F9A825] transition-all">Services</button>
            <button onClick={() => scrollTo('why-us')} className="text-xs font-bold text-gray-900 hover:text-[#F9A825] transition-all">Why Us</button>
            <button onClick={() => scrollTo('portfolio')} className="text-xs font-bold text-gray-900 hover:text-[#F9A825] transition-all">Results</button>
            <button onClick={() => scrollTo('why-choose')} className="text-xs font-bold text-gray-900 hover:text-[#F9A825] transition-all">Market</button>
            <div className="flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full border border-orange-100 cursor-pointer hover:bg-orange-100 transition-all">
              <Zap className="w-3 h-3 text-[#F9A825] fill-[#F9A825]" />
              <span className="text-[9px] font-black uppercase tracking-widest text-[#F9A825]">Growth Audit</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button onClick={() => scrollTo('cta')} className="px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest text-[#002B5B] bg-[#f0f4f8] hover:bg-[#e2e8f0] transition-all">Contact</button>
            <button onClick={() => scrollTo('cta')} className={btnClassSm}>Strategy Call <ArrowRight className="w-3 h-3" /></button>
          </div>

          <button className="lg:hidden p-2 text-[#002B5B]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden bg-[#01040a]/95 backdrop-blur-xl pointer-events-auto">
            <div className="flex flex-col items-center justify-center h-full gap-6 p-6">
               <button onClick={() => scrollTo('services')} className="text-xl font-black text-white">Services</button>
               <button onClick={() => scrollTo('why-us')} className="text-xl font-black text-white">Why Us</button>
               <button onClick={() => scrollTo('portfolio')} className="text-xl font-black text-white">Results</button>
               <button onClick={() => scrollTo('why-choose')} className="text-xl font-black text-white">Market</button>
               <div className="flex flex-col w-full gap-3 mt-4">
                 <button onClick={() => scrollTo('cta')} className={btnClass}>Strategy Call <ArrowRight className="w-5 h-5" /></button>
                 <button onClick={() => setIsMenuOpen(false)} className="w-full py-4 rounded-xl border border-white/10 text-white font-black uppercase tracking-[0.2em]">Close</button>
               </div>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-[80vh] flex items-center px-4 overflow-hidden pt-8 pb-12 lg:py-0">
          <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr,0.9fr] gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[9px] font-black tracking-[0.3em] uppercase text-[#F9A825]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F9A825] animate-ping" />
                Dominating Digital Since 2018
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.95] animate-in fade-in slide-in-from-bottom-8 duration-1000">
                  Systems <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40 italic drop-shadow-2xl">That Dominate.</span>
                </h1>
                <p className="text-base md:text-lg text-white/40 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed tracking-tight">
                  High-performance websites, SEO, AI automation, and marketing infrastructure
                  built for businesses that want <span className="text-white">scale</span> — not excuses.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button onClick={() => scrollTo('cta')} className={btnClass}>
                  Book Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button onClick={() => scrollTo('services')} className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-lg border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white hover:text-black transition-all">Our Capabilities</button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 pt-4 opacity-40">
                <div className="flex items-center gap-2.5"><ShieldCheck className="w-4 h-4 text-[#F9A825]" /><span className="text-[9px] font-black uppercase tracking-[0.3em]">Verified Systems</span></div>
                <div className="flex items-center gap-2.5"><Zap className="w-4 h-4 text-[#F9A825]" /><span className="text-[9px] font-black uppercase tracking-[0.3em]">Rapid Scaling</span></div>
              </div>
            </div>
            <div className="relative"><div className="animate-in fade-in zoom-in duration-1000 delay-300"><HeroGraphic /></div></div>
          </div>
        </section>

        <LogoSlider />
        <SuccessStories />

        {/* SERVICES SECTION */}
        <section id="services" className="py-16 md:py-28 px-4 relative overflow-hidden bg-[#01040a]">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[9px] font-black uppercase tracking-[0.5em] text-[#3b82f6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  Market Domination Suite
                </div>
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white">
                  Engineered <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20 italic">TO WIN.</span>
                </h2>
              </div>
              <p className="text-lg md:text-xl text-white/40 font-medium max-w-sm leading-relaxed lg:pb-2 animate-in fade-in slide-in-from-right-8 duration-1000">
                We don't build "nice" websites. We build revenue infrastructure that turns your competitors into memories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
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
                  className="animate-in fade-in slide-in-from-bottom-8 duration-1000 h-full"
                />
              ))}

              <div className="relative flex flex-col items-center justify-center p-10 bg-white rounded-[2.5rem] border border-gray-100 text-[#01040a] text-center overflow-hidden group shadow-[0_20px_60px_rgba(255,255,255,0.05)] cursor-pointer hover:scale-[1.02] transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 bg-[#01040a] rounded-xl mx-auto flex items-center justify-center text-white mb-2 group-hover:rotate-12 transition-transform">
                    <Rocket className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tighter leading-none">CUSTOM<br/>ECOSYSTEM</h3>
                  <p className="text-xs font-bold opacity-60 uppercase tracking-widest leading-relaxed">
                    Need a bespoke growth architecture? We thrive on the impossible.
                  </p>
                  <button onClick={() => scrollTo('cta')} className={btnClassSm}>
                    GET STARTED <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY US SECTION */}
        <section id="why-us" className="py-16 md:py-24 bg-white text-[#002B5B] overflow-hidden rounded-[3rem] sm:mx-4 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="animate-in fade-in slide-in-from-left-8 duration-1000"><GrowthPartnerGraphic /></div>
              <div className="space-y-10">
                <div className="space-y-4 text-center lg:text-left">
                  <div className="inline-flex px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-[0.3em]">About WebIT Solutions</div>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">Your Complete <br /> <span className="text-[#F9A825] italic underline decoration-blue-100 underline-offset-[8px]">Digital Growth Partner.</span></h2>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-5 items-start group"><div className="mt-1 p-3 rounded-xl bg-orange-50 text-orange-500 shadow-sm group-hover:scale-110 transition-transform"><Rocket className="w-5 h-5" /></div><div><p className="text-base font-bold text-[#002B5B] opacity-90 leading-relaxed tracking-tight">We're a fully managed IT services provider company that builds, manages, and optimizes everything your business needs online.</p></div></div>
                  <div className="flex gap-5 items-start group"><div className="mt-1 p-3 rounded-xl bg-blue-50 text-blue-500 shadow-sm group-hover:scale-110 transition-transform"><BarChart className="w-5 h-5" /></div><div><p className="text-base font-bold text-[#002B5B] opacity-90 leading-relaxed tracking-tight">With recognition and 1,000+ businesses transformed, we bring enterprise-level expertise without the enterprise price tag.</p></div></div>
                  <div className="flex gap-5 items-start group"><div className="mt-1 p-3 rounded-xl bg-green-50 text-green-500 shadow-sm group-hover:scale-110 transition-transform"><Target className="w-5 h-5" /></div><div><p className="text-base font-bold text-[#002B5B] opacity-90 leading-relaxed tracking-tight">We create custom digital strategies that solve real problems, drive measurable results, and scale alongside your business.</p></div></div>
                </div>
                <div className="flex justify-center lg:justify-start pt-4">
                  <button onClick={() => scrollTo('cta')} className={btnClass}>Learn More <ArrowRight className="w-5 h-5" /></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />

        <Integrations />
        <Portfolio />
        <ConnectivitySection />

        {/* CTA SECTION */}
        <section id="cta" className="relative py-16 md:py-28 px-4 overflow-hidden bg-[#01040a]">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_#F9A825,_transparent_70%)]" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '60px 60px' }} />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
            <div className="text-center space-y-8 mb-12">
              <div className="inline-flex px-5 py-2 rounded-full border border-[#F9A825]/20 bg-[#F9A825]/5 text-[#F9A825] text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">Final Growth Step</div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">Ready to <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9A825] via-white to-[#F9A825] italic drop-shadow-[0_0_20px_rgba(249,168,37,0.3)]">DOMINATE?</span></h2>
              <p className="text-lg md:text-xl text-white/40 font-bold max-w-2xl mx-auto leading-relaxed">Stop gambling with your digital presence. We build data-driven systems that generate <span className="text-white">predictable revenue</span> and measurable profit.</p>
            </div>
            <div className="w-full mb-12"><FinalCTAGraphic /></div>
            <div className="flex flex-col items-center gap-8">
              <button onClick={() => scrollTo('cta')} className={btnClass + " px-20 py-8 text-2xl"}>Book My Strategy Call <ArrowRight className="w-6 h-6" /></button>
              <div className="flex flex-wrap justify-center gap-8 opacity-30 text-[10px] font-black uppercase tracking-[0.4em] text-white">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#F9A825]" /> NO TEMPLATES</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#F9A825]" /> 100% PERFORMANCE</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#F9A825]" /> GUARANTEED SCALE</span>
              </div>
            </div>
            <div className="text-[9px] font-black uppercase tracking-[0.6em] text-white/10 mt-16">LIMITED Q3 AVAILABILITY: 2 CLIENT SLOTS REMAINING</div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative pt-16 pb-12 overflow-hidden bg-[#01040a] border-t border-white/5 selection:bg-[#F9A825]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(249,168,37,0.05)_0%,_transparent_70%)] blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.04)_0%,_transparent_70%)] blur-[80px] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)`, backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 pb-16 border-b border-white/5 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start gap-3">
                <div className="group relative">
                  <div className="absolute inset-[-2px] bg-[#002B5B] blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-[#002B5B] p-2 rounded-xl shadow-xl border border-white/10 group-hover:rotate-12 transition-transform duration-500 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex flex-col -space-y-1">
                  <span className="text-2xl font-black tracking-tighter uppercase text-[#F9A825]">Web IT</span>
                  <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/30">Solutions</span>
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-[0.9] max-w-lg mx-auto lg:mx-0">
                The architecture of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9A825] via-white to-[#F9A825] italic">Market Dominance.</span>
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center">
                {[{ Icon: Twitter }, { Icon: Linkedin }, { Icon: Instagram }, { Icon: Facebook }].map((social, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:bg-[#F9A825] hover:text-white hover:border-[#F9A825] transition-all duration-500 group shadow-lg">
                    <social.Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="relative bg-[#080c14] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F9A825]/20 bg-[#F9A825]/5 text-[#F9A825] text-[9px] font-black uppercase tracking-[0.3em]"><Zap className="w-3 h-3 animate-pulse" />Priority Intel</div>
                  <h4 className="text-xl font-black text-white tracking-tighter">Growth Protocol v3.0</h4>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input type="email" placeholder="work@company.com" className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs font-bold text-white focus:outline-none focus:border-[#F9A825] transition-all placeholder:text-white/20" />
                    <button className={btnClassSm}><span>Join</span><Send className="w-3 h-3" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
            {[
              { title: 'SOLUTIONS', links: ['Web Systems', 'Search Supremacy', 'AI Automations', 'Growth Frameworks'] },
              { title: 'COMPANY', links: ['Our Ethos', 'Results', 'Methodology', 'Contact'] },
              { title: 'INFRASTRUCTURE', links: ['System Status', 'Security', 'API', 'Client Portal'] },
              { title: 'GOVERNANCE', links: ['Privacy', 'Terms', 'Guarantee', 'Legal'] }
            ].map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#F9A825]">{section.title}</h5>
                <ul className="space-y-3">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}><a href="#" className="text-[12px] font-bold text-white/40 hover:text-white transition-all tracking-tight">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em]">© {new Date().getFullYear()} ALL MARKET RIGHTS RESERVED.</div>
            <div className="flex items-center gap-3 px-5 py-1.5 rounded-full bg-white/[0.03] border border-white/5">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)] animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Status: Optimal</span>
            </div>
          </div>
        </div>
      </footer>
      <StrategyAI />
    </div>
  );
};

export default App;
