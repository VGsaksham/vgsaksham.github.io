import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const location = useLocation();
  const lastHash = useRef('');

  // This effect runs on location change
  useEffect(() => {
    // If we have a hash and it's changed since last render
    if (location.hash && location.hash !== lastHash.current) {
      lastHash.current = location.hash;
      
      // Get the element with the id matching our hash
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Wait a bit for everything to render
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80, // Subtract some pixels for navbar
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default ScrollToHash; 