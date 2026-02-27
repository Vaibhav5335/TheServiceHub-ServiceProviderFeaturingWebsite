import { Search, MessageSquare, Calendar, Star } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Search & Discover",
      description: "Browse verified service providers in your area. Filter by ratings, price, and availability.",
      color: "primary",
    },
    {
      icon: MessageSquare,
      step: "02",
      title: "Get Quotes",
      description: "Receive competitive quotes from multiple providers. Compare prices and services easily.",
      color: "accent",
    },
    {
      icon: Calendar,
      step: "03",
      title: "Book & Pay",
      description: "Schedule your service at a convenient time. Pay securely through our platform.",
      color: "success",
    },
    {
      icon: Star,
      step: "04",
      title: "Rate & Review",
      description: "Share your experience to help others. Build trust in our community.",
      color: "primary",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get your service done in four easy steps. From search to completion, we've streamlined everything for you.
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
            >
              
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {step.step}
              </div>

              
              <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${
                step.color === 'primary' ? 'bg-primary/10' : 
                step.color === 'accent' ? 'bg-accent/10' : 'bg-success/10'
              }`}>
                <step.icon className={`w-8 h-8 ${
                  step.color === 'primary' ? 'text-primary' : 
                  step.color === 'accent' ? 'text-accent' : 'text-success'
                }`} />
              </div>

              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
