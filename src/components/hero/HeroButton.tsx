
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
  // Handler for triggering lead form when needed
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };
  
  // Button styling based on variant
  const buttonClass = variant === 'solid' 
    ? "group bg-[#006064] text-white hover:bg-[#004d51] hover:scale-[1.03] transition-transform duration-200" 
    : "bg-transparent text-gray-800 hover:bg-white/10 border-gray-800 hover:text-white hover:bg-gray-800 hover:scale-[1.03] transition-transform duration-200";

  // If no href and has onClick, render as button
  if (!href && onClick) {
    return (
      <Button 
        size="lg" 
        className={buttonClass}
        onClick={handleClick}
      >
        {label}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    );
  }
  
  // If has href but also has onClick (like for lead form), render button that handles both
  if (href && onClick) {
    return (
      <Button 
        size="lg" 
        className={buttonClass}
        onClick={handleClick}
      >
        <Link to={href}>
          {label}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    );
  }
  
  // If just has href, render as Link wrapped in Button
  return (
    <Button 
      variant={variant === 'outline' ? 'outline' : 'default'}
      size="lg" 
      className={buttonClass}
      asChild
    >
      <Link to={href || '#'}>
        {label}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  );
};

export default HeroButton;
