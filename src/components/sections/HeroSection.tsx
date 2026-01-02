import { ArrowDown, FileText, Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-muted/30" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Overline */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Briefcase className="w-4 h-4" />
            Business Postgraduate
          </div>

          {/* Name */}
          <h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Your Name
          </h1>

          {/* Tagline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground font-medium mb-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Strategy • Analysis • Operations
          </p>

          {/* Description */}
          <p 
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Business postgraduate with a strong analytical mindset, focused on solving 
            real-world business problems through data-driven insights, strategic thinking, 
            and practical recommendations.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button
              size="lg"
              className="gap-2 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft"
              onClick={() => scrollToSection("#projects")}
            >
              <Briefcase className="w-4 h-4" />
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 px-8 border-border hover:bg-secondary"
            >
              <FileText className="w-4 h-4" />
              Download CV
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="gap-2 text-muted-foreground hover:text-foreground"
              onClick={() => scrollToSection("#contact")}
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection("#about")}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
