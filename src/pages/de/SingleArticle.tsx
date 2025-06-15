
import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import SingleArticleDisplay from '@/components/content/SingleArticleDisplay';

const SingleArticle = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return (
      <PageLayout>
        <div className="min-h-screen bg-gray-50 py-16">
          <div className="w-full max-w-4xl mx-auto p-6">
            <h1>Ungültiger Artikel-Link</h1>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Helmet>
        <title>Artikel | ooliv - Ihre Werbeagentur</title>
        <meta 
          name="description" 
          content="Entdecken Sie unseren Artikel von BabyLoveGrowth.ai mit wertvollen Insights und Tipps."
        />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <SingleArticleDisplay slug={slug} />
      </div>
    </PageLayout>
  );
};

export default SingleArticle;
