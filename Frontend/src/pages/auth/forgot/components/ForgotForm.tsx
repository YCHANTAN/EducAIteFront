import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import seePass from '../../../../assets/see-pass.svg';
import hidePass from '../../../../assets/hide-pass.svg';

const ForgotForm: React.FC = () => {
  // State to manage which step of the process we are on
  const [step, setStep] = useState<1 | 2>(1);
  
  // Form Data States
  const [schoolId, setSchoolId] = useState('');
  const [resetCode, setResetCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // UI States
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Handle Step 1: Requesting the Code
  const handleRequestCode = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending reset code to School ID:", schoolId);
    // In a real app, you would wait for an API success response here
    setStep(2); 
  };

  // Handle Step 2: Submitting the New Password
  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Password reset successful for:", { schoolId, resetCode, newPassword });
    // After successful reset, send them back to login
    navigate('/login'); 
  };

  return (
    <div className="w-full max-w-[420px] md:max-w-[520px] bg-[#111111] text-white rounded-3xl border border-white/10 p-12 shadow-[0_8px_30px_rgba(0,0,0,0.5)] mx-auto">
      
      <h2 className="text-[1.75rem] font-bold text-white text-center mb-4 tracking-tight">
        {step === 1 ? 'Reset Password' : 'Create New Password'}
      </h2>
      
      <p className="text-center text-white/50 text-sm mb-10 max-w-xs mx-auto">
        {step === 1 
          ? "Enter your School ID and we'll send a verification code to your registered email."
          : `Enter the code sent to your email to reset the password for ${schoolId}.`
        }
      </p>

      {/* --- STEP 1 FORM: REQUEST CODE --- */}
      {step === 1 && (
        <form onSubmit={handleRequestCode} className="flex flex-col gap-6">
          <div className="w-full">
            <input
              type="text"
              placeholder="School ID"
              value={schoolId}
              onChange={(e) => setSchoolId(e.target.value)}
              className="w-full px-4 py-3.5 border border-white/20 rounded-xl text-[0.95rem] text-white bg-black outline-none transition-all placeholder:text-white/40 focus:border-[#00CEC8] focus:shadow-[0_0_0_3px_rgba(0,206,200,0.08)]"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-4 mt-2 bg-white text-black rounded-xl text-lg font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Send Reset Code
          </button>
        </form>
      )}

      {/* --- STEP 2 FORM: ENTER CODE & NEW PASSWORD --- */}
      {step === 2 && (
        <form onSubmit={handleResetPassword} className="flex flex-col gap-6">
          
          <div className="w-full">
            <input
              type="text"
              placeholder="6-Digit Verification Code"
              value={resetCode}
              onChange={(e) => setResetCode(e.target.value)}
              className="w-full px-4 py-3.5 border border-white/20 rounded-xl text-[0.95rem] text-white bg-black outline-none transition-all placeholder:text-white/40 focus:border-[#00CEC8] tracking-widest text-center"
              maxLength={6}
              required
            />
          </div>

          <div className="relative w-full">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3.5 border border-white/20 rounded-xl text-[0.95rem] text-white bg-black outline-none transition-all placeholder:text-white/40 focus:border-[#00CEC8]"
              required
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 opacity-50 hover:opacity-100 transition-opacity filter invert"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img src={showPassword ? hidePass : seePass} alt="toggle" className="w-[20px] h-[20px]"/>
            </button>
          </div>

          <div className="w-full">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3.5 border border-white/20 rounded-xl text-[0.95rem] text-white bg-black outline-none transition-all placeholder:text-white/40 focus:border-[#00CEC8]"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-4 mt-2 bg-white text-black rounded-xl text-lg font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Update Password
          </button>
        </form>
      )}

      {/* --- BACK TO LOGIN LINK --- */}
      <div className="text-center mt-8 pt-6 border-t border-white/10">
        <Link 
          to="/login" 
          className="text-sm font-medium text-white/50 hover:text-white transition-colors"
        >
          ← Back to Login
        </Link>
      </div>

    </div>
  );
};

export default ForgotForm;