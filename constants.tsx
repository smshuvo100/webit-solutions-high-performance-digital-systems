
import React from 'react';
import { 
  Layout, 
  Search, 
  Cpu, 
  BarChart3, 
  Settings2,
  Stethoscope,
  Hammer,
  Home,
  Car,
  Briefcase,
  Zap,
  MessageCircle,
  Mail,
  Slack,
  Database,
  Globe,
  Smartphone,
  Send,
  Code2,
  Figma,
  Chrome,
  CreditCard,
  Layers,
  ShoppingBag,
  Linkedin
} from 'lucide-react';
import { Service, PortfolioItem, Review, Industry } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Web Design & Development',
    description: 'Websites built to convert, scale, and outperform competitors. No fluff, just performance.',
    icon: 'Layout'
  },
  {
    id: 'seo',
    title: 'SEO & Local SEO',
    description: 'Long-term visibility that compounds traffic, authority, and inbound demand.',
    icon: 'Search'
  },
  {
    id: 'ai',
    title: 'AI Automation & Chatbots',
    description: '24/7 AI systems that qualify leads, book appointments, and reduce overhead.',
    icon: 'Cpu'
  },
  {
    id: 'ads',
    title: 'Paid Advertising',
    description: 'ROI-focused campaigns built to produce measurable revenue on Google & Meta.',
    icon: 'BarChart3'
  },
  {
    id: 'crm',
    title: 'CRM & Workflow',
    description: 'Infrastructure that connects leads, follow-ups, and operations into one system.',
    icon: 'Settings2'
  }
];

export const INTEGRATIONS = [
  { name: 'HubSpot', icon: <Database />, color: '#ff7a59', delay: '0s' },
  { name: 'Slack', icon: <Slack />, color: '#4A154B', delay: '0.2s' },
  { name: 'Salesforce', icon: <Globe />, color: '#00A1E0', delay: '0.4s' },
  { name: 'WhatsApp', icon: <MessageCircle />, color: '#25D366', delay: '0.1s' },
  { name: 'OpenAI', icon: <Cpu />, color: '#74aa9c', delay: '0.3s' },
  { name: 'Gemini', icon: <Zap />, color: '#4285F4', delay: '0.5s' },
  { name: 'Stripe', icon: <CreditCard />, color: '#635bff', delay: '0.2s' },
  { name: 'Meta', icon: <Smartphone />, color: '#0668E1', delay: '0.4s' },
  { name: 'Mailchimp', icon: <Mail />, color: '#FFE01B', delay: '0.6s' },
  { name: 'Shopify', icon: <ShoppingBag />, color: '#96bf48', delay: '0.1s' },
  { name: 'Zapier', icon: <Zap />, color: '#ff4a00', delay: '0.3s' },
  { name: 'Figma', icon: <Figma />, color: '#F24E1E', delay: '0.2s' },
  { name: 'Chrome', icon: <Chrome />, color: '#4285F4', delay: '0.4s' },
  { name: 'GitHub', icon: <Code2 />, color: '#ffffff', delay: '0.7s' },
  { name: 'LinkedIn', icon: <Linkedin />, color: '#0A66C2', delay: '0.5s' },
];

export interface PortfolioTech {
  name: string;
  icon: string;
}

export interface EnhancedPortfolioItem extends PortfolioItem {
  tech: string[];
  fullImage: string;
  metrics: string[];
}

export const PORTFOLIO_NEW: EnhancedPortfolioItem[] = [
  { 
    id: 1, 
    title: 'Google Ads Case', 
    category: 'Web System', 
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop', 
    fullImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop',
    result: 'Dominating Search',
    tech: ['node', 'next', 'postgres'],
    metrics: ['Sales Increase By 47%', '2x Website Visits', 'Profit Margin By 70%']
  },
  { 
    id: 2, 
    title: 'Facebook Growth', 
    category: 'Automation', 
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop', 
    fullImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    result: 'Viral Conversion',
    tech: ['wp', 'php', 'elementor'],
    metrics: ['SEO Search By 62%', '2x Revenue From Ads', 'From $0 To $1,000,000 In Sales']
  },
  { 
    id: 3, 
    title: 'X.com Presence', 
    category: 'SEO', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', 
    fullImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    result: 'Authority Built',
    tech: ['node', 'next', 'postgres'],
    metrics: ['SEO Search By 80%', '3x Revenue From Ads', 'From 0 To 100K Followers']
  },
  { 
    id: 4, 
    title: 'Chefy Platform', 
    category: 'Web System', 
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop', 
    fullImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    result: 'Optimized Delivery',
    tech: ['react', 'tailwind', 'node'],
    metrics: ['Order Volume Up 120%', 'Efficiency Boost 40%', 'Retention Rate 88%']
  },
  { 
    id: 5, 
    title: 'Collabspace', 
    category: 'WordPress', 
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop', 
    fullImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop',
    result: 'Voted Number One',
    tech: ['elementor', 'php', 'wp'],
    metrics: ['Booking Rate Up 90%', '24/7 AI Reception', 'Reduced No-Shows By 65%']
  },
  { 
    id: 6, 
    title: 'HAT Accounting', 
    category: 'SEO', 
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop', 
    fullImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
    result: 'Trusted Growth',
    tech: ['php', 'elementor', 'wp'],
    metrics: ['Local Search #1', 'Inbound Leads Up 200%', 'CRM Efficiency +50%']
  }
];

export const INDUSTRIES: Industry[] = [
  { name: 'Medical & Dental', icon: 'Stethoscope' },
  { name: 'Home Services & Trades', icon: 'Hammer' },
  { name: 'Real Estate & Mortgage', icon: 'Home' },
  { name: 'Automotive', icon: 'Car' },
  { name: 'Professional Services', icon: 'Briefcase' },
  { name: 'Startups & SaaS', icon: 'Zap' }
];

export const REVIEWS: Review[] = [
  { 
    id: 1, 
    name: 'Michael Thorne', 
    company: 'APEX HOME SERVICES', 
    content: "WebIT Solutions didn't just build a site; they built a revenue machine. Our volume tripled in 4 months.", 
    rating: 5, 
    avatar: 'https://i.pravatar.cc/150?u=1' 
  },
  { 
    id: 2, 
    name: 'Dr. Sarah Lee', 
    company: 'ZENITH DENTAL', 
    content: "The AI automation for appointment booking has saved us 20 hours of admin work weekly.", 
    rating: 5, 
    avatar: 'https://i.pravatar.cc/150?u=2' 
  },
  { 
    id: 3, 
    name: 'James Vance', 
    company: 'VANCE REAL ESTATE', 
    content: "Aggressive, fast, and results-oriented. Exactly what our firm needed to scale.", 
    rating: 5, 
    avatar: 'https://i.pravatar.cc/150?u=3' 
  }
];

export const LOGOS = [
  'Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5', 'Logo 6', 'Logo 7', 'Logo 8'
];

export const getIcon = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    Layout: <Layout className="w-6 h-6" />,
    Search: <Search className="w-6 h-6" />,
    Cpu: <Cpu className="w-6 h-6" />,
    BarChart3: <BarChart3 className="w-6 h-6" />,
    Settings2: <Settings2 className="w-6 h-6" />,
    Stethoscope: <Stethoscope className="w-6 h-6" />,
    Hammer: <Hammer className="w-6 h-6" />,
    Home: <Home className="w-6 h-6" />,
    Car: <Car className="w-6 h-6" />,
    Briefcase: <Briefcase className="w-6 h-6" />,
    Zap: <Zap className="w-6 h-6" />
  };
  return icons[iconName] || <Settings2 className="w-6 h-6" />;
};
