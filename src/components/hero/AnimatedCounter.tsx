import React from 'react';
import { useCountUp } from '@/hooks/useCountUp';

interface AnimatedCounterProps {
  value: string;
  isInView: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, isInView }) => {
  // Parse the value to extract number, decimals, prefix, and suffix
  const parseValue = (val: string): {
    number: number;
    decimals: number;
    prefix: string;
    suffix: string;
  } => {
    // Handle formats like: "16+", "100+", "4.9/5", "200%", "85%", "30+"
    const match = val.match(/^([^0-9]*)([0-9.]+)([^0-9]*)$/);
    
    if (!match) {
      return { number: 0, decimals: 0, prefix: '', suffix: val };
    }

    const [, prefix, numStr, suffix] = match;
    const number = parseFloat(numStr);
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;

    return { number, decimals, prefix, suffix };
  };

  const { number, decimals, prefix, suffix } = parseValue(value);
  const count = useCountUp({
    end: number,
    duration: 2000,
    decimals,
    start: 0,
    isInView,
  });

  return (
    <>
      {prefix}
      {count}
      {suffix}
    </>
  );
};

export default AnimatedCounter;
