import React from 'react';

const AnimatedPrototypePreview = () => {
  return (
    <div className="relative w-full h-full">
      {/* Browser Chrome/Frame */}
      <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-gray-800">
        {/* Browser Bar */}
        <div className="bg-gray-800 h-10 flex items-center px-4 gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 ml-4">
            <span className="text-xs text-gray-400">hillwig.projekte-ooliv.de</span>
          </div>
        </div>

        {/* Iframe Container with Mask */}
        <div className="relative h-[calc(100%-2.5rem)] overflow-hidden bg-white">
          {/* Gradient Overlays for Visual Effect */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Animated Iframe Container */}
          <div className="h-[250%] animate-scroll-preview">
            <iframe
              src="https://hillwig.projekte-ooliv.de/"
              className="w-full h-full border-0"
              title="Website Prototype Preview"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Optional: "Beispiel" Badge */}
      <div className="absolute -top-3 -right-3 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20">
        Beispiel-Prototyp
      </div>
    </div>
  );
};

export default AnimatedPrototypePreview;
