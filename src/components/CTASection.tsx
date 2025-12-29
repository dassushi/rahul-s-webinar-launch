import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Limited Seats.{" "}
            <span className="text-gradient-gold">Are You In?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Take the first step toward building your own brand — not someone else's.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-muted/50 border border-border rounded-full px-4 py-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm">Only 100 spots available</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 border border-border rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm">No tech skills required</span>
            </div>
          </div>

          <Button variant="hero" size="xl" className="group text-lg">
            🚀 Join the Free Orientation Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-muted-foreground text-sm mt-6">
            It takes only 90 days to build your own brand — learn the process in two hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
