import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import { getCaseStudyBySlug } from '@/data/caseStudiesData';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import InitialSituation from '@/components/case-study/InitialSituation';
import StrategicApproachSection from '@/components/case-study/StrategicApproachSection';
import DeliverablesSection from '@/components/case-study/DeliverablesSection';
import OutcomesSection from '@/components/case-study/OutcomesSection';
import TestimonialSection from '@/components/case-study/TestimonialSection';
import InsightsSection from '@/components/case-study/InsightsSection';
import CaseStudyCTA from '@/components/case-study/CaseStudyCTA';

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!caseStudy) {
    return <Navigate to="/referenzen" replace />;
  }

  return (
    <PageLayout>
      <Helmet>
        <title>{caseStudy.title} | ooliv Case Study</title>
        <meta name="description" content={caseStudy.subtitle} />
        <meta 
          name="keywords" 
          content={`Case Study, ${caseStudy.industry}, ${caseStudy.projectType}, Digital Transformation, UX Strategy, Product Strategy`} 
        />
        <link rel="canonical" href={`https://ooliv.de/referenzen/${caseStudy.slug}`} />
      </Helmet>

      <CaseStudyHero caseStudy={caseStudy} />
      <InitialSituation data={caseStudy.initialSituation} />
      <StrategicApproachSection data={caseStudy.strategicApproach} />
      <DeliverablesSection deliverables={caseStudy.deliverables} />
      <OutcomesSection data={caseStudy.outcomes} />
      <TestimonialSection testimonial={caseStudy.testimonial} />
      <InsightsSection insights={caseStudy.insights} />
      <CaseStudyCTA />
    </PageLayout>
  );
};

export default CaseStudyDetail;
