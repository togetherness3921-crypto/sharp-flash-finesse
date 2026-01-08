import { createContext, useContext, ReactNode } from "react";
import { useResponsiveTextSize } from "@/hooks/useResponsiveTextSize";

interface TextSizeContextType {
  fontSize: number;
  isCalculated: boolean;
}

const TextSizeContext = createContext<TextSizeContextType>({
  fontSize: 100,
  isCalculated: false,
});

export const useTextSize = () => useContext(TextSizeContext);

export const TextSizeProvider = ({ children }: { children: ReactNode }) => {
  const { fontSize, isCalculated } = useResponsiveTextSize();

  return (
    <TextSizeContext.Provider value={{ fontSize, isCalculated }}>
      {isCalculated ? children : null}
    </TextSizeContext.Provider>
  );
};
