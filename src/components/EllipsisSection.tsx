import { useEffect, useRef, useState, useCallback } from "react";

const EllipsisSection = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showExplosion, setShowExplosion] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const explosionRef = useRef<HTMLDivElement>(null);

  const scrollToExplosion = useCallback(() => {
    if (explosionRef.current) {
      explosionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          // Animate each line appearing
          const lines = 4;
          for (let i = 1; i <= lines; i++) {
            setTimeout(() => setVisibleLines(i), i * 400);
          }
          // Show explosion placeholder after all lines
          setTimeout(() => {
            setShowExplosion(true);
            // Auto-scroll to center the explosion after it appears
            setTimeout(scrollToExplosion, 100);
          }, lines * 400 + 600);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasTriggered, scrollToExplosion]);

  return (
    <div
      ref={sectionRef}
      className="min-h-[30vh] flex items-center justify-center px-4 sm:px-8 py-8"
    >
      <div className="w-full max-w-5xl">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
          <div className="flex-shrink-0">
            <span className="text-display-md opacity-40">STEP 5:</span>
          </div>
          <div className="flex-1 flex flex-col">
            {/* Ellipses - aligned with step label */}
            <div className="flex flex-col gap-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`text-display-lg transition-all duration-500 ${
                    visibleLines > i
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ marginLeft: `${i * 2}rem` }}
                >
                  ...
                </div>
              ))}
            </div>
            
            {/* Explosion placeholder */}
            <div
              ref={explosionRef}
              className={`mt-12 transition-all duration-700 scroll-mt-8 ${
                showExplosion
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
              }`}
            >
              <div className="border-4 border-dashed border-background p-8 sm:p-12 text-center">
                <p className="text-display-md mb-4">🎆 EXPLOSION 🎆</p>
                <p className="text-lg opacity-60 uppercase tracking-wider">
                  [Your amazing meme animation goes here]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EllipsisSection;