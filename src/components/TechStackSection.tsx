import React, { useEffect, useRef } from 'react';

const TechStackSection = () => {
  const techItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animatingItems = useRef<Set<Element>>(new Set()); // Track currently animating items
  
  useEffect(() => {
    // Make sure the section is initially visible
    const section = document.getElementById('tech-stack');
    if (section) {
      section.classList.add('section-visible');
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Skip if this element is already being animated
          if (animatingItems.current.has(entry.target)) {
            return;
          }
          
          if (entry.isIntersecting) {
            // Only animate in if not already visible
            if (!entry.target.classList.contains('tech-item-visible')) {
            entry.target.classList.add('tech-item-visible');
              entry.target.classList.remove('tech-item-hidden', 'tech-item-exiting');
            }
          } else {
            // Only start exit animation if the element was visible
            if (entry.target.classList.contains('tech-item-visible')) {
              // Prevent multiple animations on the same element
              animatingItems.current.add(entry.target);
              
              entry.target.classList.remove('tech-item-visible');
              entry.target.classList.add('tech-item-exiting');
              
              // After animation completes, hide it and remove from tracking
              setTimeout(() => {
                if (!entry.target.classList.contains('tech-item-visible')) {
              entry.target.classList.add('tech-item-hidden');
                  entry.target.classList.remove('tech-item-exiting');
                }
                animatingItems.current.delete(entry.target);
              }, 300); // Slightly longer than animation duration to ensure completion
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-10% 0px -10% 0px', // Smaller margin to reduce trigger area
        threshold: [0.1, 0.4], // Multiple thresholds for smoother transitions
      }
    );

    techItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      techItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
      animatingItems.current.clear();
    };
  }, []);

  return (
    <section id="tech-stack" className="section py-16 md:py-24 bg-black/80">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl ml-0 sm:ml-10 md:ml-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-10 sm:mb-16 flex items-center gap-2">
            <span className="text-white/50 text-lg sm:text-xl md:text-2xl">*</span> 
            MY STACK
          </h2>
          
          <div className="mb-16 sm:mb-24">
            <h3 className="heading-large text-white/80 mb-6 sm:mb-8 md:mb-12 font-montserrat text-lg sm:text-xl md:text-2xl flex items-center gap-2">
              <span className="text-white/50 text-base sm:text-lg md:text-xl">*</span>
              FRONTEND
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 sm:gap-x-3 gap-y-4 sm:gap-y-6 md:gap-8 mb-8 sm:mb-12">
              <div 
                className="tech-icon tech-item-hidden flex flex-col items-center md:items-start md:flex-row" 
                ref={el => techItemsRef.current[0] = el}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-white flex items-center justify-center rounded-md overflow-hidden">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                </div>
                <span className="text-white text-xs sm:text-sm md:text-lg font-montserrat mt-2 md:mt-0 md:ml-3">HTML</span>
              </div>
              <div 
                className="tech-icon tech-item-hidden flex flex-col items-center md:items-start md:flex-row" 
                ref={el => techItemsRef.current[1] = el}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-white flex items-center justify-center rounded-md overflow-hidden">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                </div>
                <span className="text-white text-xs sm:text-sm md:text-lg font-montserrat mt-2 md:mt-0 md:ml-3">CSS</span>
              </div>
              <div 
                className="tech-icon tech-item-hidden flex flex-col items-center md:items-start md:flex-row" 
                ref={el => techItemsRef.current[2] = el}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-white flex items-center justify-center rounded-md overflow-hidden">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                </div>
                <span className="text-white text-xs sm:text-sm md:text-lg font-montserrat mt-2 md:mt-0 md:ml-3">Javascript</span>
              </div>
              <div 
                className="tech-icon tech-item-hidden flex flex-col items-center md:items-start md:flex-row" 
                ref={el => techItemsRef.current[3] = el}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-white flex items-center justify-center rounded-md overflow-hidden">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                </div>
                <span className="text-white text-xs sm:text-sm md:text-lg font-montserrat mt-2 md:mt-0 md:ml-3">React</span>
              </div>
              <div 
                className="tech-icon tech-item-hidden flex flex-col items-center md:items-start md:flex-row" 
                ref={el => techItemsRef.current[4] = el}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-white flex items-center justify-center rounded-md overflow-hidden">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                </div>
                <span className="text-white text-xs sm:text-sm md:text-lg font-montserrat mt-2 md:mt-0 md:ml-3">Next.js</span>
              </div>
              <div 
                className="tech-icon tech-item-hidden flex flex-col items-center md:items-start md:flex-row" 
                ref={el => techItemsRef.current[5] = el}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-[#06B6D4] flex items-center justify-center rounded-md overflow-hidden">
                  <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 md:w-8 md:h-8">
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                  </svg>
                </div>
                <span className="text-white text-xs sm:text-sm md:text-lg font-montserrat mt-2 md:mt-0 md:ml-3">Tailwind</span>
              </div>
              <div 
                className="tech-icon tech-item-hidden flex flex-col items-center md:items-start md:flex-row" 
                ref={el => techItemsRef.current[6] = el}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-[#0055FF] flex items-center justify-center rounded-md overflow-hidden">
                  <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 md:w-8 md:h-8">
                    <path d="M4 2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm0 2v16h16V4H4zm7.8 9.85c.34.14.71.15 1.06.03L17 12v-2l-5.1 2.18c-.38.15-.8.15-1.19 0L6 10.5l1.5 3.13c.17.35.44.64.79.77l3.51 1.45zM6.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11-11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  </svg>
                </div>
                <span className="text-white text-xs sm:text-sm md:text-lg font-montserrat mt-2 md:mt-0 md:ml-3">Framer</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="heading-large text-white/80 mb-6 sm:mb-8 md:mb-12 font-montserrat text-lg sm:text-xl md:text-2xl flex items-center gap-2">
              <span className="text-white/50 text-base sm:text-lg md:text-xl">*</span>
              BACKEND
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 sm:gap-x-3 gap-y-4 sm:gap-y-6 md:gap-8">
              <div 
                className="tech-icon tech-item-hidden flex flex-col items-center md:items-start md:flex-row" 
                ref={el => techItemsRef.current[7] = el}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-white flex items-center justify-center rounded-md overflow-hidden">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                </div>
                <span className="text-white text-xs sm:text-sm md:text-lg font-montserrat mt-2 md:mt-0 md:ml-3">PHP</span>
              </div>
              <div 
                className="tech-icon tech-item-hidden flex flex-col items-center md:items-start md:flex-row" 
                ref={el => techItemsRef.current[8] = el}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-white flex items-center justify-center rounded-md overflow-hidden">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                </div>
                <span className="text-white text-xs sm:text-sm md:text-lg font-montserrat mt-2 md:mt-0 md:ml-3">SQL</span>
              </div>
              <div 
                className="tech-icon tech-item-hidden flex flex-col items-center md:items-start md:flex-row" 
                ref={el => techItemsRef.current[9] = el}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-white flex items-center justify-center rounded-md overflow-hidden">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                </div>
                <span className="text-white text-xs sm:text-sm md:text-lg font-montserrat mt-2 md:mt-0 md:ml-3">Flask</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
