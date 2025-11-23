// Minimal Global Theme - Only applies turquoise brand color
// All styling is done through design-system.css

export const applyGlobalTurquoiseTheme = () => {
  if (typeof document !== 'undefined') {
    // Apply minimal theme class for CSS targeting
    document.body.classList.add('minimal-theme');
    
    // Hide floating circles if they exist
    const circles = document.querySelectorAll('.floating-circle');
    circles.forEach(circle => {
      (circle as HTMLElement).style.display = 'none';
    });
    
    console.log('🎨 Global Theme Applied: Turquoise #0BC3C3');
  }
};
