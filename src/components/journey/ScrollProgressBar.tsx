import React, { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const formSection = document.getElementById('lead-form-section');
      if (!formSection) return;

      const formTop = formSection.offsetTop;
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate progress until form is visible
      const maxScroll = formTop - windowHeight / 2;
      const scrollProgress = Math.min((scrolled / maxScroll) * 100, 100);
      
      setProgress(scrollProgress);
    };

    calculateProgress();
    window.addEventListener('scroll', calculateProgress);
    window.addEventListener('resize', calculateProgress);

    return () => {
      window.removeEventListener('scroll', calculateProgress);
      window.removeEventListener('resize', calculateProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-primary/10 z-50">
      <div 
        className="h-full bg-primary transition-all duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
