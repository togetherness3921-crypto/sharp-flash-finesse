import { useEffect, useRef, useState } from "react";

interface StepSectionProps {
  step: number;
  children: React.ReactNode;
  delay?: number;
  inverted?: boolean;
}

const StepSection = ({ step, children, delay = 0, inverted = false }: StepSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="min-h-[30vh] flex items-center justify-center px-4 sm:px-8 py-8"
    >
      <div
        className={`w-full max-w-5xl transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-12"
        }`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <div className="flex-shrink-0">
            <span className={`text-display-md ${inverted ? 'opacity-40' : 'opacity-40'}`}>
              STEP {step}:
            </span>
          </div>
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSection;