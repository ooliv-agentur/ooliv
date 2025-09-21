import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface ContentPost {
  id: number;
  title: string;
  meta_description: string | null;
  content_html: string | null;
  content_md: string | null;
  language_code: string | null;
  public_url: string | null;
  slug: string | null;
  created_at: string;
}

interface UseArticlesProps {
  pageSize?: number;
}

export const useArticles = ({ pageSize = 12 }: UseArticlesProps = {}) => {
  const [articles, setArticles] = useState<ContentPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = useCallback(async (page: number = 0, reset: boolean = false) => {
    try {
      if (page === 0) {
        setIsLoading(true);
        setError(null);
      } else {
        setIsLoadingMore(true);
      }

      console.log(`Fetching articles page ${page} with page size ${pageSize}...`);
      
      const { data, error: fetchError, count } = await supabase
        .from('content_posts')
        .select('*', { count: 'exact' })
        .eq('language_code', 'de')
        .not('slug', 'is', null)
        .neq('slug', '')
        .order('created_at', { ascending: false })
        .range(page * pageSize, (page + 1) * pageSize - 1);

      if (fetchError) {
        console.error('Error fetching articles:', fetchError);
        const errorMessage = 'Fehler beim Laden der Artikel';
        setError(errorMessage);
        toast.error(errorMessage);
        return;
      }

      const newArticles = data || [];
      console.log(`Fetched ${newArticles.length} articles for page ${page}`);
      console.log(`Total count: ${count}`);

      if (reset || page === 0) {
        setArticles(newArticles);
      } else {
        setArticles(prev => [...prev, ...newArticles]);
      }

      // Check if there are more articles to load
      const totalFetched = (page + 1) * pageSize;
      const hasMoreArticles = count ? totalFetched < count : newArticles.length === pageSize;
      setHasMore(hasMoreArticles);
      
      setCurrentPage(page);
      
    } catch (error) {
      console.error('Error fetching articles:', error);
      const errorMessage = 'Fehler beim Laden der Artikel';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      if (page === 0) {
        setIsLoading(false);
      } else {
        setIsLoadingMore(false);
      }
    }
  }, [pageSize]);

  const loadMore = useCallback(() => {
    if (!isLoadingMore && hasMore) {
      fetchArticles(currentPage + 1);
    }
  }, [fetchArticles, currentPage, isLoadingMore, hasMore]);

  const refresh = useCallback(() => {
    setCurrentPage(0);
    setHasMore(true);
    fetchArticles(0, true);
  }, [fetchArticles]);

  useEffect(() => {
    fetchArticles(0);
  }, [fetchArticles]);

  return {
    articles,
    isLoading,
    isLoadingMore,
    hasMore,
    error,
    loadMore,
    refresh
  };
};