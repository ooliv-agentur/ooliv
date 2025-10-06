import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MONTHLY_COLORS, getCurrentMonthColor, setCustomColor, resetToMonthlyColor } from '@/styles/colorSystem';
import { Palette } from 'lucide-react';

/**
 * Admin Component: Preview and test seasonal colors
 * Add this to any page for development/testing
 * 
 * Usage:
 * import ColorSystemPreview from '@/components/admin/ColorSystemPreview';
 * <ColorSystemPreview />
 */
const ColorSystemPreview = () => {
  const currentColor = getCurrentMonthColor();
  const currentMonth = new Date().getMonth() + 1;
  const [activeColor, setActiveColor] = useState<string>(currentColor.primary);
  
  useEffect(() => {
    // Update active color when CSS variable changes
    const updateActiveColor = () => {
      const primary = getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim();
      if (primary) setActiveColor(primary);
    };
    
    updateActiveColor();
    const interval = setInterval(updateActiveColor, 1000);
    return () => clearInterval(interval);
  }, []);

  const applyMonthColor = (month: number) => {
    const color = MONTHLY_COLORS[month as keyof typeof MONTHLY_COLORS];
    setCustomColor(color.primary, color.gradient);
  };

  return (
    <Card className="p-6 max-w-4xl mx-auto my-8">
      {/* Live Color Indicator - Fixed Position */}
      <div className="fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 border-2" style={{ borderColor: `hsl(${activeColor})` }}>
        <div className="flex items-center gap-3">
          <div 
            className="w-8 h-8 rounded-full shadow-md" 
            style={{ background: `hsl(${activeColor})` }}
          />
          <div>
            <p className="font-bold text-sm">{currentColor.name}</p>
            <p className="text-xs text-gray-500">{new Date().toLocaleString('de-DE', { month: 'long', year: 'numeric' })}</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3 mb-6">
        <Palette className="w-6 h-6 text-accent-primary" />
        <h2 className="text-2xl font-bold">Seasonal Color System</h2>
      </div>

      {/* Current Month */}
      <div className="mb-6 p-4 bg-accent-primary/10 rounded-lg">
        <p className="text-sm text-muted-foreground mb-1">Aktuelle Farbe</p>
        <h3 className="text-xl font-bold text-accent-primary">{currentColor.name}</h3>
        <p className="text-sm text-muted-foreground">{currentColor.psychology}</p>
      </div>

      {/* Color Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {Object.entries(MONTHLY_COLORS).map(([month, color]) => {
          const monthNum = parseInt(month);
          const isCurrent = monthNum === currentMonth;
          
          return (
            <button
              key={month}
              onClick={() => applyMonthColor(monthNum)}
              className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                isCurrent ? 'border-accent-primary' : 'border-transparent'
              }`}
            >
              <div
                className="w-full h-16 rounded mb-2"
                style={{ background: color.gradient }}
              />
              <p className="text-sm font-medium">{color.name}</p>
              <p className="text-xs text-muted-foreground">
                {new Date(2025, monthNum - 1).toLocaleString('de-DE', { month: 'long' })}
              </p>
              {isCurrent && (
                <span className="inline-block mt-1 text-xs bg-accent-primary text-white px-2 py-0.5 rounded">
                  Aktuell
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Reset Button */}
      <Button onClick={resetToMonthlyColor} variant="outline" className="w-full">
        Zurück zur aktuellen Monatsfarbe
      </Button>

      {/* Color Variables Preview */}
      <div className="mt-6 p-4 bg-muted rounded-lg">
        <h4 className="font-semibold mb-3">CSS Variables (Live)</h4>
        <div className="space-y-2 font-mono text-xs">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded" style={{ background: 'var(--accent-primary)' }} />
            <span>--accent-primary</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded" style={{ background: 'var(--accent-gradient)' }} />
            <span>--accent-gradient</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded" style={{ background: 'var(--accent-glow)' }} />
            <span>--accent-glow</span>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mt-6 space-y-3">
        <h4 className="font-semibold">Live Examples</h4>
        <Button className="bg-accent-primary hover:bg-accent-dark">
          Button with Accent Color
        </Button>
        <div className="p-4 bg-accent-primary/20 rounded-lg">
          <p>Section with accent background (20% opacity)</p>
        </div>
        <div className="p-4 rounded-lg" style={{ background: 'var(--accent-gradient)' }}>
          <p className="text-white font-semibold">Section with gradient background</p>
        </div>
      </div>
    </Card>
  );
};

export default ColorSystemPreview;
