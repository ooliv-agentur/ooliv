
import React from 'react';
import DOMPurify from 'dompurify';
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
    // Sanitize HTML content to prevent XSS attacks
    const sanitizedHtml = DOMPurify.sanitize(article.content_html, {
      ADD_TAGS: ['iframe'],
      ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'],
      ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
    });
    
    return (
      <article 
        className="prose prose-lg max-w-none article-content font-satoshi"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
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
