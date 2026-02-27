import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Homeowner",
      avatar: "SM",
      rating: 5,
      content: "Found an amazing electrician within hours. The quote comparison feature saved me hundreds of dollars. Highly recommend!",
    },
    {
      name: "Marcus Johnson",
      role: "Plumbing Pro",
      avatar: "MJ",
      rating: 5,
      content: "As a service provider, this platform has transformed my business. I've tripled my client base in just 6 months.",
    },
    {
      name: "Emily Chen",
      role: "Business Owner",
      avatar: "EC",
      rating: 5,
      content: "We use ServiceHub for all our office maintenance needs. The verified professionals give us peace of mind.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-dark">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-glow text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Loved by Thousands
          </h2>
          <p className="text-lg text-primary-foreground/70">
            See what our community of customers and service providers have to say about their experience.
          </p>
        </div>

        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-primary-foreground/10 hover:border-primary/30 transition-all duration-300"
            >
              
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/30" />

              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-primary-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary-foreground/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
