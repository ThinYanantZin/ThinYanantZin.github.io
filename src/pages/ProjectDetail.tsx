import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  Target,
  User,
  AlertCircle,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projectData: Record<string, {
  title: string;
  overview: string;
  role: string[];
  challenge: string;
  workItems: string[];
  skills: string[];
  takeaways: string[];
  outcome: string;
}> = {
  "customer-retention": {
    title: "Customer Retention Strategy",
    overview:
      "A strategic business project focused on identifying key drivers of customer churn and proposing data-driven solutions to improve retention and operational efficiency.",
    role: ["Business Analyst", "Strategy & Research", "Individual postgraduate project"],
    challenge:
      "The organization faced declining customer retention and lacked clear insights into customer behavior, leading to ineffective decision-making.",
    workItems: [
      "Business and market analysis",
      "Strategic evaluation of options",
      "Data interpretation and insight generation",
      "Recommendation development",
    ],
    skills: [
      "Strategic thinking",
      "Business analysis",
      "Problem-solving",
      "Communication and presentation",
    ],
    takeaways: [
      "Identified core operational and strategic gaps",
      "Translated data into actionable insights",
      "Developed practical, scalable recommendations",
    ],
    outcome:
      "Delivered a clear strategic roadmap to support improved customer retention and long-term business performance.",
  },
  "market-entry": {
    title: "Market Entry Analysis",
    overview:
      "Strategic evaluation of market opportunities for business expansion using competitive analysis frameworks and thorough market research.",
    role: ["Strategy Consultant", "Market Researcher", "Team Lead"],
    challenge:
      "The company needed to identify viable markets for expansion but lacked structured analysis of competitive dynamics and entry barriers.",
    workItems: [
      "Competitive landscape analysis",
      "PESTLE and Porter's Five Forces evaluation",
      "Financial feasibility assessment",
      "Strategic recommendations",
    ],
    skills: [
      "Market research",
      "Strategic frameworks",
      "Financial modeling",
      "Presentation skills",
    ],
    takeaways: [
      "Developed comprehensive market entry framework",
      "Identified key success factors for expansion",
      "Created risk mitigation strategies",
    ],
    outcome:
      "Provided actionable market entry strategy with clear go/no-go criteria and implementation roadmap.",
  },
  "operational-efficiency": {
    title: "Operational Efficiency Review",
    overview:
      "Process improvement initiative analyzing workflow bottlenecks and recommending optimization strategies to enhance operational performance.",
    role: ["Operations Analyst", "Process Improvement Lead", "Individual project"],
    challenge:
      "The organization experienced significant inefficiencies in core processes, leading to increased costs and delayed deliverables.",
    workItems: [
      "Process mapping and analysis",
      "Bottleneck identification",
      "Benchmarking against best practices",
      "Implementation planning",
    ],
    skills: [
      "Process analysis",
      "Data interpretation",
      "Change management",
      "Stakeholder communication",
    ],
    takeaways: [
      "Identified 30% potential efficiency gains",
      "Mapped end-to-end process flows",
      "Developed phased implementation plan",
    ],
    outcome:
      "Delivered comprehensive efficiency improvement plan with projected cost savings and timeline for implementation.",
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/#projects">
            <Button variant="outline">Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Portfolio</title>
        <meta name="description" content={project.overview} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-24 pb-20">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link to="/#projects" className="inline-block mb-8">
                <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Projects
                </Button>
              </Link>

              {/* Header */}
              <div className="mb-12">
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Content Grid */}
              <div className="grid gap-6">
                {/* Role */}
                <Card className="border-border/50 shadow-soft">
                  <CardHeader className="pb-4">
                    <CardTitle className="font-display text-lg flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      My Role
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.role.map((r) => (
                        <Badge key={r} variant="secondary" className="bg-secondary text-secondary-foreground">
                          {r}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Challenge */}
                <Card className="border-border/50 shadow-soft">
                  <CardHeader className="pb-4">
                    <CardTitle className="font-display text-lg flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                        <AlertCircle className="w-5 h-5 text-destructive" />
                      </div>
                      The Challenge
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                  </CardContent>
                </Card>

                {/* What I Worked On */}
                <Card className="border-border/50 shadow-soft">
                  <CardHeader className="pb-4">
                    <CardTitle className="font-display text-lg flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Target className="w-5 h-5 text-primary" />
                      </div>
                      What I Worked On
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {project.workItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Skills */}
                  <Card className="border-border/50 shadow-soft">
                    <CardHeader className="pb-4">
                      <CardTitle className="font-display text-lg flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-accent" />
                        </div>
                        Skills Demonstrated
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-accent/10 text-accent border-0"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Takeaways */}
                  <Card className="border-border/50 shadow-soft">
                    <CardHeader className="pb-4">
                      <CardTitle className="font-display text-lg flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Lightbulb className="w-5 h-5 text-primary" />
                        </div>
                        Key Takeaways
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {project.takeaways.map((takeaway, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            {takeaway}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Outcome */}
                <Card className="border-primary/20 bg-primary/5 shadow-soft">
                  <CardHeader className="pb-4">
                    <CardTitle className="font-display text-lg flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      Outcome
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground font-medium leading-relaxed">{project.outcome}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProjectDetail;
