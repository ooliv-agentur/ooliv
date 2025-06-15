
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Copy, Check, RefreshCw } from 'lucide-react';
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
  created_at: string;
}

interface SingleArticleDisplayProps {
  slug: string;
}

const SingleArticleDisplay = ({ slug }: SingleArticleDisplayProps) => {
  const [article, setArticle] = useState<ContentPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [urlCopied, setUrlCopied] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const fetchArticleBySlug = async () => {
    try {
      console.log('Fetching article with slug:', slug);
      
      // Fetch article that contains the slug in its public_url
      const { data, error } = await supabase
        .from('content_posts')
        .select('*')
        .ilike('public_url', `%${slug}%`)
        .single();

      if (error) {
        console.error('Error fetching article:', error);
        if (error.code === 'PGRST116') {
          setNotFound(true);
        } else {
          toast.error('Fehler beim Laden des Artikels');
        }
        return;
      }

      console.log('Article found:', data);
      setArticle(data);
      setNotFound(false);
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

  const copyUrlToClipboard = async () => {
    if (article?.public_url) {
      try {
        await navigator.clipboard.writeText(article.public_url);
        setUrlCopied(true);
        toast.success('URL kopiert');
        setTimeout(() => setUrlCopied(false), 2000);
      } catch (error) {
        toast.error('Fehler beim Kopieren der URL');
      }
    }
  };

  useEffect(() => {
    fetchArticleBySlug();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <Card>
          <CardContent className="p-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-medico-turquoise mx-auto mb-4"></div>
            <p className="text-gray-600">Lade Artikel...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (notFound || !article) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link to="/neuester-artikel">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu den Artikeln
            </Link>
          </Button>
        </div>
        
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-medico-darkGreen">
              Artikel nicht gefunden
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-4">
              Der gesuchte Artikel konnte nicht gefunden werden.
            </p>
            <Button onClick={handleRefresh} disabled={isRefreshing}>
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
      <div className="mb-6 flex justify-between items-center">
        <Button variant="outline" asChild>
          <Link to="/neuester-artikel">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu den Artikeln
          </Link>
        </Button>
        
        <Button onClick={handleRefresh} disabled={isRefreshing} variant="outline">
          <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
          Aktualisieren
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-medico-darkGreen mb-4">
            {article.title}
          </CardTitle>
          
          {article.meta_description && (
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              {article.meta_description}
            </p>
          )}

          {article.public_url && (
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
                  {article.public_url}
                </span>
                <a 
                  href={article.public_url}
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
            Veröffentlicht: {new Date(article.created_at).toLocaleDateString('de-DE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </CardHeader>

        <CardContent>
          {article.content_md ? (
            <div className="prose prose-lg max-w-none">
              <div 
                className="markdown-content leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: article.content_md
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
          ) : article.content_html ? (
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content_html }}
            />
          ) : (
            <p className="text-gray-600 italic">Kein Inhalt verfügbar</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleArticleDisplay;
