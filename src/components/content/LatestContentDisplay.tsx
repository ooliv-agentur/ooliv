
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw, ExternalLink, Copy, Check } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

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

const LatestContentDisplay = () => {
  const [latestPost, setLatestPost] = useState<ContentPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [urlCopied, setUrlCopied] = useState(false);

  const fetchLatestPost = async () => {
    try {
      const { data, error } = await supabase
        .from('content_posts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
        console.error('Error fetching latest post:', error);
        toast.error('Fehler beim Laden des neuesten Artikels');
        return;
      }

      setLatestPost(data || null);
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

  const copyUrlToClipboard = async () => {
    if (latestPost?.public_url) {
      try {
        await navigator.clipboard.writeText(latestPost.public_url);
        setUrlCopied(true);
        toast.success('URL kopiert');
        setTimeout(() => setUrlCopied(false), 2000);
      } catch (error) {
        toast.error('Fehler beim Kopieren der URL');
      }
    }
  };

  useEffect(() => {
    fetchLatestPost();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <Card>
          <CardContent className="p-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-medico-turquoise mx-auto mb-4"></div>
            <p className="text-gray-600">Lade neuesten Artikel...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!latestPost) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-medico-darkGreen">
              Noch keine Artikel verfügbar
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-4">
              Es wurden noch keine Artikel von BabyLoveGrowth.ai empfangen.
            </p>
            <Button onClick={handleRefresh} disabled={isRefreshing}>
              <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Aktualisieren
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-medico-darkGreen">
          Neuester Artikel
        </h1>
        <Button onClick={handleRefresh} disabled={isRefreshing} variant="outline">
          <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
          Aktualisieren
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-medico-darkGreen mb-4">
            {latestPost.title}
          </CardTitle>
          
          {latestPost.meta_description && (
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              {latestPost.meta_description}
            </p>
          )}

          {latestPost.public_url && (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Artikel-URL:</span>
                <Button
                  onClick={copyUrlToClipboard}
                  variant="outline"
                  size="sm"
                  className="ml-2"
                >
                  {urlCopied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 break-all font-mono bg-white px-2 py-1 rounded border flex-1">
                  {latestPost.public_url}
                </span>
                <a 
                  href={latestPost.public_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-medico-turquoise hover:text-medico-darkGreen transition-colors font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          <div className="text-sm text-gray-500">
            Veröffentlicht: {new Date(latestPost.created_at).toLocaleDateString('de-DE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </CardHeader>

        <CardContent>
          {latestPost.content_md ? (
            <div className="prose prose-lg max-w-none">
              <div 
                className="markdown-content leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: latestPost.content_md
                    .split('\n')
                    .map(line => {
                      // Simple markdown parsing for headers, bold, italic
                      line = line.replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-6 mb-3 text-medico-darkGreen">$1</h3>');
                      line = line.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4 text-medico-darkGreen">$1</h2>');
                      line = line.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-6 text-medico-darkGreen">$1</h1>');
                      line = line.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>');
                      line = line.replace(/\*(.+?)\*/g, '<em class="italic">$1</em>');
                      line = line.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-medico-turquoise hover:text-medico-darkGreen underline" target="_blank" rel="noopener noreferrer">$1</a>');
                      
                      if (line.trim() === '') return '<br>';
                      if (!line.includes('<h') && !line.includes('<br>')) {
                        return `<p class="mb-4 text-gray-700 leading-relaxed">${line}</p>`;
                      }
                      return line;
                    })
                    .join('')
                }}
              />
            </div>
          ) : latestPost.content_html ? (
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: latestPost.content_html }}
            />
          ) : (
            <p className="text-gray-600 italic">Kein Inhalt verfügbar</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LatestContentDisplay;
