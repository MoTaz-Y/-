import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { AwarenessSection } from "@/components/sections/AwarenessSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans rtl-grid selection:bg-primary/30 selection:text-primary">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <ImpactSection />
        <CaseStudySection />
        <AwarenessSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
