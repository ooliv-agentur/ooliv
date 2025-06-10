
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { RegisteredIcon } from "@/components/ui/registered-icon";
import { cn } from "@/lib/utils";
import { useMediaQuery } from '@/hooks/use-media-query';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingActionButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const { language } = useLanguage();

  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
  };

  const handleOpenLeadForm = () => {
    console.log('🚀 FloatingActionButtons: Project button clicked - dispatching event');
    window.dispatchEvent(new CustomEvent('open-lead-form', { detail: { source: 'FloatingActionButtons' } }));
  };

  // Updated button definitions using design system variants
  const buttons = [
    { 
      id: 'project', 
      icon: 'send', 
      label: language === 'de' ? 'Starten Sie Ihr Projekt' : 'Start your project', 
      onClick: handleOpenLeadForm,
      variant: 'floating' as const
    },
    { 
      id: 'email', 
      icon: 'mail', 
      label: language === 'de' ? 'E-Mail an ooliv' : 'Email us', 
      onClick: () => window.location.href = 'mailto:info@ooliv.de',
      variant: 'light' as const
    },
    { 
      id: 'phone', 
      icon: 'phone', 
      label: language === 'de' ? 'ooliv anrufen' : 'Call us', 
      onClick: () => window.location.href = 'tel:+4961316367801',
      variant: 'light' as const
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
                  variant={button.variant}
                  size="floating"
                  style={{
                    transitionDelay: showAllButtons ? `${index * 100}ms` : '0ms'
                  }}
                  aria-label={button.label}
                >
                  <RegisteredIcon 
                    name={button.icon as any}
                    variant="default"
                    size="default"
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-medico-darkGreen text-white border-0">
                <p>{button.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        
        {/* Toggle button - only visible on mobile/tablet */}
        {showToggleButton && (
          <Button
            onClick={toggleExpanded}
            variant="floating"
            size="floating"
            aria-label={isExpanded 
              ? (language === 'de' ? "Menü schließen" : "Close menu")
              : (language === 'de' ? "Menü öffnen" : "Open menu")
            }
          >
            <RegisteredIcon 
              name={isExpanded ? "close" : "plus"}
              variant="default"
              size="default"
            />
          </Button>
        )}
      </div>
    </TooltipProvider>
  );
};

export default FloatingActionButtons;
