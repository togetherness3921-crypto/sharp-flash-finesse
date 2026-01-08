import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import Divider from "@/components/Divider";
import StepSection from "@/components/StepSection";
import EllipsisSection from "@/components/EllipsisSection";

const Index = () => {
  const handleDownload = () => {
    // Placeholder for download functionality
    console.log("Download initiated");
  };

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      {/* Combined Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-12">
        <div className="w-full flex flex-col items-center gap-0">
          <h1 
            className="text-display-xl text-center animate-hero-reveal"
            style={{ animationDelay: '0.1s' }}
          >
            AZAZ'S DEAD SIMPLE
          </h1>
          <h2 
            className="text-display-xl text-center animate-hero-reveal"
            style={{ animationDelay: '0.3s' }}
          >
            SUPER STRAIGHTFORWARD
          </h2>
          <h3 
            className="text-display-xl text-center animate-hero-reveal"
            style={{ animationDelay: '0.5s' }}
          >
            NO BS SITE SETUP
          </h3>
        </div>
      </section>

      {/* Themed Divider */}
      <Divider />

      {/* Step 1 */}
      <StepSection step={1}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className="text-display-lg">DOWNLOAD</span>
          <Button 
            variant="sharp" 
            size="xl"
            onClick={handleDownload}
            className="animate-pulse-subtle"
          >
            THIS
          </Button>
        </div>
      </StepSection>

      {/* Step 2 */}
      <StepSection step={2} delay={100}>
        <span className="text-display-lg">LOGIN TO GODADDY</span>
      </StepSection>

      {/* Step 3 */}
      <StepSection step={3} delay={200}>
        <div className="border-4 border-dashed border-foreground p-8 sm:p-12 text-center">
          <p className="text-lg opacity-60 uppercase tracking-wider">
            [Animation placeholder - Step 3]
          </p>
        </div>
      </StepSection>

      {/* Step 4 */}
      <StepSection step={4} delay={300}>
        <div className="border-4 border-dashed border-foreground p-8 sm:p-12 text-center">
          <p className="text-lg opacity-60 uppercase tracking-wider">
            [Animation placeholder - Step 4]
          </p>
        </div>
      </StepSection>

      {/* Step 5 with ellipses and explosion */}
      <EllipsisSection />

      {/* Footer */}
      <footer className="py-16 text-center border-t-4 border-foreground">
        <p className="text-sm uppercase tracking-widest opacity-60">
          Made with zero bs
        </p>
      </footer>
    </main>
  );
};

export default Index;
