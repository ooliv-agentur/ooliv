import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type HeroButtonProps = {
  variant?: 'solid' | 'outline';
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
};

const HeroButton = ({ variant = 'solid', label, href, onClick }: HeroButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  const buttonClass = variant === 'solid' 
    ? "group bg-[#006064] text-white hover:bg-[#004d51] hover:scale-[1.03] transition-transform duration-200" 
    : "group bg-transparent text-gray-800 hover:bg-white/10 border border-gray-800 hover:text-white hover:bg-gray-800 hover:scale-[1.03] transition-transform duration-200";

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

  if (href && onClick) {
    return (
      <Link href={href} passHref legacyBehavior>
        <Button 
          size="lg" 
          className={buttonClass}
          onClick={handleClick}
        >
          {label}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
    );
  }

  return (
    <Link href={href || "#"} passHref legacyBehavior>
      <Button 
        size="lg" 
        className={buttonClass}
      >
        {label}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </Link>
  );
};

export default HeroButton;
