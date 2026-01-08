import { useEffect, useRef, useState } from "react";

interface StepSectionProps {
  step: number;
  children: React.ReactNode;
  delay?: number;
}

const StepSection = ({ step, children, delay = 0 }: StepSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="py-6 sm:py-8 px-4 sm:px-8"
    >
      <div
        className={`w-full max-w-6xl mx-auto transition-all duration-500 ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-8"
        }`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
          <div className="flex-shrink-0">
            <span className="text-display-sm opacity-50">
              {step}.
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
