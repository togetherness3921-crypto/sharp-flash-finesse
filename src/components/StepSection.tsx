import { useEffect, useRef, useState } from "react";
import { useTextSize } from "@/contexts/TextSizeContext";

interface StepSectionProps {
  step: number;
  children: React.ReactNode;
  inverted?: boolean;
}

const StepSection = ({ step, children, inverted = false }: StepSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { fontSize } = useTextSize();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Calculate proportional sizes based on the main font size
  const stepLabelSize = fontSize * 0.5;

  return (
    <div
      ref={ref}
      className={`h-screen flex-shrink-0 snap-start snap-always flex items-center justify-center px-4 sm:px-8 ${
        inverted ? 'bg-foreground text-background' : 'bg-background text-foreground'
      }`}
    >
      <div
        className={`text-center transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div 
          className="opacity-40 mb-4"
          style={{
            fontSize: `${stepLabelSize}px`,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          STEP {step}:
        </div>
        <div
          style={{
            fontSize: `${fontSize}px`,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default StepSection;
