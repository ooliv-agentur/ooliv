import React from 'react';

const CostCalculatorFAQ: React.FC = () => {
  return (
    <div className="mt-16 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
        Häufige Fragen zum Kalkulator
      </h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-lg mb-2 text-foreground">Wie verlässlich sind die Werte?</h4>
          <p className="text-muted-foreground">
            Die Kalkulation basiert auf unseren realen Projektpreisen der letzten 2 Jahre. 
            Die Spanne deckt 90% unserer vergleichbaren Projekte ab. Finale Angebote erstellen 
            wir nach einem kurzen Abstimmungsgespräch (15 Min), in dem wir Ihre Anforderungen 
            im Detail besprechen.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-2 text-foreground">Welche Faktoren beeinflussen den Preis?</h4>
          <p className="text-muted-foreground">
            Hauptfaktoren sind: Anzahl der Seiten, Design-Komplexität (Custom vs. Template), 
            Mehrsprachigkeit, Anzahl separater Websites/Marken, technische Anforderungen 
            (z. B. Shop, CRM-Integration) und Unternehmensgröße. Laufende Services wie SEO 
            oder Ads-Betreuung kommen optional hinzu.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-2 text-foreground">Wie schnell können Sie starten?</h4>
          <p className="text-muted-foreground">
            Für kompakte Projekte (5–10 Seiten) können wir oft innerhalb von 2 Wochen starten. 
            Bei größeren Projekten planen wir gemeinsam einen realistischen Zeitplan. Wenn Sie 
            "So schnell wie möglich" im Kalkulator gewählt haben, priorisieren wir Ihre Anfrage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CostCalculatorFAQ);
