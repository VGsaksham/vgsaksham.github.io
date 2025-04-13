import React, { useState } from 'react';
import Menu from "@/components/Menu";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Transition for button background
  const buttonVariants = {
    closed: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      borderRadius: "0%",
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    },
    open: {
      backgroundColor: "rgba(0, 255, 42, 0.1)",
      borderRadius: "8px",
      scale: 1.1,
      boxShadow: "0 0 10px rgba(0, 255, 42, 0.2)",
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  // Button container variants
  const buttonContainerVariants = {
    closed: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "8px",
      transition: {
        duration: 0.3,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    },
    open: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      borderRadius: "0px",
      transition: {
        duration: 0.3,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  // Top line variants
  const topLineVariants = {
    closed: { 
      rotate: 0, 
      y: -8,
      backgroundColor: "#ffffff",
      transition: {
        duration: 0.3,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    },
    open: { 
      rotate: 45, 
      y: 0,
      backgroundColor: "#00ff2a",
      transition: {
        duration: 0.3,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  // Middle line variants
  const middleLineVariants = {
    closed: { 
      opacity: 1,
      backgroundColor: "#ffffff",
      transition: {
        duration: 0.3,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    },
    open: { 
      opacity: 0,
      backgroundColor: "#00ff2a",
      transition: {
        duration: 0.1,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  // Bottom line variants
  const bottomLineVariants = {
    closed: { 
      rotate: 0, 
      y: 8,
      backgroundColor: "#ffffff",
      transition: {
        duration: 0.3,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    },
    open: { 
      rotate: -45, 
      y: 0,
      backgroundColor: "#00ff2a",
      transition: {
        duration: 0.3,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 right-0 flex justify-end p-6 z-[60]">
        <motion.div
          className="md:hidden rounded-md"
          variants={buttonContainerVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col items-center justify-center w-12 h-12 relative p-4"
            variants={buttonVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            aria-label="Toggle Menu"
          >
            <motion.span 
              className="w-7 h-0.5 block absolute"
              variants={topLineVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
            />
            <motion.span 
              className="w-7 h-0.5 block absolute"
              variants={middleLineVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
            />
            <motion.span 
              className="w-7 h-0.5 block absolute"
              variants={bottomLineVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
            />
          </motion.button>
        </motion.div>

        <motion.div
          className="hidden md:block rounded-md"
          variants={buttonContainerVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col items-center justify-center w-12 h-12 relative p-4"
            variants={buttonVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            aria-label="Toggle Menu"
          >
            <motion.span 
              className="w-7 h-0.5 block absolute"
              variants={topLineVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
            />
            <motion.span 
              className="w-7 h-0.5 block absolute"
              variants={middleLineVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
            />
            <motion.span 
              className="w-7 h-0.5 block absolute"
              variants={bottomLineVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
            />
          </motion.button>
        </motion.div>
      </nav>

      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
