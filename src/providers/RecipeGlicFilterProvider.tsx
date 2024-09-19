import React, { createContext, useState, ReactNode, useContext } from 'react';

type RecipeFilterContextGlicType = {
  lowGlic: boolean;
  setLowGlic: (value: boolean) => void;
  mediumGlic: boolean;
  setMediumGlic: (value: boolean) => void;
};

const RecipeFilterGlicContext = createContext<RecipeFilterContextGlicType | undefined>(undefined);

export const RecipeGlicFilterProvider = ({ children }: { children: ReactNode }) => {
  const [lowGlic, setLowGlic] = useState(false);
  const [mediumGlic, setMediumGlic] = useState(false);

  return (
    <RecipeFilterGlicContext.Provider value={{ lowGlic, setLowGlic, mediumGlic, setMediumGlic }}>
      {children}
    </RecipeFilterGlicContext.Provider>
  );
};

export const useRecipeGlicFilter = () => {
  const context = useContext(RecipeFilterGlicContext);
  if (!context) {
    throw new Error('useRecipeFilter must be used within a RecipeFilterProvider');
  }
  return context;
};
