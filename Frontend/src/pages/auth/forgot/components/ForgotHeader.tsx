import React from 'react';

const ForgotHeader: React.FC = () => {
  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
        Reset Password
      </h1>
      <p className="text-sm md:text-base text-white/50 max-w-sm mx-auto leading-relaxed">
        Enter your email address and we'll send you a link to get back into your account.
      </p>
    </div>
  );
};

export default ForgotHeader;