import { GraduationCap, BookOpen, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const keyAreas = [
  "Strategic Management",
  "Business Analytics",
  "Financial Decision Making",
  "Operations & Supply Chain",
  "Research Methods",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-background">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Education
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Academic Background
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Degree Card */}
            <Card className="border-border/50 shadow-soft">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-display text-xl text-foreground">
                      Master's Degree in Business / Management / Analytics
                    </CardTitle>
                    <p className="text-muted-foreground mt-1">University Name</p>
                    <p className="text-sm text-muted-foreground">Year of Graduation</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Key Areas of Study
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {keyAreas.map((area) => (
                        <Badge
                          key={area}
                          variant="secondary"
                          className="bg-secondary text-secondary-foreground font-normal"
                        >
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dissertation Card */}
            <Card className="border-border/50 shadow-soft">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="font-display text-xl text-foreground">
                      Dissertation / Capstone Project
                    </CardTitle>
                    <p className="text-muted-foreground mt-1">Research Focus</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Focused on applying analytical and strategic frameworks to solve 
                  real-world business challenges. Demonstrated ability to conduct 
                  independent research, analyze complex data, and present actionable 
                  recommendations to stakeholders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
