import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import InvestmentHero from '@/components/investment/InvestmentHero';
import EngagementModels from '@/components/investment/EngagementModels';
import InvestmentBenefits from '@/components/investment/InvestmentBenefits';
import InvestmentFAQ from '@/components/investment/InvestmentFAQ';
import InvestmentCTA from '@/components/investment/InvestmentCTA';

const StrategicInvestment = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Strategic Investment & Engagement-Modelle | Product & UX Strategy | ooliv</title>
        <meta 
          name="description" 
          content="Transparente Investment-Modelle für strategische Digital-Transformationen: Strategic Discovery Package (€15k-25k), End-to-End Transformation (€40k-80k), Strategic Retainer (€8k-15k/Monat). Messbare ROI und klare Deliverables." 
        />
        <meta 
          name="keywords" 
          content="Strategic Investment, Engagement-Modelle, Product Strategy Package, UX Transformation Investment, Strategic Retainer, Digital Strategy ROI, Transparente Preise" 
        />
        <link rel="canonical" href="https://ooliv.de/investition" />
      </Helmet>

      <InvestmentHero />
      <EngagementModels />
      <InvestmentBenefits />
      <InvestmentFAQ />
      <InvestmentCTA />
    </PageLayout>
  );
};

export default StrategicInvestment;
