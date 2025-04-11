
import React, { useState, useEffect } from 'react';
import { Send, Mail, Phone, Plus, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useMediaQuery } from '@/hooks/use-media-query';
import LeadGenerationOverlay from './LeadGenerationOverlay';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingActionButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
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
    document.addEventListener('open-lead-form', handleOpenLeadForm);
    document.addEventListener('open-lead-generation', handleOpenLeadForm);
    
    return () => {
      document.removeEventListener('open-lead-form', handleOpenLeadForm);
      document.removeEventListener('open-lead-generation', handleOpenLeadForm);
    };
  }, []);

  // Updated button definitions with translations
  const buttons = [
    { 
      id: 'project', 
      icon: Send, 
      label: language === 'de' ? 'Starten Sie Ihr Projekt' : 'Start your project', 
      onClick: () => setShowLeadForm(true),
      className: 'bg-[#006064] text-white hover:bg-[#004d51] border-none shadow-md hover:shadow-lg' // Enhanced visibility
    },
    { 
      id: 'email', 
      icon: Mail, 
      label: language === 'de' ? 'E-Mail an ooliv' : 'Email us', 
      onClick: () => window.location.href = 'mailto:info@ooliv.de',
      className: 'bg-white text-[#b1b497] border border-[#b1b497]/30 hover:bg-[#b1b497]/10'
    },
    { 
      id: 'phone', 
      icon: Phone, 
      label: language === 'de' ? 'ooliv anrufen' : 'Call us', 
      onClick: () => window.location.href = 'tel:+4961316367801',
      className: 'bg-white text-[#b1b497] border border-[#b1b497]/30 hover:bg-[#b1b497]/10'
    }
  ];

  // For mobile, limit to first 2 actions when collapsed
  const visibleButtons = isMobile 
    ? (isExpanded ? buttons : []) 
    : buttons;

  return (
    <>
      <div className={cn(
        "fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-5",
        "transition-all duration-300"
      )}>
        {visibleButtons.map((button) => (
          <Tooltip key={button.id}>
            <TooltipTrigger asChild>
              <Button
                onClick={button.onClick}
                className={cn(
                  "w-14 h-14 rounded-full p-4", 
                  "transition-all transform hover:scale-105 shadow-sm hover:shadow-md",
                  button.className
                )}
                aria-label={button.label}
              >
                <button.icon className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-[#006064] text-white border-0">
              <p>{button.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        
        {isMobile && (
          <Button
            onClick={toggleExpanded}
            className="w-14 h-14 rounded-full bg-[#b1b497] text-white hover:bg-[#9a9c83] border-none transition-all"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
          >
            {isExpanded ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
          </Button>
        )}
      </div>

      {/* Lead Generation Overlay */}
      <LeadGenerationOverlay 
        open={showLeadForm} 
        onOpenChange={setShowLeadForm} 
      />
    </>
  );
};

export default FloatingActionButtons;
