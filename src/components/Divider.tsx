import { useEffect, useState } from "react";

const Divider = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(100), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-16 px-4 sm:px-8 overflow-hidden">
      <div className="flex items-center justify-center gap-4">
        <div 
          className="h-1 bg-foreground transition-all duration-1000 ease-out"
          style={{ width: `${width * 0.4}%` }}
        />
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-3 h-3 bg-foreground rotate-45 transition-all duration-500"
              style={{ 
                transitionDelay: `${i * 100 + 300}ms`,
                opacity: width > 0 ? 1 : 0,
                transform: width > 0 ? 'rotate(45deg) scale(1)' : 'rotate(45deg) scale(0)'
              }}
            />
          ))}
        </div>
        <div 
          className="h-1 bg-foreground transition-all duration-1000 ease-out"
          style={{ width: `${width * 0.4}%` }}
        />
      </div>
    </div>
  );
};

export default Divider;
