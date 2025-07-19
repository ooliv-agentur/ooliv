
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager'; // Added for backward compatibility
  priority?: boolean;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  quality?: number;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  loading, // Accept loading prop for backward compatibility
  priority = false,
  sizes,
  placeholder = 'empty',
  quality = 85,
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const [isInView, setIsInView] = useState(priority);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Enhanced image optimization for Core Web Vitals
  const getOptimizedSrc = (format: 'webp' | 'avif' | 'original') => {
    if (format === 'original') return src;
    
    // For lovable-uploads, assume optimized versions exist
    if (src.includes('lovable-uploads/')) {
      const extension = src.split('.').pop();
      const baseName = src.replace(`.${extension}`, '');
      return `${baseName}.${format}`;
    }
    
    return src;
  };

  // Generate responsive srcSet
  const generateSrcSet = (baseSrc: string) => {
    if (!baseSrc.includes('lovable-uploads/')) return '';
    
    const sizes = [480, 768, 1024, 1280, 1920];
    return sizes
      .map(size => `${baseSrc}?w=${size}&q=${quality} ${size}w`)
      .join(', ');
  };

  const containerStyle = width && height ? {
    aspectRatio: `${width} / ${height}`,
    width: '100%',
    height: 'auto',
  } : {};

  return (
    <div 
      ref={imgRef}
      className={cn(
        'relative overflow-hidden',
        'prevent-cls image-container', // From our Core Web Vitals CSS
        className
      )}
      style={containerStyle}
    >
      {/* Loading placeholder */}
      {!isLoaded && placeholder === 'blur' && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse progressive-image"
          style={{ filter: 'blur(10px)' }}
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Bild konnte nicht geladen werden</span>
        </div>
      )}

      {/* Main image with advanced optimization */}
      {(isInView || priority) && !hasError && (
        <picture className="block w-full h-full">
          {/* AVIF format - best compression */}
          <source 
            srcSet={getOptimizedSrc('avif')} 
            type="image/avif"
            sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          />
          
          {/* WebP format - good compression, wide support */}
          <source 
            srcSet={getOptimizedSrc('webp')} 
            type="image/webp"
            sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          />
          
          {/* Fallback to original */}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
            srcSet={generateSrcSet(src)}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'low'}
            className={cn(
              'w-full h-full object-cover transition-opacity duration-300',
              'critical-resource', // From our Core Web Vitals CSS
              isLoaded ? 'opacity-100 progressive-image loaded' : 'opacity-0 progressive-image'
            )}
            style={{
              contentVisibility: priority ? 'visible' : 'auto',
              containIntrinsicSize: width && height ? `${width}px ${height}px` : '300px 200px',
            }}
            onLoad={handleLoad}
            onError={handleError}
            data-loaded={isLoaded}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
