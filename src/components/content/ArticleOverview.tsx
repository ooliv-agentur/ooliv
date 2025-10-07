
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, ExternalLink, Loader2 } from 'lucide-react';
import { H1, H2, H3, Paragraph } from '@/components/ui/typography';
import { Link } from 'react-router-dom';
import { useArticles } from '@/hooks/useArticles';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

const ArticleOverview = () => {
  const { 
    articles, 
    isLoading, 
    isLoadingMore, 
    hasMore, 
    error, 
    loadMore 
  } = useArticles({ pageSize: 12 });

  const { lastElementRef } = useInfiniteScroll({
    loading: isLoadingMore,
    hasMore,
    onLoadMore: loadMore
  });

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
          <Card className="border-accent-primary/20 shadow-lg">
            <CardContent className="p-16 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-primary mx-auto mb-6"></div>
              <Paragraph color="muted" className="font-satoshi text-lg">Lade Artikel...</Paragraph>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-red-200 bg-red-50 shadow-lg">
            <CardContent className="p-16 text-center">
              <H2 className="mb-4 text-red-600 font-satoshi">Fehler beim Laden der Artikel</H2>
              <Paragraph color="muted" className="font-satoshi">{error}</Paragraph>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <H1 className="mb-8 text-medico-darkGreen font-satoshi">Unsere Artikel</H1>
          <Paragraph color="secondary" className="text-xl font-satoshi max-w-4xl mb-10 leading-relaxed">
            Aktuelle Beiträge zu Webdesign, B2B-Marketing, SEO, Lokalisierung und digitale Strategie. ooliv teilt hier regelmäßig Insights für zukunftsfähige Unternehmenswebsites.
          </Paragraph>
        </div>

        {articles.length === 0 ? (
          <Card className="border-accent-primary/20 bg-medico-mint/30 shadow-lg">
            <CardContent className="text-center p-16">
              <H2 className="mb-8 text-medico-darkGreen font-satoshi">Noch keine Artikel verfügbar</H2>
              <Paragraph color="secondary" className="mb-8 text-lg font-satoshi">
                Es wurden noch keine deutschen Artikel mit gültigen URLs gefunden.
              </Paragraph>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card 
                  key={article.id} 
                  ref={index === articles.length - 1 ? lastElementRef : null}
                  className="border-accent-primary/20 bg-white shadow-lg hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex-1">
                      <H3 className="mb-6 font-satoshi text-medico-darkGreen group-hover:text-accent-primary transition-colors leading-tight">
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
                        <Calendar className="w-4 h-4 mr-2 text-accent-primary" />
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
                        className="flex-1 bg-accent-complementary hover:bg-accent-complementary/80 text-medico-darkGreen font-satoshi font-bold group/btn"
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
                            <ExternalLink className="w-4 h-4 text-accent-primary" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Loading indicator for infinite scroll */}
            {isLoadingMore && (
              <div className="flex justify-center items-center py-12">
                <Card className="border-accent-primary/20 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <Loader2 className="h-8 w-8 animate-spin text-accent-primary mx-auto mb-4" />
                    <Paragraph color="muted" className="font-satoshi">Lade weitere Artikel...</Paragraph>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* End of articles indicator */}
            {!hasMore && articles.length > 0 && (
              <div className="text-center py-12">
                <Card className="border-accent-primary/20 bg-medico-mint/30 shadow-lg">
                  <CardContent className="p-8">
                    <Paragraph color="secondary" className="font-satoshi text-lg">
                      Sie haben alle verfügbaren Artikel gesehen. 📚
                    </Paragraph>
                  </CardContent>
                </Card>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ArticleOverview;
