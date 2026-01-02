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
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image */}
            <div 
              className="relative flex-shrink-0 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-soft bg-secondary">
                {/* Replace src with your actual image */}
                <img 
                  src="/placeholder.svg" 
                  alt="Your Name - Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/10 scale-110" />
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Overline */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                <Briefcase className="w-4 h-4" />
                Business Postgraduate
              </div>

              {/* Name */}
              <h1 
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                Your Name
              </h1>

              {/* Tagline */}
              <p 
                className="text-lg md:text-xl text-muted-foreground font-medium mb-4 animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                Strategy • Analysis • Operations
              </p>

              {/* Description */}
              <p 
                className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-fade-up"
                style={{ animationDelay: "0.5s" }}
              >
                Business postgraduate with a strong analytical mindset, focused on solving 
                real-world business problems through data-driven insights, strategic thinking, 
                and practical recommendations.
              </p>

              {/* CTA Buttons */}
              <div 
                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-up"
                style={{ animationDelay: "0.6s" }}
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
