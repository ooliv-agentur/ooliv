import { useEffect, useState } from 'react';
import { 
  getCurrentMonthColor, 
  getCurrentSeasonalColor, 
  resetToMonthlyColor,
  MONTHLY_COLORS 
} from '@/styles/colorSystem';

export const useSeasonalColors = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [monthColor, setMonthColor] = useState(getCurrentMonthColor());
  const [seasonColor, setSeasonalColor] = useState(getCurrentSeasonalColor());

  useEffect(() => {
    // Apply colors immediately on mount
    resetToMonthlyColor();

    // Check for month change every hour
    const interval = setInterval(() => {
      const newMonth = new Date().getMonth() + 1;
      if (newMonth !== currentMonth) {
        setCurrentMonth(newMonth);
        setMonthColor(getCurrentMonthColor());
        setSeasonalColor(getCurrentSeasonalColor());
        resetToMonthlyColor();
        
        console.log(`🎨 Color System: Switched to ${getCurrentMonthColor().name}`);
      }
    }, 3600000); // Check every hour

    return () => clearInterval(interval);
  }, [currentMonth]);

  return {
    monthColor,
    seasonColor,
    currentMonth,
    allMonthlyColors: MONTHLY_COLORS
  };
};
