
import React, { useState, useEffect } from 'react';
import { Send, Mail, Phone, Plus, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useMediaQuery } from '@/hooks/use-media-query';
import LeadGenerationOverlay from './LeadGenerationOverlay';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingActionButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const { language } = useLanguage();

  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
  };

  // Add event listener for opening the lead form from other components
  useEffect(() => {
    const handleOpenLeadForm = () => {
      setShowLeadForm(true);
    };
    
    // Listen for both events to ensure compatibility
    window.addEventListener('open-lead-form', handleOpenLeadForm);
    window.addEventListener('open-lead-generation', handleOpenLeadForm);
    
    return () => {
      window.removeEventListener('open-lead-form', handleOpenLeadForm);
      window.removeEventListener('open-lead-generation', handleOpenLeadForm);
    };
  }, []);

  // Updated button definitions with yellow color for project starter
  const buttons = [
    { 
      id: 'project', 
      icon: Send, 
      label: language === 'de' ? 'Starten Sie Ihr Projekt' : 'Start your project', 
      onClick: () => setShowLeadForm(true),
      className: 'bg-[#FFD700] text-medico-darkGreen hover:bg-[#FFC700] border-none shadow-md hover:shadow-lg'
    },
    { 
      id: 'email', 
      icon: Mail, 
      label: language === 'de' ? 'E-Mail an ooliv' : 'Email us', 
      onClick: () => window.location.href = 'mailto:info@ooliv.de',
      className: 'bg-white text-medico-darkGreen border border-medico-turquoise/30 hover:bg-medico-mint hover:border-medico-turquoise'
    },
    { 
      id: 'phone', 
      icon: Phone, 
      label: language === 'de' ? 'ooliv anrufen' : 'Call us', 
      onClick: () => window.location.href = 'tel:+4961316367801',
      className: 'bg-white text-medico-darkGreen border border-medico-turquoise/30 hover:bg-medico-mint hover:border-medico-turquoise'
    }
  ];

  // On desktop: always show all buttons, no toggle needed
  // On mobile/tablet: show toggle button and control visibility
  const showAllButtons = isDesktop || isExpanded;
  const showToggleButton = !isDesktop;

  return (
    <TooltipProvider>
      <div className={cn(
        "fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-5",
        "transition-all duration-300"
      )}>
        {/* Action buttons with smooth transition */}
        <div className={cn(
          "flex flex-col gap-5 transition-all duration-500 ease-in-out",
          showAllButtons 
            ? "opacity-100 transform translate-y-0 scale-100" 
            : "opacity-0 transform translate-y-4 scale-95 pointer-events-none"
        )}>
          {buttons.map((button, index) => (
            <Tooltip key={button.id}>
              <TooltipTrigger asChild>
                <Button
                  onClick={button.onClick}
                  className={cn(
                    "w-14 h-14 rounded-full p-4", 
                    "transition-all transform hover:scale-105 shadow-sm hover:shadow-md",
                    button.className
                  )}
                  style={{
                    transitionDelay: showAllButtons ? `${index * 100}ms` : '0ms'
                  }}
                  aria-label={button.label}
                >
                  <button.icon className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-medico-darkGreen text-white border-0">
                <p>{button.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        
        {/* Toggle button - only visible on mobile/tablet with new colors */}
        {showToggleButton && (
          <Button
            onClick={toggleExpanded}
            className={cn(
              "w-14 h-14 rounded-full border-none transition-all duration-300 shadow-md hover:shadow-lg",
              isExpanded 
                ? "bg-medico-turquoise text-white hover:bg-medico-darkGreen" 
                : "bg-medico-turquoise text-white hover:bg-medico-darkGreen"
            )}
            aria-label={isExpanded 
              ? (language === 'de' ? "Menü schließen" : "Close menu")
              : (language === 'de' ? "Menü öffnen" : "Open menu")
            }
          >
            {isExpanded ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
          </Button>
        )}
      </div>

      {/* Lead Generation Overlay with prop-based state management */}
      <LeadGenerationOverlay 
        open={showLeadForm} 
        onOpenChange={setShowLeadForm} 
      />
    </TooltipProvider>
  );
};

export default FloatingActionButtons;
