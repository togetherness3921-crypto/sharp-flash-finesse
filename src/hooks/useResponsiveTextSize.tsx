import { useState, useEffect, useCallback } from "react";

export const useResponsiveTextSize = () => {
  const [fontSize, setFontSize] = useState<number>(100);
  const [isCalculated, setIsCalculated] = useState(false);

  const calculateFontSize = useCallback(() => {
    // Create a temporary element to measure "STRAIGHTFORWARD"
    const testElement = document.createElement("span");
    testElement.style.position = "absolute";
    testElement.style.visibility = "hidden";
    testElement.style.whiteSpace = "nowrap";
    testElement.style.fontFamily = "'Space Grotesk', sans-serif";
    testElement.style.fontWeight = "700";
    testElement.style.textTransform = "uppercase";
    testElement.style.letterSpacing = "-0.02em";
    testElement.innerText = "STRAIGHTFORWARD";
    document.body.appendChild(testElement);

    // Get available width (viewport width minus padding)
    const availableWidth = window.innerWidth - 64; // 32px padding on each side
    
    // Binary search for the right font size
    let min = 10;
    let max = 300;
    let optimalSize = min;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      testElement.style.fontSize = `${mid}px`;
      
      if (testElement.offsetWidth <= availableWidth) {
        optimalSize = mid;
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    document.body.removeChild(testElement);
    setFontSize(optimalSize);
    setIsCalculated(true);
  }, []);

  useEffect(() => {
    calculateFontSize();
    
    const handleResize = () => {
      calculateFontSize();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateFontSize]);

  return { fontSize, isCalculated };
};
