interface AnimatedGridProps {
  opacity?: number;
  color?: string;
  animated?: boolean;
}

export const AnimatedGrid = ({ 
  opacity = 0.15, 
  color = '#2D9174',
  animated = true 
}: AnimatedGridProps) => {
  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-[5]"
      style={{ opacity }}
    >
      <div 
        className={animated ? "absolute inset-0 animate-grid-move" : "absolute inset-0"}
        style={{
          backgroundImage: `linear-gradient(to right, ${color} 1.5px, transparent 1.5px), linear-gradient(to bottom, ${color} 1.5px, transparent 1.5px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 75%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 75%, transparent 100%)'
        }}
      />
    </div>
  );
};
