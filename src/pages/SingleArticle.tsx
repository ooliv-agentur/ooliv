
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import SingleArticleDisplay from '@/components/content/SingleArticleDisplay';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';

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

const SingleArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<ContentPost | null>(null);

  const handleArticleLoad = (loadedArticle: ContentPost) => {
    setArticle(loadedArticle);
  };

  if (!slug) {
    return (
      <PageLayout>
        <div className="min-h-screen bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-medico-darkGreen font-satoshi">Ungültiger Artikel-Link</h1>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <EnhancedSEOHead
        title={article?.title ? `${article.title} | ooliv - Ihre Werbeagentur` : 'Artikel | ooliv - Ihre Werbeagentur'}
        description={article?.meta_description || 'Entdecken Sie unseren Artikel von BabyLoveGrowth.ai mit wertvollen Insights und Tipps.'}
        canonicalUrl={`https://ooliv.de/artikel/${slug}`}
        keywords="Artikel, Insights, Digitales Marketing, ooliv Werbeagentur"
        ogType="article"
        articleData={article ? {
          datePublished: article.created_at,
          dateModified: article.created_at
        } : undefined}
      />
      
      <SingleArticleDisplay slug={slug} onArticleLoad={handleArticleLoad} />
    </PageLayout>
  );
};

export default SingleArticle;
