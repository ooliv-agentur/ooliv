
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  initials: string;
  tooltip?: string;
}

const TeamTeaser = () => {
  const { language } = useLanguage();
  const aboutPath = language === 'de' ? "/ueber-ooliv" : "/en/about-ooliv";
  
  const featuredTeamMembers: TeamMember[] = [
    {
      name: "Uli Schönleber",
      role: language === 'de' ? "Geschäftsführer" : "CEO – Your direct point of contact",
      image: "/lovable-uploads/Uli.jpg",
      initials: "US",
      tooltip: language === 'de' ? "Leitet jedes Kundenprojekt persönlich" : "Leads every client project personally"
    },
    {
      name: "Lisa Schönleber",
      role: "Content",
      image: "/lovable-uploads/Lisa.jpg",
      initials: "LS",
    },
    {
      name: "Parveen Thakur",
      role: language === 'de' ? "Webentwicklung" : "Web Development",
      image: "/lovable-uploads/Parveen.jpg",
      initials: "PT",
      tooltip: language === 'de' ? "Seit über 20 Jahren im Team" : "On the team for over 20 years"
    },
    {
      name: "Dorinel Nedelcu",
      role: language === 'de' ? "Kreation" : "Creation",
      image: "/lovable-uploads/Dorinel.jpg",
      initials: "DN",
    }
  ];

  return (
    <section className="section-alt py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            {language === 'de' 
              ? "Das Team hinter den Ergebnissen" 
              : "Meet the Team Behind ooliv"}
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            {language === 'de'
              ? "Jedes Projekt wird direkt vom Geschäftsführer geführt. Im Hintergrund sorgt unser eingespieltes Team für die Umsetzung – mit Präzision in Content, Design und Development."
              : "Led by the CEO who handles all client communication, our team of designers, developers, and strategists works behind the scenes to deliver websites that drive measurable business value."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
          {featuredTeamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="relative mb-4 w-[170px] h-[170px] rounded-full overflow-hidden border-2 border-brand-primary/20">
                      <div className="w-full h-full" style={{ position: 'relative' }}>
                        <img 
                          src={member.image} 
                          alt={`${member.name}${member.tooltip ? ` - ${member.tooltip}` : ''}`} 
                          className="w-full object-contain object-top"
                          style={{ 
                            imageRendering: 'crisp-edges',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: 'auto'
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-brand-primary/10 text-brand-primary text-2xl opacity-0 hover:opacity-100 transition-opacity">
                        {member.initials}
                      </div>
                    </div>
                  </TooltipTrigger>
                  {member.tooltip && (
                    <TooltipContent>
                      <p>{member.tooltip}</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-brand-text/80">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" size="lg" className="group" asChild>
            <Link to={aboutPath}>
              {language === 'de' ? "Komplettes Team kennenlernen" : "Meet the full team"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamTeaser;
