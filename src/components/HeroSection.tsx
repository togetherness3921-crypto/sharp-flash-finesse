import { useEffect, useRef, useState, ReactNode } from "react";
import { useTextSize } from "@/contexts/TextSizeContext";

interface HeroSectionProps {
  children: ReactNode;
}

const HeroSection = ({ children }: HeroSectionProps) => {
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

  return (
    <div
      ref={ref}
      className="h-screen flex-shrink-0 snap-start snap-always flex items-center justify-center bg-background px-4 sm:px-8"
    >
      <div
        className={`transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
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
  );
};

export default HeroSection;
