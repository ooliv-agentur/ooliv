
import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  sizes,
  quality = 85
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate WebP and AVIF versions
  const getOptimizedSrc = (format: 'webp' | 'avif' | 'original') => {
    if (format === 'original') return src;
    
    // For production, this would connect to an image optimization service
    // For now, we'll assume optimized versions exist with format suffixes
    const extension = src.split('.').pop();
    const baseName = src.replace(`.${extension}`, '');
    return `${baseName}.${format}`;
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setImageError(true);
  };

  return (
    <picture className={`block ${className}`}>
      {/* AVIF format - best compression */}
      <source 
        srcSet={getOptimizedSrc('avif')} 
        type="image/avif"
        sizes={sizes}
      />
      
      {/* WebP format - good compression, wide support */}
      <source 
        srcSet={getOptimizedSrc('webp')} 
        type="image/webp"
        sizes={sizes}
      />
      
      {/* Fallback to original */}
      <img
        src={imageError ? src : getOptimizedSrc('original')}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined
        }}
      />
    </picture>
  );
};

export default OptimizedImage;
