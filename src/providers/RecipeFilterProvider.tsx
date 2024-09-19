import React, { ReactNode } from 'react';
import { RecipeGlicFilterProvider } from './RecipeGlicFilterProvider';
import { RecipeMealFilterProvider } from './RecipeMealFilterProvider';

const CombinedProvider = ({ children }: { children: ReactNode }) => {
  return (
    <RecipeMealFilterProvider>
      <RecipeGlicFilterProvider>{children}</RecipeGlicFilterProvider>
    </RecipeMealFilterProvider>
  );
};

export default CombinedProvider;
