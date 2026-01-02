import { Mail, Linkedin, FileText, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Let's Connect
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Interested in collaboration or opportunities? I'd love to hear from you.
            </p>
          </div>

          <Card className="border-border/50 shadow-elevated">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center gap-8">
                {/* Contact Links */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                  <a
                    href="mailto:yourname@email.com"
                    className="flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors w-full sm:w-auto"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">yourname@email.com</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/yourname"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors w-full sm:w-auto"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">LinkedIn Profile</span>
                  </a>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 w-full max-w-sm">
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-muted-foreground text-sm">or</span>
                  <div className="flex-1 h-px bg-border" />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button
                    size="lg"
                    className="gap-2 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft"
                  >
                    <FileText className="w-4 h-4" />
                    Download CV
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 px-8 border-border hover:bg-secondary"
                    asChild
                  >
                    <a href="mailto:yourname@email.com">
                      <Send className="w-4 h-4" />
                      Send Message
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
