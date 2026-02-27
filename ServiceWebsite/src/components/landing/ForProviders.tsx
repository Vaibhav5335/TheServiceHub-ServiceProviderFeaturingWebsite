import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Calendar, 
  DollarSign, 
  BarChart3, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const ForProviders = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Access thousands of potential customers actively looking for your services.",
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Set your own availability and accept jobs that fit your schedule.",
    },
    {
      icon: DollarSign,
      title: "Secure Payments",
      description: "Get paid on time with our secure payment processing system.",
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Track your performance with detailed insights and analytics dashboard.",
    },
  ];

  const features = [
    "Free to join and create your profile",
    "Set your own prices and services",
    "Real-time messaging with clients",
    "Build your reputation with reviews",
    "Dedicated provider support team",
  ];

  return (
    <section id="providers" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              For Service Providers
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Expand Your Reach, Grow Your Income
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of service professionals who are building successful businesses on our platform. Get discovered by customers in your area.
            </p>

            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="accent" size="xl">
              Start Earning Today
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForProviders;
