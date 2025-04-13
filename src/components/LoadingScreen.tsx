import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds and then trigger the exit animation
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Allow exit animation to play before calling onLoadingComplete
      setTimeout(() => {
        onLoadingComplete();
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        when: "afterChildren"
      }
    }
  };

  const letterVariants = {
    initial: (i: number) => ({
      y: i % 2 === 0 ? -100 : 100,
      opacity: 0,
      color: "rgba(180, 180, 180, 0.5)"
    }),
    animate: {
      y: 0,
      opacity: 1,
      color: "#00ff2a",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.08
      }
    },
    exit: (i: number) => ({
      y: i % 2 === 0 ? 100 : -100,
      opacity: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: i * 0.03
      }
    })
  };

  const mainName = "Saksham";
  const possessive = "'s";
  const subtitle = "PORTFOLIO";

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-[100]"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="relative flex flex-col items-center px-4 sm:px-0 max-w-full overflow-hidden">
            <div className="flex items-center justify-center flex-wrap">
              {/* Main name SAKSHAM */}
              {mainName.split('').map((letter, i) => (
                <motion.span
                  key={`main-${letter}-${i}`}
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold font-montserrat tracking-wider"
                  style={{
                    textShadow: "0 0 10px rgba(0, 255, 42, 0.7)"
                  }}
                  variants={letterVariants}
                  custom={i}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {letter}
                </motion.span>
              ))}
              
              {/* Small 's */}
              {possessive.split('').map((letter, i) => (
                <motion.span
                  key={`poss-${letter}-${i}`}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat tracking-wider self-start mt-2 sm:mt-4"
                  style={{
                    textShadow: "0 0 8px rgba(0, 255, 42, 0.7)"
                  }}
                  variants={letterVariants}
                  custom={mainName.length + i}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            
            {/* PORTFOLIO text to the right */}
            <div className="flex justify-end w-full mt-2 sm:mt-4 mb-2 sm:mb-4 pr-2 sm:pr-4">
              {subtitle.split('').map((letter, i) => (
                <motion.span
                  key={`sub-${letter}-${i}`}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold font-montserrat tracking-wider text-white"
                  style={{
                    textShadow: "0 0 8px rgba(255, 255, 255, 0.5)"
                  }}
                  variants={{
                    initial: (i: number) => ({
                      y: i % 2 === 0 ? -100 : 100,
                      opacity: 0,
                      color: "rgba(180, 180, 180, 0.5)"
                    }),
                    animate: {
                      y: 0,
                      opacity: 1,
                      color: "#ffffff",
                      transition: {
                        type: "spring",
                        damping: 12,
                        stiffness: 100,
                        delay: 0.08
                      }
                    },
                    exit: (i: number) => ({
                      y: i % 2 === 0 ? 100 : -100,
                      opacity: 0,
                      transition: {
                        type: "spring",
                        damping: 15,
                        stiffness: 200,
                        delay: i * 0.03
                      }
                    })
                  }}
                  custom={mainName.length + possessive.length + i}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 