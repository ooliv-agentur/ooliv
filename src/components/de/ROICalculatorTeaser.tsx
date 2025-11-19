import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

const ROICalculatorTeaser = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-primary/5 rounded-2xl border border-primary/20 p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                  <Calculator className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Calculate Your Digital Transformation ROI
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Interaktiver ROI Calculator – simulieren Sie Business Outcomes für Strategic Discovery oder End-to-End Transformation basierend auf Ihren aktuellen Metriken.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Conversion Rate Projection</div>
                    <div className="text-sm text-muted-foreground">+60% bis +140% durchschnittliche Steigerung</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Revenue Impact Calculation</div>
                    <div className="text-sm text-muted-foreground">Basierend auf Ihrem Traffic & Average Order Value</div>
                  </div>
                </div>
              </div>
              <Link to="/roi-rechner">
                <Button size="lg" className="text-lg px-8">
                  Run Your ROI Projection
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold mb-6 text-foreground">Sample Projection:</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Monthly Traffic</span>
                  <span className="font-semibold text-foreground">10,000 Visitors</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Current Conversion Rate</span>
                  <span className="font-semibold text-foreground">2.5%</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Average Order Value</span>
                  <span className="font-semibold text-foreground">€500</span>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg mt-6">
                  <div className="text-sm text-muted-foreground mb-2">Projected After Transformation:</div>
                  <div className="text-3xl font-bold text-primary mb-1">+€180k</div>
                  <div className="text-sm text-muted-foreground">Additional Annual Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorTeaser;
