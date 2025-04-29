
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@/hooks/useWindowSize';

interface ConfettiCelebrationProps {
  duration?: number; // Duration in ms
}

const ConfettiCelebration: React.FC<ConfettiCelebrationProps> = ({ duration = 8000 }) => {
  const { width, height } = useWindowSize();
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Automatically stop confetti after the specified duration
    const timer = setTimeout(() => {
      setIsActive(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isActive) return null;

  return (
    <Confetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={500}
      gravity={0.15}
      colors={[
        '#9b87f5', // Purple
        '#E5DEFF', // Soft Purple
        '#FFDEE2', // Soft Pink
        '#FDE1D3', // Soft Peach
        '#D3E4FD', // Soft Blue
        '#8B5CF6', // Vivid Purple
        '#D946EF', // Magenta Pink
        '#F97316', // Bright Orange
        '#33C3F0', // Sky Blue
        '#ea384c', // Red
        '#FEF7CD', // Soft Yellow
        '#F2FCE2', // Soft Green
        '#006064', // Brand Primary
        '#004D40' // Brand Secondary
      ]}
    />
  );
};

export default ConfettiCelebration;
