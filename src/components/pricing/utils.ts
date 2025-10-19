/**
 * Clamps a number between min and max
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.max(min, Math.min(max, value));
};

/**
 * Safely parses a string/number to integer with clamping
 */
export const parseClampedInt = (value: string | number, min: number, max: number, fallback: number): number => {
  const parsed = typeof value === 'string' ? parseInt(value, 10) : value;
  if (isNaN(parsed)) return fallback;
  return clamp(parsed, min, max);
};

/**
 * Formats a number as EUR currency (German locale, no decimals)
 */
export const formatEUR = (amount: number): string => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
};

/**
 * Formats a number as plain number with German thousand separators
 */
export const formatNumber = (amount: number): string => {
  return new Intl.NumberFormat('de-DE', {
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
};
