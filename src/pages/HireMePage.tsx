import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';

const HireMePage = () => {
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }
    }
  };

  const successVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In the future, replace this with an actual API call
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name: nameValue, email: emailValue, message: messageValue })
      // });
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setIsSubmitSuccess(true);
      
      // Reset form after delay
      setTimeout(() => {
        setNameValue('');
        setEmailValue('');
        setMessageValue('');
        setIsSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Could add error handling here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden relative">
      <Background />
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        <Link 
          to="/" 
          className="inline-flex items-center text-white/70 hover:text-neonGreen transition-colors mb-8 relative z-20"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
           Back to Home
        </Link>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Heading and Description */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-neonGreen">Let's Work</span> Together
            </h1>
            
            <p className="text-white/80 text-lg">
              I'm currently available for freelance work and full-time opportunities. 
              If you're looking for a developer who can build beautiful and functional 
              web experiences, I'd love to hear from you.
            </p>
            
            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-bold">Why hire me?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 mr-3 text-neonGreen">•</div>
                  <p className="text-white/80">Strong expertise in modern frontend frameworks and UI development</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 mr-3 text-neonGreen">•</div>
                  <p className="text-white/80">Focus on performance optimization and responsive design</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 mr-3 text-neonGreen">•</div>
                  <p className="text-white/80">Passionate about creating clean, maintainable code</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 mr-3 text-neonGreen">•</div>
                  <p className="text-white/80">Strong communication skills and team collaboration</p>
                </li>
              </ul>
            </div>
            
            <div className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-neonGreen/20 rounded-full transition-colors">
                  <Github className="h-6 w-6 text-white hover:text-neonGreen transition-colors" />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-neonGreen/20 rounded-full transition-colors">
                  <Linkedin className="h-6 w-6 text-white hover:text-neonGreen transition-colors" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-neonGreen/20 rounded-full transition-colors">
                  <Twitter className="h-6 w-6 text-white hover:text-neonGreen transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md p-8 sm:p-10 border border-neonGreen/20 shadow-lg shadow-neonGreen/10 rounded-md">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-neonGreen">Get In Touch</h2>
            
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="relative group">
                <input 
                  type="text" 
                  id="name" 
                  className={`w-full bg-black/20 backdrop-blur-sm border-b-2 ${nameValue ? 'border-neonGreen' : 'border-white/30'} focus:border-neonGreen px-4 py-3 pt-6 text-white placeholder:text-transparent focus:outline-none transition-all rounded-t-md peer`}
                  placeholder="Your name"
                  required
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                  disabled={isSubmitting}
                />
                <label 
                  htmlFor="name" 
                  className={`absolute left-4 top-4 transition-all duration-300 transform ${nameValue ? 'text-xs text-neonGreen -translate-y-4' : 'text-white/60 text-base'} ${nameValue ? '' : 'peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-neonGreen'}`}
                >
                  Your Name
                </label>
              </div>
              
              <div className="relative group">
                <input 
                  type="email" 
                  id="email" 
                  className={`w-full bg-black/20 backdrop-blur-sm border-b-2 ${emailValue ? 'border-neonGreen' : 'border-white/30'} focus:border-neonGreen px-4 py-3 pt-6 text-white placeholder:text-transparent focus:outline-none transition-all rounded-t-md peer`}
                  placeholder="Your email"
                  required
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  disabled={isSubmitting}
                />
                <label 
                  htmlFor="email" 
                  className={`absolute left-4 top-4 transition-all duration-300 transform ${emailValue ? 'text-xs text-neonGreen -translate-y-4' : 'text-white/60 text-base'} ${emailValue ? '' : 'peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-neonGreen'}`}
                >
                  Your Email
                </label>
              </div>
              
              <div className="relative group">
                <textarea 
                  id="message" 
                  rows={4}
                  className={`w-full bg-black/20 backdrop-blur-sm border-b-2 ${messageValue ? 'border-neonGreen' : 'border-white/30'} focus:border-neonGreen px-4 py-3 pt-6 text-white placeholder:text-transparent focus:outline-none transition-all rounded-t-md resize-none peer`}
                  placeholder="Tell me about your project..."
                  required
                  value={messageValue}
                  onChange={(e) => setMessageValue(e.target.value)}
                  disabled={isSubmitting}
                ></textarea>
                <label 
                  htmlFor="message" 
                  className={`absolute left-4 top-4 transition-all duration-300 transform ${messageValue ? 'text-xs text-neonGreen -translate-y-4' : 'text-white/60 text-base'} ${messageValue ? '' : 'peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-neonGreen'}`}
                >
                  Your Message
                </label>
              </div>
              
              <div className="relative">
                <AnimatePresence>
                  {isSubmitSuccess && (
                    <motion.div 
                      className="absolute -top-12 left-0 right-0 flex items-center justify-center text-neonGreen bg-black/40 backdrop-blur-md py-2 rounded-md"
                      variants={successVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <CheckCircle className="mr-2 h-5 w-5" />
                      <span>Message sent successfully!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <motion.button 
                  type="submit" 
                  className={`w-full inline-flex items-center justify-center ${isSubmitting ? 'bg-neonGreen/70' : 'bg-neonGreen'} hover:bg-opacity-90 transition-all text-black font-bold py-4 px-10 text-lg hover:-translate-y-1 duration-300 font-montserrat rounded-md`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></span>
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
            
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:justify-between">
              <p className="text-white/60">Or reach out directly:</p>
              <a href="mailto:sakshambhown1920@gmail.com" className="text-neonGreen hover:underline font-medium break-all">sakshambhown1920@gmail.com</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HireMePage; 