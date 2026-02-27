import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-marketplace.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "50K+", label: "Service Providers" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Shield, value: "100%", label: "Verified Pros" },
  ];

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-gradient-hero">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-slide-up">
              <Star className="w-4 h-4 fill-current" />
              <span>Trusted by 100,000+ customers</span>
            </div>

            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up stagger-1">
              Find Trusted{" "}
              <span className="text-primary">Service Professionals</span>{" "}
              Near You
            </h1>

            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up stagger-2">
              Connect with verified service providers for any task. From home repairs to professional services — get quotes, compare, and book with confidence.
            </p>

            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-up stagger-3">
              <Button variant="hero" size="xl">
                Find a Service
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Become a Provider
              </Button>
            </div>

            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-10 animate-slide-up stagger-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center lg:flex-row lg:items-center gap-2 lg:gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs lg:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="relative animate-slide-up stagger-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Service marketplace professionals"
                className="w-full h-auto object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            
            <div className="absolute -top-4 -left-4 lg:-left-8 bg-card rounded-xl p-4 shadow-xl border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-success fill-success" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Top Rated</div>
                  <div className="text-sm text-muted-foreground">500+ 5-star reviews</div>
                </div>
              </div>
            </div>

            
            <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-card rounded-xl p-4 shadow-xl border border-border animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Secure Booking</div>
                  <div className="text-sm text-muted-foreground">Money-back guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
