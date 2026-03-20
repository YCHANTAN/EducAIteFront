import React, { useState, useRef, useEffect } from 'react';
// Make sure this path is correct based on your project structure!
import AImpatin from '../assets/robot.svg'; 

// Define what a message looks like
interface ChatMessage {
    text: string;
    isAi: boolean;
}

const EducAIteAssistantRobot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputText, setInputText] = useState('');
    // Start with a completely blank conversation!
    const [messages, setMessages] = useState<ChatMessage[]>([]); 
    
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to the bottom whenever a new message is added
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = () => {
        if (!inputText.trim()) return;

        // Add the user's message
        const newMessages = [...messages, { text: inputText, isAi: false }];
        setMessages(newMessages);
        setInputText('');

        // Simulate a quick AI response 1 second later
        setTimeout(() => {
            setMessages(prev => [...prev, { 
                text: "I am your AI study buddy! I'm still learning, but I'll be able to help you with your academics soon.", 
                isAi: true 
            }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
            
            {/* The Chat Window Popup */}
            {isOpen && (
                <div className="mb-4 w-[340px] md:w-[380px] bg-black border border-white/20 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 origin-bottom-right">
                    
                    {/* Header */}
                    <div className="flex items-center gap-4 p-4 border-b border-white/20 bg-black z-10 shadow-sm">
                        <div className="w-12 h-12 rounded-full border border-white/20 bg-black flex items-center justify-center overflow-hidden shrink-0">
                            <img src={AImpatin} alt="educAIte Assistant" className="w-8 h-8 object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-white font-bold text-lg leading-tight tracking-wide">
                                educ<span className="text-[#00CEC8]">AI</span>te
                            </h3>
                            <p className="text-white/60 text-xs font-medium">
                                Your study buddy on academics
                            </p>
                        </div>
                    </div>

                    {/* Chat Messages Area - Fixed Height with Scroll but NO visible scrollbar */}
                    <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-4 h-[350px] max-h-[350px] bg-black [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        
                        {messages.length === 0 && (
                            <div className="flex-1 flex items-center justify-center text-white/30 text-sm italic">
                                Type a message to start chatting...
                            </div>
                        )}

                        {messages.map((msg, index) => (
                            msg.isAi ? (
                                /* AI Message with Avatar (Left) */
                                <div key={index} className="self-start flex flex-row items-end gap-2.5 max-w-[85%] animate-in fade-in slide-in-from-left-2 duration-300">
                                    <div className="w-8 h-8 rounded-full border border-white/20 bg-black flex items-center justify-center overflow-hidden shrink-0">
                                        <img src={AImpatin} alt="AI Avatar" className="w-5 h-5 object-contain" />
                                    </div>
                                    <div className="w-full bg-[#D9D9D9] rounded-t-2xl rounded-br-2xl rounded-bl-sm p-3.5 text-black text-sm shadow-md">
                                        {msg.text}
                                    </div>
                                </div>
                            ) : (
                                /* User Message (Right) */
                                <div key={index} className="self-end max-w-[75%] bg-[#00CEC8]/20 border border-[#00CEC8]/30 text-white rounded-t-2xl rounded-bl-2xl rounded-br-sm p-3.5 text-sm shadow-md animate-in fade-in slide-in-from-right-2 duration-300">
                                    {msg.text}
                                </div>
                            )
                        ))}
                        {/* Invisible div to force auto-scroll to bottom */}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area (Matched exactly to your image) */}
                    <div className="p-4 flex items-center gap-3 bg-black mt-auto border-t border-white/10">
                        
                        {/* Solid White Circle */}
                        <button className="w-10 h-10 rounded-full bg-white shrink-0 hover:scale-105 active:scale-95 transition-transform flex items-center justify-center shadow-md">
                        </button>
                        
                        {/* --- NEW SEPARATED INPUT AREA --- */}
                        
                        {/* Solid Gray Input Pill - Now only contains the input text */}
                        <div className="flex-1 h-11 bg-[#737373] rounded-full overflow-hidden focus-within:ring-2 ring-white/30 transition-all">
                            <input 
                                type="text" 
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Message educAIte..."
                                className="w-full h-full bg-transparent px-5 text-white outline-none placeholder:text-white/60 text-sm font-medium"
                            />
                        </div>
                        
                        {/* Separate, Distinct Send Button Island */}
                        <button 
                            onClick={handleSend}
                            disabled={!inputText.trim()}
                            // This button island gets its own shadow and hover effects to make it a distinct button "island"
                            className="w-11 h-11 rounded-full bg-black border-[1.5px] border-white/20 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:bg-white/5 hover:border-[#00CEC8]/50 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black disabled:hover:border-white/20 cursor-pointer"
                        >
                            {/* Updated to a much clearer Paper Plane Icon, color matched to system teal (#00CEC8) */}
                            <svg className="text-[#00CEC8]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"/>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                            </svg>
                        </button>
                    </div>

                </div>
            )}

            {/* The Floating Robot Toggle Button */}
            <div 
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full border border-white/20 flex items-center justify-center overflow-hidden cursor-pointer transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95
                    ${isOpen ? 'bg-white/10 scale-105 border-[#00CEC8]/50 shadow-[0_0_20px_rgba(0,206,200,0.2)]' : 'bg-black hover:bg-white/5 hover:scale-110'}
                `}
            >
                <img src={AImpatin} alt="educAIte Assistant" className="w-10 h-10 object-contain" />
            </div>

        </div>
    );
};

export default EducAIteAssistantRobot; 