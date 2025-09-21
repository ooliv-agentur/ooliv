import { useEffect, useRef, useCallback } from 'react';

interface UseInfiniteScrollProps {
  loading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
  rootMargin?: string;
  threshold?: number;
}

export const useInfiniteScroll = ({
  loading,
  hasMore,
  onLoadMore,
  rootMargin = '100px',
  threshold = 0.1
}: UseInfiniteScrollProps) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const lastElementRef = useCallback((node: HTMLDivElement | null) => {
    if (loading) return;
    
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore && !loading) {
        onLoadMore();
      }
    }, {
      rootMargin,
      threshold
    });
    
    if (node) {
      observerRef.current.observe(node);
    }
    
    loadMoreRef.current = node;
  }, [loading, hasMore, onLoadMore, rootMargin, threshold]);

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { lastElementRef };
};