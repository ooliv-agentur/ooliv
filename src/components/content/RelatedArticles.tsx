import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { H2 } from '@/components/ui/typography';
import { ArrowRight, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';

interface ContentPost {
  id: number;
  title: string;
  meta_description: string | null;
  slug: string | null;
  created_at: string;
}

interface RelatedArticlesProps {
  currentArticleId: number;
  maxArticles?: number;
}

const RelatedArticles = ({ currentArticleId, maxArticles = 3 }: RelatedArticlesProps) => {
  const [relatedArticles, setRelatedArticles] = useState<ContentPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedArticles = async () => {
      try {
        const { data, error } = await supabase
          .from('content_posts')
          .select('id, title, meta_description, slug, created_at')
          .eq('language_code', 'de')
          .not('slug', 'is', null)
          .neq('slug', '')
          .neq('id', currentArticleId)
          .order('created_at', { ascending: false })
          .limit(maxArticles);

        if (error) {
          console.error('Error fetching related articles:', error);
          return;
        }

        setRelatedArticles(data || []);
      } catch (error) {
        console.error('Error fetching related articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRelatedArticles();
  }, [currentArticleId, maxArticles]);

  if (isLoading) {
    return null;
  }

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      <div className="mb-8">
        <H2 className="text-3xl font-bold text-foreground mb-2">
          Weitere interessante Artikel
        </H2>
        <p className="text-muted-foreground">
          Entdecken Sie mehr hilfreiche Inhalte
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <Link
            key={article.id}
            to={`/artikel/${article.slug}`}
            className="group"
          >
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-gray-200 hover:border-turquoise">
              <CardContent className="p-6">
                <div className="flex items-start gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <time dateTime={article.created_at}>
                    {format(new Date(article.created_at), 'dd. MMMM yyyy', { locale: de })}
                  </time>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-turquoise transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {article.meta_description && (
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.meta_description}
                  </p>
                )}

                <div className="flex items-center gap-2 text-turquoise font-medium group-hover:gap-3 transition-all">
                  <span>Artikel lesen</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/artikel"
          className="inline-flex items-center gap-2 text-turquoise hover:text-turquoise/80 font-medium transition-colors"
        >
          Alle Artikel anzeigen
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default RelatedArticles;
