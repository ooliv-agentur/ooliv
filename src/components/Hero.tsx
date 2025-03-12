
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-1024-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/60 to-purple-900/70 z-10"></div>
      </div>
      
      {/* Custom cursor */}
      <div 
        className={`fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-100 ${isHoveringCTA ? 'bg-white scale-150' : 'bg-purple-500 scale-100'}`}
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px`,
          transform: `translate(-50%, -50%) ${isHoveringCTA ? 'scale(1.5)' : 'scale(1)'}` 
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20">
        <div className="text-center space-y-8 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            {t('hero.title')}
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-200">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="group bg-white text-purple-900 hover:bg-purple-100"
              onMouseEnter={() => setIsHoveringCTA(true)}
              onMouseLeave={() => setIsHoveringCTA(false)}
            >
              {t('hero.startProject')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/20"
              onMouseEnter={() => setIsHoveringCTA(true)}
              onMouseLeave={() => setIsHoveringCTA(false)}
            >
              {t('hero.seeWork')}
            </Button>
          </div>
        </div>
        
        {/* Before/After transformation preview */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-gray-900/80 backdrop-blur p-4 rounded-lg transform transition-all hover:scale-105">
              <div className="text-white text-sm font-medium mb-2">BEFORE</div>
              <div className="rounded overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Outdated Website" 
                  className="w-full h-auto opacity-70"
                />
              </div>
              <div className="text-red-400 text-xs mt-2">Outdated Design • Slow Performance • Poor Conversion</div>
            </div>
            <div className="bg-gray-900/80 backdrop-blur p-4 rounded-lg transform transition-all hover:scale-105">
              <div className="text-white text-sm font-medium mb-2">AFTER</div>
              <div className="rounded overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Modern Website" 
                  className="w-full h-auto"
                />
              </div>
              <div className="text-green-400 text-xs mt-2">Modern Design • Lightning Fast • High Conversion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
