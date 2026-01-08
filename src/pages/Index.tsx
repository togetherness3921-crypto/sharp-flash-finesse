import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SecondaryHero from "@/components/SecondaryHero";
import Divider from "@/components/Divider";
import StepSection from "@/components/StepSection";
import EllipsisSection from "@/components/EllipsisSection";

const Index = () => {
  const handleDownload = () => {
    console.log("Download initiated");
  };

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      {/* Hero: AZAZ / DEAD / SIMPLE */}
      <HeroSection />

      {/* SUPER STRAIGHTFORWARD */}
      <SecondaryHero 
        lines={[
          { text: "SUPER", align: "left" },
          { text: "STRAIGHT", align: "right" },
          { text: "FORWARD", align: "left" },
        ]} 
      />

      {/* NO BS SITE SETUP */}
      <SecondaryHero 
        lines={[
          { text: "NO BS", align: "right" },
          { text: "SITE", align: "left" },
          { text: "SETUP", align: "right" },
        ]} 
      />

      {/* Divider */}
      <Divider />

      {/* Inverted Section - Steps */}
      <section className="section-inverted py-12 sm:py-16">
        {/* Step 1 */}
        <StepSection step={1}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <span className="text-display-lg">DOWNLOAD</span>
            <Button 
              variant="sharp" 
              size="xl"
              onClick={handleDownload}
              className="animate-pulse-subtle bg-background text-foreground hover:bg-background/90"
            >
              THIS
            </Button>
          </div>
        </StepSection>

        {/* Step 2 */}
        <StepSection step={2} delay={50}>
          <span className="text-display-lg">LOGIN TO GODADDY</span>
        </StepSection>

        {/* Step 3 */}
        <StepSection step={3} delay={100}>
          <div className="border-2 border-dashed border-background/50 p-4 sm:p-6 text-center">
            <p className="text-sm opacity-60 uppercase tracking-wider">
              [Animation placeholder]
            </p>
          </div>
        </StepSection>

        {/* Step 4 */}
        <StepSection step={4} delay={150}>
          <div className="border-2 border-dashed border-background/50 p-4 sm:p-6 text-center">
            <p className="text-sm opacity-60 uppercase tracking-wider">
              [Animation placeholder]
            </p>
          </div>
        </StepSection>

        {/* Step 5 - Ellipsis & Explosion */}
        <EllipsisSection />
      </section>
    </main>
  );
};

export default Index;
