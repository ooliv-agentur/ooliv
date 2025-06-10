
import React from 'react';
import { Search, Lightbulb, PenTool, Rocket } from 'lucide-react';
import BaseProcess from '@/components/common/BaseProcess';

const StrategieProcess = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Analyse & Webkonzept",
      description: "Wir prüfen Ist-Zustand, Zielgruppen, Wettbewerb und entwickeln ein individuelles Webkonzept mit Sitemap und ersten Wireframes."
    },
    {
      icon: Lightbulb,
      number: "02", 
      title: "Strategie & Planung",
      description: "Wir definieren messbare Ziele, planen Maßnahmen und erstellen einen Projektplan auf Basis Ihres Webkonzepts."
    },
    {
      icon: PenTool,
      number: "03",
      title: "Design-Übergabe & Umsetzung",
      description: "Nach der Designfreigabe startet die Webentwicklung – sauber, performant und individuell."
    },
    {
      icon: Rocket,
      number: "04",
      title: "Optimierung & Reporting",
      description: "Nach dem Go-Live definieren wir KPIs, messen den Erfolg und optimieren kontinuierlich."
    }
  ];

  return (
    <BaseProcess
      title="Unser strategischer Ansatz – von der Analyse bis zum Webkonzept und zur Umsetzung"
      subtitle="Wir begleiten Sie Schritt für Schritt: von der Analyse Ihrer aktuellen Website über das Webkonzept bis zur erfolgreichen Umsetzung."
      steps={steps}
      backgroundColor="mint"
    />
  );
};

export default StrategieProcess;
