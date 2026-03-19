import React from 'react';
import Search from './Search';

const DashboardHeader: React.FC = () => {
    return (
        <div className="flex flex-col items-center w-full mb-12">

            {/* Welcome Text */}
            <div className="text-center w-full max-w-[800px] mb-8">
                <h1 className="text-[3rem] md:text-[4rem] font-bold text-white leading-tight tracking-tight mb-4">
                    Welcome back, <span className="text-[#00CEC8]">Christian</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 font-medium">
                    Your personalized AI dashboard — track your growth, progress, and insights.
                </p>
            </div>

            {/* Search Bar */}
            <Search />
        </div>
    );
};

export default DashboardHeader;