
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { H2 } from '@/components/ui/typography';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import ArticleNavigation from './ArticleNavigation';
import ArticleHeader from './ArticleHeader';
import ArticleContent from './ArticleContent';

interface ContentPost {
  id: number;
  title: string;
  meta_description: string | null;
  content_html: string | null;
  content_md: string | null;
  language_code: string | null;
  public_url: string | null;
  created_at: string;
}

interface SingleArticleDisplayProps {
  slug: string;
}

const SingleArticleDisplay = ({ slug }: SingleArticleDisplayProps) => {
  const [article, setArticle] = useState<ContentPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const fetchArticleBySlug = async () => {
    try {
      console.log('Fetching article with slug:', slug);
      
      // First, try to get all articles and then match the slug from the public_url
      const { data: articles, error } = await supabase
        .from('content_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching articles:', error);
        toast.error('Fehler beim Laden der Artikel');
        setNotFound(true);
        return;
      }

      console.log('All articles found:', articles);

      // Find the article that matches the slug
      const matchedArticle = articles?.find(article => {
        if (!article.public_url) return false;
        
        // Extract the slug from the public_url - try multiple methods
        let urlSlug: string = '';
        
        try {
          // Method 1: Try to parse as full URL and get the last segment
          const url = new URL(article.public_url);
          const pathSegments = url.pathname.split('/').filter(segment => segment.length > 0);
          urlSlug = pathSegments[pathSegments.length - 1] || '';
        } catch {
          // Method 2: If it's not a full URL, treat it as a path
          const pathSegments = article.public_url.split('/').filter(segment => segment.length > 0);
          urlSlug = pathSegments[pathSegments.length - 1] || '';
        }
        
        // Method 3: If still no slug, try the entire path without leading slash
        if (!urlSlug) {
          urlSlug = article.public_url.replace(/^\/+/, '').replace(/\/+$/, '');
        }
        
        console.log('Comparing slugs:', { 
          urlSlug, 
          requestedSlug: slug, 
          publicUrl: article.public_url,
          articleId: article.id,
          articleTitle: article.title
        });
        
        return urlSlug === slug;
      });

      if (matchedArticle) {
        console.log('Article found:', matchedArticle);
        setArticle(matchedArticle);
        setNotFound(false);
      } else {
        console.log('No matching article found for slug:', slug);
        console.log('Available articles with URLs:', articles?.map(a => ({
          id: a.id,
          title: a.title,
          public_url: a.public_url
        })));
        setNotFound(true);
      }
    } catch (error) {
      console.error('Error fetching article:', error);
      toast.error('Fehler beim Laden des Artikels');
      setNotFound(true);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchArticleBySlug();
    toast.success('Artikel aktualisiert');
  };

  useEffect(() => {
    fetchArticleBySlug();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <Card className="border-medico-turquoise/20">
          <CardContent className="p-12 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-medico-turquoise mx-auto mb-4"></div>
            <p className="text-medico-darkGreen">Lade Artikel...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (notFound || !article) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <ArticleNavigation />
        
        <Card className="border-medico-turquoise/20 bg-medico-mint/30">
          <CardContent className="text-center p-12">
            <H2 className="mb-6">
              Artikel nicht gefunden
            </H2>
            <p className="text-gray-600 mb-6 text-lg">
              Der gesuchte Artikel "{slug}" konnte nicht gefunden werden.
            </p>
            <Button 
              onClick={handleRefresh} 
              disabled={isRefreshing}
              className="bg-medico-turquoise hover:bg-medico-turquoise/90"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Erneut versuchen
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <ArticleNavigation />

      <div className="flex justify-end mb-6">
        <Button onClick={handleRefresh} disabled={isRefreshing} variant="outline">
          <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
          Aktualisieren
        </Button>
      </div>

      <Card className="border-medico-turquoise/20 bg-white shadow-lg">
        <CardContent className="p-8 lg:p-12">
          <ArticleHeader article={article} />
          <ArticleContent article={article} />
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleArticleDisplay;
