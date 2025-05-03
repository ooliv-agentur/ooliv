
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  
  useEffect(() => {
    // Check if device is touch-only (mobile/tablet)
    const isTouchDevice = () => {
      return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0));
    };
    
    // If it's a touch device, don't apply custom cursor
    if (isTouchDevice()) {
      document.body.style.cursor = 'auto';
      return;
    }
    
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      
      // Track hover on interactive elements
      const interactiveElements = document.querySelectorAll(
        'a, button, input[type="button"], input[type="submit"], [role="button"], .cursor-pointer'
      );
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', onLinkMouseEnter);
        el.addEventListener('mouseleave', onLinkMouseLeave);
      });
    };
    
    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      
      const interactiveElements = document.querySelectorAll(
        'a, button, input[type="button"], input[type="submit"], [role="button"], .cursor-pointer'
      );
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onLinkMouseEnter);
        el.removeEventListener('mouseleave', onLinkMouseLeave);
      });
    };
    
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const onMouseEnter = () => {
      setHidden(false);
    };
    
    const onMouseLeave = () => {
      setHidden(true);
    };
    
    const onMouseDown = () => {
      setClicked(true);
    };
    
    const onMouseUp = () => {
      setClicked(false);
    };
    
    const onLinkMouseEnter = () => {
      setLinkHovered(true);
    };
    
    const onLinkMouseLeave = () => {
      setLinkHovered(false);
    };
    
    addEventListeners();
    return () => removeEventListeners();
  }, []);
  
  if (typeof window === 'undefined') return null;
  
  // Hide default cursor via CSS in index.css

  return (
    <div 
      className={`fixed pointer-events-none z-50 transition-transform duration-100 ${
        hidden ? 'opacity-0' : 'opacity-100'
      } ${linkHovered ? 'scale-125' : ''} ${clicked ? 'scale-90' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        width: '32px',
        height: '32px',
        backgroundImage: linkHovered 
          ? 'url(/cursor-pointer.svg)'
          : 'url(/cursor-default.svg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'transform 0.15s ease-out, opacity 0.2s ease'
      }}
    />
  );
};

export default CustomCursor;
