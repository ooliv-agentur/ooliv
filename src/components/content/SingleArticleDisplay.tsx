
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
  const [notFound, setNotFound] = useState(false);

  const fetchArticleBySlug = async () => {
    try {
      console.log('Fetching article with slug:', slug);
      
      const { data: article, error } = await supabase
        .from('content_posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
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
    }
  };

  useEffect(() => {
    fetchArticleBySlug();
  }, [slug]);

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-medico-turquoise/20 shadow-lg">
            <CardContent className="p-16 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-medico-turquoise mx-auto mb-6"></div>
              <p className="text-medico-darkGreen font-satoshi text-lg">Lade Artikel...</p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  if (notFound || !article) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleNavigation />
          
          <Card className="border-medico-turquoise/20 bg-medico-mint/30 shadow-lg mt-8">
            <CardContent className="text-center p-16">
              <H2 className="mb-8 text-medico-darkGreen font-satoshi">
                Artikel nicht gefunden
              </H2>
              <p className="text-gray-600 mb-8 text-lg font-satoshi leading-relaxed">
                Der gesuchte Artikel "{slug}" konnte nicht gefunden werden.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ArticleNavigation />

        <Card className="border-medico-turquoise/20 bg-white shadow-lg mt-12 rounded-2xl">
          <CardContent className="p-12 lg:p-16">
            <ArticleHeader article={article} />
            <ArticleContent article={article} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SingleArticleDisplay;
