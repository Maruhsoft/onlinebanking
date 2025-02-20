import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-800">
      <img 
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
        alt="FirstBank Building"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About FirstBank</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Leading the way in banking since 1894
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;