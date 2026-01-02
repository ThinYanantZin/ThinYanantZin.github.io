import { Target, Lightbulb, MessageSquare, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const strengths = [
  {
    icon: Target,
    title: "Analytical & Strategic Thinking",
    description: "Breaking down complex problems into actionable insights",
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving Mindset",
    description: "Creative approaches to business challenges",
  },
  {
    icon: MessageSquare,
    title: "Clear Business Communication",
    description: "Translating data into compelling narratives",
  },
  {
    icon: TrendingUp,
    title: "Outcome-Focused Approach",
    description: "Delivering measurable, practical results",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Who I Am
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a postgraduate business graduate with a strong interest in strategy, 
                business analysis, and operational improvement. My academic background and 
                project experience have equipped me with the ability to analyze complex 
                business problems, identify key insights, and propose practical, value-driven 
                solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy working at the intersection of data, strategy, and decision-making, 
                and I am particularly interested in roles where structured thinking and 
                analytical skills can drive measurable business impact.
              </p>
            </div>

            {/* Strengths Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {strengths.map((strength, index) => (
                <Card
                  key={strength.title}
                  className="group border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <strength.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {strength.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {strength.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
