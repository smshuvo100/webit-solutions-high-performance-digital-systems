
import React, { useState } from 'react';
import { MessageSquare, X, Send, Loader2, Zap } from 'lucide-react';
import { geminiService } from '../geminiService';

const StrategyAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Stop playing small. What's the biggest bottleneck in your growth right now?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    const aiResponse = await geminiService.getGrowthAdvice(userText);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse || "Error connecting to strategist." }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 sm:w-96 glass-card rounded-[2rem] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-5 bg-white/5 border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <span className="font-black text-xs tracking-widest uppercase text-white/90 flex items-center gap-1">
                <Zap className="w-3 h-3 text-[#F9A825] fill-[#F9A825]" />
                GROWTH STRATEGIST
              </span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="h-80 overflow-y-auto p-5 space-y-4 text-sm scrollbar-thin">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl ${
                  m.role === 'user' 
                  ? 'bg-[#F9A825] text-white rounded-tr-none shadow-lg shadow-[#F9A825]/20 font-bold' 
                  : 'bg-white/5 text-white/90 border border-white/5 rounded-tl-none font-medium backdrop-blur-md'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/5 backdrop-blur-md">
                  <Loader2 className="w-4 h-4 animate-spin text-[#F9A825]" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/5 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your growth hurdle..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#F9A825] transition-all placeholder:text-white/20"
            />
            <button 
              onClick={handleSend}
              className="bg-[#F9A825] text-white p-2.5 rounded-xl hover:bg-[#ffb63a] transition-all shadow-lg shadow-[#F9A825]/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#F9A825] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group relative shadow-[#F9A825]/20 border border-white/20"
        >
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#002B5B] rounded-full flex items-center justify-center text-[10px] font-black text-white border-2 border-white animate-bounce">1</div>
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default StrategyAI;
