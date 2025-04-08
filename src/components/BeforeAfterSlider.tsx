
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
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
      className="relative w-full h-[480px] cursor-ew-resize overflow-hidden rounded-lg"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Outdated Website) */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/da5b45b3-580d-4326-a143-f12de0081b97.png" 
          alt={isGerman ? "Vor Website-Redesign" : "Before website redesign"}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* After Image (Modern Website - clipped) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src="/lovable-uploads/3355b778-3d78-4b00-b67e-e4dbed715e89.png" 
          alt={isGerman ? "Nach Website-Redesign" : "After website redesign"}
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
      <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm font-medium px-3 py-1 rounded">
        {isGerman ? "Vorher" : "Before"}
      </div>
      <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm font-medium px-3 py-1 rounded">
        {isGerman ? "Nachher" : "After"}
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
