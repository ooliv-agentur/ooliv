// Monthly & Seasonal Color System
// Core Brand Colors (never change)
export const CORE_COLORS = {
  turquoise: '#38B593',
  darkGreen: '#003347',
  white: '#FFFFFF',
} as const;

// Monthly Accent Colors (2025 Calendar)
export const MONTHLY_COLORS = {
  1: { // Januar - Fresh Start Blue
    name: 'Fresh Start Blue',
    primary: '210 85% 60%',
    complementary: '40 90% 60%', // Warm orange complement
    gradient: 'linear-gradient(135deg, hsl(210 85% 60%), hsl(195 85% 55%))',
    psychology: 'Klarheit, Neuanfang, Fokus'
  },
  2: { // Februar - Cozy Coral
    name: 'Cozy Coral',
    primary: '15 85% 65%',
    complementary: '195 85% 65%', // Teal complement
    gradient: 'linear-gradient(135deg, hsl(15 85% 65%), hsl(350 75% 70%))',
    psychology: 'Wärme, Verbindung, Nähe'
  },
  3: { // März - Spring Sage
    name: 'Spring Sage',
    primary: '145 35% 55%',
    complementary: '325 45% 65%', // Rose complement
    gradient: 'linear-gradient(135deg, hsl(145 35% 55%), hsl(160 40% 60%))',
    psychology: 'Wachstum, Erneuerung, Balance'
  },
  4: { // April - Cherry Blossom
    name: 'Cherry Blossom',
    primary: '340 75% 75%',
    complementary: '160 65% 65%', // Mint complement
    gradient: 'linear-gradient(135deg, hsl(340 75% 75%), hsl(320 65% 70%))',
    psychology: 'Leichtigkeit, Neubeginn, Optimismus'
  },
  5: { // Mai - Vibrant Lime
    name: 'Vibrant Lime',
    primary: '80 70% 55%',
    complementary: '260 70% 65%', // Purple complement
    gradient: 'linear-gradient(135deg, hsl(80 70% 55%), hsl(90 65% 60%))',
    psychology: 'Energie, Frische, Aktivität'
  },
  6: { // Juni - Sunset Orange
    name: 'Sunset Orange',
    primary: '30 85% 60%',
    complementary: '210 85% 60%', // Cool blue complement
    gradient: 'linear-gradient(135deg, hsl(30 85% 60%), hsl(40 90% 65%))',
    psychology: 'Lebensfreude, Kreativität, Wärme'
  },
  7: { // Juli - Ocean Blue
    name: 'Ocean Blue',
    primary: '200 80% 50%',
    complementary: '20 90% 60%', // Coral complement
    gradient: 'linear-gradient(135deg, hsl(200 80% 50%), hsl(190 75% 55%))',
    psychology: 'Erfrischung, Klarheit, Freiheit'
  },
  8: { // August - Golden Hour
    name: 'Golden Hour',
    primary: '45 90% 60%',
    complementary: '225 80% 60%', // Deep blue complement
    gradient: 'linear-gradient(135deg, hsl(45 90% 60%), hsl(35 85% 65%))',
    psychology: 'Erfolg, Optimismus, Fülle'
  },
  9: { // September - Harvest Amber
    name: 'Harvest Amber',
    primary: '35 75% 55%',
    complementary: '215 75% 60%', // Sky blue complement
    gradient: 'linear-gradient(135deg, hsl(35 75% 55%), hsl(25 70% 60%))',
    psychology: 'Erdung, Reife, Beständigkeit'
  },
  10: { // Oktober - Cozy Caramel
    name: 'Cozy Caramel',
    primary: '30 60% 50%',
    complementary: '210 70% 55%', // Azure complement
    gradient: 'linear-gradient(135deg, hsl(30 60% 50%), hsl(20 65% 55%))',
    psychology: 'Gemütlichkeit, Stabilität, Wärme'
  },
  11: { // November - Deep Plum
    name: 'Deep Plum',
    primary: '280 45% 45%',
    complementary: '100 55% 55%', // Yellow-green complement
    gradient: 'linear-gradient(135deg, hsl(280 45% 45%), hsl(270 50% 50%))',
    psychology: 'Tiefe, Reflexion, Eleganz'
  },
  12: { // Dezember - Ice Crystal
    name: 'Ice Crystal',
    primary: '195 70% 65%',
    complementary: '15 80% 65%', // Warm coral complement
    gradient: 'linear-gradient(135deg, hsl(195 70% 65%), hsl(210 65% 70%))',
    psychology: 'Klarheit, Reinheit, Neubeginn'
  }
} as const;

