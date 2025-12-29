import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I used to sell only on Meesho. Now I run my own website and earn 3× more margin.",
      name: "Priya",
      location: "Surat",
    },
    {
      quote: "Rahul's system helped me launch my website in 10 days. My customers now shop directly from me.",
      name: "Imran",
      location: "Lucknow",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real results from real sellers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 shadow-card"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-primary font-bold">{testimonial.name[0]}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
