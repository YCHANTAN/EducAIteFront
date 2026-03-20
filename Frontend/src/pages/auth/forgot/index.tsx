import React from 'react';
import logo from '../../../assets/logo.svg'; 
import ForgotHeader from './components/ForgotHeader';
import ForgotForm from './components/ForgotForm';

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased flex flex-col items-center justify-center p-6 relative z-10">
      
      {/* Centered Logo for Auth Pages */}
      <div className="mb-10">
        <img src={logo} alt="educAIte" className="h-12 w-auto" />
      </div>

      {/* Main Form Container */}
      <div className="w-full max-w-[440px] bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
        <ForgotHeader />
        <ForgotForm />
      </div>

    </div>
  );
};

export default ForgotPasswordPage;