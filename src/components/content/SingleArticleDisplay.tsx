
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
  slug: string | null;
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
      
      // Query directly using the slug field
      const { data: article, error } = await supabase
        .from('content_posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // No rows returned
          console.log('No article found with slug:', slug);
          setNotFound(true);
        } else {
          console.error('Error fetching article:', error);
          toast.error('Fehler beim Laden des Artikels');
          setNotFound(true);
        }
        return;
      }

      if (article) {
        console.log('Article found:', article);
        setArticle(article);
        setNotFound(false);
      } else {
        console.log('No article found for slug:', slug);
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
