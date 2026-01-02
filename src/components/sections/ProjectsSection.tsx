import { ArrowRight, BarChart3, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "customer-retention",
    title: "Customer Retention Strategy",
    description: "Data-driven business analysis project focused on identifying key drivers of customer churn and proposing solutions.",
    icon: Users,
    tags: ["Strategy", "Analytics", "Research"],
    color: "primary",
  },
  {
    id: "market-entry",
    title: "Market Entry Analysis",
    description: "Strategic evaluation of market opportunities for business expansion using competitive analysis frameworks.",
    icon: TrendingUp,
    tags: ["Market Research", "Strategy", "PESTLE"],
    color: "accent",
  },
  {
    id: "operational-efficiency",
    title: "Operational Efficiency Review",
    description: "Process improvement initiative analyzing workflow bottlenecks and recommending optimization strategies.",
    icon: BarChart3,
    tags: ["Operations", "Process", "Analysis"],
    color: "primary",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-card">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of academic and professional projects demonstrating analytical 
              skills and strategic thinking.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl ${
                    project.color === "accent" ? "bg-accent/10" : "bg-primary/10"
                  } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <project.icon className={`w-6 h-6 ${
                      project.color === "accent" ? "text-accent" : "text-primary"
                    }`} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-secondary/50 text-secondary-foreground text-xs font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link to={`/project/${project.id}`}>
                    <Button
                      variant="ghost"
                      className="w-full mt-2 gap-2 text-primary hover:text-primary hover:bg-primary/5 group/btn"
                    >
                      View Project
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
