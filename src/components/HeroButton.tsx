
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type HeroButtonProps = {
  variant?: 'solid' | 'outline';
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
};

const HeroButton = ({ variant = 'solid', label, href, onClick }: HeroButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    console.log("📢 HeroButton handleClick fired");
    // Don't prevent default behavior, just call onClick if provided
    if (onClick) {
      console.log("📢 HeroButton calling provided onClick handler");
      onClick(e);
    }
  };

  const buttonClass = variant === 'solid' 
    ? "group bg-[#006064] text-white hover:bg-[#004d51] hover:scale-[1.03] transition-transform duration-200 px-4 py-2 rounded-md flex items-center" 
    : "group bg-transparent text-gray-800 hover:bg-white/10 border border-gray-800 hover:text-white hover:bg-gray-800 hover:scale-[1.03] transition-transform duration-200 px-4 py-2 rounded-md flex items-center";

  // For buttons with onClick but no href (like lead form triggers)
  if (onClick && !href) {
    return (
      <button 
        className={buttonClass}
        onClick={handleClick}
        type="button"
      >
        {label}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    );
  }
  
  // For buttons with both href and onClick (lead form triggers with fallback links)
  if (onClick && href) {
    return (
      <Link to={href} onClick={handleClick} className={buttonClass}>
        {label}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    );
  }
  
  // For regular link buttons
  return (
    <Link to={href || '#'} className={buttonClass}>
      {label}
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
};

export default HeroButton;
