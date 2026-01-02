import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const experiences = [
  {
    title: "Junior Business Analyst",
    company: "Company Name",
    duration: "Duration",
    location: "Location",
    responsibilities: [
      "Worked on real-world projects within a cross-functional team",
      "Analyzed requirements and supported business decision-making",
      "Assisted senior team members and collaborated with stakeholders",
      "Contributed to continuous improvement initiatives",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Experience
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Professional Journey
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="border-border/50 shadow-soft ml-0 md:ml-16 relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-40px] top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />
                  
                  <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-semibold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground ml-16 sm:ml-0">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Note */}
          <p className="text-center text-sm text-muted-foreground mt-12 italic">
            Even internships or part-time roles belong here — all experience counts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
