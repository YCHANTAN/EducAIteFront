import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import BorderGlow from '../../../components/BorderGlow'; // <-- Import the BorderGlow component
import AImpatin from '../../../assets/robot.svg'; 

interface QuizScoreModalProps {
  score: number;
  message: string;
  onClose: () => void;
}

export function QuizScoreModal({ score, message, onClose }: QuizScoreModalProps) {
  const navigate = useNavigate(); 

  // --- SVG Gauge Calculations ---
  const radius = 100;
  const cx = 110;
  const cy = 110;
  const circumference = Math.PI * radius; 
  const dashoffset = circumference * (1 - score / 100);
  const angleInRadians = (score / 100) * Math.PI;
  const thumbX = cx - radius * Math.cos(angleInRadians);
  const thumbY = cy - radius * Math.sin(angleInRadians);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm animate-in fade-in duration-300">
      
      {/* Wrapper to control the modal's width and apply BorderGlow */}
      <div className="w-full max-w-[550px] shadow-[0_0_80px_rgba(0,0,0,0.8)] rounded-[32px]">
        <BorderGlow>
          
          {/* Inner Content Container */}
          <div className="w-full h-full rounded-[30px] bg-[#0A0A0A] p-12 text-center relative">
            
            <h2 className="text-[28px] font-bold text-white mb-10 mx-auto max-w-[400px] leading-[1.3]">
              Your score on the Technical Programming quiz
            </h2>
            
            <div className="relative w-[220px] h-[120px] mx-auto mb-10">
              <svg viewBox="0 0 220 120" className="w-full h-full overflow-visible">
                <path d={`M 10 ${cy} A ${radius} ${radius} 0 0 1 210 ${cy}`} fill="none" stroke="#E2E8F0" strokeWidth="16" strokeLinecap="round" strokeOpacity="0.1" />
                <path 
                  d={`M 10 ${cy} A ${radius} ${radius} 0 0 1 210 ${cy}`} 
                  fill="none" stroke="#00CEC8" strokeWidth="16" strokeLinecap="round"
                  strokeDasharray={circumference} strokeDashoffset={dashoffset}
                  className="transition-all duration-1000 ease-out"
                />
                <circle cx={thumbX} cy={thumbY} r="10" fill="#00CEC8" stroke="#0A0A0A" strokeWidth="4" className="transition-all duration-1000 ease-out shadow-lg" />
              </svg>

              <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                <span className="text-[40px] font-bold text-[#00CEC8] leading-none">
                  {score}%
                </span>
              </div>

              <div className="absolute -top-6 -right-16 drop-shadow-2xl animate-bounce-slow">
                <img src={AImpatin} alt="bot" className="w-20 h-20 object-contain drop-shadow-xl" />
              </div>
            </div>

            <p className="mx-auto max-w-[440px] text-[17px] leading-[1.6] text-white/90 mb-10 font-medium">
              {message}
            </p>

            {/* Confirm Button with Theme Color Hover/Highlight */}
            <button 
              onClick={() => {
                onClose(); 
                navigate('/performance'); 
              }} 
              className="w-48 rounded-full bg-white px-8 py-3.5 text-black font-bold shadow-md hover:bg-[#00CEC8] hover:text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(0,206,200,0.5)] transition-all duration-300 uppercase tracking-wide"
            >
              Confirm
            </button>

          </div>
        </BorderGlow>
      </div>
    </div>
  );
}

export default QuizScoreModal;