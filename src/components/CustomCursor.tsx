
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
    
    // Apply "cursor: none" to all elements to ensure consistency
    const style = document.createElement('style');
    style.innerHTML = `
      *, *::before, *::after {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);
    
    addEventListeners();
    return () => {
      removeEventListeners();
      // Reset cursor on unmount
      document.documentElement.style.cursor = '';
      document.body.style.cursor = '';
      // Remove the style element
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);
  
  if (typeof window === 'undefined') return null;

  // Fallback cursor styles if SVG files aren't available
  const cursorStyle = linkHovered 
    ? {
        width: '40px',
        height: '40px',
        backgroundColor: '#006064',
        borderRadius: '50%',
        border: '2px solid white',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)'
      }
    : {
        width: '32px',
        height: '32px',
        backgroundColor: '#b1b497',
        borderRadius: '50%',
        border: '2px solid white',
        boxShadow: '0 0 8px rgba(0,0,0,0.2)'
      };

  return (
    <div 
      className={`fixed pointer-events-none transition-all duration-150 ease-out ${
        hidden ? 'opacity-0' : 'opacity-100'
      } ${linkHovered ? 'scale-125' : 'scale-100'} ${clicked ? 'scale-90' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        ...cursorStyle
      }}
    />
  );
};

export default CustomCursor;
