
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Zap, AlertCircle, CheckCircle2 } from "lucide-react";

const Challenge = () => {
  const challenges = [
    {
      problem: "Your business doesn't have a website yet—you're missing opportunities.",
      solution: "We design high-performance websites that attract and convert customers.",
      icon: AlertCircle
    },
    {
      problem: "Your website looks outdated and doesn't represent your brand.",
      solution: "A modern, professional design strengthens trust and credibility.",
      icon: Zap
    },
    {
      problem: "Your site is slow, hard to update, and not optimized for mobile.",
      solution: "We create lightning-fast, mobile-friendly websites with easy management tools.",
      icon: CheckCircle2
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Website Should Work for You—Not Against You.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Many businesses struggle with websites that don't perform—whether they're outdated, too slow, or don't exist yet. A website that doesn't generate leads, build trust, or rank well on Google is a wasted opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, index) => (
            <div key={index} className="group">
              <Alert className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <item.icon className="h-5 w-5" />
                <AlertTitle className="text-red-600 mb-2">{item.problem}</AlertTitle>
                <AlertDescription className="text-green-600">{item.solution}</AlertDescription>
              </Alert>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenge;
