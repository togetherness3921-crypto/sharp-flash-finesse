import { useEffect, useState, useRef } from "react";

const Divider = () => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(100), 100);
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
    <div ref={ref} className="py-4 px-2 sm:px-4 overflow-hidden">
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <div 
          className="h-1 sm:h-2 bg-foreground transition-all duration-700 ease-out"
          style={{ width: `${width * 0.45}%` }}
        />
        <div className="flex gap-1 sm:gap-2">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-2 h-2 sm:w-3 sm:h-3 bg-foreground rotate-45 transition-all duration-500"
              style={{ 
                transitionDelay: `${i * 100 + 300}ms`,
                opacity: width > 0 ? 1 : 0,
                transform: width > 0 ? 'rotate(45deg) scale(1)' : 'rotate(45deg) scale(0)'
              }}
            />
          ))}
        </div>
        <div 
          className="h-1 sm:h-2 bg-foreground transition-all duration-700 ease-out"
          style={{ width: `${width * 0.45}%` }}
        />
      </div>
    </div>
  );
};

export default Divider;
