
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw, ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import { H1, H2, H3, Paragraph } from '@/components/ui/typography';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { getContainerClasses, getSectionClasses } from '@/styles/spacing';

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

const ArticleOverview = () => {
  const [articles, setArticles] = useState<ContentPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchArticles = async () => {
    try {
      console.log('Fetching all articles...');
      
      const { data, error } = await supabase
        .from('content_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching articles:', error);
        toast.error('Fehler beim Laden der Artikel');
        return;
      }

      console.log('Articles found:', data?.length || 0);
      setArticles(data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
      toast.error('Fehler beim Laden der Artikel');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchArticles();
    toast.success('Artikel aktualisiert');
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const truncateContent = (content: string | null, maxLength: number = 150) => {
    if (!content) return '';
    const textContent = content.replace(/<[^>]*>/g, '').replace(/[#*]/g, '');
    return textContent.length > maxLength 
      ? textContent.substring(0, maxLength) + '...' 
      : textContent;
  };

  if (isLoading) {
    return (
      <div className={getContainerClasses('narrow')}>
        <Card className="border-medico-turquoise/20">
          <CardContent className="p-12 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-medico-turquoise mx-auto mb-4"></div>
            <Paragraph color="muted">Lade Artikel...</Paragraph>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <section className={getSectionClasses('large')}>
      <div className={getContainerClasses('narrow')}>
        <div className="mb-12 text-center">
          <H1 className="mb-6">Unsere Artikel</H1>
          <Paragraph size="large" color="secondary" className="max-w-3xl mx-auto mb-8">
            Entdecken Sie wertvolle Insights und Tipps von BabyLoveGrowth.ai für Ihr Business
          </Paragraph>
          <Button 
            onClick={handleRefresh} 
            disabled={isRefreshing} 
            variant="outline"
            className="border-medico-turquoise/30 hover:bg-medico-turquoise/10"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            Aktualisieren
          </Button>
        </div>

        {articles.length === 0 ? (
          <Card className="border-medico-turquoise/20 bg-medico-mint/30">
            <CardContent className="text-center p-12">
              <H2 className="mb-6">Noch keine Artikel verfügbar</H2>
              <Paragraph color="secondary" className="mb-4">
                Es wurden noch keine Artikel von BabyLoveGrowth.ai empfangen.
              </Paragraph>
              <Button 
                onClick={handleRefresh} 
                disabled={isRefreshing}
                className="bg-medico-turquoise hover:bg-medico-turquoise/90"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                Aktualisieren
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card 
                key={article.id} 
                className="border-medico-turquoise/20 bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex-1">
                    <H3 className="mb-4 line-clamp-2 group-hover:text-medico-turquoise transition-colors">
                      {article.title}
                    </H3>
                    
                    {article.meta_description && (
                      <Paragraph color="secondary" className="mb-4 line-clamp-3">
                        {article.meta_description}
                      </Paragraph>
                    )}
                    
                    {!article.meta_description && (article.content_md || article.content_html) && (
                      <Paragraph color="secondary" className="mb-4 line-clamp-3">
                        {truncateContent(article.content_md || article.content_html)}
                      </Paragraph>
                    )}
                    
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(article.created_at).toLocaleDateString('de-DE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-auto">
                    {article.slug ? (
                      <Button 
                        asChild 
                        variant="primary" 
                        size="sm"
                        className="flex-1 group/btn"
                      >
                        <Link to={`/artikel/${article.slug}`}>
                          Artikel lesen
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1"
                        disabled
                      >
                        Kein Slug verfügbar
                      </Button>
                    )}
                    
                    {article.public_url && (
                      <Button
                        asChild
                        variant="ghost"
                        size="iconSm"
                        className="hover:bg-medico-turquoise/10"
                      >
                        <a 
                          href={article.public_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Originalartikel öffnen"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleOverview;
