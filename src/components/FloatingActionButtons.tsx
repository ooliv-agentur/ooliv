
import React, { useState, useEffect, useRef } from 'react';
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

  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
  };

  const handleOpenLeadForm = () => {
    console.log('🚀 FloatingActionButtons: Project button clicked - dispatching event');
    window.dispatchEvent(new CustomEvent('open-lead-form', { detail: { source: 'FloatingActionButtons', variant: 'project' } }));
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
      onClick: () => {
        console.log('📧 Email button clicked - mobile test');
        window.location.href = 'mailto:info@ooliv.de';
      },
      variant: 'light' as const
    },
    { 
      id: 'phone', 
      icon: 'phone', 
      label: language === 'de' ? 'ooliv anrufen' : 'Call us', 
      onClick: () => {
        console.log('📞 Phone button clicked - mobile test');
        window.location.href = 'tel:+4961316367801';
      },
      variant: 'light' as const
    },
    {
      id: 'prototype',
      icon: 'rocket',
      label: language === 'de' ? 'Kostenloser Prototyp' : 'Free prototype',
      onClick: () => {
        console.log('🚀 Prototype button clicked - mobile test');
        window.dispatchEvent(new CustomEvent('open-lead-form', { detail: { source: 'FloatingActionButtons:prototype', variant: 'prototype' } }));
      },
      variant: 'light' as const
    }
  ];

  // On desktop: always show all buttons, no toggle needed
  // On mobile/tablet: show toggle button and control visibility
  const showAllButtons = isDesktop || isExpanded;
  const showToggleButton = !isDesktop;

  // Bubble flight animation from center to target (prototype button or toggle on mobile)
  useEffect(() => {
    const onBubble = () => {
      const targetEl = showToggleButton ? toggleRef.current : (buttonRefs.current['prototype'] as HTMLButtonElement | null);
      if (!targetEl) return;

      const bubble = document.createElement('div');
      bubble.setAttribute('aria-hidden', 'true');
      bubble.style.position = 'fixed';
      bubble.style.left = `${window.innerWidth / 2 - 12}px`;
      bubble.style.top = `${window.innerHeight / 2 - 12}px`;
      bubble.style.width = '24px';
      bubble.style.height = '24px';
      bubble.style.borderRadius = '9999px';
      bubble.style.background = 'hsl(var(--primary))';
      bubble.style.boxShadow = 'var(--shadow-glow, 0 0 40px hsl(var(--primary) / 0.4))';
      bubble.style.zIndex = '9999';
      bubble.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease-out 0.55s';

      document.body.appendChild(bubble);

      const rect = targetEl.getBoundingClientRect();
      const targetX = rect.left + rect.width / 2 - (window.innerWidth / 2 - 12);
      const targetY = rect.top + rect.height / 2 - (window.innerHeight / 2 - 12);

      requestAnimationFrame(() => {
        bubble.style.transform = `translate(${targetX}px, ${targetY}px)`;
      });

      const cleanup = () => {
        bubble.style.opacity = '0';
        setTimeout(() => {
          bubble.remove();
        }, 220);
      };
      setTimeout(cleanup, 620);
    };

    window.addEventListener('lead-overlay-bubble', onBubble as EventListener);
    return () => window.removeEventListener('lead-overlay-bubble', onBubble as EventListener);
  }, [showToggleButton]);


  return (
    <TooltipProvider>
      <div className={cn(
        "fixed right-4 z-[80] flex flex-col gap-5",
        "transition-all duration-300",
        // Perfekte vertikale Zentrierung
        "top-1/2 -translate-y-1/2"
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
                  ref={(el) => { buttonRefs.current[button.id] = el; }}
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
            ref={toggleRef}
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