// Seasonal Secondary Colors
export const SEASONAL_COLORS = {
  spring: { // März - Mai
    name: 'Fresh Mint',
    secondary: '160 50% 60%',
    tertiary: '140 45% 65%'
  },
  summer: { // Juni - August
    name: 'Coral Reef',
    secondary: '15 80% 65%',
    tertiary: '195 75% 60%'
  },
  autumn: { // September - November
    name: 'Terracotta',
    secondary: '15 65% 50%',
    tertiary: '35 70% 55%'
  },
  winter: { // Dezember - Februar
    name: 'Deep Forest',
    secondary: '200 60% 40%',
    tertiary: '210 70% 50%'
  }
} as const;

// Helper function to get current month color
export const getCurrentMonthColor = () => {
  const month = new Date().getMonth() + 1; // 1-12
  return MONTHLY_COLORS[month as keyof typeof MONTHLY_COLORS];
};

// Helper function to get current season
export const getCurrentSeason = () => {
  const month = new Date().getMonth() + 1; // 1-12
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'autumn';
  return 'winter';
};

// Helper function to get current seasonal color
export const getCurrentSeasonalColor = () => {
  const season = getCurrentSeason();
  return SEASONAL_COLORS[season];
};

// Manual override for campaigns (optional)
export const setCustomColor = (primary: string, gradient: string, complementary?: string) => {
  if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty('--accent-primary', primary);
    document.documentElement.style.setProperty('--accent-gradient', gradient);
    
    // Set complementary color if provided
    if (complementary) {
      document.documentElement.style.setProperty('--accent-complementary', complementary);
    }
    
    // Update glow color for floating circles
    const [h, s, l] = primary.split(' ');
    document.documentElement.style.setProperty('--accent-glow', `hsl(${h} ${s} ${l} / 0.4)`);
  }
};

// Manual override for complementary color only
export const setCustomComplementaryColor = (complementary: string) => {
  if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty('--accent-complementary', complementary);
    console.log(`🎨 Complementary Color Updated: ${complementary}`);
  }
};

// Reset to current month color
export const resetToMonthlyColor = () => {
  const monthColor = getCurrentMonthColor();
  const seasonColor = getCurrentSeasonalColor();
  const month = new Date().toLocaleString('default', { month: 'long' });
  
  if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty('--accent-primary', monthColor.primary);
    document.documentElement.style.setProperty('--accent-complementary', monthColor.complementary);
    document.documentElement.style.setProperty('--accent-gradient', monthColor.gradient);
    document.documentElement.style.setProperty('--accent-secondary', seasonColor.secondary);
    document.documentElement.style.setProperty('--accent-tertiary', seasonColor.tertiary);
    
    // Update glow color for floating circles
    const [h, s, l] = monthColor.primary.split(' ');
    document.documentElement.style.setProperty('--accent-glow', `hsl(${h} ${s} ${l} / 0.4)`);
    
    console.log(`🎨 Color System Active: ${month} - ${monthColor.name}`, {
      primary: monthColor.primary,
      complementary: monthColor.complementary,
      psychology: monthColor.psychology,
      season: getCurrentSeason()
    });
  }
};

// Initialize colors immediately when the module loads
if (typeof document !== 'undefined') {
  resetToMonthlyColor();
}
