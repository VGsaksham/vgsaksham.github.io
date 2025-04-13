import React, { useEffect } from 'react';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface MenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Menu = ({ isOpen, setIsOpen }: MenuProps) => {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Menu animation variants
  const menuVariants = {
    initial: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 1
      }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

  // Content animation variants
  const contentVariants = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.1
      }
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.1
      }
    }
  };

  // Item animation variants
  const itemVariants = {
    initial: {
      y: 20,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="menu-overlay fixed top-0 right-0 h-full w-[80%] sm:w-[60%] md:w-[40%] bg-gradient-to-br from-black/95 to-black/90 backdrop-blur-md z-50 shadow-2xl border-l border-neonGreen/20"
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ boxShadow: "0 0 30px rgba(0, 255, 42, 0.1)" }}
        >
          <motion.div 
            className="container mx-auto h-full px-4 sm:px-5 md:px-6 flex flex-col"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row justify-between mt-20 sm:mt-32 md:mt-48 gap-x-4 sm:gap-x-8">
              <div className="menu-section md:w-1/2 flex flex-col">
                <motion.h3 
                  className="menu-title text-white/70 text-xs sm:text-sm mb-4 sm:mb-6"
                  variants={itemVariants}
                >
                  SOCIAL
                </motion.h3>
                <div className="flex flex-col">
                  <motion.a 
                    href="https://github.com/" 
                    className="menu-link-custom block text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 md:mb-5 group transition-all"
                    variants={itemVariants}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="inline-block group-hover:text-neonGreen">Github</span>
                  </motion.a>
                  <motion.a 
                    href="https://linkedin.com/" 
                    className="menu-link-custom block text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 md:mb-5 group transition-all"
                    variants={itemVariants}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="inline-block group-hover:text-neonGreen">Linkedin</span>
                  </motion.a>
                  <motion.a 
                    href="https://facebook.com/" 
                    className="menu-link-custom block text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 md:mb-5 group transition-all"
                    variants={itemVariants}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="inline-block group-hover:text-neonGreen">Facebook</span>
                  </motion.a>
                  <motion.a 
                    href="https://www.instagram.com/bhown_pb30?igsh=MXZ1ZG1rYjNtdDIxbQ==" 
                    className="menu-link-custom block text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 md:mb-5 group transition-all"
                    variants={itemVariants}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="inline-block group-hover:text-neonGreen">Instagram</span>
                  </motion.a>
                </div>
              </div>
              
              <div className="menu-section mt-10 sm:mt-0 md:w-1/2 flex flex-col">
                <motion.h3 
                  className="menu-title text-white/70 text-xs sm:text-sm mb-4 sm:mb-6"
                  variants={itemVariants}
                >
                  MENU
                </motion.h3>
                <div className="flex flex-col">
                  <motion.div
                    className="menu-link-custom block text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 md:mb-5 group transition-all flex items-center"
                    variants={itemVariants}
                  >
                    <span className="menu-indicator yellow w-3 h-3 rounded-full bg-yellow-400 mr-3"></span>
                    <Link 
                      to="/" 
                      className="inline-block group-hover:text-neonGreen"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="inline-block">Home</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    className="menu-link-custom block text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 md:mb-5 group transition-all flex items-center"
                    variants={itemVariants}
                  >
                    <span className="menu-indicator blue w-3 h-3 rounded-full bg-blue-400 mr-3"></span>
                    <Link 
                      to="/#about" 
                      className="inline-block group-hover:text-neonGreen"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="inline-block">About Me</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    className="menu-link-custom block text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 md:mb-5 group transition-all flex items-center"
                    variants={itemVariants}
                  >
                    <span className="menu-indicator green w-3 h-3 rounded-full bg-green-400 mr-3"></span>
                    <Link 
                      to="/#tech-stack" 
                      className="inline-block group-hover:text-neonGreen"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="inline-block">Stack</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    className="menu-link-custom block text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 md:mb-5 group transition-all flex items-center"
                    variants={itemVariants}
                  >
                    <span className="menu-indicator purple w-3 h-3 rounded-full bg-purple-400 mr-3"></span>
                    <Link 
                      to="/#projects" 
                      className="inline-block group-hover:text-neonGreen"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="inline-block">Projects</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="menu-section mt-auto mb-8 text-center"
              variants={itemVariants}
            >
              <motion.h3 
                className="menu-title text-white/70 text-sm mb-3"
                variants={itemVariants}
              >
                GET IN TOUCH
              </motion.h3>
              <div className="flex flex-col items-center">
                <motion.a 
                  href="tel:+916284722026" 
                  className="menu-link-custom block text-base sm:text-lg md:text-xl font-bold group transition-all mb-2"
                  variants={itemVariants}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-block group-hover:text-neonGreen">+91 6284722026</span>
                </motion.a>
                <motion.div
                  className="menu-link-custom block text-base sm:text-lg md:text-xl font-bold group transition-all mb-2"
                  variants={itemVariants}
                >
                  <a 
                    href="mailto:sakshambhown1920@gmail.com" 
                    className="inline-block group-hover:text-neonGreen"
                  >
                    sakshambhown1920@gmail.com
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
