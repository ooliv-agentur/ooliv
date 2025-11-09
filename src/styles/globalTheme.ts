// Global Turquoise Theme Configuration
// This theme is applied automatically on app load

export const applyGlobalTurquoiseTheme = () => {
  if (typeof document !== 'undefined') {
    // Apply minimal theme class to body for CSS targeting
    document.body.classList.add('minimal-theme');
    
    // Set pure minimal color scheme
    document.documentElement.style.setProperty('--accent-primary', '168 60% 50%'); // Turquoise
    document.documentElement.style.setProperty('--accent-secondary', '0 0% 100%'); // Pure white
    document.documentElement.style.setProperty('--accent-tertiary', '0 0% 96%'); // Very light gray
    
    // No gradients - solid white backgrounds
    document.documentElement.style.setProperty('--accent-gradient', 'linear-gradient(135deg, hsl(0 0% 100%), hsl(0 0% 100%))');
    
    // No glow effects (hidden floating circles)
    document.documentElement.style.setProperty('--accent-glow', 'hsla(0, 0%, 0%, 0)');
    document.documentElement.style.setProperty('--accent-complementary', '0 0% 20%'); // Dark gray
    
    // Override all brand colors to black/white except turquoise accents
    document.documentElement.style.setProperty('--brand-turquoise', '168 60% 50%'); // Keep turquoise for accents
    document.documentElement.style.setProperty('--brand-dark-green', '0 0% 10%'); // Pure black
    document.documentElement.style.setProperty('--medico-darkGreen', '0 0% 10%'); // Pure black
    document.documentElement.style.setProperty('--brand-mint', '0 0% 100%'); // White
    document.documentElement.style.setProperty('--brand-background', '0 0% 100%'); // Pure white
    document.documentElement.style.setProperty('--brand-background-alt', '0 0% 98%'); // Very subtle gray
    
    // Override medico colors
    document.documentElement.style.setProperty('--medico-mint', '0 0% 100%'); // White
    
    // Hide floating circles permanently
    const circles = document.querySelectorAll('.floating-circle');
    circles.forEach(circle => {
      (circle as HTMLElement).style.display = 'none';
    });
    
    console.log('🎨 Global Turquoise Theme Applied: Minimal white + turquoise accents');
  }
};
