import React, { createContext, useState, ReactNode, useContext } from 'react';

type GlicRateHeightType = {
  heightGlicRate?: boolean;
  setHeightGlicRate?: (value: boolean) => void;
};

const GlicRateHeightContext = createContext<GlicRateHeightType | false>(false);

export const GlicRateProvider = ({ children }: { children: ReactNode }) => {
  const [heightGlicRate, setHeightGlicRate] = useState(false);

  return (
    <GlicRateHeightContext.Provider value={{ heightGlicRate, setHeightGlicRate }}>
      {children}
    </GlicRateHeightContext.Provider>
  );
};

export const useGlicRateHeight = () => {
  const context = useContext(GlicRateHeightContext);
  if (!context) {
    throw new Error('GlicRateHeightContext must be used within a GlicRateHeightProvider');
  }
  return context;
};
