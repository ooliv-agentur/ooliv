
import React, { useState } from 'react';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
      setSliderPosition((x / rect.width) * 100);
    }
  };

  return (
    <div 
      className="relative w-full h-[400px] cursor-ew-resize overflow-hidden rounded-lg"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Outdated Website) */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/0c8a76bc-64a8-4b71-ac45-1d6ad214e8cd.png" 
          alt="Before website redesign"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* After Image (Modern Website - clipped) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src="/lovable-uploads/95d01f37-adb4-4878-8e69-890c9e3668f6.png" 
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

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm font-medium px-3 py-1 rounded">Before</div>
      <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm font-medium px-3 py-1 rounded">After</div>
    </div>
  );
};

export default BeforeAfterSlider;
