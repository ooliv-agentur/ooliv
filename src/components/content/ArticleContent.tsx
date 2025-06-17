
import React from 'react';
import { Paragraph } from '@/components/ui/typography';
import MarkdownRenderer from './markdown/MarkdownRenderer';

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

interface ArticleContentProps {
  article: ContentPost;
}

const ArticleContent = ({ article }: ArticleContentProps) => {
  if (article.content_md) {
    return <MarkdownRenderer content={article.content_md} />;
  } else if (article.content_html) {
    return (
      <article 
        className="prose prose-lg max-w-none article-content font-satoshi"
        dangerouslySetInnerHTML={{ __html: article.content_html }}
      />
    );
  } else {
    return (
      <div className="text-center py-20">
        <Paragraph color="muted" className="italic font-satoshi text-xl font-light">
          Kein Inhalt verfügbar
        </Paragraph>
      </div>
    );
  }
};

export default ArticleContent;
