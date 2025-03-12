
import React, { useState } from 'react';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <div 
      className="relative w-full h-[400px] cursor-ew-resize overflow-hidden rounded-lg"
      onMouseMove={handleMouseMove}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <img 
          src="/before-example.jpg" 
          alt="Before website redesign"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* After Image (clipped) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src="/after-example.jpg" 
          alt="After website redesign"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-gray-400 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
