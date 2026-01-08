import { useEffect, useRef, useState } from "react";

const EllipsisSection = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showExplosion, setShowExplosion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const lines = 4;
          for (let i = 1; i <= lines; i++) {
            setTimeout(() => setVisibleLines(i), i * 300);
          }
          setTimeout(() => setShowExplosion(true), lines * 300 + 400);
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
      className="py-6 sm:py-8 px-4 sm:px-8"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
          <div className="flex-shrink-0">
            <span className="text-display-sm opacity-50">5.</span>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`text-display-lg transition-all duration-400 ${
                    visibleLines > i
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ marginLeft: `${i * 1.5}rem` }}
                >
                  ...
                </div>
              ))}
            </div>
            
            {/* Explosion placeholder */}
            <div
              className={`mt-8 transition-all duration-500 ${
                showExplosion
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75"
              }`}
            >
              <div className="border-2 border-dashed border-background/50 p-6 sm:p-8 text-center">
                <p className="text-display-md mb-2">🎆</p>
                <p className="text-sm opacity-60 uppercase tracking-wider">
                  [Your explosion animation]
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
