import React from 'react';

const Footer = () => {
  return (
    <footer className="footer py-12 sm:py-24 mt-16 sm:mt-32">
      <div className="container mx-auto px-6 sm:px-16 md:px-24">
        <div className="centered-content flex flex-col items-center">
          <h3 className="text-xl sm:text-2xl text-white mb-4 sm:mb-6">Have a project in mind?</h3>
          <a href="mailto:sakshambhown1920@gmail.com" className="text-xl sm:text-3xl md:text-5xl text-white/90 hover:text-neonGreen transition-colors duration-300 font-montserrat font-bold text-center break-words">
            sakshambhown1920@gmail.com
          </a>
          <p className="mt-8 sm:mt-16 text-white/50">Copyright © {new Date().getFullYear()} Saksham</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
