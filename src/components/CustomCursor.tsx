
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
    
    // Hide default cursor with CSS
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';
    
    // Apply "cursor: none" to menu elements and overlays to ensure consistency
    // Fix: Use valid CSS selectors without brackets for class names
    document.querySelectorAll('.fixed, .absolute, .z-50').forEach(el => {
      (el as HTMLElement).style.cursor = 'none';
    });
    
    // Handle additional z-index classes separately
    ['z-\\[50\\]', 'z-\\[100\\]', 'z-\\[110\\]', 'z-\\[200\\]'].forEach(className => {
      document.querySelectorAll(`.${className}`).forEach(el => {
        (el as HTMLElement).style.cursor = 'none';
      });
    });
    
    addEventListeners();
    return () => {
      removeEventListeners();
      // Reset cursor on unmount
      document.documentElement.style.cursor = '';
      document.body.style.cursor = '';
    };
  }, []);
  
  if (typeof window === 'undefined') return null;

  return (
    <div 
      className={`fixed pointer-events-none z-[1000] transition-transform duration-100 ${
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
