
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { H1, H2 } from '@/components/ui/typography';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import ArticleHeader from './ArticleHeader';
import ArticleContent from './ArticleContent';
import { getContainerClasses, getSectionClasses } from '@/styles/spacing';
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

const LatestContentDisplay = () => {
  const [latestPost, setLatestPost] = useState<ContentPost | null>(null);
  const [allPosts, setAllPosts] = useState<ContentPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showDebug, setShowDebug] = useState(false);

  const fetchLatestPost = async () => {
    try {
      console.log('Fetching latest post...');
      
      const { data: latestData, error: latestError } = await supabase
        .from('content_posts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (latestError && latestError.code !== 'PGRST116') {
        console.error('Error fetching latest post:', latestError);
        toast.error('Fehler beim Laden des neuesten Artikels');
        return;
      }

      const { data: allData, error: allError } = await supabase
        .from('content_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (allError) {
        console.error('Error fetching all posts:', allError);
      } else {
        console.log('All posts found:', allData?.length || 0);
        console.log('Posts:', allData);
        setAllPosts(allData || []);
      }

      console.log('Latest post:', latestData);
      setLatestPost(latestData || null);
    } catch (error) {
      console.error('Error fetching latest post:', error);
      toast.error('Fehler beim Laden des neuesten Artikels');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchLatestPost();
    toast.success('Inhalt aktualisiert');
  };

  useEffect(() => {
    fetchLatestPost();
  }, []);

  if (isLoading) {
    return (
      <section className={getSectionClasses('medium')}>
        <div className={getContainerClasses('narrow')}>
          <Card className="border-medico-turquoise/20">
            <CardContent className="p-12 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-medico-turquoise mx-auto mb-4"></div>
              <p className="text-medico-darkGreen">Lade neuesten Artikel...</p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className={getSectionClasses('medium')}>
      <div className={getContainerClasses('narrow')}>
        <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <H1 className="mb-2">Neuester Artikel</H1>
            <Button asChild variant="link" className="p-0 h-auto text-medico-turquoise hover:text-medico-darkGreen">
              <Link to="/artikel">Alle Artikel anzeigen →</Link>
            </Button>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={() => setShowDebug(!showDebug)} 
              variant="outline"
              size="sm"
              className="border-medico-turquoise/30 hover:bg-medico-turquoise/10"
            >
              Debug {showDebug ? 'ausblenden' : 'anzeigen'}
            </Button>
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
        </div>

        {showDebug && (
          <Card className="mb-8 border-medico-yellow/40 bg-medico-yellow/10">
            <CardContent className="p-6">
              <H2 className="text-lg mb-4 text-medico-darkGreen">Debug Information</H2>
              <div className="space-y-4 text-sm">
                <div>
                  <strong>Anzahl Artikel in DB:</strong> {allPosts.length}
                </div>
                <div>
                  <strong>Artikel gefunden:</strong>
                  {allPosts.length > 0 ? (
                    <ul className="mt-2 space-y-2 ml-4">
                      {allPosts.map((post, index) => (
                        <li key={post.id} className="border-l-2 border-gray-300 pl-3">
                          <div className="font-medium">{index + 1}. {post.title}</div>
                          <div className="text-gray-600">ID: {post.id}</div>
                          <div className="text-gray-600">Erstellt: {new Date(post.created_at).toLocaleString('de-DE')}</div>
                          {post.public_url && (
                            <div className="text-gray-600">URL: {post.public_url}</div>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-600"> Keine Artikel gefunden</span>
                  )}
                </div>
                {latestPost && (
                  <div>
                    <strong>Aktuell angezeigter Artikel:</strong>
                    <div className="mt-1 text-gray-600">"{latestPost.title}" (ID: {latestPost.id})</div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {!latestPost ? (
          <Card className="border-medico-turquoise/20 bg-medico-mint/30">
            <CardContent className="text-center p-12">
              <H2 className="mb-6">
                Noch keine Artikel verfügbar
              </H2>
              <p className="text-gray-600 mb-4 text-lg">
                Es wurden noch keine Artikel von BabyLoveGrowth.ai empfangen.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Überprüfen Sie die Debug-Information oben für Details.
              </p>
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
          <Card className="border-medico-turquoise/20 bg-white shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <ArticleHeader article={latestPost} />
              <ArticleContent article={latestPost} />
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default LatestContentDisplay;
