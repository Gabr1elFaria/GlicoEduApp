import React, { createContext, useState, ReactNode, useContext } from 'react';

type RecipeFilterContextMealType = {
  breakfest: boolean;
  setBreakfest: (value: boolean) => void;
  lunch: boolean;
  setLunch: (value: boolean) => void;
  dinner: boolean;
  setDinner: (value: boolean) => void;
  snack: boolean;
  setSnack: (value: boolean) => void;
};

const RecipeFilterMealContext = createContext<RecipeFilterContextMealType | undefined>(undefined);

export const RecipeMealFilterProvider = ({ children }: { children: ReactNode }) => {
  const [breakfest, setBreakfest] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [snack, setSnack] = useState(false);

  return (
    <RecipeFilterMealContext.Provider
      value={{ breakfest, setBreakfest, lunch, setLunch, dinner, setDinner, snack, setSnack }}
    >
      {children}
    </RecipeFilterMealContext.Provider>
  );
};

export const useRecipeMealFilter = () => {
  const context = useContext(RecipeFilterMealContext);
  if (!context) {
    throw new Error('useRecipeMealFilter must be used within a RecipeMealFilterProvider');
  }
  return context;
};
