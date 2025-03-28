
import React from 'react';
import { Button } from '@/components/ui/button';

const DesignSystemShowcase = () => {
  return (
    <div className="p-8 bg-ooliv-white">
      <div className="container-ooliv space-y-section-sm">
        {/* Typography Section */}
        <section className="space-y-6">
          <h2 className="text-4xl font-condensed uppercase tracking-tight">Typography</h2>
          
          <div className="space-y-4">
            <div>
              <h1>Heading 1 (h1)</h1>
              <p className="text-sm text-ooliv-grey">Font: Bebas Neue or similar, Extra Bold, Uppercase</p>
            </div>
            
            <div>
              <h2>Heading 2 (h2)</h2>
              <p className="text-sm text-ooliv-grey">Font: Bebas Neue or similar, Extra Bold, Uppercase</p>
            </div>
            
            <div>
              <h3>Heading 3 (h3)</h3>
              <p className="text-sm text-ooliv-grey">Font: Bebas Neue or similar, Extra Bold, Uppercase</p>
            </div>
            
            <div>
              <h4>Heading 4 (h4)</h4>
              <p className="text-sm text-ooliv-grey">Font: Bebas Neue or similar, Extra Bold, Uppercase</p>
            </div>
            
            <div>
              <p>This is regular body text. The font is Inter, Satoshi, or General Sans. The weight is Normal or Medium.</p>
              <p className="text-sm text-ooliv-grey">Font: Inter, Normal/Medium, text-base to text-lg</p>
            </div>
            
            <div>
              <p>This paragraph contains a <a href="#" className="link-body">link styled with our new design system</a>.</p>
            </div>
          </div>
        </section>
        
        {/* Color Palette Section */}
        <section className="space-y-6">
          <h2 className="text-4xl font-condensed uppercase tracking-tight">Color Palette</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div>
              <div className="h-24 bg-ooliv-black rounded-xl"></div>
              <p className="mt-2 font-medium">ooliv-black</p>
              <p className="text-xs text-ooliv-grey">#0C0C0C</p>
            </div>
            
            <div>
              <div className="h-24 bg-ooliv-white rounded-xl border border-ooliv-grey"></div>
              <p className="mt-2 font-medium">ooliv-white</p>
              <p className="text-xs text-ooliv-grey">#F9F9F9</p>
            </div>
            
            <div>
              <div className="h-24 bg-ooliv-grey rounded-xl"></div>
              <p className="mt-2 font-medium">ooliv-grey</p>
              <p className="text-xs text-ooliv-grey">#DADADA</p>
            </div>
            
            <div>
              <div className="h-24 bg-ooliv-warm-grey rounded-xl"></div>
              <p className="mt-2 font-medium">ooliv-warm-grey</p>
              <p className="text-xs text-ooliv-grey">#E5E2DC</p>
            </div>
            
            <div>
              <div className="h-24 bg-ooliv-green rounded-xl"></div>
              <p className="mt-2 font-medium">ooliv-green</p>
              <p className="text-xs text-ooliv-grey">#00FF85</p>
            </div>
            
            <div>
              <div className="h-24 bg-ooliv-orange rounded-xl"></div>
              <p className="mt-2 font-medium">ooliv-orange</p>
              <p className="text-xs text-ooliv-grey">#FF6A3D</p>
            </div>
          </div>
        </section>
        
        {/* Button Styles Section */}
        <section className="space-y-6">
          <h2 className="text-4xl font-condensed uppercase tracking-tight">Button Styles</h2>
          
          <div className="flex flex-wrap gap-4">
            <Button>Primary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="sm">Small Button</Button>
            <Button>Default Button</Button>
            <Button size="lg">Large Button</Button>
          </div>
        </section>
        
        {/* Container Example */}
        <section className="space-y-6">
          <h2 className="text-4xl font-condensed uppercase tracking-tight">Container Example</h2>
          
          <div className="container-ooliv bg-ooliv-warm-grey p-4 rounded-xl">
            <p className="text-center">This is the container-ooliv class with mx-auto, px-gutter, and max-w-container</p>
          </div>
        </section>
        
        {/* Section Examples */}
        <section className="space-y-6">
          <h2 className="text-4xl font-condensed uppercase tracking-tight">Section Examples</h2>
          
          <div className="space-y-4">
            <div className="section-standard p-4 rounded-xl">
              <p className="text-center">section-standard (bg-ooliv-white)</p>
            </div>
            
            <div className="section-alt p-4 rounded-xl">
              <p className="text-center">section-alt (bg-ooliv-warm-grey)</p>
            </div>
            
            <div className="section-black p-4 rounded-xl">
              <p className="text-center">section-black (bg-ooliv-black text-ooliv-white)</p>
            </div>
            
            <div className="section-gradient p-4 rounded-xl">
              <p className="text-center">section-gradient (bg-gradient-to-br from-ooliv-white to-ooliv-warm-grey)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignSystemShowcase;
