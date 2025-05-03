
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement;
      const clickableElements = ['A', 'BUTTON', 'INPUT[type="submit"]', 'INPUT[type="button"]'];
      const isClickable = 
        clickableElements.includes(target.tagName) || 
        target.classList.contains('cursor-pointer') || 
        target.getAttribute('role') === 'button';
      
      setIsPointer(isClickable);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Don't show custom cursor on touch devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      document.documentElement.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
      const elements = document.querySelectorAll('a, button, input[type="submit"], input[type="button"], .cursor-pointer, [role="button"]');
      elements.forEach(el => {
        (el as HTMLElement).style.cursor = 'pointer';
      });
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`transition-all duration-100 ${isPointer ? 'scale-125' : 'scale-100'}`}
        style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: isPointer ? '#999C7A' : '#B1B497',
        }}
      />
    </div>
  );
};

export default CustomCursor;
