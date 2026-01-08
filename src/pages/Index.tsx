import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import Divider from "@/components/Divider";
import StepSection from "@/components/StepSection";

const Index = () => {
  const handleDownload = () => {
    // Placeholder for download functionality
    console.log("Download initiated");
  };

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Hero Line 1 */}
      <HeroSection>
        <h1 className="text-display-xl text-center">
          A DEAD SIMPLE
        </h1>
      </HeroSection>

      {/* Hero Line 2 */}
      <HeroSection>
        <h2 className="text-display-xl text-center">
          SUPER STRAIGHTFORWARD
        </h2>
      </HeroSection>

      {/* Hero Line 3 */}
      <HeroSection>
        <div className="text-center">
          <h3 className="text-display-xl">
            ZERO FRUSTRATION
          </h3>
          <p className="text-lg sm:text-xl italic opacity-70 -mt-1">
            *maybe a little frustration
          </p>
        </div>
      </HeroSection>

      {/* Hero Line 4 - Site Setup */}
      <HeroSection>
        <h3 className="text-display-xl text-center">
          SITE SETUP
        </h3>
      </HeroSection>

      {/* Themed Divider */}
      <Divider />

      {/* Step 1 */}
      <StepSection step={1} inverted>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className="text-display-lg">DOWNLOAD</span>
          <Button 
            variant="sharp" 
            onClick={handleDownload}
            className="animate-pulse-subtle text-4xl sm:text-5xl h-20 sm:h-24 px-12 sm:px-16"
          >
            THIS
          </Button>
        </div>
      </StepSection>

      {/* Step 2 */}
      <StepSection step={2} inverted>
        <span className="text-display-lg">LOGIN TO GODADDY</span>
      </StepSection>

      {/* Step 3 */}
      <StepSection step={3} inverted>
        <div className="border-4 border-dashed border-background p-8 sm:p-12 text-center">
          <p className="text-lg opacity-60 uppercase tracking-wider">
            [Animation placeholder - Step 3]
          </p>
        </div>
      </StepSection>

      {/* Step 4 */}
      <StepSection step={4} inverted>
        <div className="border-4 border-dashed border-background p-8 sm:p-12 text-center">
          <p className="text-lg opacity-60 uppercase tracking-wider">
            [Animation placeholder - Step 4]
          </p>
        </div>
      </StepSection>

      {/* Step 5 */}
      <StepSection step={5} inverted>
        <div className="border-4 border-dashed border-background p-8 sm:p-12 text-center">
          <p className="text-display-md mb-4">🎆 EXPLOSION 🎆</p>
          <p className="text-lg opacity-60 uppercase tracking-wider">
            [Your amazing meme animation goes here]
          </p>
        </div>
      </StepSection>
    </main>
  );
};

export default Index;