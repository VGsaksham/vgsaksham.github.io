import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import HireButton from "@/components/HireButton";
import EmailLink from "@/components/EmailLink";
import Background from "@/components/Background";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LoadingScreen from "@/components/LoadingScreen";

interface IndexProps {
  skipLoading?: boolean;
}

const Index: React.FC<IndexProps> = ({ skipLoading = false }) => {
  const [loading, setLoading] = useState(!skipLoading);
  
  // Improved scroll animation
  useEffect(() => {
    // First make all sections visible immediately
    const allSections = document.querySelectorAll('section');
    allSections.forEach((section) => {
      section.classList.add('section-visible');
    });

    // Then set up the observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          } else {
            // Only remove the class when scrolling up and the element is out of view
            const boundingRect = entry.boundingClientRect;
            if (boundingRect.top > 0) {
              // Don't remove section-visible from tech-stack section
              if (!entry.target.id.includes('tech-stack')) {
                entry.target.classList.remove('section-visible');
              }
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  const handleLoadingComplete = () => {
    setLoading(false);
    // Enable scrolling after loading is complete
    document.body.style.overflow = 'auto';
  };
  
  // Disable scrolling during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  return (
    <>
      {!skipLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div className={`min-h-screen w-full bg-black text-white overflow-x-hidden relative transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Background with particles */}
        <Background />
        
        {/* Navbar */}
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <TechStackSection />
          <ProjectsSection />
        </main>
        
        {/* Footer Section */}
        <Footer />
        
        {/* Stats on the right */}
        <Stats />
        
        {/* Email link on the left */}
        <EmailLink />
      </div>
    </>
  );
};

export default Index;
