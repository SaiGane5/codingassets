import React from 'react';

const Hero = () => {
  return (
    <div className="flex items-center justify-between min-h-screen px-4 md:px-12 pt-24 bg-[#121212] text-[#F5F5F5]">
      <div className="hero-content flex-1 pr-12">
        <h1 
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          style={{
            background: 'linear-gradient(45deg, #D4AF37, #FFD700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          CodingAssets
        </h1>
        <p className="text-xl mb-8">
          Join CodingAssets for skills improvement and professional growth
        </p>
        <button className="bg-[#FFD700] text-[#121212] px-6 py-3 rounded-lg hover:opacity-90 transition">
          Get Started
        </button>
      </div>
      <div className="hidden md:block">
        <img 
          src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=800&auto=format&fit=crop&q=60"
          alt="hero" 
          className="max-w-md max-h-[500px] w-full h-auto rounded-3xl object-cover shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;