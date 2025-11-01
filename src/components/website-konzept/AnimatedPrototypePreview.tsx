import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AnimatedPrototypePreview = () => {
  return (
    <div className="relative w-full">
      <AspectRatio ratio={16/10}>
        {/* Browser Chrome/Frame */}
        <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-800">
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

          {/* Scrollable Iframe Container */}
          <div className="relative h-[calc(100%-2.5rem)] overflow-y-auto bg-white scrollable-iframe">
            <iframe
              src="https://hillwig.projekte-ooliv.de/"
              className="w-full min-h-[800px] border-0"
              title="Website Prototype Preview"
              loading="lazy"
            />
          </div>
        </div>
      </AspectRatio>

      {/* "Beispiel" Badge */}
      <div className="absolute -top-3 -right-3 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20">
        Beispiel-Prototyp
      </div>
      
      {/* Scroll Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900/80 text-white px-3 py-1.5 rounded-full text-xs backdrop-blur-sm z-10 pointer-events-none">
        ↓ Scrollen Sie im Frame
      </div>
    </div>
  );
};

export default AnimatedPrototypePreview;
