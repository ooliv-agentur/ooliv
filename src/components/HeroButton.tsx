
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type HeroButtonProps = {
  variant?: 'solid' | 'outline';
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
};

const HeroButton = ({ variant = 'solid', label, href, onClick }: HeroButtonProps) => {
  const buttonClass = variant === 'solid' 
    ? "flex items-center justify-center px-6 py-3 rounded-md font-medium text-base group bg-[#006064] text-white hover:bg-[#004d51] hover:scale-[1.03] transition-transform duration-200" 
    : "flex items-center justify-center px-6 py-3 rounded-md font-medium text-base group bg-transparent text-gray-800 hover:bg-white/10 border border-gray-800 hover:text-white hover:bg-gray-800 hover:scale-[1.03] transition-transform duration-200";

  // For buttons with onClick but no href (like lead form triggers)
  if (onClick && !href) {
    return (
      <button 
        onClick={onClick}
        className={buttonClass}
        type="button"
      >
        {label}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    );
  }
  
  // For links with href but no onClick (regular navigation)
  if (href && !onClick) {
    return (
      <Link 
        to={href} 
        className={buttonClass}
      >
        {label}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    );
  }
  
  // For links with both href and onClick (e.g., lead form triggers with fallback links)
  if (href && onClick) {
    return (
      <Link 
        to={href} 
        className={buttonClass}
        onClick={onClick}
      >
        {label}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    );
  }
  
  // Fallback case (should never happen with proper props)
  return null;
};

export default HeroButton;
