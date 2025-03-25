
import React, { useRef, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface LogoProps {
  src: string;
  alt: string;
}

const ClientLogos = () => {
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  // Example client logos
  const topRowLogos: LogoProps[] = [
    { src: "/google-ads-logo.svg", alt: "Google Ads" },
    { src: "/midjourney-logo.svg", alt: "Midjourney" },
    { src: "/ahrefs-logo.svg", alt: "Ahrefs" },
    { src: "/chatgpt-logo.svg", alt: "ChatGPT" },
    { src: "/sora-logo.svg", alt: "Sora" },
    { src: "/google-ads-logo.svg", alt: "Google Ads" }, // Duplicated for continuous scrolling effect
  ];

  const bottomRowLogos: LogoProps[] = [
    { src: "/ahrefs-logo.svg", alt: "Ahrefs" },
    { src: "/chatgpt-logo.svg", alt: "ChatGPT" },
    { src: "/google-ads-logo.svg", alt: "Google Ads" },
    { src: "/sora-logo.svg", alt: "Sora" },
    { src: "/midjourney-logo.svg", alt: "Midjourney" },
    { src: "/ahrefs-logo.svg", alt: "Ahrefs" }, // Duplicated for continuous scrolling effect
  ];

  // Autoplay scrolling effect
  useEffect(() => {
    // Scroll speed in pixels per second
    const scrollSpeed = 0.5;
    let lastTime = Date.now();
    let topScrollPos = 0;
    let bottomScrollPos = 0;
    
    const scroll = () => {
      const currentTime = Date.now();
      const delta = currentTime - lastTime;
      lastTime = currentTime;
      
      // Move top row left
      if (topRowRef.current) {
        topScrollPos += scrollSpeed * delta / 16;
        if (topScrollPos >= topRowRef.current.scrollWidth / 2) {
          topScrollPos = 0;
        }
        topRowRef.current.scrollLeft = topScrollPos;
      }
      
      // Move bottom row right
      if (bottomRowRef.current) {
        bottomScrollPos += scrollSpeed * delta / 16;
        if (bottomScrollPos >= bottomRowRef.current.scrollWidth / 2) {
          bottomScrollPos = 0;
        }
        bottomRowRef.current.scrollLeft = bottomRowRef.current.scrollWidth / 2 - bottomScrollPos;
      }
      
      requestAnimationFrame(scroll);
    };
    
    const animationFrame = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            You can tell when clients trust their agency. Here's a selection of brands that trust us — many of them for years.
          </p>
        </div>

        <div className="space-y-16">
          {/* Top row - scrolls left */}
          <div 
            ref={topRowRef} 
            className="overflow-hidden"
          >
            <div className="flex items-center space-x-16 py-4">
              {topRowLogos.map((logo, index) => (
                <div key={index} className="shrink-0">
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="h-12 w-auto grayscale opacity-70 transition-opacity hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row - scrolls right */}
          <div 
            ref={bottomRowRef} 
            className="overflow-hidden"
          >
            <div className="flex items-center space-x-16 py-4">
              {bottomRowLogos.map((logo, index) => (
                <div key={index} className="shrink-0">
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="h-12 w-auto grayscale opacity-70 transition-opacity hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
