
import React, { useState } from 'react';
import { MessageCircle, Send, Mail, Phone, Plus, X } from 'lucide-react';
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

const FloatingActionButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
  };

  const buttons = [
    { 
      id: 'chatbot', 
      icon: MessageCircle, 
      label: 'Chat with us', 
      onClick: () => console.log('Chatbot clicked'),
      className: 'bg-blue-600 text-white hover:bg-blue-700'
    },
    { 
      id: 'project', 
      icon: Send, 
      label: 'Start your project', 
      onClick: () => setShowLeadForm(true),
      className: 'bg-green-600 text-white hover:bg-green-700'
    },
    { 
      id: 'email', 
      icon: Mail, 
      label: 'Email us', 
      onClick: () => window.location.href = 'mailto:info@ooliv.de',
      className: 'bg-white text-blue-600 border border-blue-300 hover:bg-blue-50'
    },
    { 
      id: 'phone', 
      icon: Phone, 
      label: 'Call us', 
      onClick: () => window.location.href = 'tel:+4961316367801',
      className: 'bg-white text-blue-600 border border-blue-300 hover:bg-blue-50'
    }
  ];

  // For mobile, limit to first 2 actions when collapsed
  const visibleButtons = isMobile 
    ? (isExpanded ? buttons : []) 
    : buttons;

  return (
    <>
      <div className={cn(
        "fixed right-10 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-5",
        "transition-all duration-300"
      )}>
        {isMobile && (
          <Button
            onClick={toggleExpanded}
            className="w-14 h-14 rounded-full shadow-lg bg-brand-primary text-white hover:bg-brand-primaryHover"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
          >
            {isExpanded ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
          </Button>
        )}

        {visibleButtons.map((button) => (
          <TooltipProvider key={button.id} delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={button.onClick}
                  className={cn(
                    "w-14 h-14 rounded-full shadow-lg", 
                    "hover:shadow-xl transition-all transform hover:scale-105",
                    button.className
                  )}
                  aria-label={button.label}
                >
                  <button.icon className="h-6 w-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-brand-footer text-white border-0">
                <p>{button.label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
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
