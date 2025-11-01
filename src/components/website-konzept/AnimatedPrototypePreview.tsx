import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ExternalLink } from 'lucide-react';

const AnimatedPrototypePreview = () => {
  return (
    <div className="relative w-full">
      {/* Desktop View */}
      <div className="hidden md:block">
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

      {/* Mobile View - Mockup with Live Demo Button */}
      <div className="block md:hidden max-w-[375px] mx-auto">
        <div className="relative">
          {/* Browser Frame */}
          <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-800">
            {/* Minimal Browser Bar */}
            <div className="bg-gray-800 h-8 flex items-center px-3 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 bg-gray-700 rounded px-2 py-0.5 ml-2">
                <span className="text-[10px] text-gray-400">hillwig.projekte-ooliv.de</span>
              </div>
            </div>

            {/* Mockup Content Area */}
            <div className="relative h-[500px] bg-gradient-to-b from-gray-50 to-white p-6">
              {/* Header Mockup */}
              <div className="flex items-center justify-between mb-6">
                <div className="h-8 w-24 bg-gray-300 rounded animate-pulse" />
                <div className="h-8 w-8 bg-gray-300 rounded animate-pulse" />
              </div>
              
              {/* Hero Section Mockup */}
              <div className="space-y-3 mb-8">
                <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse" />
                <div className="h-6 bg-gray-300 rounded w-full animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
                <div className="h-10 bg-primary/30 rounded w-32 mt-4 animate-pulse" />
              </div>
              
              {/* Content Blocks Mockup */}
              <div className="space-y-4">
                <div className="h-32 bg-gray-200 rounded animate-pulse" />
                <div className="h-32 bg-gray-200 rounded animate-pulse" />
              </div>
              
              {/* Overlay with preview hint */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent flex items-end justify-center pb-8">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    Vorschau-Mockup
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* "Beispiel" Badge - Mobile */}
          <div className="absolute -top-2 -right-2 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-20">
            Beispiel
          </div>
          
          {/* Call-to-Action Button */}
          <a
            href="https://hillwig.projekte-ooliv.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
          >
            <ExternalLink className="w-5 h-5" />
            <span className="font-semibold">Live-Demo öffnen</span>
          </a>
          
          <p className="text-center text-xs text-muted-foreground mt-2">
            Interaktive Demo im neuen Tab ansehen
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedPrototypePreview;
