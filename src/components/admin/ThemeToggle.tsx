import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Palette, Sparkles } from 'lucide-react';
import { setHybridMinimalTheme, resetToColorfulTheme } from '@/styles/minimalTheme';

const ThemeToggle = () => {
  const [isHybrid, setIsHybrid] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('use-hybrid-theme') === 'true';
    setIsHybrid(stored);
  }, []);

  const toggleTheme = () => {
    const newValue = !isHybrid;
    setIsHybrid(newValue);
    localStorage.setItem('use-hybrid-theme', String(newValue));
    
    if (newValue) {
      setHybridMinimalTheme();
    } else {
      resetToColorfulTheme();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="lg"
        className="gap-2 shadow-lg"
      >
        {isHybrid ? (
          <>
            <Sparkles className="h-4 w-4" />
            Switch to Colorful
          </>
        ) : (
          <>
            <Palette className="h-4 w-4" />
            Switch to Minimal
          </>
        )}
      </Button>
    </div>
  );
};

export default ThemeToggle;
