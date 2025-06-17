
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
      <Helmet>
        <title>Artikel | ooliv - Ihre Werbeagentur</title>
        <meta 
          name="description" 
          content="Entdecken Sie unseren Artikel von BabyLoveGrowth.ai mit wertvollen Insights und Tipps."
        />
      </Helmet>
      
      <SingleArticleDisplay slug={slug} />
    </PageLayout>
  );
};

export default SingleArticle;
