import { Brain, Wrench, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Business & Analytical Skills",
    icon: Brain,
    skills: [
      "Business Analysis",
      "Strategic Thinking",
      "Market Research",
      "Process Improvement",
      "Financial Evaluation",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      "Excel (Advanced)",
      "PowerPoint",
      "Power BI / Tableau",
      "SQL (Intermediate)",
    ],
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: [
      "SWOT Analysis",
      "PESTLE Analysis",
      "Porter's Five Forces",
      "Value Chain Analysis",
    ],
  },
];

const certifications = [
  "Google Data Analytics",
  "Agile / Scrum Fundamentals",
  "Financial Modeling Certification",
  "Project Management Training",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-card">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Skills & Certifications
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="border-border/50 hover:shadow-soft transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-display text-lg text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <Card className="border-border/50 shadow-soft">
            <CardHeader className="text-center pb-4">
              <CardTitle className="font-display text-xl text-foreground">
                🏆 Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {certifications.map((cert) => (
                  <Badge
                    key={cert}
                    className="bg-primary/10 text-primary hover:bg-primary/20 border-0 px-4 py-2 text-sm font-medium"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
