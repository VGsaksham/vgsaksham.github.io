import React, { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const container = canvasRef.current;
    const particles: HTMLElement[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;
    let mouseIdleTimer: NodeJS.Timeout;
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 100;
      mouseY = (e.clientY / window.innerHeight) * 100;
      isMouseMoving = true;
      
      // Reset the idle timer
      clearTimeout(mouseIdleTimer);
      mouseIdleTimer = setTimeout(() => {
        isMouseMoving = false;
      }, 2000); // Mouse considered idle after 2 seconds
    };
    
    // Also track touch for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = (e.touches[0].clientX / window.innerWidth) * 100;
        mouseY = (e.touches[0].clientY / window.innerHeight) * 100;
        isMouseMoving = true;
        
        // Reset the idle timer
        clearTimeout(mouseIdleTimer);
        mouseIdleTimer = setTimeout(() => {
          isMouseMoving = false;
        }, 2000); // Touch considered idle after 2 seconds
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    // Add particles
    for (let i = 0; i < 150; i++) {
      const particle = createParticle(container);
      particles.push(particle);
    }

    // Animate particles with interactivity
    const animateParticles = () => {
      particles.forEach(particle => {
        const baseSpeed = parseFloat(particle.dataset.speed || '0.5');
        const size = parseFloat(particle.dataset.size || '1');
        const x = parseFloat(particle.style.left);
        const y = parseFloat(particle.style.top);
        
        let newX: number;
        let newY: number;
        
        if (isMouseMoving) {
          // Calculate distance from mouse
          const dx = mouseX - x;
          const dy = mouseY - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Repel if close to mouse, otherwise gentle random movement
          if (distance < 15) {
            // Repulsion strength is inversely proportional to distance and size
            const repelStrength = (1 - distance / 15) * 2 / size;
            newX = x - (dx / distance) * repelStrength;
            newY = y - (dy / distance) * repelStrength;
            
            // Increase opacity when interacted with
            particle.style.opacity = `${Math.min(0.6, parseFloat(particle.style.opacity) + 0.05)}`;
          } else {
            // Gentle movement with slight attraction
            newX = x + (Math.random() - 0.5 + dx / 1000) * baseSpeed;
            newY = y + (Math.random() - 0.5 + dy / 1000) * baseSpeed;
            
            // Gradually return to original opacity
            particle.style.opacity = `${Math.max(parseFloat(particle.dataset.originalOpacity || '0.1'), 
              parseFloat(particle.style.opacity) - 0.01)}`;
          }
        } else {
          // Regular subtle movement when mouse is idle
          newX = x + (Math.random() - 0.5) * baseSpeed;
          newY = y + (Math.random() - 0.5) * baseSpeed;
          
          // Gradually return to original opacity
          particle.style.opacity = `${Math.max(parseFloat(particle.dataset.originalOpacity || '0.1'), 
            Math.min(parseFloat(particle.dataset.originalOpacity || '0.1'), 
            parseFloat(particle.style.opacity) - 0.01))}`;
        }
        
        // Bounds checking
        if (newX > 100) newX = 100;
        if (newX < 0) newX = 0;
        if (newY > 100) newY = 100;
        if (newY < 0) newY = 0;
        
        particle.style.left = `${newX}%`;
        particle.style.top = `${newY}%`;
      });
      
      requestAnimationFrame(animateParticles);
    };
    
    animateParticles();
    
    return () => {
      particles.forEach(p => p.remove());
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      clearTimeout(mouseIdleTimer);
    };
  }, []);

  const createParticle = (container: HTMLDivElement) => {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 4 + 1;
    
    // Random opacity
    const opacity = Math.random() * 0.2;
    
    // Random speed
    const speed = Math.random() * 0.5;
    
    // Set styles
    particle.style.left = `${x}%`;
    particle.style.top = `${y}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.opacity = `${opacity}`;
    particle.dataset.speed = String(speed);
    particle.dataset.size = String(size);
    particle.dataset.originalOpacity = String(opacity);
    
    container.appendChild(particle);
    return particle;
  };
  
  return (
    <div ref={canvasRef} className="fixed inset-0 overflow-hidden z-0">
      {/* Particles will be added here dynamically */}
      <div className="absolute w-full h-full">
        <div className="absolute bottom-0 left-1/4 w-1/2 h-64 bg-neonGreen/5 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-1/3 h-64 bg-neonGreen/3 blur-[150px] rounded-full"></div>
      </div>
    </div>
  );
};

export default Background;
