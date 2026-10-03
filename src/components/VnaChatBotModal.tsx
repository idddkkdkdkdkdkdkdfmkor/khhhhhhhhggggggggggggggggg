import React, { useState } from 'react';
import { X, Send, Bot, User, Sparkles, Phone, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface VnaChatBotModalProps {
  isOpen: boolean;
  onClose: () => void;
  openAdmissionModal: () => void;
  openFeeModal: () => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: { label: string; action: () => void }[];
}

export const VnaChatBotModal: React.FC<VnaChatBotModalProps> = ({
  isOpen,
  onClose,
  openAdmissionModal,
  openFeeModal,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Namaste! Welcome to Vishwanath Academy Virtual Assistant. How may I assist you today regarding admissions, fee structure, branches, or curriculum for the 2026-27 academic session?',
      options: [
        { label: 'Admissions 2026-27', action: () => handleSelectOption('Admissions 2026-27') },
        { label: 'Fee Structure', action: () => handleSelectOption('Fee Structure') },
        { label: 'Campus Branches', action: () => handleSelectOption('Campus Branches') },
        { label: 'Contact School Desk', action: () => handleSelectOption('Contact School Desk') },
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');

  if (!isOpen) return null;

  const handleSelectOption = (option: string) => {
    // Append user message
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: option };
    
    let botReply: Message;
    if (option === 'Admissions 2026-27') {
      botReply = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: 'Admissions are currently open for classes Pre-Primary (Playgroup, Nursery, KG) to Senior Secondary (Class XI & XII) for session 2026-27 at both Aashiana and Dhawapur campuses. Would you like to fill the online application form now?',
        options: [
          { label: 'Apply Online Now', action: () => { onClose(); openAdmissionModal(); } },
          { label: 'View Fee Structure', action: () => handleSelectOption('Fee Structure') }
        ]
      };
    } else if (option === 'Fee Structure') {
      botReply = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: 'Vishwanath Academy offers competitive and transparent fees with flexible quarterly installments. You can use our interactive fee & bus transport calculator to see the breakdown for your ward.',
        options: [
          { label: 'Open Fee Calculator & Pay Fee', action: () => { onClose(); openFeeModal(); } },
          { label: 'Ask about Bus Transport', action: () => handleSelectOption('Bus Transport') }
        ]
      };
    } else if (option === 'Campus Branches') {
      botReply = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: 'We have two premier CBSE campuses in Lucknow:\n1. Aashiana Branch (CBSE Aff. 2131278) - Sector M-1, Parag Dairy Road.\n2. Dhawapur Branch (CBSE Aff. 2133890) - 7,993 sqm lush green campus on Kanpur-Mohanlalganj Road.',
      };
    } else if (option === 'Bus Transport') {
      botReply = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: 'Both campuses maintain a dedicated fleet of GPS-tracked, speed-governed school buses equipped with CCTV and trained female attendants covering major Lucknow corridors.',
      };
    } else {
      botReply = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: 'You can directly connect with our admission helpdesk at 1800-120-8622 (Toll Free) or call Aashiana (+91-9695660388) / Dhawapur (+91-6393025211). Email: vishwanathacademy@gmail.com.',
      };
    }

    setMessages((prev) => [...prev, userMsg, botReply]);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    setInputText('');
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: userText };

    let botResponse = 'Thank you for your inquiry. For specific queries regarding ' + userText + ', please reach out to our admission counselors at 1800-120-8622 or email vishwanathacademy@gmail.com.';
    if (userText.toLowerCase().includes('admission') || userText.toLowerCase().includes('apply')) {
      botResponse = 'Admissions are open for 2026-27! You can fill out the online registration form right here.';
    } else if (userText.toLowerCase().includes('fee')) {
      botResponse = 'Our fee structure is available on the Admissions portal, payable in quarterly or monthly installments.';
    }

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      sender: 'bot',
      text: botResponse,
      options: [
        { label: 'Open Admission Form', action: () => { onClose(); openAdmissionModal(); } },
        { label: 'Check Fee Portal', action: () => { onClose(); openFeeModal(); } }
      ]
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col h-[560px]">
        {/* Header */}
        <div className="bg-[#aa2c38] px-5 py-4 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <Bot className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm">VNA Virtual Desk</h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-[11px] text-white/80">Vishwanath Academy Admission & Guidance</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 text-xs">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-7 h-7 rounded-full bg-[#aa2c38] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                  VNA
                </div>
              )}
              <div className={`max-w-[80%] rounded-2xl p-3.5 space-y-2 ${
                msg.sender === 'user' 
                  ? 'bg-[#aa2c38] text-white rounded-tr-none' 
                  : 'bg-white text-slate-800 border border-slate-200 shadow-xs rounded-tl-none'
              }`}>
                <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                {msg.options && msg.options.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={opt.action}
                        className="px-2.5 py-1 rounded-lg bg-red-50 text-[#aa2c38] hover:bg-red-100 font-semibold text-[11px] border border-red-200 transition cursor-pointer"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Input */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your question about admissions, fees, syllabus..."
            className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#aa2c38]/20 focus:border-[#aa2c38]"
          />
          <button
            type="submit"
            className="p-2.5 rounded-xl bg-[#aa2c38] hover:bg-[#8c1f2b] text-white transition cursor-pointer shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
