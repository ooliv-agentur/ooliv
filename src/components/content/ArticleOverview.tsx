
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import { H1, H2, H3, Paragraph } from '@/components/ui/typography';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

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

  const fetchArticles = async () => {
    try {
      console.log('Fetching German articles with slugs...');
      
      const { data, error } = await supabase
        .from('content_posts')
        .select('*')
        .eq('language_code', 'de')
        .not('slug', 'is', null)
        .neq('slug', '')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching articles:', error);
        toast.error('Fehler beim Laden der Artikel');
        return;
      }

      console.log('German articles with slugs found:', data?.length || 0);
      setArticles(data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
      toast.error('Fehler beim Laden der Artikel');
    } finally {
      setIsLoading(false);
    }
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-medico-turquoise/20 shadow-lg">
            <CardContent className="p-16 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-medico-turquoise mx-auto mb-6"></div>
              <Paragraph color="muted" className="font-satoshi text-lg">Lade Artikel...</Paragraph>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <H1 className="mb-8 text-medico-darkGreen font-satoshi">Unsere Artikel</H1>
          <Paragraph color="secondary" className="text-xl font-satoshi max-w-4xl mx-auto mb-10 leading-relaxed">
            Aktuelle Artikel, Studien und Insights von Ooliv für zukunftsfähige B2B-Websites
          </Paragraph>
        </div>

        {articles.length === 0 ? (
          <Card className="border-medico-turquoise/20 bg-medico-mint/30 shadow-lg">
            <CardContent className="text-center p-16">
              <H2 className="mb-8 text-medico-darkGreen font-satoshi">Noch keine Artikel verfügbar</H2>
              <Paragraph color="secondary" className="mb-8 text-lg font-satoshi">
                Es wurden noch keine deutschen Artikel mit gültigen URLs gefunden.
              </Paragraph>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card 
                key={article.id} 
                className="border-medico-turquoise/20 bg-white shadow-lg hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex-1">
                    <H3 className="mb-6 font-satoshi text-medico-darkGreen group-hover:text-medico-turquoise transition-colors leading-tight">
                      {article.title}
                    </H3>
                    
                    {article.meta_description && (
                      <Paragraph color="secondary" className="mb-6 font-satoshi leading-relaxed">
                        {article.meta_description}
                      </Paragraph>
                    )}
                    
                    {!article.meta_description && (article.content_md || article.content_html) && (
                      <Paragraph color="secondary" className="mb-6 font-satoshi leading-relaxed">
                        {truncateContent(article.content_md || article.content_html)}
                      </Paragraph>
                    )}
                    
                    <div className="flex items-center text-sm text-gray-500 mb-8 font-satoshi">
                      <Calendar className="w-4 h-4 mr-2 text-medico-turquoise" />
                      {new Date(article.created_at).toLocaleDateString('de-DE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-auto">
                    <Button 
                      asChild 
                      className="flex-1 bg-medico-yellow hover:bg-yellow-400 text-medico-darkGreen font-satoshi font-bold group/btn"
                    >
                      <Link to={`/artikel/${article.slug}`}>
                        Artikel lesen
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                    
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
                          <ExternalLink className="w-4 h-4 text-medico-turquoise" />
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
