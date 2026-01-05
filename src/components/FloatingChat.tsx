'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
}

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio on mount
  useEffect(() => {
    audioRef.current = new Audio('/mixkit-message-pop-alert-2354.mp3');
  }, []);

  const botReplies = [
    "Terima kasih atas pertanyaannya! Ini menarik sekali. 🤔",
    "Saya setuju dengan pendapat kamu. Boleh cerita lebih lanjut? 👂",
    "Wah, itu sangat menarik! Saya ingin tahu lebih banyak. 📚",
    "Bagus sekali! Apakah ada hal lain yang ingin kamu tanyakan? 💡",
    "Saya memahami. Bisa kamu jelaskan lebih detail? 🔍",
    "Sangat berkesan! Terima kasih telah berbagi. 🙏",
    "Itu ide yang brilliant! Aku suka itu. ⚡",
    "Benar sekali! Kamu punya insight yang bagus. 🎯",
    "Menarik sekali perspektifmu tentang hal ini! 🌟",
    "Aku akan mengingat itu. Terima kasih atas insights-nya! 💾",
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Hari ini';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Kemarin';
    } else {
      return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long' });
    }
  };

  useEffect(() => {
    setIsMounted(true);
    const savedMessages = localStorage.getItem('putra_bot_messages');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        const messagesWithDates = parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }));
        setMessages(messagesWithDates);
      } catch (e) {
        initWelcomeMessage();
      }
    } else {
      initWelcomeMessage();
    }
  }, []);

  const initWelcomeMessage = () => {
    const welcomeMsg: Message = {
      id: '1',
      text: "Halo! 👋 Saya adalah Putra Bot, asisten virtual Andi Putra. Senang bertemu dengan kamu! Ada yang bisa saya bantu hari ini?",
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages([welcomeMsg]);
  };

  useEffect(() => {
    if (isMounted && messages.length > 0) {
      localStorage.setItem('putra_bot_messages', JSON.stringify(messages));
    }
  }, [messages, isMounted]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const typingMessage: Message = {
      id: 'typing',
      text: 'Putra Bot sedang mengetik',
      sender: 'bot',
      timestamp: new Date(),
      isTyping: true,
    };
    setMessages(prev => [...prev, typingMessage]);

    const delay = 1000 + Math.random() * 1500;
    setTimeout(() => {
      setMessages(prev => prev.filter(msg => msg.id !== 'typing'));

      const randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomReply,
        sender: 'bot',
        timestamp: new Date(),
      };

      // Play notification sound
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => { });
      }

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, delay);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    initWelcomeMessage();
    localStorage.removeItem('putra_bot_messages');
  };

  const groupedMessages = messages.reduce((acc, msg) => {
    const dateStr = msg.timestamp.toDateString();
    if (!acc[dateStr]) {
      acc[dateStr] = [];
    }
    acc[dateStr].push(msg);
    return acc;
  }, {} as Record<string, Message[]>);

  if (!isMounted) return null;

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-violet-600 to-indigo-600 light:from-violet-500 light:to-indigo-500 text-white rounded-full shadow-lg shadow-violet-500/50 light:shadow-violet-400/40 hover:shadow-xl hover:shadow-violet-500/70 hover:scale-110 transition-all duration-300 flex items-center justify-center text-3xl z-40 group"
      >
        <span className={`group-hover:scale-125 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          🤖
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[380px] h-[550px] bg-slate-900 light:bg-white backdrop-blur-xl border border-violet-500/30 light:border-slate-200 rounded-3xl shadow-2xl shadow-violet-500/20 light:shadow-slate-300/50 flex flex-col z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Putra Bot</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-violet-200 text-xs">Online • Siap membantu</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/20 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-900/80 light:bg-slate-50 scroll-smooth">
            {Object.entries(groupedMessages).map(([dateStr, msgs]) => (
              <div key={dateStr}>
                <div className="flex items-center gap-2 my-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-violet-500/30 light:via-slate-300 to-transparent" />
                  <span className="text-xs text-slate-400 light:text-slate-500 px-3 py-1 bg-slate-800/50 light:bg-white rounded-full border border-slate-700/50 light:border-slate-200">
                    {formatDate(new Date(dateStr))}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-violet-500/30 light:via-slate-300 to-transparent" />
                </div>

                {msgs.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} gap-2 mb-3`}>
                    {msg.sender === 'bot' && !msg.isTyping && (
                      <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-violet-500/30">
                        🤖
                      </div>
                    )}

                    <div className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} max-w-[75%]`}>
                      {msg.isTyping ? (
                        <div className="px-4 py-3 bg-violet-500/20 light:bg-violet-100 rounded-2xl rounded-bl-md border border-violet-500/30 light:border-violet-200 flex items-center gap-3">
                          <span className="text-slate-300 light:text-slate-600 text-sm">{msg.text}</span>
                          <div className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                      ) : (
                        <>
                          <div
                            className={`px-4 py-2.5 rounded-2xl break-words shadow-sm transition-all duration-200 ${msg.sender === 'user'
                              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-br-md'
                              : 'bg-slate-800/80 light:bg-white border border-slate-700/50 light:border-slate-200 text-slate-200 light:text-slate-700 rounded-bl-md'
                              }`}
                          >
                            {msg.text}
                          </div>
                          <span className="text-xs text-slate-500 light:text-slate-400 mt-1.5 px-1">
                            {formatTime(msg.timestamp)}
                          </span>
                        </>
                      )}
                    </div>

                    {msg.sender === 'user' && !msg.isTyping && (
                      <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-violet-500/30">
                        👤
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-slate-700/50 light:border-slate-200 p-4 bg-slate-900/90 light:bg-white">
            <div className="flex gap-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tulis pesan..."
                rows={1}
                className="flex-1 bg-slate-800/80 light:bg-slate-100 border border-slate-700/50 light:border-slate-200 rounded-xl px-4 py-3 text-slate-200 light:text-slate-900 placeholder-slate-500 light:placeholder-slate-400 focus:outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200 resize-none text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
                className="w-12 h-12 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl hover:from-violet-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center hover:scale-105 active:scale-95 shadow-lg shadow-violet-500/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-end mt-2">
              <button
                onClick={clearChat}
                className="text-xs text-slate-500 light:text-slate-400 hover:text-violet-400 light:hover:text-violet-600 transition-colors duration-200"
              >
                Hapus chat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
