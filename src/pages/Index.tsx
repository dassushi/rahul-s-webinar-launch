import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import PhaseSection from "@/components/PhaseSection";
import MentorSection from "@/components/MentorSection";
import WhatYouGet from "@/components/WhatYouGet";
import TestimonialsSection from "@/components/TestimonialsSection";
import BonusSection from "@/components/BonusSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhoIsThisFor />
      <ProblemSection />
      <PhaseSection />
      <MentorSection />
      <WhatYouGet />
      <TestimonialsSection />
      <BonusSection />
      <CTASection />
      <Footer />
      <StickyCtaBar />
    </main>
  );
};

export default Index;
