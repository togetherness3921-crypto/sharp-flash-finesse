import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import StepSection from "@/components/StepSection";
import { TextSizeProvider } from "@/contexts/TextSizeContext";

const Index = () => {
  const handleDownload = () => {
    // Placeholder for download functionality
    console.log("Download initiated");
  };

  return (
    <TextSizeProvider>
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {/* Hero Line 1 */}
        <HeroSection>
          <span className="text-center block">A DEAD SIMPLE</span>
        </HeroSection>

        {/* Hero Line 2 */}
        <HeroSection>
          <span className="text-center block">SUPER STRAIGHTFORWARD</span>
        </HeroSection>

        {/* Hero Line 3 */}
        <HeroSection>
          <div className="text-center">
            <span className="block">ZERO FRUSTRATION</span>
            <p className="text-lg sm:text-xl italic opacity-70 -mt-1" style={{ fontSize: '1rem', fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>
              *maybe a little frustration
            </p>
          </div>
        </HeroSection>

        {/* Hero Line 4 - Site Setup Guide */}
        <HeroSection>
          <span className="text-center block">SITE SETUP GUIDE</span>
        </HeroSection>

        {/* Step 1 */}
        <StepSection step={1} inverted>
          <div className="flex flex-col items-center gap-4">
            <span>DOWNLOAD</span>
            <Button 
              variant="sharp" 
              onClick={handleDownload}
              className="animate-pulse-subtle relative"
              style={{ fontSize: 'inherit', height: 'auto', padding: '0.5em 1em' }}
            >
              THIS
              <span className="absolute top-full left-1/2 -translate-x-1/2 text-foreground opacity-70" style={{ fontSize: '0.8rem', fontWeight: 400, textTransform: 'none', letterSpacing: 'normal', marginTop: '-18px' }}>
                (CLICK)
              </span>
            </Button>
          </div>
        </StepSection>

        {/* Step 2 */}
        <StepSection step={2} inverted>
          <span>LOGIN TO GODADDY</span>
        </StepSection>

        {/* Step 3 */}
        <StepSection step={3} inverted>
          <div className="border-4 border-dashed border-background p-8 sm:p-12">
            <p className="opacity-60" style={{ fontSize: '1rem', fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>
              [Animation placeholder - Step 3]
            </p>
          </div>
        </StepSection>

        {/* Step 4 */}
        <StepSection step={4} inverted>
          <div className="border-4 border-dashed border-background p-8 sm:p-12">
            <p className="opacity-60" style={{ fontSize: '1rem', fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>
              [Animation placeholder - Step 4]
            </p>
          </div>
        </StepSection>

        {/* Step 5 */}
        <StepSection step={5} inverted>
          <div className="border-4 border-dashed border-background p-8 sm:p-12">
            <p className="mb-4">🎆 EXPLOSION 🎆</p>
            <p className="opacity-60" style={{ fontSize: '1rem', fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>
              [Your amazing meme animation goes here]
            </p>
          </div>
        </StepSection>
      </main>
    </TextSizeProvider>
  );
};

export default Index;
