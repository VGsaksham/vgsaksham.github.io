import React from 'react';

const EmailLink = () => {
  return (
    <>
      {/* Desktop phone link - hidden on mobile, shown on md and up */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center">
          <a 
            href="tel:+916284722026" 
            className="vertical-text text-white/70 hover:text-neonGreen transition-colors py-6"
          >
            +91 6284722026
          </a>
        </div>
      </div>

      {/* Mobile phone link removed as requested */}
    </>
  );
};

export default EmailLink;
