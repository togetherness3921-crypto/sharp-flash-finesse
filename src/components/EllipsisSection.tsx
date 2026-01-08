import { useEffect, useRef, useState } from "react";

const EllipsisSection = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showExplosion, setShowExplosion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate each line appearing
          const lines = 4;
          for (let i = 1; i <= lines; i++) {
            setTimeout(() => setVisibleLines(i), i * 400);
          }
          // Show explosion placeholder after all lines
          setTimeout(() => setShowExplosion(true), lines * 400 + 600);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-16"
    >
      <div className="w-full max-w-5xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <div className="flex-shrink-0">
            <span className="text-display-md opacity-40">STEP 5:</span>
          </div>
          <div className="flex-1">
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
              className={`mt-12 transition-all duration-700 ${
                showExplosion
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
              }`}
            >
              <div className="border-4 border-dashed border-foreground p-8 sm:p-12 text-center">
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
