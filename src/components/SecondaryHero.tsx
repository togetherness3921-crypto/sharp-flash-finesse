import { useEffect, useRef, useState } from "react";

interface SecondaryHeroProps {
  lines: { text: string; align?: "left" | "right" | "center" }[];
}

const SecondaryHero = ({ lines }: SecondaryHeroProps) => {
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

  const getAlignment = (align?: "left" | "right" | "center") => {
    switch (align) {
      case "left":
        return "text-left";
      case "right":
        return "text-right";
      default:
        return "text-center";
    }
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {lines.map((line, index) => (
        <div
          key={line.text}
          className={`w-full ${getAlignment(line.align)} transition-all duration-700 ease-out`}
          style={{
            transitionDelay: `${index * 150}ms`,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(60px)",
          }}
        >
          <span className="text-display-xl block">{line.text}</span>
        </div>
      ))}
    </section>
  );
};

export default SecondaryHero;
