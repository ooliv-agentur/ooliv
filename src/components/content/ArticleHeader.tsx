
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
    <header className="mb-20">
      <H1 className="mb-10 text-medico-darkGreen font-satoshi font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
        {article.title}
      </H1>
      
      <div className="flex items-center text-lg text-medico-turquoise mb-12">
        <Calendar className="w-6 h-6 mr-4 text-medico-turquoise" />
        <span className="font-satoshi font-medium">
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
        <Paragraph color="secondary" className="mb-16 text-xl md:text-2xl leading-relaxed font-satoshi font-light max-w-5xl">
          {article.meta_description}
        </Paragraph>
      )}

      {article.public_url && (
        <div className="mb-16 p-10 bg-medico-mint/30 rounded-3xl">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xl font-bold text-medico-darkGreen font-satoshi">
              Originalartikel:
            </span>
            <div className="flex gap-4">
              <Button
                onClick={copyUrlToClipboard}
                variant="outlineTurquoise"
                size="sm"
                className="font-satoshi font-semibold"
              >
                {urlCopied ? (
                  <Check className="w-5 h-5 text-medico-turquoise" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </Button>
              <Button
                asChild
                variant="outlineTurquoise"
                size="sm"
                className="font-satoshi font-semibold"
              >
                <a 
                  href={article.public_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="text-lg text-medico-darkGreen break-all font-mono bg-white px-6 py-4 rounded-xl">
            {article.public_url}
          </div>
        </div>
      )}
    </header>
  );
};

export default ArticleHeader;
