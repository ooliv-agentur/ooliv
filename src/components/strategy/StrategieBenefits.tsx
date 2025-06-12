
import React from 'react';
import BaseBenefits from '@/components/common/BaseBenefits';
import { IconName } from '@/components/ui/registered-icon';

const StrategieBenefits = () => {
  const benefits = [
    {
      icon: 'target' as IconName,
      title: "Zielgruppenanalyse & Marktverständnis",
      description: "Wir analysieren, wer Ihre Kunden sind, wie sie online suchen und wie Sie sie mit einem klaren Webkonzept optimal erreichen."
    },
    {
      icon: 'trendingUp' as IconName,
      title: "Nutzerführung & Conversion-Strategie",
      description: "Wir definieren, wie Ihre Besucher geführt werden – für mehr Leads und eine hohe Conversion-Rate. Ihr Webkonzept wird so zur tragenden Säule Ihrer digitalen Strategie."
    },
    {
      icon: 'users' as IconName,
      title: "Projektplan & Roadmap",
      description: "Wir entwickeln eine klare Roadmap mit Meilensteinen, damit Ihr Projekt strukturiert umgesetzt wird und alle Beteiligten jederzeit den Überblick behalten – vom ersten Webkonzept bis zur Umsetzung."
    },
    {
      icon: 'zap' as IconName,
      title: "Persönliche Betreuung",
      description: "Wir begleiten Sie von der ersten Idee bis zur Umsetzung – mit einem persönlichen Ansprechpartner, einem individuellen Webkonzept und dem richtigen Blick fürs Detail."
    }
  ];

  return (
    <BaseBenefits
      title="Strategie & Konzept als Fundament"
      subtitle="Ohne eine klare Strategie und ein durchdachtes Webkonzept verpuffen Marketing-Budgets. Wir sorgen dafür, dass jeder Euro zielgerichtet eingesetzt wird – von der Analyse bis zur Umsetzung."
      benefits={benefits}
      backgroundColor="white"
      gridCols={4}
    />
  );
};

export default StrategieBenefits;
