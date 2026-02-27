import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Ready to get started?</span>
          </div>

          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Join the Future of Service Marketplace
          </h2>

          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you're looking for services or looking to offer them, ServiceHub connects you with the right people. Start your journey today.
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Find a Service
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="accent" size="xl">
              Become a Provider
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 mt-12 pt-12 border-t border-border">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">50,000+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Active Providers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">1M+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Services Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">4.9/5</div>
              <div className="text-xs md:text-sm text-muted-foreground">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">$50M+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Paid to Providers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
