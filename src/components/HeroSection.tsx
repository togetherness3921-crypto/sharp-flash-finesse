import { useEffect, useRef, useState } from "react";

interface HeroSectionProps {
  children: React.ReactNode;
  className?: string;
}

const HeroSection = ({ children, className = "" }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
      className={`h-screen flex-shrink-0 snap-start snap-always flex items-center justify-center px-4 sm:px-8 bg-background text-foreground ${className}`}
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