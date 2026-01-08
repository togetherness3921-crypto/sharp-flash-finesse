import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const lines = [
    { text: "AZAZ", align: "text-right", delay: 0 },
    { text: "DEAD", align: "text-left", delay: 150 },
    { text: "SIMPLE", align: "text-right", delay: 300 },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center px-1 overflow-hidden"
    >
      {lines.map((line, index) => (
        <div
          key={line.text}
          className={`w-full ${line.align} transition-all duration-700 ease-out`}
          style={{
            transitionDelay: `${line.delay}ms`,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(60px)",
          }}
        >
          <span className="text-display-hero block leading-none">{line.text}</span>
        </div>
      ))}
    </section>
  );
};

export default HeroSection;
