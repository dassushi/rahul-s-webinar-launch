import { Award, Users, Briefcase, Instagram } from "lucide-react";
import rahulSpeaking from "@/assets/rahul-speaking.jpg";
import rahulPodcast from "@/assets/rahul-podcast.png";

const MentorSection = () => {
  const credentials = [
    { icon: Award, label: "IIM Ahmedabad Alumni" },
    { icon: Briefcase, label: "Founder & CEO – Qurbat Clothing" },
    { icon: Users, label: "15,000+ Sellers Trained" },
    { icon: Instagram, label: "2M+ Social Media Following" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container relative">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Meet Your Mentor</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-gradient-gold">Rahul Sharma</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-transparent rounded-xl blur-sm" />
                <img
                  src={rahulSpeaking}
                  alt="Rahul Sharma speaking at event"
                  className="relative rounded-xl w-full h-64 object-cover shadow-lg"
                />
              </div>
              <div className="relative mt-8">
                <div className="absolute -inset-1 bg-gradient-to-br from-secondary/30 to-transparent rounded-xl blur-sm" />
                <img
                  src={rahulPodcast}
                  alt="Rahul Sharma on podcast"
                  className="relative rounded-xl w-full h-64 object-cover shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card/50 border border-border rounded-lg p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Rahul has helped <span className="text-primary font-semibold">15,000+ Indian sellers</span> build their own clothing brands and grow independent businesses online — no coding, no big budgets.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 py-2">
              <p className="text-foreground italic text-lg">
                "You don't need a tech background or big team — just the right guidance and 90 days of focus."
              </p>
              <cite className="text-primary font-medium mt-2 block">— Rahul Sharma</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
