import React, { createContext, useState, ReactNode, useContext } from 'react';

type MealHeightType = {
  heightMeal?: boolean;
  setHeightMeal?: (value: boolean) => void;
};

const MealHeightContext = createContext<MealHeightType | undefined>(undefined);

export const MealHeightProvider = ({ children }: { children: ReactNode }) => {
  const [heightMeal, setHeightMeal] = useState(false);

  return (
    <MealHeightContext.Provider value={{ heightMeal, setHeightMeal }}>
      {children}
    </MealHeightContext.Provider>
  );
};

export const useMealHeight = () => {
  const context = useContext(MealHeightContext);
  if (!context) {
    throw new Error('MealHeightContext must be used within a MealHeightProvider');
  }
  return context;
};
