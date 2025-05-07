
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const HeroParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full width/height
    const resetCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    
    resetCanvas();
    window.addEventListener('resize', resetCanvas);
    
    // Initialize particles
    const particleCount = Math.floor(Math.random() * 6) + 5; // 5-10 particles
    
    particles.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 4 + 2, // 2-6px
      speedX: (Math.random() - 0.5) * 0.1, // Very slow horizontal movement
      speedY: (Math.random() - 0.5) * 0.1, // Very slow vertical movement
      opacity: Math.random() * 0.03 + 0.02 // 2-5% opacity
    }));
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
        
        // Update position for next frame
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges with a buffer
        const buffer = 100;
        if (particle.x < -buffer) particle.x = canvas.width + buffer;
        if (particle.x > canvas.width + buffer) particle.x = -buffer;
        if (particle.y < -buffer) particle.y = canvas.height + buffer;
        if (particle.y > canvas.height + buffer) particle.y = -buffer;
      });
      
      requestAnimationFrame(draw);
    };
    
    const animationId = requestAnimationFrame(draw);
    
    return () => {
      window.removeEventListener('resize', resetCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 z-10 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
};

export default HeroParticles;
