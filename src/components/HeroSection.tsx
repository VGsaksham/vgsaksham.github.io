import React from 'react';
import HireButton from './HireButton';

const HeroSection = () => {
  return (
    <section id="home" className="section pt-28 sm:pt-36 md:pt-44 pb-10">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 relative z-10 min-h-[80vh] flex items-center">
        <div className="max-w-3xl">
          <h1 className="heading-name">
            <div className="text-neonGreen text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-0 font-montserrat">FRONTEND</div>
            <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-montserrat">DEVELOPER</div>
          </h1>
          
          <div className="mt-6 text-white/80 text-base sm:text-lg max-w-2xl font-montserrat">
            <p>
              Hi! I'm <span className="font-bold">Saksham</span>. A creative Frontend Developer with 2+ years of
              experience in building high-performance, scalable, and responsive
              web solutions.
            </p>
          </div>
          
          <HireButton />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 