'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, Send, MessageSquare, AlertCircle } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

// Initialize the API lazily
let ai: GoogleGenAI | null = null;
function getAI() {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || 'missing-key' });
  }
  return ai;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Welcome to FSD Global Services! I'm Joy. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const aiChatRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const initChat = () => {
    if (!aiChatRef.current) {
      const genai = getAI();
      aiChatRef.current = genai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: "You are Joy, a helpful customer support chatbot for FSD Global Services Limited, a Nigeria-based integrated business support company (Facility management, Recruitment, IT Security, Logistics). Keep answers brief, friendly, and professional.",
        }
      });
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      setIsError(false);
      initChat();
      
      // Setup a placeholder for the incoming stream
      setMessages(prev => [...prev, { role: 'model', text: "" }]);
      
      const payloadMessage = selectedService 
        ? `[Context] The user is inquiring specifically about: ${selectedService}. [Message] ${userMsg}` 
        : userMsg;

      const streamResponse = await aiChatRef.current.sendMessageStream({ message: payloadMessage });
      
      let fullText = "";
      for await (const chunk of streamResponse) {
         if (chunk.text) {
           fullText += chunk.text;
           setMessages(prev => {
             const newMsgs = [...prev];
             newMsgs[newMsgs.length - 1] = { role: 'model', text: fullText };
             return newMsgs;
           });
         }
      }
    } catch (e) {
      console.error("Chat error:", e);
      setIsError(true);
      setMessages(prev => {
         const newMsgs = [...prev];
         newMsgs[newMsgs.length - 1] = { 
           role: 'model', 
           text: "Sorry, I'm having trouble connecting right now. Please test again later or contact us directly." 
         };
         return newMsgs;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      initChat();
    }
  };

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-[#0A2540] p-4 flex items-center justify-between text-white border-b border-blue-900">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-orange-500 shadow-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1666867936058-de34bfd5b320?q=80&w=442&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Joy support agent" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Joy</h3>
                <p className="text-xs text-blue-200">FSD Support AI</p>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors shadow-sm"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
              Close
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'model' && (
                  <div className="w-6 h-6 rounded-full overflow-hidden mr-2 shrink-0 relative top-1">
                    <Image 
                      src="https://images.unsplash.com/photo-1666867936058-de34bfd5b320?q=80&w=442&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Joy avatar" 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div 
                  className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-orange-500 text-white rounded-br-none' 
                      : 'bg-white border border-gray-200 text-gray-800 shadow-sm rounded-bl-none'
                  }`}
                >
                  {msg.text || (msg.role === 'model' && isLoading && idx === messages.length - 1 ? (
                    <div className="flex gap-1 items-center h-5">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  ) : null)}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100 flex flex-col gap-2 relative">
            {isError && (
              <div className="flex items-center gap-1.5 text-xs text-red-500 bg-red-50 px-3 py-1.5 rounded-md outline outline-1 outline-red-200">
                <AlertCircle className="w-4 h-4" />
                <span>Connection failed. Please try again.</span>
              </div>
            )}
            
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              disabled={isLoading}
              className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 text-gray-700 mb-1 disabled:opacity-50"
            >
              <option value="">General Inquiry</option>
              <option value="Facility Management">Facility Management</option>
              <option value="Recruitment & Manpower">Recruitment & Manpower</option>
              <option value="IT & Security Systems">IT & Security Systems</option>
              <option value="Procurement & Supply">Procurement & Supply</option>
              <option value="Logistics & Export">Logistics & Export</option>
            </select>

            <div className={`flex items-center gap-2 rounded-full border ${isError ? 'border-red-400 bg-red-50/50' : 'border-gray-200 bg-gray-50'} p-1.5 pr-2 focus-within:ring-2 focus-within:ring-orange-500/30 focus-within:border-orange-500 transition-all shadow-inner`}>
              <input 
                type="text" 
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  if (isError) setIsError(false);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 bg-transparent px-4 py-2 text-sm focus:outline-none disabled:opacity-50 text-gray-800 placeholder:text-gray-400"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={`text-white p-2.5 rounded-full transition-all flex items-center justify-center shrink-0 shadow-md ${(!input.trim() || isLoading) ? 'bg-gray-300 cursor-not-allowed shadow-none' : 'bg-orange-500 hover:bg-orange-600 hover:scale-105 active:scale-95 text-white'}`}
                aria-label="Send message"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4 ml-0.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      {!isOpen && (
        <button 
          onClick={toggleChat}
          className="relative inline-flex items-center justify-center bg-[#0A2540] hover:bg-blue-900 text-white w-14 h-14 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          aria-label="Open chat"
        >
          {/* Tooltip */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-sm">
            chat with us
            {/* Arrow */}
            <span className="absolute top-1/2 -translate-y-1/2 -right-1 border-4 border-transparent border-l-gray-900"></span>
          </span>

          {/* Avatar inside FAB to make it personal */}
          <div className="absolute inset-0.5 rounded-full overflow-hidden border-2 border-[#0A2540] shadow-sm">
            <Image 
              src="https://images.unsplash.com/photo-1666867936058-de34bfd5b320?q=80&w=442&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Support AI" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="absolute -top-1 -right-1 bg-orange-500 w-4 h-4 rounded-full border-2 border-white animate-pulse"></div>
        </button>
      )}
    </div>
  );
}
