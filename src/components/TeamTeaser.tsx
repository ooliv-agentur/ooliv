
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
  image?: string;
  initials: string;
  tooltip?: string;
}

const TeamTeaser = () => {
  const featuredTeamMembers: TeamMember[] = [
    {
      name: "Uli Schönleber",
      role: "CEO – Your direct point of contact",
      initials: "US",
      tooltip: "Leads every client project personally"
    },
    {
      name: "Lisa Schönleber",
      role: "Content",
      initials: "LS",
    },
    {
      name: "Parveen Thakur",
      role: "Web Development",
      initials: "PT",
      tooltip: "On the team for over 20 years"
    },
    {
      name: "Dorinel Nedelcu",
      role: "Creation",
      initials: "DN",
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
                    <Avatar className="h-28 w-28 mb-4 border-2 border-brand-primary/20">
                      <AvatarImage src={member.image} alt={`${member.name}${member.tooltip ? ` - ${member.tooltip}` : ''}`} />
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
