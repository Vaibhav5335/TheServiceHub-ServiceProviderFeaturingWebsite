import { 
  Wrench, 
  Sparkles, 
  Zap, 
  Paintbrush, 
  Truck, 
  Shield, 
  Scissors, 
  Monitor,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceCategories = () => {
  const categories = [
    {
      icon: Wrench,
      name: "Plumbing",
      count: "2,450+ providers",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: Zap,
      name: "Electrical",
      count: "1,830+ providers",
      color: "bg-yellow-500/10 text-yellow-500",
    },
    {
      icon: Sparkles,
      name: "Cleaning",
      count: "3,200+ providers",
      color: "bg-cyan-500/10 text-cyan-500",
    },
    {
      icon: Paintbrush,
      name: "Painting",
      count: "980+ providers",
      color: "bg-pink-500/10 text-pink-500",
    },
    {
      icon: Truck,
      name: "Moving",
      count: "1,540+ providers",
      color: "bg-orange-500/10 text-orange-500",
    },
    {
      icon: Shield,
      name: "Security",
      count: "720+ providers",
      color: "bg-red-500/10 text-red-500",
    },
    {
      icon: Scissors,
      name: "Beauty",
      count: "2,100+ providers",
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      icon: Monitor,
      name: "IT Services",
      count: "1,650+ providers",
      color: "bg-emerald-500/10 text-emerald-500",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Browse Categories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Popular Service Categories
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our wide range of professional services. Whatever you need done, we have verified experts ready to help.
          </p>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-5 lg:p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 lg:w-7 lg:h-7" />
              </div>
              <h3 className="text-base lg:text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-xs lg:text-sm text-muted-foreground">
                {category.count}
              </p>
            </div>
          ))}
        </div>

        
        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Categories
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
