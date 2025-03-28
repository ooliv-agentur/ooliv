
import React, { useState } from 'react';
import { MessageCircle, Send, Mail, Phone, Plus, X } from 'lucide-react';
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
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { language } = useLanguage();

  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
  };

  const buttons = [
    { 
      id: 'chatbot', 
      icon: MessageCircle, 
      label: language === 'de' ? 'Chatte mit uns' : 'Chat with us', 
      onClick: () => console.log('Chatbot clicked'),
      className: 'bg-white text-[#222730] border border-gray-200 hover:bg-gray-50'
    },
    { 
      id: 'project', 
      icon: Send, 
      label: language === 'de' ? 'Starte dein Projekt' : 'Start your project', 
      onClick: () => setShowLeadForm(true),
      className: 'bg-white text-[#222730] border border-gray-200 hover:bg-gray-50'
    },
    { 
      id: 'email', 
      icon: Mail, 
      label: language === 'de' ? 'E-Mail an uns' : 'Email us', 
      onClick: () => window.location.href = 'mailto:info@ooliv.de',
      className: 'bg-white text-[#222730] border border-gray-200 hover:bg-gray-50'
    },
    { 
      id: 'phone', 
      icon: Phone, 
      label: language === 'de' ? 'Rufe uns an' : 'Call us', 
      onClick: () => window.location.href = 'tel:+4961316367801',
      className: 'bg-white text-[#222730] border border-gray-200 hover:bg-gray-50'
    }
  ];

  // For mobile, limit to first 2 actions when collapsed
  const visibleButtons = isMobile 
    ? (isExpanded ? buttons : []) 
    : buttons;

  return (
    <>
      <div className={cn(
        "fixed right-6 lg:right-10 bottom-6 lg:bottom-10 z-40 flex flex-col gap-4",
        "transition-all duration-300"
      )}>
        {isMobile && (
          <button
            onClick={toggleExpanded}
            className="w-14 h-14 rounded-full bg-[#222730] text-white hover:bg-[#2C3240] transition-all shadow-lg flex items-center justify-center ml-auto"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
          >
            {isExpanded ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
          </button>
        )}

        <div className="flex flex-col gap-4">
          {isExpanded && visibleButtons.map((button) => (
            <TooltipProvider key={button.id} delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={button.onClick}
                    className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center", 
                      "transition-all shadow-md hover:shadow-lg",
                      button.className
                    )}
                    aria-label={button.label}
                  >
                    <button.icon className="h-5 w-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-[#222730] text-white border-0">
                  <p>{button.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
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
