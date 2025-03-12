
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            {t('hero.title')}
            <br />
            <span className="text-blue-600">{t('hero.subtitle')}</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              {t('hero.startProject')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              {t('hero.seeWork')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
