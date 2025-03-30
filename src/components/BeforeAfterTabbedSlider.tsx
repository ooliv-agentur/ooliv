
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BeforeAfterProject {
  id: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
}

const BeforeAfterTabbedSlider = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  // Sample projects - you can replace with actual projects
  const projects: BeforeAfterProject[] = [
    {
      id: "project1",
      beforeImage: "/lovable-uploads/f47ade42-8d51-4616-a6eb-4c5f781c07bd.png",
      afterImage: "/lovable-uploads/cc2540b3-885d-43e2-a5da-8cb04a07619f.png",
      beforeAlt: isGerman ? "Vor Website-Redesign" : "Before website redesign",
      afterAlt: isGerman ? "Nach Website-Redesign" : "After website redesign",
      title: isGerman ? "Projekt 1" : "Project 1"
    },
    {
      id: "project2",
      beforeImage: "/lovable-uploads/f47ade42-8d51-4616-a6eb-4c5f781c07bd.png",
      afterImage: "/lovable-uploads/cc2540b3-885d-43e2-a5da-8cb04a07619f.png",
      beforeAlt: isGerman ? "Vor Website-Redesign" : "Before website redesign",
      afterAlt: isGerman ? "Nach Website-Redesign" : "After website redesign",
      title: isGerman ? "Projekt 2" : "Project 2"
    },
    {
      id: "project3",
      beforeImage: "/lovable-uploads/f47ade42-8d51-4616-a6eb-4c5f781c07bd.png",
      afterImage: "/lovable-uploads/cc2540b3-885d-43e2-a5da-8cb04a07619f.png",
      beforeAlt: isGerman ? "Vor Website-Redesign" : "Before website redesign",
      afterAlt: isGerman ? "Nach Website-Redesign" : "After website redesign",
      title: isGerman ? "Projekt 3" : "Project 3"
    }
  ];
  
  const [activeProject, setActiveProject] = useState(projects[0].id);
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
    <div className="w-full">
      <Tabs value={activeProject} onValueChange={setActiveProject} className="w-full">
        <TabsList className="w-full flex mb-6 bg-gray-100 p-1 rounded-lg justify-center">
          {projects.map((project) => (
            <TabsTrigger 
              key={project.id} 
              value={project.id}
              className="flex-1 data-[state=active]:bg-white data-[state=active]:text-brand-primary data-[state=active]:shadow-sm"
            >
              {project.title}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {projects.map((project) => (
          <TabsContent key={project.id} value={project.id} className="mt-0">
            <div 
              className="relative w-full h-[500px] cursor-ew-resize overflow-hidden rounded-lg" // Increased height
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* Before Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={project.beforeImage} 
                  alt={project.beforeAlt}
                  className="w-full h-full object-contain" // Changed to object-contain to preserve aspect ratio
                />
              </div>
              
              {/* After Image - clipped */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src={project.afterImage}
                  alt={project.afterAlt}
                  className="w-full h-full object-contain" // Changed to object-contain to preserve aspect ratio
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
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default BeforeAfterTabbedSlider;
