
import React from 'react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

const OliviaChatButton = () => {
  const handleChatClick = () => {
    window.open('https://chatgpt.com/g/g-68616c80bf70819199e266292360c2e2-olivia', '_blank', 'noopener,noreferrer');
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleChatClick}
            className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-medico-darkGreen hover:bg-medico-turquoise rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
            aria-label="Chat mit Olivia"
          >
            <img 
              src="/lovable-uploads/da23ad02-e465-4e95-9cda-be49d14d1b44.png" 
              alt="Chat Icon" 
              className="w-6 h-6 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
            />
          </button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-medico-darkGreen text-white border-0">
          <p>Chat mit Olivia</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default OliviaChatButton;
