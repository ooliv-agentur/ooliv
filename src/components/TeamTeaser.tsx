import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  const featuredTeamMembers: TeamMember[] = [
    {
      name: "Uli Schönleber",
      role: "CEO – Your direct point of contact",
      image: "/lovable-uploads/d371491a-0cfe-4247-8421-8890230b3bcd.png",
      initials: "US",
      tooltip: "Leads every client project personally"
    },
    {
      name: "Lisa Schönleber",
      role: "Content",
      image: "/lovable-uploads/3a13a1f1-b92a-4c00-a174-8788747be4d8.png",
      initials: "LS",
    },
    {
      name: "Dorinel Nedelcu",
      role: "Creation",
      image: "/lovable-uploads/507cabf5-e61e-428e-8fad-34553f639daa.png",
      initials: "DN",
    },
    {
      name: "Parveen Thakur",
      role: "Web Development",
      image: "/lovable-uploads/932bf82e-16bb-4133-ba57-73b1e5e61ac1.png",
      initials: "PT",
      tooltip: "On the team for over 20 years"
    }
  ];

  return (
    <section className="section-alt py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Meet the Team Behind ooliv</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Led by the CEO who handles all client communication, our team of designers, developers, and strategists works behind the scenes to deliver websites that drive measurable business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
          {featuredTeamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar className="h-36 w-36 mb-4 border-2 border-brand-primary/20">
                      <AvatarImage src={member.image} alt={`${member.name}${member.tooltip ? ` - ${member.tooltip}` : ''}`} className="object-top object-cover" />
                      <AvatarFallback className="bg-brand-primary/10 text-brand-primary text-xl">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
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
            <Link to="/about-ooliv">
              Meet the full team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamTeaser;
