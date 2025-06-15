
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { H1, LargeParagraph } from '@/components/ui/typography';
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
    <div className="mb-8">
      <H1 className="mb-6">{article.title}</H1>
      
      {article.meta_description && (
        <LargeParagraph color="secondary" className="mb-6">
          {article.meta_description}
        </LargeParagraph>
      )}

      {article.public_url && (
        <div className="mb-6 p-6 bg-medico-mint rounded-lg border border-medico-turquoise/20">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-medico-darkGreen">
              Artikel-URL:
            </span>
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
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-medico-darkGreen break-all font-mono bg-white px-3 py-2 rounded border border-medico-turquoise/20 flex-1">
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

      <div className="text-sm text-gray-500 border-l-4 border-medico-turquoise pl-4">
        Veröffentlicht: {new Date(article.created_at).toLocaleDateString('de-DE', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </div>
    </div>
  );
};

export default ArticleHeader;
