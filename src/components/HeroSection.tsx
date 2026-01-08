import { useEffect, useRef, useState } from "react";

interface HeroSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const HeroSection = ({ children, className = "", delay = 0 }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 sm:px-8 ${className}`}
    >
      <div
        className={`w-full transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
