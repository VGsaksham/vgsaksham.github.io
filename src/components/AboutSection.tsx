import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 sm:mb-16 md:mb-20">
            I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
          </h2>
          <p className="text-white/60 mb-8 sm:mb-12">This is me.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-white text-3xl sm:text-4xl font-bold mb-6">Hi, I'm Saksham.</h3>
            </div>
            <div>
              <p className="text-white/80 mb-6 sm:mb-8">
                I'm a frontend web developer dedicated to turning ideas into creative solutions. 
                I specialize in creating seamless and intuitive user experiences.
              </p>
              <p className="text-white/80">
                My approach focuses on creating scalable, high-performance web applications that are both beautiful and functional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
