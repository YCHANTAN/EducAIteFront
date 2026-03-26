import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizScoreModal } from '../components/QuizScoreModal'; // <-- 1. Import the modal
import logo from '../../../assets/educAIte-logo.svg';
import AImpatin from '../../../assets/robot.svg';

export function CodeChallengePage() {
  const navigate = useNavigate();

  // --- 2. ADD STATE FOR THE MODAL ---
  const [showScoreModal, setShowScoreModal] = useState(false);

  // The code inside the editor
  const [code, setCode] = useState(`// Imports
import mongoose, { Schema } from 'mongoose'

// Collection name
export const collection = 'Product'

// Schema
const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  
  description: {
    type: String
  }
}, {timestamps: true})

// Model
export default mongoose.model(collection, schema, collection)`);

  const lineNumbers = Array.from({ length: 33 }, (_, i) => i + 1);

  return (
    <div className="h-screen bg-black px-6 py-6 text-white font-sans antialiased flex flex-col overflow-hidden relative">
      
      {/* HEADER ROW */}
      <div className="flex items-center justify-between mb-6 shrink-0">
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all bg-black/50"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <img src={logo} alt="educAIte" className="h-8" />
        </div>
        
        <div className="hidden md:flex bg-black border border-white/20 rounded-full px-8 py-3 gap-8 text-sm font-medium text-white/50">
           <span className="hover:text-white cursor-pointer transition-colors">Home</span>
           <span className="hover:text-white cursor-pointer transition-colors">Courses</span>
           <span className="hover:text-white cursor-pointer transition-colors">Analytics</span>
           <span className="text-[#00CEC8] border-b-2 border-[#00CEC8] pb-1 cursor-pointer">Flashcards</span>
           <span className="hover:text-white cursor-pointer transition-colors">Tracker</span>
           <span className="hover:text-white cursor-pointer transition-colors">Calendar</span>
           <span className="hover:text-white cursor-pointer transition-colors">Resume</span>
        </div>
        
        <div className="w-[120px]"></div>
      </div>

      {/* MAIN WORKSPACE GRID */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-4 min-h-0 pb-4">
        
        {/* LEFT PANEL: CODE EDITOR */}
        <section className="bg-[#18181A] border border-white/10 rounded-[20px] flex flex-col overflow-hidden shadow-lg">
          <div className="flex items-end justify-between px-4 pt-3 border-b border-white/10 shrink-0">
            <div className="bg-[#242427] border border-white/10 border-b-0 rounded-t-xl px-5 py-2.5 flex items-center gap-2 text-sm font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD43B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
              Code Editor
            </div>
            <button className="bg-white text-black font-bold text-[13px] px-6 py-1.5 rounded-full mb-2 hover:bg-gray-200 transition-colors flex items-center gap-2">
              Run
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
            </button>
          </div>

          <div className="flex flex-1 overflow-hidden bg-[#18181A]">
            <div className="w-12 pt-4 pb-4 flex flex-col items-center text-[#555] font-mono text-[13px] leading-[1.6] shrink-0 select-none bg-[#18181A]">
              {lineNumbers.map(num => (
                <div key={num}>{num}</div>
              ))}
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck="false"
              className="flex-1 w-full bg-transparent text-[#E2E8F0] font-mono text-[13px] leading-[1.6] p-4 outline-none resize-none whitespace-pre"
            />
          </div>
        </section>

        {/* RIGHT PANELS */}
        <section className="flex flex-col gap-4 min-h-0">
          
          {/* TOP RIGHT: DESCRIPTION */}
          <div className="flex-[3] bg-[#18181A] border border-white/10 rounded-[20px] flex flex-col overflow-hidden shadow-lg">
            <div className="flex items-end px-4 pt-3 border-b border-white/10 shrink-0 gap-1">
              <div className="bg-[#242427] border border-white/10 border-b-0 rounded-t-xl px-5 py-2.5 flex items-center gap-2 text-sm font-medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                Description
              </div>
              <button className="text-white/40 hover:text-white transition-colors px-5 py-2.5 flex items-center gap-2 text-sm font-medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
                Solution
              </button>
            </div>

            <div className="p-8 overflow-y-auto">
              <h2 className="text-3xl font-bold mb-6">Mongoose</h2>
              <p className="text-white/80 text-[15px] leading-relaxed mb-6">
                Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
              </p>
              <p className="text-white/80 text-[15px] leading-relaxed mb-8">
                Note that minor deviation from millis in the actual sleep duration is acceptable.
              </p>
              <div className="mb-4 text-white/90 font-medium">Example 1:</div>
              <div className="border border-white/10 bg-[#202023] rounded-xl p-5 font-mono text-[13px] leading-relaxed text-white/80 mb-6">
                <span className="text-white">Input:</span> millis = 100<br/>
                <span className="text-white">Output:</span> 100<br/>
                <span className="text-white">Explanation:</span> It should return a promise that resolves after 100ms.<br/>
                let t = Date.now();<br/>
                sleep(100).then(() ={'>'} {'{'}<br/>
                &nbsp;&nbsp;console.log(Date.now() - t); // 100<br/>
                {'}'});
              </div>
              <div className="text-white/90 font-medium">Example 2:</div>
            </div>
          </div>

          {/* BOTTOM RIGHT: TEST CASES */}
          <div className="flex-[2] bg-[#18181A] border border-white/10 rounded-[20px] flex flex-col overflow-hidden shadow-lg">
            
            <div className="flex items-end justify-between px-4 pt-3 border-b border-white/10 shrink-0">
              <div className="bg-[#242427] border border-white/10 border-b-0 rounded-t-xl px-5 py-2.5 flex items-center gap-2 text-sm font-medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
                Test Cases
              </div>
              
              {/* --- 3. ADD THE onClick HANDLER HERE --- */}
              <button 
                onClick={() => {
                  navigate('/code-learn', { state: { showScore: true } });
                }}
                className="bg-white text-black font-bold text-[13px] px-8 py-1.5 rounded-full mb-2 hover:bg-gray-200 transition-colors shadow-md active:scale-95"
              >
                Submit
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5">
              <div className="text-white/80 font-mono text-[13px]">
                <div className="font-sans font-medium text-white mb-1">Testcase 1</div>x = 121
              </div>
              <div className="text-white/80 font-mono text-[13px]">
                <div className="font-sans font-medium text-white mb-1">Testcase 2</div>x = 121
              </div>
              <div className="text-white/80 font-mono text-[13px]">
                <div className="font-sans font-medium text-white mb-1">Testcase 3</div>x = 121
              </div>
              <div className="text-white/80 font-mono text-[13px]">
                <div className="font-sans font-medium text-white mb-1">Testcase 4</div>x = 121
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="fixed bottom-6 right-6 z-40">
        <div className="w-12 h-12 rounded-full border border-white/20 bg-[#050505] flex items-center justify-center overflow-hidden cursor-pointer hover:scale-110 transition-all shadow-xl">
          <img src={AImpatin} alt="bot" className="w-8 h-8 object-contain" />
        </div>
      </div>

      {/* --- 4. CONDITIONALLY RENDER THE MODAL --- */}
      {showScoreModal && (
        <QuizScoreModal 
          score={72} 
          message="Is is a promising score that shows you're on the right track, but leveling up your logic and code mastery will push your performance even higher."
          onClose={() => setShowScoreModal(false)}
        />
      )}
      
    </div>
  );
}

export default CodeChallengePage;