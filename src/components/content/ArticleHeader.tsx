
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check, ExternalLink, Calendar } from 'lucide-react';
import { H1, Paragraph } from '@/components/ui/typography';
import { toast } from 'sonner';

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

interface ArticleHeaderProps {
  article: ContentPost;
}

const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  const [urlCopied, setUrlCopied] = useState(false);

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

  return (
    <header className="mb-12">
      <H1 className="mb-6 text-medico-darkGreen">{article.title}</H1>
      
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Calendar className="w-4 h-4 mr-2" />
        <span>
          Veröffentlicht am {new Date(article.created_at).toLocaleDateString('de-DE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </span>
      </div>

      {article.meta_description && (
        <Paragraph size="large" color="secondary" className="mb-8 leading-relaxed">
          {article.meta_description}
        </Paragraph>
      )}

      {article.public_url && (
        <div className="mb-8 p-6 bg-medico-mint/50 rounded-lg border border-medico-turquoise/20">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-medico-darkGreen">
              Originalartikel:
            </span>
            <div className="flex gap-2">
              <Button
                onClick={copyUrlToClipboard}
                variant="outline"
                size="sm"
                className="border-medico-turquoise/30 hover:bg-medico-turquoise/10"
              >
                {urlCopied ? (
                  <Check className="w-4 h-4 text-medico-turquoise" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-medico-turquoise/30 hover:bg-medico-turquoise/10"
              >
                <a 
                  href={article.public_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="text-sm text-medico-darkGreen break-all font-mono bg-white px-3 py-2 rounded border border-medico-turquoise/20">
            {article.public_url}
          </div>
        </div>
      )}
    </header>
  );
};

export default ArticleHeader;
